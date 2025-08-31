# Hospital Management System

A full-stack MERN application for hospital management.

## 🚀 Quick Start

### Development Setup

1. **Clone and Setup**
   ```bash
   git clone <your-repo-url>
   cd hospital_manager
   ./dev-start.sh
   ```

2. **Manual Setup**
   ```bash
   # Backend
   cd backend
   npm install
   npm run dev

   # Frontend (in another terminal)
   cd frontend
   npm install
   npm run dev
   ```

## 🌐 Environment Configuration

### Development URLs
- **Frontend**: http://localhost:3001
- **Backend**: http://localhost:4000
- **API**: http://localhost:4000/api

### Environment Files

#### Backend
- `.env.development` - Development environment
- `.env.production` - Production environment

#### Frontend
- `.env` - Development environment (default)
- `.env.production` - Production environment

## 📝 Available Scripts

### Backend
```bash
npm run dev        # Start development server
npm start          # Start production server
```

### Frontend
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run build:prod # Build for production (explicit)
npm run preview    # Preview production build
```

## 🔧 Configuration

### Backend Environment Variables
```bash
PORT=4000
NODE_ENV=development
JWT_SECRET=your-jwt-secret
MONGO_URI=your-mongodb-uri
FRONTEND_URL=http://localhost:3001
BACKEND_URL=http://localhost:4000
```

### Frontend Environment Variables
```bash
VITE_API_BASE_URL=http://localhost:4000/api
VITE_APP_ENV=development
```

## 🚀 Production Deployment

1. **Update Environment Variables**
   - Update `backend/.env.production` with production URLs
   - Update `frontend/.env.production` with production API URL

2. **Build and Deploy**
   ```bash
   # Frontend
   cd frontend
   npm run build:prod

   # Backend
   cd backend
   npm start
   ```

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, Vite, Tailwind CSS
- **Backend**: Node.js, Express, MongoDB
- **Authentication**: JWT, bcrypt
- **State Management**: Redux Toolkit