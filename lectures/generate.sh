#!/bin/bash

echo
echo "Generating Lecture Materials"
date

cat *.md > ../GEOG485compositeLectures.md

echo "Lecture slides.html";find . -iname "*.md" | sort -r | xargs -I \{\} /usr/local/bin/pandoc --slide-level 3 -c slides.css -c slidesSpecific.css --self-contained --standalone -t dzslides \{\} -o \{\}.slides.html
echo "Lecture slides.linked.html";find . -iname "*.md" | sort -r | xargs -I \{\} /usr/local/bin/pandoc --slide-level 3 -c slides.css -c slidesSpecific.css --standalone -t dzslides \{\} -o \{\}.slides.linked.html
echo "Lecture webpage.html";find . -iname "*.md" | sort -r | xargs -I \{\} /usr/local/bin/pandoc --toc -c ../page.css --self-contained --standalone \{\} -o \{\}.html
echo "Lecture webpage.linked.html";find . -iname "*.md" | sort -r | xargs -I \{\} /usr/local/bin/pandoc --toc -c ../page.css --standalone \{\} -o \{\}.linked.html
echo "Lecture PDF";find . -iname "*.md" | sort -r | xargs -I \{\} /usr/local/bin/pandoc --toc --template ~/Dropbox/Active/Repos/Pandoc\ Templates/default_endFloat.latex --latex-engine=xelatex --self-contained --standalone \{\} -o \{\}.pdf

echo "Composite Lecture Notes"
/usr/local/bin/pandoc --toc -c ../page.css --self-contained --standalone ../GEOG485compositeLectures.md -o ../GEOG485compositeLectures.md.html
/usr/local/bin/pandoc --toc --template ~/Dropbox/Active/Repos/Pandoc\ Templates/default_endFloat.latex --latex-engine=xelatex --self-contained --standalone ../GEOG485compositeLectures.md -o ../GEOG485compositeLectures.md.pdf

# find . -iname "*.md" -exec /usr/local/bin/pandoc --slide-level 3 -c slides.css -c slidesSpecific.css --self-contained --standalone -t dzslides \{\} -o \{\}.slides.html \;
# find . -iname "*.md" -exec /usr/local/bin/pandoc --slide-level 3 -c slides.css -c slidesSpecific.css --standalone -t dzslides \{\} -o \{\}.slides.linked.html \;
# find . -iname "*.md" -exec /usr/local/bin/pandoc --toc -c ../page.css --self-contained --standalone \{\} -o \{\}.html \;
# find . -iname "*.md" -exec /usr/local/bin/pandoc --toc -c ../page.css --standalone \{\} -o \{\}.linked.html \;
# find . -iname "*.md" -exec /usr/local/bin/pandoc --toc --template ~/Dropbox/Active/Repos/Pandoc\ Templates/default_endFloat.latex --latex-engine=xelatex --self-contained --standalone \{\} -o \{\}.pdf \;
# 

date
echo
