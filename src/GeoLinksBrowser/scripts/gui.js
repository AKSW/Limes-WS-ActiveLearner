/**
 * @class Gui
 * Graphical User Interface class <br>
 * This is a graphical user interface to control gui elements such as the status bar and message boxes
 * @author <a href="mailto:powerswitch@betriebsdirektor.de">Simon Vetter</a>
 * @version 2 (18.03.2012)
 */
function Gui()
{
    this.lastmessage = ''; // Last shown status message, restored after tooltip
    this.tooltipIsShown = 0; // Is a tooltip displayed

    /**
     * Displays a tooltip on the status bar (footer)
     * @param message Tooltop to be displayed
     */
    this.tooltip = function(message)
    {
        this.tooltipIsShown = 1;
        document.getElementById("footer").innerHTML = "Tooltip: "+message;
    }
    
    /**
     * Hides a tooltip and restores last message
     */
    this.hideTooltip = function()
    {
        this.tooltipIsShown = 0;
        document.getElementById("footer").innerHTML = this.lastmessage;
    }
    
    /**
     * Displays a specific message on the status bar (footer)
     * @param message Message to be displayed
     */
    this.message = function(message)
    {
        this.lastmessage = message; // Save message (until tooltip hides)
        if (this.tooltipIsShown == 0) // prefer tooltips
        {
            document.getElementById("footer").innerHTML = message;
        }
    }
    
    /**
     * Show message box
     * @param message message to be shown (important)
     */
    this.showMessageBox = function(message)
    {
        document.getElementById("messagebox").innerHTML = message;
        document.getElementById("messagebox").className = "visible";
    }
    
    /**
     * Hide message box
     */
    this.hideMessageBox = function()
    {
        document.getElementById("messagebox").className = "hidden";
        document.getElementById("messagebox").innerHTML = "Unknown error!";
    }
    
    /**
     * Blurs the panel content and displays a loading animation
     * @param tree which tree is it about
     */
    this.showLoadingTree = function(tree)
    {
        document.getElementById(tree.divid).className="panelblur";
        document.getElementById(tree.divid.replace(/tree/,"treeloading")).className="visible";
        this.message("loading tree...");
    }

    /**
     * Blurs the panel content and displays a loading animation
     * @param tree which tree is it about
     */
    this.hideLoadingTree = function(tree)
    {
        document.getElementById(tree.divid).className="panel";
        document.getElementById(tree.divid.replace(/tree/,"treeloading")).className="hidden";
        this.message("ready.");
    }

}
