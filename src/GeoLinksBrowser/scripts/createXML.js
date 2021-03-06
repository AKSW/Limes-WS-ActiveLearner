function CreateXML()
{    
    this.prtXML = function(input) {
        alert("DEBUG: " + input);
    }
	

	/**
	 * The Header of every LinkSpec-XML
	 */
	this.xmlHeader = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" + "<!DOCTYPE LIMES SYSTEM \"limes.dtd\">"; // 	this.xmlHeader = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" + "<!--Geobrowser Limes XML Spec for receiving geo links mapping-->\n" + "<!DOCTYPE LIMES SYSTEM \"limes.dtd\">";

	/**
	 * This method writes a simple tag (<tag> content </tag>) into the to be constructed LinkSpec-XML
	 * @param tab The name of this XML-tag
	 * @param wert the content of this XML-tag
	 * @param rueckungen the amount of tabs to include before the tag, generally used for visibility
	 * @return the line to be written into the XML
	 */
	this.schreibeInhalt = function(tab, wert, rueckungen) {
        var temp = "";
		if(tab.equals!="" && tab!=null && wert!="" && wert!=null){
			tab = tab.toUpperCase();
			for(i = 0; i < rueckungen; i++) {
				temp += "\t";
			}
			temp = temp + "<" + tab + ">" + wert + "</" + tab + ">" + "\n";
		}
		return temp;
	}

	/**
	 * This method will write the metric into the XML-file
	 * @param metric the metric as String
	 * @return the line to be written into the XML
	 */
	this.schreibeMetric = function(metric) {
		var temp = "";
		if(metric!="" && metric!=null){
			temp = "\t" + "<METRIC>" + metric + "</METRIC>" + "\n";
		}
		return temp;
	}
	
	/**
	 * This method will write the Content of the XML-File into a String and return it.
	 *
	 * @param srsId The id of the source endpoint
	 * @param srsEndpoint The URL of the source endpoint
	 * @param srsGraph The Graph of the source endpoint
	 * @param srsProperty All properties of the source endpoint metric, as a String array
	 * @param srsRestriction The Restriction of the source endpoint
	 * @param srsType The type of the source endpoint, for example "SPARQL"
	 * @param srsPagesize The pagesize of the source endpoint
	 * @param tarId The id of the target endpoint
	 * @param tarEndpoint The URL of the target endpoint
	 * @param tarGraph The Graph of the target endpoint
	 * @param tarProperty All properties of the target endpoint metric as a String array
	 * @param tarRestriction The Restriction of the target endpoint
	 * @param tarType The type of the target endpoint, for example "SPARQL"
	 * @param tarPagesize The pagesize of the target endpoint
	 * @param namespace All urls of the prefixes which will be used, as an Arraylist
	 * @param label All labels of the prefixes which will be used, as an Arraylist
	 * @param metric The metric of the Linkspec
	 * @param accThreshold The threshold to determine if a relation is valid and belongs in the acceptance file
	 * @param accRelation The relation of the acceptance-threshold
	 * @param revThresholdThe threshold to determine if a relation could be valid and belongs in the review file
	 * @param revRelation The relation of the review-threshold
	 * @param execution The type of the to be used execution
	 * @param granularity The amount of granularity LIMES should use on this LinkSpec
	 * @param output The format of the output that should be used
	 * @param dateiname The path to the LinkSpec which will be used
	 * @return the content of the LinkSpec-XMLfile
	 */
	this.schreibeXmlInhalt = function(srsId, srsEndpoint, srsGraph, srsVar, srsProperty, srsRestriction, srsType, srsPagesize,	tarId, tarEndpoint, tarGraph, tarVar, tarProperty, tarRestriction, tarType, tarPagesize, namespace, label, metric, accThreshold, accRelation, revThreshold, revRelation, execution, granularity, output, dateiname) {
		
		if(dateiname.substring(dateiname.length-4, dateiname.length)==".xml") {
			dateiname = dateiname.substring(0, dateiname.length-4);
		}						
		var accFilename = dateiname + "_accepted.txt";		
		var revFilename = dateiname + "_review.txt";
		
		var xmlInhalt;
        xmlInhalt = this.xmlHeader + "\n";
		xmlInhalt = xmlInhalt + "<LIMES>\n";
		
        for(var nc = 0; nc<namespace.length; nc++) {
			xmlInhalt += "\t" + "<PREFIX>\n";
			xmlInhalt += this.schreibeInhalt("namespace", namespace[nc], 2);
			xmlInhalt += this.schreibeInhalt("label", label[nc], 2);
			xmlInhalt += "\t" + "</PREFIX>\n";
		}
		
		xmlInhalt += "\t" + "<SOURCE>\n";
		xmlInhalt += this.schreibeInhalt("id", srsId, 2);
		xmlInhalt += this.schreibeInhalt("endpoint", srsEndpoint ,2);
		xmlInhalt += this.schreibeInhalt("graph", srsGraph, 2);
		xmlInhalt += this.schreibeInhalt("var", srsVar, 2);
		xmlInhalt += this.schreibeInhalt("pagesize", srsPagesize, 2);
		xmlInhalt += this.schreibeInhalt("restriction", srsRestriction, 2);
		for(var spc=0; spc<srsProperty.length; spc++)
		{
			xmlInhalt += this.schreibeInhalt("property", srsProperty[spc], 2);
		}
		xmlInhalt += this.schreibeInhalt("type", srsType, 2);
		xmlInhalt += "\t" + "</SOURCE>\n";
		
		xmlInhalt += "\t" + "<TARGET>\n";
		xmlInhalt += this.schreibeInhalt("id", tarId, 2);
		xmlInhalt += this.schreibeInhalt("endpoint", tarEndpoint, 2);
		xmlInhalt += this.schreibeInhalt("graph", tarGraph, 2);
		xmlInhalt += this.schreibeInhalt("var", tarVar, 2);
		xmlInhalt += this.schreibeInhalt("pagesize", tarPagesize, 2);
		xmlInhalt += this.schreibeInhalt("restriction", tarRestriction, 2);
		for(var tpc=0; tpc<tarProperty.length; tpc++)
		{
			xmlInhalt += this.schreibeInhalt("property", tarProperty[tpc], 2);
		}
		xmlInhalt += this.schreibeInhalt("type", tarType, 2);
		xmlInhalt += "\t" + "</TARGET>\n";
		
		xmlInhalt += this.schreibeMetric(metric);
		
		xmlInhalt += "\t" + "<ACCEPTANCE>\n";
		xmlInhalt += this.schreibeInhalt("threshold", accThreshold, 2);
		xmlInhalt += this.schreibeInhalt("file", accFilename, 2);
		xmlInhalt += this.schreibeInhalt("relation", accRelation, 2);
		xmlInhalt += "\t" + "</ACCEPTANCE>\n";
		
		xmlInhalt += "\t" + "<REVIEW>\n";
		xmlInhalt += this.schreibeInhalt("threshold", revThreshold, 2);
		xmlInhalt += this.schreibeInhalt("file", revFilename, 2);
		xmlInhalt += this.schreibeInhalt("relation", revRelation, 2);
		xmlInhalt += "\t" + "</REVIEW>\n";
		
		xmlInhalt +=  this.schreibeInhalt("execution", execution, 1);
		
		xmlInhalt +=  this.schreibeInhalt("output", granularity, 1);
		
		xmlInhalt +=  this.schreibeInhalt("output", output, 1);
		
		xmlInhalt = xmlInhalt + "</LIMES>";
		
		return xmlInhalt;
	}

    this.getXML = function(srcVar, srcEndpoint, srcClassURI, tarVar, tarEndpoint, tarClassURI, metric, accthreshold, verthreshold) {

			// Define settings for linking spec
            var property = ["rdfs:label AS nolang->lowercase", "wgs84:lat", "wgs84:long"];	

			var prefSrcClass = srcClassURI.substring(0, srcClassURI.lastIndexOf('/')+1);
            var srcClass = srcClassURI.substring(srcClassURI.lastIndexOf('/')+1, srcClassURI.length);
            var prefTarClass = tarClassURI.substring(0, tarClassURI.lastIndexOf('/')+1);
            var tarClass =  tarClassURI.substring(tarClassURI.lastIndexOf('/')+1, tarClassURI.length);

            var namespace = ["http://www.w3.org/1999/02/22-rdf-syntax-ns#", "http://www.w3.org/2000/01/rdf-schema#", "http://www.w3.org/2003/01/geo/wgs84_pos#", prefSrcClass, prefTarClass];
            var label = ["rdf", "rdfs", "wgs84", "scp", "tcp"];
            var srcGraph = null; // srcEndpoint.substring(0, srcEndpoint.substring(srcEndpoint.indexOf('//')+2).indexOf('/') + srcEndpoint.indexOf('//') +3);
            var tarGraph = null; // tarEndpoint.substring(0, tarEndpoint.substring(tarEndpoint.indexOf('//')+2).indexOf('/') + tarEndpoint.indexOf('//') +3);

			var pagesize = "500";
			var restrictionSRC = srcVar + " rdf:type scp:" + srcClass;
			var restrictionTAR = tarVar + " rdf:type tcp:" + tarClass;
			var type = "SPARQL";
			var output = "N3";  // TTL or TAB or N3
			var granularity = "2";
			var execMode = "SIMPLE"; // SIMPLE or FILTER
			var filename = "createXMLtest.xml";
			var accRelation = "owl:sameAs";
			var revRelation = "owl:sameAs";
			
			// Generate XML based on input
			return xmlContent = this.schreibeXmlInhalt("source", srcEndpoint, srcGraph, srcVar, property, restrictionSRC, type, pagesize, "target", tarEndpoint, tarGraph, tarVar, property, restrictionTAR, type, pagesize, namespace, label, metric, accthreshold, accRelation, verthreshold, revRelation, execMode, granularity, output, filename);
    }
}
