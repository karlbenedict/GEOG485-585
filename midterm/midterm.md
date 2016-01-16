# GEOG 485L/585L Midterm Exam #

## Due Wednesday, March 12, 2014 before Midnight ##

_Late Exams will be penalized_

Just as you have done for your milestones and deep-dives, create a web page with your answers to the exam questions and link to the page from your homepage (index.html) in GitHub. 

Make sure to _clearly format_ your writeup so that your answer's are understandable.

100 pts

Question 1
:	Which command line utility would you use to determine the following (4 pts each)

The spatial extent of a GML file (choose one)?

* proj
* cs2cs
* gdalinfo
* ogrinfo

The spatial reference system of a raster file in the format of a GeoTIFF (choose one)?

* proj
* cs2cs
* gdalinfo
* ogrinfo

Question 2
:	What combination of OGC Service and Request (e.g. SERVICE=WMS&REQUEST=GetFeatureInfo) would you use to perform the following? (3 pts each)

1. Determine the spatial extent of an available layer from a Web Map Service.
2. Obtain a list of coverages from a Web Coverage service.
3. Determine what file formats are supported by a Web Feature Service for the delivery of available data types (i.e. layers)
4. Retrieve a map image from a Web Map Service
5. Retrieve data from an available coverage from a Web Coverage Service 

Question 3
:	Use the cs2cs command line utility to convert the following latitude-longitude coordinates (WGS84) to UTM, Zone 13N, NAD83 coordinates (5 pts each)

1. 35.682180 North Latitude -105.939670 East Longitude (New Mexico State Capitol)
2. 34.891983 North Latitude -107.930153 East Longitude (El Malpais National Monument)

Question 4
:	Perform the following WMS GetCapabilities request ([Link](http://neowms.sci.gsfc.nasa.gov/wms/wms?version=1.1.1&service=WMS&request=GetCapabilities))

~~~~~
http://neowms.sci.gsfc.nasa.gov/wms/wms?version=1.1.1&service=WMS&request=GetCapabilities 
~~~~~

And answer the following questions (4 pts each)

1. What is the name of the service?
2. What file formats are supported by the GetMap request?
3. What are the _names_ of three of the layers included in the service?

Question 5
:	Compose a GetMap request for the WMS referenced in Question 4 that includes the following characteristics:

* JPEG image format
* 1200 pixels wide (you will need to calculate the height based upon the aspect ratio of the bounding box)
* Bounding Box (EPSG:4326): `Min X = -128 East Longitude, Min Y = 21.5 North Latitude, Max X = -62 East Longitude, Max Y = 54.5 North Latitude` 
* Layer to be mapped = “MOD_LSTD_CLIM_M”

Include in your answer both the complete WMS GetMap request and the resulting map image that is returned. (15 pts) 

<!-- http://neowms.sci.gsfc.nasa.gov/wms/wms?VERSION=1.1.1&SERVICE=WMS&REQUEST=GetMap&LAYERS=MOD_LSTD_CLIM_M&WIDTH=1200&HEIGHT=600&BBOX=-128,21.5,-62,54.5&STYLE=&SRS=EPSG:4326&FORMAT=image/jpeg -->

Question 6
:	From the XML GetCapabilities returned by the following WFS request ([Link](http://services.nationalmap.gov/arcgis/services/WFS/transportation/MapServer/WFSServer?request=GetCapabilities&service=WFS)) answer the following questions (4 pts each) 

~~~~~
http://services.nationalmap.gov/arcgis/services/WFS/transportation/MapServer/WFSServer?
request=GetCapabilities&service=WFS
~~~~~


1. What is the title for this service?
2. What file format(s) are supported by this service’s GetFeature request?
3. What is the DefaultSRS or the FeatureType named “WFS_transportation:Interstate”?
4. What is the WGS84BoundingBox of the FeatureType named “WFS_transportation:Interstate”?


Question 7
:	From the XML GetCapabilities returned by the following WCS request ([Link](http://sdf.ndbc.noaa.gov/thredds/wcs/hfradar_uswc_500m?request=GetCapabilities&version=1.0.0&service=WCS)) answer the following questions (4 pts each)

~~~~~
http://sdf.ndbc.noaa.gov/thredds/wcs/hfradar_uswc_500m?request=GetCapabilities
&version=1.0.0&service=WCS
~~~~~


1. What is the description of the `v` coverage?
2. How many coverages are available from this service?

Question 8a
:	Formulate a complete DescribeCoverage request for the `v` coverage for the WCS service referenced in Question 7. (4 pts)

1. DescribeCoverage request

<!-- http://sdf.ndbc.noaa.gov/thredds/wcs/hfradar_uswc_500m?request=DescribeCoverage&version=1.0.0&service=WCS&COVERAGE=v -->

Question 8b
:	From the returned XML document answer the following questions. (4 pts each)

1. What is the spatial domain for the ‘v‘ coverage?
2. What file formats are available for ‘v‘ data delivered by this service?
3. What SRS(s) are supported by this service for requested data delivery?