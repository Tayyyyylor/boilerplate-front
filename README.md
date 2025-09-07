# Next.js Boilerplate (App Router)


To start the project do : npx fast-boilerplate-next-app@latest

A modern starter for building **Next.js App Router** applications with:

* 🌍 **i18n** (locale-based routing)
* 🌓 **Dark mode** via \[`next-themes`]
* ✨ **Prettier** (formatting) & **ESLint** (linting)
* 🎨 **Sass/SCSS** (modular styles)

## 🚀 Overview

This boilerplate provides a clean structure, coding conventions, and ready-to-use tools so you can ship faster and cleaner.

## 📦 Stack & Requirements

* **Next.js** 14+ (App Router)
* **React** 18+
* **Node.js** ≥ 18
* **Package manager**: npm, pnpm, or yarn


## 🧰 Package Manager Notes

This project is **npm-first** and ships with `package-lock.json`.

Contributors can use **pnpm** or **yarn** instead:

- Run `pnpm import` or `yarn import` to generate their own lockfile.  
- Remove `package-lock.json` locally once the new lockfile is created.

Scripts work the same:

For **CI/CD**, stick to **one package manager consistently**.

## ⚙️ Installation

```bash
# Clone
git clone <your-repo-url> my-app && cd my-app

# Install dependencies
npm install   # or pnpm install / yarn
```

## 🏁 Quick Start

```bash
# Dev
npm dev       # http://localhost:3000

# Build & start
npm build
npm start
```

## 🧭 Routing & i18n

* App Router with locale segments: `/(fr)`, `/(en)`, etc.
* Locale detection/redirect via middleware.
* Translation files per locale (e.g., `messages/fr.json`, `messages/en.json`).


## 🌓 Theme (next-themes)

* Light/dark toggle + system preference.
* CSS class applied on `<html>` (e.g. `class="dark"`).


## 🎨 Styles (Sass)

* Global styles: `globals.scss`
* SCSS modules: `Component.module.scss`

## 🧹 Code Quality

* **ESLint**: Next.js + React + import + TypeScript rules (if enabled).
* **Prettier**: consistent formatting (integrate with pre-commit CI if needed).

**Useful scripts**

```bash
npm lint       # Lint code
npm prettier     # Run Prettier
```

