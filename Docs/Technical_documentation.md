# 📘 Technical Documentation

## 📌 Project Title: Workforce Management System

This is a full-stack application that allows users to explore characters from the Star Wars universe using the [SWAPI.tech](https://swapi.tech/) API. The application provides a visually appealing and intuitive interface for users to search and view character details such as their home world, movies, and species. It is built using a React frontend and a Node.js middleware backend.

## 🔧 Tech Stack

### **Frontend (Client)**

- React
- React Router
- Axios
- Tailwind CSS
- react-redux
- rtk query for state management

### **Backend (Server)**

- Node.js
- Express.js
- Axios
- Nodemon

---

## 🧱 Project Architecture

- /client --> Frontend React application
- /server --> Backend Express API
- /docs --> Project documentation

---

## 📁 Folder Structure

```bash
/client
  └── src
      ├── routes
      ├── components
      └── layouts
      ├── pages
      ├── hooks
      ├── context
      └── assets
      └── store

/server
  ├── routes
  ├── middleware
  └── utils

/docs
  ├── TECHNICAL_DOCUMENTATION.md
  ├── INSTALLATION_GUIDE.md
  ├── TEST_PLAN.md
  └── DESIGN_DECISIONS.md
```

## 🔐 Data Flow

- React client requests character data from the Node.js backend.

- Backend receives request and calls the SWAPI.tech API.

- Backend parses, optionally enriches, and forwards the response to the client.

- Client renders the information in a clean UI.

- The user can view details such as:

- Films
- Home World
- Species
- races

## 🌐 API Endpoints (Backend → Client)

GET /api/people # Fetch list of all characters
GET /api/people/:id # Fetch specific character details
GET /api/people/search?q= # Search characters by name
GET /api/planets/:id # fetch planets information
GET /api/species/:id # fetch specific species information
GET /api/films # fetch films information
GET /api/films/:id # fetch specific films information

## 🚀 Deployment (Optional Example)

Frontend: Deployed on Vercel

Backend: Hosted vercel

Environment Variables:

PORT=5000

SWAPI_BASE_URL=https://swapi.tech/api

## 📎 References

SWAPI Docs: https://swapi.tech/documentation

React Docs: https://reactjs.org/docs/getting-started.html

Express Docs: https://expressjs.com/

Tailwind: https://tailwindcss.com/
