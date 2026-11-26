#!/bin/zsh
# usage: shoot.sh A-product-spotlight -> renders <folder>/index.html at 1440x900 @2x to <folder>/preview.png
# serve consepts/ on :8765 first (e.g. `python3 -m http.server 8765` from consepts/)
C=${0:A:h:h}; T=$(mktemp -d)
cd $T && Z=2 WAIT=3 $C/shot/frames "http://127.0.0.1:8765/$1/index.html" "f-" 2880 1800 3 "document.fonts.status" && mv f-0.png "$C/$1/preview.png"
