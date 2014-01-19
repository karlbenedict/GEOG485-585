#!/bin/bash

/usr/local/bin/pandoc --toc -c ../page.css --self-contained --standalone milestones.md -o milestones.html

/usr/local/bin/pandoc --toc -c ../page.css --standalone milestones.md -o milestones.linked.html

/usr/local/bin/pandoc --template ~/Dropbox/Active/Repos/Pandoc\ Templates/default_endFloat.latex --self-contained --standalone milestones.md -o milestones.pdf
