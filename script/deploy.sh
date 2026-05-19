#!/bin/bash

# Скрипт для ручного деплоя на GitHub Pages

echo "📦 Building static site..."
npm run build

echo "📄 Adding .nojekyll file..."
touch out/.nojekyll

echo "🚀 Deploying to GitHub Pages..."
npx gh-pages -d out -b gh-pages

echo "✅ Deployed! Your site should be live in a few minutes."