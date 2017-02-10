---
title: Week 3- Module 2a - Web-based Mapping Clients. Google Maps API
...

<!---------------------------------------------------------------------------->
<!-- Week 03 ----------------------------------------------------------------->
<!-- Lecture 02 a 02 a ------------------------------------------------------->
<!-- Web-based Mapping Clients------------------------------------------------>
<!-- Google Maps API---------------------------------------------------------->
<!---------------------------------------------------------------------------->


### Outline ### {.module02a02a}

* What is an API

* The Google Maps API
	* Version
	* Reference Information
	* Key Components
	* Examples

### What is an API ### {.module02a02a} 

* API Stands for Application Programming Interface

> An Application Programming Interface (API) is a particular set of rules and specifications that a software program can follow to access and make use of the services and resources provided by another particular software program that implements that API. It serves as an interface between different software programs and facilitates their interaction, similar to the way the user interface facilitates interaction between humans and computers. -- From Wikipedia: [http://en.wikipedia.org/wiki/Api](http://en.wikipedia.org/wiki/Api)

* The Google Maps API provides an interface for interacting with Google’s mapping services from external web applications


### Google Maps API Version ### {.module02a02a} 

* The version of the Google Maps API used in this class is v3 of the Javascript API
	* Freely usable for free applications
	* Subject to Google’s Terms of Service
	* Google [API key is now required](https://developers.google.com/maps/faq?hl=en#using-google-maps-apis)

* Key capabilities in v3
	* Interactive maps based on Google’s mapping engine (contrast w. static maps API)
	* Optimized for desktop and mobile platforms and applications


### Reference Information ### {.module02a02a} 


Google Maps API Family
:	[http://code.google.com/apis/maps/](https://developers.google.com/maps/?csw=1)

Javascript API Home Page
:	[https://developers.google.com/maps/documentation/javascript/?csw=1](https://developers.google.com/maps/documentation/javascript/?csw=1)

Javascript API v3 Tutorial Page
:	[http://code.google.com/apis/maps/documentation/javascript/tutorial.html](https://developers.google.com/maps/documentation/javascript/tutorial?csw=1)



### Key Components ### {.module02a02a} 

* Map [object options](https://developers.google.com/maps/documentation/javascript/reference?csw=1#MapOptions) 

Types (required)
:	ROADMAP
:	SATELLITE
:	HYBRID
:	TERRAIN

Latitude and Longitude (required)
:	specification of where the map should initially be centered

Zoom Level (required)
:	0=global, higher values increasingly local. Limited by map type



### Controls ### {.module02a02a} 

* Available Controls (enabled through map options) [default controls](https://developers.google.com/maps/documentation/javascript/controls?csw=1#DefaultUI)
	* Zoom Control
	* Scale Control
	* MapType Control
	* Street View Control
	* Rotate (for maps that contain 45-degree imagery)
	* Fullscreen Control
* Different control styles may be defined
* Controls may be positioned [positioning options](https://developers.google.com/maps/documentation/javascript/controls?csw=1#ControlPositioning)
* Custom controls may be defined and attached to fixed location in the map



### Overlays ### {.module02a02a} 

Overlay Types [documentation](https://developers.google.com/maps/documentation/javascript/overlays?csw=1)


Marker
:	points depicted by specified or defined icons at locations within the map ([reference](https://developers.google.com/maps/documentation/javascript/markers))

Polyline
:	linear features defined by multiple points with a defined style for the line ([reference](https://developers.google.com/maps/documentation/javascript/shapes))

Polygon
:	closed features defined by multiple points. Supports multi-polygons, and donuts. Line and fill styles may be specified. ([reference](https://developers.google.com/maps/documentation/javascript/shapes))

(Ground) Overlay Maps
:	Image-based map layers that replace or overlay Google layers - registered to the map coordinates ([reference](https://developers.google.com/maps/documentation/javascript/groundoverlays))


Info Windows
:	floating content windows for displaying content defined as HTML, a DOM element, or text string ([reference](https://developers.google.com/maps/documentation/javascript/infowindows))

Layers
:	Grouped display content assigned to a specific layer type: Data (including GeoJSON), KmlLayer (& GeoRSS), Heatmap, FusionTablesLayer, TrafficLayer, TransitLayer, BicyclingLayer ([reference](https://developers.google.com/maps/documentation/javascript/layers))

Custom Overlays
:	definition of programmatically controlled layers ([reference](https://developers.google.com/maps/documentation/javascript/customoverlays))


### Services ### {.module02a02a} 

* Geocoding Service
	* Forward and reverse geocoding: 
		* address to LatLon
		* LatLon to Nearest Address
	* May be biased to current viewport, region
* Directions
	* Based upon an origin, destination, and a variety of additional options
	* Available directions and rendered route
* Distance Matrix
	* Travel distance and duration given a specific mode of travel
* Elevation
	* Delivery of elevation data for locations or paths
* Streetview
	* Integration of Google Streetview within a DOM element
* Maximum Zoom
	* Provides information about the maximum available zoom level


### Events ### {.module02a02a} 

* Events provide the ability to attach custom behaviors to events in the interface. For example:
	* Changing items in the interface as the user zooms in on a map
	* Displaying additional information outside the map when the user clicks a location in the map
	* Synchronizing the behavior of multiple maps as the user interacts with one map
* Requires higher-level Javascript than we will cover in this course




### Examples ### {.module02a02a} 


### Simple - Roadmap ### {.module02a02a} 

![gmaps01.html preview](images/gmaps01.png)\ 

### Simple - Roadmap Code ### {.module02a02a} 

<div class="codeTable">

[gmaps01.html](http://karlbenedict.com/GEOG485-585/sample-files/GoogleMaps/gmaps01.html)

~~~~~~~~~~ {.html .numberLines}
<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="css/mapPage.css">
	</head>

	<body>
		<h1>Sample Map</h1>
		<div id="map_canvas"></div>

	<!-- Let's put our JavaScript down here --------------------------------------------->
		<!-- Load the external JavaScript file with the map definition code -->
		<script src="js/mapPage_01.js"></script>
		
		<!-- Load the API in asynchronous mode and execute the initialize 
			function when done -->
		<script async defer 
			src="https://maps.googleapis.com/maps/api/js?callback=initialize&key=<mykey>">
    	</script>
	</body>
</html>
~~~~~~~~~~

[mapPage.css](http://karlbenedict.com/GEOG485-585/sample-files/GoogleMaps/css/mapPage.css)

~~~~~~~~~~ {.css .numberLines}
/* You must set the height of either the 'html' or 'body' elements for some 
	browsers to properly render the map with a hight taller than 0px */
html { 
	height: 100% }

body { 
	height: 100%; 
	margin: 0px; 
	padding: 0px; 
	background-color: black; 
	color: #CCCCCC;
	text-align: center}
	
#map_canvas { 
	width:90%; 
	height:80%; 
	margin-left:auto; 
	margin-right: auto }
	
.infoBox { 
	color:black }
~~~~~~~~~~

[mapPage_01.js](http://karlbenedict.com/GEOG485-585/sample-files/GoogleMaps/js/mapPage_01.js)

~~~~~~~~~~ {.js .numberLines}
function initialize() {
	var classroom = new google.maps.LatLng(35.084280,-106.624073)
	var mapOptions = {
		zoom: 8,
		center: classroom,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(
		document.getElementById("map_canvas"),
		mapOptions);
}


~~~~~~~~~~

</div>


### Simple - Satellite ### {.module02a02a} 

![gmaps02.html preview](images/gmaps02.png)\ 

### Simple - Satellite Code ### {.module02a02a} 


<div class="codeTable">

[gmaps02.html](http://karlbenedict.com/GEOG485-585/sample-files/GoogleMaps/gmaps02.html)

~~~~~~~~~~ {.html .numberLines}
<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="css/mapPage.css">
	</head>

	<body>
		<h1>Sample Map</h1>
		<div id="map_canvas"></div>

	<!-- Let's put our JavaScript down here --------------------------------------------->
		<!-- Load the external JavaScript file with the map definition code -->
		<script src="js/mapPage_02.js"></script>
		
		<!-- Load the API in asynchronous mode and execute the initialize 
			function when done -->
		
		<script async defer 
			src="https://maps.googleapis.com/maps/api/js?callback=initialize&key=<mykey>">
    	</script>
	</body>
</html>
~~~~~~~~~~

[mapPage_02.js](http://karlbenedict.com/GEOG485-585/sample-files/GoogleMaps/js/mapPage_02.js)

~~~~~~~~~~ {.js .numberLines}
function initialize() {
	var classroom = new google.maps.LatLng(35.084280,-106.624073)
	var mapOptions = {
		zoom: 8,
		center: classroom,
		mapTypeId: google.maps.MapTypeId.SATELLITE
	};
	var map = new google.maps.Map(
		document.getElementById("map_canvas"),
		mapOptions);
}


~~~~~~~~~~

</div>


### Simple - Hybrid ### {.module02a02a} 

![gmaps03.html preview](images/gmaps03.png)\ 

### Simple - Hybrid Code ### {.module02a02a} 


<div class="codeTable">

[gmaps03.html](http://karlbenedict.com/GEOG485-585/sample-files/GoogleMaps/gmaps03.html)

~~~~~~~~~~ {.html .numberLines}
<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="css/mapPage.css">
	</head>

	<body>
		<h1>Sample Map</h1>
		<div id="map_canvas"></div>

	<!-- Let's put our JavaScript down here --------------------------------------------->
		<!-- Load the external JavaScript file with the map definition code -->
		<script src="js/mapPage_03.js"></script>
		
		<!-- Load the API in asynchronous mode and execute the initialize 
			function when done -->
		
		<script async defer 
			src="https://maps.googleapis.com/maps/api/js?callback=initialize&key=<mykey>">
    	</script>
	</body>
</html>
~~~~~~~~~~

[mapPage_03.js](http://karlbenedict.com/GEOG485-585/sample-files/GoogleMaps/js/mapPage_03.js)

~~~~~~~~~~ {.js .numberLines}
function initialize() {
	var classroom = new google.maps.LatLng(35.084280,-106.624073)
	var mapOptions = {
		zoom: 8,
		center: classroom,
		mapTypeId: google.maps.MapTypeId.HYBRID
	};
	var map = new google.maps.Map(
		document.getElementById("map_canvas"),
		mapOptions);
}


~~~~~~~~~~

</div>



### Simple - Terrain ### {.module02a02a} 

![gmaps04.html preview](images/gmaps04.png)\ 

### Simple - Terrain Code ### {.module02a02a} 


<div class="codeTable">

[gmaps04.html](http://karlbenedict.com/GEOG485-585/sample-files/GoogleMaps/gmaps04.html)

~~~~~~~~~~ {.html .numberLines}
<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="css/mapPage.css">
	</head>

	<body>
		<h1>Sample Map</h1>
		<div id="map_canvas"></div>

	<!-- Let's put our JavaScript down here --------------------------------------------->
		<!-- Load the external JavaScript file with the map definition code -->
		<script src="js/mapPage_04.js"></script>
		
		<!-- Load the API in asynchronous mode and execute the initialize 
			function when done -->
		
		<script async defer 
			src="https://maps.googleapis.com/maps/api/js?callback=initialize&key=<mykey>">
    	</script>
	</body>
</html>
~~~~~~~~~~

[mapPage_04.js](http://karlbenedict.com/GEOG485-585/sample-files/GoogleMaps/js/mapPage_04.js)

~~~~~~~~~~ {.js .numberLines}
function initialize() {
	var classroom = new google.maps.LatLng(35.084280,-106.624073)
	var mapOptions = {
		zoom: 8,
		center: classroom,
		mapTypeId: google.maps.MapTypeId.TERRAIN
	};
	var map = new google.maps.Map(
		document.getElementById("map_canvas"),
		mapOptions);
}


~~~~~~~~~~

</div>

### Simple - Hybrid - Zoomed ### {.module02a02a} 

![gmaps05.html preview](images/gmaps05.png)\ 

### Simple - Hybrid - Zoomed Code ### {.module02a02a} 

<div class="codeTable">

[gmaps05.html](http://karlbenedict.com/GEOG485-585/sample-files/GoogleMaps/gmaps05.html)

~~~~~~~~~~ {.html .numberLines}
<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="css/mapPage.css">
	</head>

	<body>
		<h1>Sample Map</h1>
		<div id="map_canvas"></div>

	<!-- Let's put our JavaScript down here --------------------------------------------->
		<!-- Load the external JavaScript file with the map definition code -->
		<script src="js/mapPage_05.js"></script>
		
		<!-- Load the API in asynchronous mode and execute the initialize 
			function when done -->
		
		<script async defer 
			src="https://maps.googleapis.com/maps/api/js?callback=initialize&key=<mykey>">
    	</script>
	</body>
</html>
~~~~~~~~~~

[mapPage_05.js](http://karlbenedict.com/GEOG485-585/sample-files/GoogleMaps/js/mapPage_05.js)

~~~~~~~~~~ {.js .numberLines}
function initialize() {
	var classroom = new google.maps.LatLng(35.084280,-106.624073)
	var mapOptions = {
		zoom: 18,
		center: classroom,
		mapTypeId: google.maps.MapTypeId.TERRAIN
	};
	var map = new google.maps.Map(
		document.getElementById("map_canvas"),
		mapOptions);
}


~~~~~~~~~~

</div>




### Simple - Zoomed - Modified Controls ### {.module02a02a} 

![gmaps06.html preview](images/gmaps06.png)\ 

### Simple - Zoomed - Modified Controls Code ### {.module02a02a} 

<div class="codeTable">

[gmaps06.html](http://karlbenedict.com/GEOG485-585/sample-files/GoogleMaps/gmaps06.html)

~~~~~~~~~~ {.html .numberLines}
<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="css/mapPage.css">
	</head>

	<body>
		<h1>Sample Map</h1>
		<div id="map_canvas"></div>

	<!-- Let's put our JavaScript down here --------------------------------------------->
		<!-- Load the external JavaScript file with the map definition code -->
		<script src="js/mapPage_06.js"></script>
		
		<!-- Load the API in asynchronous mode and execute the initialize 
			function when done -->
		
		<script async defer 
			src="https://maps.googleapis.com/maps/api/js?callback=initialize&key=<mykey>">
    	</script>
	</body>
</html>
~~~~~~~~~~

[mapPage_06.js](http://karlbenedict.com/GEOG485-585/sample-files/GoogleMaps/js/mapPage_06.js)

~~~~~~~~~~ {.js .numberLines}
function initialize() {
var classroom = new google.maps.LatLng(35.084280,-106.624073)
var myOptions = {
	zoom: 18,
	center: classroom,
	mapTypeId: google.maps.MapTypeId.HYBRID,
	zoomControl: true,
	zoomControlOptions: {style: google.maps.ZoomControlStyle.SMALL},
	mapTypeControl: true,
	mapTypeControlOptions: {
	style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
	streetViewControl: false
};
var map = new google.maps.Map(
	document.getElementById("map_canvas"),
	myOptions);
}


~~~~~~~~~~

</div>



### Markers ### {.module02a02a} 

![gmaps07.html preview](images/gmaps07.png)\ 

### Markers Code ### {.module02a02a} 

<div class="codeTable">

[gmaps07.html](http://karlbenedict.com/GEOG485-585/sample-files/GoogleMaps/gmaps07.html)

~~~~~~~~~~ {.html .numberLines}
<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="css/mapPage.css">
	</head>

	<body>
		<h1>Sample Map</h1>
		<div id="map_canvas"></div>

	<!-- Let's put our JavaScript down here --------------------------------------------->
		<!-- Load the external JavaScript file with the map definition code -->
		<script src="js/mapPage_07.js"></script>
		
		<!-- Load the API in asynchronous mode and execute the initialize 
			function when done -->
		
		<script async defer 
			src="https://maps.googleapis.com/maps/api/js?callback=initialize&key=<mykey>">
    	</script>
	</body>
</html>
~~~~~~~~~~

[mapPage_07.js](http://karlbenedict.com/GEOG485-585/sample-files/GoogleMaps/js/mapPage_07.js)

~~~~~~~~~~ {.js .numberLines}
function initialize() {
	var classroom = new google.maps.LatLng(35.084280,-106.624073)
	var office = new google.maps.LatLng(35.084506,-106.624899)
	var myOptions = {
		zoom: 18,
		center: classroom,
		mapTypeId: google.maps.MapTypeId.HYBRID
		};
	var map = new google.maps.Map(
		document.getElementById("map_canvas"), 
		myOptions);

	var classroomMarker = new google.maps.Marker({
		position: classroom,
		title:"Geography 485L/585L Classroom, Bandelier East, Room 106"
		});
	classroomMarker.setMap(map);

	var officeMarker = new google.maps.Marker({
		position: office,
		title:"Office, Bandelier West, Room 107"
		});
	officeMarker.setMap(map);
}


~~~~~~~~~~

</div>



### Polyline ### {.module02a02a} 

![gmaps08.html preview](images/gmaps08.png)\ 

### Polyline Code ### {.module02a02a} 

<div class="codeTable">

[gmaps08.html](http://karlbenedict.com/GEOG485-585/sample-files/GoogleMaps/gmaps08.html)

~~~~~~~~~~ {.html .numberLines}
<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="css/mapPage.css">
	</head>

	<body>
		<h1>Sample Map</h1>
		<div id="map_canvas"></div>

	<!-- Let's put our JavaScript down here --------------------------------------------->
		<!-- Load the external JavaScript file with the map definition code -->
		<script src="js/mapPage_08.js"></script>
		
		<!-- Load the API in asynchronous mode and execute the initialize 
			function when done -->
		
		<script async defer 
			src="https://maps.googleapis.com/maps/api/js?callback=initialize&key=<mykey>">
    	</script>
	</body>
</html>
~~~~~~~~~~

[mapPage_08.js](http://karlbenedict.com/GEOG485-585/sample-files/GoogleMaps/js/mapPage_08.js)

~~~~~~~~~~ {.js .numberLines}
	var classroom = new google.maps.LatLng(35.084280,-106.624073)
	var office = new google.maps.LatLng(35.084506,-106.624899)
	var myOptions = {
		zoom: 18,
		center: classroom,
		mapTypeId: google.maps.MapTypeId.HYBRID
		};
	var map = new google.maps.Map(
		document.getElementById("map_canvas"), 
		myOptions);

	var classroomMarker = new google.maps.Marker({
		position: classroom,
		title:"Geography 485L/585L Classroom, Bandelier East, Room 106"
		});
	classroomMarker.setMap(map);

	var officeMarker = new google.maps.Marker({
		position: office,
		title:"Office, Bandelier West, Room 107"
		});
	officeMarker.setMap(map); 

	var officeVisitCoordinates = [
		office,
		new google.maps.LatLng(35.084445,-106.624327),
		new google.maps.LatLng(35.084309,-106.624308),
		classroom
		];
	var officePath = new google.maps.Polyline({
		path: officeVisitCoordinates,
		strokeColor: "#FF0000",
		strokeOpacity: 1.0,
		strokeWeight: 2
	});
	officePath.setMap(map)
}


~~~~~~~~~~

</div>




### Polygon ### {.module02a02a} 

![gmaps09.html preview](images/gmaps09.png)\ 

### Polygon Code ### {.module02a02a} 

<div class="codeTable">

[gmaps09.html](http://karlbenedict.com/GEOG485-585/sample-files/GoogleMaps/gmaps09.html)

~~~~~~~~~~ {.html .numberLines}
<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="css/mapPage.css">
	</head>

	<body>
		<h1>Sample Map</h1>
		<div id="map_canvas"></div>

	<!-- Let's put our JavaScript down here --------------------------------------------->
		<!-- Load the external JavaScript file with the map definition code -->
		<script src="js/mapPage_09.js"></script>
		
		<!-- Load the API in asynchronous mode and execute the initialize 
			function when done -->
		
		<script async defer 
			src="https://maps.googleapis.com/maps/api/js?callback=initialize&key=<mykey>">
    	</script>
	</body>
</html>
~~~~~~~~~~

[mapPage_09.js](http://karlbenedict.com/GEOG485-585/sample-files/GoogleMaps/js/mapPage_09.js)

~~~~~~~~~~ {.js .numberLines}
function initialize() {
	var classroom = new google.maps.LatLng(35.084280,-106.624073)
	var office = new google.maps.LatLng(35.084506,-106.624899)
	var myOptions = {
		zoom: 18,
		center: classroom,
		mapTypeId: google.maps.MapTypeId.HYBRID
		};
	var map = new google.maps.Map(
		document.getElementById("map_canvas"), 
		myOptions);
	var classroomMarker = new google.maps.Marker({
		position: classroom,
		title:"Geography 485L/585L Classroom, Bandelier East, Room 106"
		});
	classroomMarker.setMap(map);
	var officeMarker = new google.maps.Marker({
		position: office,
		title:"Office, Bandelier West, Room 107"
		});
	officeMarker.setMap(map); 
	var buildingCoordinates = [
		new google.maps.LatLng(35.084498,-106.624921),
		new google.maps.LatLng(35.084558,-106.624911),
		new google.maps.LatLng(35.084566,-106.624970),
		new google.maps.LatLng(35.084609,-106.624966),
		new google.maps.LatLng(35.084544,-106.624383),
		new google.maps.LatLng(35.084438,-106.624317),
		new google.maps.LatLng(35.084384,-106.623922),
		new google.maps.LatLng(35.084164,-106.623970),
		new google.maps.LatLng(35.084214,-106.624324),
		new google.maps.LatLng(35.084214,-106.624324),
		new google.maps.LatLng(35.084391,-106.624284)
		];
	var bldgPoly = new google.maps.Polygon({
		paths: buildingCoordinates,
		strokeColor: "#FF0000",
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: "#FF0000",
		fillOpacity: 0.35
	});
	bldgPoly.setMap(map)
}


~~~~~~~~~~

</div>


### Adding an Info Window ### {.module02a02a} 

![gmaps10.html preview](images/gmaps10.png)\ 

### Adding an Info Window Code ### {.module02a02a} 

<div class="codeTable">

[gmaps10.html](http://karlbenedict.com/GEOG485-585/sample-files/GoogleMaps/gmaps10.html)

~~~~~~~~~~ {.html .numberLines}
<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="css/mapPage.css">
	</head>

	<body>
		<h1>Sample Map</h1>
		<div id="map_canvas"></div>

	<!-- Let's put our JavaScript down here --------------------------------------------->
		<!-- Load the external JavaScript file with the map definition code -->
		<script src="js/mapPage_10.js"></script>
		
		<!-- Load the API in asynchronous mode and execute the initialize 
			function when done -->
		
		<script async defer 
			src="https://maps.googleapis.com/maps/api/js?callback=initialize&key=<mykey>">
    	</script>
	</body>
</html>
~~~~~~~~~~

[mapPage_10.js](http://karlbenedict.com/GEOG485-585/sample-files/GoogleMaps/js/mapPage_10.js)

~~~~~~~~~~ {.js .numberLines}
function initialize() {
	var classroom = new google.maps.LatLng(35.084280,-106.624073)
	var office = new google.maps.LatLng(35.084506,-106.624899)
	var myOptions = {
		zoom: 18,
		center: classroom,
		mapTypeId: google.maps.MapTypeId.HYBRID
		};
	var map = new google.maps.Map(
		document.getElementById("map_canvas"), 
		myOptions);
	var classroomMarker = new google.maps.Marker({
		position: classroom,
		title:"Geography 485L/585L Classroom, Bandelier East, Room 106"
		});
	classroomMarker.setMap(map);
	var officeMarker = new google.maps.Marker({
		position: office,
		title:"Office, Bandelier West, Room 107"
		});
	officeMarker.setMap(map); 
	var buildingCoordinates = [
		new google.maps.LatLng(35.084498,-106.624921),
		new google.maps.LatLng(35.084558,-106.624911),
		new google.maps.LatLng(35.084566,-106.624970),
		new google.maps.LatLng(35.084609,-106.624966),
		new google.maps.LatLng(35.084544,-106.624383),
		new google.maps.LatLng(35.084438,-106.624317),
		new google.maps.LatLng(35.084384,-106.623922),
		new google.maps.LatLng(35.084164,-106.623970),
		new google.maps.LatLng(35.084214,-106.624324),
		new google.maps.LatLng(35.084214,-106.624324),
		new google.maps.LatLng(35.084391,-106.624284)
		];
	var bldgPoly = new google.maps.Polygon({
		paths: buildingCoordinates,
		strokeColor: "#FF0000",
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: "#FF0000",
		fillOpacity: 0.35
		});
	bldgPoly.setMap(map);
	var classInfoContent = '<div class="infoBox">' +
		'<p>This is the location for the Geography 485L/585L class</p>' +
		'</div>'
	var classInfoWindow = new google.maps.InfoWindow({
		content: classInfoContent
		});
	google.maps.event.addListener(classroomMarker, 'click', function() {
		classInfoWindow.open(map,classroomMarker);
		});
	var bldgInfoContent = '<div class="infoBox">' +
		'<p>This is the location of Bandelier East and West on the UNM Campus</p>' +
		'<iframe src="https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2sus!4v1486322485343!6m8!1m7!1sneDc4DwioOJ-TytixzvJEg!2m2!1d35.08459518161192!2d-106.6243050674837!3f207.5327084691508!4f-4.850942482843806!5f0.7820865974627469" width="300" height="225" frameborder="0" style="border:0" allowfullscreen></iframe>' +
		'</div>'
	var bldgInfoWindow = new google.maps.InfoWindow({
		content: bldgInfoContent
		});
	google.maps.event.addListener(bldgPoly, 'click', function() {
		var position = new google.maps.LatLng(35.084438,-106.624317)
		bldgInfoWindow.setPosition(position)
		bldgInfoWindow.open(map);
		});
}



~~~~~~~~~~

</div>
