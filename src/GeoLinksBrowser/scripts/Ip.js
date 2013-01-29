/**
 * @class Ip <br>
 * Get the clients IP address using PHP
 * @author <a href="mailto:powerswitch@betriebsdirektor.de">Simon Vetter</a>
 * @version 2 (03.05.2012)
 */
function Ip()
{
    this.client = "127.0.0.1"; // IP Fallback
    
    /**
     * Inits the Ajax XML Http Request
     */
    this.init = function()
    {
        var phpAjax = 0; // Init phpAjax
        if (window.XMLHttpRequest) // If Browser supports XMLHttpRequest (not IE5/6)
        {
            phpAjax = new XMLHttpRequest();    // Create new XMLHttpRequest (Ajax)
        }
        else
        {
            phpAjax = new ActiveXObject("Microsoft.XMLHTTP"); // Fallback for IE5/6 srsly, who needs that?
        }
        phpAjax.onreadystatechange = function()
        {
            /** if request was completed (4) without errors (200) */
            if (phpAjax.readyState==4 && phpAjax.status==200)
            {
                ip.setClientIP(phpAjax.responseText);
            }
        };
        phpAjax.open("GET","scripts/getIp.php",false);
        phpAjax.send();
    }
    
    /**
     * Sets the current user IP
     * @param client the client's IP
     */  
    this.setClientIP = function(client)
    {
        this.client = client;
    }
    
    /** 
     * Get Client IP
     * @return client IP
     */
    this.getClientIP = function()
    {
        return this.client;
    }
}

