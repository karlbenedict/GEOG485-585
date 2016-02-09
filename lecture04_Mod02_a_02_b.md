<!---------------------------------------------------------------------------->
<!-- Week 04 ----------------------------------------------------------------->
<!-- Lecture 02 a 02 b ------------------------------------------------------->
<!-- Web-based Mapping Clients------------------------------------------------>
<!-- Google Maps API---------------------------------------------------------->
<!---------------------------------------------------------------------------->


# Week 4 - Module 2a - Web-based Mapping Clients. Google Maps API (pt. 2)# {.module02a02b}

### Overview ###  {.module02a02b}

* Additional Google Maps API Capabilities to be Aware of
	* Styling of the base maps with custom preferences 
	* Fusion Tables 
* Bringing it all together in a "real" web page


### *Getting Started with Styled Maps* - Video ###

[Styled Maps Documentation](https://developers.google.com/maps/documentation/javascript/styling) | [Styled Maps Wizard](http://gmaps-samples-v3.googlecode.com/svn/trunk/styledmaps/wizard/index.html)

![Google Maps Styled Maps Wizard [link](http://youtu.be/0hhiEjf7_NA)](./images/styledMapsWizard.png) 


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
		<!-- The optional 'key-<API Key>' parameter is not used here but should be for a production map -->
		<script async defer 
			src="https://maps.googleapis.com/maps/api/js?callback=initialize">
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


### *Google I/O 2011: Managing and visualizing your geospatial data with Fusion Tables* - Video ###

Some particularly relevant sections: [Introduction (0:00 - 10:30)](http://youtu.be/Z2o0mtnF1Bg) | [Google Maps API Integration (21:40 - 34:42)](http://youtu.be/Z2o0mtnF1Bg?t=21m40s) | [Summary and Links (52:00 52:40)](http://youtu.be/Z2o0mtnF1Bg?t=52m)

[Fusion Tables Documentation/Help](https://support.google.com/fusiontables/?hl=en#topic=1652595)

![Google Fusion Tables Introduction Video [link](http://youtu.be/Z2o0mtnF1Bg)](./images/fusionTablesVideo.png)

### Bringing It All Together ###

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
		<h1>My diary of endurance events that I've participated in since joining Team in Training
		</h1>
		
		<p>In 2008 Cynthia and I joined the Leukemia and Lymphoma Society's 
		(<a href="http://www.lls.org/">LLS</a>) Team in Training 
		(<a href="http://www.teamintraining.org/">TNT</a>, 
		<a href="http://youtu.be/GMSKG8L6K78">info video</a>) program as 
		participants to train for the Animas Valley/Steamworks Half Marathon 
		and raise money for blood cancer research and patient services. In spite of 
		our not having any direct connection to blood cancer (at that time), 
		we found the goals of LLS admirable,  the combined training and fund-raising 
		program of TNT a great idea, and have made many new friends over the many 
		seasons that we've been involved with TNT.</p>
		
		<p>From 2008 through early 2015 we  continued to volunteer with TNT, as 
		participants, mentors, and since 2010 I was a coach (check out my 
		<a href="http://youtu.be/GMSKG8L6K78#t=2m13s">half-second</a> of fame in the 
		info video) for TNT with an emphasis on training walkers for full- or 
		half-marathons. This page provides a summary of the events that I've participated 
		in in some capacity since we became involved with TNT. </p>
		
		<div id="event-map" name="event-map"></div>

		<h2>
			<span class="date">11/13/2015</span> 
			Avengers Half Marathon 
			<span class="time">3:17:55</span> 
			(<a href="#event-map" onclick="recenter(map, eventPlaces[5].point, 12)">map</a>)
		</h2>

		<h2>
			<span class="date">1/11/2015</span> 
			Disney World  Marathon (Goofy - Day 2)
			<span class="time">6:21:01</span> 
			(<a href="#event-map" onclick="recenter(map, eventPlaces[4].point, 10)">map</a>)
		</h2>
		<p class="eventDescription">blah, blah, blah ...</p>

		<h2>
			<span class="date">1/10/2015</span> 
			Disney World Half Marathon (Goofy - Day 1)
			<span class="time">2:45:55</span> 
			(<a href="#event-map" onclick="recenter(map, eventPlaces[4].point, 10)">map</a>)
		</h2>
		<h2>
			<span class="date">10/19/2014</span> 
			Duke City Half Marathon 
			<span class="time">2:45:17</span> 
			(<a href="#event-map" onclick="recenter(map, eventPlaces[0].point, 11)">map</a>)
		</h2>
		<p class="eventDescription">blah, blah, blah ...</p>
		<h2>
			<span class="date">2/23/2014</span> 
			Princess Half Marathon
			<span class="time">3:07:11</span> 
			(<a href="#event-map" onclick="recenter(map, eventPlaces[4].point, 10)">map</a>)
		</h2>
		<h2>
			<span class="date">2/22/2014</span> 
			Princess Enchanted 10k
			<span class="time">1:42:43</span> 
			(<a href="#event-map" onclick="recenter(map, eventPlaces[4].point, 10)">map</a>)
		</h2>
		<h2>
			<span class="date">9/1/2013</span> 
			Disneyland Half Marathon 
			<span class="time">2:56:57</span> 
			(<a href="#event-map" onclick="recenter(map, eventPlaces[5].point, 12)">map</a>)
		</h2>
		<p class="eventDescription">blah, blah, blah ...</p>

		<h2>
			<span class="date">1/13/2013</span> 
			Disney World  Marathon (Goofy - Day 2)
			<span class="time">6:46:57</span> 
			(<a href="#event-map" onclick="recenter(map, eventPlaces[4].point, 10)">map</a>)
		</h2>
		<p class="eventDescription">blah, blah, blah ...</p>

		<h2>
			<span class="date">1/12/2013</span> 
			Disney World Half Marathon (Goofy - Day 1)
			<span class="time">3:22:48</span> 
			(<a href="#event-map" onclick="recenter(map, eventPlaces[4].point, 10)">map</a>)
		</h2>
		<p class="eventDescription">blah, blah, blah ...</p>
	
		<h2>
			<span class="date">9/29/2012</span> 
			Hot Chocolate 15k 
			<span class="time">1:56:46</span> 
			(<a href="#event-map" onclick="recenter(map, eventPlaces[6].point, 10)">map</a>)
		</h2>
		<p class="eventDescription">blah, blah, blah ...</p>

		<h2>
			<span class="date">6/9/2012</span> 
			Animas Valley/Steamworks Half Marathon 
			<span class="time">no time: coached</span> 
			(<a href="#event-map" onclick="recenter(map, eventPlaces[1].point, 10)">map</a>)
		</h2>
		<p class="eventDescription">blah, blah, blah ...</p>

		<h2>
			<span class="date">1/9/2012</span> 
			Disney World  Marathon (Goofy - Day 2)
			<span class="time">6:56:28</span> 
			(<a href="#event-map" onclick="recenter(map, eventPlaces[4].point, 10)">map</a>)
		</h2>
		<p class="eventDescription">blah, blah, blah ...</p>

		<h2>
			<span class="date">1/8/2011</span> 
			Disney World Half Marathon (Goofy - Day 1)
			<span class="time">3:29:00</span> 
			(<a href="#event-map" onclick="recenter(map, eventPlaces[4].point, 10)">map</a>)
		</h2>
		<p class="eventDescription">blah, blah, blah ...</p>

		<h2>
			<span class="date">6/19/2010</span> 
			Animas Valley/Steamworks Half Marathon 
			<span class="time">no time: coached</span> 
			(<a href="#event-map" onclick="recenter(map, eventPlaces[1].point, 10)">map</a>)
		</h2>
		<p class="eventDescription">blah, blah, blah ...</p>

		<h2>
			<span class="date">6/6/2010</span> 
			San Diego Rock 'n' Roll Marathon 
			<span class="time">no time: coached</span> 
			(<a href="#event-map" onclick="recenter(map, eventPlaces[2].point, 11)">map</a>)
		</h2>
		<p class="eventDescription">blah, blah, blah ...</p>

		<h2>
			<span class="date">10/18/09</span> 
			Nike Women's Marathon 
			<span class="time">7:13:05</span> 
			(<a href="#event-map" onclick="recenter(map, eventPlaces[3].point, 12)">map</a>)
		</h2>
		<p class="eventDescription">blah, blah, blah ...</p>

		<h2>
			<span class="date">9/6/2009</span> 
			Disneyland Half Marathon 
			<span class="time">3:43:05</span> 
			(<a href="#event-map" onclick="recenter(map, eventPlaces[5].point, 12)">map</a>)
		</h2>
		<p class="eventDescription">blah, blah, blah ...</p>

		<h2>
			<span class="date">1/11/2009</span> 
			Disney World Marathon 
			<span class="time">6:57:42</span> 
			(<a href="#event-map" onclick="recenter(map, eventPlaces[4].point, 10)">map</a>)
		</h2>
		<p class="eventDescription">blah, blah, blah ...</p>

		<h2>
			<span class="date">10/19/2008</span> 
			Duke City Half Marathon 
			<span class="time">3:09:42</span> 
			(<a href="#event-map" onclick="recenter(map, eventPlaces[0].point, 11)">map</a>)
		</h2>
		<p class="eventDescription">blah, blah, blah ...</p>

		<h2>
			<span class="date">6/21/2008</span> 
			Animas Valley/Steamworks Half Marathon 
			<span class="time">3:14:52</span> 
			(<a href="#event-map" onclick="recenter(map, eventPlaces[1].point, 10)">map</a>)
		</h2>
		<p class="eventDescription">blah, blah, blah ...</p>

	</body>

	<!-- Let's put our JavaScript down here --------------------------------------------->
		<!-- Load the external JavaScript file with the map definition code -->
		<script src="js/mapPage_events.js"></script>
		
		<!-- Load the API in asynchronous mode and execute the initialize function
			 when done -->
		<!-- The optional 'key-<API Key>' parameter is not used here but should 
			be for a production map -->
		<script async defer 
			src="https://maps.googleapis.com/maps/api/js?callback=initialize">
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
	// Place coordinates derived from GNIS database: http://geonames.usgs.gov/pls/gnispublic
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
		center: eventPlaces[0].point,
		mapTypeId: google.maps.MapTypeId.ROADMAP};

	map = new google.maps.Map(
		document.getElementById("event-map"), 
		myOptions);

	addMarkers(map,eventPlaces)
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
~~~~~~~~~~
</div>
