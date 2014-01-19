#!/bin/bash

export PATH=${PATH}:/usr/texbin
cd ~/Dropbox/Active/Repos/Teaching/GEOG485-585

# Syllabus
./generate.sh

# deep-dives
cd ./deep-dives
./generate.sh
cd ..

# goalsAndObjectives
cd ./goalsAndObjectives
./generate.sh
cd ..

# lectures
cd ./lectures
./generate.sh
cd ..

# milestones 
cd ./milestones
./generate.sh
cd ..

