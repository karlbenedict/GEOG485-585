#!/bin/bash

/usr/local/bin/pandoc -c ../page.css --self-contained --standalone final-exam.md -o final-exam.html

/usr/local/bin/pandoc -c ../page.css --standalone final-exam.md -o final-exam.linked.html

/usr/local/bin/pandoc --latex-engine=xelatex --self-contained --standalone final-exam.md -o final-exam.pdf
