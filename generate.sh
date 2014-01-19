#!/bin/bash

/usr/local/bin/pandoc --toc -c page.css --self-contained --standalone GEOG485-585_syllabus.md -o GEOG485-585_syllabus.html

/usr/local/bin/pandoc --toc -c page.css --standalone GEOG485-585_syllabus.md -o GEOG485-585_syllabus.linked.html

/usr/local/bin/pandoc --template ~/Dropbox/Active/Repos/Pandoc\ Templates/default_endFloat.latex --self-contained --standalone GEOG485-585_syllabus.md -o GEOG485-585_syllabus.pdf