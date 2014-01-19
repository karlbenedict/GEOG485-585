#!/bin/bash

pandoc --toc -c ../page.css --self-contained --standalone goalsAndObjectives.md -o goalsAndObjectives.html

pandoc --toc -c ../page.css --standalone goalsAndObjectives.md -o goalsAndObjectives.linked.html

pandoc --template ../../../Pandoc\ Templates/default_endFloat.latex --self-contained --standalone goalsAndObjectives.md -o goalsAndObjectives.pdf
