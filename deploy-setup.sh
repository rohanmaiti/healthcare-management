#!/bin/bash

# Deployment helper script for Hospital Manager

echo "🏥 Hospital Manager Deployment Helper"
echo "====================================="

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check dependencies
echo "Checking dependencies..."
if ! command_exists node; then
    echo "❌ Node.js is not installed"
    exit 1
fi

if ! command_exists npm; then
    echo "❌ npm is not installed"
    exit 1
fi

echo "✅ Dependencies check passed"

# Backend setup
echo ""
echo "Setting up backend..."
cd backend

if [ ! -f "package.json" ]; then
    echo "❌ Backend package.json not found"
    exit 1
fi

echo "Installing backend dependencies..."
npm install

echo "✅ Backend setup complete"

# Frontend setup
echo ""
echo "Setting up frontend..."
cd ../frontend

if [ ! -f "package.json" ]; then
    echo "❌ Frontend package.json not found"
    exit 1
fi

echo "Installing frontend dependencies..."
npm install

echo "✅ Frontend setup complete"

# Environment check
echo ""
echo "Checking environment files..."

cd ..

# Check backend env files
if [ ! -f "backend/.env.development" ]; then
    echo "⚠️  Backend .env.development not found"
fi

if [ ! -f "backend/.env.production" ]; then
    echo "⚠️  Backend .env.production not found"
fi

# Check frontend env files
if [ ! -f "frontend/.env" ]; then
    echo "⚠️  Frontend .env not found"
fi

if [ ! -f "frontend/.env.production" ]; then
    echo "⚠️  Frontend .env.production not found"
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Update environment variables with your actual URLs"
echo "2. Deploy backend to Render"
echo "3. Update frontend .env.production with Render URL"
echo "4. Deploy frontend to Vercel (already configured)"
echo ""
echo "For development:"
echo "  Backend:  cd backend && npm run dev"
echo "  Frontend: cd frontend && npm run dev"
echo ""
echo "See DEPLOYMENT.md for detailed deployment instructions."
