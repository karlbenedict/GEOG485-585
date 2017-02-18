---
title: Week 7 - Module 4a - Interoperability Standards. WFS & WCS
...

<!---------------------------------------------------------------------------->
<!-- Week 07 ----------------------------------------------------------------->
<!-- Lecture 04 a 02 a ------------------------------------------------------->
<!-- Interoperability Standards----------------------------------------------->
<!-- WFS and WCS ------------------------------------------------------------->
<!---------------------------------------------------------------------------->


### Overview ###  {.module04a02a}

* OGC Web Feature Services (WFS)
	* Capabilities and purpose
	* Overview of the collection of WFS commands
	* Sample WFS requests
* OGC Web Coverage Services (WCS)
	* Capabilities and purpose
	* Overview of the collection of WCS commands
	* Sample WCS requests


## OGC Web Feature Service (WFS) ## {.module04a02a} 

### Background ### {.module04a02a} 

The documents related to the OGC WFS standard are available from: [`http://www.opengeospatial.org/standards/wfs`](http://www.opengeospatial.org/standards/wfs) and all operation parameter tables presented here are based upon the [OpenGIS Web Feature Service 2.0 Interface Standard - Panagiotis (Peter) A. Vretanos, editor - 2010-11-02](http://www.opengeospatial.org/standards/wfs)

From the Version 2.0.0 WFS Scope Section:

> This International Standard specifies the behaviour of a service that provides transactions on and access to geographic features in a manner independent of the underlying data store. It specifies discovery operations, query operations, locking operations, transaction operations and operations to manage stored parameterized query expressions.

> Discovery operations allow the service to be interrogated to determine its capabilities and to retrieve the application schema that defines the feature types that the service offers.

> Query operations allow features or values of feature properties to be retrieved from the underlying data store based upon constraints, defined by the client, on feature properties.

> Locking operations allow exclusive access to features for the purpose of modifying or deleting features.

> Transaction operations allow features to be created, changed, replaced and deleted from the underlying data store.

> Stored query operations allow clients to create, drop, list and described parameterized query expressions that are stored by the server and can be repeatedly invoked using different parameter values.


### WFS Requests/Operations ### {.module04a02a} 

These request types are submitted as part of the required `REQUEST` key in a KVP HTTP GET request. 

`GetCapabilities`
:	service metadata (XML) that documents the types of features supported by the service and the operations supported by each feature type

`DescribeFeatureType`
:	metadata (XML) that describes the structure of supported feature types

`GetPropertyValue`
:	a request for the value(s) of a specified property for a specified _featuretype_

`GetFeature` (`GetFeatureWithLock`)
:	a request for actual features (XML, or other formats) from the service. The request may include both spatial and non-spatial query constraints

`LockFeature`
:	Feature locking operation

`Transaction`
:	a request to a WFS that may create, update, or delete features

`CreateStoredQuery`
:	a request to create a named WFS query that is stored on the server for future reuse

`DropStoredQuery`
:	a request to remove a named WFS query that has previously been stored on the server

`ListStoredQueries`
:	a request to retrieve a list of named WFS queries that have been stored on the server

`DescribeStoredQueries`
:	a request for more detailed information about specific named WFS queries that are stored on the server

### WFS Conformance Levels ### {.module04a02a} 

WFS 2.0.0 Requests and their corresponding WFS Compliance Levels


| Operation (`REQUEST=`)	| V 1.1.0							| V 2.0.0							| Simple							| Basic 							| Transactional						| Locking							|
|:--------------------------|:---------------------------------:|:---------------------------------:|:---------------------------------:|:---------------------------------:|:---------------------------------:|:---------------------------------:|
| `GetCapabilities`			| ![](images/check_gray_small.png)	| ![](images/check_gray_small.png)	| ![](images/check_gray_small.png)	| ![](images/check_gray_small.png)	| ![](images/check_gray_small.png)	| ![](images/check_gray_small.png)	|
| `DescribeFeatureType`		| ![](images/check_gray_small.png)	| ![](images/check_gray_small.png)	| ![](images/check_gray_small.png)	| ![](images/check_gray_small.png)	| ![](images/check_gray_small.png)	| ![](images/check_gray_small.png)	|
| `ListStoredQueries`		|									| ![](images/check_gray_small.png)	| ![](images/check_gray_small.png)	| ![](images/check_gray_small.png)	| ![](images/check_gray_small.png)	| ![](images/check_gray_small.png)	|
| `DescribeStoredQueries`	|									| ![](images/check_gray_small.png)	| ![](images/check_gray_small.png)	| ![](images/check_gray_small.png)	| ![](images/check_gray_small.png)	| ![](images/check_gray_small.png)	|
| `GetFeature`				| ![](images/check_gray_small.png)	| ![](images/check_gray_small.png)	| ![](images/check_gray_small.png)	| ![](images/check_gray_small.png)	| ![](images/check_gray_small.png)	| ![](images/check_gray_small.png)	|
| `StoredQuery`				|									| ![](images/check_gray_small.png)	| ![](images/check_gray_small.png)	| ![](images/check_gray_small.png)	| ![](images/check_gray_small.png)	| ![](images/check_gray_small.png)	|
| `GetPropertyValue`		|									| ![](images/check_gray_small.png)	|									| ![](images/check_gray_small.png)	| ![](images/check_gray_small.png)	| ![](images/check_gray_small.png)	|
| `Transaction`				| ![](images/check_gray_small.png)	| ![](images/check_gray_small.png)	|									| 									| ![](images/check_gray_small.png)	| ![](images/check_gray_small.png)	|
| `GetFeatureWithLock`		| ![](images/check_gray_small.png)	| ![](images/check_gray_small.png)	|									| 									| 									| ![](images/check_gray_small.png)	|
| `LockFeature`				| ![](images/check_gray_small.png)	| ![](images/check_gray_small.png)	|									| 									| 									| ![](images/check_gray_small.png)	| 
| `GetGMLObject`			| ![](images/check_gray_small.png)	| 									|									| 									| 									| 									| 


### Request Composition ### {.module04a02a} 

Requests submitted to a WFS may be submitted either via 

HTTP GET
:	a request that includes all request parameters within the URL submitted to the service. Request parameters are included in the URL as “key=value” pairs (KVPs)

HTTP POST
:	a request where the URL consists of only the Host and path, with all other request parameters included in the body of the POST document submitted to the service. The request parameters supplied to the server are encoded as XML within the POST document. 

SOAP
:	a request submitted as an encapsulated message within a SOAP transaction. 

Servers implementing WFS may support either the HTTP GET, POST, or SOAP request model

Conceptually _FeatureType_ = _Layer_


### KVP for Base WFS Requests ### {.module04a02a} 

Base request parameters for all HTTP GET KVP requests

![Table 4 from [OpenGIS Web Feature Service 2.0 Interface Standard - Panagiotis (Peter) A. Vretanos, editor - 2010-11-02](http://www.opengeospatial.org/standards/wfs)](images/09-025r1_OGC_Web_Feature_Service_WFS_2-table04.jpg)

`VERSION` is required for all operations _except_ the `GetCapabilities` request


### Sample GetCapabilities Requests ### {.module04a02a} 

Sample request to USGS Framework Layer (Governmental Units) WFS Service advertised by the USGS [*TNM Access API page*](http://viewer.nationalmap.gov/tnmaccess/api/servicesForm) [service list](http://viewer.nationalmap.gov/tnmaccess/api/services?) - [Live Link](http://services.nationalmap.gov/arcgis/services/WFS/govunits/MapServer/WFSServer?request=GetCapabilities&service=WFS)

	http://services.nationalmap.gov/arcgis/services/WFS/govunits/MapServer/WFSServer?
		request=GetCapabilities&
		service=WFS


Sample request to NM RGIS (NM 2010 Census Block Groups) - [Live Link](http://gstore.unm.edu/apps/rgis/datasets/715663ba-c1c3-414c-84a7-c671526f8316/services/ogc/wfs?SERVICE=wfs&REQUEST=GetCapabilities&VERSION=1.0.0)

	http://gstore.unm.edu/apps/rgis/datasets/715663ba-c1c3-414c-84a7-c671526f8316/services/ogc/wfs?
		SERVICE=wfs&
		REQUEST=GetCapabilities&
		VERSION=1.0.0


### KVP for DescribeFeatureType Request ### {.module04a02a} 

`DescribeFeatureType` HTTP GET KVP request

![Table 15 from [OpenGIS Web Feature Service 2.0 Interface Standard - Panagiotis (Peter) A. Vretanos, editor - 2010-11-02](http://www.opengeospatial.org/standards/wfs)](images/09-025r1_OGC_Web_Feature_Service_WFS_2-table15.jpg)


### Sample DescribeFeatureType Requests ### {.module04a02a} 

USGS Framework Layer (Governmental Units) WFS Service linked from the USGS [*TNM Access API page*](http://viewer.nationalmap.gov/tnmaccess/api/servicesForm) [service list](http://viewer.nationalmap.gov/tnmaccess/api/services?) - [Live Link](http://services.nationalmap.gov/arcgis/services/WFS/govunits/MapServer/WFSServer?version=1.1.0&request=DescribeFeatureType&service=WFS&typeName=WFS_govunits:State_or_Territory_High-res)

	http://services.nationalmap.gov/arcgis/services/WFS/govunits/MapServer/WFSServer?
		version=1.1.0&
		request=DescribeFeatureType&
		service=WFS&
		typeName=WFS_govunits:State_or_Territory_High-res


Sample request to NM RGIS (NM 2010 Census Block Groups) - [Live Link](http://gstore.unm.edu/apps/rgis/datasets/715663ba-c1c3-414c-84a7-c671526f8316/services/ogc/wfs?SERVICE=wfs&REQUEST=DescribeFeatureType&VERSION=1.0.0&TYPENAME=tl_2010_35_bg10)

	http://gstore.unm.edu/apps/rgis/datasets/715663ba-c1c3-414c-84a7-c671526f8316/services/ogc/wfs?
		VERSION=1.0.0&
		SERVICE=wfs&
		REQUEST=DescribeFeatureType&
		TYPENAME=tl_2010_35_bg10


### KVP for GetFeature Request ### {.module04a02a} 

`GetFeature` HTTP GET KVP request

![Table 17 from [OpenGIS Web Feature Service 2.0 Interface Standard - Panagiotis (Peter) A. Vretanos, editor - 2010-11-02](http://www.opengeospatial.org/standards/wfs)](images/09-025r1_OGC_Web_Feature_Service_WFS_2-table17.jpg)\ 


### KVP for GetFeature Request - Presentation Parameters  ### {.module04a02a} 

![Table 5 from [OpenGIS Web Feature Service 2.0 Interface Standard - Panagiotis (Peter) A. Vretanos, editor - 2010-11-02](http://www.opengeospatial.org/standards/wfs)](images/09-025r1_OGC_Web_Feature_Service_WFS_2-table05.jpg)\ 



### KVP for GetFeature Request - Resolve Parameters### {.module04a02a} 

![Table 6 from [OpenGIS Web Feature Service 2.0 Interface Standard - Panagiotis (Peter) A. Vretanos, editor - 2010-11-02](http://www.opengeospatial.org/standards/wfs)](images/09-025r1_OGC_Web_Feature_Service_WFS_2-table06.jpg)\ 



### KVP for GetFeature Request - Ad-hoc Query Parameters (Figure ) ### {.module04a02a} 

![Table 8 from [OpenGIS Web Feature Service 2.0 Interface Standard - Panagiotis (Peter) A. Vretanos, editor - 2010-11-02](http://www.opengeospatial.org/standards/wfs)](images/09-025r1_OGC_Web_Feature_Service_WFS_2-table08.jpg)\ 



### KVP for GetFeature Request - Stored Query Parameters (Figure )### {.module04a02a} 

![Table 10 from [OpenGIS Web Feature Service 2.0 Interface Standard - Panagiotis (Peter) A. Vretanos, editor - 2010-11-02](http://www.opengeospatial.org/standards/wfs)](images/09-025r1_OGC_Web_Feature_Service_WFS_2-table10.jpg)\ 


### Sample GetFeature Requests ### {.module04a02a} 

USGS Framework Layer (Governmental Units) WFS Service linked from the USGS [*TNM Access API page*](http://viewer.nationalmap.gov/tnmaccess/api/servicesForm) [service list](http://viewer.nationalmap.gov/tnmaccess/api/services?) - [Live Link](http://services.nationalmap.gov/arcgis/services/WFS/govunits/MapServer/WFSServer?VERSION=1.1.0&REQUEST=GetFeature&SERVICE=WFS&TYPENAME=WFS_govunits:State_or_Territory_High-res)

_Note:_ `TYPENAME` for `VERSION=1.1.0` instead of `TYPENAMES` for `VERSION=2.0.0`

	http://services.nationalmap.gov/arcgis/services/WFS/govunits/MapServer/WFSServer?
		VERSION=1.1.0&
		REQUEST=GetFeature&
		SERVICE=WFS&
		TYPENAME=WFS_govunits:State_or_Territory_High-res

Alternative request ([Live Link](http://services.nationalmap.gov/arcgis/services/WFS/govunits/MapServer/WFSServer?VERSION=1.1.0&REQUEST=GetFeature&SERVICE=WFS&TYPENAME=WFS_govunits:State_or_Territory_High-res&OUTPUTFORMAT=text/xml;%20subType=gml/3.1.1/profiles/gmlsf/1.0.0/0)) that includes an `OUTPUTFORMAT` parameter

	http://services.nationalmap.gov/arcgis/services/WFS/govunits/MapServer/WFSServer?
		VERSION=1.1.0&
		REQUEST=GetFeature&
		SERVICE=WFS&
		TYPENAME=WFS_govunits:State_or_Territory_High-res&
		OUTPUTFORMAT=text/xml;%20subType=gml/3.1.1/profiles/gmlsf/1.0.0/0



## OGC Web Coverage Services ## {.module04a02a} 

### Background ### {.module04a02a}

The documents related to the OGC WCS standard are available from: [http://www.opengeospatial.org/standards/wcs][wcs] with the sample parameters in the following slides based upon the [_OGC Web Coverage Service 2.0 Interface Standard - KVP Protocol Binding Extension_ - Peter Baumann, editor - 2010-10-27](http://portal.opengeospatial.org/files/?artifact_id=41439)

From the OGC WCS 2.0 _Introduction_

>	The OGC Web Coverage Service (WCS) supports electronic retrieval of geospatial data as "coverages" – that is, digital geospatial information representing space/time-varying phenomena.

>	This document specifies the WCS core; every implementation of a WCS shall adhere to this standard. This standard thus defines only basic requirements. Extensions to the core will define extensions to meet additional requirements, such as the response encoding. Indeed, additional extensions are required in order to completely specify a WCS for implementation.

>	A WCS provides access to coverage data in forms that are useful for client-side rendering, as input into scientific models, and for other clients. The WCS may be compared to the OGC Web Feature Service (WFS) and the Web Map Service (WMS). As WMS and WFS service instances, a WCS allows clients to choose portions of a server's information holdings based on spatial constraints and other query criteria.


### WCS Requests/Operations ### {.module04a02a} 

`GetCapabilities`
:	service metadata (XML) that documents the service, including brief information about the data coverages available from the service

`DescribeCoverage`
:	a request for more detailed metadata (XML) for one or more coverages listed in the output of the GetCapabilities request

`GetCoverage`
:	a request for an actual data product representing a specified coverage. The specific data formats available for delivery will vary from service to service.


### Request Composition ### {.module04a02a} 

Requests submitted to a WCS may be submitted either via the following protocols, as defined in the three extensions developed thus far for the _core_ WCS standard. 

HTTP GET
:	a request that includes all request parameters within the URL submitted to the service. Request parameters are included in the URL as “name=value” pairs. [Extension Link](http://portal.opengeospatial.org/files/?artifact_id=41439)

HTTP POST
:	a request where the URL consists of only the Host and path, with all other request parameters included in the body of the POST document submitted to the service. The request parameters supplied to the server are encoded as XML within the POST document. [Extension Link](http://portal.opengeospatial.org/files/?artifact_id=41440)

XML/SOAP
:	a request-response model between the client that conforms with the W3C SOAP web services protocol [Extension Link](http://portal.opengeospatial.org/files/?artifact_id=41441)


### KVP for Base WCS Requests ### {.module04a02a} 

| Name		| Mandatory/Optional 				| Definition					| Data Type							|
|-----------|:---------------------------------:|-------------------------------|-----------------------------------|
| service	| M									| Identifier of the OGC service	| `String`, fixed to "WCS"			| 
| request	| M									| Request type name				| `String`, set to operation name	|
| version	| M (except for GetCapabilities)	| Request protocol version		| `String`							|


### Sample WCS `GetCapabilities` requests ### {.module04a02a} 

NOAA Global Forecast System [THREDDS catalog](http://nomads.ncdc.noaa.gov/thredds/catalog/gfs-004/catalog.html). [Live Link](http://nomads.ncdc.noaa.gov/thredds/wcs/gfs-004/201602/20160228/gfs_4_20160228_0000_384.grb2?service=WCS&version=1.0.0&request=GetCapabilities)

	http://nomads.ncdc.noaa.gov/thredds/wcs/gfs-004/201602/20160228/
		gfs_4_20160228_0000_384.grb2?
		service=WCS&
		version=1.0.0&
		request=GetCapabilities 


New Mexico Resource Geographic Information System PRISM Precipitation Normals WCS Service. [Live Link](http://gstore.unm.edu/apps/rgis/datasets/2ce10b57-3925-4971-b876-b6fc66d3cca2/services/ogc/wcs?SERVICE=wcs&REQUEST=GetCapabilities&VERSION=1.1.2)

	http://gstore.unm.edu/apps/rgis/datasets/2ce10b57-3925-4971-b876-b6fc66d3cca2/services/ogc/wcs?
		SERVICE=wcs&
		REQUEST=GetCapabilities&
		VERSION=1.1.2


### KVP for DescribeCoverage Request ### {.module04a02a} 

`DescribeCoverage` HTTP GET KVP request (Figure {@fig:wcsTable01})

![Table 1 from [_OGC Web Coverage Service 2.0 Interface Standard - KVP Protocol Binding Extension_ - Peter Baumann, editor - 2010-10-27](http://portal.opengeospatial.org/files/?artifact_id=41439)](images/09-147r1_OGC_Web_Coverage_Service_2-table01.jpg){#fig:wcsTable01}


### Sample DescribeCoverage Request ### {.module04a02a} 

NOAA Global Forecast System [THREDDS catalog](http://nomads.ncdc.noaa.gov/thredds/catalog/gfs-004/catalog.html). [Live Link](http://nomads.ncdc.noaa.gov/thredds/wcs/gfs-004/201602/20160228/gfs_4_20160228_0000_384.grb2?service=WCS&version=1.0.0&request=DescribeCoverage&COVERAGE=Categorical_Rain)

	http://nomads.ncdc.noaa.gov/thredds/wcs/gfs-004/201602/20160228/
	gfs_4_20160228_0000_384.grb2?
		service=WCS&
		version=1.0.0&
		request=DescribeCoverage&
		COVERAGE=Categorical_Rain 


New Mexico Resource Geographic Information System PRISM Precipitation Normals WCS Service. [Live Link](http://gstore.unm.edu/apps/rgis/datasets/2ce10b57-3925-4971-b876-b6fc66d3cca2/services/ogc/wcs?SERVICE=wcs&REQUEST=DescribeCoverage&VERSION=1.1.2&COVERAGE=us_ppt_1971_2000_11)

	http://gstore.unm.edu/apps/rgis/datasets/2ce10b57-3925-4971-b876-b6fc66d3cca2/services/ogc/wcs?
		SERVICE=wcs&
		REQUEST=DescribeCoverage&
		VERSION=1.1.2&
		COVERAGE=us_ppt_1971_2000_11


### KVP for GetCoverage Request ### {.module04a02a} 

`GetCoverage` HTTP GET KVP request (Figure {@fig:wcsTable01})

![Table 2 from [_OGC Web Coverage Service 2.0 Interface Standard - KVP Protocol Binding Extension_ - Peter Baumann, editor - 2010-10-27](http://portal.opengeospatial.org/files/?artifact_id=41439)](images/09-147r1_OGC_Web_Coverage_Service_2-table02.jpg)



### Subset Definition for GetCoverage Request ### {.module04a02a} 

Subset definition for the `GetCoverage` HTTP GET KVP request

![Requirement 7 from [_OGC Web Coverage Service 2.0 Interface Standard - KVP Protocol Binding Extension_ - Peter Baumann, editor - 2010-10-27](http://portal.opengeospatial.org/files/?artifact_id=41439)](images/09-147r1_OGC_Web_Coverage_Service_2-requirement07.jpg)

Example from the 2.0 specification:

	http://www.myserver.org:port/path?
		service=WCS
		&version=2.0
		&request=GetCoverage
		&coverageId=C0002
		&subset=lon,http://www.opengis.net/def/crs/EPSG/0/4326(-71,47)
		&subset=lat,http://www.opengis.net/def/crs/EPSG/0/4326(-66,51)
		&subset=t,http://www.opengis.net/def/trs/ISO- 8601/0/Gregorian+UTC("2009-11-06T23:20:52Z")



### Sample GetCoverage Request ### {.module04a02a} 

New Mexico Resource Geographic Information System PRISM Precipitation Normals WCS Service. [Live Link](http://gstore.unm.edu/apps/rgis/datasets/2ce10b57-3925-4971-b876-b6fc66d3cca2/services/ogc/wcs?SERVICE=wcs&REQUEST=GetCoverage&VERSION=1.1.2&COVERAGE=us_ppt_1971_2000_11&CRS=urn:ogc:def:crs:EPSG::4326&BBOX=24.0625,-125.02083333333,49.93749998965,-66.47916669008&FORMAT=image/tiff&WIDTH=2048&HEIGHT=905)

	http://gstore.unm.edu/apps/rgis/datasets/2ce10b57-3925-4971-b876-b6fc66d3cca2/services/ogc/wcs?
		SERVICE=wcs&
		REQUEST=GetCoverage&
		VERSION=1.1.2&
		COVERAGE=us_ppt_1971_2000_11&
		CRS=urn:ogc:def:crs:EPSG::4326&
		BBOX=24.0625,-125.02083333333,49.93749998965,-66.47916669008&
		FORMAT=image/tiff&
		WIDTH=2048&
		HEIGHT=905




