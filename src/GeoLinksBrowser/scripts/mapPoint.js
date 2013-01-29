/**
 * @class MapPoint <br>
 * draw a marker at the map representing a dataMapPoint
 * @author <a href="mailto:mam10crs@studserv.uni-leipzig.de">Lydia Lotzmann</a>
 * @version 2 (20.05.2012)
 */
function MapPoint()
{
    this.point;                        // dataMapPoint object
    this.plan;                         // Map object
    this.marker;                       // Point at marker-layer

    /**
     * Initializes the MapPoint
     * @param dataMapPoint Point which should be shown at the map
     * @param map Map on which point belongs to
     */
    this.init = function(dataMapPoint, map)
    {
        this.point = dataMapPoint;
        this.plan = map;
    }
    
    /**
     * Show Point at the map
     * via red, green or blue marker
     */
    this.showPoint = function()
    {
        var size = new OpenLayers.Size(21,25);
        var offset = new OpenLayers.Pixel(-(size.w/2), -size.h);
        var icon;

        //set color of the marker
        switch(this.point.id)
        {
            case 1:
                icon = new OpenLayers.Icon('http://www.openlayers.org/dev/img/marker.png', size, offset);
                break;
            
            case 2:
                icon = new OpenLayers.Icon('http://www.openlayers.org/dev/img/marker-green.png', size, offset);
                break;

            default:
                icon = new OpenLayers.Icon('http://www.openlayers.org/dev/img/marker-blue.png', size, offset);
                break;
        }

        // initialize marker
        this.marker = new OpenLayers.Marker(new OpenLayers.LonLat(this.point.long,this.point.lat)
                        .transform(
                            new OpenLayers.Projection("EPSG:4326"),
                            this.plan.map.getProjectionObject()
                        ), icon);

        // add marker to the map
        this.plan.markers.addMarker(this.marker);

    }

    /**
     * Remove Point from the map
     */
    this.hidePoint = function()
    {
        this.plan.markers.removeMarker(this.marker);
    }
}
