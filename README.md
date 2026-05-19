# AkuratAC Website

Профессиональный сайт для античита Minecraft.

## 🚀 Деплой на GitHub Pages

### Способ 1: Автоматический (рекомендуемый)

1. Залейте код в репозиторий GitHub
2. Перейдите в **Settings → Pages**
3. В разделе "Build and deployment" выберите:
   - Source: **GitHub Actions**
4. GitHub Actions автоматически соберет и задеплоит сайт при каждом push в main

### Способ 2: Ручной деплой

```bash
# Установка зависимостей
npm install

# Сборка статического сайта
npm run build

# Файлы будут в папке out/
# Добавляем файл для GitHub Pages
touch out/.nojekyll

# Заливаем папку out в ветку gh-pages
npx gh-pages -d out
```

## 🛠 Локальная разработка

```
npm run dev
```

Сайт будет доступен на `http://localhost:3000`

## 📁 Структура после сборки

После `npm run build` в папке `out/` будут статические файлы:

- `out/index.html` - главная страница
- `out/features/index.html` - страница возможностей
- `out/download/index.html` - страница загрузки
- `out/_next/static/` - CSS и JS файлы

## ⚠️ Важно для GitHub Pages

- В `next.config.mjs` добавлен `output: 'export'` для генерации статики
- Добавлен `.nojekyll` файл (через GitHub Actions или вручную)
- Все пути используют относительные ссылки
- Изображения используют `unoptimized: true`

## 🌐 Настройка кастомного домена

1. В репозитории перейдите в **Settings → Pages**
1. В поле "Custom domain" введите ваш домен
1. Добавьте CNAME запись в DNS:

- **Type**: CNAME
- **Name**: @ или www
- **Value**: [your-username.github.io](https://your-username.github.io)

Или создайте файл `out/CNAME` с вашим доменом внутри.

## 🎨 Технологии

- Next.js 14 (Static Export)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React Icons

## 📄 Лицензия

MIT