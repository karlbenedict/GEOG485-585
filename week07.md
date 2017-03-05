---
title: Week 7 - Module 4.2 - Interoperability Standards - WFS & WCS
...

<!---------------------------------------------------------------------------->
<!-- Week 07 ----------------------------------------------------------------->
<!---------------------------------------------------------------------------->

# Introduction # {#week07}

This week's class focuses on two other key Open Geospatial Consortium standards that were created to enable access to geospatial _data_ of a variety of types. 

Web Feature Service (WFS)

:	A standard designed for providing on-demand access to features (typically points, lines, and polygons and more complex combinations of these feature types) and their associated attributes, in a variety of formats, and optionally filtered by spatial and other query parameters. 

Web Coverage Services (WCS)

:	A standard focused on providing access to _coverages_ representing a variety of data types, but particularly optimized for dynamic delivery of data based upon multi-dimensional gridded data. 


*Expected Outcomes*

At the end of this class students should have an understanding of the following:

* The request-response model for OGC WFS, including the required and optional request parameters for the _GetCapabilities_, _DescribeFeatureType_, and _GetFeature_ requests; and the response types generated in response to those requests. 

* The request-response model for OGC WCS, including the required and optional request parameters for the _GetCapabilities_, _DescribeCoverage_, and _GetCoverage_ requests; and the response types generated in response to those requests. 

* An understanding of the distinction between WMS, WFS, and WCS for use in different usage scenarios (e.g. map images, vector, raster data access)  


*Key Concepts*

* OGC WFS as a data access standard for _features_ and their attributes with support for a variety of query methods including spatial and parameter values. 

* OGC WCS as a data access standard for  _coverages_ representing spatio-temporal gridded data represented in 1- or more dimensions. 


# Class Prep # {#week07-prep}

# Reference Materials # {#week07-reference}

