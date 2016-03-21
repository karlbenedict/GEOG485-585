// OpenLayers_01.js

var myMap = new ol.Map({
	target: 'map',
	layers: [
  		new ol.layer.Tile({
		source: new ol.source.MapQuest({layer: 'sat'})
  		})
	],
	view: new ol.View({
		center: ol.proj.fromLonLat([-106.624083,35.08427]),
		zoom: 18
		})
	});
