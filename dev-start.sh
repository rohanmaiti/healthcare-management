#!/bin/bash

# Development startup script
echo "🚀 Starting Hospital Manager in Development Mode..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "📦 Installing backend dependencies..."
cd backend && npm install

echo "📦 Installing frontend dependencies..."
cd ../frontend && npm install

echo "🎯 Starting backend server..."
cd ../backend
npm run dev &
BACKEND_PID=$!

echo "🎯 Starting frontend server..."
cd ../frontend
npm run dev &
FRONTEND_PID=$!

echo "✅ Development servers started!"
echo "🔗 Frontend: http://localhost:3001"
echo "🔗 Backend: http://localhost:4000"
echo "🔗 API: http://localhost:4000/api"
echo ""
echo "Press Ctrl+C to stop both servers"

# Wait for interrupt signal
trap "kill $BACKEND_PID $FRONTEND_PID; exit" INT
wait
