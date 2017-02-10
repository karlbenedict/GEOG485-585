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
