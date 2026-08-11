# 👥 React User Management Application

![React](https://img.shields.io/badge/React-19-blue?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat&logo=vite)
![React Router](https://img.shields.io/badge/React_Router-v7-CA4245?style=flat&logo=react-router)
![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen?style=flat)
![License](https://img.shields.io/badge/License-MIT-green?style=flat)

A full-featured, responsive User Management dashboard built with **React 19**, **Vite**, and **Tailwind / Custom CSS**. It supports complete CRUD (Create, Read, Update, Delete) operations, live API integration with JSONPlaceholder, and offline persistence using **LocalStorage**.

🚀 **Live Demo:** [https://mohdasifraza.github.io/react-user-management/](https://mohdasifraza.github.io/react-user-management/)

---

## ✨ Features

- 📱 **Responsive UI**: Clean and modern user interface optimized for desktop, tablet, and mobile views.
- 📋 **User List**: Display users in a clean table/card layout with details like name, email, phone, and company.
- ➕ **Add New User**: Form validation to create new user profiles.
- ✏️ **Edit User**: Update existing user details seamlessly.
- 🗑️ **Delete User**: Quick user removal with confirmation dialogs.
- 💾 **LocalStorage Integration**: Newly created and modified users persist locally in browser storage.
- 🔍 **User Details View**: Detailed profile view for individual users.

---

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Routing**: React Router v7 (`HashRouter` for GitHub Pages compatibility)
- **API Services**: Axios / Fetch API with REST endpoints (`JSONPlaceholder`)
- **Deployment**: GitHub Pages & GitHub Actions CI/CD

---

## 🚀 Getting Started Locally

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mohdasifraza/react-user-management.git
   cd react-user-management
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. Open `http://localhost:5173` in your browser.

---

## 📦 Production Build & Deployment

To generate the production build:
```bash
npm run build
```

To deploy to GitHub Pages manually:
```bash
npm run deploy
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
