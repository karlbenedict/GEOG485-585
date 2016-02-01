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
