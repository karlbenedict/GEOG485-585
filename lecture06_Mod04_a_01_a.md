---
...

<!---------------------------------------------------------------------------->
<!-- Week 06 ----------------------------------------------------------------->
<!-- Lecture 04 a 01 a ------------------------------------------------------->
<!-- Interoperability Standards----------------------------------------------->
<!-- WMS, KML and XML--------------------------------------------------------->
<!---------------------------------------------------------------------------->

# Week 6 - Module 4a - Interoperability Standards. WMS, KML and XML

### Overview ###  {.module04a01a}

* Extensible Markup Language - XML
	* Definition of a markup language
	* Requirements
	* Extensible ???
* KML - AKA Keyhole Markup Language
	* An XML Document Format
	* Combined representation of spatial data and time
* OGC Web Map Services (WMS)
	* Requests and Results
	* GetCapabilities, GetMap, GetFeatureInfo
* Integration of WMS into KML


## Extensible Markup Language - XML ## {.module04a01a}

### XML Background ### {.module04a01a .oneUp}

![SGML Relationship with XML and HTML](images/sgml_xml.png)

* Defined as a markup language profile of Standard Generalized Markup Language (SGML - ISO 8879:1986)
* XML 1.0 released as a W3C Recommendation in 1998
	* currently in [5th edition](https://www.w3.org/TR/2008/REC-xml-20081126/), released in 2008
	* version 1.1 released in 2004, but is [not recommended](https://www.w3.org/XML/Core/#Publications) for use unless the ["new characters in XML names, new line-end conventions, and references to control characters enabled with XML version 1.1 are needed"](https://www.w3.org/TR/2006/REC-xml11-20060816/).



### XML Design Goals ### {.module04a01a}

* XML shall be straightforwardly usable over the Internet.
* XML shall support a wide variety of applications.
* XML shall be compatible with SGML.
* It shall be easy to write programs which process XML documents.
* The number of optional features in XML is to be kept to the absolute minimum, ideally zero.
* XML documents should be human-legible and reasonably clear.
* The XML design should be prepared quickly.
* The design of XML shall be formal and concise.
* XML documents shall be easy to create.
* Terseness in XML markup is of minimal importance.

From XML 1.0 (5th ed.) [Recommendation](https://www.w3.org/TR/2008/REC-xml-20081126/#sec-origin-goals)





### XML Structure - Well Formed / Valid ### {.module04a01a}

* [Well Formed XML](https://en.wikipedia.org/wiki/XML#Well-formedness_and_error-handling) - a document that conforms to the structural definition of XML. Either well-formed, or not XML
* [Valid XML](https://en.wikipedia.org/wiki/XML#Schemas_and_validation) - a document that is both well-formed and conforms to a specific content structure defined by
	* A [Document Type Definition (DTD)](https://en.wikipedia.org/wiki/XML#Document_Type_Definition) - the original XML specification for the definition of the content of a specific XML document
	* A [Schema document](https://en.wikipedia.org/wiki/XML#XML_Schema) - defined in a variety of languages (e.g. W3C Schema, RELAX NG, Schematron, ISO DSDL, etc.)

[XML Wikipedia Article](http://en.wikipedia.org/wiki/XML)





### Simple XML Document ### {.module04a01a}

<div class="codeTable medium">

~~~~~~~~~~ {#xmlSample .xml .numberLines}
<?xml version="1.0" encoding="ISO-8859-1"?>
<!-- Some comment would go here to describe this document ... -->
<note>
	<to>Tove</to>
	<from>Jani</from>
	<heading>Reminder</heading>
	<body type="instruction" >Don't forget me this weekend!</body>
</note>
~~~~~~~~~~

XML Source (modified from original):  [w3schools](http://www.w3schools.com/XML/note.xml)

</div>



### XML Prolog ### {.module04a01a}

Includes XML Declaration and Comment

<div class="codeTable medium">

~~~~~~~~~~ {#xmlSample_Prolog .xml .numberLines}
<?xml version="1.0" encoding="ISO-8859-1"?>
<!-- Some comment would go here to describe this document ... -->
~~~~~~~~~~

</div>




### XML Elements ### {.module04a01a}

Define blocks of content

<div class="codeTable medium">

~~~~~~~~~~ {#xmlSample_Elements .xml .numberLines startFrom="3"}
<note>
	<to>Tove</to>
	<from>Jani</from>
	<heading>Reminder</heading>
	<body type="instruction" >Don't forget me this weekend!</body>
</note>
~~~~~~~~~~

</div>





### XML Root Element ### {.module04a01a}

* Required
* There is only one
* It must be a pair of opening and closing tags

<div class="codeTable medium">

~~~~~~~~~~ {#xmlSample_RootElement .xml .numberLines startFrom="3"}
<note>
	...
	...
	...
	...
</note>
~~~~~~~~~~

</div>




### XML Content Elements ### {.module04a01a}

* Contain all other document content
* May be paired opening and closing tags, _or_
* May be self-closing with a terminal "/" in the element, e.g. `<br />`

<div class="codeTable medium">

~~~~~~~~~~ {#xmlSample_ContentElements .xml .numberLines startFrom="4"}
	<to>Tove</to>
	<from>Jani</from>
	<heading>Reminder</heading>
	<body type="instruction" >Don't forget me this weekend!</body>
~~~~~~~~~~

</div>




### XML Attributes ### {.module04a01a}

Define additional information about elements as _name_=_value_ pairs. 

<div class="codeTable medium">

~~~~~~~~~~ {#xmlSample_Attributes .xml .numberLines startFrom="7"}
	<body type="instruction" >Don't forget me this weekend!</body>
~~~~~~~~~~

</div>



### XML Element Content ### {.module04a01a}

The material contained between the opening and closing tags of an _Element_. 

<div class="codeTable medium">

~~~~~~~~~~ {#xmlSample_ElementContent .xml .numberLines startFrom="7"}
	<body type="instruction" >Don't forget me this weekend!</body>
~~~~~~~~~~

</div>




### Valid XML? ### {.module04a01a}

Why is this XML _well-formed_ but not _valid_?

_There is no DTD or Schema defined for the document against which it can be validated_

<div class="codeTable medium">

~~~~~~~~~~ {#xmlSample_valid .xml .numberLines}
<?xml version="1.0" encoding="ISO-8859-1"?>
<!-- Edited by XMLSpy® -->
<note>
	<to>Tove</to>
	<from>Jani</from>
	<heading>Reminder</heading>
	<body type="instruction" >Don't forget me this weekend!</body>
</note>
~~~~~~~~~~

</div>



### Common XML Constructs### {.module04a01a}

Document Type Declaration (DTD) references (PROLOG)
:	definition, either by reference or by direct inclusion, the allowed structure of an XML document, for example: 

`<!DOCTYPE greeting SYSTEM "hello.dtd">`


CDATA Sections
:	blocks of XML that contain characters that would otherwise be recognized as XML markup, for example: 

`<![CDATA[<greeting>Hello, world!</greeting>]]>`

XML Namespace Declarations
:	additional information included in elements to distinguish between duplicate element names, for example (declared in lines 1-3, used in lines 5-17): 

<div class="codeTable inflow">

~~~~~~~~~~ {#xmlNamespaceDeclarations .xml .numberLines}
<root 
	xmlns:h="http://www.w3.org/TR/html4/" 
	xmlns:f="http://www.w3schools.com/furniture">

<h:table>
	<h:tr>
		<h:td>Apples</h:td>
		<h:td>Bananas</h:td>
	</h:tr>
</h:table>
<f:table>
	<f:legs>4</f:legs>
	<f:cost>300</f:cost>
	<f:width>3</f:width>
	<f:length>5</f:length>
	<f:height>4</f:height>
</f:table>
</root>
~~~~~~~~~~

</div>


## KML ## {.module04a01a}

### KML Background ### {.module04a01a}

* An XML grammar originally developed as Keyhole Markup Language by Keyhole, Inc. for use in their Keyhole Earth Viewer. 
* Google acquired Keyhole, Inc. in 2004 
* KML version 2.2 became an OGC standard in 2008
* Two delivered KML file formats

KML
:	an XML document, with a “.kml” extension that is directly readable and editable

KMZ
:	a compressed (zipped) file with a “.kmz” extension^[A `KMZ` file may be extracted and its contents examined by many zipfile utilities if you replace the `.kmz` extension with `.zip` prior to trying to extract], that contains at least a KML document, but may contain other files as well.





### KML Capabilities ### {.module04a01a}

* Annotate the Earth
* Specify icons and labels to identify locations on the surface of the planet
* Create different camera positions to define unique views for KML features
* Define image overlays to attach to the ground or screen
* Define styles to specify KML feature appearance
* Write HTML descriptions of KML features, including hyperlinks and embedded images
* Organize KML features into hierarchies using `folder` elements
* Locate and update retrieved KML documents from local or remote network locations
* Define the location and orientation of textured 3D objects





### KML Content ### {.module04a01a}

* Model for encoding 2- and 3-dimensional geometries for use in 2-D mappers and 3-D virtual globe applications
* Uses latitude-longitude (based upon WGS84 datum) for encoding horizontal position
* Represents altitude in Meters (based upon the WGS84 ellipsoid and EGM96 geoid)





### 2D and 3D KML Sample ### {.module04a01a .oneUp}

![Illustration of polygon in both planar and terrain surface](./images/kmlExample.png)

<div class="codeTable inflow">

~~~~~~~~~~ {#sampleKML .xml .numberLines}
<kml xmlns="http://www.opengis.net/kml/2.2">
<Document>
	<Placemark>
		<Polygon>
			<altitudeMode>
				clampToGround
			</altitudeMode>
			<outerBoundaryIs>
				<LinearRing>
					<coordinates>
						-135,78.5,300000 
						-135,12.5,300000 
						-45,12.5,300000 
						-45,78.5,300000 
						-135,78.5,300000
					</coordinates>
				</LinearRing>
			</outerBoundaryIs>
		</Polygon>
	</Placemark>
</Document>
</kml>
~~~~~~~~~~

</div>

[KML Example](sample-files/kmlExample.kml)

[Example from: KML 2.2 Specification (fig. 6, pg. 21)](https://portal.opengeospatial.org/files/?artifact_id=27810l)





### High-Level KML Content Types ### {.module04a01a}

Features
:	including documents, folders, placemarks, network links

Geometries
:	including points, linestrings, polygons, models, locations

Overlays
:	including ground overlays, lat-lon boxes, photo overlays, screen overlays

Styles
:	styles, substyles, icons, label styles

Links
:	read, update, create, delete, change

Views
:	camera, look at

Time
:	time span, timestamp





### KML Demonstration and References ### {.module04a01a}

New Mexico State Boundary [KML File](sample-files/KML/tl_2010_35_state10.kml) | [KMZ File](sample-files/KML/tl_2010_35_state10.kmz) (from [NM RGIS](http://rgis.unm.edu))

[Google Code KML Documentation](http://code.google.com/apis/kml/documentation/)

[OGC KML Implementation specification](http://www.opengeospatial.org/standards/kml)




## OGC Web map Services -  WMS ## {.module04a01a}


## WMS - Overview ## {.module04a01a}

* Open Geospatial Consortium standard for requesting 
	* Service Metadata (`GetCapabilities`) - an XML file representing information about a specific WMS service and its component layers
	* Map Images (`GetMap`) - graphic files representing one or more layers from a single WMS service for a specified area of interest, and, optionally, for a specified point in time
	* Feature Information (`GetFeatureInfo`) - a basic representation (in a variety of formats) of the attributes associated with a specific pixel location in a map image
* A WMS will return to the requesting system one of the above products OR an error message (in XML by default)
* Related [Style Layer Descriptor](http://www.opengeospatial.org/standards/sld) standard supports dynamic updating of visualization options
* [OGC WMS Documentation Access Page](http://www.opengeospatial.org/standards/wms)





### WMS *GetCapabilities* Request ### {.module04a01a .bigtable}


|  Request Parameter           | 1.0 | 1.1 | 1.1.1 | 1.3.0 | Description                                   |
| -----------------------------|-----|-----|-------|-------|-----------------------------------------------|
| WMTVER = 1.0.0               | R   |     |       |       | Request version                               |
| VERSION = version            |     | O   | O     | O     | Request version                               |
| SERVICE = WMS                | R   | R   | R     | R     | Service type                                  |
| REQUEST = capabilities       | R   |     |       |       | Request name                                  |
| REQUEST = GetCapabilities    |     | R   | R     | R     | Request name                                  |
| UPDATESEQUENCE = string      |     | O   | O     | O     | Sequence number or string for cache control   |
| Vendor-specific parameters   | O   |     |       |       | Vendor-specific parameters                    |

R=Required / O=Optional





### WMS *GetMap* Request (Core) ### {.module04a01a .bigtable}

| Request Parameter               | 1.0 | 1.1 | 1.1.1 | 1.3.0 | Description                                                                                             |
| --------------------------------|-----|-----|-------|-------|---------------------------------------------------------------------------------------------------------|
| WMTVER = 1.0.0                  | R   |     |       |       | Request version                                                                                         |
| VERSION = version               |     | R   | R     | R     | Request version.                                                                                        |
| REQUEST = map                   | R   |     |       |       | Request name.                                                                                           |
| REQUEST = GetMap                |     | R   | R     | R     | Request name.                                                                                           |
| LAYERS = layer\_list            | R   | R   | R     | R     | Comma-separated list of one or more map layers.  Optional (ver. 1.1, 1.1.1) if SLD parameter is present.|
| STYLES = style\_list            | R   | R   | R     | R     | Comma-separated list of one rendering style per requested layer. Optional if SLD parameter is present.  |                             |
| SRS = namespace:identifier      | R   | R   | R     |       | Spatial Reference System.                                                                               |
| CRS = namespace:identifier      |     |     |       | R     | Spatial Reference System.                                                                               |
| BBOX = minx,miny,maxx,maxy      | R   | R   | R     | R     | Bounding box corners (lower left, upper right) in SRS units.                                            |
| WIDTH = output\_width           | R   | R   | R     | R     | Width in pixels of map picture.                                                                         |
| HEIGHT = output\_height         | R   | R   | R     | R     | Height in pixels of map picture.                                                                        |
| FORMAT = output\_format         | R   | R   | R     | R     | Output format of map.                                                                                   |
| TRANSPARENT = TRUE or FALSE     | O   | O   | O     | O     | Background transparency of map (default = FALSE).                                                       |
| BGCOLOR = color\_value          | O   | O   | O     | O     | Hexadecimal red-green-blue color value for the background color (default = 0xFFFFFF).                   |
| EXCEPTIONS = exception_format   | O   | O   | O     | O     | The format in which exceptions are to be reported by the WMS (default = XML).                           |
| TIME = time                     |     | O   | O     | O     | Time value of layer desired.                                                                            |
| ELEVATION = elevation           |     | O   | O     | O     | Elevation of layer desired.                                                                             |
| Other sample dimensions         |     | O   | O     | O     | Values of other dimensions as appropriate.                                                              |
| Vendor specific parameters      | O   | O   | O     | O     | Vendor specific parameters                                                                              |






### WMS GetFeatureInfo Request ### {.module04a01a .bigtable}


| Request Parameter             | 1.0 | 1.1 | 1.1.1 | 1.3.0 | Description                                                                                        |
|-------------------------------|-----|-----|-------|-------|----------------------------------------------------------------------------------------------------|
| WMTVER = 1.0.0                | R   |     |       |       | Request version.                                                                                   |
| VERSION = version             |     | R   | R     | R     | Request version.                                                                                   |
| REQUEST  =  feature\_info     | R   |     |       |       | Request name.                                                                                      |
| REQUEST = GetFeatureInfo      |     | R   | R     | R     | Request name.                                                                                      |
| `<map_request_copy>`          | R   | R   | R     | R     | Partial copy of the Map request parameters that  generated the map for which information is desired|
| QUERY\_LAYERS = layer\_list   | R   | R   | R     | R     | Comma-separated list of one or more layers to be queried.                                          |
| INFO\_FORMAT = output\_format | O   | O   | O     | R     | Return format of feature information (MIME type).                                                  |
| FEATURE\_COUNT = number       | O   | O   | O     | O     | Number of features about which to return information (default = 1).                                |
| X = pixel\_column             | R   | R   | R     |       | X coordinate in pixels of feature (measured from upper left corner = 0)                            |
| I = pixel\_column             |     |     |       | R     | i coordinate in pixels of feature in Map CS                                                        |
| Y = pixel\_row                | R   | R   | R     |       | Y coordinate in pixels of feature (measured from upper left corner = 0)                            |
| J = pixel\_row                |     |     |       | R     | j coordinate in pixels of feature in Map CS                                                        |
| EXCEPTIONS = exception_format |     | O   | O     | O     | The format in which exceptions are to be reported by the WMS (default = XML).                      |
| Vendor-specific parameters    | O   | O   | O     |       | Optional experimental parameters.                                                                  |






### WMS GetCapabilities ### {.module04a01a}

<div class="codeTable">

~~~~~~~~~~ {#sampleCapabilitiesRequest .xml .numberLines}
http://gstore.unm.edu/apps/rgis/datasets/6ca5428a-a78c-4c82-8120-
da70dc92f2cc/services/ogc/wms?
	SERVICE=wms&
	REQUEST=GetCapabilities&
	VERSION=1.1.1
~~~~~~~~~~

[Live Link](http://gstore.unm.edu/apps/rgis/datasets/6ca5428a-a78c-4c82-8120-da70dc92f2cc/services/ogc/wms?SERVICE=wms&REQUEST=GetCapabilities&VERSION=1.1.1)

~~~~~~~~~~ {#sampleCapabilitiesResponse .xml .numberLines}
<?xml version='1.0' encoding="ISO-8859-1" standalone="no" ?>
<!DOCTYPE WMT_MS_Capabilities SYSTEM "http://schemas.opengis.net/wms/1.1.1/
WMS_MS_Capabilities.dtd"
 [
 <!ELEMENT VendorSpecificCapabilities EMPTY>
 ]>  <!-- end of DOCTYPE declaration -->

<WMT_MS_Capabilities version="1.1.1">

<!-- MapServer version 6.0.3 OUTPUT=GIF OUTPUT=PNG OUTPUT=JPEG OUTPUT=KML SUPPORTS=PROJ 
SUPPORTS=AGG SUPPORTS=FREETYPE SUPPORTS=ICONV SUPPORTS=WMS_SERVER SUPPORTS=WMS_CLIENT 
SUPPORTS=WFS_SERVER SUPPORTS=WFS_CLIENT SUPPORTS=WCS_SERVER SUPPORTS=SOS_SERVER 
INPUT=POSTGIS INPUT=OGR INPUT=GDAL INPUT=SHAPEFILE -->

<Service>
  <Name>OGC:WMS</Name>
  <Title>tl_2010_35_state10</Title>
  <Abstract>WMS Service for RGIS dataset State Boundary - 2010 
  (6ca5428a-a78c-4c82-8120-da70dc92f2cc)</Abstract>
        <KeywordList>
          <Keyword>RGIS</Keyword>
          <Keyword> New Mexico</Keyword>
        </KeywordList>
  <OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" 
  xlink:href="http://gstore.unm.edu/apps/rgis/datasets/6ca5428a-a78c-4c82-8120-
  da70dc92f2cc/services/ogc/wms"/>
  <ContactInformation>
    <ContactPersonPrimary>
      <ContactPerson>GStore Support</ContactPerson>
      <ContactOrganization>Earth Data Analysis Center</ContactOrganization>
    </ContactPersonPrimary>
      <ContactPosition>technical support</ContactPosition>
    <ContactAddress>
        <AddressType>Mailing address</AddressType>
        <Address>Earth Data Analysis Center, MSC01 1110, 
        1 University of New Mexico</Address>
        <City>Albuquerque</City>
        <StateOrProvince>NM</StateOrProvince>
        <PostCode>87131</PostCode>
        <Country>US</Country>
    </ContactAddress>
      <ContactVoiceTelephone>(505) 277-3622</ContactVoiceTelephone>
      <ContactFacsimileTelephone>(505) 277-3614</ContactFacsimileTelephone>
  <ContactElectronicMailAddress>gstore@edac.unm.edu</ContactElectronicMailAddress>
  </ContactInformation>
  <Fees>None</Fees>
  <AccessConstraints>none</AccessConstraints>
</Service>

<Capability>
  <Request>
    <GetCapabilities>
      <Format>application/vnd.ogc.wms_xml</Format>
      <DCPType>
        <HTTP>
          <Get><OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" 
          xlink:href="http://gstore.unm.edu/apps/rgis/datasets/6ca5428a-a78c-4c82-
          8120-da70dc92f2cc/services/ogc/wms?"/></Get>
          <Post><OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" 
          xlink:href="http://gstore.unm.edu/apps/rgis/datasets/6ca5428a-a78c-4c82-
          8120-da70dc92f2cc/services/ogc/wms?"/></Post>
        </HTTP>
      </DCPType>
    </GetCapabilities>
    <GetMap>
      <Format>image/png</Format>
      <Format>image/gif</Format>
      <Format>image/jpeg</Format>
      <Format>image/png; mode=8bit</Format>
      <Format>image/tiff</Format>
      <Format>application/vnd.google-earth.kml+xml</Format>
      <Format>application/vnd.google-earth.kmz</Format>
      <DCPType>
        <HTTP>
          <Get><OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" 
          xlink:href="http://gstore.unm.edu/apps/rgis/datasets/6ca5428a-a78c-4c82-
          8120-da70dc92f2cc/services/ogc/wms?"/></Get>
          <Post><OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" 
          xlink:href="http://gstore.unm.edu/apps/rgis/datasets/6ca5428a-a78c-4c82-
          8120-da70dc92f2cc/services/ogc/wms?"/></Post>
        </HTTP>
      </DCPType>
    </GetMap>
    <GetFeatureInfo>
      <Format>text/plain</Format>
      <Format>application/vnd.ogc.gml</Format>
      <DCPType>
        <HTTP>
          <Get><OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" 
          xlink:href="http://gstore.unm.edu/apps/rgis/datasets/6ca5428a-a78c-4c82-
          8120-da70dc92f2cc/services/ogc/wms?"/></Get>
          <Post><OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" 
          xlink:href="http://gstore.unm.edu/apps/rgis/datasets/6ca5428a-a78c-4c82-
          8120-da70dc92f2cc/services/ogc/wms?"/></Post>
        </HTTP>
      </DCPType>
    </GetFeatureInfo>
    <DescribeLayer>
      <Format>text/xml</Format>
      <DCPType>
        <HTTP>
          <Get><OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" 
          xlink:href="http://gstore.unm.edu/apps/rgis/datasets/6ca5428a-a78c-4c82-8120-
          da70dc92f2cc/services/ogc/wms?"/></Get>
          <Post><OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" 
          xlink:href="http://gstore.unm.edu/apps/rgis/datasets/6ca5428a-a78c-4c82-8120-
          da70dc92f2cc/services/ogc/wms?"/></Post>
        </HTTP>
      </DCPType>
    </DescribeLayer>
    <GetLegendGraphic>
      <Format>image/png</Format>
      <Format>image/gif</Format>
      <Format>image/jpeg</Format>
      <Format>image/png; mode=8bit</Format>
      <DCPType>
        <HTTP>
          <Get><OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" 
          xlink:href="http://gstore.unm.edu/apps/rgis/datasets/6ca5428a-a78c-4c82-8120-
          da70dc92f2cc/services/ogc/wms?"/></Get>
          <Post><OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" 
          xlink:href="http://gstore.unm.edu/apps/rgis/datasets/6ca5428a-a78c-4c82-8120-
          da70dc92f2cc/services/ogc/wms?"/></Post>
        </HTTP>
      </DCPType>
    </GetLegendGraphic>
    <GetStyles>
      <Format>text/xml</Format>
      <DCPType>
        <HTTP>
          <Get><OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" 
          xlink:href="http://gstore.unm.edu/apps/rgis/datasets/6ca5428a-a78c-4c82-8120-
          da70dc92f2cc/services/ogc/wms?"/></Get>
          <Post><OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" 
          xlink:href="http://gstore.unm.edu/apps/rgis/datasets/6ca5428a-a78c-4c82-8120-
          da70dc92f2cc/services/ogc/wms?"/></Post>
        </HTTP>
      </DCPType>
    </GetStyles>
  </Request>
  <Exception>
    <Format>application/vnd.ogc.se_xml</Format>
    <Format>application/vnd.ogc.se_inimage</Format>
    <Format>application/vnd.ogc.se_blank</Format>
  </Exception>
  <VendorSpecificCapabilities />
  <UserDefinedSymbolization SupportSLD="1" UserLayer="0" UserStyle="1" RemoteWFS="0"/>
  <Layer>
    <Name>tl_2010_35_state10</Name>
    <Title>tl_2010_35_state10</Title>
    <Abstract>WMS Service for RGIS dataset State Boundary - 2010 
    (6ca5428a-a78c-4c82-8120-da70dc92f2cc)</Abstract>
    <KeywordList>
     <Keyword>RGIS</Keyword>
     <Keyword> New Mexico</Keyword>
    </KeywordList>
    <SRS>EPSG:4269</SRS>
    <SRS>EPSG:4326</SRS>
    <SRS>EPSG:4267</SRS>
    <SRS>EPSG:26913</SRS>
    <SRS>EPSG:26912</SRS>
    <SRS>EPSG:26914</SRS>
    <SRS>EPSG:26713</SRS>
    <SRS>EPSG:26712</SRS>
    <SRS>EPSG:26714</SRS>
    <SRS>EPSG:3857</SRS>
    <LatLonBoundingBox minx="-109.05" miny="31.3322" maxx="-103.002" maxy="37.0003" />
    <BoundingBox SRS="EPSG:4326"
                minx="-109.05" miny="31.3322" maxx="-103.002" maxy="37.0003" />
    <Layer queryable="1" opaque="0" cascaded="0">
        <Name>tl_2010_35_state10</Name>
        <Title>tl_2010_35_state10</Title>
        <Abstract>State Boundary - 2010</Abstract>
        <KeywordList>
          <Keyword></Keyword>
        </KeywordList>
        <SRS>epsg:4326</SRS>
        <LatLonBoundingBox minx="-109.05" miny="31.3322" maxx="-103.002" maxy="37.0003" />
        <BoundingBox SRS="epsg:4326"
                    minx="-109.05" miny="31.3322" maxx="-103.002" maxy="37.0003" />
        <MetadataURL type="FGDC-STD-001-1998">
          <Format>text/xml</Format>
          <OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" 
          xlink:href="http://gstore.unm.edu/apps/rgis/datasets/6ca5428a-a78c-4c82-8120-da70dc92f2cc/metadata/FGDC-STD-001-1998.xml"/>
        </MetadataURL>
        <Style>
          <Name>default</Name>
          <Title>default</Title>
          <LegendURL width="72" height="22">
             <Format>image/png</Format>
             <OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" 
             xlink:href="http://gstore.unm.edu/apps/rgis/datasets/6ca5428a-a78c-4c82-8120-da70dc92f2cc/services/ogc/wms?version=1.1.1&amp;service=WMS&amp;request=GetLegendGraphic&amp;layer=tl_2010_35_state10&amp;format=image/png&amp;STYLE=default"/>
          </LegendURL>
        </Style>
    </Layer>
  </Layer>
</Capability>
</WMT_MS_Capabilities>
~~~~~~~~~~

</div>





### WMS GetMap ### {.module04a01a}


<div class="codeTable">

![Sample WMS response #1](images/wms_01.jpeg){.WMSimage width=200px height=200px}

~~~~~~~~~~ {#sampleGetMap01 .numberLines}
http://gstore.unm.edu/apps/rgis/datasets/
6ca5428a-a78c-4c82-8120-da70dc92f2cc/
services/ogc/wms?
    VERSION=1.1.1&
    SERVICE=WMS&
    REQUEST=GetMap&
    BBOX=-109,31,-102.9,37.1&
    LAYERS=tl_2010_35_state10&
    WIDTH=200&
    HEIGHT=200&
    SRS=EPSG:4326&
    FORMAT=image/jpeg&
    STYLES=
~~~~~~~~~~

[link](http://gstore.unm.edu/apps/rgis/datasets/6ca5428a-a78c-4c82-8120-da70dc92f2cc/services/ogc/wms?VERSION=1.1.1&SERVICE=WMS&REQUEST=GetMap&BBOX=-109,31,-102.9,37.1&LAYERS=tl_2010_35_state10&WIDTH=200&HEIGHT=200&SRS=EPSG:4326&FORMAT=image/jpeg&STYLES=)

![Sample WMS response #2](images/wms_02.png){.WMSimage width=300px height=300px}

~~~~~~~~~~ {#sampleGetMap02 .numberLines}
http://gstore.unm.edu/apps/rgis/datasets/
6ca5428a-a78c-4c82-8120-da70dc92f2cc/
services/ogc/wms?
    VERSION=1.1.1&
    SERVICE=WMS&
    REQUEST=GetMap&
    BBOX=-109,31,-102.9,37.1&
    LAYERS=tl_2010_35_state10&
    WIDTH=300&
    HEIGHT=300&
    SRS=EPSG:4326&
    TRANSPARENT=TRUE&
    FORMAT=image/png&
    STYLES=
~~~~~~~~~~

[link](http://gstore.unm.edu/apps/rgis/datasets/6ca5428a-a78c-4c82-8120-da70dc92f2cc/services/ogc/wms?VERSION=1.1.1&SERVICE=WMS&REQUEST=GetMap&BBOX=-109,31,-102.9,37.1&LAYERS=tl_2010_35_state10&WIDTH=300&HEIGHT=300&SRS=EPSG:4326&TRANSPARENT=TRUE&FORMAT=image/png&STYLES=)

</div>

### Integraton of WMS and KML ### {.module04a01a}

* The KML GroundOverlay element may be used to integrate a network accessible map image into a client
* A WMS service may be used to as the source of a KML GroundOverlay element
* KML includes parameterizations that allow for dynamic generation of WMS requests using client bounding box information
* Time-enabled WMS may be accessed through use of manually configured time parameters in WMS URLs and TimeStamp or TimeSpan KML elements





### Sample WMS-KML Integration ### {.module04a01a}

<div class="codeTable">

~~~~~~~~~~ {#sampleKMLwWMS .xml .numberLines}
<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2" xmlns:gx="http://www.google.com/kml/
ext/2.2" xmlns:kml="http://www.opengis.net/kml/2.2" xmlns:atom="http://www.w3.org/2005/Atom">
<GroundOverlay>
	<name>RGIS Counties WMS</name>
	<Icon>
		<href>http://gstore.unm.edu/apps/rgis/datasets/
		92403ebf-aec5-404b-ae8a-6db41f388737/services/ogc/wms?
		VERSION=1.1.1&amp;SERVICE=WMS&amp;REQUEST=GetMap&amp;
		BBOX=-109,31,-102.9,37.1&amp;LAYERS=g_2007fe_35_county&amp;
		WIDTH=800&amp;HEIGHT=800&amp;SRS=EPSG:4326&amp;
		FORMAT=image/png&amp;STYLES=&amp;TRANSPARENT=TRUE</href>
		<viewRefreshMode>onStop</viewRefreshMode>
	</Icon>
	<LatLonBox>
		<north>37.32753828398865</north>
		<south>30.86418272137246</south>
		<east>-101.3630220689848</east>
		<west>-110.6891149310152</west>
	</LatLonBox>
</GroundOverlay>
</kml>
~~~~~~~~~~

[Sample KML File](sample-files/KML/kmlWMS.kml)

</div>


