---
title: Week 15 - OGC Services and Styling in GeoServer
...

<!---------------------------------------------------------------------------->
<!-- Week 15 ----------------------------------------------------------------->
<!---------------------------------------------------------------------------->

# Introduction # {#week15}

Thus far we have discussed the general workflow for publishing geospatial data using GeoServer, the general concepts relating to styling those data for presentation through the web services published by GeoServer, and specific methods for styling vector data, and applying styles to specific subsets of vector data through the use of filters. This week we conclude our discussion of GeoServer with a demonstration of the methods used in the styling of raster data. Without the application of meaningful styles, raster data can be visually unintelligible. You will learn the tools that you have within the OGC Styled Layer Descriptor standard (as implemented within GeoServer) to define and apply meaningful styles to raster data - ultimately producing more useful visualizations of those data.


*Expected Outcomes*

At the end of the class, students will be able to:

* Define ColorMaps for raster data that produce a continuous gradient of colors, a stepped color ramp between defined raster values, and color assignments for specific raster values.
* Map bands from a multi-band raster file to the RGB colors used to generate a color map image or to a single grayscale band for generating a single-band representation.
* Define opacity for an entire raster dataset or on a per-value level within a ColorMap.
* Apply a variety of contrast enhancements to individual color bands to improve/modify the display of the overall map image.  

*Key Concepts*

At the end of the class, students will understand:

* The concepts of continuous color ramps, color intervals, and colors assigned to individual raster values as alternative representation models for raster data
* The concept of a multi-band raster image and the mapping of specific raster bands into the RGB color space for visual representation
* Two methods for defining opacity for a raster dataset as a whole or for individual values
* The options for and potential effects of contrast enhancement on raster map images. 


# Reference Materials # {#week15-reference}

* GeoServer [Online Documentation](http://docs.geoserver.org/stable/en/user/index.html): sections [Data Management](http://docs.geoserver.org/latest/en/user/data/index.html#data), [Styling](http://docs.geoserver.org/latest/en/user/styling/index.html#styling)


# Weekly Milestone - Create a Final OpenLayers Client #

Please create a final OpenLayers mapping client that displays the GerServer-based Styled WMS layers that you created for Deep Dives 3 & 4, focusing on the goals that were laid out in Deep Dive 3. Include in your mapping client a narrative description (a paragraph or two, aimed at a novice user coming to your page for the first time) of the goals and data contained within the client. 

