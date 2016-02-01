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
