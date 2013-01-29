/**
 * @class User <br>
 * stores information about the user
 * @author Dennis Konrfus ;-)
 * @version 1 (20.05.2012)
 * @param table the langTable object to look in for BrowserLang-SparqlLang mapping
 */
function User(table)
{    
    
    this.langTable = table;
    this.name = null;
    this.browserLang = navigator.language;
    this.langTag = this.langTable.getSparqlTag(this.browserLang);

    /**
     * getLang - returns Userlanguage (Browser Language)
     */
    this.getBrowserLang = function()
    {
	return this.browserlang;
    }


    /**
     * getSparqlTag - returns the Sparql language Tag belonging to the current BrowserLang
     */
    this.getSparqlTag = function()
    {
	return this.langTag;
    }

    /**
     * setName - set Username
     */
    this.setName = function(namevar)
    {
	this.name = namevar;
    }


    /**
     * getName - get the Users name
     */
    this.getName = function()
    {
        if (this.name == null)
        {
            return (ip.client);
        }

	return this.name;
    }
}