/**
 * @class Tree <br>
 * create multiple layers of tree entries, each entry throws a different event in treeEvents.js <br>
 * use tree.add to add an entry to the tree (layers will be created automatically)
 * @author <a href="mailto:powerswitch@betriebsdirektor.de">Simon Vetter</a>
 * @version 1 (22.03.2012)
 * @param divid id of div that contains the tree
 */
function Tree(divid)
{
    this.content = new Array();                    // Create new content array
    this.divid = divid;                            // id of div containing the tree
    this.counter = 0;                              // counting tree entries
    this.queries = 0;                              // counting running queries
    this.selectedEntry = null;
    
    /**
     * Increase query counter
     */
    this.incQueries = function() 
    {
        this.queries += 1;
    }
    
    /**
     * Decrease query counter
     * @return query counter
     */
    this.decQueries = function() 
    {
        this.queries -= 1;
        return this.queries;
    }

    /**
     * Clear the whole tree
     */
    this.clear = function()
    {
        delete(this.content);
        this.content = new Array();
    }
    
    /**
     * Add a new entry to the tree
     * @param path path of the new entry (missing parts will be created)
     * @param lnk Linked data to be returned when selected
     */
    this.add = function(path,lnk)
    {
        if (path.substr(0,1) != "|")              // make sure first character is '|'
        {
            path = "|" + path;
        }
        
        var pathsplit = path.split("|");          // split path at '|'
        var branch = this;                        // this is current branch
        
        /** search for each branch of the path or create it */
        for (var i = 1; i < (pathsplit.length - 1); i++)       // every branch of the path
        {
            var foundBranch = false;                           // branch not yet found 
            for (var j = 0; j < branch.content.length; j++)    // search for branch
            {
                if (branch.content[j].name == pathsplit[i])    // if branch was found 
                {
                    foundBranch = true;            // found branch
                    branch = branch.content[j];    // found branch is current branch
                    j = branch.content.length;     // stop searching this branch
                }
            }
            if (!foundBranch)                      // branch was not found
            {
                /** Add missing branch and set it to current branch */
                branch.content = branch.content.concat(new Array(new entry(pathsplit[i],'~',true)));
                var newBranch = branch.content[branch.content.length-1];
                branch.content = branch.content.sort(this.compare); // sort branch content
                branch = newBranch;                // set new branch to current branch
            }
        }
        
        if (pathsplit[pathsplit.length-1] != "")  // If name is set
        {
            /** look if new entry is already there */            
            var foundBranch = false;              // branch not found yet
            for (var j = 0; j < branch.content.length; j++)    // search for branch
            {
                if (branch.content[j].name == pathsplit[i])    // found branch
                {
                    foundBranch = true;                        // found branch
                    if (branch.content[j].lnk == "~")          // if it was a missing branch
                    {
                        branch.content[j].lnk = lnk;           // update linked data
                    }
                    else
                    {
                        branch = branch.content[j];            // found branch is current branch
                        j = branch.content.length;             // stop searching this branch
                    }
                }
            }
            if (!foundBranch)                                  // branch was not found
            {
                /** Add entry */   
                branch.content = branch.content.concat(
                    new Array(
                        new entry(
                            pathsplit[pathsplit.length-1],
                            lnk
                        )
                    )
                );
            }

            branch.content = branch.content.sort(this.compare); // Sadly too slow TODO: make faster
        }
    }
    
    /**
     * Compare two Entries
     * used for Array.sort()
     * @param a Entry A
     * @param b Entry B
     */
    // TODO: Umlaute einreihen
    // TODO: Performace
    this.compare = function (a, b)
    {
        var charA, charB;                        // Character A and B
        /** PART 1: Compare case insensitive */
        for (var i = 0; i < Math.min(a.name.length,b.name.length); i++)
        {
            charA = a.name.toUpperCase().charCodeAt(i);
            charB = b.name.toUpperCase().charCodeAt(i);
            if (charA != charB) return charA - charB;
        }
        
        /** PART 2: Compare length */
        if (a.name.length != b.name.length) return a.name.length - b.name.length;

        /** PART 3: Compare case sensitive*/
        for (var i = 0; i < a.name.length; i++)
        {
            charA = a.name.charCodeAt(i);
            charB = b.name.charCodeAt(i);
            if (charA != charB) return charA - charB;
        }
        
    }

    /**
     * Draw the tree
     */
    this.draw = function()
    {
        this.counter = 0;                                  // Reset counter
        var s = "<div class='treelevel'>";                 // init output string
        for (var i = 0; i < this.content.length; i++)      // all entries
        {
            s += this.content[i].drawContent(this);        // entry draws itself
        }
        s += "</div>";                                     // finish output string
        document.getElementById(this.divid).innerHTML = s; // put into div
    }
}

