// OpenLayers_03_wms.js

///////////////////////////////////////////////////////////////////////////////
// define layer objects

var basemap_tiled = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		attributions: new ol.Attribution({
			html: 'Blue Marble Next Generation:' + 
			'R. Stockli, E. Vermote, N. Saleous, R. Simmon and D. Herring (2005). The Blue Marble Next Generation - A true color earth dataset including seasonal dynamics from MODIS. Published by the NASA Earth Observatory. Corresponding author: rstockli@climate.gsfc.nasa.gov'
		}),
		params: {'LAYERS':'global:BMNG_west'},
		url: 'http://mapper.karlbenedict.com:8080/geoserver/global/wms?',
		serverType: 'geoserver'
	})
})

var basemap_single = new ol.layer.Image({
	source: new ol.source.ImageWMS({
		attributions: new ol.Attribution({
			html: 'Blue Marble Next Generation:' + 
			'R. Stockli, E. Vermote, N. Saleous, R. Simmon and D. Herring (2005). The Blue Marble Next Generation - A true color earth dataset including seasonal dynamics from MODIS. Published by the NASA Earth Observatory. Corresponding author: rstockli@climate.gsfc.nasa.gov'
		}),
		params: {'LAYERS':'global:BMNG_west'},
		url: 'http://mapper.karlbenedict.com:8080/geoserver/global/wms?',
		serverType: 'geoserver'
	})
})

var states_single = new ol.layer.Image({
	source: new ol.source.ImageWMS({
		attributions: new ol.Attribution({
			html: 'State Boundary Restructured - USGS, National Atlas Release 5-14-12'
		}),
		params: {'LAYERS':'global:statep010'},
		url: 'http://mapper.karlbenedict.com:8080/geoserver/global/wms?',
		serverType: 'geoserver'
	})
})

var states_tiled = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		attributions: new ol.Attribution({
			html: 'State Boundary Restructured - USGS, National Atlas Release 5-14-12'
		}),
		params: {'LAYERS':'global:statep010'},
		url: 'http://mapper.karlbenedict.com:8080/geoserver/global/wms?',
		serverType: 'geoserver'
	})
})



///////////////////////////////////////////////////////////////////////////////
// create our base map objects 
var singleMap = new ol.Map({
	target: 'map_image',
	layers: [basemap_single,states_single],
	view: new ol.View({
		center: ol.proj.fromLonLat([-98.58,39.83]), // the approximate geographic center of the continental US
		zoom: 3,
		projection: 'EPSG:3857'
		})
	});


var tiledMap = new ol.Map({
	target: 'map_tiled',
	layers: [basemap_tiled,states_tiled],
	view: new ol.View({
		center: ol.proj.fromLonLat([-98.58,39.83]), // the approximate geographic center of the continental US
		zoom: 3,
		projection: 'EPSG:3857'
		})
	});
	
var mixedMap = new ol.Map({
	target: 'map_mixed',
	layers: [basemap_tiled,states_single],
	view: new ol.View({
		center: ol.proj.fromLonLat([-98.58,39.83]), // the approximate geographic center of the continental US
		zoom: 3,
		projection: 'EPSG:3857'
		})
	});

///////////////////////////////////////////////////////////////////////////////



