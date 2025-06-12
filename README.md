# Notes Manager 🗒️

A minimal yet feature-rich Notes Manager web app built with [Nuxt 3](https://nuxt.com), structured using Feature-Sliced Design (FSD).
Organize, view, and manage your notes with ease — in multiple languages, with settings and toasts, and even a shopping cart-like experience for selected notes.

**Live Demo:** [https://notes-manager-b334a.web.app/](https://notes-manager-b334a.web.app/)
**GitHub Repo:** [github.com/OGUMAN/notes-manager](https://github.com/OGUMAN/notes-manager)

---

## ✨ Features

* 🧠 FSD architecture with `nuxt-fsd` plugin
* 📦 Notes list with a cart for selected notes
* ➕ Create, delete, and manage notes with creation date
* 🌐 Multi-language support via `nuxt/i18n`
* 💅 Stylish UI with Vuetify 3
* 🧾 Toast notifications (e.g., success, error messages)
* ⚙️ Settings page for language and preferences
* 🖱️ Drag & drop support for reordering notes
* 📆 Note creation timestamps with `day.js`
* ☁️ Fully responsive & deployed to Firebase Hosting

---

## 🧱 Tech Stack

* **Nuxt 3** with TypeScript
* **Vuetify 3** for UI components
* **Pinia** for state management
* **vue-toastification** for notifications
* **VueUse** for composables
* **nuxt/i18n** for internationalization
* **day.js** for date formatting
* **SCSS** for styling
* **[nuxt-fsd](https://github.com/aabounegm/nuxt-fsd)** for scalable project structure

## 🚀 Getting Started

### Install dependencies

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

### Start development server

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

Open your browser at [http://localhost:3000](http://localhost:3000)

---

## 📦 Production

### Build the app

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

### Preview production build

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

More deployment info: [Nuxt Deployment Docs](https://nuxt.com/docs/getting-started/deployment)
