// =============================== Global Variables ======================================


// US (lower 48) centroid from http://en.wikipedia.org/wiki/Geographic_center_of_the_contiguous_United_States
var UScenter = 	new google.maps.LatLng(39.83,-98.58)

// Define a global map variable that is usable throughout the web page
var map

// Define a global map type variable that is usable throughout the web page
var mapType = google.maps.MapTypeId.ROADMAP


// ================================ Functions ============================================

// Define the function that sets up the initial map after the web page has completed loading
function initialize() {
	// set the initial map center to Albuquerque
	var mapCenter = UScenter
	
	// define modified map styles
	var mapstyles = [
		  {
			featureType: "administrative.country",
			stylers: [
			  { visibility: "off" }
			]
		  },{
			featureType: "administrative.province",
			stylers: [
			  { visibility: "simplified" }
			]
		  },{
			featureType: "administrative.neighborhood",
			stylers: [
			  { visibility: "off" }
			]
		  },{
			featureType: "administrative.land_parcel",
			stylers: [
			  { visibility: "off" }
			]
		  },{
			featureType: "transit",
			stylers: [
			  { visibility: "off" }
			]
		  },{
			featureType: "road",
			stylers: [
			  { visibility: "simplified" }
			]
		  }
		]
	
	// set the initial map options to a hybrid-style national map centered 
	var mapOptions = {
      zoom: 4,
      center: mapCenter,
      mapTypeId: mapType,
      mapTypeControl: false,
      scaleControl: true,
      streetViewControl: false,
      panControl: false,
      zoomControlOptions: {style: google.maps.ZoomControlStyle.SMALL},
      styles: mapstyles
      };
      
    // initialize the map object with the map settings defined above
    map = new google.maps.Map(document.getElementById("event-map"), mapOptions);
    
    buildMarkers()
    addFusionTable()
}


// Separate the marker creation code from the map initialization code
function buildMarkers() {
	// clear out any markers and info windows that had been previously created
	var myMarkers = [];
	var myInfoWindows = []
	
	// loop through the set of places in the eventPlaces Array and create a marker for each based upon the their point and name
	for(var i = 0; i < eventPlaces.length; i++) {
		// Create a new marker object as part of the myMarkers array
		myMarkers[i] = new google.maps.Marker ({
			position: eventPlaces[i].point,
			title: eventPlaces[i].name
		});
		// Create a new Info Window object as part of the myInforWindows array
		myInfoWindows[i] = new google.maps.InfoWindow({content:eventPlaces[i].label});
		//alert(myInfoWindows[i])
		// add the new marker to the map
		myMarkers[i].setMap(map);
		// Create the event listener for the marker that displays the Info Window when clicked
		google.maps.event.addListener(myMarkers[i],'click', function() {
			myInfoWindows[i].open(map,myMarkers[i])
		});
	}
}

// Separate the Google Fusion Table addition code from the map initialization code
function addFusionTable() {
	var eventRoutes = new google.maps.FusionTablesLayer({
		query: {
			select: 'route',
			from: '2842706'}
		
	})
	eventRoutes.setMap(map)
}

// Recenter and zoom the map to a place specified in the function call
function recenter(myMap, myPlace, myZoom) {
	myMap.setCenter(myPlace)
	myMap.setZoom(myZoom)
}
