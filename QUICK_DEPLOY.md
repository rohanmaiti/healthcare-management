## 🚀 Quick Deployment Reference

### For Monorepo (Frontend + Backend in same repo)

#### Backend → Render
```
Method: Blueprint (render.yaml)
Root Directory: backend
Build: npm install
Start: npm start
```

#### Frontend → Vercel  
```
Already configured ✅
Auto-deploys on push
```

#### Key Files Created:
- `render.yaml` - Render configuration
- `.renderignore` - Deployment optimization
- `RENDER_MONOREPO_GUIDE.md` - Detailed guide

#### Environment Variables:
```bash
# Render (Backend)
NODE_ENV=production
JWT_SECRET=your-secure-secret
MONGO_URI=your-mongodb-url
FRONTEND_URL=https://your-vercel-app.vercel.app

# Vercel (Frontend) 
VITE_API_BASE_URL=https://your-render-app.onrender.com/api
VITE_APP_ENV=production
```

#### Test URLs After Deployment:
- Backend Health: `https://your-render-app.onrender.com/health`
- Frontend: `https://your-vercel-app.vercel.app`

---
📖 **Detailed Guides:**
- [DEPLOYMENT.md](DEPLOYMENT.md) - Complete deployment guide
- [RENDER_MONOREPO_GUIDE.md](RENDER_MONOREPO_GUIDE.md) - Monorepo-specific guide
