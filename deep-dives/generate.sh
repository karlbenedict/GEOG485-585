#!/bin/bash

/usr/local/bin/pandoc --toc -c ../page.css --self-contained --standalone deep-dives.md -o deep-dives.html

/usr/local/bin/pandoc --toc -c ../page.css --standalone deep-dives.md -o deep-dives.linked.html

/usr/local/bin/pandoc --toc --latex-engine=xelatex --template ~/Dropbox/Active/Repos/Pandoc\ Templates/default_endFloat.latex --self-contained --standalone deep-dives.md -o deep-dives.pdf
