# ⭐ Star Wars Character Explorer — Frontend

This is the frontend of the **Star Wars Character Explorer** application, built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**. The UI allows users to explore characters from the Star Wars universe and view related details such as movies, homeworld, and species. It communicates with a backend middleware service to fetch data from the [SWAPI.tech](https://swapi.tech/) API.

### 🔍 Key Features

- Search characters by name
- View character details (films, planet, species)
- Smooth animations and transitions
- Fully responsive and mobile-friendly UI
- Integrated with a Node.js backend for data fetching

This app is designed to be fast, modern, and intuitive, offering a seamless browsing experience for fans of the Star Wars universe.

# 🛰️ Star Wars Character Explorer — Backend (Middleware)

This is the backend middleware service for the **Star Wars Character Explorer** application. Built with **Node.js** and **Express**, it acts as an intermediary between the frontend client and the [SWAPI.tech](https://swapi.tech/) API.

### 🔧 Responsibilities

- Handle character search requests
- Fetch and format data from SWAPI
- Prevent direct API calls from the frontend (avoids CORS issues)
- Future-ready for caching, logging, or additional middleware logic

The backend helps centralize and control data flow, improve maintainability, and enhance the flexibility of the overall application.
