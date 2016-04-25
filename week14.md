<!---------------------------------------------------------------------------->
<!-- Week 14 ----------------------------------------------------------------->
<!---------------------------------------------------------------------------->

# Week 14 - OGC Services and Styling in GeoServer # {#week14}

While integrating data into a web mapping platform is a critical first step, a robust geospatial data service system must also support the development and use of cartographically informative representations of the published data. GeoServer accomplishes this through the integration of the Open Geospatial Consortium's Styled Layer Descriptor standard into the system for publishing alternative styles for vector and raster data products. This standard allows for the configuration of attribute and scale-based representations that may be advertised by name and requested by reference through the published OGC WMS services. 


*Expected Outcomes*

At the end of this class students will be able to:

* Develop a basic SLD for a vector layer within GeoServer
* Define an attribute filter as part of an SLD to allow for differential representation of features based upon the values of one or more attribute values
* Define a scale limit filter as part of an SLD to control the scales at which a defined SLD rule will be executed


*Key Concepts*

At the end of this class, students will understand:

* The role of the OGC SLD standard in defining and publishing geospatial data via WMS
* The capabilities of the SLD standard to defined representation styles that may be defined in reference to attribute values and WMS request scales
* That logical comparison operators may be used to control the application of style rules to specific features 


## Reference Materials ## {#week14-reference}

* GeoServer [Online Documentation](http://docs.geoserver.org/stable/en/user/index.html): sections [Data Management](http://docs.geoserver.org/latest/en/user/data/index.html#data), [Styling](http://docs.geoserver.org/latest/en/user/styling/index.html#styling)


## Weekly Milestone - Styling of Layers in GeoServer##

This week's milestone provides an opportunity to experiment with vector layer styling. Please define two custom styles for each of the vector datasets that you added to GeoServer during last week's lab assignment. Take a screenshot of the layer preview for each of your styles - including the options tools above the OpenLayers preview displaying the name of the custom style that is being used for the current map display. 

Include in your writeup the layer name, the name of the two custom styles and the associated screenshots for each of the vector datasets. 



## Deep Dive - Data Integration and Styling in GeoServer ##

Add each of the  datasets that you acquired for Deep Dive 3 to GeoServer and style at least three of the layers with a custom style designed to best display the data for your envisioned map. Include in your writeup the names of the datasets, associated styles, and screenshots of the layers in the OpenLayers previewer, with the style name displayed in the OpenLayers preview tool set. 
