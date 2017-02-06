---
title: Week 4 - Module 2a - Web-based Mapping Clients. Google Maps API (pt. 2)
...


<!---------------------------------------------------------------------------->
<!-- Week 04 ----------------------------------------------------------------->
<!-- Lecture 02 a 02 b ------------------------------------------------------->
<!-- Web-based Mapping Clients------------------------------------------------>
<!-- Google Maps API---------------------------------------------------------->
<!---------------------------------------------------------------------------->

### Overview ###  {.module02a02b}

* Additional Google Maps API Capabilities to be Aware of
	* Styling of the base maps with custom preferences 
	* Fusion Tables 
* Bringing it all together in a "real" web page


### *Getting Started with Styled Maps* - Video ###

[Styled Maps Documentation](https://developers.google.com/maps/documentation/javascript/styling) | [Create Map Style wizard](https://mapstyle.withgoogle.com)


### Map Example: Simple - Styled ###

<div class="codeTable">

gmap_styled.html

~~~~~~~~~~ {.html .numberLines}
<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="css/mapPage.css">
	</head>

	<body>
		<h1>Sample Map - Styled (POIs Highlighted)</h1>
		<div id="map_canvas"></div>

	<!-- Let's put our JavaScript down here --------------------------------------------->
		<!-- Load the external JavaScript file with the map definition code -->
		<script src="js/mapPage_styled.js"></script>
		
		<!-- Load the API in asynchronous mode and execute the initialize function when done -->
		
		<script async defer 
			src="https://maps.googleapis.com/maps/api/js?callback=initialize&key=<YourKey>">
    	</script>
	</body>
</html>
~~~~~~~~~~

mapPage_styled.js

~~~~~~~~~~ {.html .numberLines}
function initialize() {
	var classroom = new google.maps.LatLng(35.084280,-106.624073)
	var myOptions = {
		zoom: 8,
		center: classroom,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		styles: [
		  {
			featureType: "water",
			stylers: [
			  { visibility: "on" },
			  { hue: "#0008ff" }
			]
		  },{
			featureType: "road.highway",
			stylers: [
			  { hue: "#ff1a00" }
			]
		  },{
			featureType: "road.arterial",
			stylers: [
			  { hue: "#ffa200" },
			  { visibility: "simplified" }
			]
		  },{
			featureType: "road.local",
			stylers: [
			  { visibility: "off" }
			]
		  },{
			featureType: "administrative",
			stylers: [
			  { visibility: "simplified" }
			]
		  },{
			featureType: "poi",
			stylers: [
			  { visibility: "on" },
			  { hue: "#00ffff" }
			]
		  },{
			featureType: "poi",
			stylers: [
			  { visibility: "on" }
			]
		  }
		]

		};
	var map = new google.maps.Map(
		document.getElementById("map_canvas"), 
		myOptions);
}
~~~~~~~~~~



</div>


### Google Fusion Tables

[Fusion Tables Introduction](https://support.google.com/fusiontables/answer/2571232?hl=en&ref_topic=1652595)

Sample Fusion Table from the previous NAWRS Mapper example: [https://www.google.com/fusiontables/DataSource?docid=1v2IlIFJqat2tTSBA8e4guqlzMGRe8iW4yXP25Kg](https://www.google.com/fusiontables/DataSource?docid=1v2IlIFJqat2tTSBA8e4guqlzMGRe8iW4yXP25Kg)

NAWRS Mapper Javascript File: [https://github.com/nawrs/nawrs-web/blob/master/js/core.js](https://github.com/nawrs/nawrs-web/blob/master/js/core.js)


### Bringing It All Together - [link](http://karlbenedict.com/GEOG485-585/sample-files/GoogleMaps/gmaps_events.html)
 ###


<div class="codeTable">

gmaps_events.html

~~~~~~~~~~ {.html .numberLines}
<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="css/event_mapPage.css">
		<title>Karl's Event Diary</title>
	</head>

	<body>
		<h1>My diary of endurance events that I've participated in since joining 
		Team in Training
		</h1>
		
		<p>In 2008 Cynthia and I joined the Leukemia and Lymphoma Society's 
		(<a href="http://www.lls.org/">LLS</a>) Team in Training 
		(<a href="http://www.teamintraining.org/">TNT</a>, 
		<a href="http://youtu.be/GMSKG8L6K78">info video</a>) program as 
		participants to train for the Animas Valley/Steamworks Half Marathon and
		 raise money for blood cancer research and patient services. In spite of
		  our not having any direct connection to blood cancer (at that time),  
		  we found the goals of LLS admirable, the combined training and 
		  fund-raising program of TNT a great idea, and made many new friends 
		  over the many seasons that we have been involved with TNT.</p>
		
		<p>From 2008 through early 2015 we  continued to volunteer with TNT, as 
		participants, mentors, and since 2010 I was a coach  (check out my 
		<a href="http://youtu.be/GMSKG8L6K78">half-second</a> of fame in the 
		info video at 2:13) for TNT with an emphasis on training walkers for 
		full- or half-marathons. This page provides a summary of the events that
		 I've participated in in some capacity since 2008. </p>
		
		<!-- based on the example provided by Google - 
		https://developers.google.com/maps/documentation/javascript/examples/
		style-selector -->
		<div id="style-selector-control"  class="map-control">
		  <select id="style-selector" class="selector-control">
		    <option value="default">Default</option>
		    <option value="silver">Silver</option>
		    <option value="night">Night mode</option>
		    <option value="retro" selected="selected">Retro</option>
		    <option value="hiding">Hide features</option>
		  </select>
		</div>
		
		<div id="event-map" name="event-map"></div>

		<table>
		
		<thead>
		<th>Date</th>
		<th>Event Name</th>
		<th>Event Time</th>
		<th>Location on Map</th>	
		</thead>
		
		<tbody>
		<tr>
			<td>1/8/2017</td> 
			<td>Disney World  Marathon</td>
			<td>7:14</td> 
			<td><a href="#event-map" onclick="recenter(map, eventPlaces[4].point, 
			10)">approx. map</a></td>
		</tr>
		
		<tr>
			<td>10/16/2016</td> 
			<td>Duke City Half Marathon </td>
			<td>~2:55</td> 
			<td><a href="#event-map" onclick="recenter(map, eventPlaces[0].point,
			 11)">map</a></td>
		</tr>
		
		<tr>
			<td>11/13/2015</td> 
			<td>Avengers Half Marathon </td>
			<td>3:17:55</td> 
			<td><a href="#event-map" onclick="recenter(map, eventPlaces[5].point,
			 12)">approx. map</a></td>
		</tr>

		<tr>
			<td>1/11/2015</td> 
			<td>Disney World  Marathon (Goofy - Day 2)</td>
			<td>6:21:01</td> 
			<td><a href="#event-map" onclick="recenter(map, eventPlaces[4].point,
			 10)">approx. map</a></td>
		</tr>
		

		<tr>
			<td>1/10/2015</td> 
			<td>Disney World Half Marathon (Goofy - Day 1)</td>
			<td>2:45:55</td> 
			<td><a href="#event-map" onclick="recenter(map, eventPlaces[4].point,
			 10)">approx. map</a></td>
		</tr>
		
		<tr>
			<td>10/19/2014</td> 
			<td>Duke City Half Marathon</td> 
			<td>2:45:17</td> 
			<td><a href="#event-map" onclick="recenter(map, eventPlaces[0].point,
			 11)">map</a></td>
		</tr>
		
		<tr>
			<td>2/23/2014</td> 
			<td>Princess Half Marathon</td>
			<td>3:07:11</td> 
			<td><a href="#event-map" onclick="recenter(map, eventPlaces[4].point,
			 10)">approx. map</a></td>
		</tr>
		
		<tr>
			<td>2/22/2014</td> 
			<td>Princess Enchanted 10k</td>
			<td>1:42:43</td> 
			<td><a href="#event-map" onclick="recenter(map, eventPlaces[4].point,
			 10)">approx. map</a></td>
		</tr>
		
		<tr>
			<td>9/1/2013</td> 
			<td>Disneyland Half Marathon</td> 
			<td>2:56:57</td> 
			<td><a href="#event-map" onclick="recenter(map, eventPlaces[5].point,
			 12)">approx. map</a></td>
		</tr>
		

		<tr>
			<td>1/13/2013</td> 
			<td>Disney World  Marathon (Goofy - Day 2)</td>
			<td>6:46:57</td> 
			<td><a href="#event-map" onclick="recenter(map, eventPlaces[4].point,
			 10)">approx. map</a></td>
		</tr>
		

		<tr>
			<td>1/12/2013</td> 
			<td>Disney World Half Marathon (Goofy - Day 1)</td>
			<td>3:22:48</td> 
			<td><a href="#event-map" onclick="recenter(map, eventPlaces[4].point,
			 10)">approx. map</a></td>
		</tr>
		
	
		<tr>
			<td>9/29/2012</td> 
			<td>Hot Chocolate 15k </td>
			<td>1:56:46</td> 
			<td><a href="#event-map" onclick="recenter(map, eventPlaces[6].point,
			 10)">map</a></td>
		</tr>
		

		<tr>
			<td>6/9/2012</td> 
			<td>Animas Valley/Steamworks Half Marathon</td> 
			<td>no time: coached</td> 
			<td><a href="#event-map" onclick="recenter(map, eventPlaces[1].point,
			 10)">map</a></td>
		</tr>
		

		<tr>
			<td>1/9/2012</td> 
			<td>Disney World  Marathon (Goofy - Day 2)</td>
			<td>6:56:28</td> 
			<td><a href="#event-map" onclick="recenter(map, eventPlaces[4].point,
			 10)">map</a></td>
		</tr>
		

		<tr>
			<td>1/8/2011</td> 
			<td>Disney World Half Marathon (Goofy - Day 1)</td>
			<td>3:29:00</td> 
			<td><a href="#event-map" onclick="recenter(map, eventPlaces[4].point,
			 10)">map</a></td>
		</tr>
		

		<tr>
			<td>6/19/2010</td> 
			<td>Animas Valley/Steamworks Half Marathon</td> 
			<td>no time: coached</td> 
			<td><a href="#event-map" onclick="recenter(map, eventPlaces[1].point,
			 10)">map</a></td>
		</tr>
		

		<tr>
			<td>6/6/2010</td> 
			<td>San Diego Rock 'n' Roll Marathon</td> 
			<td>no time: coached</td> 
			<td><a href="#event-map" onclick="recenter(map, eventPlaces[2].point,
			 11)">map</a></td>
		</tr>
		

		<tr>
			<td>10/18/09</td> 
			<td>Nike Women's Marathon</td> 
			<td>7:13:05</td> 
			<td><a href="#event-map" onclick="recenter(map, eventPlaces[3].point,
			 12)">map</a></td>
		</tr>
		

		<tr>
			<td>9/6/2009</td> 
			<td>Disneyland Half Marathon</td> 
			<td>3:43:05</td> 
			<td><a href="#event-map" onclick="recenter(map, eventPlaces[5].point,
			 12)">map</a></td>
		</tr>
		

		<tr>
			<td>1/11/2009</td> 
			<td>Disney World Marathon</td> 
			<td>6:57:42</td> 
			<td><a href="#event-map" onclick="recenter(map, eventPlaces[4].point,
			 10)">map</a></td>
		</tr>
		

		<tr>
			<td>10/19/2008</td> 
			<td>Duke City Half Marathon</td> 
			<td>3:09:42</td> 
			<td><a href="#event-map" onclick="recenter(map, eventPlaces[0].point,
			 11)">map</a></td>
		</tr>
		

		<tr>
			<td>6/21/2008</td> 
			<td>Animas Valley/Steamworks Half Marathon</td> 
			<td>3:14:52</td> 
			<td><a href="#event-map" onclick="recenter(map, eventPlaces[1].point,
			 10)">map</a></td>
		</tr>
		</tbody>
		</table>
		

	</body>

	<!-- Let's put our JavaScript down here --------------------------------------------->
		<!-- Load the external JavaScript file with the map definition code -->
		<script src="js/mapPage_events.js"></script>
		
		<!-- Load the API in asynchronous mode and execute the initialize 
		function when done -->
		
		<script async defer 
			src="https://maps.googleapis.com/maps/api/js?callback=initialize&
			key=<YourKey>">
    	</script>
	</body>
