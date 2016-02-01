#!/bin/bash

/usr/local/bin/pandoc --toc -c page.css --self-contained --standalone lecture*.md -o lecture_all.html

/usr/local/bin/pandoc --toc -c page.css --standalone lecture*.md -o lecture_all.linked.html

/usr/local/bin/pandoc --slide-level 3 -c slides.css -c slide_specific.css --self-contained --standalone -t dzslides lecture*.md -o lecture_all.slides.html

/usr/local/bin/pandoc --slide-level 3 -c slides.css -c slide_specific.css --standalone -t dzslides lecture*.md -o lecture_all.slides.linked.html

/usr/local/bin/pandoc --toc --chapters --template ../pandoc-templates/default.latex --self-contained --standalone lecture*.md -o lecture_all.pdf

