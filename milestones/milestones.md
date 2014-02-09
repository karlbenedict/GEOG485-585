# Geography 485L/585L Milestones #

These *milestone* assignments will be compiled into an online, web-based *portfolio* that you will develop over the course of the semester. This portfolio will include a "home page" (started in the second week's milestone) that includes links to all of the created milestone and ["deep dive"](../deep-dives/deep-dives.html) pages that you will create. 

## Week 1 - Creating your first web page in GitHub ##

Developing content to go onto the web has evolved from a solitary effort to one where teams work together in developing components of larger web sites. These teams need to have a variety of tools to enable their work. Some of the most important tools enable code sharing with the team, and in projects based on the [Open Source](http://opensource.org/osd-annotated) software model the rest of the world. The [GitHub](https://github.com/) web platform uses the [Git](http://git-scm.com/) distributed [version control](http://en.wikipedia.org/wiki/Revision_control) system to enable sharing of code and hosting static web pages based on that shared code. 

We will be using GitHub as the platform for hosting your portfolios for the class, allowing you to learn how version control operates, and how to provide comments and keep notes on your work and the work of others (this will be part of our peer review process).

While the work we do this and next week will be directly through the editor integrated into the GitHub system, you will eventually want to install one of the recommended desktop applications that allow you to develop your web pages on your local computer and then update the files on the GitHub system when you want to create a new version. Also, you can't add things like images to your web pages until you are adding them to a local repository on your computer and then sending them to GitHub. 

### Create a GitHub Account and Public Repository for the Class ###

Step 1

:	Go to the [GitHub](https://github.com/) web site and sign up for an account by providing a username, email address and password and submitting the requested information by clicking the "Sign up for GitHub" button. 

![The GitHub home page from which you can start the sign-up process](images/Github_01.png)

You will then be taken to the "Welcome to GitHub" page where you can see that you have signed up for a free GitHub account. 

![The GitHub welcome page showing that you've successfully signed up and providing you the "Finish sign up" button to move to the next step in setting up your new account.  ](images/Github_02.png)

Step 2

:	Click the "Finish sign up" button near the bottom of the page. 

This takes you to your GitHub dashboard from which you can access all the information about your account. *Feel free to review the GitHub Bootcamp materials that are highlighted on your home page*. 

![Your GitHub "dashboard" - showing some orientation materials the first time you sign in and the "New repository" button you will use in Step 3 below.](images/Github_03.png)


Step 3

:	Click the "Create repository" button near the lower right corner of your dashboard.


Step 4

:	Fill out the information requested for the new repository and click the "Create repository" button near the bottom of the page. 

![The "create repository" form for entering information about the new repository that you are creating.](images/Github_04.png)

Step 5

:	Create the first file in your repository - a "README" file by clicking on the "README" link provided just under the "Quick Setup" box. When you click this link you will be taken to the editor where you can edit the default README file and "commit" (save) the new/modified file. You will then be taken back to your repository's home page. 

![The setup page for the newly created respository - with the "Quick Setup" options and "README" file creation link.](images/Github_05.png)

### Create Your First Web Page ###

Step 1

:	From your repository page (shown after completing Step 5 above), click on the "Create a new file here button" 

![Repository home page with "Create a new file here button" highlighted.](images/Github_06.png)


Step 2

:	Add the information for the new page as shown in the following figure and click the "Commit New File" button to save your changes. 

![New File creation page with information to be entered highlighted.](images/Github_07.png)

### Make Your New Web Page Visible to the World ###

Step 1

:	Create a new "Branch" from your "Master" branch called "gh-pages". This is a specially named branch of content that GitHub will make available through a specific web address as a web site instead of the standard GitHub interface. 

![Process for creating a new "gh-pages" branch from the default "master" branch. ](images/Github_08.png)


Step 2

:	Test to see if your new page is visible, and looks the way you expect by opening the web address for the page you have in your "gh-pages" branch. This web address is structured like this:

:	`http://<your GitHub username>.github.io/<your repository name>/<the HTML file name>`

:	For example: [http://geog12345.github.io/geog485/helloworld.html](http://geog12345.github.io/geog485/helloworld.html)

![Sample "helloworld.html" web page display.](images/Github_09.png)





## Week 2 - Create a More Complex Web Page and Style It ##

This week’s milestone activity takes you through the process of creating two more web pages in preparation for next week’s work with the Google Maps API in developing your first web mapping page. These pages will be:

1. A *home page* for your portfolio that will be the access point for all of the materials you create ([template](../examples/homePageTemplate.html)), and
2. Your first web page containing materials related to a *milestone* assignment ([template](../examples/assignmentTemplate.html)).  

Open the *milestone* assignment template linked above and select "view Source" from the browser's menu to view the source code for the file. Create a new document in your GitHub `gh-pages` branch named `milestone_02.html`, copy the page code from the "view source", and paste it into your `milestone_02.html` document. Add your responses to the following questions to the `milestone_02.html` document. 

Open the *home page* template linked above in your web browser and select “view source” from the browser’s menu to examine the source code for the page.


Question 1
:	From examining the display in your web browser and the structure of the source code in the page, what effect (if any) does the white space (i.e. tabs, blank lines, multiple spaces) have on what is displayed in the browser?

Question 2
:  How are the 

		<h1>
and 

		<h2> 

elements from the source code displayed differently in the browser?

Question 3
:	What type of element would you use to create additional list elements in either the “topic” or “data type” lists on the page.

Log into your GitHub account, and create a new document in the `gh-pages` branch and name it `index.html`.

Copy the source code from the “view source” information for the web page you opened in 1) above and paste it into `index.html` document in the GitHub editor. Save your changes

Test your new page by trying the following web addresse (it may take a few minutes for your newly created page to become available):

		http://<your GitHub username>.github.io/<your repository name>
		
		http://<your GitHub username>.github.io/<your repository name>/index.html


Where `<your GitHub username>` is replaced by your username for GitHub, and `<your repository name>` is replaced with the name of the repository that you created your `helloworld.html` document in during last week's milestone exercise.

The reason that the first web address works (without specifying the file name) is that if a file name is not provided in a web address, many web servers will deliver a file named “index.html” if it is found in the requested directory.
 
Flesh out (using using the GitHub *edit* function) the `index.html` page that you created above with information specific to you based upon the content areas in the page. Add a link to your `milestone_02.html` file to the "milestones" section of your `index.html` page. 

Make a copy of your `index.html` page by copying the content of the page and pasting it into a new document named `index_styled.html`.

Experiment with some of the styling capabilities described in Dave Raggett’s “Adding a Touch of Style” page (<http://www.w3.org/MarkUp/Guide/Style.html>) on `index_styled.html` page you created above. Make at least three stylistic changes to the `index_styled.html` page.  





## Week 3 - Creation of a Web Page with an Embedded Google Map ##

In preparation for creating a web page with an embedded Google Map you should first answer the following questions about what and how you want to map. As you define the type of map you want to build, think about a specific problem or topic that you would like to address with your map. 

In this exercise you will be generating the configuration for the base map (i.e. The Google Maps background layers). In  future assignments you will add your own custom content to free-standing web pages that include a mapper based upon the base map you define here.

Create a web page (based upon the assignment [template](../examples/assignmentTemplate.html)) that contains your milestone writeup (including the embedded Google Map required by question 5), and link it to the home page (`index.html`) file you created last week. 

Respond to Question 1-4 with an understanding that you are generating a web page that is publicly accessible, and should be both clear and complete. 

Question 1
:	What area do you want to depict in your map? Why?

Question 2
:	What is the center point (latitude and longitude) of your area of interest?

Question 3
:	What style of map (roads, satellite, hybrid, terrain) is appropriate for your map? Why?

Question 4
:	What is the scale of your map (local, regional, continental, global)? How will this translate into your selection of an appropriate default zoom level for your map?

Now that you have answered these questions about the map that you want to create, refer to the examples in the lecture notes, the Google Maps Tutorial (http://code.google.com/apis/maps/documentation/javascript/tutorial.html), and this week's reading assignment to create a custom Google map.

Question 5
:	Embed a Google Map in your writeup that is based upon your responses to questions 1-4 above.


## Week 4 - Styling of an Embedded Google Map ##

Make a free-standing web page based upon the Google Map that you created as part of last week's lab assignment. Use the Google [styled maps wizard](http://gmaps-samples-v3.googlecode.com/svn/trunk/styledmaps/wizard/index.html) to define _at least_ three modified base map styles and integrate the JSON generated by the wizard into your new Google Map page. 


## Week 5 - Proj4, GDAL, and OGR ##

This week's lab concentrates on some command line tools that are useful in working with raster and vector data sets. These tools should be available on your personal computers (through the installation of the FW-Tools package for Windows (use the [*mirror site*](http://fwtools.loskot.net/) from the FW-Tools website to download the "FWTools247.exe" package to install on your system), or the GDAL, OGR, and Proj4 frameworks on the Mac) 

Here are some useful links to documentation and information about the tools that you will be working with.

* [FWTools](http://fwtools.maptools.org/)

* [Proj4](http://trac.osgeo.org/proj/) in particular, the following items (from the linked page):
	* The original documentation upon which subsequent documentation is built
		*  [OF90-284.pdf](ftp://ftp.remotesensing.org/proj/OF90-284.pdf) (2.7MB): The main users manual for PROJ; however, this dates from PROJ.3
	* The various addenda that contain some updated command syntax and definitions of additional map projections
		* [proj.4.3.pdf](ftp://ftp.remotesensing.org/proj/proj.4.3.pdf) (1MB)
		* [proj.4.3.I2.pdf](ftp://ftp.remotesensing.org/proj/proj.4.3.I2.pdf) (2MB)
		* [swiss.pdf](ftp://ftp.remotesensing.org/proj/swiss.pdf) (78KB)
	* The key utility programs that you will use
		* [proj](http://trac.osgeo.org/proj/wiki/man_proj)
		* [cs2cs](http://trac.osgeo.org/proj/wiki/man_cs2cs)

* [OGR](http://www.gdal.org/ogr/) in particular the [OGR Utility Programs Documentation](http://www.gdal.org/ogr_utilities.html)

* [GDAL](http://www.gdal.org/) in particular the [GDAL Utility Programs Documentation](http://www.gdal.org/gdal_utilities.html)

Download three data products from one or more of the following online data repositories.

* [New Mexico Resource Geographic Information System](http://rgis.unm.edu/)
* [The US National Atlas Data Download Site](http://nationalatlas.gov/atlasftp.html)
* [NOAA's National Climate Data Center *Climate data online: Data discovery* site](http://www.ncdc.noaa.gov/cdo-web/datasets)


  Make sure to download _at least one vector and one raster_ data product as part of the collection you download. If you need to go to different site(s) to download the data, feel free to do so.

Question 1
:	Briefly describe each dataset based upon the information from the web site.

Question 2
:	Examine each file using either gdalinfo or ogrinfo (depending upon whether it is a raster or vector data product), and answer the following questions about each data set:

* What is the projection/coordinate system for the data product? If it is undefined, note it.

* What is the spatial extent of the data product?

* If it is a vector dataset, how many features does it have? 

* If it is a raster dataset, what is the pixel resolution (include units) of the dataset?

Question 3
:	Use proj or cs2cs (I suggest you use cs2cs) to calculate the coordinates of the spatial extent of the datasets that you downloaded in UTM Zone 13N, NAD27. Paste the input and output of the command(s) into your writeup.







<div class="license"><a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />This work by <span xmlns:cc="http://creativecommons.org/ns#" property="cc:attributionName">Karl Benedict</span> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.</div>
