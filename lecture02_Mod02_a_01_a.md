---
...

<!---------------------------------------------------------------------------->
<!-- Week 02 ----------------------------------------------------------------->
<!-- Lecture 02 a 01 --------------------------------------------------------->
<!-- Web-based Mapping Clients------------------------------------------------>
<!-- Introduction to HTML, CSS and Javascript--------------------------------->
<!---------------------------------------------------------------------------->

# Week 2 - Module 2a - Web-based Mapping Clients. HTML, CSS & Javascript

### Overview ###  {.module02a01}

* Web Development
* Parts of a web page
* Web Site Components
	* Structure (X/HTML)
	* Presentation (CSS)
	* Behavior (Javascript)
* Simple Web Pages
* More Complete Web Page Example


### Web Development ###  {.module02a01}

* Requirements
	* Web Server
	* File location that the web server accesses for requested content
	* Files must be readable by all users
* General Process
	* Create basic content in HTML or XHTML (structure)
	* Change appearance of content through the definitions of styles using CSS (presentation)
	* Add dynamic capabilities to content through Javascript (behavior)
	* REPEAT over and over and over and over again


### Parts of a Web Page ###  {.module02a01}

~~~~~~~~~~ {.html .numberLines}
<html>
	<!-- The HTML block is the container for all of your page content -->
	<head>
		<!-- The head is where you include pointers to external resources 
		(i.e. style sheets and javascript files), blocks of Javascript code
		, styles, etc.  -->
		<title>The page title also goes in here</title>
	</head>
	<body>
		<!-- The body is where you put all of the content for the page 
		(i.e. the material that will be displayed in the web browser)  -->
		<h1>Headers</h1>
		<div>Generic blocks of content</div>
		<p>Paragraphs</p>
		<table>Tables</table>
		<img ...>Images</img>
		<form ...>Forms</form>
		<ul>Unordered Lists</ul>
		<ol>Ordered Lists</ol>
		<li>List Items</li>
		
		<!-- Javascript can go here as well -->
	</body>
</html>
~~~~~~~~~~

