<!---------------------------------------------------------------------------->
<!-- Week 10 ----------------------------------------------------------------->
<!---------------------------------------------------------------------------->

# Week 10 - Web-based Mapping Clients: OpenLayers Javascript Framework# {#week10}

The Google Maps API provides one method for presenting an interactive mapping tool within a web browser, but there are restrictions for free use based upon Google's [license](https://developers.google.com/maps/licensing) agreement, and the API is completely controlled by Google - changes are limited to those that Google enables. The [OpenLayers](http://openlayers.org/) Javascript framework which (as quoted from the OpenLayers 2 project home page)

> has been developed to further the use of geographic information of all kinds. OpenLayers is completely free, Open Source JavaScript, released under the 2-clause BSD License (also known as the FreeBSD).

Given its Open Source model, OpenLayers is managed as a community software project, with the development of specific capabilities driven by particular project or functionality needs that come out of the community. 

This week's class focuses on the basics of designing an OpenLayers interactive mapping client, including 

* The required structural (HTML) and behavioral (Javascript) components
* Examples of creating and adding layer objects to a map
* Examples of a variety of base maps that can be added to a map
* The controls that may be added to a map, and the methods for managing and positioning those controls


### Expected Outcomes ###

At the end of this class the students will be able to:

* Create a new web page that includes an interactive OpenLayers mapper
* Define one or more base map layers as part of the mapper
* Define an appropriate map center and zoom level for the desired map
* Enable and position controls within the map


### Key Concepts ###

At the end of this class students will understand that

* OpenLayers is a Javascript framework that enables web-based interactive mapping
* The OpenLayers framework supports the integration of a variety of proprietary and open source base map services
* Map size, center, zoom level, and layers may all be defined through the Javascript API
* A wide variety of map controls (informational and interactive) may be added to maps



## Class Prep ## {#week10-prep}

[OpenLayers Quick Start Page](http://openlayers.org/en/v3.14.2/doc/quickstart.html)

[OpenLayers Basic Concepts](http://openlayers.org/en/v3.14.2/doc/tutorials/concepts.html)

Gratier, T., Spencer, P., & Hazzard, E. (2015). *Openlayers 3 beginner's guide : Get started with openlayers 3 and enhance your web pages by creating and displaying dynamic maps*. Birmingham, England: Packt Publishing. [eBook](https://unm-on-worldcat-org.libproxy.unm.edu/oclc/903963849?databaseList=1271,143,1487,1533,1540,1672,1708,173,1925,2006,2007,203,2201,2237,2259,2260,2261,2262,2263,2264,2267,2268,2281,2328,3036,3201,638) Chapters 1-3. 

## Reference Materials ## {#week10-reference}

[OpenLayers API Reference](http://openlayers.org/en/v3.14.2/apidoc/)

[OpenLayers Sample Maps](http://openlayers.org/en/v3.2.1/examples/)

## Weekly Milestone - OpenLayers Mapping ## {#week10-milestone}

Following the model used in Milestone 3 for your first Google Map web page, you should first answer the following questions about what and how you want to map - _relating to a different focus than you have used in your previous assignments_. As you define the type of map you want to build, think about a specific problem or topic that you would like to address with your map. 

In this exercise you will be generating the configuration for the base map (i.e. including one or more OpenLayer enabled background layers), adding controls, and defining an appropriate map center and zoom level for the map. You will add your own custom content (i.e. the answers to the following questions) to a free-standing web page that include an interactive mapper and the reasoning behind the design of the map.

Create a web page that contains your milestone assignment writeup (_including_ the embedded OpenLayers map required by question 5), and link it to your home page (index.html). 

Respond to Question 1-4 with an understanding that you are generating a web page that should be clear, complete, well-formatted, and reasonably styled. 

Question 1
:	What area do you want to depict in your map? Why?

Question 2
:	What is the center point (latitude and longitude) of your area of interest?

Question 3
:	What base map(s) did you select for use in your map? Why?

Question 4
:	What is the scale of your map (local, regional, continental, global)? How will this translate into your selection of an appropriate default zoom level for your map?

Now that you have answered these questions about the map that you want to create, refer to the examples in the lecture notes, the OpenLayers Examples ([http://openlayers.org/en/v3.2.1/examples/](http://openlayers.org/en/v3.2.1/examples/)), and this week's reading assignment to create a custom OpenLayers map.

Question 5
:	Embed the OpenLayers Map in your writeup (included with the answers to questions 1-4 above) that is based upon your responses to questions 1-4 above.

## Peer Review ##

_Peer Review:_ This week's assignment will include a peer review component. Specifically, 1/3 of your 20-point peer review score will be based upon _your_ peer-review of _two_ other web pages generated by the students in the class. The required peer-review will consist of two steps:

1. Create a new Discussion Thread in Learn entitled: "Page for Peer-Review &lt;Your Name&gt;" at the same time you link your milestone to your homepage. Include in the post the GitHub address of your Week 10 milestone that you created for this assignment. 

2. Provide a _substantive_, _constructive_, and _civil_ comment (through the "reply" option for a posted thread) to _two_ of the posted discussion threads posted for peer-review. Please complete the peer-review as soon as possible so that your colleagues can benefit most from your input. Complete the peer-review no later than the required end-of-term portfolio review deadline. Think about the following ideas for your review: _what did I learn from this page_, _what was done well_, _what could be improved_


