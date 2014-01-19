#!/bin/bash

pandoc --toc -c page.css --self-contained --standalone GEOG485-585_syllabus.md -o GEOG485-585_syllabus.html

pandoc --toc -c page.css --standalone GEOG485-585_syllabus.md -o GEOG485-585_syllabus.linked.html

pandoc --template ../../Pandoc\ Templates/default_endFloat.latex --self-contained --standalone GEOG485-585_syllabus.md -o GEOG485-585_syllabus.pdf