#!/bin/bash

/usr/local/bin/pandoc --toc -c page.css --self-contained --standalone syllabus.md -o syllabus.html

/usr/local/bin/pandoc --toc -c page.css --standalone syllabus.md -o syllabus.linked.html

/usr/local/bin/pandoc --template default.latex --self-contained --standalone syllabus.md -o syllabus.pdf