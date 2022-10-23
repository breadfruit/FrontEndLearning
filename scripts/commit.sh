vuepress build docs

npm run build

cp -r ../../../.github ./

git config --global user.email "1845252982@qq.com"
git config --global user.name "breadfruit"
git init
git add -A
git commit -m 'deploy'


localBranch=$(git branch gh-pages |awk '{print $2}')
if [ -n "localBranch" ]; then
    echo "存在该分支，并不进行创建"
else
    echo "该分支不存在"
fi


git push -f git@github.com:breadfruit/FrontEndLearning.git gh-pages

cd -