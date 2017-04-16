#!/bin/bash

find . -name "lecture*.md" -exec /usr/local/bin/pandoc -c page.css --to=html5 --standalone  -o '{}'.html lectureXX.md '{}' \;

find . -name "lecture*.md" -exec /usr/local/bin/pandoc --slide-level 3 --filter pandoc-fignos -c slides.css -c slide_specific.css --self-contained --standalone -t dzslides -o '{}'.slides.html lectureXX.md '{}' \;

find . -name "lecture*.md" -exec /usr/local/bin/pandoc --slide-level 3 --filter pandoc-fignos -c slides.css -c slide_specific.css --standalone -t dzslides -o '{}'.slides_linked.html lectureXX.md '{}' \;

find . -name "lecture*.md" -exec /usr/local/bin/pandoc --template default.latex --latex-engine=xelatex  -o '{}'.pdf lectureXX.md '{}'  \;

/usr/local/bin/pandoc --toc -c page.css --filter pandoc-fignos --self-contained --standalone lecture*.md -o lecture_all.html

/usr/local/bin/pandoc --toc --filter pandoc-fignos --chapters --template default.latex --self-contained --standalone --latex-engine=xelatex lecture*.md -o lecture_all.pdf