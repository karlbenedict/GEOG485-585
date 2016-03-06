#!/bin/bash

/usr/local/bin/pandoc --toc -c page.css --self-contained --standalone midterm.md -o midterm.html

/usr/local/bin/pandoc --toc -c page.css --standalone midterm.md -o midterm.linked.html

/usr/local/bin/pandoc --template default.latex --self-contained --standalone --latex-engine=xelatex midterm.md -o midterm.tex

/usr/local/bin/pandoc --template default.latex --self-contained --standalone --latex-engine=xelatex midterm.md -o midterm.pdf