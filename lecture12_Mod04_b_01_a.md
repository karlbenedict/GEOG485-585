<!---------------------------------------------------------------------------->
<!-- Week 12 ----------------------------------------------------------------->
<!-- Lecture 04 b 01 a ------------------------------------------------------->
<!-- Interoperability Standards----------------------------------------------->
<!-- Desktop GIS Integration-------------------------------------------------->
<!---------------------------------------------------------------------------->


# Module 4b - Interoperability Standards - Desktop GIS Integration# {.module04b01a}

### Overview ###  {.module04b01a}

* Common Model for Client Configuration for Connections to Remote OGC Services
* Specific Client Examples

Quantum GIS (QGIS)

* WMS
* WFS
* WCS

ArcGIS

* WMS
* WFS
* WCS

### Common Model ###  {.module04b01a}

Based upon the results of a GetCapabilities request against a remote service. GetCapabilities request information provided as either:

* The base URL to which the OGC service parameters would be added
* A complete GetCapabilities request against the service


### Full GetCapabilities Request ###  {.module04b01a}

NASA Earth Observations (NEO) Imagery WMS

[`http://neowms.sci.gsfc.nasa.gov/wms/wms?version=1.3.0&service=WMS&request=GetCapabilities`](http://neowms.sci.gsfc.nasa.gov/wms/wms?version=1.3.0&service=WMS&request=GetCapabilities)

USGS [Service Endpoints](http://viewer.nationalmap.gov/services/) - [http://services.nationalmap.gov/arcgis/services/USGSTopoLarge/MapServer/WMSServer?request=GetCapabilities&service=WMS](http://services.nationalmap.gov/arcgis/services/USGSTopoLarge/MapServer/WMSServer?request=GetCapabilities&service=WMS)


### Base URL for GetCapabilities ###  {.module04b01a}

NASA Earth Observations (NEO) Imagery WMS

[`http://neowms.sci.gsfc.nasa.gov/wms/wms?`](http://neowms.sci.gsfc.nasa.gov/wms/wms?)

USGS [Service Endpoints](http://viewer.nationalmap.gov/services/) - [`http://services.nationalmap.gov/arcgis/services/USGSTopoLarge/MapServer/WMSServer?`](http://services.nationalmap.gov/arcgis/services/USGSTopoLarge/MapServer/WMSServer?)



### Quantum GIS (QGIS) ###  {.module04b01a}

QGIS uses the Base URL approach for adding WMS, WFS or WCS layers to a project. 

The General Process: 

1. Add service, or select existing service
2. Connect to the service to retrieve the information from the GetCapabilities response for the service
3. Select layer(s)
4. Modify settings for layer(s)
5. Add layer(s)

[QGIS OGC Documentation](http://docs.qgis.org/2.8/en/docs/user_manual/working_with_ogc/index.html)


### QGIS - Adding Services and Layers - start ###  {.module04b01a .twoUp}

![OGC Options in the *Add Layer* menu options](images/QGIS-AddLayer-OGC.png)

![OGC Options in the left-side icon list](images/QGIS-AddOGC-Buttons.png)


You need to know the GetCapabilities request for the service you want to add, for example one of the USGS WMS services

~~~~~~~~~~~
http://services.nationalmap.gov/arcgis/services/USGSTopoLarge/MapServer/WMSServer?request=GetCapabilities&service=WMS
~~~~~~~~~~~

determine the base URL - 

`http://services.nationalmap.gov/arcgis/services/USGSTopoLarge/MapServer/WMSServer 	` 

in this case

If in doubt, check the information in the metadata

Select the layer type you would like to from "Layer" menu, or click the button in the interface to add a specific layer type.

### QGIS - Adding Services and Layers - adding a service ###  {.module04b01a}

Add a service to the list of services in the menu (if necessary - QGIS retains information about previously added services) by selecting the "New" option under the service list in the "Add Layer(s) from a Server" dialog

!["Add Layer(s) from a Server" dialog](images/QGIS-AddLayer_s_fromAWM_T_SServer.png)


### QGIS - Adding Services and Layers - adding connection information ###  {.module04b01a}

Add the name, base URL and any additional information about the service to the connection dialog box

![Connection dialog box](images/QGIS-AddConnectionDialog.png) 

### QGIS - Adding Services and Layers - connecting to and adding layers from the service ###  {.module04b01a}

After adding the service, you can select it from the service list in the "Add Layer(s) from a Server" dialog box, connect to the service to retrieve the GetCapabilities response from the service, select the layers and other options advertised by the service through its response, and add them to your map. 

!["Add Layer(s) from a Server" dialog with service connection and layer selection process](images/QGIS-AddLayerFromSource.png)

### QGIS - Adding Services and Layers - the final added layer ###  {.module04b01a}

After adding the layer, it appears as an available layer in the table of contents for your map.

![QGIS map with added WMS layer in the TOC](images/QGIS-AddedOGCLayers.png) 


### QGIS Demonstration with WMS, WFS and WCS Services ###  {.module04b01a}

WMS, WFS and WCS in QGIS

[Example](https://raw.githubusercontent.com/UNM-GEOG-485-585/class-materials/master/sample-files/QGIS_OGC_demo.qgs)




### ArcGIS ###  {.module04b01a}

Based upon the results of a GetCapabilities request against a remote service. GetCapabilities request information provided as either:

* The base URL to which the OGC service parameters would be added
* A complete GetCapabilities request against the service

This model applies to ArcGIS just as it did for Quantum GIS - the base URL is provided to the various ArcGIS components that support the addition of OGC services to the client interface.

[ArcGIS OGC Support Documentation](http://resources.arcgis.com/en/help/main/10.2/index.html#/About_using_OGC_service_layers/00sp0000000n000000/)


### ArcGIS WMS and WCS Configuration ###  {.module04b01a}

The addition of OGC WMS and WCS layers to ArcMap is through the same process of 

* Select the "add data" button
* WMS/WCS services are added through the "GIS Servers" option in the "Add Data" dialog
* If you have not previously added the service from which you want to add layers, you select "Add WMS Server" or "Add WCS Server" from the list of options in the "Add Data" dialog
	* You then provide the BASE GetCapabilities URL to the "ADD WMS/WCS Server" dialog that appears
	* Click "OK", and the new WMS/WCS service is added to the list of services that is available when you choose to add a WMS service.
* You then select the layer(s) from the service that you want to add to your map and click the "add" button in the dialog. 

### ArcGIS WMS and WCS Configuration Resources ###  {.module04b01a}

* Adding WMS Services to ArcMap 10.2

[ESRI Documentation](http://resources.arcgis.com/en/help/main/10.2/index.html#/Adding_WMS_services/00sp0000000s000000/)

* Adding WCS Services to ArcMap 10.2

[ESRI Documentation](http://resources.arcgis.com/en/help/main/10.2/index.html#/Adding_a_WCS_service_to_ArcMap/00sp0000000z000000/)


### ArcGIS WFS Configuration ###  {.module04b01a}

* WFS support in ArcGIS 10.0 and beyond requires that the "Data Interoperability Extension" be installed (though it doesn’t have to be enabled)
* Connections to WFS services are defined through ArcCatalog's "Interoperabilty Connections" "Add Interoperability Connection" option
* After defining the connection in ArcCatalog (including the specification of the interoperabilty connection type, desired feature types, and maximum number of features to return), its feature types are available through that Interoperability Connection that may be added to ArcMap and other ArcGIS components
* Once the connection is created, WFS data may be added through the "Add Data" dialog in ArcMap


### ArcGIS WFS Configuration Resources ###  {.module04b01a}

* Steps for connecting to an OGC WFS from within ArcCatalog 10.2

[ESRI Documentation](http://resources.arcgis.com/en/help/main/10.2/index.html#//00370000000p000000)

* Steps for adding a WFS service to ArcMap 10.2

[ESRI Documentation](http://resources.arcgis.com/en/help/main/10.2/index.html#/Adding_a_WFS_service_to_ArcMap/00sp0000001m000000/)




### Conclusions ###  {.module04b01a}

* A GetCapabilities request is the key for configuring most OGC client applications to access remote services
* The specific way in which the GetCapabilities request is given to the client varies from client to client
* Clients can auto/_mis_-configure themselves based upon the GetCapabilities XML response - when troubleshooting problems with an advertised service, try the manual request approach for the GetCapabilities, data and maps that you have learned about to determine if the service is functioning as advertised. 

