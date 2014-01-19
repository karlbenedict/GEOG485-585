#!/bin/bash

pandoc --toc -c ../page.css --self-contained --standalone milestones.md -o milestones.html

pandoc --toc -c ../page.css --standalone milestones.md -o milestones.linked.html

pandoc --template ../../../Pandoc\ Templates/default_endFloat.latex --self-contained --standalone milestones.md -o milestones.pdf
