# GEOG 485L/585L Final Examination 

## Due Wednesday, May 11, 2016 before midnight ##
_Due to Grade Submission Requirements NO Late Examinations Will be Accepted - 0 pts will be given for submissions after midnight on Wednesday May 11th._

Make sure to _clearly format_ your writeup so that your answer's are understandable.

100 pts (20 pts./question)

As with your milestone and deep dive assignments - write up your final exam as a web page as part of your GitHub repository with your final being pushed to GitHub prior to the midnight deadline.

1. Acquire, process, and understand the data for the exam:
	i. Download the final exam data collection from ([https://github.com/UNM-GEOG-485-585/class-materials/raw/master/final-exam/final_data.zip](https://github.com/UNM-GEOG-485-585/class-materials/raw/master/final-exam/final_data.zip)). 
	ii. Unzip the archive.
	iii. Place the data in your data directory on the class server.   

2. Add the data to GeoServer, create *stores* and *layers*:
	i. Add each of the layers to GeoServer through the creation of a new “store” (in your *workspace*) for each of the datasets
	ii. Create one new “layer” for each of the stores. **Include a screenshot of each of the five new layers from the GeoServer “Layer Preview” tool in your writeup**. 

3. Display any three of the GeoServer hosted layers in QGIS or ArcGIS (*as a WMS layer*) and **include screenshots of each of the three layers in your writeup**. 

The GetCapabilities request for your workspace on the GeoServer instance we are using for the class is (ignore the line break):

	http://geog485.unm.edu:8080/geoserver/<your workspace name>
	/wms?service=WMS&version=1.1.1&request=GetCapabilities

For example (again, ignore the line break):

	http://geog485.unm.edu:8080/geoserver/s_teststudent/wms?
	service=WMS&version=1.1.1&request=GetCapabilities

for the "s_teststudent" workspace

4. Create a new OpenLayers web mapping client:
	i. Include each of the five layers that you created in GeoServer in the layer picker in your mapping client
	ii. **Embed the client in your final exam web page**. 

5. Create and add styled layers to your OpenLayers client:
	i. Create two new layers based on two of the *stores* added in 2) above.
	ii. Create two custom styles, one for each of the two layers and make those the default style for the two new layers
	iii. Add these two styled layers to the mapping client generated for question 4. Provide the layer names for your customized layers in your writeup.  