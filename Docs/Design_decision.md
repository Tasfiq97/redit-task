# 📄 Decision Rationale Document

This document outlines the rationale behind the major technical and architectural decisions made during the development of the **Star Wars Character Explorer** application.

---

## 🧱 Project Structure

- **Client (Frontend)**: Built with **React + Vite** for fast development, responsive UI, and efficient rendering.
- **Server (Backend)**: Built with **Node.js + Express** to serve as a middleware layer that communicates with the SWAPI and handles business logic or data formatting.
- **Data Source**: [SWAPI.tech](https://swapi.tech/) is used as the authoritative source for Star Wars universe data.

---

## 🎯 Why This Stack?

### ✅ React

- Popular, well-supported library with a vast ecosystem.
- Component-based architecture helps organize UI cleanly.
- Pairs seamlessly with **Redux Toolkit** for global state management.

### ✅ Vite

- Lightning-fast dev server and build process.
- Simple configuration compared to Webpack.
- Supports modern JavaScript (ESModules, top-level await, etc.).

### ✅ Tailwind CSS

- Utility-first framework that speeds up styling.
- Easily customizable design system.
- Reduces the need for external CSS files.

### ✅ Framer Motion

- Adds smooth and modern animations.
- Integrates well with React components for transitions and interactions.

### ✅ Redux Toolkit

- Simplifies Redux setup with best practices.
- Useful for managing character list, search terms, loading states, etc.

---

## 🛠 Server-Side Middleware (Node.js + Express)

- Acts as a proxy between the frontend and the SWAPI to:
  - Avoid CORS issues.
  - Allow additional data transformation if needed.
  - Add caching or rate-limiting in the future.

### ✅ Axios

- Chosen for its simplicity and promise-based HTTP API.
- Easy to configure for global error handling and retries.

### ✅ CORS

- Included to explicitly allow cross-origin requests from the frontend during development.

---

## 🔍 Search Functionality

- The search is implemented in the **Node.js backend**, which queries the SWAPI using the search term.
- Helps filter character list in real-time, improving UX without excessive API calls.

---

## 🧪 Code Quality & Tooling

### ✅ ESLint

- Helps maintain code quality and consistency.
- Uses React and React Hooks plugins for best practices.

### ✅ Nodemon

- Auto-restarts server on code changes, improving development flow.

---

## 📁 Folder Structure Decisions

- `client/` and `server/` separation ensures clear boundary between frontend and backend.
- Components are organized by feature (e.g., `CharacterList`, `CharacterDetail`) to enhance modularity and maintainability.
- API calls are abstracted in a separate utility layer for better separation of concerns.

---

## ⚙️ Dev Experience

- Scripts like `dev`, `build`, and `preview` are added for a smooth workflow.
- Vite hot reloading and nodemon ensure fast iteration.

---

## 🛡️ Summary

Every decision was made with a balance of **developer efficiency**, **user experience**, and **code maintainability** in mind. The stack is modern, scalable, and easy to onboard for future contributors.
