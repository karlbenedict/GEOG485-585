<!---------------------------------------------------------------------------->
<!-- Week 10 ----------------------------------------------------------------->
<!-- Lecture 02 b 01 a ------------------------------------------------------->
<!-- Web-based Mapping Clients------------------------------------------------>
<!-- OpenLayers Javascript Framework------------------------------------------>
<!---------------------------------------------------------------------------->
 

# Week 10 - Module 2b - OpenLayers 3 Javascript Framework# {.module02b01a}

### Overview ###  {.module02b01a}

* Capabilities

* OpenLayers = Javascript (by example)


### OpenLayers Capabilities ###  {.module02b01a}

* Support for Multiple basemaps: _BingMaps_, _MapQuest_, _OpenStreetMap_, _Stamen_
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

[Application Programming Interface (API) Reference](http://openlayers.org/en/v3.14.2/apidoc/index.html)

[Examples](http://openlayers.org/en/v3.14.2/examples/)

### Demonstrations and Examples ###  {.module02b01a}

* [Basic Mapper](sample-files/OpenLayers/OpenLayers_01.html) (with MapQuest base map ([source](https://github.com/UNM-GEOG-485-585/class-materials/blob/master/sample-files/OpenLayers/OpenLayers_01.html)))

<div class="codeTable">

OpenLayers_01.html

~~~~~~~~~~ {#OpenLayers_01_demo .html .numberLines}
<html>

<head>
	<link rel="stylesheet" href="css/OpenLayers_01.css" type="text/css">
	<link rel="stylesheet" href="http://openlayers.org/en/v3.14.2/css/ol.css" type="text/css">
    <!-- you can use this line if you want to use the hosted version instead of the local copy -->
	<!-- <script src="http://openlayers.org/en/v3.14.2/build/ol.js" type="text/javascript"></script> -->
	<script src="js/v3.14.2/build/ol.js" type="text/javascript"></script>
</head>

<body>
	<h1>This is a very simple OpenLayers 3 sample map page</h1>

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
		source: new ol.source.MapQuest({layer: 'sat'})
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
	hwight:100%
}

#map {
	width:600px;
	height:400px
}
~~~~~~~~~~

</div>


### Demonstration and Examples - Online Resources ###  {.module02b01a}
* [Mapper](sample-files/OpenLayers/OpenLayers_02_basemaps.html) ([source](https://github.com/UNM-GEOG-485-585/class-materials/blob/master/sample-files/OpenLayers/OpenLayers_02_basemaps.html)) with a variety of base maps (MapQuest, Stamen, OSM) and basic layer selection
* Basic Mapper with Controls: [No Controls](sample-files/OpenLayers/OpenLayers_01_noControls.html) ([source](https://github.com/UNM-GEOG-485-585/class-materials/blob/master/sample-files/OpenLayers/OpenLayers_01_noControls.html)), [Customized Controls](sample-files/OpenLayers/OpenLayers_01_controlArray.html) ([source](https://github.com/UNM-GEOG-485-585/class-materials/blob/master/sample-files/OpenLayers/OpenLayers_01_controlArray.html))


## Next Week - Custom Features and WMS Layers ##  {.module02b01a}

