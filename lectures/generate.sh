#!/bin/bash

pandoc --slide-level 3 -c slides.css --self-contained --standalone -t dzslides geog485_sp2014_01.md -o geog485_sp2014_01.slides.html
pandoc --slide-level 3 -c slides.css --standalone -t dzslides geog485_sp2014_01.md -o geog485_sp2014_01.slides.linked.html

pandoc -c page.css --self-contained --standalone geog485_sp2014_01.md -o geog485_sp2014_01.html

pandoc -c page.css --standalone geog485_sp2014_01.md -o geog485_sp2014_01.linked.html

pandoc --template ../../../Pandoc\ Templates/default_endFloat.latex --self-contained --standalone geog485_sp2014_01.md -o geog485_sp2014_01.pdf