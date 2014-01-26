#!/bin/bash

# Week 01
/usr/local/bin/pandoc --slide-level 3 -c slides.css --self-contained --standalone -t dzslides geog485_sp2014_01.md -o geog485_sp2014_01.slides.html
/usr/local/bin/pandoc --slide-level 3 -c slides.css --standalone -t dzslides geog485_sp2014_01.md -o geog485_sp2014_01.slides.linked.html

/usr/local/bin/pandoc --toc -c ../page.css --self-contained --standalone geog485_sp2014_01.md -o geog485_sp2014_01.html
/usr/local/bin/pandoc --toc -c ../page.css --standalone geog485_sp2014_01.md -o geog485_sp2014_01.linked.html

/usr/local/bin/pandoc --template ~/Dropbox/Active/Repos/Pandoc\ Templates/default_endFloat.latex --self-contained --standalone geog485_sp2014_01.md -o geog485_sp2014_01.pdf

# Week 02
/usr/local/bin/pandoc --slide-level 3 -c slides.css --self-contained --standalone -t dzslides GEOG485_02.md -o GEOG485_02.slides.html
/usr/local/bin/pandoc --slide-level 3 -c slides.css --standalone -t dzslides GEOG485_02.md -o GEOG485_02.slides.linked.html

/usr/local/bin/pandoc --toc -c ../page.css --self-contained --standalone GEOG485_02.md -o GEOG485_02.html
/usr/local/bin/pandoc --toc -c ../page.css --standalone GEOG485_02.md -o GEOG485_02.linked.html

/usr/local/bin/pandoc --template ~/Dropbox/Active/Repos/Pandoc\ Templates/default_endFloat.latex --self-contained --standalone GEOG485_02.md -o GEOG485_02.pdf