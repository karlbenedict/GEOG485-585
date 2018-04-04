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

* Safari Books Online [*Fundamentals of Linux: Learn important command-line tools and utilities with real-world examples.*](https://www.safaribooksonline.com/library/view/fundamentals-of-linux/9781788293945/) - particularly:
	* [Chapter 2: Getting to Know the Command Line](https://www.safaribooksonline.com/library/view/fundamentals-of-linux/9781788293945/video2_1.html)
	* [Chapter 3: It's All About the Files](https://www.safaribooksonline.com/library/view/fundamentals-of-linux/9781788293945/video3_1.html)


* GeoServer [Online Documentation](http://docs.geoserver.org/stable/en/user/index.html): sections [Introduction](http://docs.geoserver.org/stable/en/user/introduction/index.html), [Getting Started](http://docs.geoserver.org/stable/en/user/gettingstarted/index.html), and [Web Administration Interface](http://docs.geoserver.org/stable/en/user/webadmin/index.html)


# Weekly Milestone - Linux Basics and GeoServer Data Import# {#week13-milestone}

## Working on the Class Server

For the GeoServer portion of our work, you will be working on a Linux server that has been created for the class. While we won't be doing a lot of Linux work, some basic familiarity with moving around, copying files, and working with files is needed. The class server is running Ubuntu Linux which is a broadly deployed, well supported operating system and computing platform that has excellent support for many Open Source geospatial applications, including those that we will be using in this class. 

The first set of exercises relate to learning some basics about working with the Linux Operating system, applicable on just about any Linux server including the class server.

Review (but don't worry about memorizing) the following materials (in addition to watching the video tutorial sections listed above):

[Webmonkey "Unix Guide"](http://www.webmonkey.com/2010/02/unix-guide/)

[Linux Command Line Cheatsheet](http://www.cheatography.com/davechild/cheat-sheets/linux-command-line/)

QUESTION 1
:	What command would you use to list the contents of a directory on a linux system?

QUESTION 2
:	What command would you use to read the "manual page" for a specific command?

Log into the class Linux server - [`internetmapping.net:8080/geoserver/web`](http://internetmapping.net:8080/geoserver/web).  *This is different from the address referenced in the below linked videos* The rest of the process is the same as demonstrated in the videos. Your username and password for both the class linux server and the GeoServer have been sent to you via email.  

*Windows*: Open PuTTY on your computer and connect using the SSH protocol (see video demonstration)

[Link to the YouTube video demonstration for Windows](http://youtu.be/GdO_n89mey8)

*Mac*: Open the Terminal Application and connect using SSH (see video)

[Link to the YouTube video demonstration for Mac OS X](http://youtu.be/Gu_ij6HxTWo)

Start a session on the class Linux server, which is located at at the hostname `internetmapping.net` (you will use your class server username and password you received through email to open the connection). **NOTE: the class server is accessed through a non-standard network port. Enter the port number `23` in the connection dialog boxes where there is an option to specify the port. When using the SSH commmand [i.e. on the Mac] include the port number in the connection command.**

For example:

    ssh -p 23 user001@internetmapping.net

After logging in you are in your `home directory` - the directory that is linked to your account on the system, and the directory that you are taken to when you type the `cd` command without any additional arguments.  



## Adding data to GeoServer ##

To add data to GeoServer you must have a file location on the server where data files are stored and accessible by the GeoServer. 

Task
:	Change into your home directory using the `cd` command without any additional arguments. 

Task
:	Copy the folder of sample data files located at  `/opt/geoserver/data_dir/general/user000/GeoserverSampleData` by executing the following command from *inside your home directory*.

	cp -r ../user000/GeoserverSampleData .     (make sure to include final '.')

This will place a copy of folder of data files in your home directory. Rename (using the linux `mv` command) each of the copied files and directories (and their contents) to prepend (and replace mine) your initials at the beginning of each file and directory name. For example, rename `kb_m_3510659_ne_13_1_20110523.tif` as `xy_m_3510659_ne_13_1_20110523.tif`. This will help avoid some issues with layers based on source files with the same name later in our work. **You might find this a faster task using the WinSCP [Windows] or CyberDuck [Mac] utilities instead of the command line**

Task
:	Log into the Geoserver on the class server ([http://internetmapping.net:8080/geoserver/web/](http://internetmapping.net:8080/geoserver/web/)) using the username and password provided by email. 

Create a new _workspace_ based on your net id. For example `ws_<your netid>`

Create a new _store_ for each of the datasets added to your home directory above (**4 .tif files and 3 shape files**). Assign the new store to the workspace that you created above. When specifying the the `Connection Parameters` for pointing to the file you can browse to the location in the server's file system by using the `browse...` link next to the URL field under the `Connection Parameters` section of the store creation page. All of the home directories are in the `general` folder under the `data_dir` in the file browser. 

for example

    file:general/user000/GeoserverSampleData/kb_m_3510659_ne_13_1_20110523.tif


![](images/GeoServer_Browse.jpg)\ 


Create a new _layer_ for each of the _stores_ added above. Here are some things to keep in mind:

You may need to designate the SRS for a layer if it can’t be read directly from the dataset. Your specify the _designated_ SRS using the standard EPSG:XXXX format. 

The EPSG code for `GCS_North_American_1983` is EPSG:4269

Question 3
:	Preview each of your added layers, using the _Layer Preview_ tool and the _Open Layers_ option to display the data. Include screen grabs of the previews in your write-up.



