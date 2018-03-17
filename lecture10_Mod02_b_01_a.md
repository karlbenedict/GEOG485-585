---
...

<!---------------------------------------------------------------------------->
<!-- Week 10 ----------------------------------------------------------------->
<!-- Lecture 02 b 01 a ------------------------------------------------------->
<!-- Web-based Mapping Clients------------------------------------------------>
<!-- OpenLayers Javascript Framework------------------------------------------>
<!---------------------------------------------------------------------------->
 
# Week 10 - Module 2b - OpenLayers 4 Javascript Framework 
 

### Overview ###  {.module02b01a}

* Capabilities

* OpenLayers = Javascript (by example)


### OpenLayers Capabilities ###  {.module02b01a}

* Support for Multiple basemaps: _BingMaps_, _OpenStreetMap_, _Stamen_
* Model for interaction with multiple map server platforms: _ArcGIS_ (REST),  _MapServer_, _GeoServer_
* Support for key OGC standards: _WMS_, _WMTS_, _WFS_, _GML_, _KML_
* Multiple control types: _Attribution_, _Zoom_, _Overview_, _Scale_, _FullScreen_, _Graticule_
* Custom styled features with associated attributes: _Curve_, _LinearRing_, _LineString_, _MultiLineString_, _MultiPoint_, _MultiPolygon_, _Point_, _Polygon_
* Support for many formats for data read and write: _ATOM_, _GML_ (1, 2, 3), _GeoJSON_, _GPX_, _KML_, _WKT_, any many others
* Open Source, enabling modification and integration into other systems (e.g. [GeoExt](http://geoext.org/))


### Distinguishing Characteristics Between OpenLayers and Google Maps ###  {.module02b01a}

* Greater emphasis on client-side processing - Client access and rendering of data files that Google's servers otherwise take care of (pros & cons to this approach)
* Integrated support for OGC services and their products
* Support for different projections (adds complexity)
* API more rich in options ==> more complexity


### Resources ###  {.module02b01a}

[OpenLayers Home Page](http://openlayers.org/)

[Application Programming Interface (API) Reference](http://openlayers.org/en/latest/apidoc/)

[Examples](http://openlayers.org/en/latest/examples/)

### Demonstrations and Examples ###  {.module02b01a}


<div class="codeTable">

OpenLayers_01.html

~~~~~~~~~~ {#OpenLayers_01_demo .html .numberLines}
<html>

<head>
	<link rel="stylesheet" href="css/OpenLayers_01.css" type="text/css">
	
	<!-- these two files are imported from a host that provides a hosted full 
	build of the OpenLayers package for development as documented here: 
	https://openlayers.org/download/ -->
	<link 
	    rel="stylesheet" 
	    href="https://cdnjs.cloudflare.com/ajax/libs/openlayers/4.6.4/ol.css" 
	    type="text/css">
	<script 
	    src="https://cdnjs.cloudflare.com/ajax/libs/openlayers/4.6.4/ol.js" 
	    type="text/javascript">
	</script>
</head>

<body>
	<h1>This is a very simple OpenLayers 4 sample map page</h1>

	<div id='map'><!-- This is where the map will be displayed --></div>

	<!-- import the external Javascript file with the map configuration code -->
	<script src="js/OpenLayers_01.js" type="text/javascript"></script>
</body>

</html>
~~~~~~~~~~

OpenLayers_01.js

~~~~~~~~~~ {.html .numberLines}
// OpenLayers_01.js

var myMap = new ol.Map({
	target: 'map',
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

~~~~~~~~~~

OpenLayers_01.css

~~~~~~~~~~ {.html .numberLines}
/* OpenLayers_01.css */

body {
	width:100%;
	height:100%
}

#map,.map {
	width:600px;
	height:400px;
}

#map_selector li {
	cursor:pointer;
	width:350px;
}

#map_selector li:hover {
	background-color: yellow;
}



#map div.ol-viewport div.ol-overlaycontainer-stopevent 
div.ol-overviewmap.ol-unselectable.ol-control.ol-uncollapsible {
	top: 200px;
	bottom: 300px;
}

~~~~~~~~~~

</div>


### Demonstration and Examples - Online Resources ###  {.module02b01a}
* [Basic Mapper](http://karlbenedict.com/GEOG485-585/sample-files/OpenLayers/OpenLayers_01.html) (with Open Street Map base map ([source](https://github.com/karlbenedict/GEOG485-585/blob/master/sample-files/OpenLayers/OpenLayers_01.html)))
* [Mapper](http://karlbenedict.com/GEOG485-585/sample-files/OpenLayers/OpenLayers_02_basemaps.html) ([source](https://github.com/karlbenedict/GEOG485-585/blob/master/sample-files/OpenLayers/OpenLayers_02_basemaps.html)) with a variety of base maps (Bing, Stamen, OSM) and basic layer selection
* Basic Mapper with Controls: [No Controls](http://karlbenedict.com/GEOG485-585/sample-files/OpenLayers/OpenLayers_01_noControls.html) ([source](https://github.com/karlbenedict/GEOG485-585/blob/master/sample-files/OpenLayers/OpenLayers_01_noControls.html)), [Customized Controls](http://karlbenedict.com/GEOG485-585/sample-files/OpenLayers/OpenLayers_01_controlArray.html) ([source](https://github.com/karlbenedict/GEOG485-585/blob/master/sample-files/OpenLayers/OpenLayers_01_controlArray.html))


## Next Week - Custom Features and WMS Layers ##  {.module02b01a}

