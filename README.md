# Dora AI — AI Website Builder

Dora AI is a web application concept for building responsive websites with the help of AI. The project includes a React-based frontend, an Express backend, MongoDB connectivity, and Google sign-in infrastructure.

## Features

- **AI website builder landing page** with a dark, responsive interface and animated elements.
- **User authentication flow** using Firebase Google authentication on the frontend and an Express API for user records and session cookies.
- **User state management** with Redux Toolkit and Redux Persist.
- **Credits and pricing navigation** in the user interface.
- **MongoDB integration** through Mongoose.
- **Responsive styling** using Tailwind CSS.
- **Client-side routing** with React Router.

> **Project status:** The repository contains the landing page, pricing page placeholder, and authentication scaffolding. The website-generation workflow and some linked pages (such as dashboard/generate) may still need implementation.

## Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- React Router
- Redux Toolkit and Redux Persist
- Firebase Authentication
- Axios
- Motion animations
- Lucide icons

### Backend
- Node.js
- Express
- MongoDB and Mongoose
- JSON Web Token (JWT)
- Cookie Parser
- CORS
- dotenv
- Nodemon

## Project Structure

```text
web-Ai-main/
├── backend/
│   ├── controllers/
│   │   └── authController.js
│   ├── database/
│   │   └── db.js
│   ├── models/
│   │   └── userModel.js
│   ├── routes/
│   │   └── authRoutes.js
│   ├── index.js
│   └── package.json
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── LoginModal.jsx
    │   │   └── Navbar.jsx
    │   ├── pages/
    │   │   ├── Home.jsx
    │   │   └── Pricing.jsx
    │   ├── redux/
    │   │   ├── store.js
    │   │   └── userSlice.js
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    ├── firebase.js
    └── package.json
```

## Prerequisites

Install the following before running the project:

- Node.js (LTS recommended)
- npm
- A MongoDB database (local MongoDB or MongoDB Atlas)
- A Firebase project with Google sign-in configured

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd web-Ai-main
```

### 2. Configure the backend

```bash
cd backend
npm install
```

Create a `backend/.env` file:

```env
PORT=8000
MONGO_URL=your_mongodb_connection_string
SECRET_KEY=replace_with_a_long_random_secret
```

Do not commit `.env` files or share database credentials or JWT secrets publicly.

### 3. Configure the frontend

Open a new terminal:

```bash
cd frontend
npm install
```

Create a `frontend/.env` file:

```env
VITE_SERVER_URL=http://localhost:8000
VITE_FIREBASE_API_KEY=your_firebase_web_api_key
```

Use the Firebase web configuration for your own Firebase project and enable Google as a sign-in provider in the Firebase console.

### 4. Start the backend

From the `backend` directory:

```bash
npm run dev
```

The API will run at `http://localhost:8000` when `PORT=8000` is configured.

### 5. Start the frontend

From the `frontend` directory:

```bash
npm run dev
```

Vite will print the local development URL in the terminal, usually `http://localhost:5173`.

## API Endpoints

The backend mounts authentication routes under `/api/auth`.

| Method | Endpoint | Purpose |
|---|---|---|
| `POST` | `/api/auth/google` | Creates or finds a user using the supplied `name`, `email`, and `avatar`, then issues a JWT in an HTTP-only cookie. |
| `GET` | `/api/auth/logout` | Clears the authentication cookie. |

The Google authentication endpoint currently expects user details in the request body. Ensure the frontend authentication flow sends the expected payload and that authentication errors are handled appropriately.

## Available Scripts

### Frontend

Run these commands from `frontend/`:

| Command | Description |
|---|---|
| `npm run dev` | Starts the Vite development server. |
| `npm run build` | Creates a production build. |
| `npm run preview` | Previews the production build locally. |
| `npm run lint` | Runs ESLint. |

### Backend

Run these commands from `backend/`:

| Command | Description |
|---|---|
| `npm run dev` | Starts the Express server with Nodemon. |

## Configuration Notes

- The backend CORS configuration currently allows `http://localhost:5173`. Update it for your deployed frontend domain.
- Cookie settings currently use `secure: true` and `sameSite: "none"`, which are generally intended for HTTPS deployments. For local HTTP development, configure cookies appropriately for your environment.
- Keep the frontend server URL and backend port in sync.
- Never put MongoDB credentials or JWT secrets in frontend environment variables. Variables prefixed with `VITE_` are exposed to browser code.
- The Firebase API key is used by the frontend; secure your Firebase project with appropriate Firebase Authentication and API restrictions.

## Current Limitations / Next Steps

- Implement and connect the website-generation workflow.
- Build the dashboard and generation pages referenced by the UI.
- Complete the pricing and credit-purchase flow.
- Add authentication middleware to verify JWTs on protected endpoints.
- Add input validation and more robust error handling.
- Review dependencies and ensure every imported package is declared in `package.json`.
- Add tests and deployment instructions.
