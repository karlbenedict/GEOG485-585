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
