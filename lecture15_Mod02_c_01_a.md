<!---------------------------------------------------------------------------->
<!-- Week 15 ----------------------------------------------------------------->
<!-- Lecture 05 a 03 a ------------------------------------------------------->
<!-- Web-based Mapping Clients------------------------------------------------>
<!-- Integrating GeoServer OGC Services into OpenLayers Clients--------------->
<!---------------------------------------------------------------------------->


# Module 5 - OGC Services and Styling in GeoServer# {.module05a03a}

### Overview ###  {.module02c01a}
* Review of Raster Styling  in GeoServer

* Raster Styling Demonstration


### Raster Symbolizer - Review ###

~~~~~~~~~~ {#rasterSymbolizerElements .xml }
<Opacity>
<ColorMap type=ramp|values|intervals extended=true|false />
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


### Sample Raster SLD for Color Map Examples ###

~~~~~~~~~~ {#simpleRasterSymbolizer .xml }
<?xml version="1.0" encoding="ISO-8859-1"?>
<StyledLayerDescriptor version="1.0.0" 
  xsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd" 
  xmlns="http://www.opengis.net/sld" 
  xmlns:ogc="http://www.opengis.net/ogc" 
  xmlns:xlink="http://www.w3.org/1999/xlink" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">

<NamedLayer>
<Name>ElevationData</Name>
  <UserStyle>
    <Name>dem</Name>
    <Title>Simple DEM style</Title>
    <Abstract>Classic elevation color progression</Abstract>
    <FeatureTypeStyle>
      <Rule>
        <RasterSymbolizer>
          <Opacity>1.0</Opacity>
          <ColorMap>
            <ColorMapEntry color="#000000" quantity="-500" label="nodata" opacity="0.0" />
            <ColorMapEntry color="#AAFFAA" quantity="0" label="0" />
            <ColorMapEntry color="#00FF00" quantity="1000" label="1000"/>
            <ColorMapEntry color="#FFFF00" quantity="1200" label="1200" />
            <ColorMapEntry color="#FF7F00" quantity="1400" label="1400" />
            <ColorMapEntry color="#BF7F3F" quantity="1600" label="1600" />
            <ColorMapEntry color="#99CC66" quantity="2000" label="2000" />
            <ColorMapEntry color="#336633" quantity="2500" label="2500" />
            <ColorMapEntry color="#006600" quantity="3000" label="3000" />
            <ColorMapEntry color="#FFFFFF" quantity="3500" label="3500" />
          </ColorMap>
        </RasterSymbolizer>
      </Rule>
    </FeatureTypeStyle>
  </UserStyle>


</NamedLayer>
</StyledLayerDescriptor>
~~~~~~~~~~


### ColorMap Types ###

	<ColorMap> or <ColorMap type="ramp">

	<ColorMap type="intervals">

	<ColorMap type="values">


### Extend or Not To Extend? ###

~~~~~~~~~~ {#extendedRamp .xml }
<ColorMap type="ramp" extended="false">  = 256 colors in ramp (default)
<ColorMap type="ramp" extended="true"> = 65536 colors in ramp
~~~~~~~~~~


### Opacity ###

Options for defining `opacity` appear in two places in the _raster symbolizer_. 

At the level of the entire raster dataset

~~~~~~~~~~ {#opacityRasterSymbolizerElement .xml }
<Opacity>0.5</Opacity>
~~~~~~~~~~

Within a `ColorMapEntry` for a specific color definition within a `ColorMap`

~~~~~~~~~~ {#opacityColorMapEntry .xml }
<ColorMap>
   <ColorMapEntry color="#000000" quantity="-500" label="nodata" opacity="0.0" />
   <ColorMapEntry color="#AAFFAA" quantity="0" label="0" />
   <ColorMapEntry color="#00FF00" quantity="1000" label="1000"/>
   ...
   <ColorMapEntry color="#FFFFFF" quantity="3500" label="3500" />
</ColorMap>
~~~~~~~~~~


### Channel Selection ###

Many raster datasets contain multiple _bands_ of values which may be viewed individually or assigned to the colors _red_, _green_, and _blue_ to generate a color image representing a combination of band values. GeoServer allows for the specification of a single band for display as a `GrayChannel` or three bands as `RedChannel`, `GreenChannel`, and `BlueChannel`. 

~~~~~~~~~~ {#channelSelection .xml }
<?xml version="1.0" encoding="ISO-8859-1"?>
<StyledLayerDescriptor version="1.0.0" 
  xsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd" 
  xmlns="http://www.opengis.net/sld" 
  xmlns:ogc="http://www.opengis.net/ogc" 
  xmlns:xlink="http://www.w3.org/1999/xlink" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">

<NamedLayer>
<Name>DOQQBands</Name>
  <UserStyle>
    <Name>DOQQ321</Name>
    <Title>Simple DEM style</Title>
    <Abstract>Classic elevation color progression</Abstract>
    <FeatureTypeStyle>
      <Rule>
        <RasterSymbolizer>
		 <ChannelSelection>
		  <RedChannel>
			<SourceChannelName>3</SourceChannelName>
		  </RedChannel>
		  <GreenChannel>
			<SourceChannelName>2</SourceChannelName>
		  </GreenChannel>
		  <BlueChannel>
			<SourceChannelName>1</SourceChannelName>
		  </BlueChannel>
		 </ChannelSelection>
        </RasterSymbolizer>
      </Rule>
    </FeatureTypeStyle>
  </UserStyle>


</NamedLayer>
</StyledLayerDescriptor>
~~~~~~~~~~



### Contrast Enhancement ###

Some raster data may need adjustment to increase the contrast (the range between the darkest and lightest values) displayed. GeoServer provides three options for contrast enhancement, each of which have a different effect on the resulting image.

Histogram
:	The values are stretched so that an equal number of pixels fall into each color in the range

Normalize
:	The minimum and maximum brightness values are mapped to the minimum and maximum raster values

Gamma
:	The image is brightened or darkened by a specified factor (negative numbers darken, positive numbers brighten)



### Sample Contrast Enhancement SLD for Examples ###

~~~~~~~~~~ {#contrastEnhancement .xml }
<RasterSymbolizer>
  <Opacity>1.0</Opacity>
  <ChannelSelection>
    <RedChannel>
      <SourceChannelName>1</SourceChannelName>
      <ContrastEnhancement>
      <Histogram/>
      </ContrastEnhancement>
    </RedChannel>
    <GreenChannel>
      <SourceChannelName>2</SourceChannelName>
      <ContrastEnhancement>
      <Histogram/>
      </ContrastEnhancement>
    </GreenChannel>
    <BlueChannel>
      <SourceChannelName>3</SourceChannelName>
      <ContrastEnhancement>
      <Histogram/>
      </ContrastEnhancement>
    </BlueChannel>
  </ChannelSelection>
</RasterSymbolizer>
~~~~~~~~~~

~~~~~~~~~~ {#contrastEnhancementNormalize .xml }
<ContrastEnhancement>
  <Normalize/>
</ContrastEnhancement>
~~~~~~~~~~

~~~~~~~~~~ {#contrastEnhancementHistogram .xml }
<ContrastEnhancement>
  <Histogram/>
</ContrastEnhancement>
~~~~~~~~~~

~~~~~~~~~~ {#contrastEnhancementGamma .xml }
<ContrastEnhancement>
  <GammaValue>.5</GammaValue>
</ContrastEnhancement>
~~~~~~~~~~


### GeoServer Demo/Q&A ###


Class GeoServer Instance: [http://geog485.unm.edu:8080/geoserver/web/](http://geog485.unm.edu:8080/geoserver/web/)


# Epilogue - Geography 485L/585L Closing Comments and Next Steps #

### What We've Done ...###

* Developed basic web pages
* Learned how to publish our content using GitHub
* Developed basic interactive maps based on the Google Maps API and OpenLayers
* Learned about the key data visualization and data access standards from the Open Geospatial Consortium
	* WMS, WFS, WCS
* Used those visualization and data access services in desktop GIS applications
* Published data using those standards, and done basic styling of those data

Whew!!! That's a bunch of work for 16 weeks. Good Job. 

### Where Do You Go From Here? ###

* Establish your own identity on the internet by getting your own domain name (e.g. [Hover.com](https://www.hover.com/), [GoDaddy](http://www.godaddy.com/) and many others
* Build your personal web site focusing on what interests you (published through GitHub or any other web hosting provider)
* Continue experimenting with interactive mapping - using the Google Maps API, OpenLayers or another framework that interests you. Some additional candidates include:
	* The ArcGIS [Javascript API](https://developers.arcgis.com/javascript/)
	* [Leaflet](http://leafletjs.com/) Javascript Framework
* Publish your own data (you will need a server e.g. [Amazon EC2](https://aws.amazon.com/ec2/), [Cari.net](http://cari.net/), [MapServerPro](http://www.mapserverpro.com/cr-articles/mapserver_hosting.php), [AcuGIS](http://www.acugis.com/about-us.htm), [Geocortex](http://www.geocortex.com/arcgis-server-services/arcgis-server-hosting/)) using GeoServer or another platform like:
	* [MapServer](http://mapserver.org/)
	* [ArcGIS Server](http://www.esri.com/software/arcgis/arcgisserver)
	* [ArcGIS Online](http://doc.arcgis.com/en/arcgis-online/reference/arcgis-server-services.htm)

