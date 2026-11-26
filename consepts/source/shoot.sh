#!/bin/zsh
# usage: shoot.sh name  -> renders name.html at 1440x900 @2x to out/name.png
S=${0:A:h}; mkdir -p $S/out
cd $S/out && Z=2 WAIT=3 $S/../shot/frames "http://127.0.0.1:8765/$1.html" "$1-" 2880 1800 3 "document.fonts.status" && mv "$1-0.png" "$1.png"
