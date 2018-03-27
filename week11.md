---
title: Week 11 - OpenLayers Javascript Framework
...

<!---------------------------------------------------------------------------->
<!-- Week 11 ----------------------------------------------------------------->
<!---------------------------------------------------------------------------->

# Introduction # {#week11}

*Background*

As we learned in our introduction to OpenLayers in last week's class, it provides a flexible platform for integrating geospatial data from a variety of sources in a single interactive mapping environment. These capabilities include data integration from OGC Web Map Services and a wide variety of data formats for display in the mapper. This week's class provides an overview of the options for the OpenLayers `Map` and `Layer` objects, and specific information about configuring OGC WMS, KML, and Vector Geometry Layers and a brief overview of styling of vector data layers.


*Expected Outcomes*

At the end of this class, students should be able to:

* Create a new map object
* Add a WMS layer to that map
* Add a KML layer to that map
* Add a variety of Vector Geometry objects to the map
* Define styles for the created KML and Vector Feature objects.  

*Key Concepts *

At the end of this class students will understand that

* There are a wide variety of options that may be provided when creating `Map` and `Layer` objects within OpenLayers
* WMS layers may be added to a map from diverse online servers
* KML files may be added to map, but their potential size can pose a challenge to effective integration into online mapping applications
* A wide variety of geometric objects may be defined and added to a map
* There exist a variety of styling options for vector data that are added to a map 

# Class Prep # {#week11-prep}

Gratier, T., Spencer, P., & Hazzard, E. (2015). *Openlayers 3 beginner's guide : Get started with openlayers 3 and enhance your web pages by creating and displaying dynamic maps*. Birmingham, England: Packt Publishing. [eBook](https://unm-on-worldcat-org.libproxy.unm.edu/oclc/903963849?databaseList=1271,143,1487,1533,1540,1672,1708,173,1925,2006,2007,203,2201,2237,2259,2260,2261,2262,2263,2264,2267,2268,2281,2328,3036,3201,638) Chapters 4-6. **Read for concepts - the framework has changed enough since the publication of this book that much of the code doesn't work as you would expect**

OpenLayers 4 Examples:

* [*Single Image WMS Example*](http://openlayers.org/en/latest/examples/wms-image.html)
* [*Tiled WMS Exmaple*](http://openlayers.org/en/latest/examples/wms-tiled.html)
* [*Vector Icon Example*](http://openlayers.org/en/latest/examples/icon.html)


# Reference Materials # {#week11-reference}

[OpenLayers API Reference](http://openlayers.org/en/latest/apidoc/)

[OpenLayers Sample Maps](http://openlayers.org/en/latest/examples/)

# Weekly Milestone - A Customized OpenLayers Mapping Client {#week11-milestone}

Please create a new OpenLayers mapping page that is based upon the initial map (and thematic focus) that you created for last week's milestone, and add the following to your map:

1. Five Vector Features (based upon Point, LineString, or LinearRing Geometries), each assigned its own style.

2. One KML Layer, also styled. Make sure to give some thought to the size of the KML file that you use as large (e.g. > 1-2 MB) KML files can cause slow page loads and in some cases can crash your browser. 

3. One WMS Layer.

Submit the link to the live preview of your new OpenLayers mapping client as the response to the Milestone 9 assignment in Learn. 


# Deep Dive - # {#week11-deepDive}

This deep dive is the first of two (plus milestones) that are related to a common theme of taking an online mapping problem from start to finish - from the definition of a problem, through the implementation of services and a basic client interface for the display of data for the specific problem.

Before beginning to work on any mapping problem (online or otherwise), some basic questions need to asked and answered. Please consider and answer (in 2-4 sentences as appropriate for the question) the following questions relating to the problem that you will be working on for the forthcoming assignments:

* What is the high-level description of the problem/question you want to help answer through the presentation of a collection of geographic data over the internet? Please answer in a short paragraph.

* Who is the target audience for the information you want to provide?

* What geographic region does your problem area represent? Please describe it in words (e.g. New Mexico, Alberta Canada, etc.) and define it in terms of a geographic (WGS84) (latitude and longitude) bounding box. 

* What types of data do you want to include in your project? Include a description (data content: e.g. elevation data, hydrographic survey, etc.) and types (i.e. raster, vector).

* What projection will you use for the presentation of your project data? Again, describe it, provide your reasoning for selection, and provide the corresponding EPSG code. 

* Where do you anticipate acquiring data for the project from?

* What barriers to acquiring and processing the needed data do you anticipate?

While you are going to continue to acquire additional data for the project over the next couple of assignments, begin acquiring data for your selected project now. Specifically, find 5 datasets that are consistent with your description of the problem you are going to work on, and use your desktop GIS and any associated metadata to describe them in brief by answering the following questions:

* What is the name of the dataset?

* What type of data (raster/vector) are in the dataset?

* What is its format?

* What is its coordinate reference system?

* What are the spatial extents of the dataset?

For a dataset to be useful, you should be able to answer all five of these questions about it. Furthermore, you should seek out datasets that are in common formats that you know you can work with in a variety of applications (i.e. QGIS, ArcGIS, gdalinfo, ogrinfo, etc.). If you can’t access and use a dataset in one of these applications, you will probably have problems trying to use it in your project. 

Also, below are links to the documentation for GeoServer - the platform that we will work with in a couple of weeks for publishing data - relating to the supported raster and vector formats in the default GeoServer installation. 

Vector Data: [http://docs.geoserver.org/stable/en/user/data/vector/index.html](http://docs.geoserver.org/stable/en/user/data/vector/index.html)

Raster Data [http://docs.geoserver.org/stable/en/user/data/raster/index.html](http://docs.geoserver.org/stable/en/user/data/raster/index.html)

