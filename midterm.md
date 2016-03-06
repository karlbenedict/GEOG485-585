# GEOG 485L/585L Midterm Exam #

## Due Friday, March 11, 2016 before 5:00 pm ##

_Late Exams (determined by when your writeup web page is posted to your GitHub repo) will be penalized 10 points (10%) for each 24-hours or fraction thereof_

Just as you have done for your milestones and deep-dives, create a web page with your answers to the exam questions and link to the page from your homepage (index.html) in GitHub. 

Make sure to _clearly format_ your writeup so that your answer's are understandable.

100 pts

#. Add a Google Map to your writeup that has the following characteristics (34 pts total):

	* Based on the Satellite base map (10 pts)
	* Centered at 36.060574 N Latitude,-107.961692 E Longitude (5 pts)
	* 400 px wide by 300 px high (5 pts)
	* Zoom level 18 (5 pts)
	* With a single marker positioned at the center point (5 pts)
	* With an InfoWindow (with content of your choice) that is displayed when the user clicks on it (4 pts)

#. What combination of OGC Service and Request (e.g. SERVICE=WMS&REQUEST=GetFeatureInfo) would you use to perform the following? (3 pts each)

	a. Determine the spatial extent of an available layer from a Web Map Service.
	a. Obtain a list of coverages from a Web Coverage service.
	a. Determine what file formats are supported by a Web Feature Service for the delivery of available data types (i.e. layers)
	a. Retrieve a map image from a Web Map Service
	a. Retrieve data from an available coverage from a Web Coverage Service 

#. Perform the following WMS GetCapabilities request ([Link^[`http://neowms.sci.gsfc.nasa.gov/wms/wms?version=1.1.1&service=WMS&request=GetCapabilities`]](http://neowms.sci.gsfc.nasa.gov/wms/wms?version=1.1.1&service=WMS&request=GetCapabilities)) and answer the following questions (3 pts each)

	a. What is the name of the service?
	a. What file formats are supported by the GetMap request?
	a. What are the _names_ of three of the layers included in the service?

#. Compose a GetMap request for the WMS referenced in the previous question that includes the following characteristics. Include in your answer both the complete WMS GetMap request and the resulting map image that is returned. (15 pts)

	* JPEG image format
	* 1200 pixels wide (you will need to calculate the height based upon the aspect ratio of the bounding box)
	* Bounding Box (EPSG:4326): `Min X = -128 East Longitude, Min Y = 21.5 North Latitude, Max X = -62 East Longitude, Max Y = 54.5 North Latitude` 
	* Layer to be mapped = “MOD_LSTD_CLIM_M”

#. From the XML GetCapabilities returned by the following WFS request ([Link^[`http://services.nationalmap.gov/arcgis/services/WFS/transportation/MapServer/WFSServer?
request=GetCapabilities&service=WFS`]](http://services.nationalmap.gov/arcgis/services/WFS/transportation/MapServer/WFSServer?request=GetCapabilities&service=WFS)) answer the following questions (3 pts each) 

	a. What is the title for this service?
	a. What file format(s) are supported by this service’s GetFeature request?
	a. What is the DefaultSRS or the FeatureType named "WFS_transportation:Interstate"?
	a. What is the WGS84BoundingBox of the FeatureType named "WFS_transportation:Interstate"?


#. From the XML GetCapabilities returned by the following WCS request ([Link^[`http://sdf.ndbc.noaa.gov/thredds/wcs/hfradar_uswc_500m?request=GetCapabilities&version=1.0.0&service=WCS`]](http://sdf.ndbc.noaa.gov/thredds/wcs/hfradar_uswc_500m?request=GetCapabilities&version=1.0.0&service=WCS)) answer the following questions (3 pts each)

	a. What is the description of the `v` coverage?
	a. How many coverages are available from this service?

#. Formulate a complete DescribeCoverage request for the `v` coverage for the WCS service referenced in the previous question and provide a link in your writeup for that request (i.e. I should be able to click the link and get the XML returned in response to your well formed request). (3 pts)


#. From the returned XML document from the DescribeCoverage request in the previous question answer the following questions. (3 pts each)

	a. What is the spatial domain for the ‘v‘ coverage?
	a. What file formats are available for ‘v‘ data delivered by this service?
	a. What SRS(s) are supported by this service for requested data delivery?