[Link to example](https://karlbenedict.github.io/GEOG485-585/sample-files/example02_01_01.html)





### Web Site Components - Structure ###  {.module02a01}

Content is defined in terms of the structural elements available in HTML/XHTML

* Sample HTML/XHTML Tags
	* Paragraphs (i.e. blocks of text) are contained within `<p>...</p>` tags
	* Headings (i.e. section headings, sub-headings) are contained within numerically defined header tags: `<h1>...</h1>, <h2>...</h2>, <h3>...</h3>`, etc.
	* Tabular data are within `<table>...</table>` tags
	* List are specified within `<ol>...</ol>` or `<ul>...</ul>` tags, depending upon whether the list is ordered (numbered) or unordered (e.g. bulleted)
	* User input elements are put within `<form>...</form>` tags
	* Blocks of content (i.e. sections or divisions) are defined within `<div>...</div>` tags

* Structure is translated into the Document Object Model (DOM) for later use by CSS and Javascript



### Web Site Components - Presentation ###  {.module02a01}

Modifications to default rendering of HTML/XHTML elements are made through styles defined in CSS

* Styles may be 
	* defined in an external file that is referenced within the `<head>` block (the preferred method when doing “real” web development)
	* directly defined within the `<head>` block of a web page
	* directly embedded in the elements to which they apply (generally not a “Good Thing”)
* When not embedded within an element, a style definition consists of
	* A selector
	* The style definition, enclosed in “curly-brackets”, separated by “semi-colons”
	* For example:  `h1 {color:red; font-size:18px;}`




### CSS Selectors ###  {.module02a01}

Selectors may be based on several criteria

* Element name:  `h1`, `p`, `table`, `ul`, etc.
	* Element: `<h1>A top level heading</h1>`
	* Selector: `h1 {color:red; font-size:18px}`
* Element ID: a unique name assigned to HTML/XHTML elements within the structure of the document
	* Element: `<p id=”para01”>Some text goes here</p>`
	* Selector: `#para01 {color:blue; font-size:12px}`
* Class ID: a name assigned to multiple elements which may be modified through reference to their class
	* Element:  `<p class=”instructions”>Here are some instructions</p>`
	* Another Element:  `<p class=”instructions”>Here are some more instructions</p>`
	* Selector: `.instructions {color:red; font-size:12px; text-decoration:blink}`
* Selectors may be combined in a variety of ways




### Web Site Components - Behavior ###  {.module02a01}

The most interoperable language for adding dynamic behavior to web sites is _Javascript_ - supported by most browsers on most operating systems

* A full-fledged programming language
	* A non-trivial undertaking to become proficient in
	* Experience in other programming languages can contribute to learning Javascript
* Defines actions that may be taken on/by DOM elements
* Allows for modification of existing DOM elements, creation of new DOM elements after the page has finished loading from the server, retrieval of new content after page loads
	* An interactive web page that may behave like a local desktop application




### Reference Links ###  {.module02a01}

* w3schools.com
	* [HTML 5.0 Introduction](http://www.w3schools.com/html/html5_intro.asp)
	* [HTML 4.0 / XHTML 1.0 Tag Reference](http://www.w3schools.com/tags/default.asp)
	* [Cascading Style Sheet (CSS) selectors and elements](http://www.w3schools.com/css/default.asp)
	* [Javascript reference](http://www.w3schools.com/js/default.asp)
* World Wide Web Consortium (W3C)
	* [HTML and CSS Background](http://www.w3.org/standards/webdesign/htmlcss)
	* [HTML and CSS Tutorial Links Page](http://www.w3.org/2002/03/tutorials.html#webdesign_htmlcss)
	* [Validators Page](http://validator.w3.org/)
* Webmonkey.com
	* [HTML Cheat Sheet](https://www.wired.com/2010/02/html_cheatsheet/)
	* [CSS Guide](https://www.wired.com/2010/02/css-guide/)




### Simple Web Page ###  {.module02a01}

~~~~~~~~~~ {.html .numberLines}
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
		<title>This is a simple web page</title>
	</head>
	<body>
		<h1>They don't get any simpler than this!</h1>
		<p>OK, not much simpler than this.</p>
		<p>Hello World?</p>
	</body>
</html>
~~~~~~~~~~

[link to example](https://karlbenedict.github.io/GEOG485-585/sample-files/example02_01_02.html)




### Simple Web Page with CSS ###

~~~~~~~~~~ {.html .numberLines}
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
		<title>This is a simple web page - with styling</title>
		<style type="text/css">
			h1 {color:blue; font-size:large}
			p.para {color:#777777; font-size:small}
			#annoying {color:red; text-decoration:line-through}
		</style>
	</head>
	<body>
		<h1>They don't get any simpler than this!</h1>
		<p class="para">OK, not much simpler than this.</p>
		<p id="annoying" class="para">Hello World?</p>
	</body>
</html>
~~~~~~~~~~

[link to example](https://karlbenedict.github.io/GEOG485-585/sample-files/example02_01_03.html)



### Simple Web Page with Javascript ###

~~~~~~~~~~ {.html .numberLines}
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
		<title>This is a simple web page with Javascript</title>
		<script type="text/javascript">
			function genericAlert() {
				alert("You just did something ...")
				document.getElementById("clickMe").style.color = "red"
			}
		</script>
	</head>
	<body>
		<h1>They don't get any simpler than this!</h1>
		<p>OK, not much simpler than this.</p>
		<p>Hello World?</p>
		<p id="clickMe" onclick="genericAlert();">What happens when you click me?</p>
	</body>
</html>
~~~~~~~~~~

[link to example](https://karlbenedict.github.io/GEOG485-585/sample-files/example02_01_04.html)