/**
 * Tree entry
 * @author <a href="mailto:powerswitch@betriebsdirektor.de">Simon Vetter</a>
 * @version 1 (22.03.2012)
 * @class entry
 * @param name Name of the entry
 * @param lnk Linked data to be returned when selected
 * @param isBranch Does this entry contains more entries?
 */
function entry(name,lnk)
{
    this.name = name;                              // Name of the Entry
    this.lnk = lnk;                                // Linked Data to be returned
    this.content = new Array();                    // Array of entries this entry contains
    this.collapse = true;                          // Don't draw content if collapsed
    this.isSelected = false;                       // Is this entry selected

    /**
     * Toggle selected entry
     * @param selected
     */
    this.setSelected = function(sel)
    {
        this.isSelected = sel;
    }
    
    /**
     * Draw the tree
     * @param tree tree containing this entry
     * @return String to be put into div
     */
    this.drawContent = function(tree)
    {
        var s = "<div class='treelevel'>";        // init return string
        if (this.content.length != 0)             // if it contains entries
        {
            if (this.collapse == true)            // if branch is collapsed
            {
                /** draw entry */
                s += "<div ";
                s += "class='treebutton treeImgPlus' ";
                s += "onclick='treeEvent.treeEvent(\"";
                s += tree.divid;
                s += "|expand|";
                s += tree.counter;
                s += "\");' ";
                s += "onmouseover='gui.tooltip(\"Expand branch\");' ";
                s += "onmouseout='gui.hideTooltip();' ";
                s += "></div><div ";
                s += "class='treeEntry' ";
                s += "onclick='treeEvent.treeEvent(\"";
                s += tree.divid;
                s += "|select|";
                s += tree.counter;
                s += "|";
                s += this.lnk;
                s += "\");' ";
                s += "onmouseover='gui.tooltip(\"Select this source\");' ";
                s += "onmouseout='gui.hideTooltip();' ";
                s += ">"+this.name+"</div><br />";
                tree.counter++;                    // count up
            }
            else                                   // if branch is not collapsed
            {
                /** draw entry */
                s += "<div ";
                s += "class='treebutton treeImgMinus' ";
                s += "onclick='treeEvent.treeEvent(\"";
                s += tree.divid;
                s += "|collapse|";
                s += tree.counter;
                s += "\");' ";
                s += "onmouseover='gui.tooltip(\"Collapse branch\");' ";
                s += "onmouseout='gui.hideTooltip();' ";
                s += "></div><div ";
                s += "class='treeEntry' ";
                s += "onclick='treeEvent.treeEvent(\"";
                s += tree.divid;
                s += "|select|";
                s += tree.counter;
                s += "|";
                s += this.lnk;
                s += "\");' ";
                s += "onmouseover='gui.tooltip(\"Select this source\");' ";
                s += "onmouseout='gui.hideTooltip();' ";
                s += ">"+this.name+"</div><br />";
                tree.counter++;                    // count up
                
                /** draw containing entries */
                for (var i = 0; i < this.content.length; i++)
                {
                    s += this.content[i].drawContent(tree);
                }
            }


        } else {                                // if it contains no entries
            /** draw entry */
            s += "<div class='treeImgEntry' ";
            s += "></div><div ";
            if (this.isSelected == true)
            {
                s += "class='treeEntry treeEntrySelected' ";
            }
            else
            {
                s += "class='treeEntry' ";
            }
            s += "onclick='treeEvent.treeEvent(\"";
            s += tree.divid;
            s += "|select|";
            s += tree.counter;
            s += "|";
            s += this.lnk;
            s += "\");' ";
            s += "onclick='treeEvent.treeEvent(this);' ";
            s += "onmouseover='gui.tooltip(\"Select this source\");' ";
            s += "onmouseout='gui.hideTooltip();' ";
            s += ">"+this.name+"</div><br />";
            tree.counter++;
        }
    s += "</div>";
    return s;                                    // return output string
    }
}
