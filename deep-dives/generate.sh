#!/bin/bash

pandoc --toc -c ../page.css --self-contained --standalone deep-dives.md -o deep-dives.html

pandoc --toc -c ../page.css --standalone deep-dives.md -o deep-dives.linked.html

pandoc --template ../../../Pandoc\ Templates/default_endFloat.latex --self-contained --standalone deep-dives.md -o deep-dives.pdf
