/**
 * @class LinkList <br>
 * Class showing links
 * @author <a href="mailto:powerswitch@betriebsdirektor.de">Simon Vetter</a>
 * @author <a href="mailto:martin@medi-inf.org">Martin Grohmann</a>
 * @version 1.2 (01.05.2012)
 */
function LinkList()
{
    // TODO: neu machen! :(
    this.linkArray = new Array();
    this.ajaxStack = new Array();
    this.stackpos = 0;
    this.percent = 0;
    this.selected = -1;
    this.success = 0;

    /*
     * increase success variable
     */
    this.incSuccess = function()
    {
        this.success++;
        if (this.success >= this.ajaxStack.length)
        {
            linklist.sortList();
            linklist.showLinkList();
        }
    }
    
    /*
     * this function withdraws the two uri's
     * @param data is the JSON object
     */
    this.parseJson_new = function(data)
    {
        if (data == null)
        {
            document.getElementById("linklist").innerHTML = "Mo matching links."; // TODO: Hübscher machen
        }
    }
    
    

    /*
     * this function withdraws the two uri's
     * @param data is the JSON object
     */
    this.parseJson = function(data)
    {
        if (data == null)
        {
            gui.showMessageBox("No matching Links.");
            document.getElementById("linklist").innerHTML = "No matching Links."; //TODO: Hübscher machen
            return;
        }
        this.linkArray = [];
        this.percent = 0;
        this.stackpos = 0;
        this.ajaxStack = [];
        jQuery.each(data.results.bindings, function(k,l)
        {
            subject = "";
            predicate = "";
            object = "";
            if(data.results.bindings[k] != undefined)
            {
                jQuery.each(data.results.bindings[k], function(m,n)
                {
                    switch (m) {
                        case "s":
                            jQuery.each(n, function(o,p)
                            {
                                if (o == "value") {
                                    subject = p;
                                }
                            });
                            break;
                        case "p":
                            jQuery.each(n, function(o,p)
                            {
                                if (o == "value") {
                                    predicate = p;
                                }
                            });
                            break;
                        case "o":
                            jQuery.each(n, function(o,p)
                            {
                                if (o == "value") {
                                    object = p;
                                }
                            });
                            // Link complete
                            if (predicate == "http://www.w3.org/2002/07/owl#sameAs")
                            {
                                linklist.linkArray.push(new LinkPair(subject,object));
                                linklist.linkArray[linklist.linkArray.length-1].id = linklist.linkArray.length-1;
                                linklist.ajaxStack.push(linklist.linkArray.length - 1);
                            }
                            break;
                        default:
                            console.log("Unknown data type: "+m);
                            break;
                    }
                });
            }
        });
        linklist.runAjax();
        linklist.sortList();
        linklist.loadSettings();
        linklist.showLinkList();
    }

    /**
     * Required to fill in new mapping result
     * @author: christian
     */
    this.clearData = function() {
    	this.linkArray = new Array();
    	this.ajaxStack = new Array();
    	this.stackpos = 0;
    	this.percent = 0;
    	this.selected = -1;
    	this.success = 0;
    }

    /**
     * Stores a map which has been returned by GetMapping or UpdateMapping
     * @param input the Map as a JS Object()
     * @author christian
     */
    this.storeLinkListFromMap = function(input) {
	this.clearData();
        for (var key in input) {
		if (input.hasOwnProperty(key)) {
			for (var innerkey in input[key]) {
				if (input[key].hasOwnProperty(innerkey)) {
					this.linkArray.push(new LinkPair(key,innerkey));
				}
			}
		}
	}
	linklist.sortList();
        linklist.showLinkList();
    }

    /**
     * Returnes an updated map based on the ratings of the user
     * @return updated map as JS Object()
     * @author christian
     */
    this.getRatedLinkListAsMap = function() {
        var s = new Object();
	for(var i=0; i<this.linkArray.length; i++) {
		var value = new Object();
		if(this.linkArray[i].rating==3) {
			value[this.linkArray[i].addr2] = 1.0; 			
		} else if(this.linkArray[i].rating==2) {
			value[this.linkArray[i].addr2] = 0.0; 			
		}
		s[this.linkArray[i].addr1] = value;
	}
	return s;
    }

    /* 
     * Load saved settings
     */
    this.loadSettings = function()
    {
        var lsAjax = 0; // Init lsAjax
        if (window.XMLHttpRequest) // If Browser supports XMLHttpRequest (not IE5/6)
        {
            lsAjax = new XMLHttpRequest();    // Create new XMLHttpRequest (Ajax)
        }
        else
        {
            lsAjax = new ActiveXObject("Microsoft.XMLHTTP");
        }
        lsAjax.onreadystatechange = function()
        {
            /** if request was completed (4) without errors (200) */
            if (lsAjax.readyState==4 && lsAjax.status==200)
            {
                var zeilen = lsAjax.responseText.split("\n");
                var step = 0;
                for (a = 0; a < zeilen.length; a++)
                {
                    if (step == 0 && zeilen[a] == "Array") step = 1;
                    if (step == 1 && zeilen[a] == "(") step = 2;
                    if (step == 2 && zeilen[a] == ")")
                    {
                        step = 0;
                        for (b = 0; b < linklist.linkArray.length; b++)
                        {
                            if ((decodeURIComponent(linklist.linkArray[b].addr1) == decodeURIComponent(subject) && decodeURIComponent(linklist.linkArray[b].addr2) == decodeURIComponent(object)) ||
                                (decodeURIComponent(linklist.linkArray[b].addr2) == decodeURIComponent(subject) && decodeURIComponent(linklist.linkArray[b].addr1) == decodeURIComponent(object))
                            )
                            {
                                switch (rating)
                                {
                                    case "accept":
                                        linklist.linkArray[b].rating = 3;
                                        break;
                                    case "reject":
                                        linklist.linkArray[b].rating = 2;
                                        break;
                                    case "unsure":
                                        linklist.linkArray[b].rating = 0;
                                        break;
                                    case "ignore":
                                        linklist.linkArray[b].rating = 1;
                                        break;
                                }
                            }
                        }
                    }
                    if (step == 2) {
                        if (zeilen[a].indexOf("[s]") >= 0)
                        {
                            subject = zeilen[a].split("=>")[1].trim();
                        }
                        if (zeilen[a].indexOf("[o]") >= 0)
                        {
                            object = zeilen[a].split("=>")[1].trim();
                        }
                        if (zeilen[a].indexOf("[rating]") >= 0)
                        {
                            rating = zeilen[a].split("=>")[1].trim();
                        }
                    }
                }
            }
        };
        lsAjax.open("GET","scripts/mysql.php?action=user&user_id='"+user.getName()+"'",false);
        lsAjax.send();
    }
    
    /*
     * Sort linklist
     */
    this.sortList = function()
    {
        linklist.linkArray.sort(this.compare);
    }
    
    /*
     * the linklist is shown
     * output is the whole string that is displayed in the overlay
     * Element in the index.html is the 'linklist'
     */
    this.showLinkList = function()
    {
        // Create Link List Text
        output = "";
        for (i = 0; i < linklist.linkArray.length; i++)
        {
            output += "<div onclick='linklist.selectLink("+i+")' class='";
            if (linklist.selected == i)
            {
                output += "llselected";
            }
            else
            {
                output += "llentry";
                switch (linklist.linkArray[i].getRating()) {
                    case 0: output += " llbggrey"
                            break;
                    case 1: output += " llbgyellow"
                            break;
                    case 2: output += " llbgred"
                            break;
                    case 3: output += " llbggreen"
                            break;
                };
            }
            output += "'><div class='llname'>"+linklist.linkArray[i].getName1() + "</div>";
            //output += "<div class='llrate'>";
            switch (linklist.linkArray[i].getRating()) {
                case 0: output += "<div class='llrate llgrey'>&nbsp;"
                        break;
                case 1: output += "<div class='llrate llyellow'>&nbsp;"
                        break;
                case 2: output += "<div class='llrate llred'>&nbsp;"
                        break;
                case 3: output += "<div class='llrate llgreen'>&nbsp;"
                        break;
            };
            output += "</div><div class='llname'>" + linklist.linkArray[i].getName2() + "</div>";
            if (linklist.linkArray[i].dataMapPoint1 && linklist.linkArray[i].dataMapPoint2)
            {
                output += "<div class='lldistance'>" + Math.round(linklist.linkArray[i].distance*100)/100 + " m</div>"; 
            }
            else
            {
                output += "<div class='lldistance'>unknown</div>";
            }
            output += "<div class='llclear'></div></div>";
        }
        document.getElementById("linklist").innerHTML = output;
    }

    this.selectLink = function(i)
    {
        if (i >= 0 && i < this.linkArray.length)
        {
            this.selected = i;
            if (this.linkArray[i].dataMapPoint1)
            {
                if(this.linkArray[i].dataMapPoint2)
                {
                    map.map.setCenter(new OpenLayers.LonLat(
                        (parseFloat(this.linkArray[i].dataMapPoint2.long) + parseFloat(this.linkArray[i].dataMapPoint1.long))/2,
                        (parseFloat(this.linkArray[i].dataMapPoint2.lat) + parseFloat(this.linkArray[i].dataMapPoint1.lat))/2
                    ).transform(new OpenLayers.Projection("EPSG:4326"),map.map.getProjectionObject()));
                } else {
                    map.map.setCenter(new OpenLayers.LonLat(
                        this.linkArray[i].dataMapPoint1.long,
                        this.linkArray[i].dataMapPoint1.lat
                    ).transform(new OpenLayers.Projection("EPSG:4326"),map.map.getProjectionObject()));
                }
            } else {
                if(this.linkArray[i].dataMapPoint2)
                {
                    map.map.setCenter(new OpenLayers.LonLat(
                        this.linkArray[i].dataMapPoint2.long,
                        this.linkArray[i].dataMapPoint2.lat
                    ).transform(new OpenLayers.Projection("EPSG:4326"),map.map.getProjectionObject()));
                }
            }
//            map.map.moveByPx(1,1);
            //document.getElementById("linklist").scrollTop=15*i; //TODO: test if this works, maybe just add? nope
        }
        else
        {
            this.selected = -1;
        }
        linklist.showLinkList();
    }

    this.runAjax = function()
    {
        if (this.stackpos < this.ajaxStack.length)
        {
            var newpercent = (this.stackpos/this.ajaxStack.length*100)
            if ((newpercent-1) > this.percent)
            {
                gui.message("Resolving names: "+Math.floor(newpercent)+" %.");
                this.percent=newpercent;
            }
            linklist.linkArray[this.ajaxStack[this.stackpos]].setLabel(linklist.linkArray[this.ajaxStack[this.stackpos]].addr1,1);
            linklist.linkArray[this.ajaxStack[this.stackpos]].setLabel(linklist.linkArray[this.ajaxStack[this.stackpos]].addr2,2);
            this.stackpos++;
        }
        else
        {
            gui.message("ready.");  
            linklist.sortList();
            linklist.showLinkList();
        }
    }
    
    this.compare = function(node1, node2)
    {
        a = node1.name1;
        b = node2.name1;
        if (a.length < b.length) return -1;
        if (a.length > b.length) return 1;
        for (c = 0; c < a.length; c++) // c++? I thought it was JavaScript :P
        {
            if (a.charCodeAt(c) < b.charCodeAt(c)) return -1;
            if (a.charCodeAt(c) > b.charCodeAt(c)) return 1;
        }
        return 0;
    }
}
