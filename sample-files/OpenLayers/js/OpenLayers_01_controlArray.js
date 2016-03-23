// OpenLayers_01_noControls.js

var myNewRotate = new ol.control.Rotate({autoHide:false})
var myScaleLine = new ol.control.ScaleLine()
var myOverviewMap = new ol.control.OverviewMap({collapsible:false, collapsed:false})

var myControls = ol.control.defaults({
	attribution:true,
	rotate:false,
	zoom:true
}).extend([myNewRotate,myScaleLine,myOverviewMap])


var myMap = new ol.Map({
	target: 'map',
	layers: [
  		new ol.layer.Tile({
		source: new ol.source.MapQuest({layer: 'sat'})
  		})
	],
	controls: myControls,
	view: new ol.View({
		center: ol.proj.fromLonLat([-106.624083,35.08427]),
		zoom: 15
		})
	});
