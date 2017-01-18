#!/bin/bash

#/usr/local/bin/pandoc --toc --filter pandoc-fignos -c page.css --self-contained --standalone week*.md -o week_all.html

#/usr/local/bin/pandoc --filter pandoc-fignos --toc -c page.css --standalone week*.md -o week_all.linked.html

#/usr/local/bin/pandoc --toc --filter pandoc-fignos --chapters --template default.latex --self-contained --standalone week*.md -o week_all.pdf
#/usr/local/bin/pandoc --toc --filter pandoc-fignos --chapters --template default.latex --self-contained --standalone week*.md -o week_all.tex

find . -name "week*.md" -exec /usr/local/bin/pandoc -c page.css --to=html5 --standalone  -o '{}'.html weekXX.md '{}'  \;

find . -name "week*.md" -exec /usr/local/bin/pandoc --template default.latex --latex-engine=xelatex  -o '{}'.pdf weekXX.md '{}' \;


/usr/local/bin/pandoc --toc  -c page.css  --to=html5 --self-contained --standalone week*.md -o week_all.html

/usr/local/bin/pandoc --toc -c page.css  --to=html5 --standalone week*.md -o week_all.linked.html

/usr/local/bin/pandoc --toc  --chapters --template default.latex --self-contained --standalone week*.md -o week_all.pdf --latex-engine=xelatex

