<!---------------------------------------------------------------------------->
<!-- Week 06 ----------------------------------------------------------------->
<!---------------------------------------------------------------------------->


# Week 6 - Module 4.1 - Interoperability Standards - XML, KML, and WMS # {#week06}

This week's class focuses on three open interoperability standards that are the most broadly used of the standards that we will be covering. 

Extensible Markup Language (XML)

:	The World Wide Web Consortium (W3C) standard that is the foundation for many other service and data standards including: the service metadata (GetCapabilities) for the OGC WMS, WFS, and WCS, Geography Markup Language (GML), and KML. 

KML

:	Formerly known as Keyhole Markup Language, an OGC standard since 2008, KML is a combined geospatial data and representation standard that enables the combined transfer of both location-based data and styling information within a defined XML model. 

Web Map Service (WMS)

:	The OGC standard for providing on-demand map visualizations based upon user provided parameters reflecting selected data layers, defined areas of interest, image formats, and optionally time of interest. 


*Expected Outcomes*

At the end of this class students should have an understanding of the following:

* The basic characteristics of XML documents, including the concepts of _well-formed_ and _valid_ XML

* The capabilities of KML for providing both data and representation information for geospatially referenced data. 

* The request-response model for OGC WMS, including the required and optional request parameters for the _GetCapabilities_, _GetMap_, and _GetFeatureInfo_ requests; and the response types generated in response to those requests. 

* A general familiarity with the linkage between the WMS and KML standards 


*Key Concepts*

* XML as a general standard for structured data exchange, with DTDs and Schemas defining application specific data models

* KML as a data and representation standard for delivery of geospatial data and symbolization information into client applications, both desktop and web-based. 

* WMS as a geospatial data visualization standard for providing online access to map images in a variety of formats for integration into desktop and web-based mapping applications


## Class Prep ## {#week06-prep}

