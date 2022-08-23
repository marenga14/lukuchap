#!/usr/bin/env sh

set e

yarn run build

cd dist

git init
git add -A

git commit -m "another one"

git push -f https://github.com/marenga14/lukuchap.git master:gh-pages 

cd -