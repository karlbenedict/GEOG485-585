---
title: Week 13 - Platforms and GeoServer Introduction
...

<!---------------------------------------------------------------------------->
<!-- Week 13 ----------------------------------------------------------------->
<!---------------------------------------------------------------------------->

# Introduction # {#week13}

Thus far we have concentrated on the client side of geospatial services oriented architectures in developing web interfaces based upon the Google Maps API, the OpenLayers javascript framework, and accessing data published using the OGC WMS, WFS, and WCS standards in desktop applications. Starting this week we begin our work on the server side - working with the GeoServer server platform to publish data through the OGC WMS, WFS, and WCS service standards. This work will demonstrate the ease with which you can share data using these standards, facilitating client use such as that that we have seen in our web site and desktop application work.


*Expected Outcomes*

By the end of this class, students should be able to:

* Place files within the server file system for integration into the GeoServer platform
* Create a GeoServer _Workspace_, _Store_, and _Layer_ based upon those data
* Test those layers using the _Layer Preview_ tools integrated into GeoServer


*Key Concepts*

By the end of this class, students should understand:

* The components of a map server platform and their relationship to each other
* The role of a geospatial server within a geospatial services oriented architecture
* The information required about data to successfully configure it for publication within GeoServer
* The stepwise process through which a dataset may be published using GeoServer 

# Reference Materials # {#week13-reference}

* Lynda.com [*Learn the Linux Command Line: The Basics*](http://www.lynda.com/Linux-tutorials/Learn-Linux-Command-Line-Basics/435539-2.html?org=unm.edu) - particularly:
	* Introduction
	* 1. Command-Line Basics
	* 2. Files, Folders, and Permissions

* GeoServer [Online Documentation](http://docs.geoserver.org/stable/en/user/index.html): sections [Introduction](http://docs.geoserver.org/stable/en/user/introduction/index.html), [Getting Started](http://docs.geoserver.org/stable/en/user/gettingstarted/index.html), and [Web Administration Interface](http://docs.geoserver.org/stable/en/user/webadmin/index.html)


# Weekly Milestone - Linux Basics and GeoServer Data Import# {#week13-milestone}

## Working on the Class Server

For the GeoServer portion of our work, you will be working on a Linux server that has been created for the class. While we won't be doing a lot of Linux work, some basic familiarity with moving around, copying files, and working with files is needed. The class server is running Ubuntu Linux which is a broadly deployed, well supported operating system and computing platform that has excellent support for many Open Source geospatial applications, including those that we will be using in this class. 

The first set of exercises relate to learning some basics about working with the Linux Operating system, applicable on just about any Linux server including the class server.

Review (but don't worry about memorizing) the following materials (in addition to watching the Lynda.com video tutorial sections listed above):

[Webmonkey "Unix Guide"](http://www.webmonkey.com/2010/02/unix-guide/)

[Linux Command Line Cheatsheet](http://www.cheatography.com/davechild/cheat-sheets/linux-command-line/)

QUESTION 1
:	What command would you use to list the contents of a directory on a linux system?

QUESTION 2
:	What command would you use to read the "manual page" for a specific command?

Log into the class Linux server - `mapper.internetmapping.net`.  *This is different from the address referenced in the below linked videos* The rest of the process is the same as demonstrated in the videos. The class username and password are posted in Learn in an announcement to the class. 

*Windows*: Open PuTTY on your computer and connect using the SSH protocol (see video demonstration)

[Link to the YouTube video demonstration for Windows](http://youtu.be/GdO_n89mey8)

*Mac*: Open the Terminal Application and connect using SSH (see video)

[Link to the YouTube video demonstration for Mac OS X](http://youtu.be/Gu_ij6HxTWo)

Start a session on the class Linux server, which is located at at the hostname `mapper.internetmapping.net` (you will use your class server username and password [provided in an announcement in Learn] to open the connection)

Task
:	Use the `mkdir <your netid>` command (replacing the `<your netid>` element with your UNM netid [the username you use when logging into UNM's email system]) to create a directory called `<your netid>` in the shared class home directory (the directory that you are in when you login, and where you go when you type the `cd` command with no options, located at `/shared-data/classdata` on the class server).  



## Adding data to GeoServer ##

To add data to GeoServer you must have a file location on the server where data files must be stored and accessible by the GeoServer. 

Task
:	Change into the `<your netid>` directory that you created above using the `cd /shared-data/classdata/<your netid>` command. For example `cd /shared-data/classdata/kbene`

Task
:	Copy all of the data files located in the `/shared-data/classdata/wk13Data` directory by executing the following command from *inside your `<your netid>` directory*.

	cp -r ../wk13data/* .     (make sure to include final '.')

This will place a copy of these data files in your `<your netid>` directory. Rename (using the linux `mv` command) each of the copied files and directories (and their contents) to replace my initials at the beginning of each file and directory name with yours. For example, rename `kb_m_3510659_ne_13_1_20110523.tif` as `xy_m_3510659_ne_13_1_20110523.tif`. This will help avoid some issues with layers based on source files with the same name later in our work. 

Task
:	Log into the Geoserver on the class server ([http://mapper.internetmapping.net:8081/geoserver/web/](http://mapper.internetmapping.net:8081/geoserver/web/)) using the username and password provided for the class server through the announcement in Learn. 

Create a new _workspace_ based on your net id. For example `ws_<your netid>`

Create a new _store_ for each of the datasets added to your `<your netid>` directory above (4 .tif files and 3 shape files). Assign the new store to the workspace that you created above. When specifying the the `Connection Parameters` for pointing to the file, the format is: `file:data/shared-data/classdata/<your netid>/<filename including any additional directories>` 

for example
    file:data/shared-data/classdata/wk13data/kb_2007fe_35_county00_shp/kb_2007fe_35_county00.shp

You can also browse to the file by clicking on the "Browse ..." link next to the location field, for example for a shapefile:

![](images/GeoServer_Browse.jpg)\ 

and navigating to your data directory (data_dir/data/shared-data/classdata/\<your username\>) to see the data to select from. 

![](images/GeoServer_SelectData.jpg)\ 


Create a new _layer_ for each of the _stores_ added above. Here are some things to keep in mind:

You may need to designate the SRS for a layer if it can’t be read directly from the dataset. Your specify the _designated_ SRS using the standard EPSG:XXXX format. 

The EPSG code for `GCS_North_American_1983` is EPSG:4269

Question 3
:	Preview each of your added layers, using the _Layer Preview_ tool and the _Open Layers_ option to display the data. Include screen grabs of the previews in your write-up.



