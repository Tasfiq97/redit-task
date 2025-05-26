# 🧪 QA / Test Plan

This document outlines the testing strategy for the **Star Wars Character Explorer** application. It covers the test scope, types of testing, tools, and key scenarios to ensure the application meets quality standards.

---

## ✅ Scope of Testing

The goal is to validate the functionality, performance, usability, and integration of the following:

- **React Frontend UI**
- **Node.js Express Middleware**
- **Communication with SWAPI**
- **Search functionality**

---

## 🧪 Types of Testing

| Type                | Description                                         |
| ------------------- | --------------------------------------------------- |
| Functional Testing  | Ensures each feature works as expected              |
| Integration Testing | Tests flow between frontend ↔ middleware ↔ SWAPI    |
| UI/UX Testing       | Validates layout, accessibility, and responsiveness |
| API Testing         | Validates middleware endpoints                      |

---

## 🛠 Tools Used

- **Manual testing** in browser
- **Browser dev tools** (console/network)

---

## 🔍 Test Scenarios

### 1. Home Page

| Test Case              | Expected Result                      |
| ---------------------- | ------------------------------------ |
| Loads home page        | App renders without error            |
| Display character list | Character cards are shown from SWAPI |
| Pagination             | Characters continue to load smoothly |

---

### 2. Search Feature

| Test Case                     | Expected Result                           |
| ----------------------------- | ----------------------------------------- |
| Typing valid character name   | Filters or displays correct results       |
| Typing invalid character name | Shows "not found" message or empty result |
| Empty search input            | Shows full list or placeholder message    |

---

### 3. Character Detail Page

| Test Case                       | Expected Result                               |
| ------------------------------- | --------------------------------------------- |
| Character name, homeworld, race | Data is displayed correctly                   |
| Movie appearances               | All movies listed correctly                   |
| Loading/error states            | Proper spinners or messages shown when needed |

---

### 4. Middleware/API Integration

| Test Case            | Expected Result                                |
| -------------------- | ---------------------------------------------- |
| GET /characters      | Returns list of characters from SWAPI          |
| GET /characters/:id  | Returns details of selected character          |
| Handles API failures | Responds with 5xx and error message gracefully |

---

## 🧯 Edge Cases to Cover

- Network failure or SWAPI downtime
- Very long or short character names
- Character with missing or null fields
- Repeated rapid searches

---

## 👤 Tested By

- Cross-browser tested on Chrome and Firefox

---
