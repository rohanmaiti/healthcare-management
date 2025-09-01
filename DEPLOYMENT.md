# Deployment Guide

This guide will help you deploy the Hospital Manager application with the backend on Render and frontend on Vercel.

## Prerequisites

1. GitHub repository with your code
2. Render account (free tier available)
3. Vercel account (already set up based on your description)

## Backend Deployment on Render

### Step 1: Push Code to GitHub
Make sure your latest backend code is pushed to GitHub with all the new environment files.

### Step 2: Create Render Service

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure the service:
   - **Name**: `hospital-manager-backend`
   - **Environment**: `Node`
   - **Region**: Choose closest to your users
   - **Branch**: `main` (or your default branch)
   - **Root Directory**: `backend` ⚠️ **IMPORTANT: Set this to `backend`**
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`

### Alternative: Use render.yaml (Recommended for Monorepo)

Since your frontend and backend are in the same repository, you can use the included `render.yaml` file:

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click "New +" → "Blueprint"
3. Connect your GitHub repository
4. Render will automatically detect the `render.yaml` file
5. Review the configuration and click "Apply"

This approach is better because:
- It's infrastructure as code
- Automatically configures the root directory
- Can be version controlled
- Easier to manage multiple services

## Monorepo Deployment Strategy

Since your frontend and backend are in the same repository, here are the deployment approaches:

### Option 1: Using render.yaml (Recommended)
This project includes a `render.yaml` file that tells Render to:
- Only build and deploy the `backend` directory
- Use the correct build and start commands
- Set up environment variables

### Option 2: Manual Configuration
If you prefer manual setup:
1. When creating the service, set **Root Directory** to `backend`
2. This tells Render to treat the `backend` folder as the application root
3. All commands will run relative to the `backend` directory

### Why This Works
- Render will `cd` into the `backend` directory before running commands
- `npm install` will use `backend/package.json`
- `npm start` will run the start script from `backend/package.json`
- Only backend files are deployed, keeping the deployment size small

### Deployment Triggers
- **Backend**: Deploys when ANY file in the repository changes (including frontend)
- **Frontend**: Vercel deploys when ANY file changes
- Consider using GitHub Actions for more granular control if needed

### Step 3: Environment Variables

Add these environment variables in Render dashboard:

```
NODE_ENV=production
JWT_SECRET=your-super-secure-jwt-secret-here-make-it-long
MONGO_URI=mongodb+srv://rohan:rohan123@cluster0.qzw60o2.mongodb.net/health-management
FRONTEND_URL=https://your-vercel-app.vercel.app
PORT=10000
```

**Important**: 
- Replace `your-super-secure-jwt-secret-here-make-it-long` with a secure random string
- Replace `https://your-vercel-app.vercel.app` with your actual Vercel URL

### Step 4: Deploy
Click "Create Web Service" and wait for deployment to complete.

## Frontend Configuration for Production

### Step 1: Update Environment Variables

1. In your local `frontend/.env.production` file, update:
```
VITE_API_BASE_URL=https://your-render-app-name.onrender.com/api
VITE_APP_ENV=production
VITE_SERVER_URL=https://your-render-app-name.onrender.com
```

2. Replace `your-render-app-name` with the actual Render service name.

### Step 2: Configure Vercel Environment Variables

In your Vercel dashboard:
1. Go to your project settings
2. Add environment variables:
   - `VITE_API_BASE_URL`: `https://your-render-app-name.onrender.com/api`
   - `VITE_APP_ENV`: `production`
   - `VITE_SERVER_URL`: `https://your-render-app-name.onrender.com`

### Step 3: Update Backend CORS

1. Get your Vercel app URL (e.g., `https://your-app.vercel.app`)
2. Update the `FRONTEND_URL` environment variable in Render with this URL

## Testing the Deployment

### Health Check
Test the backend health endpoint:
```
https://your-render-app-name.onrender.com/health
```

### CORS Test
Open browser developer tools on your Vercel frontend and check if API calls work without CORS errors.

## Local Development vs Production

The configuration automatically detects the environment:

- **Local Development**: 
  - Frontend: `http://localhost:3001`
  - Backend: `http://localhost:4000`
  
- **Production**:
  - Frontend: `https://your-app.vercel.app`
  - Backend: `https://your-render-app-name.onrender.com`

## Automatic Deployment (CI/CD)

- **Frontend**: Already configured with Vercel. Any push to main branch deploys automatically.
- **Backend**: Render automatically deploys when you push to the connected GitHub branch.

## Troubleshooting

### Common Issues

1. **CORS Errors**:
   - Ensure `FRONTEND_URL` in Render matches your Vercel URL exactly
   - Check browser developer tools for exact error messages

2. **Environment Variables Not Loading**:
   - Verify all variables are set in both Render and Vercel dashboards
   - Check capitalization and spelling

3. **Database Connection Issues**:
   - Verify `MONGO_URI` is correctly set in Render
   - Check MongoDB Atlas network access settings

4. **404 on API Calls**:
   - Verify the API base URL in frontend environment variables
   - Check that backend routes are properly configured

### Debugging

Use the browser developer tools to check:
- Network tab for failed requests
- Console for error messages
- Application tab for environment variables (in development)

### Logs

- **Render**: View logs in Render dashboard under your service
- **Vercel**: View function logs in Vercel dashboard

## Security Notes

1. Never commit `.env` files with sensitive data
2. Use strong, unique JWT secrets in production
3. Regularly rotate API keys and secrets
4. Enable HTTPS only in production (both platforms do this by default)

## Scaling Considerations

- **Render Free Tier**: Spins down after 15 minutes of inactivity
- **Database**: Consider MongoDB Atlas scaling for production traffic
- **CDN**: Vercel includes CDN, but consider separate CDN for API if needed

## Monitoring

Consider adding:
- Health check endpoints (already included)
- Error logging (Sentry, LogRocket)
- Performance monitoring (New Relic, DataDog)
- Uptime monitoring (Uptime Robot, Pingdom)
