/** 
 * @class DataTree <br>
 * extract data from lgd and dbpedia and show it via tree.js
 * @author <a href="mailto:mam10hna@studserv.uni-leipzig.de">Dennis Konrad</a>
 * @version 1.15 (20.05.12)
 * @param Tree which is drawing the data from this Class
 * @map map where the points are shown
 */
function DataTree(tree)
{   
    this.kbase        = null;             //String received drom dropdown.js
    this.tree         = tree;
    this.queryClass   = null;             //Query used for gathering Class data

    this.json         = {};               //received json data (ajax)

    /**
     * setDB <br>
     * sets Database used in here and starts getting the mainClasses <br>
     * @param knowledgebase String holding LGD or DBPedia 
     */
    this.setDB = function(knowledgebase)
    {
	// DataTree is used already, the user wants to change something
	if( this.kbase != null )
	{
	    this.resetDataTree();
	}

        this.kbase = knowledgebase;
        this.retClasses();
    }


    /**
     * resetDataTree - resets DataTree
     */
    this.resetDataTree = function()
    {
	this.kbase      = null;
	this.queryClass = null;
	this.json       = {};
    }
    
    /**
     * getDB - getter for kbase. Returns String with 'LGD' or 'DBPedia' depending on what <br>
     * knowledgebase is used in this Class 
     */
    this.getDB = function()
    {
        return kbase;
    }
    
    /**
     * indexClasses - creates a Map of the mainClasses to speed up searching classes a bit
     * @param indexMe the set of Data to be indexed (json array or set of objecst or something)
     * @param here adress in the json object where the index should be created     
     */
    this.indexClasses = function(indexMe, here)
    {
        for (var x=0; x < indexMe.length; x++){
            here[indexMe[x].uri.value] = x;
        }
    }
    

    /**
     * testForQuery - first test for a working query to get the classes from the used ontology
     */
    this.testForQuery = function()
    {
	// first Test
	// =====================
	// if owl:Thing exists and has at least one subclass, so use owl:Thing

	var query = 'SELECT ?uri WHERE {?uri rdfs:subClassOf owl:Thing} limit 1';
        
	var onSuccess = function (realData) {

            if (realData.results.bindings.length == 0)
            {
                this.queryClass = this.testForQuery2();
            }
            else {
                this.queryClass = 'SELECT ?uri ?label WHERE {?uri rdfs:subClassOf owl:Thing OPTIONAL {?uri rdfs:label ?label. FILTER langMatches(lang(?label), "' + user.getSparqlTag() + '")}}';
                this.retClasses();
            }
        },
	
        onError = function (xhRequest, ErrorText, thrownError){
            console.log("Error while running Sparql Query Test 1\nAJAX Fehler: " + thrownError);

            if (this.tree.decQueries() == 0)
            {
                gui.hideLoadingTree(this.tree);
            }
            
            switch (this.tree.divid){
            case "tree1": dropdown.resetDatabase1();
            case "tree2": dropdown.resetDatabase2();
            }
            gui.showMessageBox("Cant't access Sparql-Endpoint!<br>Check the given URL");

        };

	sparqlLib.getData(this.kbase, query, this, 15000, onSuccess, onError);
    }

    /**
     * testForQuery2 - second test for a working query to get the classes from the used ontology <br>
     * called if first test isnt passed (englishz)
     */
    this.testForQuery2 = function()
    {
        // second Test
        // =====================
        // bad endpoint, use fallback: classes (instances of owl:Class) which don't have superclasses
        var query = 'SELECT distinct(?uri) WHERE {?uri a owl:Class. OPTIONAL {?uri rdfs:subClassOf ?superClass.} FILTER (!BOUND(?superClass))} limit 1';

        var onSuccess = function (realData) {

            if (realData.results.bindings.length == 0)
            {
                this.queryClass = this.testForQuery3();
            }
            else {
                this.queryClass = 'SELECT distinct(?uri) ?label WHERE {?uri a owl:Class. OPTIONAL {?uri rdfs:subClassOf ?superClass.} OPTIONAL {?uri rdfs:label ?label. FILTER langMatches(lang(?label), "' + user.getSparqlTag() + '")} FILTER (!BOUND(?superClass))}';
                this.retClasses();
            }
        },
	
        onError = function (xhRequest, ErrorText, thrownError){
            console.log("Error while running Sparql Query Test 2\nAJAX Fehler: " + thrownError);

            if (this.tree.decQueries() == 0)
            {
                gui.hideLoadingTree(this.tree);
            }

            switch (this.tree.divid){
            case "tree1": dropdown.resetDatabase1();
            case "tree2": dropdown.resetDatabase2();
            }
            
            gui.showMessageBox("Request Timeout Error.<br>Please try again later!");

            // TODO retry once
        };
	sparqlLib.getData(this.kbase, query, this, 10000, onSuccess, onError);
    }


    /**
     * testForQuery3 - third test for a working query to get the classes from the used ontology <br>
     * called if second test isnt passed (englishz)
     */
    this.testForQuery3 = function()
    {
	// third Test
	// =====================
	// bad endpoint, use fallback: classes (instances of owl:Class) which don't have superclasses
        var query = 'SELECT distinct(?uri) WHERE {?x a ?uri. OPTIONAL {?uri rdfs:subClassOf ?superClass.} FILTER (!BOUND(?superClass))} limit 1';

        var onSuccess = function (realData) {

	    if (realData.results.bindings.length == 0)
            {
                gui.showMessageBox("Couldn't get Classes from Ontology<br>None of the Sparql Queries worked -.-");
            }
            else {
                this.queryClass = 'SELECT distinct(?uri) ?label WHERE {?x a ?uri. OPTIONAL {?uri rdfs:subClassOf ?superClass.} OPTIONAL {?uri rdfs:label ?label. FILTER langMatches(lang(?label), "' + user.getSparqlTag() + '")} FILTER (!BOUND(?superClass))}';
                this.retClasses();
            }
        },
	
        onError = function (xhRequest, ErrorText, thrownError) {
            console.log("Error while running Sparql Query Test 3\nAJAX Fehler: " + thrownError);

            if (this.tree.decQueries() == 0)
            {
                gui.hideLoadingTree(this.tree);
            }
            gui.showMessageBox("Request Timeout Error.<br>Please try again later");

            switch (this.tree.divid){
            case "tree1": dropdown.resetDatabase1();
            case "tree2": dropdown.resetDatabase2();
            }

            // TODO retry once
        };

        sparqlLib.getData(this.kbase, query, this, 10000, onSuccess, onError);

    }


    /**
     * retClasses - retrieves mainClasses from Sparql-Endpoints and shows it with tree.js <br>
     * uses the query from one of the testForQuery <br>
     * if there's no query already it calls the first test
     */
    this.retClasses = function()
    {
        if (this.queryClass == null)
        {
            // show the loading animation
            this.tree.incQueries();
            gui.showLoadingTree(this.tree);

            // test for the right query
            this.testForQuery();
        }
        else {

            var query = this.queryClass;
            
            var onSuccess  = function (realData) {
                if (this.tree.decQueries() == 0)
                {
                    gui.hideLoadingTree(this.tree);
                }
                this.json.mainClass = realData.results.bindings;
                this.indexClasses(this.json.mainClass, this.json);
                this.showTree(this.json.mainClass);
            },
            
            onError  = function (xhRequest, ErrorText, thrownError){
                if (this.tree.decQueries() == 0)
                {
                    gui.hideLoadingTree(this.tree);
                }
		
                gui.showMessageBox("Request Timeout Error.<br>Please try again later");
		
                switch (this.tree.divid){
                case "tree1": dropdown.resetDatabase1();
                case "tree2": dropdown.resetDatabase2();
                }

                console.log("Error while retrieving Classes for " + this.kbase + "\nAJAX Fehler: " + thrownError);
            };

            sparqlLib.getData(this.kbase, query, this, 11000, onSuccess, onError);

        }
    }


    /** 
     * searchClass - search for Classes
     * @param superClass Uri from Class given back from tree
     */
    this.searchClass = function(superClass)
    {

	// is the subclass in index of the mainClass?

	if (this.json.hasOwnProperty(superClass))
	{
	    classAdress = this.json.mainClass[this.json[superClass]];
	}
	else
	{
	    var classes = this.json.mainClass;
	    var search = true;
	    var found = false;
	    var searchIt = new Array();
	    var uglyvar = 1;
	    
	    var debug = false;

	    while (search)
	    {
		for (x=0; x < uglyvar; x++)
		{
		    for (y in classes)
		    {
			if ( classes[y].uri.value == superClass )
			{
			    classAdress = classes[y];
			    search = false;
			    found = true;
			}
			else
			{
			    if ( classes[y].hasOwnProperty ( 'subClass' ) )
			    {
				searchIt.push(classes[y].subClass);
			    }
			}
		    }
		    if (found){break;}

		    classes = searchIt[x];
		    uglyvar = searchIt.length;
		}
	    }		    
	}
	return classAdress;
    }

    /**
     * retSubClass - get subClasses from a SuperClass if there are some <br>
     * in case there are no subclasses, setClass from linkings is called
     * @param superClass superClass URI
     */
    this.retSubClass = function(superClass)
    {
        var query = 'SELECT distinct(?uri) ?label WHERE {?uri rdfs:subClassOf <' + superClass + '>. OPTIONAL {?uri rdfs:label ?label. FILTER langMatches(lang(?label), "' + user.getSparqlTag() + '")}}';

        var onSuccess = function (realData) {
	    
            // hide loading tree
            if (this.tree.decQueries() == 0)
            {
                gui.hideLoadingTree(this.tree);
            }
	    // the selected Class has no subclasses, store and select it
	    if (realData.results.bindings.length == 0)
	    {
		classAdress.leaf = "yes";

		// if thers a label take it and setClass in linking.js
		if (classAdress.hasOwnProperty('label'))
		{
		    linking.setClass(superClass, classAdress.label.value, this.tree);
		}
		// if theres no label take last string from the uri
		else
		{
		    var label = superClass.substr(superClass.lastIndexOf('/')+1);
		    linking.setClass(superClass, label, this.tree);				
		}
	    }
	    // the selected Class has subclasses, save them, show them
	    else {

		// save the subclasses under the superclass
		classAdress.subClass = realData.results.bindings;

		// index the subclasses
		this.indexClasses( classAdress.subClass, classAdress );

		// tell the poor child who his parents are
		for ( x in classAdress.subClass )
		{
		    classAdress.subClass[x].parent = classAdress;
		}
		classAdress.subClass.parent = classAdress;

		// show the subClasses
		this.showTree(classAdress.subClass);
	    }    
	},

	onError = function (xhRequest, ErrorText, thrownError){
	    console.log('Error while retrieving SubClass from ' + superClass + '\nAJAX Fehler: ' + thrownError);

	    // hide loading tree
	    if (this.tree.decQueries() == 0)
	    {
		gui.hideLoadingTree(this.tree);
	    }

	    // TODO retry once
	};

	
	// search for superClass
	classAdress = this.searchClass(superClass);

	// if the class has already subclasses and the user clicks it, it should be selected
	if ( classAdress.hasOwnProperty( 'subClass') || classAdress.hasOwnProperty( 'leaf'))
	{
	    console.log("Already here");
	    // if thers a label take it and setClass in linking.js
	    if (classAdress.hasOwnProperty('label'))
	    {
		linking.setClass(superClass, classAdress.label.value, this.tree);
	    }
	    // if theres no label take last string from the uri
	    else
	    {
		var label = superClass.substr(superClass.lastIndexOf('/')+1);
		linking.setClass(superClass, label, this.tree);
	    }
	}

	else {
	    // show loading-animation
            this.tree.incQueries();
            gui.showLoadingTree(this.tree);
	    
	    // fetching and processing of requested data
	    sparqlLib.getData(this.kbase, query, this, 10000, onSuccess, onError);
	}
    }
    
    /**
     * showTree() - uses tree to show the relevant Data <br>
     * shows label of class <br>
     * if theres no label for the class it uses the last 'word' in the URI
     * @param showMe set of Classes as a adress to the position in the this.json data that should be passed to tree.js where its shown
     */
    this.showTree = function(showMe)
    {
	// showing MainClasses
	if(!(showMe.hasOwnProperty('parent')))
	{
	    for (var x in showMe){
		// if got a nice label and ill show it
		if (showMe[x].hasOwnProperty('label'))
		{
		    this.tree.add("|" + showMe[x].label.value, showMe[x].uri.value);
		}

		// ive got no label so ill show a litte of my uri
		else {
		    this.tree.add("|" + 
				  showMe[x].uri.value.substr(showMe[x].uri.value.lastIndexOf('/')+1), 
				  showMe[x].uri.value);
		}
	    }
	    
	    // all done, show the tree
	    jQuery(tree.divid).load('index.html');
	    this.tree.draw();

	} else {
	    // showing subClasses

	    // find all parents and store them in parents
	    var testant = showMe;

	    var parents = [];
	    var count = 0;

	    while(testant.hasOwnProperty('parent')){
		
		// if parent has a label, its the right adress
		if (testant.parent.hasOwnProperty('label'))
		{
		    parents.push(testant.parent.label.value);
		}

		// parent has no label, it uses the last uri word
		else {
		    parents.push(testant.parent.uri.value.substr(testant.parent.uri.value.lastIndexOf('/')+1));
		}
		testant = testant.parent;
	    }

	    // make a nice string with all parents for tree.add
	    var parentsString = "|";

	    for (var x = parents.length; x > 0; x--){
		parentsString = parentsString + parents[x-1];
		parentsString = parentsString + "|";
	    }

	    // use the parentsString and add the subclasses
	    for (var x in showMe){
		if (showMe[x].hasOwnProperty('label'))
		{
		    this.tree.add(parentsString + showMe[x].label.value, showMe[x].uri.value);
		}
		else {
		    // kein label, nimm das letzte Wort der URI
		    this.tree.add(parentsString + 
				  showMe[x].uri.value.substr(showMe[x].uri.value.lastIndexOf('/')+1), 
				  showMe[x].uri.value);
		}
	    }
	    
	    // anzeigen des Baums
	    jQuery(tree.divid).load('index.html');
	    this.tree.draw();

	}
    }
}
