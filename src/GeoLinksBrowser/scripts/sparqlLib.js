/**
 * @class SparqlLib <br>
 * @version 1.15
 * 0.1 - 0.7 lamer stuff <br>
 * 0.80 timeout hinzugefuegt <br>
 * 0.85 added Black-/Whitelistfunction to Filter Endpoints with no Virtuoso Sparql <br>
 * 0.90 ajusted Timeouts cause Transaction Timeouts have to be longer than the Sparql Execution Timeout <br>
 * 0.95 added jsonCallbackValue Control to avoid false Callback Values from Server <br>
 * 1.00 solved (the) this problem, stripped some debugging code, added checkLock for VirtuosoSparqlEndpoint-Test <br>
 * 1.10 complete rewrite to avoid the "no ajax to return" problem <br>
 * 1.15 heavy bugfixing, added reset function <br>
 */
function SparqlLib() {

    // Black- and Whitelist for URI's with no Virtuoso Sparql Endpoint
    this.endpointList = {};

    // stack of numbers for callback Value generating
    this.callbackStack = 0;

    /**
     * getCallbackVal - generates (pseudo) unique Callbackstring for Ajax/JsonP Callback
     */
    this.getCallbackVal = function()
    {
	if (this.callbackStack <= 100000)
	{
	    this.callbackStack ++;
	}
	else
	{
	    this.callbackStack = 0;
	}
	return ("fancyCallback" + this.callbackStack);	
    }

    /**
     * encodeQueryUrl - takes a query (string) and a URL from a Knowledgebase and looks <br>
     * up a switch-case table request-URI to a Virtuoso Sparql Endpoint <br>
     * if theres no table entry it returns null and getData tries to make a dynamic request <br>
     * optionally you can provide a timeout >2secs in milliseconds for the request (default 15secs) e.g. 10000 <br>
     * @param query The query thats sent to the Sparql Endpoint
     * @param base A String with a internetadress where a sparql endpoint could be
     * @param timeout Timeout for the request e.g. 10000 (milliseconds)
     */
    this.encodeQueryUrl = function(query, base, timeout)
    {
	//no timeout given, use as default 15s
	if (typeof timeout === "undefined")
	{
	    timeout = 15000;
	}

	//timeout under 2 secs has no sense make it two and a half second
	if (timeout <= 2000)
	{
	    timeout = 2500;
	}
	
        switch (base) {
        case 'http://linkedgeodata.org':
            return ('http://www.linkedgeodata.org/sparql?default-graph-uri=http%3A%2F%2Flinkedgeodata.org&query=' + encodeURIComponent(query) + '&format=application%2Fsparql-results%2Bjsonp&timeout=' + (timeout - 1000) + '&debug=on');
            break;
        case 'http://dbpedia.org':
            return ('http://www.dbpedia.org/sparql?default-graph-uri=http%3A%2F%2Fdbpedia.org&query=' + encodeURIComponent(query) + '&format=application%2Fsparql-results%2Bjsonp&timeout=' + (timeout - 1000)  + '&debug=on');    
            break;
        case 'Custom1':
            return 'customAdress1';
            break;
        case 'Custom2':
            return 'customAdress2';
            break;

        default:
	    // I don't know this URL
	    return null;
	    break;
	}
    }
    

    /**
     * noEndpointHandler - when a URI is Blacklisted cause there's no Virtuoso Sparql Endpoint this handler is called <br>
     * whenever a sparql query to this endpoint is made <br>
     */
    this.noEndpointHandler = function(succesCallback, errorCallback)
    {
	return null;
    }

    /**
     * makeUriNice - makes a nice kbase url <br>
     * it cuts of '/'es at the and, <br>
     * gives 'http://'less Uris their pride back, <br>
     * and takes a possible 'sparql' at the end away <br>
     * @param kbase the given Url 
     */
    this.makeUriNice = function(kbaseUrl)
    {

	//at the end of the kbase URI shouldnt be an /
        if(kbaseUrl.length-1 == kbaseUrl.lastIndexOf('/'))
        {
	    kbaseUrl = kbaseUrl.substr(0,kbaseUrl.length-1);
        }

	//at the end should be 'sparql'
	if(kbaseUrl.substring(kbaseUrl.length-6, kbaseUrl.length) == 'sparql')
	{
	    kbaseUrl = kbaseUrl.substring(0, kbaseUrl.length-6);
	}

	//at the end of the kbase URI shouldnt be an /
        if(kbaseUrl.length-1 == kbaseUrl.lastIndexOf('/'))
        {
	    kbaseUrl = kbaseUrl.substr(0,kbaseUrl.length-1);
        }

	//at the beginning there should be http://
	if(kbaseUrl.substring(0,7) != 'http://')
	{
	    kbaseUrl = 'http://' + kbaseUrl;
	}

	return kbaseUrl;
    }

    /**
     * getData - starts an ajax call to get json data from an Endpoint with an given query
     * @param kbase A String holding 'LGD' or 'DBPedia' or an URI of an possible Endpoint e.g. www.endpoint.de
     * @param query The query as a String
     * @param aForeignThis if u want to use this in the success handler give a this from your class
     * @param timeoutVar (Transaction) timeout for your query in milliseconds e.g. 10000
     * @param successCallback provide a Callback Function in case of Success of your request
     * @param errorCallvack provide a Callback Function in caser of an Error happening while your request is preformed
     */
    this.getData = function(kbase, query, aForeignThis, timeoutVar, successCallback, errorCallback)
    {

	// little helperVar
	var tested = false;

	// timeoutVar is optional, onDownloadCallback too
	if (arguments.length < 6)
	{
	    errorCallback = successCallback;
	    successCallback = timeoutVar;
	}

	// kbase should look like this: http://dingesname.org
	kbase = this.makeUriNice(kbase);

	// no timeoutVar given? take this one
	if (typeof timeoutVar === "undefined"){
	    timeoutVar = 15000;
	}
	
	// timeoutVar under 2 secs makes no sense
	if (timeoutVar <= 2000)
	{
	    timeoutVar = 2500;
	}

	// try to generate URL with query
	url = this.encodeQueryUrl(query, kbase, timeoutVar);

	// if it's a unknown adress, is it a sparql endpoint?
        if(url == null)
	{
	    // check for entry in Black- /Whitelist
	    if (this.endpointList.hasOwnProperty(kbase))
	    {
		// its checking wait some time and see whats the result
		if (this.endpointList[kbase] == "checking")
		{
		    setTimeout(null,10);
		}

		if (this.endpointList[kbase] == true)
		{
		    url = (kbase + '/sparql?&query=' + encodeURIComponent(query) + '&format=application%2Fsparql-results%2Bjsonp&timeout=' + (timeoutVar - 1000) + '&debug=on');
		}
		else
		{
		    // call the Handler
		    return this.noEndpointHandler(successCallback, errorCallback);
		}
	    } 
	    else 
	    {

		tested = true;

		console.log("Unknown Adress. Testing it");
		//not Black- or Whitelisted, ajax-check it
		// first set Lock so that it is checked only one time (bad english)
		this.endpointList[kbase] = "checking";

		// set vars for ajax Call
		// the query (only for testing if there's a virtuoso sparql endpoint)
		var endpointTestQuery = 'SELECT ?uri WHERE {?uri rdfs:subClassOf owl:Thing} limit 1';

		// the url
		var endpointTestURL = (kbase + '/sparql?&query=' + encodeURIComponent(endpointTestQuery) + '&format=application%2Fsparql-results%2Bjsonp&timeout=1001&debug=on');

		// the context with two 'this': the first one is from this class, the second one from the class using this class to perform a ajax call
		var contextObject = {"libThis" : this, "passedThis" : aForeignThis};

		jQuery.ajax({
		    url: endpointTestURL,
		    timeout: 4000,
		    dataType: 'jsonp',
		    context: contextObject,
		    jsonpCallback: callbackVar,

		    success: function(realData) {
 			// the test was a success, add adress to Whitelist
			this.libThis.endpointList[kbase] = true;

			// generate URL and set url (sparqlLib) (this is here the contextObject!)
   			this.libThis.URL = (kbase + '/sparql?&query=' + encodeURIComponent(query) + '&format=application%2Fsparql-results%2Bjsonp&timeout=' + (timeoutVar - 1000) + '&debug=on');

            gui.showMessageBox(this.libThis.URL);

			// performing real AJAX-Call for data
			var AJAX_URL = this.libThis.URL;
			
			// set vars for real AJAX-Call
			var callbackVar = this.libThis.getCallbackVal();
			var contextObject = this.passedThis;

			jQuery.ajax({
			    url: AJAX_URL,
			    timeout: timeoutVar,
			    dataType: 'jsonp',
			    jsonpCallback: callbackVar,
			    success: function(data) 
			    {
				successCallback.call(contextObject, data);
			    },

			    error: function(xhRequest, ErrorText, thrownError) 
			    {
				errorCallback.call(contextObject, xhRequest, ErrorText, thrownError);
			    },
			});
		    },
		    error: function (xhRequest, ErrorText, thrownError) {
			// add to Blacklist
			this.libThis.endpointList[kbase] = false;
			
			// error Callback
			errorCallback.call(contextObject.passedThis, xhRequest, ErrorText, thrownError);
		    }
		});

	    }
	}

	if (!tested)
	{
	    
	    // the url
	    var AJAX_URL = url;
	    // the callback string
	    var callbackVar = this.getCallbackVal();
	    // the context
	    var contextObject = aForeignThis;
		
	    jQuery.ajax({
		url: AJAX_URL,
		timeout: timeoutVar,
		dataType: 'jsonp',
		context: contextObject,
		jsonpCallback: callbackVar,
		success: function(data) 
		{
		    successCallback.call(contextObject, data);
		},
		error: function(xhRequest, ErrorText, thrownError) 
		{
		    errorCallback.call(contextObject, xhRequest, ErrorText, thrownError);
		},
	    });	
	}
    }
}
