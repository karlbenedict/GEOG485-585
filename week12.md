---
title: Week 12 - Module 4.3 - Interoperability Standards - Desktop GIS Integration
...


<!---------------------------------------------------------------------------->
<!-- Week 12 ----------------------------------------------------------------->
<!---------------------------------------------------------------------------->

# Introduction # {#week12}

As we've discussed the components of the client tier of our tiered geospatial services oriented architecture we have concentrated on the open standards that can support client applications and the web-based clients that can consume them. Desktop GIS applications can also consume standards-based services, specifically OGC services. This week's class concentrates on the methods for integrating OGC services into two GIS client applications Quantum GIS and ArcGIS, demonstrating the utility of using external standards-based services as a data and map image source within desktop applications.


*Expected Outcomes*

At the end of this class, students should be able to:

* Add a WMS service to Quantum GIS
* Add a WFS service to Quantum GIS
* Add WMS, WFS, and WCS services to ArcGIS (if they have access to the required software)


*Key Concepts*

At the end of this class students will understand that

* The key to configuring a desktop client application is the GetCapabilities request for the needed service
* The GetCapabilities request required by a particular client may consist of a base URL or a complete URL. 
* Quantum GIS uses a base URL request model for self-configuration of WMS and WFS services
* ArcGIS uses a base URL request model for self-configuration of WMS, WCS, and WFS services
* Both Quantum GIS and ArcGIS require additional configuration to enable WFS access 


# Class Prep # {#week12-prep}

* Quantum GIS [documentation](https://docs.qgis.org/2.18/en/docs/user_manual/index.html), especially
	* [Working with OGC Data](https://docs.qgis.org/2.18/en/docs/user_manual/working_with_ogc/index.html)
* ArcGIS [](), especially
	* [About using OGC service layers](http://desktop.arcgis.com/en/arcmap/10.4/map/web-maps-and-services/about-using-ogc-service-layers.htm)
	* [Connecting to GIS servers](http://desktop.arcgis.com/en/arcmap/10.4/map/working-with-arcmap/connecting-to-gis-servers.htm)
	* [Adding a WFS service to ArcMap](http://desktop.arcgis.com/en/arcmap/10.4/map/web-maps-and-services/adding-a-wfs-service-to-arcmap.htm)

# Weekly Milestone - WMS, WFS and WCS Access in Quantum GIS# {#week12-milestone}

*While the focus of these instructions is on using QGIS to interact with remote OGC services you may use ArcGIS instead of QGIS if you prefer (and have access to a copy of ArcGIS that has the *interoperabilty extension* installed [for the WFS requests]).*

Add three WMS layers to a new map project in QGIS, with at least one coming from each of the following collections of WMS services.

Some things to keep an eye out for:

* Any scale limits described for the various layers
* Layer names can sometimes be a bit confusing
* You can double-check the base URL advertised for the service by reviewing the content of the `GetCapabilities` area of the `service` metadata provided as part of the `GetCapabilities` request. If you can't manually request and review the GetCapabilities XML file for the service, your desktop client may not be able to connect to and retrieve the file for its configuration. 

_USGS's National Maps *Small-Scale Web Services* Page_: [http://basemap.nationalmap.gov/arcgis/services/USGSTopo/MapServer/WMSServer?request=GetCapabilities&service=WMS](http://basemap.nationalmap.gov/arcgis/services/USGSTopo/MapServer/WMSServer?request=GetCapabilities&service=WMS)

_NASA Earth Observation System_: [https://neowms.sci.gsfc.nasa.gov/wms/wms?version=1.3.0&service=WMS&request=GetCapabilities]https://neowms.sci.gsfc.nasa.gov/wms/wms?version=1.3.0&service=WMS&request=GetCapabilities)

In your write-up include the names of the layers you added, which service they came from, and screen shots (one for for each of the added layers) showing each of them in the QGIS client interface.

Add three WFS layers to the same QGIS project, with at least two based upon data available from the RGIS data browser ([http://rgis.unm.edu/getdata/](http://rgis.unm.edu/getdata/)), and one based on the GeoServer sample WFS service ([http://internetmapping.net:8080/geoserver/ows?service=wfs&version=1.1.0&request=GetCapabilities](http://internetmapping.net:8080/geoserver/ows?service=wfs&version=1.1.0&request=GetCapabilities).   In RGIS you can see the available services for a specific data layer by 

1. Selecting the collection you want to view by selecting from the directory tree on the left side of the page; 

2. Identifying the data sets that have available OGC WMS and/or WFS services as indicated by the "Services" entry for each dataset, where the provided links are for the GetCapabilities requests for the provided services:

![Illustration highlighting where to see if a spacific dataset has an available OGC service](images/RGIS_OGCLinkScreenshot.jpg){#fig:RGIS_OGC_LINKS}

_Important_: When adding any WFS layer, you may need to go into the preferences for QGIS and under the "Network" options increase the "Timeout for Network Requests(ms)" value to a larger number than the default 60000 (1 minute). If you don't do this, QGIS might give up on the request before it has been fulfilled by the server. You may also want to zoom into a limited area and check the box in the QGIS "Add WFS Layer ..." dialog for "Only Request Features Overlapping the Current View Extent" as this will reduce the number of features recovered - a significant issue if the WFS service is publishing a large number of features.    

In your write-up include the names of the layers you added, and the GetCapabilities requests related to those layers. Also include screen shots (again, one for each added layer) showing each layer in your QGIS project.  

