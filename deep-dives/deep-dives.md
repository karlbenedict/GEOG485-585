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
: 35°14′19.29″ N, 107°36′30.67″ W (Mount Taylor Summit)
: 34°16′40.34″ N, 103°19′28.49″ W (Blackwater Draw)

Retrieve the GetCapabilities XML response from the following WMS, and answer the following questions.

[http://gstore.unm.edu/apps/rgis/datasets/715663ba-c1c3-414c-84a7-c671526f8316/services/ogc/wms?SERVICE=wms&REQUEST=GetCapabilities&VERSION=1.1.1](http://gstore.unm.edu/apps/rgis/datasets/715663ba-c1c3-414c-84a7-c671526f8316/services/ogc/wms?SERVICE=wms&REQUEST=GetCapabilities&VERSION=1.1.1)

Question 8
: What is the Title of the service?
: Who is the Contact Person for questions about the service?
: What are the available image formats for the GetMap request for this service?
: What are the SRS/CRS’s for which layers from this service are available (remember that nested layers inherit the SRS/CRS of their parent layers). 

Question 9
: Formulate a GetMap request for the “tl_2010_35_bg10” layer from this service, for a 500x500 pixel map image that is 0.05-degrees wide and 0.05-degress high, with the SW corner of the map image located at  35°N and -106°45'E. Include in your write-up the complete GetMap request and the returned map image.  


## Week 11: Problem Definition and Data Acquisition ##

TBA


## Week 14: Data Integration and Styling in GeoServer ##

TBA