</html>
~~~~~~~~~~


gmaps_events.js

~~~~~~~~~~ {.html .numberLines}
var map;
var eventPlaces;

function initialize() {
	// Define a set of global coordinates for use throughout the web site
	// Place coordinates derived from GNIS database: http://geonames.usgs.gov/
	// pls/gnispublic
	// from https://tools.wmflabs.org/geohack/geohack.php?
	// pagename=Geographic_center_of_the_contiguous_United_States&
	// params=39.828175_N_98.579500_W_region:US_type:landmark
	geoCenter = new google.maps.LatLng(39.828175,-98.5795) 
	eventPlaces = [
		{
			name: "Albuquerque", 
			point: new google.maps.LatLng(35.0889356,-106.5747462),
			label: "Albuquerque: Duke City Half Marathon"
		}, 
		{
			name: "Durango", 
			point: new google.maps.LatLng(37.2752800,-107.8800667),
			label: "Durango: Animas Valley/Steamworks Half Marathon"
		},
		{
			name: "San Diego", 
			point: new google.maps.LatLng(32.7153292,-117.1572551),
			label: "San Diego: San Diego Rock 'n' Roll Marathon"
		},
		{
			name: "San Francisco", 
			point: new google.maps.LatLng(37.7749295,-122.4194155),
			label: "San Francisco: Nike Women's Marathon"
		},
		{
			name: "Orlando", 
			point: new google.maps.LatLng(28.5383355,-81.3792365),
			label: "Orlando: Walt Disney World half- and full-marathon"
		},
		{
			name: "Anaheim", 
			point: new google.maps.LatLng(33.8352932,-117.9145036),
			label: "Anaheim: Disneyland Half Marathon"
		},
		{
			name: "Albuquerque", 
			point: new google.maps.LatLng(35.0889356,-106.5747462),
			label: "Hot Chocolate 15k"
		} 

	];

	var myOptions = {
		zoom: 4,
		center: geoCenter,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeControl: false};

	map = new google.maps.Map(
		document.getElementById("event-map"), 
		myOptions);

	addMarkers(map,eventPlaces)
	
	// Add a style-selector control to the map.
	var styleControl = document.getElementById('style-selector-control');
	map.controls[google.maps.ControlPosition.TOP_LEFT].push(styleControl);
	
	// Set the map's style to the initial value of the selector.
	var styleSelector = document.getElementById('style-selector');
	map.setOptions({styles: styles[styleSelector.value]});
	
	// Apply new JSON when the user selects a different style.
	styleSelector.addEventListener('change', function() {
	     map.setOptions({styles: styles[styleSelector.value]});
	});
}

