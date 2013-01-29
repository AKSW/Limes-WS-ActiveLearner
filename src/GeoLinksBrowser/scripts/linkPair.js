/**
 * @class LinkPair <br>
 * new Object is created: LinkPair <br>
 * content: two mapPoint Objects, one for each link <br>
 * sparql querys for the name <br>
 * rating of the link by the user
 * @param addr1 first instance URL
 * @param addr2 second instance URL
 */
function LinkPair(addr1, addr2)
{

    this.name  = "LinkPair";

    this.name1 = addr1.substr(addr1.indexOf('//')+2, addr1.indexOf('g/')-6) + "/../" + addr1.substr(addr1.lastIndexOf('/')+1);
    this.name2 = addr2.substr(addr2.indexOf('//')+2, addr2.indexOf('g/')-6) + "/../" + addr2.substr(addr2.lastIndexOf('/')+1); //".../"+addr2.substr(addr2.lastIndexOf('/')+1);
    this.addr1 = addr1;
    this.addr2 = addr2;

    this.rating = 0;
    this.user;
    this.mapPoint1 = 0;
    this.mapPoint2 = 0;
    this.dataMapPoint1;
    this.dataMapPoint2;
    this.distance = null;
    this.id = 0;
    this.try = 0;
    
    /**
     * Rate a LinkPair
     * @param rating The rating (0 = unbewertet, 1 = ignore, 2 = wrong, 3 = correct)
     * @param user The username of the user who is logged in
     */
    this.setRating = function(rating, user)
    {
        this.rating = rating
        this.user = user
        linklist.selectLink(linklist.selected+1);
        linklist.showLinkList()
        //pcai042.informatik.uni-leipzig.de/~swp12-11/source/scripts/mysql.php?action=addlink&user_id=simon&addr1=wololo&addr2=ayooho&linkstate=accept
        
        /* Write things to mysql database */
        var mysqlAjax = 0; // Init phpAjax
        if (window.XMLHttpRequest) // If Browser supports XMLHttpRequest (not IE5/6)
        {
            mysqlAjax = new XMLHttpRequest();    // Create new XMLHttpRequest (Ajax)
        }
        else
        {
            mysqlAjax = new ActiveXObject("Microsoft.XMLHTTP"); // don't even think about how ugly html is
        }
        mysqlAjax.onreadystatechange = function()
        {
            /** if request was completed (4) without errors (200) */
            if (mysqlAjax.readyState==4 && mysqlAjax.status==200)
            {
                gui.message("Your rating was written to our database.");
                // TODO: (mysqlAjax.responseText) something with that
            }
        };
        var ratename = "";
        switch (this.rating)
        {
        case 0:
            ratename = "unsure";
            break;
        case 1:
            ratename = "ignore";
            break;
        case 2:
            ratename = "reject";
            break;
        case 3:
            ratename = "accept";
            break;
        }
        mysqlAjax.open("GET","scripts/mysql.php?action=addlink&user_id="+this.user+"&addr1="+this.addr1+"&addr2="+this.addr2+"&linkstate="+ratename,true);
        mysqlAjax.send();
        
    }

    this.setLabel = function(adress, identifier)
    {
        var kbase = adress.substring(0, adress.substring(adress.indexOf('//')+2).indexOf('/') + adress.indexOf('//') +3);
        //var query = 'SELECT ?label WHERE{ <' + adress + '> rdfs:label ?label}';
        /*var query = '\
          Prefix node:<'+adress+'>\
          SELECT ?label ?geo_lat ?geo_long\
          WHERE{\
          node: geo:lat ?geo_lat.\
          node: geo:long ?geo_long.\
          OPTIONAL {\
          node: rdfs:label ?label. FILTER langMatches(lang(?label), "EN")\
          }\
          }'*/

        var query = 'Prefix node:<'+adress+'> SELECT ?label ?olabel ?geo_lat ?geo_long WHERE{node: rdfs:label ?label. node: geo:lat ?geo_lat. node: geo:long ?geo_long. OPTIONAL {node: rdfs:label ?olabel.FILTER langMatches(lang(?olabel), "' + user.getSparqlTag()+ '")}}'

        onSuccess = function (realData) {
            linklist.incSuccess();
            if(realData.results.bindings.length == 0)
            {
                value = adress.substr(adress.lastIndexOf('/')+1);
            }
            else
            {
                //console.log(realData.results.bindings);
                json = realData.results.bindings[0];
                if (json.hasOwnProperty('olabel')) // english label
                {
                    value = json.label.value;
                }
                else
                {
                    lbl_nat = "";
                    lbl_en = "";
                    lbl_none = "";
                    for (l = 0; l < realData.results.bindings.length; l++)
                    {
                        if (realData.results.bindings[l].label.hasOwnProperty('xml:lang'))
                        {
                            if (realData.results.bindings[l].label['xml:lang'].toUpperCase() == user.getSparqlTag().toUpperCase())
                            {
                                lbl_nat = realData.results.bindings[l].label.value;
                            }
                            if (realData.results.bindings[l].label['xml:lang'].toUpperCase() == "EN")
                            {
                                lbl_en = realData.results.bindings[l].label.value;
                            }
                        } else {
                            if (lbl_none == "")
                            {
                                lbl_none = realData.results.bindings[l].label.value;
                            }
                            else
                            {
                                lbl_none += " / "+realData.results.bindings[l].label.value;
                            }
                        }
                    }
                    value = lbl_nat;
                    if (value == "") value = lbl_en;
                    if (value == "") value = lbl_none;
                    if (value == "") value = adress.substr(adress.lastIndexOf('/')+1);
                }
                if (json.hasOwnProperty('geo_lat') && json.hasOwnProperty('geo_long'))
                {
                    if (identifier == 1)
                    {
                        var wb = adress.substring(0, adress.substring(adress.indexOf('//')+2).indexOf('/') + adress.indexOf('//') +3);
                        this.mapPoint1 = new MapPoint();
                        this.dataMapPoint1 = new DataMapPoint();
                        // TODO: WORKAROUND FOR 'LGD'
                        // TODO: ID is DEPRECATED, set to 0
                        this.dataMapPoint1.init(wb, identifier, json.geo_long.value, json.geo_lat.value);
                        // TODO: what about "map"? o.O
                        this.mapPoint1.init(this.dataMapPoint1, map);
                        this.mapPoint1.showPoint();
                        // TODO: remove Points if new KDB is loaded.
                        // TODO: display selected
                    }
                    else
                    {
                        var wb = adress.substring(0, adress.substring(adress.indexOf('//')+2).indexOf('/') + adress.indexOf('//') +3);
                        this.mapPoint2 = new MapPoint();
                        this.dataMapPoint2 = new DataMapPoint();
                        this.dataMapPoint2.init(wb, identifier, json.geo_long.value, json.geo_lat.value);
                        this.mapPoint2.init(this.dataMapPoint2, map);
                        this.mapPoint2.showPoint();
                    }
                    if (this.mapPoint1 != 0 && this.mapPoint2 != 0)
                    {
                        var points = new Array(
                            new OpenLayers.Geometry.Point(this.dataMapPoint1.getLong(), this.dataMapPoint1.getLat()).transform(new OpenLayers.Projection("EPSG:4326"),map.map.getProjectionObject()),
                            new OpenLayers.Geometry.Point(this.dataMapPoint2.getLong(), this.dataMapPoint2.getLat()).transform(new OpenLayers.Projection("EPSG:4326"),map.map.getProjectionObject())
                        );
                        var line = new OpenLayers.Geometry.LineString(points);
                        var style = { strokeColor: '#000000', 
                                      strokeOpacity: 0.8,
                                      strokeWidth: 3
				    };
                        var lineFeature = new OpenLayers.Feature.Vector(line, null, style);
                        map.lineLayer.addFeatures([lineFeature]);
                        this.distance = lineFeature.geometry.getLength(); // hope these are meters or something
                    }
                }
            }
            if (identifier == 1)
            {
                this.name1 = value;
                linklist.runAjax();
            }
            else
            {
                this.name2 = value;
                //linklist.runAjax(); // nope, just once per pair
            }

        },

        onError = function (xhRequest, ErrorText, thrownError){
            value = adress.substr(adress.lastIndexOf('/')+1);
            if (identifier == 1)
            {
                this.name1 = value;
            }
            else
            {
                this.name2 = value;
            }
            this.try++;
            if (this.try < 5)
            {
                linklist.ajaxStack.push(linklist.ajaxStack[this.id]);
                linklist.runAjax();
            } else {
                linklist.incSuccess();
            }
        };
	var data = sparqlLib.getData(kbase, query, this, 10000, onSuccess, onError);
    }
    
    /*
     * Return Name 1
     * @return name1
     */
    this.getName1 = function()
    {
        return this.name1;
    }

    /*
     * Return Name 2
     * @return name2
     */
    this.getName2 = function()
    {
        return this.name2;
    }    
    
    /*
     * Return Rating
     * @return rating
     */
    this.getRating = function()
    {
        return this.rating;
    }    
    
    /*
     * Return dataMapPoint1
     * @return dataMapPoint1
     */
    this.getDataMapPoint1 = function()
    {
        return this.dataMapPoint1;
    }      

    /*
     * Return dataMapPoint2
     * @return dataMapPoint2
     */
    this.getDataMapPoint2 = function()
    {
        return this.dataMapPoint2;
    }     


    /*
     * open URL from subject and object in new browser-tab/window
     */
    this.resolveUrl = function()
    {
        window.open(this.addr1,'tab1');
        window.open(this.addr2,'tab2');
    } 
}
