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
