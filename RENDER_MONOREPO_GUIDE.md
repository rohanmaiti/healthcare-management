# Monorepo Deployment Guide for Render

## Quick Setup for Monorepo on Render

Since your frontend and backend are in the same GitHub repository, follow these steps:

### Method 1: Using Blueprint (render.yaml) - Recommended

1. **Go to Render Dashboard**
   - Visit [dashboard.render.com](https://dashboard.render.com)
   - Click "New +" → "Blueprint"

2. **Connect Repository**
   - Connect your GitHub repository
   - Render will automatically detect the `render.yaml` file

3. **Review Configuration**
   - Service name: `hospital-manager-backend`
   - Root directory: `backend` (automatically set)
   - Environment: Node.js

4. **Set Environment Variables**
   ```
   NODE_ENV=production
   JWT_SECRET=your-secure-jwt-secret-here
   MONGO_URI=mongodb+srv://rohan:rohan123@cluster0.qzw60o2.mongodb.net/health-management
   FRONTEND_URL=https://your-vercel-app.vercel.app
   ```

5. **Deploy**
   - Click "Apply" to create and deploy

### Method 2: Manual Web Service Creation

1. **Go to Render Dashboard**
   - Visit [dashboard.render.com](https://dashboard.render.com)
   - Click "New +" → "Web Service"

2. **Connect Repository**
   - Connect your GitHub repository

3. **Configure Service**
   - **Name**: `hospital-manager-backend`
   - **Environment**: Node
   - **Region**: Choose closest to your users
   - **Branch**: `main`
   - **Root Directory**: `backend` ⚠️ **CRITICAL: Must be set to `backend`**
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`

4. **Environment Variables** (same as above)

5. **Advanced Settings** (Optional)
   - **Auto-Deploy**: Yes (deploys on every push)
   - **Health Check Path**: `/health`

## Important Notes

### Root Directory Setting
- **MUST** set Root Directory to `backend`
- This tells Render to treat the `backend` folder as the application root
- Without this, Render will try to run commands from the project root and fail

### File Structure Understanding
```
your-repo/
├── frontend/          # Vercel deploys this
├── backend/           # Render deploys this
│   ├── package.json   # Render uses this package.json
│   ├── src/
│   └── ...
├── render.yaml        # Render blueprint configuration
└── ...
```

### Deployment Behavior
- **Any push** to the repository triggers backend deployment
- This includes frontend-only changes
- Consider using GitHub Actions for more selective deployment if needed

### Troubleshooting

**Error: "Cannot find package.json"**
- Solution: Ensure Root Directory is set to `backend`

**Error: "Module not found"**
- Solution: Check that all dependencies are in `backend/package.json`

**CORS errors after deployment**
- Solution: Update `FRONTEND_URL` environment variable with exact Vercel URL

**Health check failing**
- Solution: Verify `/health` endpoint is accessible
- Check logs in Render dashboard

### Verification

After deployment, test these URLs:
- Health check: `https://your-service.onrender.com/health`
- API test: `https://your-service.onrender.com/api/auth/test` (if available)

The health check should return:
```json
{
  "status": "OK",
  "message": "Hospital Manager Backend is running",
  "environment": "production",
  "timestamp": "2025-09-01T..."
}
```
