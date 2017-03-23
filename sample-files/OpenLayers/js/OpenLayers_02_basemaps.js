// OpenLayers_02_basemaps.js
// based on code for the basic layer switcher provided by P.J. Meisch here - http://stackoverflow.com/questions/27658280/layer-switching-in-openlayers-3



///////////////////////////////////////////////////////////////////////////////
// define my layer groups that will be used to change the basemap for my map
var Layer_Stamen_watercolor = new ol.layer.Group({
    layers: [
        new ol.layer.Tile({
            source: new ol.source.Stamen({layer: 'watercolor'})
        })
    ]
});

var Layer_Stamen_toner = new ol.layer.Group({
    layers: [
        new ol.layer.Tile({
            source: new ol.source.Stamen({layer: 'toner'})
        })
    ]
});

var Layer_Stamen_terrain = new ol.layer.Group({
    layers: [
        new ol.layer.Tile({
            source: new ol.source.Stamen({layer: 'terrain'})
        })
    ]
});


var Layer_OSM = new ol.layer.Group({
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ]
});

var Layer_Bing_roads = new ol.layer.Group({
    layers: [
		new ol.layer.Tile({
			source: new ol.source.BingMaps({
				key: 'AgQRwdWCKHZjOU-fQDBXp1sy8t3AJcjhvGeI4FCBMomdQ8wHBHnGsFdhZLD24cUR',
				imagerySet: 'Road'
			})
		})
    ]
});
var Layer_Bing_aerial = new ol.layer.Group({
    layers: [
		new ol.layer.Tile({
			source: new ol.source.BingMaps({
				key: 'AgQRwdWCKHZjOU-fQDBXp1sy8t3AJcjhvGeI4FCBMomdQ8wHBHnGsFdhZLD24cUR',
				imagerySet: 'Aerial'
			})
		})
    ]
});
var Layer_Bing_aerial_labels = new ol.layer.Group({
    layers: [
		new ol.layer.Tile({
			source: new ol.source.BingMaps({
				key: 'AgQRwdWCKHZjOU-fQDBXp1sy8t3AJcjhvGeI4FCBMomdQ8wHBHnGsFdhZLD24cUR',
				imagerySet: 'AerialWithLabels'
			})
		})
    ]
});

///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// create our base map object for which we will later set the corresponding layer groups for the desired basemap
var myMap = new ol.Map({
	target: 'map',
	view: new ol.View({
		center: ol.proj.fromLonLat([-106.624083,35.08427]),
		zoom: 12
		})
	});


///////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////
// define the function that sets the basemap type for the current map
function setMapType(newType) {
    if(newType == 'OSM') {
        myMap.setLayerGroup(Layer_OSM);
    } else if (newType == 'STAMEN_Watercolor') {
        myMap.setLayerGroup(Layer_Stamen_watercolor);
    } else if (newType == 'STAMEN_Toner') {
        myMap.setLayerGroup(Layer_Stamen_toner);
    } else if (newType == 'STAMEN_Terrain') {
        myMap.setLayerGroup(Layer_Stamen_terrain);
    } else if (newType == 'Bing_Roads') {
        myMap.setLayerGroup(Layer_Bing_roads);
    } else if (newType == 'Bing_Aerial') {
        myMap.setLayerGroup(Layer_Bing_aerial);
    } else if (newType == 'Bing_AerialWlabels') {
        myMap.setLayerGroup(Layer_Bing_aerial_labels);
    }
}
///////////////////////////////////////////////////////////////////////////////

// Set the initial map basemap
setMapType('STAMEN_Terrain')

