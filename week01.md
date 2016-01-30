<!---------------------------------------------------------------------------->
<!-- Week 01 ----------------------------------------------------------------->
<!---------------------------------------------------------------------------->

# Week 1 - Introductions, Course Outline & Web Concepts # {#week01}

This week we will review the content and structure for the course and spend some time getting to know each other. Following this we will spend some time setting up some of the tools that you will be using for the course in developing your portfolio of materials. 

## Class Prep ## {#week01-prep}

* [Wikipedia article - History of the World Wide web](http://en.wikipedia.org/wiki/History_of_the_World_Wide_Web)

* [Lynda.com tutorials](http://www.lynda.com/SharedPlaylist/2b710369c9ec4d8c964467225c6610ad?org=unm.edu)

	* *Web Design Fundamentals*
		* Introduction
		* 1. Exploring Web Design
	* *Version Control for Everyone*
		* Introduction
		* 1. Introducing Version Control
		* 2. Version Control Basics
		* 3. Setting Up Your First Project 

## Reference Materials ## {#week01-reference}

[Class Syllabus](https://github.com/UNM-GEOG-485-585/class-materials/raw/master/syllabus.pdf)


## Weekly Milestone - Creating Your GitHub Repository and First Web Page## {#week01-milestone}

Developing content to go onto the web has evolved from a solitary effort to one where teams work together in developing components of larger web sites. These teams need to have a variety of tools to enable their work. Some of the most important tools enable code sharing with the team, and in projects based on the [Open Source](http://opensource.org/osd-annotated) software model the rest of the world. The [GitHub](https://github.com/) web platform uses the [Git](http://git-scm.com/) distributed [version control](http://en.wikipedia.org/wiki/Revision_control) system to enable sharing of code and hosting static web pages based on that shared code. 

You will be using a private [GitHub](http://github.com) repository to build your class portfolio during the course. If you would like to make your portfolio available publicly you can also use GitHub as the platform for providing that public access. Regardless of your decision about providing public access to your portfolio, you will learn how version control operates, and how to provide comments and keep notes on your work and comment on the work of others (this will be part of our peer review process).

While the work we do this and next week will be directly through the editor integrated into the GitHub system, you will eventually need to install a desktop application (such as the [SourceTree](https://www.sourcetreeapp.com/) application recommended for the class) that allows you to develop your web pages on your local computer and then update the files on the GitHub system when you want to share a new version. Also, you can't add things like images to your web pages until you are adding them to a local repository on your computer and then sending them GitHub.

For this milestone we will walk through the process of creating your repository in GitHub, creating your first web page, previewing that page on your local computer, changing the page, and updating the page on LoboGit. For this milestone we will do this as a manual process which we will streamline in the coming weeks. 

*Step 1* - Create Your GitHub Account and Portfolio Repository

For your work in this class you will build your portfolio within an organization ([https://github.com/UNM-GEOG-485-585](https://github.com/UNM-GEOG-485-585)) within GitHub that has been created for the class. The first step in the process of creating your portfolio is to create a new *repository* in GitHub within which you will put your portfolio materials for sharing within the class. Please follow the following steps to create your repository:

1. Go to the [GitHub homepage](https://github.com/) and follow the onscreen instructions for creating a new account. If you already have an account you can skip this step. 
2. Come to the front of the class and tell me your GitHub username so that I can add you to the organization and create your repository for you within the organization. 

*Step 2* - Create Your First Web Page

To create your first web page within your portfolio repository you need to first enter your repository, add a new file, modify its contents, and commit your modifications back to the repository to save your changes. 

1. Go to the class organization page (([https://github.com/UNM-GEOG-485-585](https://github.com/UNM-GEOG-485-585) - logging in if necessary) and click on your repository name in the list.
2. On the page that comes up listing the files in your repository, click the "New File" button above the list of files. 

![GitHub file creation/editor page](images/github_editor.png){width=70%}

3. Enter the name of the file that you are creating as "hello-world.html" 
4. Enter the following text into the text entry area under the filename field. 

~~~~ {.html .numberLines startFrom="1"}
<html>
	<head>
	</head>		
	<body>
		Hello World !!!
	</body>	
</html>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

5. Add a brief comment (such as "Created hello-world.html from provided text") in the first field under the "Commit new file" title. You can optionally add a more detailed description in the next field if you like. 
6. Keep the default option to "Commit directly to the master branch"
7. Click the "Commit New File" button to commit your change and save the file

*Step 3* - Preview Your Web Page in a Browser

While we will later discuss strategies for hosting your web content on a system (GitHub for example) that supports direct access by web clients, to preview the web page you just created you need to download the repository to your local computer where you can open the locally stored file in a browser. 

1. Go to the class organization page (([https://github.com/UNM-GEOG-485-585](https://github.com/UNM-GEOG-485-585) - logging in if necessary) and click on your repository name in the list.
2. On the page that comes up listing the files in your repository, click the "Download Zip" button above the list of files. You may be prompted to provide a download location - if not you will need to find the default download location. Often it is the "Downloads" folder in your home directory. 
3. Extract the contents of the downloaded .zip file using the appropriate utility program on your computer. On Macs and Windows computers this functionality is available through right-clicking on the file name in their respective file browsers. 
4. Once you have extracted the contents of the zip file open the `hello-world.html` file that you created in a web browser - typically if you double-click on the file it will open in your default browser. You can also open it from within your browser of choice by using the "Open File" (or similar) option in the browser's file menu. 
5. Confirm that the display resembles something like the following:

![Sample `hello-world.html` file when viewed in a web browser](images/hello-world.png){width=70%}

6. If the page does not appear as you like, edit it on GitHub and repeat 2-5 above until you see something like the sample figure. 