* [OGC WFS Implementation Specification][http://www.opengeospatial.org/standards/wfs]

* [OGC WCS Implementation Specification][http://www.opengeospatial.org/standards/wcs]

# Weekly Milestone - WMS GetMap Requests, Map Scale and Aspect Ratio Calculations# {#week07-milestone}

You might have noticed in the WMS requests that you generated in the previous lab returned images that didn’t look “quite right” relative to what you may know of the shape of familiar features. 

For example, a WMS request for a 200x200 pixel PNG file (Figure 1) for an area surrounding Bernalillo County (-107.2,34.7,-106,35.25) from the previous lab would be ([link](http://gstore.unm.edu/apps/rgis/datasets/92403ebf-aec5-404b-ae8a-6db41f388737/services/ogc/wms?VERSION=1.1.1&SERVICE=WMS&REQUEST=GetMap&BBOX=-107.2,34.7,-106,35.25&LAYERS=g_2007fe_35_county&FORMAT=image/png&TRANSPARENT=TRUE&STYLES=&SRS=EPSG:4326&WIDTH=200&HEIGHT=200)):

	http://gstore.unm.edu/apps/rgis/datasets/92403ebf-aec5-404b-ae8a-6db41f388737/
	services/ogc/wms?VERSION=1.1.1&SERVICE=WMS&REQUEST=GetMap&BBOX=-107.2,34.7,
	-106,35.25&LAYERS=g_2007fe_35_county&FORMAT=image/png&TRANSPARENT=TRUE&
	STYLES=&SRS=EPSG:4326&WIDTH=200&HEIGHT=200

![Returned map image for the region surrounding Bernalillo County for a WMS request with `BBOX=-107.2,34.7,-106,35.25`, `WIDTH=200` and `HEIGHT=200`](images/bernalillo_01.png)

this request results in a map image that does not agree with the standard shape of Bernalillo county (depicted in QGIS - Figure 2) that we are accustomed to, regardless of the specific map projection being used.
	
![Area around Bernalillo County as viewed in QGIS based on the OGC WCS based on the same data source used for the WMS request illustrated above}](images/bernalillo_qgis.png) 

This discrepancy is the result of a difference in the aspect ratio of the requested BBOX (-107.2,34.7,-106,35.25) and the requested image dimensions (200x200 pixels). _When you compose a WMS GetMap request, you need to make sure that the aspect ratio of both the image size and BBOX match._ 

For example, if we calculate the aspect ratio of the BBOX we obtain the following values (remember that the BBOX is specified as a comma separated list of x,y coordinates: minx,miny,maxx,maxy):

$BBOX_{width} = x_{max} - x_{min} = (-106) - (-107.2) = 1.2^{\circ}$

$BBOX_{height} = y_{max} - y_{min} = 35.25 - 34.7 = 0.55^{\circ}$

$BBOX_{aspect-ratio} = BBOX_{width} / BBOX_{height} = 1.2^{\circ} / 0.55^{\circ} = 2.1818$


If we want to retrieve a map image that is 200 pixels wide, we need to calculate an image height that yields an aspect ratio that matches the BBOX aspect ratio. Harking back to basic algebra:

$Image_{width} = 200px$

$Image_{aspect-ratio} = Image_{width} / Image_{height} = 200px / Image_{height} = 2.1818$
	
$Image_{height} = Image_{width} / {aspect-ratio} = 200px / 2.1818 = 91.667px$

So, if we request an image that is 200x92 (we have to request pixel dimensions in integers, so rounding to the nearest integer) we should get a representation that closely approximates the proper shape of features. The modified WMS request with the new image's size is the following ([link](http://gstore.unm.edu/apps/rgis/datasets/92403ebf-aec5-404b-ae8a-6db41f388737/services/ogc/wms?VERSION=1.1.1&SERVICE=WMS&REQUEST=GetMap&BBOX=-107.2,34.7,-106,35.25&LAYERS=g_2007fe_35_county&FORMAT=image/png&TRANSPARENT=TRUE&STYLES=&SRS=EPSG:4326&WIDTH=200&HEIGHT=92)):

	http://gstore.unm.edu/apps/rgis/datasets/92403ebf-aec5-404b-ae8a-6db41f388737/
	services/ogc/wms?VERSION=1.1.1&SERVICE=WMS&REQUEST=GetMap&BBOX=-107.2,34.7,-106,35.25&
	LAYERS=g_2007fe_35_county&FORMAT=image/png&TRANSPARENT=TRUE&STYLES=&
	SRS=EPSG:4326&WIDTH=200&HEIGHT=92

![Returned map image for the region surrounding Bernalillo County for a WMS request with `BBOX=-107.2,34.7,-106,35.25`, `WIDTH=200` and `HEIGHT=92`](images/bernalillo_02.png)

This process may be reversed to request images of a fixed size for use in a client interface, with the requested BBOX modified to match the aspect ratio of the target image. If, for example, images are being requested for a client interface with a fixed map size of 600x400 pixels, a corresponding BBOX can be derived using the same calculation. 

If, for example, the area of interest for a map is 2 degrees wide, we can calculate the target height (in degrees) using the aspect ratio of the desired image.

$Image_{aspect-ratio} = Image_{width} / Image_{height} = (600px) / (400px) = 1.5$

$BBOX_{aspect-ratio} = BBOX_{width} / BBOX_{height} = 2^{\circ} / BBOX_{height} = 1.5$

$BBOX_{height} = BBOX_{width} / BBOX_{aspect-ratio} = 2^{\circ} / 1.5 = 1.3333^{\circ}$

If our area of interest extends from -106 to -108 degrees East Longitude, we can use the known target height of 1.3333 to generate a WMS BBOX  of the appropriate aspect ratio. If the minimum Latitude of interest is 34.7 degrees North Latitude, the maximum BBOX Y value would be 

$y_{max} = y_{min} + BBOX_{height} = 34.7^{\circ} + 1.3333 = 36.0333$

This set of calculations may be used to compose the following WMS request ([link](http://gstore.unm.edu/apps/rgis/datasets/92403ebf-aec5-404b-ae8a-6db41f388737/services/ogc/wms?VERSION=1.1.1&SERVICE=WMS&REQUEST=GetMap&BBOX=-108,34.7,-106,36.0333&LAYERS=g_2007fe_35_county&FORMAT=image/png&TRANSPARENT=TRUE&STYLES=&SRS=EPSG:4326&WIDTH=600&HEIGHT=400)):

	http://gstore.unm.edu/apps/rgis/datasets/92403ebf-aec5-404b-ae8a-6db41f388737/
	services/ogc/wms?VERSION=1.1.1&SERVICE=WMS&REQUEST=GetMap&BBOX=-108,34.7,-106,36.0333&
	LAYERS=2007fe_35_county&FORMAT=image/png&TRANSPARENT=TRUE&STYLES=&
	SRS=EPSG:4326&WIDTH=600&HEIGHT=400


![Returned map image for the region surrounding Bernalillo County for a WMS request with `BBOX=-108,34.7,-106,36.0333`, `WIDTH=600` and `HEIGHT=400`](images/bernalillo_03.png)



Given that McKinley County NM is contained within the following BBOX: -109.5, 34.5, -106.5, 36.5

Question 1
:	What is the aspect ratio ($BBOX_{width}/BBOX_{height}$) of this geographic region?

Question 2
:	What would be the height (in whole pixels - round up) for a map image for this region that is 600 pixels wide?

Question 3
:	Formulate a WMS request that reflects the values determined in 1.1 and 1.2 above for the WMS service used above in the examples and for the `g_2007fe_35_county` layer. Include in your answer the complete WMS request that will return a map image.
 
Question 4
:	Formulate a WMS request for a 900x600 pixel map image that represents the full 3-degree width of the geographic region, and is based upon the minimum Y value of 34.5 degrees North Latitude. Include in your answer the complete WMS request that will return a map image. 

Given the following set of `GetMap` requests against the *[USGS Topo Base Map - Primary Tile Cache  (Tiled)](https://basemap.nationalmap.gov/arcgis/services/USGSTopo/MapServer/WmsServer?service=WMS&request=GetCapabilities)* answer the following questions

1) [https://basemap.nationalmap.gov/arcgis/services/USGSTopo/MapServer/WmsServer?request=GetMap&service=WMS&VERSION=1.1.0&SRS=EPSG:4326&LAYERS=0&FORMAT=image/jpeg&TRANSPARENT=FALSE&STYLES=&WIDTH=1200&HEIGHT=800&BBOX=-107.1242070,34.7509960,-106.1242070,35.4176960](https://basemap.nationalmap.gov/arcgis/services/USGSTopo/MapServer/WmsServer?request=GetMap&service=WMS&VERSION=1.1.0&SRS=EPSG:4326&LAYERS=0&FORMAT=image/jpeg&TRANSPARENT=FALSE&STYLES=&WIDTH=1200&HEIGHT=800&BBOX=-107.1242070,34.7509960,-106.1242070,35.4176960)

2) [https://basemap.nationalmap.gov/arcgis/services/USGSTopo/MapServer/WmsServer?request=GetMap&service=WMS&VERSION=1.1.0&SRS=EPSG:4326&LAYERS=0&FORMAT=image/jpeg&TRANSPARENT=FALSE&STYLES=&WIDTH=1200&HEIGHT=800&BBOX=-106.6867070,35.0426773,-106.5617070,35.1260148](https://basemap.nationalmap.gov/arcgis/services/USGSTopo/MapServer/WmsServer?request=GetMap&service=WMS&VERSION=1.1.0&SRS=EPSG:4326&LAYERS=0&FORMAT=image/jpeg&TRANSPARENT=FALSE&STYLES=&WIDTH=1200&HEIGHT=800&BBOX=-106.6867070,35.0426773,-106.5617070,35.1260148)

3) [https://basemap.nationalmap.gov/arcgis/services/USGSTopo/MapServer/WmsServer?request=GetMap&service=WMS&VERSION=1.1.0&SRS=EPSG:4326&LAYERS=0&FORMAT=image/jpeg&TRANSPARENT=FALSE&STYLES=&WIDTH=1200&HEIGHT=800&BBOX=-106.6281133,35.0817417,-106.6203008,35.0869503](https://basemap.nationalmap.gov/arcgis/services/USGSTopo/MapServer/WmsServer?request=GetMap&service=WMS&VERSION=1.1.0&SRS=EPSG:4326&LAYERS=0&FORMAT=image/jpeg&TRANSPARENT=FALSE&STYLES=&WIDTH=1200&HEIGHT=800&BBOX=-106.6281133,35.0817417,-106.6203008,35.0869503)

4) [https://basemap.nationalmap.gov/arcgis/services/USGSTopo/MapServer/WmsServer?request=GetMap&service=WMS&VERSION=1.1.0&SRS=EPSG:4326&LAYERS=0&FORMAT=image/jpeg&TRANSPARENT=FALSE&STYLES=&WIDTH=1200&HEIGHT=800&BBOX=-106.6246953,35.0840205,-106.6237187,35.0846715](https://basemap.nationalmap.gov/arcgis/services/USGSTopo/MapServer/WmsServer?request=GetMap&service=WMS&VERSION=1.1.0&SRS=EPSG:4326&LAYERS=0&FORMAT=image/jpeg&TRANSPARENT=FALSE&STYLES=&WIDTH=1200&HEIGHT=800&BBOX=-106.6246953,35.0840205,-106.6237187,35.0846715)



Question 5
:	Which layer(s) return map images that display image content (i.e. return a non-blank image)? 

Questions 6
:	What is the difference between these requests? How might this difference influence whether or not a map image with content is being returned?




