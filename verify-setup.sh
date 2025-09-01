#!/bin/bash

# Quick verification script for deployment setup

echo "🔍 Hospital Manager Deployment Verification"
echo "==========================================="

# Check if we're in the right directory
if [ ! -f "DEPLOYMENT.md" ]; then
    echo "❌ Please run this script from the project root directory"
    exit 1
fi

echo "✅ Running from project root"

# Check backend files
echo ""
echo "Backend files:"
echo "  📄 package.json: $([ -f backend/package.json ] && echo "✅" || echo "❌")"
echo "  📄 server.js: $([ -f backend/src/server.js ] && echo "✅" || echo "❌")"
echo "  🔧 .env.development: $([ -f backend/.env.development ] && echo "✅" || echo "❌")"
echo "  🔧 .env.production: $([ -f backend/.env.production ] && echo "✅" || echo "❌")"
echo "  📋 .env.example: $([ -f backend/.env.example ] && echo "✅" || echo "❌")"
echo "  🚫 .gitignore: $([ -f backend/.gitignore ] && echo "✅" || echo "❌")"

# Check frontend files
echo ""
echo "Frontend files:"
echo "  📄 package.json: $([ -f frontend/package.json ] && echo "✅" || echo "❌")"
echo "  🔧 .env: $([ -f frontend/.env ] && echo "✅" || echo "❌")"
echo "  🔧 .env.production: $([ -f frontend/.env.production ] && echo "✅" || echo "❌")"
echo "  📋 .env.example: $([ -f frontend/.env.example ] && echo "✅" || echo "❌")"
echo "  ⚙️  config.ts: $([ -f frontend/src/lib/config.ts ] && echo "✅" || echo "❌")"
echo "  🌐 axios.ts: $([ -f frontend/src/lib/axios.ts ] && echo "✅" || echo "❌")"

# Check project files
echo ""
echo "Project files:"
echo "  📖 DEPLOYMENT.md: $([ -f DEPLOYMENT.md ] && echo "✅" || echo "❌")"
echo "  🚀 deploy-setup.sh: $([ -f deploy-setup.sh ] && echo "✅" || echo "❌")"
echo "  🚫 .gitignore: $([ -f .gitignore ] && echo "✅" || echo "❌")"
echo "  🏗️  render.yaml: $([ -f render.yaml ] && echo "✅" || echo "❌")"
echo "  🚫 .renderignore: $([ -f .renderignore ] && echo "✅" || echo "❌")"

echo ""
echo "Environment variables check:"

# Check if NODE_ENV is properly configured
if grep -q "NODE_ENV=development" backend/.env.development 2>/dev/null; then
    echo "  ✅ Backend development NODE_ENV configured"
else
    echo "  ❌ Backend development NODE_ENV not configured"
fi

if grep -q "NODE_ENV=production" backend/.env.production 2>/dev/null; then
    echo "  ✅ Backend production NODE_ENV configured"
else
    echo "  ❌ Backend production NODE_ENV not configured"
fi

# Check if API URLs are configured
if grep -q "VITE_API_BASE_URL" frontend/.env 2>/dev/null; then
    echo "  ✅ Frontend development API URL configured"
else
    echo "  ❌ Frontend development API URL not configured"
fi

if grep -q "VITE_API_BASE_URL" frontend/.env.production 2>/dev/null; then
    echo "  ✅ Frontend production API URL configured"
else
    echo "  ❌ Frontend production API URL not configured"
fi

echo ""
echo "Next steps:"
echo "1. 📝 Update environment variables with your actual values"
echo "2. 🚀 Deploy backend to Render"
echo "3. 🔗 Update frontend production URLs with Render backend URL"
echo "4. ✅ Test the deployment"
echo ""
echo "See DEPLOYMENT.md for detailed instructions."
