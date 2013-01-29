/**
 * @class global <br>
 * Initializing script
 * @author <a href="mailto:powerswitch@betriebsdirektor.de">Simon Vetter</a>
 * @version 1.02 (13.04.2012)
 */
function init()
{
    ip = new Ip();
    ip.init();
    
    /* Create a new graphical user interface instance */
    gui = new Gui();

    /* Create a new map instance */
    map = new Map();
    /* display map in div id='map' at location Leipzig with zoom step 12 */
    map.init('map', 12.387, 51.310, 12);

    /* Create new tree event listener */
    treeEvent = new TreeEvent();

    /* Create trees */
    leftTree = new Tree("tree1");
    leftDataTree  = new DataTree (leftTree);

    rightTree = new Tree("tree2");
    rightDataTree = new DataTree(rightTree);

    /* Create language Table */
    langTable = new LangTable();

    /* Create user */
    user = new User(langTable);

    /* Create userpanel */
    userpanel = new Userpanel(user);

    /* Create different stuff */
    dropdown = new Dropdown();
    
    sparqlLib = new SparqlLib();

    linklist = new LinkList();

    linking = new Linking();

    createXML = new CreateXML();
}

/**
 * Map loading start event function
 * @author <a href="mailto:powerswitch@betriebsdirektor.de">Simon Vetter</a>
 * @version 1 (17.03.2012)
 */
function loadStartMessage()
{
    gui.message("loading map...");
}

/**
 * Map loading start event function
 * @author <a href="mailto:powerswitch@betriebsdirektor.de">Simon Vetter</a>
 * @version 1 (17.03.2012)
 */
function loadEndMessage()
{
    gui.message("ready.");
}
