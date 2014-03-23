#!/bin/bash

/usr/local/bin/pandoc -c ../page.css --self-contained --standalone midterm.md -o midterm.html

/usr/local/bin/pandoc -c ../page.css --standalone midterm.md -o midterm.linked.html

/usr/local/bin/pandoc --latex-engine=xelatex --template ~/Dropbox/Active/Repos/Pandoc\ Templates/default_endFloat.latex --self-contained --standalone midterm.md -o midterm.pdf
