# 🔐 JWT Role-Based Authentication System

> A full-stack role-based authentication system with JWT — separate dashboards for Admin, Manager and User roles.

![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white) ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white) ![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white) ![JWT](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white) ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

**🔗 Live Demo:** [jwt-project-alpha.vercel.app](https://jwt-project-alpha.vercel.app)

## 📖 Overview

This project demonstrates secure, production-style authentication and authorization in the MERN stack. Users register and log in, passwords are hashed with bcrypt, and every protected API request is verified with a JSON Web Token. Access is controlled by role, so Admins, Managers and Users each see their own dashboard and data.

## ✨ Features

- **Register & login** with bcrypt password hashing
- **JWT-based authentication** with protected API routes via middleware
- **Role-based access control (RBAC)** — Admin, Manager and User roles
- **Role-specific dashboards** on the front end
- **Admin and sales API routes** guarded by role checks
- Auth state managed with React Context and higher-order components
- Clean MVC structure — config, controllers, middleware, models, routes

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| Frontend | React, Vite, React Router, Context API, Axios |
| Backend | Node.js, Express, Mongoose |
| Database | MongoDB |
| Security | JWT, bcryptjs, CORS |

## 📁 Project Structure

```
jwt-project/
├── backend/
│   ├── config/        # Database connection
│   ├── controllers/   # auth, sales
│   ├── middleware/    # JWT verification & role guards
│   ├── models/
│   ├── routes/        # auth, admin, sales
│   └── server.js
└── frontend/
    └── src/
        ├── components/
        ├── context/       # Auth context
        ├── hoc/           # Route protection
        ├── services/      # API calls
        └── pages/         # Login, Register, Admin/Manager/User dashboards
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- A MongoDB database (local or MongoDB Atlas)

### Installation

```bash
git clone https://github.com/Bhargav9334/jwt-project.git
cd jwt-project
# Backend
cd backend
npm install
node server.js

# Frontend (in a new terminal)
cd frontend
npm install
npm run dev
```

## 🔐 Environment Variables

Create a `.env` file in `backend/`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

> Never commit `.env` files — keep them listed in `.gitignore`.

## 👤 Author

**Bhargav Sinha** — Software Engineer · Full-Stack MERN Developer

- GitHub: [@Bhargav9334](https://github.com/Bhargav9334)
- Portfolio: [bhargavsinha.vercel.app](https://bhargavsinha.vercel.app)
- Email: bhargavsinha93@gmail.com

If you found this project useful, consider giving it a ⭐
