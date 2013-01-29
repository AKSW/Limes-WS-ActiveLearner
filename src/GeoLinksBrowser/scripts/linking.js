/**
 * @class Linking <br>
 * gets Links as JSON object from SPARQL endpoint when given two class URL's from treeEvent
 * and passes it to parseJson from linklist
 * @author <a href="mailto:mam10crs@studserv.uni-leipzig.de">Lydia Lotzmann</a>
 * @author <a href="mailto:mam10hna@studserv.uni-leipzig.de">Dennis Konrad</a>
 * @version 2 (20.05.2012)
 */
function Linking()
{

    this.name = "Linking";
    
    this.know1Class = null;
    this.know2Class = null;
    this.know1Adress = null;
    this.know2Adress = null;
    this.know1URL = null;
    this.know2URL = null;

    // This needs to be updated when finishing the learner cycles... at the moment the learner throws exceptions so we cannot get a new metric after learning
    this.metric="MIN(trigrams(x.rdfs:label, y.rdfs:label), euclidean(x.wgs84:lat|wgs84:long, y.wgs84:lat|wgs84:long))";

    this.firstData = null;
    this.secondData = null;
    
    this.mappingResult = null;
        
    /**
     * Create Links
     * creates two SPARQL queries for libSparql, handles callback 
     * and passes requested data to this.checkLinks
     */
    this.createLinks = function(){
        gui.showMessageBox("Getting Links for <br> " + this.know1Class + " and " + this.know2Class + ".<br>Please stand by");

        // creating a new link, so setting data to null
        this.firstData = null;
        this.secondData = null;

        // only if there are two classes selected we can create links
        if(this.know1Class != null && this.know2Class != null)
        {
            // if there are already some Markers shown remove them from map
            if(linklist.linkArray.length > 0)
            {
                map.lineLayer.removeAllFeatures();
                map.markers.clearMarkers();
            }

	        console.log("Getting Links for:(1)"+this.know1URL.substring(this.know1URL.lastIndexOf('/')+1)+" (2)"+this.know2URL.substring(this.know2URL.lastIndexOf('/')+1));

            // Creating the linking specification to receive links with getmapping
            var limesSpec = createXML.getXML("?x", this.know1Adress + "sparql", this.know1URL, "?y", this.know2Adress + "sparql", this.know2URL, this.metric, 0.7, 0.9);

            var tab = RegExp("\\t", "g");
            var bre = RegExp("\\n", "g");
            limesSpec = limesSpec.replace(tab, '');
            limesSpec = limesSpec.replace(bre, '');

    	    jQuery.ajax({
		type: "POST",
		url: "http://localhost/geolink/getMapping",
		data: { limesSpec: JSON.stringify(limesSpec) }
	    }).done(function(response) {
                this.mappingResult = response;
                linklist.storeLinkListFromMap(this.mappingResult);
		gui.hideMessageBox();
		var counter = 0;
		for (var key in response) { counter++ };
		if (counter==0) {
			gui.showMessageBox("No link candidates found.");
		}
	    });
        } else
        {
            gui.showMessageBox("Only one class selected.<br>Please choose a second class");
        }
    }

    /**
     * Posts the updated map based on the user's ratings to the learner and receives a new mapping (which is shown in the GUI)
     * @returns new Mapping as a JS Object() based on user's ratings from before
     * @author christian
     */
    this.getUpdateLinks = function() {
	var updatedMapping = linklist.getRatedLinkListAsMap();
	jQuery.ajax({
		type: "POST",
		url: "http://localhost/geolink/updateMapping",
		data: { limesSpec: JSON.stringify(updatedMapping) }
	}).done(function(response) {
                this.mappingResult = response;
                linklist.storeLinkListFromMap(this.mappingResult);
	});	
    }

    /**
     * Check sameAs-Relationship
     * passes requested data to parseJson from linklist
     * @param indexMe the set of Data to be indexed (json array or set of objecst or something)
     * @param here adress in the json object where the index should be created     
     */
    this.checkLinks = function(links, check)
    {
        var count = 0;
        var realLinks = links;

        // indexing bindings of object check
        this.indexClasses(check.results.bindings, check);

        // run through link-object
        for(var i = 0; i < realLinks.results.bindings.length; i++)
        {
            if(realLinks.results.bindings[i] != undefined)
            {
                // if a binding don't belong to secound kb delete it
                if(!check.hasOwnProperty(realLinks.results.bindings[i].o.value))
                {
                    delete realLinks.results.bindings[i];
                    count++;
                }
            }else
                {
                    count++;
                }
        }

        if(count != i)                     // if realLinks not empty pass it to linklist
        {
            linklist.parseJson(realLinks);
        }else                              // if realLinks is empty pass null to linklist
            {
                linklist.parseJson(null);
            }
    }



    /**
     * indexClasses - creates a Map of the mainClasses to speed up searching classes a bit
     * @param indexMe array which should be indexed
     * @param here array where index be written to
     */
    this.indexClasses = function(indexMe, here)
    {
        for (var x=0; x < indexMe.length; x++){
            here[indexMe[x].s.value] = x;
        }
    }


  
    /**
     * Getter Knowledgebase1 adress
     */
    this.getKnow1Adress = function(){
        return this.know1Adress;
    }


    
    /**
    * Getter Knowledgebase2 adress
    */
    this.getKnow2Adress = function(){
        return this.know2Adress;
    }



    /**
     * Setter know{1,2}{Class, URL, Adress}
     * sets all vars mentioned above
     * @param classUrl URI from class
     * @param label label from class
     * @param treeId string holding "tree1" or "tree2"
     */
    this.setClass = function(classUrl, label, treeId)
    {

        gui.hideMessageBox();
        
        // initializes URL, class and adress
        if (treeId.divid == "tree1")
        {
            this.know1URL = classUrl;
            this.know1Class = label;
            this.know1Adress = classUrl.substring(0, classUrl.substring(classUrl.indexOf('//')+2).indexOf('/') + classUrl.indexOf('//') +3);

            if(this.know2URL == null)
            {
                gui.showMessageBox(this.know1Class + " selected.<br>Please choose a class from the other ontology");
            }else
                {
                    gui.showMessageBox(this.know1Class + " selected.<br>Click 'Get Links'");
                }
        }
        else
        {
            if(treeId.divid == "tree2")
            {
                this.know2URL = classUrl;
                this.know2Class = label;
                this.know2Adress = classUrl.substring(0, classUrl.substring(classUrl.indexOf('//')+2).indexOf('/') + classUrl.indexOf('//') +3);

                if(this.know1URL == null)
                {
                    gui.showMessageBox(this.know2Class + " selected.<br>Please choose a class from the other ontology");
                }else
                    {
                        gui.showMessageBox(this.know2Class + " selected.<br>Click 'Get Links'");
                    }
            }
            else
            {
                gui.showMessageBox("You choose something strange.<br>Please try again");
            }
        }
    }
}
