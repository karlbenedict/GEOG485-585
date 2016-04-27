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
