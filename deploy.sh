npx next build
npx next export
touch out/.nojekyll
rm -r docs
mv out docs
git add .
git commit -m \"deploy\"
git push