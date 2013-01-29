/**
 * @class TreeEvent <br>
 * Tree event class
 * @author <a href="mailto:powerswitch@betriebsdirektor.de">Simon Vetter</a>
 * @version 1 (24.03.2012)
 */
function TreeEvent()
{
    /**
     * Tree event
     * Function to handle tree events
     * @param object Object that created the event
     */
    this.treeEvent = function(command)
    {
        var idSplit = command.split("|");              // split ID into tree/command/id
        switch(idSplit[1])                             // switch command
        {
            case "select":
                if (idSplit[0] == "tree1")             // which tree
                {
                    var eventTree = leftTree;
                    leftDataTree.retSubClass(idSplit[3]);
                }
                else
                {
                    var eventTree = rightTree;
                    rightDataTree.retSubClass(idSplit[3]);
                }
                eventTree.counter = 0;                 // reset counter
                if (eventTree.selectedEntry) eventTree.selectedEntry.setSelected(false);
                eventTree.selectedEntry = this.treeFindID(eventTree, idSplit[2], eventTree);
                eventTree.selectedEntry.setSelected(true);
                eventTree.draw();                      // redraw tree
                //break; // Do not break, but expand tree!
            case "expand":                             // command: expand branch
                if (idSplit[0] == "tree1")             // which tree
                {
                    var eventTree = leftTree;
                }
                else
                {
                    var eventTree = rightTree;
                }
                eventTree.counter = 0;                 // reset counter
                /** Find Element with ID */
                this.treeFindID(eventTree, idSplit[2], eventTree).collapse = false;
                eventTree.draw();                      // redraw tree
                break;
            case "collapse":                           // command: collapse branch
                if (idSplit[0] == "tree1")             // which tree
                {
                    var eventTree = leftTree;
                }
                else
                {
                    var eventTree = rightTree;
                }
                eventTree.counter = 0;                 // reset counter
                /** Find Element with ID */
                this.treeFindID(eventTree, idSplit[2], eventTree).collapse = true;
                eventTree.draw();                      // redraw tree
                break;
            default:                                   // unknown command
                alert("Error: Unknown command: "+idSplit[0]);
                break;
        }
    }
    
    /**
     * Tree Find ID
     * Finds an entry of a tree by its ID
     * @param tree tree to be searched in
     * @param id id to be found
     * @param root of the tree
     * @return Object with this ID
     */
    this.treeFindID = function(tree, id, root)
    {
        for (var i = 0; i < tree.content.length; i++)    // search the whole tree
        {
            if (root.counter == id)                      // if entry was found
            {
                return tree.content[i];                  // return object
            }
            root.counter++;                              // count up
            
            /** if entry contains entries and isn't collapsed */
            if ((tree.content[i].content.length != 0) && (tree.content[i].collapse == false))
            {
                var returnvalue = treeEvent.treeFindID(tree.content[i], id, root) // recursive
                if (returnvalue != 0)                   // abort if found
                {
                    return returnvalue;
                }
            }
        }
        return 0;                                       // object not found
    }    
}
