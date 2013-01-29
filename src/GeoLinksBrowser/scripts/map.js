/**
 * @class Map <br>
 * Open Layers Map from OpenStreetMaps.org <br>
 * This class creates a map using OpenLayers
 * @author <a href="mailto:powerswitch@betriebsdirektor.de">Simon Vetter</a>
 * @version 2.01 (04.04.2012)
 */
function Map()
{
    this.map;                                        // Map object
    this.layer;                                      // Layer object
    this.markers;                                    // Layer object
    this.linelayer;                                  // Layer object
    
    /**
     * Called, when the user selected a new Rectangle to work on
     * @param event An OpenLayers event object.
     */
    this.newWorkArea = function(event) {
        /* FIXME: Call a function which informs Dennis' code about the new
         * rectangle, e.g.: window.alert(bounds)
         * http://dev.openlayers.org/docs/files/OpenLayers/BaseTypes/Bounds-js.html
         */
        bounds = event.geometry.getBounds()
        bounds = bounds.transform(this.map.getProjectionObject(), new OpenLayers.Projection("EPSG:4326"));

        //window.alert(bounds)
    }

    var boxselection = new OpenLayers.Control.Measure(
        OpenLayers.Handler.RegularPolygon,
        {handlerOptions : {irregular: true}}
    );
    boxselection.events.on({"measure": this.newWorkArea});

    /**
     * Subclasses the OpenLayers NavToolbar for our needs.
     */
    var Toolbar = OpenLayers.Class(OpenLayers.Control.NavToolbar, {
        initialize: function() {
            OpenLayers.Control.Panel.prototype.initialize.apply(this, []);
    
            this.addControls([
                new OpenLayers.Control.Navigation({'zoomWheelEnabled': true}),
                boxselection
            ])
        }}
    );

    /**
     * Initializes the open layers map
     * @param divid ID of the div-tag containing the map
     * @param lon longitude at the beginning
     * @param lat latitude at the beginning
     * @param zoom zoom level at the beginning
     */
    this.init = function(divid, lon, lat, zoom) {
        this.map = new OpenLayers.Map(                // Create new map...
            divid,                                    // div id
            {
                controls:                             // controls:
                [
                    new OpenLayers.Control.PanZoom()  // Pan and zoom control
                ],                                    // Add Map events here
                displayProjection: new OpenLayers.Projection("EPSG:4326")
            }
        );
        
        this.layer = new OpenLayers.Layer.OSM(        // Create new OSM layer
            "Linked Geo Data Map"                
        );
    
        /** Register event listeners */
        this.layer.events.register("loadstart", this, loadStartMessage); // Display loading message
        this.layer.events.register("loadend", this, loadEndMessage);     // Display ready message
    
        //this.map.addLayer(this.layer);                     // add it to map


        this.markers = new OpenLayers.Layer.Markers( "Markers");             // Create Marker layer

        this.map.addLayers([this.layer, this.markers]);                      // Add layers to map

    
        this.map.addControl(new Toolbar());
    
        this.map.setCenter(                                // set map center
            new OpenLayers.LonLat(lon, lat).transform(
                new OpenLayers.Projection("EPSG:4326"),
                this.map.getProjectionObject()
            ), zoom
        );

        /* add line layer */
        this.lineLayer = new OpenLayers.Layer.Vector("Line Layer"); 
        this.map.addLayer(this.lineLayer);                    
        this.map.addControl(new OpenLayers.Control.DrawFeature(this.lineLayer, OpenLayers.Handler.Path));                                     
    }
}
