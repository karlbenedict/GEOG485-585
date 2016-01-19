<!---------------------------------------------------------------------------->
<!-- Week 02 ----------------------------------------------------------------->
<!-- Lecture 02 a 01 --------------------------------------------------------->
<!-- Web-based Mapping Clients------------------------------------------------>
<!-- Introduction to HTML, CSS and Javascript--------------------------------->
<!---------------------------------------------------------------------------->

# Week 2 - Module 2a - Web-based Mapping Clients: HTML, CSS & Javascript # {#week02}

This week we will begin to build our foundation for developing material to be shared over the Internet via the World Wide Web. In particular we will cover the basic process of web development, define the parts of a web page, and spend some time learning about the different *languages* and define the key components of a web page: its structure, presentation, and behavior. 

The presentation of information over the Internet is dependent upon the use of standards that have been developed for defining the *structure*, *presentation*, and *behavior* of content. This week we will begin working with the key technologies that define these three components of web content. 

These concepts will be illustrated through reference to several simple web pages which are progressively modified to integrate all three of these components. 


*Expected Outcomes*

By the end of this class module you should understand the following:

* The basic process of web development

* The parts of a web page

* The role of the three web page components: *structure*, *presentation*, and *behavior*

* Be able to write your own basic web page with your own content and make it available over the web


*Key Concepts*

* Parts of a web page

* Structure = X/HTML

* Presentation = CSS

* Behavior = Javascript

* Iterative Development 


## Class Prep ## {#week02-prep}

* [Lynda.com tutorials](http://www.lynda.com/SharedPlaylist/2b710369c9ec4d8c964467225c6610ad?org=unm.edu)

	* *Web Design Fundamentals*
		* 3. Getting Started
		* 4. Getting Started
	* *Version Control for Everyone*
		* 5. Basic Project Sharing
		* Conclusion

*  Duckett, Jon, and Larsen, Rob. *Beginning HTML and CSS*. Somerset, NJ, USA: John Wiley & Sons, 2013. ProQuest ebrary. Web. 28 December 2015. This book is available online through the [University Library](http://site.ebrary.com.libproxy.unm.edu/lib/unma/detail.action?docID=10667426) - Chapters 1, 7, 10


## Reference Materials ## {#week02-reference}

*  Duckett, Jon, and Larsen, Rob. *Beginning HTML and CSS*. Somerset, NJ, USA: John Wiley & Sons, 2013. ProQuest ebrary. Web. 28 December 2015. This book is available online through the [University Library](http://site.ebrary.com.libproxy.unm.edu/lib/unma/detail.action?docID=10667426) - Chapters 2,3,4 and 8

* [Lynda.com tutorials](http://www.lynda.com/SharedPlaylist/2b710369c9ec4d8c964467225c6610ad?org=unm.edu)

	* *CSS Fundamentals*
	* *Javascript for Web Designers*



## Weekly Milestone - Create a More Complex Web Page and Style It ## {#week02-milestone}

This week’s milestone activity takes you through the process of creating two more web pages in preparation for next week’s work with the Google Maps API in developing your first web mapping page. These pages will be:

1. A *home page* for your portfolio that will be the access point for all of the materials you create ([template](https://github.com/UNM-GEOG-485-585/class-materials/blob/master/sample-files/homePageTemplate.html){target="_blank"}/[preview](http://htmlpreview.github.io/?https://github.com/UNM-GEOG-485-585/class-materials/blob/master/sample-files/homePageTemplate.html){target="_blank"}), and

2. Your first web page containing materials related to this *milestone* assignment ([template](https://github.com/UNM-GEOG-485-585/class-materials/blob/master/sample-files/assignmentTemplate.html){target="_blank"}/[preview](http://htmlpreview.github.io/?https://github.com/UNM-GEOG-485-585/class-materials/blob/master/sample-files/assignmentTemplate.html){target="_blank"}).  


*Step 1* - Open the *home page* [template](https://github.com/UNM-GEOG-485-585/class-materials/blob/master/sample-files/assignmentTemplate.html){target="_blank"} linked above in your web browser and open the [preview](http://htmlpreview.github.io/?https://github.com/UNM-GEOG-485-585/class-materials/blob/master/sample-files/assignmentTemplate.html){target="_blank"} in a second tab or window so that you can view both at the same time. 

*Step 2* - Copy the code in the home page [template](https://github.com/UNM-GEOG-485-585/class-materials/blob/master/sample-files/assignmentTemplate.html){target="_blank"} into a new text file named `index.html` on your computer. 

*Step 3* - Open the *milestone* assignment [template](https://github.com/UNM-GEOG-485-585/class-materials/blob/master/sample-files/assignmentTemplate.html){target="_blank"} linked above.

*Step 4* -  Copy the code in the template into a new text file named `milestone_02.html` on your copmuter. 

*Step 5* - After you have saved the `index.html` and `milestone_02.html` files to your hard drive open them up in your browser to see what they look like when read through a web browser.  


*Step 6* - Add your responses to the following questions to the `milestone_02.html` document.  - note: it is a good practice when you are developing a web page to make small changes, save them, and preview the page to make sure that you have not made an error in your code before adding the next item. Practice this by adding each answer, saving your page and previewing it and correcting any errors in your code before going onto the next question. 

Question 1
:	From examining the display of `index.html` in your web browser and the structure of the source code in the page, what effect (if any) does the white space (i.e. tabs, blank lines, multiple spaces) have on what is displayed in the browser?


Question 2
:  How are the 

		<h1>
and 

		<h2> 

elements from the source code displayed differently in the browser?

Question 3
:	What type of element would you use to create additional list elements in either the “topic” or “data type” (`<ul>`) lists on the page.

*Step 7* - Flesh out the `index.html` page that you created above (*Step 2*) with information specific to you based upon the content areas in the page. After making sure that your `index.html` and `milestone_02.html` are in the same directory, add a *relative* link to your `milestone_02.html` file to the "milestones" section of your `index.html` page by modifying the line

	<p><a href="">Milestone 2</a></p>

to look like this

	<p><a href="milestone_02.html">Milestone 2</a></p>

Save your change and test it in the browser by clicking the link on your `index.html` page in the browser. If it successfully opens your `milestone_02.html` page you have properly built your link. 

*Step 8* - Copy your `hello-world.html` file from *Milestone 1* into the same directory as your `index.html` file and modify the existing line in your `index.html` file

	<p><a href="">Hello World</a></p>

to link to your `hello-world.html` file (follow the same pattern you used in *Step 7* above). 

*Step 8* - Make a copy of your `index.html` page by copying the content of the page and pasting it into a new document named `index_styled.html`.

Experiment with some of the styling capabilities described in Dave Raggett’s “Adding a Touch of Style” page (<http://www.w3.org/MarkUp/Guide/Style.html>) on `index_styled.html` page you created above. Make at least three stylistic changes to the `index_styled.html` page. Add a link to your `index_styled.html` page to your home page (`index.html`) under the `milestones` section. 

*Step 9* - Transfer your created files `index.html`, `milestone_02.html`, and `index_styled.html` to your GitHub repository (created in *Milestone 1*). Of course you could do this by copying and pasting the content of your files into corresponding files in GitHub (but that would not be very efficient or satisfying), but you should probably experiment with [SourceTree](https://www.sourcetreeapp.com/) as demonstrated in this week's Lynda.com video tutorial as a way to work locally and transfer your files to GitHub for remote access and sharing.  



<!-- ## Deep Dive - ## {#week02-deepDive} -->

<!-- ## Peer Review - ## {#week02-peerReview} -->