function recenter(mapName, latlon, zoomLevel) {
	mapName.setCenter(latlon);
	mapName.setZoom(zoomLevel)
}

function addMarkers(mapName, markerArray) {
	for (index = 0; index < markerArray.length; index++) {
		myMarker = new google.maps.Marker({
			position: markerArray[index].point,
			title: markerArray[index].label
		});
		myMarker.setMap(mapName)
	}
}

// styles generated by https://mapstyle.withgoogle.com
var styles = {
default: null,
silver: [
  {
    elementType: 'geometry',
    stylers: [{color: '#f5f5f5'}]
  },
  {
    elementType: 'labels.icon',
    stylers: [{visibility: 'off'}]
  },
  {
    elementType: 'labels.text.fill',
    stylers: [{color: '#616161'}]
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [{color: '#f5f5f5'}]
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'labels.text.fill',
    stylers: [{color: '#bdbdbd'}]
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [{color: '#eeeeee'}]
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{color: '#757575'}]
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{color: '#e5e5e5'}]
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{color: '#9e9e9e'}]
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{color: '#ffffff'}]
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.text.fill',
    stylers: [{color: '#757575'}]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{color: '#dadada'}]
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{color: '#616161'}]
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [{color: '#9e9e9e'}]
  },
  {
    featureType: 'transit.line',
    elementType: 'geometry',
    stylers: [{color: '#e5e5e5'}]
  },
  {
    featureType: 'transit.station',
    elementType: 'geometry',
    stylers: [{color: '#eeeeee'}]
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{color: '#c9c9c9'}]
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{color: '#9e9e9e'}]
  }
],

