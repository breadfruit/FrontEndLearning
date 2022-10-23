vuepress build docs

npm run build

cp -r ../../../.github ./

git config --global user.email "1845252982@qq.com"
git config --global user.name "breadfruit"
git init
git add -A
git commit -m 'deploy'


if git rev-parse --verify gh-pages; then
    git checkout  gh-pages
else
    git checkout -b  gh-pages

fi


git push -f git@github.com:breadfruit/FrontEndLearning.git gh-pages

cd -