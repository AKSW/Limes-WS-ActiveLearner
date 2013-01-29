/**
 * @class DataMapPoint <br>
 * represents a geographical point.
 * @author <a href="mailto:mam10crs@studserv.uni-leipzig.de">Lydia Lotzmann</a>
 * @version 2 (03.04.2012)
 */
function DataMapPoint()
{
    this.db;
    this.id;
    this.long;
    this.lat;

    /**
     * Initializes the DataMapPoint
     * @param db used database
     * @param id identification of the Database
     * @param long longitude
     * @param lat latitude
     */
    this.init = function(db, id, long, lat){
        this.db = db;
        this.id = id;
        this.long = long;
        this.lat = lat; 
    } 

    /**
     * Setter db
     * @param dbase string described used knowledge base
     */
    this.setDb = function(dbase)
    {
        this.db = dbase;
    }

    /**
     * Getter db
     */
    this.getDb = function()
    {
        return this.db;
    }

    /**
     * Setter long
     * @param lo float longitude of map-point
     */
    this.setLong = function(lo)
    {
        this.long = lo;
    }

    /**
     * Getter long
     */
    this.getLong = function()
    {
        return this.long;
    }

    /**
     * Setter lat
     * @param la float latitude of map-point
     */
    this.setLat = function(la)
    {
        this.lat = la;
    }

    /**
     * Getter lat
     */
    this.getLat = function()
    {
        return this.lat;
    }
}