night: [
  {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
  {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
  {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}]
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}]
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{color: '#263c3f'}]
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{color: '#6b9a76'}]
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{color: '#38414e'}]
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{color: '#212a37'}]
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{color: '#9ca5b3'}]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{color: '#746855'}]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{color: '#1f2835'}]
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{color: '#f3d19c'}]
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{color: '#2f3948'}]
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}]
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{color: '#17263c'}]
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{color: '#515c6d'}]
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{color: '#17263c'}]
  }
],

retro: [
  {elementType: 'geometry', stylers: [{color: '#ebe3cd'}]},
  {elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},
  {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
  {
    featureType: 'administrative',
    elementType: 'geometry.stroke',
    stylers: [{color: '#c9b2a6'}]
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'geometry.stroke',
    stylers: [{color: '#dcd2be'}]
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'labels.text.fill',
    stylers: [{color: '#ae9e90'}]
  },
  {
    featureType: 'landscape.natural',
    elementType: 'geometry',
    stylers: [{color: '#dfd2ae'}]
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [{color: '#dfd2ae'}]
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{color: '#93817c'}]
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry.fill',
    stylers: [{color: '#a5b076'}]
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{color: '#447530'}]
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{color: '#f5f1e6'}]
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [{color: '#fdfcf8'}]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{color: '#f8c967'}]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{color: '#e9bc62'}]
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry',
    stylers: [{color: '#e98d58'}]
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry.stroke',
    stylers: [{color: '#db8555'}]
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [{color: '#806b63'}]
  },
  {
    featureType: 'transit.line',
    elementType: 'geometry',
    stylers: [{color: '#dfd2ae'}]
  },
  {
    featureType: 'transit.line',
    elementType: 'labels.text.fill',
    stylers: [{color: '#8f7d77'}]
  },
  {
    featureType: 'transit.line',
    elementType: 'labels.text.stroke',
    stylers: [{color: '#ebe3cd'}]
  },
  {
    featureType: 'transit.station',
    elementType: 'geometry',
    stylers: [{color: '#dfd2ae'}]
  },
  {
    featureType: 'water',
    elementType: 'geometry.fill',
    stylers: [{color: '#b9d3c2'}]
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{color: '#92998d'}]
  }
],

hiding: [
  {
    featureType: 'poi.business',
    stylers: [{visibility: 'off'}]
  },
  {
    featureType: 'transit',
    elementType: 'labels.icon',
    stylers: [{visibility: 'off'}]
  }
]
};

~~~~~~~~~~
</div>

