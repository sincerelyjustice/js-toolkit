#!/bin/bash

set -e 

TEMP_TOOLKIT="../js-toolkit-temp"

cp -r dist "$TEMP_TOOLKIT"
cp package.json "$TEMP_TOOLKIT/package.json"

git checkout --orphan production
git rm -rf .

cp -r "$TEMP_TOOLKIT"/* .
rm -rf "$TEMP_TOOLKIT"

git config user.email "sincer3ly.justice@gmail.com"
git config user.name "sincerelyjustice"

git add -A
git commit -m "build"
git push origin HEAD:production --force