# 🛠 Installation Guide

This document provides a step-by-step guide to installing and running the **Star Wars Character Explorer** application.

---

## 📁 Project Structure

```bash
/
├── client # React frontend built with Vite
└── server # Node.js backend using Express
```

---

## ✅ Prerequisites

Make sure you have the following installed globally:

- **Node.js** (v18+ recommended)
- **npm** or **yarn**
- **Git** (optional, for cloning the repository)

---

## 🚀 Setup Instructions

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd <your-repo-folder>
```

## 🖥️ Frontend (Client)

Navigate to the client folder

```bash
cd client
```

## Install dependencies

```bash
npm install

```

## Start the development server

```bash
npm run build

```

## Build for production

```bash
npm run build
```
## 🧱 Packages Used
### Package	                         Purpose
react, react-dom	             Core UI framework
react-router-dom	              Routing between pages
@reduxjs/toolkit, react-redux	     State management
tailwindcss, @tailwindcss/vite	   Styling and utility classes
framer-motion	                        Animations
vite	                                Build tool
eslint, eslint-plugin-*	           Code linting & quality

## 🖥️ Backend (Server)

```bash
cd ../server

```

## Install dependencies

```bash
npm install

```

## 🔌 Backend Packages Used
### Package	                        Purpose
express	                      Handles backend routes and middleware
axios                        	Used for HTTP requests to SWAPI
cors	                 Enables Cross-Origin Resource Sharing
nodemon	                      Auto-restarts server during development

## ✅ Final Checklist
 Frontend running on http://localhost:5173

 Backend running on http://localhost:5000

 Requests from frontend are routed via backend

 Search and character detail features work correctly