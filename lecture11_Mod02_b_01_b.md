---
title: Week 11 - Module 2b - OpenLayers Javascript Framework
...


<!---------------------------------------------------------------------------->
<!-- Week 11 ----------------------------------------------------------------->
<!-- Lecture 02 b 01 b ------------------------------------------------------->
<!-- Web-based Mapping Clients------------------------------------------------>
<!-- OpenLayers Javascript Framework------------------------------------------>
<!---------------------------------------------------------------------------->


### Overview ###  {.module02b01b}

* More detailed Map Object Options

* More detailed Layer Object Options

* Additional Map Layer Types - With Examples



### Map Object Options ###

* Map Object Options [API Reference](http://openlayers.org/en/latest/apidoc/ol.Map.html)
* View Object Options [API Reference](http://openlayers.org/en/latest/apidoc/ol.View.html)
* Layer Object Options
	* `ol.layer.Tile` [API Reference](http://openlayers.org/en/latest/apidoc/ol.layer.Tile.html)
	* `ol.layer.Image` [API Reference](http://openlayers.org/en/latest/apidoc/ol.layer.Image.html)
	* `ol.layer.Vector` [API Reference](http://openlayers.org/en/latest/apidoc/ol.layer.Vector.html)
	* `ol.layer.VectorTile` [API Reference](http://openlayers.org/en/latest/apidoc/ol.layer.VectorTile.html)
	* `ol.layer.Heatmap` [API Reference](http://openlayers.org/en/latest/apidoc/ol.layer.Heatmap.html)

A variety of strategies for constructing a new `OpenLayers.Map` object

<div class="codeTable inflow">

~~~~~~~~~~  {#OpenLayers_02_Map_options .html .numberLines}
// create a map with minimum required elements and default 
// options in an element with the id "map1"
var myMap = new ol.Map({
	target: 'map1',
	// a map without layers can be defined and in that case a map with no layers
	// will be rendered
	layers: [
  		new ol.layer.Tile({
            source: new ol.source.OSM()
        })
	],
	view: new ol.View({
		center: ol.proj.fromLonLat([-106.624083,35.08427]),
		zoom: 18
		})
	});


// create a map with options specified in a separate 'options' variable and
// included by reference in the code to create the new map object
var options = {
	// required options
	target:'map2',
	layers: ...,
	view: ...,
	
	// optional options - only include those that you need
	controls: ...,
	pixelRatio: ...,
	interactions: ...,
	keyboardEventTarget: ...,
	loadTilesWhileAnimating: ...,
	loadTilesWhileInteracting: ...,
	logo: ...,
	overlays: ...,
	renderer: ...	
};
var map = new ol.Map(options);

// map with non-default options - same as above but with a single argument
var map = new ol.Map({
	// required options
	target:'map2',
	layers: ...,
	view: ...,
	
	// optional options - only include those that you need
	controls: ...,
	pixelRatio: ...,
	interactions: ...,
	keyboardEventTarget: ...,
	loadTilesWhileAnimating: ...,
	loadTilesWhileInteracting: ...,
	logo: ...,
	overlays: ...,
	renderer: ...	
});

// the following commands can be executed to add, set or remove the layers in a map 
// after a map object has been created

map.addLayer(layer)
map.removeLayer(layer)
map.setLayerGroup(layerGroup)

// the view of a layer can be created or modified after the map object has been 
// created by using the following command

map.setView()

// the target DOM object for the map object can be set or changed using 
// the following command

map.setTarget

~~~~~~~~~~	

</div>

### Layer Object Options ###

Layer Types and a subset of sources for each type

* `ol.layer.Image` - a single map image is rendered for this layer type
	* `ol.source.ImageMapGuide` - [API](http://openlayers.org/en/latest/apidoc/ol.source.ImageMapGuide.html) source is a [MapGuide](https://mapguide.osgeo.org/) server hosting data of interest.
	* `ol.source.ImageStatic` - [API](http://openlayers.org/en/latest/apidoc/ol.source.ImageStatic.html) source renders a specified static image file within a specified extent within the map.
	* `ol.source.ImageWMS` - [API](http://openlayers.org/en/latest/apidoc/ol.source.ImageWMS.html) source retrieves a single map image from the specified OGC Web Map Service (WMS). 
	* `ol.source.ImageArcGISRest` - [API](http://openlayers.org/en/latest/apidoc/ol.source.ImageArcGISRest.html) source retrieves a single map image from the specified ArcGIS REST service. 

* `ol.layer.Tile` - map images in a tiled grid are rendered for this layer type
	* `ol.source.TileArcGISRest` - [API](http://openlayers.org/en/latest/apidoc/ol.source.TileArcGISRest.html) source is an ArcGIS REST map or image service
	* `ol.source.TileWMS` - [API](http://openlayers.org/en/latest/apidoc/ol.source.TileWMS.html) source is an OGC Web Map Service (WMS)
	* `ol.source.WMTS` - [API](http://openlayers.org/en/latest/apidoc/ol.source.WMTS.html) source is an OGC Web Map Tile Service ([WMTS](http://www.opengeospatial.org/standards/wmts))

* `ol.layer.VectorTile` - map content is delivered vector data that has been divided into a tile grid and cannot be edited
	* `ol.source.VectorTile` - [API](http://openlayers.org/en/latest/apidoc/ol.layer.VectorTile.html) source delivers vector data tiles for rendering in the client

* `ol.layer.Vector` - map content is delivered as vector data that is rendered by the client and may be edited within the client
	* `ol.source.Vector` - [API](http://openlayers.org/en/latest/apidoc/ol.source.Vector.html) the source for vector feature(s) that constitute a vector layer. The individual features are [`ol.Feature`](http://openlayers.org/en/latest/apidoc/ol.Feature.html) objects that consist of at least one [geometry](http://openlayers.org/en/latest/apidoc/ol.geom.html), or a [collection](http://openlayers.org/en/latest/apidoc/ol.geom.GeometryCollection.html) of geometries and any additional attributes that are associated with each feature.

	
Common Pattern of [Layer Object](http://openlayers.org/en/latest/apidoc/ol.layer.Base.html) Creation (varies some depending upon the specific layer type)

<div class="codeTable inflow" >

~~~~~~~~~~  {#OpenLayers_02_Layer_options .html .numberLines}
var layer = new ol.layer.***({
	source: new ol.source.***({
		...
	}),
	other options ...
})
~~~~~~~~~~  
</div>

### Additional Map and Layer Object Functions & Events ###

Both Map and Layer Objects have a number of associated functions as well

* Retrieving object properties programmatically with `Get` functions.
* Modifying existing object properties with `Set` functions
* Map destruction, and reconfiguration
* Linkage of object events with Javascript functions


### WMS Layer Configuration ###

Some key issues to be aware of when using the two WMS supporting layers (`ol.layer.Tile`, and `ol.layer.Image`) and their associated WMS sources (`ol.source.TileWMS` and `ol.source.ImageWMS` respectively) include:

* The _projection_ of the map object must be supported by the included WMS service (review the WMS GetCapabilities response to see what projections are supported by the service). If you don't specify a `projection` parameter as part of the map object's `view` property a default *Web Mercator* (EPSG:3857) projection is used for the map. Information about how to define and set map projections in OpenLayers is found [here](http://openlayers.org/en/latest/doc/faq.html#how-do-i-change-the-projection-of-my-map-)
* The _layers_ parameter as part of the `params` option must be provided as part of the server-related property list (the layer names may also be found in the GetCapabilities response)
* Other WMS parameters (again as part of the `params` option) may be provided as well to "adjust" the request automatically generated by OpenLayers
* Use of a tiled WMS may produce unwanted repetition of labels included in the WMS. If that is the case you can use a single-image `ol.layer.Image` layer type to allow the WMS server to handle the distribution of layers across the entire map image instead of including them in each individual map image. 

Sample WMS Layer Object Creation

<div class="codeTable inflow">

~~~~~~~~~~  {#OpenLayers_02_WmsLayer_options .html .numberLines}
// OpenLayers_03_wms.js

///////////////////////////////////////////////////////////////////////////////
// define layer objects

var basemap_tiled = new ol.layer.Tile({
	source: new ol.source.TileWMS({
	url: 'https://basemap.nationalmap.gov/arcgis/services/USGSTopo/MapServer/WmsServer?',
	  params: {
		LAYERS: 0,
		FORMAT: 'image/png',
		TRANSPARENT: true
	  },
	  attributions: [
	    new ol.Attribution({
		  html: 'Data provided by the <a href="http://basemap.nationalmap.gov">National Map</a>.'
		})
	  ]
	})
})

var basemap_single = new ol.layer.Image({
	source: new ol.source.ImageWMS({
		url: 'https://basemap.nationalmap.gov/arcgis/services/USGSTopo/MapServer/WmsServer?',
	  	params: {
			LAYERS: 0,
			FORMAT: 'image/png',
			TRANSPARENT: true
	  	},
	  	attributions: [
	    	new ol.Attribution({
		  		html: 'Data provided by the <a href="http://basemap.nationalmap.gov">National Map</a>.'
			})
	  	]
	})
})

var states_single = new ol.layer.Image({
	source: new ol.source.ImageWMS({
		attributions: new ol.Attribution({
			html: 'State Boundary Restructured - USGS, National Atlas Release 5-14-12'
		}),
		params: {'LAYERS':'global:statep010'},
		url: 'http://mapper.internetmapping.net:8081/geoserver/global/wms?',
		serverType: 'geoserver'
	})
})

var states_tiled = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		attributions: new ol.Attribution({
			html: 'State Boundary Restructured - USGS, National Atlas Release 5-14-12'
		}),
		params: {'LAYERS':'global:statep010'},
		url: 'http://mapper.internetmapping.net:8081/geoserver/global/wms?',
		serverType: 'geoserver'
	})
})



///////////////////////////////////////////////////////////////////////////////
// create our base map objects 
var singleMap = new ol.Map({
	target: 'map_image',
	layers: [basemap_single,states_single], //[basemap_single,states_single]
	view: new ol.View({
		// the approximate geographic center of the continental US
		center: ol.proj.fromLonLat([-98.58,39.83]),
		zoom: 3,
		projection: 'EPSG:3857'
		})
	});


var tiledMap = new ol.Map({
	target: 'map_tiled',
	layers: [basemap_tiled,states_tiled], //[basemap_tiled,states_tiled]
	view: new ol.View({
		// the approximate geographic center of the continental US
		center: ol.proj.fromLonLat([-98.58,39.83]),
		zoom: 3,
		projection: 'EPSG:3857'
		})
	});
	
var mixedMap = new ol.Map({
	target: 'map_mixed',
	layers: [basemap_tiled,states_single], //[basemap_tiled,states_single]
	view: new ol.View({
		// the approximate geographic center of the continental US
		center: ol.proj.fromLonLat([-98.58,39.83]), 
		zoom: 3,
		projection: 'EPSG:3857'
		})
	});

///////////////////////////////////////////////////////////////////////////////

~~~~~~~~~~

</div>

Example: [HTML](https://github.com/karlbenedict/GEOG485-585/blob/master/sample-files/OpenLayers/OpenLayers_03_wms.html), [Javascript](https://github.com/karlbenedict/GEOG485-585/blob/master/sample-files/OpenLayers/js/OpenLayers_03_wms.js)


### Vector Layer Configuration ###

Vector layers support

* External Data in a Variety of supported [formats](http://openlayers.org/en/latest/apidoc/ol.format.html) for both _reading_ and _writing_ (just a sample): [GML 2](http://openlayers.org/en/latest/apidoc/ol.format.GML2.html) and [GML 3](http://openlayers.org/en/latest/apidoc/ol.format.GML3.html), [GPX](http://openlayers.org/en/latest/apidoc/ol.format.GPX.html), [GeoJSON](http://openlayers.org/en/latest/apidoc/ol.format.GeoJSON.html),  [KML](http://openlayers.org/en/latest/apidoc/ol.format.KML.html), [WFS](http://openlayers.org/en/latest/apidoc/ol.format.WFS.html), [WKT](http://openlayers.org/en/latest/apidoc/ol.format.WKT.html), [Open Streetmap XML](http://openlayers.org/en/latest/apidoc/ol.format.OSMXML.html)
* Directly encoded [geometries](http://openlayers.org/en/latest/apidoc/ol.geom.html): Circle, Geometry, GeometryCollection, LinearRing, LineString, MultiLineString, MultiPoint, MultiPolygon, Point, Polygon, SimpleGeometry 
* User created features, including support for interactive editing of features
* [Styling](http://openlayers.org/en/latest/apidoc/ol.style.html) of Vector features

<div class="codeTable inflow">

Sample Point Feature Object creation

~~~~~~~~~~  {#OpenLayers_02_VectorLayer_options01 .html .numberLines}
var classroomCoord = [-106.624073,35.084280]
var officeCoord = [-106.624899,35.084506]

var classroomPoint = new ol.geom.Point(ol.proj.fromLonLat(classroomCoord, projection));
var officePoint = new ol.geom.Point(ol.proj.fromLonLat(officeCoord, projection));
~~~~~~~~~~

Sample KML Layer Object creation with style

~~~~~~~~~~  {#OpenLayers_02_KMLayer_options01 .html .numberLines}
///////////////////////////////////////////////////////////////////////////////
// define some styles

var block_color = [0,255,0,.1]
var block_line_color = [0,255,0,1]
var county_color = [124,124,255,.25]
var county_line_color = [124,124,255,1]

var county_style = new ol.style.Style({
	fill: new ol.style.Fill({
	  color: county_color
	}),
	stroke: new ol.style.Stroke({
	  color: county_line_color,
	  width: 2
	}),
});

var block_style = new ol.style.Style({
	fill: new ol.style.Fill({
	  color: block_color
	}),
	stroke: new ol.style.Stroke({
	  color: block_line_color,
	  width: 1
	}),
});
///////////////////////////////////////////////////////////////////////////////

// unstyled layers

var blocks_kml = new ol.layer.Vector({
	source: new ol.source.Vector({
		url: 'https://s3.amazonaws.com/kkb-web/data/tl_2010_35001_tabblock10.kml',
		projection: projection,
		format: new ol.format.KML()
	})
})

var counties_kml = new ol.layer.Vector({
	source: new ol.source.Vector({
		url: 'https://s3.amazonaws.com/kkb-web/data/2007fe_35_county00.kml',
		projection: projection,
		format: new ol.format.KML()
	})
})


// styled layers 

var counties_kml_styled = new ol.layer.Vector({
	source: new ol.source.Vector({
		url: 'https://s3.amazonaws.com/kkb-web/data/2007fe_35_county00.kml',
		projection: projection,
		format: new ol.format.KML({
			extractStyles:false
		})
	}),
	style: county_style
})

var blocks_kml_styled = new ol.layer.Vector({
	source: new ol.source.Vector({
		url: 'https://s3.amazonaws.com/kkb-web/data/tl_2010_35001_tabblock10.kml',
		projection: projection,
		format: new ol.format.KML({
			extractStyles:false
		})
	}),
	style: block_style
})



~~~~~~~~~~

</div>

Example: [HTML](https://github.com/karlbenedict/GEOG485-585/blob/master/sample-files/OpenLayers/OpenLayers_04_vector.html), [Javascript](https://github.com/karlbenedict/GEOG485-585/blob/master/sample-files/OpenLayers/js/OpenLayers_04_vector.js)

