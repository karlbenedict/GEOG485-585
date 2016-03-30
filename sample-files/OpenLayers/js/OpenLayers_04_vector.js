// OpenLayers_04_vector.js

// set a projection to recall throughout the map
var projection = ol.proj.get('EPSG:3857');

///////////////////////////////////////////////////////////////////////////////
// define some styles

var block_color = [0,255,0,0]
var county_color = [0,0,255,0]

var county_style = new ol.style.Style({
	fill: new ol.style.Fill({
	  color: county_color
	}),
	stroke: new ol.style.Stroke({
	  color: county_color,
	  width: 1
	}),
});

var state_style = new ol.style.Style({
	stroke: new ol.style.Stroke({
	  color: block_color,
	  width: 1
	}),
});


///////////////////////////////////////////////////////////////////////////////
// define some geometries

var classroomCoord = [-106.624073,35.084280]
var officeCoord = [-106.624899,35.084506]

var classroomPoint = new ol.geom.Point(ol.proj.fromLonLat(classroomCoord, projection));
var officePoint = new ol.geom.Point(ol.proj.fromLonLat(officeCoord, projection));

var classroomFeature = new ol.Feature({
	geometry: classroomPoint
})

var officeFeature = new ol.Feature({
	geometry:officePoint
})

var bldgFeature = new ol.Feature({
	geometry: new ol.geom.Polygon([[
	[-106.624921,35.084498],
	[-106.624911,35.084558 ],
	[-106.624970, 35.084566],
	[-106.624966, 35.084609],
	[-106.624383, 35.084544],
	[-106.624317, 35.084438],
	[-106.623922, 35.084384],
	[-106.623970, 35.084164],
	[-106.624324, 35.084214],
	[-106.624324, 35.084214],
	[-106.624284, 35.084391],
	]]).transform('EPSG:4326',projection), // deal with projection issues between my features and and the map projection 
	buildingNo:'106'
});

var pathFeature = new ol.Feature({
	geometry: new ol.geom.LineString([
		classroomCoord,
		[-106.624308,35.084309],
		[-106.624327,35.084445],
		officeCoord   				
	]).transform('EPSG:4326',projection), // deal with projection issues between my features and and the map projection
	description:"my old commute"
})




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

var basemap_bern_tiled = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		attributions: new ol.Attribution({
			html: 'Bernalillo County NAIP (2014) imagery'
		}),
		params: {'LAYERS':'global:naip_2015_bernalillo'},
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

var blocks_kml = new ol.layer.Vector({
	source: new ol.source.Vector({
		url: 'https://s3.amazonaws.com/kkb-web/data/tl_2010_35001_tabblock10.kml',
		projection: projection,
		format: new ol.format.KML()
	})
})

var counties_kml = new ol.layer.Vector({
	source: new ol.source.Vector({
		//url: 'data/2007fe_35_county00.kml',
		url: 'https://s3.amazonaws.com/kkb-web/data/2007fe_35_county00.kml',
		projection: projection,
		format: new ol.format.KML()
	})
})


// some styled layers 

var counties_kml_styled = new ol.layer.Vector({
	source: new ol.source.Vector({
		url: 'https://s3.amazonaws.com/kkb-web/data/2007fe_35_county00.kml',
		projection: projection,
		format: new ol.format.KML({'extractStyles':false}),
		style: state_style
	})
})

// layer based on custom geometries

var local_geoms = new ol.layer.Vector({
	source: new ol.source.Vector({
		features: [classroomFeature,officeFeature,bldgFeature,pathFeature]
	})
})



///////////////////////////////////////////////////////////////////////////////
// create our base map objects 
var kmlMap = new ol.Map({
	target: 'map_kml',
	layers: [basemap_tiled,basemap_bern_tiled,blocks_kml,counties_kml],
	view: new ol.View({
		center: ol.proj.fromLonLat([-106.6224,35.0849]), // the approximate geographic center of the continental US
		zoom:5,
		projection: projection
		})
	});

var kmlMapStyled = new ol.Map({
	target: 'map_kml_styled',
	layers: [basemap_tiled,basemap_bern_tiled,counties_kml_styled],
	view: new ol.View({
		center: ol.proj.fromLonLat([-106.6224,35.0849]), // duck pond
		zoom:5,
		projection: projection
		})
	});

var localFeatures = new ol.Map({
	target: 'map_local',
	layers: [basemap_tiled,basemap_bern_tiled,counties_kml,local_geoms],
	view: new ol.View({
		center: ol.proj.fromLonLat([-106.6224,35.0849]), // duck pond
		zoom:14,
		projection: projection
		})
	});



///////////////////////////////////////////////////////////////////////////////



