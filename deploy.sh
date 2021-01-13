#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn build

# navigate into the build output directory
cd dist


git init
git add -A
git commit -m 'deploy to github pages'

git push -f git@github.com:lioruby/vue3-parallax.git master:gh-pages

cd -
