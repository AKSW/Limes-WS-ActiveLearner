/**
 * @class Dropdown <br>
 * Drop Down Menu
 * @author <a href="mailto:martin@medi-inf.org">Martin Grohmann</a>
 * @version 1 (20.05.2012)
 */
function Dropdown() {
    var timeout       = 500;
    var closetimer    = 0;
    var ddmenuitem    = 0;
    
    /**
     * mopen <br>
     * open hidden layer
     */
    this.mopen = function(id)
    {
        // cancel close timer
        this.mcancelclosetime();
    
        // close old layer
        if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';
    
        // get new layer and show it
        ddmenuitem = document.getElementById(id);
        ddmenuitem.style.visibility = 'visible';
    
    }

    /**
     * mclose <br>
     * close showed layer
     */
    this.mclose = function()
    {
        if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';
    }
    

    /**
     * mclosetime <br>
     * go close timer
     */
    this.mclosetime = function()
    {
        closetimer = window.setTimeout(this.mclose, timeout);
    }
    
    /**
     * mcancelclosetime <br>
     * cancel close timer
     */
    this.mcancelclosetime = function()
    {
        if(closetimer)
        {
            window.clearTimeout(closetimer);
            closetimer = null;
        }
    }
    

    /**
     * resetDatabase1 <br>
     * resets the left Database Button to initial state
     */
    this.resetDatabase1 = function()
    {
        document.getElementById("btn_dropdown1").value = "Knowledgebase";
    }

    /**
     * resetDatabase2 <br>
     * resets the right Database Button to initial state
     */
    this.resetDatabase2 = function()
    {
        document.getElementById("btn_dropdown2").value = "Knowledgebase";
    }

    /**
     * setDatabase1 <br>
     * setter for Database1 (left Button)
     */
    this.setDatabase1 = function(databaseInput1)
    {
        database1 = databaseInput1;
        leftTree.clear();
        leftDataTree.setDB(database1);
        document.getElementById("btn_dropdown1").value = "KB1: " + database1;
        this.mclose();

        document.getElementById("btn_dropdown1").className = "headbuttons fixedWidth ddm";
    }
    
    
    /**
     * setDatabase2 <br>
     * setter for Database2 (rightButton)
     */
    this.setDatabase2 = function(databaseInput2)
    {
		database2 = databaseInput2;
        rightTree.clear();
        rightDataTree.setDB(database2);
        document.getElementById("btn_dropdown2").value = "KB2: " + database2;
        this.mclose();

        document.getElementById("btn_dropdown2").className = "headbuttons fixedWidth ddm-green";

    }
    
    /**
     * getDatabase1 <br>
     * getter for Database 1 (left Button)
     */
    this.getDatabase1 = function()
    {
        return database1;
    }
      
    /**
     * getDatabase2 <br>
     * getter for Database 1 (right Button)
     */
    this.getDatabase2 = function()
    {
        return database2;
    }

}
