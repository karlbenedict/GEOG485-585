#!/bin/bash

/usr/local/bin/pandoc --toc -c page.css --self-contained --standalone week*.md -o week_all.html

/usr/local/bin/pandoc --toc -c page.css --standalone week*.md -o week_all.linked.html

/usr/local/bin/pandoc --toc --template ../pandoc-templates/default.latex --self-contained --standalone week*.md -o week_all.pdf

