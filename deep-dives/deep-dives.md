# Geography 485L/585L "Deep Dive" Assignments #

The four assignments that constitute the class's "Deep Dives" consist of a series of activities that build upon each other and the smaller assignments accomplished as ["Milestones"](http://karlbenedict.com/GEOG485-585/milestones/milestones.html) in the development of your course portfolio. These assignments will be added to your portfolio content and evaluated in conjunction with the mid-term and end-of-term portfolio assessment and grading. The approximate timing of these assignments is provided below, though may be subject to change as progress through the class material continues. 


## Week 4: Creation of a a Google Maps Web Page with Custom Points and Labels ##

In your milestone for Week 4 you built a styled Google Maps base map for a particular region of interest. For this *deep dive* assignment create a new free-standing web page that includes a brief description of the topical focus of your mapper:

* The type of information that you want to depict in your map
* Your reasons for selecting the specific area shown in the map
* A description of what you are trying to communicate with the map

Embed the base map that you initially created for your lab assignment into this new web page.

* Add 5 overlay objects to the map that relate to specific items of interest or importance. These overlay objects may be _markers_, _polylines_, or _polygons_. Make sure to include descriptive titles for each object.
* Add an _infobox_ to each object that contains additional detailed information about the object


## Week 6: OGC Service Concepts ##

Question 1
:	What request type is common across all three (WMS, WFS, WCS) OGC web services that we have learned about?

Answer the following questions about a WMS GetCapabilities request

Question 2
:	What are the required parameters, and what do they represent?
:	What is returned in response to a WMS GetCapabilities request?

Answer the following questions about a WMS GetMap request

Question 3
:	What are the required parameters, and what do they represent?
:	What is returned in response to a WMS GetMap request?
:	What is the significance of transparency in WMS requests?

Question 4
:	What OGC request would you use to inform the configuration of a client application (like ArcGIS) about an OGC service that you want to add layers from?

Which OGC request would you submit under the following circumstances (include both the service type [e.g. WMS, WFS, WCS], and the request [e.g. GetMap, GetCapabilities, GetCoverage, etc.] in your answer)

Question 5
:	You want a map image representing three layers of data in a single JPEG for a specified area of interest. 
:	You want to retrieve data representing geometries and associated attributes for a road network, with the returned data in GML.
:	You want to retrieve data representing a digital elevation model (a raster dataset) in the form of a GeoTIFF.

Question 6 - What are the EPSG codes of the following Spatial Reference Systems
:	WGS 84 (Geodetic CRS [geographic 2d])
:	NAD83 / UTM zone 13N
:	NAD27 / UTM zone 13N

Use the `cs2cs` utility to convert the following WGS84 Geographic Coordinates into UTM Zone 13, NAD83 coordinates. Include your `cs2cs` command and output in your writeup. 

Question 7
:	35°14′19.29″ N, 107°36′30.67″ W (Mount Taylor Summit)
:	34°16′40.34″ N, 103°19′28.49″ W (Blackwater Draw)

Retrieve the GetCapabilities XML response from the following WMS, and answer the following questions.

[http://gstore.unm.edu/apps/rgis/datasets/715663ba-c1c3-414c-84a7-c671526f8316/services/ogc/wms?SERVICE=wms&REQUEST=GetCapabilities&VERSION=1.1.1](http://gstore.unm.edu/apps/rgis/datasets/715663ba-c1c3-414c-84a7-c671526f8316/services/ogc/wms?SERVICE=wms&REQUEST=GetCapabilities&VERSION=1.1.1)

Question 8
:	What is the Title of the service?
:	Who is the Contact Person for questions about the service?
:	What are the available image formats for the GetMap request for this service?
:	What are the SRS/CRS’s for which layers from this service are available (remember that nested layers inherit the SRS/CRS of their parent layers). 

Question 9
:	Formulate a GetMap request for the “tl_2010_35_bg10” layer from this service, for a 500x500 pixel map image that is 0.05-degrees wide and 0.05-degress high, with the SW corner of the map image located at  35°N and -106°45'E. Include in your write-up the complete GetMap request and the returned map image.  


## Week 11: Problem Definition and Data Acquisition ##

This deep dive is the first of two (plus milestones) that are related to a common theme of taking an online mapping problem from start to finish - from the definition of a problem, through the implementation of services and a basic client interface for the display of data for the specific problem.

Before beginning to work on any mapping problem (online or otherwise), some basic questions need to asked and answered. Please consider and answer (in 2-4 sentences as appropriate for the question) the following questions relating to the problem that you will be working on for the forthcoming assignments:

* What is the high-level description of the problem/question you want to help answer through the presentation of a collection of geographic data over the internet? Please answer in a short paragraph.

* Who is the target audience for the information you want to provide?

* What geographic region does your problem area represent? Please describe it in words (e.g. New Mexico, Alberta Canada, etc.) and define it in terms of a geographic (WGS84) (latitude and longitude) bounding box. 

* What types of data do you want to include in your project? Include a description (data content: e.g. elevation data, hydrographic survey, etc.) and types (i.e. raster, vector).

* What projection will you use for the presentation of your project data? Again, describe it, provide your reasoning for selection, and provide the corresponding EPSG code. 

* Where do you anticipate acquiring data for the project from?

* What barriers to acquiring and processing the needed data do you anticipate?

While you are going to continue to acquire additional data for the project over the next couple of assignments, begin acquiring data for your selected project now. Specifically, find 5 datasets that are consistent with your description of the problem you are going to work on, and use `ogrinfo` or `gdalinfo` and any associated metadata to describe them in brief by answering the following questions:

* What is the name of the dataset?

* What type of data (raster/vector) are in the dataset?

* What is its format?

* What is its coordinate reference system?

* What are the spatial extents of the dataset?

For a dataset to be useful, you should be able to answer all five of these questions about it. Furthermore, you should seek out datasets that are in common formats that you know you can work with in a variety of applications (i.e. QGIS, ArcGIS, gdalinfo, ogrinfo, etc.). If you can’t access and use a dataset in one of these applications, you will probably have problems trying to use it in your project. As a point of reference you can execute the following commands to obtain a list of the supported vector and raster file formats supported by `gdal` and `ogr` on your computer:

	ogrinfo --formats
	gdalinfo --formats

Also, below are links to the documentation for GeoServer - the platform that we will work with in a couple of weeks for publishing data - relating to the supported raster and vector formats in the default GeoServer installation. 

Vector Data: [http://docs.geoserver.org/stable/en/user/data/vector/index.html](http://docs.geoserver.org/stable/en/user/data/vector/index.html)

Raster Data [http://docs.geoserver.org/stable/en/user/data/raster/index.html](http://docs.geoserver.org/stable/en/user/data/raster/index.html)


## Week 14: Data Integration and Styling in GeoServer ##

Add each of the  datasets that you acquired for Deep Dive 3 to GeoServer and style at least three of the layers with a custom style designed to best display the data for your envisioned map. Include in your writeup the names of the datasets, associated styles, and screenshots of the layers in the OpenLayers previewer, with the style name displayed in the OpenLayers preview tool set. 

