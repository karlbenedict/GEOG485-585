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
