#!/usr/bin/env bash
set -e
REPO="yangqingtaobeijing/us-sectors"
BRANCH="gh-pages"
npm run build
cd dist
git init
git checkout -b $BRANCH
git add -A
git commit -m "deploy: $(date '+%Y-%m-%d %H:%M:%S')"
git push -f "https://github.com/$REPO.git" $BRANCH:$BRANCH
cd ..
echo "✅ Deployed to https://yangqingtaobeijing.github.io/us-sectors/"
