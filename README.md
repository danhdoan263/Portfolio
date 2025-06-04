# Portfolio – Danh Đoàn

A personal portfolio web application built with React, Vite, TypeScript and deployed on GitHub Pages. It features:

- A **Home** landing page with typing animation  
- An **About** section with a recursive tree-view explorer and dynamic tabbed content  
- Placeholder **Projects** and **Contact** pages  
- Fully responsive design using SCSS modules  
- Client-side routing via `react-router-dom` and **HashRouter** for GitHub Pages compatibility  

---

## Table of Contents

1. [Demo](#demo)  
2. [Tech Stack](#tech-stack)  
3. [Getting Started](#getting-started)  
4. [Available Scripts](#available-scripts)  
5. [Deployment](#deployment)  
6. [Project Structure](#project-structure)  
7. [Routing](#routing)  
8. [Styling](#styling)  
9. [Mock Data](#mock-data)  
10. [Contributing](#contributing)  

---

## Demo

Live site: https://danhdoan263.github.io/Portfolio/  

> The app uses **HashRouter** so refreshing any route won't return 404.

---

## Tech Stack

- Framework: React 19.1  
- Bundler: Vite  
- Language: TypeScript  
- Router: react-router-dom v7 (HashRouter)  
- Styling: SCSS Modules  
- Icons: Icomoon + custom `IconText` component  
- Deployment: GitHub Pages via `gh-pages`  

---

## Getting Started

1. **Clone the repo**  
   ```bash
   git clone https://github.com/danhdoan263/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**  
   ```bash
   yarn install
   # or
   npm install
   ```

---

## Available Scripts

- **`yarn dev`**  
  Run the development server at `http://localhost:5173`.

- **`yarn build`**  
  Create an optimized production build in `dist/`.

- **`yarn preview`**  
  Preview the production build locally.

- **`yarn deploy`**  
  Builds and publishes `dist/` to the `gh-pages` branch (via `gh-pages` package).

---

## Deployment

- The `vite.config.ts` uses  
  ```ts
  base: '/Portfolio'
  ```  
- `package.json` sets  
  ```json
  "homepage": "https://danhdoan263.github.io/Portfolio/"
  ```  
- A `public/404.html` redirect script ensures client-side routing works on GitHub Pages.

To publish:  
```bash
yarn build
yarn deploy
```

---

## Project Structure

```
├── public/
│   └── 404.html         // Redirect helper for SPA on GH-Pages
├── src/
│   ├── App.tsx          // Entry point
│   ├── main.tsx         // Uses HashRouter
│   ├── routes/
│   │   └── routes.tsx   // React Router config
│   ├── Layout/
│   │   └── MainLayout.tsx // Header, Footer, HomePage conditional
│   ├── pages/
│   │   ├── Home/        // HomePage with typing animation
│   │   ├── About/       // IconContainer + TabShowContent
│   │   ├── Projects/    // Placeholder
│   │   └── Contact/     // Placeholder
│   ├── components/
│   │   ├── IconContainer/ // Recursive tree view
│   │   ├── IconText/      // Icon + label
│   │   ├── TabShowContent/ // Dynamic tabs & content
│   │   └── Tab/            // Single tab component
│   ├── mock/
│   │   └── Data.ts       // DataMockup type + mock entries
│   ├── template/         // Header & Footer
│   │   └── MainLayout.tsx // Header, Footer, HomePage conditional
│   ├── styles/           // Global SCSS
│   └── icomoon/          // Icon font definitions
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## Routing

- Uses `HashRouter` (`/#/about`, `/#/projects`, etc.) to avoid 404 on refresh.  
- Root path (`/`) renders **Home**; nested paths render `About`, `Projects`, or `Contact` inside `MainLayout`.

---

## Styling

- **SCSS Modules** scoped per component (`styles.module.scss`).  
- Global variables and mixins in `src/styles/globalstyles.scss`.  
- Layout helpers (`@mixins Layout`, `@mixins CenterLayout`).  
- Responsive breakpoints for mobile.

---

## Mock Data

- Defined in `src/mock/Data.ts` as:
  ```ts
  export type DataMockup = {
    id: number;
    title: string;
    icon: string;
    color: string;
    content?: string;
    data?: DataMockup[];
  };
  ```
- `About` page reads this and renders a **recursive tree** of folders/files with **tabs** for file contents.

---

## Contributing

1. Fork the repo  
2. Create a feature branch (`git checkout -b feature/...`)  
3. Commit your changes (`git commit -m 'Add ...'`)  
4. Push to the branch (`git push origin feature/...`)  
5. Create a Pull Request

---

**Enjoy exploring the code and feel free to submit issues or improvements!**
