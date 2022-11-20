#!/bin/bash
today=$(date)

JEKYLL_ENV="production" bundle exec jekyll build
cd ..
rm -vrf AugeNews/docs/
cp -vR AugeNewsBase/_site/ AugeNews/docs/ 
cd AugeNews
echo "augenews.lzart.com.br" > docs/CNAME
git add .
git commit -a -m "Deploy - $today"
git push
cd ..
cd AugeNewsBase
git add .
git commit -a -m "SYNC - $today"
git push
