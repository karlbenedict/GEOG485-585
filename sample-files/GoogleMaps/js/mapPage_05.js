function initialize() {
	var classroom = new google.maps.LatLng(35.084280,-106.624073)
	var mapOptions = {
		zoom: 18,
		center: classroom,
		mapTypeId: google.maps.MapTypeId.HYBRID
	};
	var map = new google.maps.Map(
		document.getElementById("map_canvas"),
		mapOptions);
}
