<!---------------------------------------------------------------------------->
<!-- Week 14 ----------------------------------------------------------------->
<!-- Lecture 05 a 02 a ------------------------------------------------------->
<!-- Developing and Hosting OGC Services-------------------------------------->
<!-- OGC Services and Styling in GeoServer------------------------------------>
<!---------------------------------------------------------------------------->


# Module 5 - OGC Services and Styling in GeoServer# {.module05a02a}

### Overview ###

* GeoServer Styled Layer Descriptor (SLD) Foundation: OGC Specification
* Creation and Management of Styles in GeoServer
	* Definition of Styles
	* Base Styles
	* Basic New Styles
	* Basic Filters


## OGC Styled Layer Descriptor (SLD) ##


### OGC Styled Layer Descriptor (SLD) ###

* GeoServer uses the OGC standard for definition of symbolization both for user and server definition ([OGC SLD Standard](http://www.opengeospatial.org/standards/sld)) 
* Most, but not all of the OGC standard has been implemented with GeoServer
* The materials presented here are based upon the SLD reference distributed as part of the [Current GeoServer HTML documentation](http://docs.geoserver.org/stable/en/user/index.html), and in particular the [GeoServer SLD Cookbook](http://docs.geoserver.org/stable/en/user/styling/sld-cookbook/index.html).


### Definition of Styles ###  {#definitionOfStyles_01}

Styles are XML documents that conform to the OGC SLD standard, and consist of four major components

Symbolizers
:	SLD components that define the rendering style of specific types of content

* [Point](http://docs.geoserver.org/stable/en/user/styling/sld-reference/pointsymbolizer.html)
* [Line](http://docs.geoserver.org/stable/en/user/styling/sld-reference/linesymbolizer.html)
* [Polygon](http://docs.geoserver.org/stable/en/user/styling/sld-reference/polygonsymbolizer.html)
* [Raster](http://docs.geoserver.org/stable/en/user/styling/sld-reference/rastersymbolizer.html)
* [Text](http://docs.geoserver.org/stable/en/user/styling/sld-reference/textsymbolizer.html)

Labels
:	Defining the placement of [labels](http://docs.geoserver.org/stable/en/user/styling/sld-reference/labeling.html)

Filters
:	Allow for the application different symbolizers to [defined sets](http://docs.geoserver.org/stable/en/user/styling/sld-reference/filters.html) of features

Scale Elements
:	Allow for the application of different symbolizers at different map scales through the definition of [styling rules](http://docs.geoserver.org/stable/en/user/styling/sld-reference/rules.html)


### Definition of Styles - Header Content ###  {#definitionOfStyles_03}

~~~~~~~~~~ {#SLD-header-styles_01 .xml}
<?xml version="1.0" encoding="ISO-8859-1"?>
<StyledLayerDescriptor version="1.0.0" 
  xsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd" 
  xmlns="http://www.opengis.net/sld" 
  xmlns:ogc="http://www.opengis.net/ogc" 
  xmlns:xlink="http://www.w3.org/1999/xlink" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">

one or more <NamedLayer> ...  </NamedLayer> elements

</StyledLayerDescriptor>
~~~~~~~~~~


### Definition of Styles - Sample SLD File ###   {#definitionOfStyles_04}

~~~~~~~~~~ {#sampleSLD .xml }
<?xml version="1.0" encoding="ISO-8859-1"?>
<StyledLayerDescriptor version="1.0.0" 
  xsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd" 
  xmlns="http://www.opengis.net/sld" 
  xmlns:ogc="http://www.opengis.net/ogc" 
  xmlns:xlink="http://www.w3.org/1999/xlink" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <NamedLayer>
    <Name>Simple Point</Name>
    <UserStyle>
      <Title>SLD Cook Book: Simple Point With Stroke</Title>
      <FeatureTypeStyle>
        <Rule>
          <PointSymbolizer>
            <Graphic>
              <Mark>
                <WellKnownName>circle</WellKnownName>
                <Fill>
                  <CssParameter name="fill">#FF0000</CssParameter>
                </Fill>
              </Mark>
              <Size>6</Size>
            </Graphic>
          </PointSymbolizer>
        </Rule>
      </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>
~~~~~~~~~~


### Simple GeoServer Point Style ###

![Sample simple styled point layer](images/point_simplepoint.png)


SLD Snippet ([Full SLD](https://github.com/UNM-GEOG-485-585/class-materials/blob/master/sample-files/SLD/point_simplepoint.sld))

~~~~~~~~~~ {#sampleSLD_simplePoint .xml }
<NamedLayer>
  <Name>Simple Point</Name>
  <UserStyle>
	<Title>SLD Cook Book: Simple Point With Stroke</Title>
	<FeatureTypeStyle>
	  <Rule>
		<PointSymbolizer>
		  <Graphic>
			<Mark>
			  <WellKnownName>circle</WellKnownName>
			  <Fill>
				<CssParameter name="fill">#FF0000</CssParameter>
			  </Fill>
			</Mark>
			<Size>6</Size>
		  </Graphic>
		</PointSymbolizer>
	  </Rule>
	</FeatureTypeStyle>
  </UserStyle>
</NamedLayer>
~~~~~~~~~~


### Simple GeoServer Line Style ###

![Sample simple styled line layer](images/line_simpleline.png)

SLD Snippet ([Full SLD](https://github.com/UNM-GEOG-485-585/class-materials/blob/master/sample-files/SLD/line_simpleline.sld))

~~~~~~~~~~ {#sampleSLD_simpleLine .xml }
<NamedLayer>
  <Name>Simple Line</Name>
  <UserStyle>
	<Title>SLD Cook Book: Simple Line</Title>
	<FeatureTypeStyle>
	  <Rule>
		<LineSymbolizer>
		  <Stroke>
			<CssParameter name="stroke">#000000</CssParameter>
			<CssParameter name="stroke-width">3</CssParameter>    
		  </Stroke>
		</LineSymbolizer>
	  </Rule>
	</FeatureTypeStyle>
  </UserStyle>
</NamedLayer>
~~~~~~~~~~


### Simple GeoServer Polygon Style ###

![Sample simple styled polygon layer](images/polygon_simplepolygon.png)

SLD Snippet ([Full SLD](https://github.com/UNM-GEOG-485-585/class-materials/blob/master/sample-files/SLD/polygon_simplepolygon.sld))

~~~~~~~~~~ {#sampleSLD_simplepoly .xml }
<NamedLayer>
  <Name>Simple polygon</Name>
  <UserStyle>
	<Title>SLD Cook Book: Simple polygon</Title>
	<FeatureTypeStyle>
	  <Rule>
		<PolygonSymbolizer>
		  <Fill>
			<CssParameter name="fill">#000080</CssParameter>
		  </Fill>
		</PolygonSymbolizer>
	  </Rule>
	</FeatureTypeStyle>
  </UserStyle>
</NamedLayer>
~~~~~~~~~~


### Simple GeoServer Raster Style ###

![Sample simple styled raster layer](images/raster_twocolorgradient.png)

SLD Snippet ([Full SLD](https://github.com/UNM-GEOG-485-585/class-materials/blob/master/sample-files/SLD/raster_twocolorgradient.sld))

~~~~~~~~~~ {#sampleSLD_simpleraster .xml }
<NamedLayer>
  <Name>Two color gradient</Name>
  <UserStyle>
	<Title>SLD Cook Book: Two color gradient</Title>
	  <FeatureTypeStyle>
		<Rule>
		  <RasterSymbolizer>
			<ColorMap>
			  <ColorMapEntry color="#008000" 
			    quantity="70" />
			  <ColorMapEntry color="#663333" 
			    quantity="256" />
			</ColorMap>
		  </RasterSymbolizer>
		</Rule>
	  </FeatureTypeStyle>
  </UserStyle>
</NamedLayer>
~~~~~~~~~~


### PointSymbolizer ###

~~~~~~~~~~ {#pointSymbolizer .xml }
<Graphic>
  <ExternalGraphic>
    <OnlineResource> (Required)
    <Format>
  <Mark>
    <WellKnownName> (Required)
    <Fill>
    <Stroke>
    <Opacity>
    <Size>
    <Rotation>
~~~~~~~~~~


### LineSybolizer ###

~~~~~~~~~~ {#lineSymbolizer .xml }
<Stroke>
  <GraphicFill>
    <Graphic> contents same as PointSymbolizer
  <GraphicStroke>
    <Graphic> contents same as PointSymbolizer
  <CssParameter name="...">
    name="stroke"
    name="stroke-width"
    name="stroke-opacity"
    name="stroke-linejoin"
    name="stroke-linecap"
    name="stroke-dasharray"
    name="stroke-dashoffset"
~~~~~~~~~~


### PolygonSymbolizer ###

~~~~~~~~~~ {#polySymbolizer .xml }
<Fill>
  <GraphicFill>
	<Graphic> contents same as PointSymbolizer
  <CssParameter name="...">
	name="fill"
	name="fill-opacity"
  <Stroke> same as the LineSymbolizer
~~~~~~~~~~



### Raster Symbolizer ###

~~~~~~~~~~ {#rasterSymbolizer .xml }
<Opacity>
<ColorMap type="ramp | values | intervals" extended="true | false">
  <ColorMapEntry color="" quantity="" label="" opacity=""/>
<ChannelSelection>
  <RedChannel> <GreenChannel> <BlueChannel>
	<SourceChannelName>
  <GrayChannel>
	<SourceChannelName>
<ContrastEnhancement>
<ShadedRelief> (not implemented in ver 2.0)
<OverlapBehavior> (not implemented in ver 2.0)
<ImageOutline> (not implemented in ver 2.0)
~~~~~~~~~~


## Filters ##




### SLD Filter Rules and Vector Symbolization ### {#SLDrulesVectorSymbolization_01}

Filters based upon Attribute Values

~~~~~~~~~~
<PropertyIsEqualTo>
<PropertyIsNotEqualTo>
<PropertyIsLessThan>
<PropertyIsLessThanOrEqualTo>
<PropertyIsGreaterThan>
<PropertyIsGreaterThanOrEqualTo>
<PropertyIsBetween>
~~~~~~~~~~

Logical Filters - for combining multiple filters

~~~~~~~~~~
<And>
<Or>
<Not>
~~~~~~~~~~


Spatial Filters

~~~~~~~~~~
<Intersects>
<Equals>
<Disjoint>
<Within>
<Overlaps>
<Crosses>
<DWithin>
<Beyond>
<Distance>
~~~~~~~~~~

Scale-based selection

~~~~~~~~~~
<MaxScaleDenominator>
<MinScaleDenominator>
~~~~~~~~~~


### Attribute Filter Example ### {#attributeFilterExample_01}

To define an _Attribute Filter_ you need to know both the _Attribute Name_ of the layer(s) that will use the filter and the _value(s)_ of that field that will be used for the filter. _How do you determine the attribute name and values?_

* If available, this information should be available through the documentation (metadata) for the data that is published by the data provider. 
* In GeoServer you can view a list of attribute names in the _data_ tab of the layer information under the _Feature Type Details_ at the bottom of the web page, but you can't view the actual field values. 
* For vector data you can view both the attribute names and their values using the `ogrinfo` command from the command line on the class linux server. 

For example:

~~~~~~~~~~
ogrinfo -fields=YES -geom=NO kb_gpsrdsdd.shp kb_gpsrdsdd
~~~~~~~~~~

Where this command requests that the fields and their values be displayed, but that the detailed geometry information (i.e. all of the nodes associated with each feature) be suppressed in the output

[Full SLD](https://github.com/UNM-GEOG-485-585/class-materials/blob/master/sample-files/SLD/SimpleRoads.sld)


~~~~~~~~~~ {#styledNMRoads .xml }
<?xml version="1.0" encoding="ISO-8859-1"?>
<StyledLayerDescriptor version="1.0.0" 
  xsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd" 
  xmlns="http://www.opengis.net/sld" 
  xmlns:ogc="http://www.opengis.net/ogc" 
  xmlns:xlink="http://www.w3.org/1999/xlink" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">

<!-- New Mexico Highways -->
<NamedLayer>
<Name>NM Roads</Name>
  <UserStyle>
  	<Name>NM Roads</Name>
  	<FeatureTypeStyle>
		<Rule>
		  <Title>NM Highways</Title>
		  <ogc:Filter>
			<ogc:PropertyIsEqualTo>
			  <ogc:PropertyName>TYPE</ogc:PropertyName>
			  <ogc:Literal>State Highway</ogc:Literal>
			</ogc:PropertyIsEqualTo>
		  </ogc:Filter>
		  <LineSymbolizer>
			<Stroke>
			  <CssParameter name="stroke">
				<ogc:Literal>#CCCCCC</ogc:Literal>
			  </CssParameter>
			  <CssParameter name="stroke-width">
				<ogc:Literal>2</ogc:Literal>
			  </CssParameter>
			</Stroke>
		  </LineSymbolizer>
		</Rule>

<!-- US Highways -->
		<Rule>
			<Title>US Highways</Title>
			<ogc:Filter>
			<ogc:PropertyIsEqualTo>
				<ogc:PropertyName>TYPE</ogc:PropertyName>
				<ogc:Literal>US Highway</ogc:Literal>
			</ogc:PropertyIsEqualTo>
			</ogc:Filter>
			<LineSymbolizer>
			<Stroke>
			  <CssParameter name="stroke">
				<ogc:Literal>#ff0000</ogc:Literal>
			  </CssParameter>
			  <CssParameter name="stroke-width">
				<ogc:Literal>3</ogc:Literal>
			  </CssParameter>
			</Stroke>
			</LineSymbolizer>
			<LineSymbolizer>
			<Stroke>
			  <CssParameter name="stroke">
				<ogc:Literal>#CCCCCC</ogc:Literal>
			  </CssParameter>
			  <CssParameter name="stroke-width">
				<ogc:Literal>1</ogc:Literal>
			  </CssParameter>
			</Stroke>
			</LineSymbolizer>
		</Rule>

<!-- Interstate Highways -->
		<Rule>
		  <Title>Interstates</Title>
		  <ogc:Filter>
			<ogc:PropertyIsEqualTo>
			  <ogc:PropertyName>TYPE</ogc:PropertyName>
			  <ogc:Literal>Interstate</ogc:Literal>
			</ogc:PropertyIsEqualTo>
		  </ogc:Filter>
		  <LineSymbolizer>
			<Stroke>
			  <CssParameter name="stroke">
				<ogc:Literal>#fcff00</ogc:Literal>
			  </CssParameter>
			  <CssParameter name="stroke-width">
				<ogc:Literal>5</ogc:Literal>
			  </CssParameter>
			</Stroke>
		  </LineSymbolizer>
		  <LineSymbolizer>
			<Stroke>
			  <CssParameter name="stroke">
				<ogc:Literal>#222222</ogc:Literal>
			  </CssParameter>
			  <CssParameter name="stroke-width">
				<ogc:Literal>3</ogc:Literal>
			  </CssParameter>
			</Stroke>
		  </LineSymbolizer>
		</Rule>
	</FeatureTypeStyle>
  </UserStyle>
</NamedLayer>

</StyledLayerDescriptor>
~~~~~~~~~~





### Attribute Filter with Scale Factor ### {#attributeFilterWscaleFactor_01}

The only change needed to introduce scale-dependencies into styles is to include `<MaxScaleDenominator>` or `<MinScaleDenominator>` elements within a rule where they should be applied. These elements should be placed just before the symbolizer element so that GeoServer can properly validate the provided SLD. 


[Full SLD](https://github.com/UNM-GEOG-485-585/class-materials/blob/master/sample-files/SLD/SimpleRoadsScaled.sld)\ 

~~~~~~~~~~ {#attributeFilterWscale_highways .xml }
<?xml version="1.0" encoding="ISO-8859-1"?>
<StyledLayerDescriptor version="1.0.0" 
  xsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd" 
  xmlns="http://www.opengis.net/sld" 
  xmlns:ogc="http://www.opengis.net/ogc" 
  xmlns:xlink="http://www.w3.org/1999/xlink" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">

<!-- New Mexico Highways -->
<NamedLayer>
<Name>NM Roads</Name>
  <UserStyle>
  	<Name>NM Roads</Name>
  	<FeatureTypeStyle>
		<Rule>
		  <Title>NM Highways</Title>
		  <ogc:Filter>
			<ogc:PropertyIsEqualTo>
			  <ogc:PropertyName>TYPE</ogc:PropertyName>
			  <ogc:Literal>State Highway</ogc:Literal>
			</ogc:PropertyIsEqualTo>
		  </ogc:Filter>
  		  <MaxScaleDenominator>1000000</MaxScaleDenominator>
		  <LineSymbolizer>
			<Stroke>
			  <CssParameter name="stroke">
				<ogc:Literal>#CCCCCC</ogc:Literal>
			  </CssParameter>
			  <CssParameter name="stroke-width">
				<ogc:Literal>2</ogc:Literal>
			  </CssParameter>
			</Stroke>
		  </LineSymbolizer>
		</Rule>

<!-- US Highways -->
		<Rule>
			<Title>US Highways</Title>
			<ogc:Filter>
			<ogc:PropertyIsEqualTo>
				<ogc:PropertyName>TYPE</ogc:PropertyName>
				<ogc:Literal>US Highway</ogc:Literal>
			</ogc:PropertyIsEqualTo>
			</ogc:Filter>
  			<MaxScaleDenominator>5000000</MaxScaleDenominator>
			<LineSymbolizer>
			<Stroke>
			  <CssParameter name="stroke">
				<ogc:Literal>#ff0000</ogc:Literal>
			  </CssParameter>
			  <CssParameter name="stroke-width">
				<ogc:Literal>3</ogc:Literal>
			  </CssParameter>
			</Stroke>
			</LineSymbolizer>
			<LineSymbolizer>
			<Stroke>
			  <CssParameter name="stroke">
				<ogc:Literal>#CCCCCC</ogc:Literal>
			  </CssParameter>
			  <CssParameter name="stroke-width">
				<ogc:Literal>1</ogc:Literal>
			  </CssParameter>
			</Stroke>
			</LineSymbolizer>
		</Rule>

<!-- Interstate Highways -->
		<Rule>
		  <Title>Interstates</Title>
		  <ogc:Filter>
			<ogc:PropertyIsEqualTo>
			  <ogc:PropertyName>TYPE</ogc:PropertyName>
			  <ogc:Literal>Interstate</ogc:Literal>
			</ogc:PropertyIsEqualTo>
		  </ogc:Filter>
		  <LineSymbolizer>
			<Stroke>
			  <CssParameter name="stroke">
				<ogc:Literal>#fcff00</ogc:Literal>
			  </CssParameter>
			  <CssParameter name="stroke-width">
				<ogc:Literal>5</ogc:Literal>
			  </CssParameter>
			</Stroke>
		  </LineSymbolizer>
		  <LineSymbolizer>
			<Stroke>
			  <CssParameter name="stroke">
				<ogc:Literal>#222222</ogc:Literal>
			  </CssParameter>
			  <CssParameter name="stroke-width">
				<ogc:Literal>3</ogc:Literal>
			  </CssParameter>
			</Stroke>
		  </LineSymbolizer>
		</Rule>
	</FeatureTypeStyle>
  </UserStyle>
</NamedLayer>

</StyledLayerDescriptor>
~~~~~~~~~~



### Demonstrations ###

Class GeoServer Instance: [http://geog485.unm.edu:8080/geoserver/web/](http://geog485.unm.edu:8080/geoserver/web/)

SLD Creation Using QGIS:
Link to the [QGIS Vector Properties Dialog](http://docs.qgis.org/2.8/en/docs/user_manual/working_with_vector/vector_properties.html#style-menu) Documentation. 

