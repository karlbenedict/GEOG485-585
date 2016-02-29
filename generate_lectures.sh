#!/bin/bash

/usr/local/bin/pandoc --toc -c page.css --filter pandoc-fignos --self-contained --standalone lecture*.md -o lecture_all.html

/usr/local/bin/pandoc --toc -c page.css --filter pandoc-fignos --standalone lecture*.md -o lecture_all.linked.html

/usr/local/bin/pandoc --slide-level 3 --filter pandoc-fignos -c slides.css -c slide_specific.css --self-contained --standalone -t dzslides lecture*.md -o lecture_all.slides.html

/usr/local/bin/pandoc --slide-level 3 --filter pandoc-fignos -c slides.css -c slide_specific.css --standalone -t dzslides lecture*.md -o lecture_all.slides.linked.html

/usr/local/bin/pandoc --toc --filter pandoc-fignos --chapters --template default.latex --self-contained --standalone --latex-engine=xelatex lecture*.md -o lecture_all.pdf