* [OGC Workshop White Paper](http://karlbenedict.com/documents/ogcworkshop.pdf)


## Reference Materials ## {#week06-reference}

* OGC WMS Implementation Specification [Version 1.0 - 2000](http://portal.opengeospatial.org/files/?artifact_id=7196), [Version 1.1 - 2001](http://portal.opengeospatial.org/files/?artifact_id=1058), [Version 1.1.1 - 2002](http://portal.opengeospatial.org/files/?artifact_id=1081&version=1&format=pdf), [*Version 1.3.0 - 2006*](http://portal.opengeospatial.org/files/?artifact_id=14416)

* OGC KML [Version 2.2 - 2008](http://portal.opengeospatial.org/files/?artifact_id=27810), [*Version 2.3 - 2015*](http://docs.opengeospatial.org/is/12-007r2/12-007r2.html)

* [Google Code KML Documentation](https://developers.google.com/kml/documentation/)

## Weekly Milestone - WMS & KML ## {#week06-milestone}

There are a large number of WMS services available on the web. One way to find interesting services is to search for them using standard search engines such as Google. Try searching for the following search phrase: 

`“REQUEST=GetCapabilities” and “SERVICE=WMS”`

as a single search phrase

Question 1
:	What search engine did you use?

Question 2
:	How many ‘hits’ did you get?

Question 3
:	How useful (generally in terms of getting a pointers to live WMS services [defined as a *functioning* GetCapabilities request]) were the ‘hits’?

Pick two of the services that included live "GetCapabilities" requests that you found above, and answer the following questions about each.

Question 4 (service #1)
:	What is the URL for the full GetCapabilities request to the service?

	What is the Name of the service?

	What Format(s) are available for GetMap requests from the service?

	How many layers are included in the service (*including nesting layers*)?

Question 4 (service #2)
:	What is the URL for the full GetCapabilities request to the service?

	What is the Name of the service?

	What Format(s) are available for GetMap requests from the service?

	How many layers are included in the service (*including nesting layers*)?

Question 5: For one of the layers in the first service, 
:	What is the name of the layer?

	What is the SRS of the layer?

	What is the name of the projection that matches the SRS EPSG code?

	What is the LatLonBoundingBox of the layer?

Open the following GetCapabilities request in your browser. Select “View Source” from the browser menu to see the delivered XML document (it may appear as an unformatted string of text by default in your browser - if that is the case, save the file to your hard drive and view it in a text editor). Use the information in the XML capabilities document to formulate `GetMap` requests for the following map images. Include the requests and resulting images in your write-up. Comment on anything unusual that you notice in the images that are returned. 

[http://gstore.unm.edu/apps/rgis/datasets/92403ebf-aec5-404b-ae8a-6db41f388737/services/ogc/wms?SERVICE=wms&REQUEST=GetCapabilities&VERSION=1.1.1](http://gstore.unm.edu/apps/rgis/datasets/92403ebf-aec5-404b-ae8a-6db41f388737/services/ogc/wms?SERVICE=wms&REQUEST=GetCapabilities&VERSION=1.1.1)

Question 6
:	for the area surrounding Bernalillo County (-107.2,34.7,-106,35.25; EPSG:4326) for the `g_2007fe_35_county` layer as a 200x200 pixel JPEG <!-- http://gstore.unm.edu/apps/rgis/datasets/92403ebf-aec5-404b-ae8a-6db41f388737/services/ogc/wms?SERVICE=wms&REQUEST=GetMap&VERSION=1.1.1&FORMAT=JPEG&BBOX=-107.2,34.7,-106,35.25&SRS=EPSG:4326&WIDTH=200&HEIGHT=200&LAYERS=g_2007fe_35_county&STYLES= -->

	for the same area and layer as a 500x500 pixel PNG <!-- http://gstore.unm.edu/apps/rgis/datasets/92403ebf-aec5-404b-ae8a-6db41f388737/services/ogc/wms?SERVICE=wms&REQUEST=GetMap&VERSION=1.1.1&FORMAT=PNG&BBOX=-107.2,34.7,-106,35.25&SRS=EPSG:4326&WIDTH=500&HEIGHT=500&LAYERS=g_2007fe_35_county&STYLES= -->

Open the following (linked) KML file in Google Earth, uncompress it, and save the contained KML file on your computer. Open the KML file in a text editor (e.g. Text Wrangler [Mac], Notepad/Notepad++ [Windows]). 

[http://rgis.unm.edu/gstore/datasets/3f0a85aa-b7f8-47bd-8db6-1c0e66becf72/nm_state_bdy_00.derived.kml](http://rgis.unm.edu/gstore/datasets/3f0a85aa-b7f8-47bd-8db6-1c0e66becf72/nm_state_bdy_00.derived.kml)

Question 7
: Add a second _Placemark_ element to the KML file that represents a _square_ region that is completely contained within the state boundary. Save the KML file and open it in Google Earth (download from http://www.google.com/earth/index.html). Submit the KML file (as a link in your writeup) as part of your writeup for the milestone. <!-- example file: sample-files/milestoneKML_example.kml -->






## Deep Dive - OGC Service Concepts## {#week06-deepDive}

Question 1
:	What request type is common across all three (WMS, WFS, WCS) OGC web services that we have learned about?

Answer the following questions about a *WMS GetCapabilities* request

Question 2
:	What are the required parameters, and what do they represent?

	What is returned in response to a WMS GetCapabilities request?

Answer the following questions about a *WMS GetMap* request

Question 3
:	What are the required parameters, and what do they represent?

	What is returned in response to a WMS GetMap request?

	What is the significance of transparency in WMS requests?

Question 4
:	What OGC request would you use to inform the configuration of a client application (like ArcGIS or QGIS) about an OGC service that you want to add layers from?

Which OGC request would you submit under the following circumstances (*include both the service type* [e.g. WMS, WFS, WCS], and the *request* [e.g. GetMap, GetCapabilities, GetCoverage, etc.] in your answer)

Question 5
:	You want a map image representing three layers of data in a single JPEG for a specified area of interest. 

	You want to retrieve data representing geometries and associated attributes for a road network, with the returned data in GML.

	You want to retrieve data representing a digital elevation model (a raster dataset) in the form of a GeoTIFF.

Question 6 - What are the EPSG codes of the following Spatial Reference Systems
:	WGS 84 (Geodetic CRS [geographic 2d])

	NAD83 / UTM zone 13N

	NAD27 / UTM zone 13N

Retrieve the GetCapabilities XML response from the following WMS, and answer the following questions.

[http://gstore.unm.edu/apps/rgis/datasets/715663ba-c1c3-414c-84a7-c671526f8316/services/ogc/wms?SERVICE=wms&REQUEST=GetCapabilities&VERSION=1.1.1](http://gstore.unm.edu/apps/rgis/datasets/715663ba-c1c3-414c-84a7-c671526f8316/services/ogc/wms?SERVICE=wms&REQUEST=GetCapabilities&VERSION=1.1.1)

Question 7
:	What is the Title of the service?

	Who is the Contact Person for questions about the service?

	What are the available image formats for the GetMap request for this service?
	
	What are the SRS/CRS’s for which layers from this service are available (remember that nested layers inherit the SRS/CRS of their parent layers). 

Question 8
:	Formulate a GetMap request for the “tl_2010_35_bg10” layer from this service, for a 500x500 pixel map image that is 0.05-degrees wide and 0.05-degress high, with the SW corner of the map image located at  35°N and -106°45'E (EPSG:4326). Include in your write-up the complete GetMap request and the returned map image. 

<!-- http://gstore.unm.edu/apps/rgis/datasets/715663ba-c1c3-414c-84a7-c671526f8316/services/ogc/wms?SERVICE=wms&REQUEST=GetMap&VERSION=1.1.1&FORMAT=PNG&BBOX=-106.75,35,-106.667,35.05&SRS=EPSG:4326&WIDTH=500&HEIGHT=500&LAYERS=tl_2010_35_bg10&STYLES=  -->



