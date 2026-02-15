# 🚀 Deploy Your Birthday Website to Koyeb

This guide will help you deploy your Next.js birthday website to Koyeb's cloud platform.

## 📋 Prerequisites

Before you begin, make sure you have:

- ✅ A **GitHub account** ([Sign up here](https://github.com/signup))
- ✅ A **Koyeb account** ([Sign up here](https://app.koyeb.com/auth/signup))
- ✅ **Git** installed on your computer ([Download here](https://git-scm.com/downloads))

---

## 🎯 Step 1: Initialize Git Repository

Your project is not currently tracked with Git. Let's set that up:

```bash
# Navigate to your project directory
cd e:\trishika2.0-main

# Initialize Git repository
git init

# Add all files to Git
git add .

# Create your first commit
git commit -m "Initial commit: Birthday website"
```

---

## 🌐 Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the **"+"** icon in the top-right corner → **"New repository"**
3. Fill in the details:
   - **Repository name**: `birthday-website` (or any name you prefer)
   - **Description**: "Interactive birthday website with animations"
   - **Visibility**: Choose **Public** or **Private**
   - ⚠️ **DO NOT** initialize with README, .gitignore, or license (we already have these)
4. Click **"Create repository"**

---

## 📤 Step 3: Push Code to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add GitHub as remote origin (replace YOUR_USERNAME and YOUR_REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Rename branch to main (if needed)
git branch -M main

# Push your code to GitHub
git push -u origin main
```

**Example:**
```bash
git remote add origin https://github.com/kdkum/birthday-website.git
git branch -M main
git push -u origin main
```

> **Note**: You may be prompted to enter your GitHub username and password. If you have 2FA enabled, you'll need to use a [Personal Access Token](https://github.com/settings/tokens) instead of your password.

---

## ☁️ Step 4: Deploy to Koyeb

### 4.1 Connect GitHub to Koyeb

1. Go to [Koyeb Dashboard](https://app.koyeb.com)
2. Click **"Create App"** or **"Create Service"**
3. Select **"GitHub"** as the deployment method
4. Click **"Authorize Koyeb"** to connect your GitHub account
5. Grant Koyeb access to your repositories

### 4.2 Configure Your Service

**General Settings:**
- **Repository**: Select your birthday website repository
- **Branch**: `main` (or your default branch)
- **Auto-deploy**: ✅ Enable (automatically deploys when you push changes)

**Build Settings:**
- **Builder**: Buildpack (auto-detected)
- **Build command**: `npm run build` (auto-detected from package.json)
- **Run command**: `npm start` (auto-detected)

> **Note**: Since your `next.config.mjs` has `output: "export"`, Next.js will generate static files. Koyeb will automatically detect this.

**Instance Settings:**
- **Region**: Choose the closest region to your users
- **Instance type**: **Nano** (Free tier - perfect for this project)
  - 512 MB RAM
  - 0.1 vCPU
  - Sufficient for static sites

**Environment Variables** (Optional):
- Currently, your project doesn't require any environment variables
- If you add features later (like API keys), you can add them here

### 4.3 Deploy

1. Review your configuration
2. Click **"Deploy"**
3. Wait for the build to complete (usually 2-5 minutes)

---

## 🎉 Step 5: Access Your Website

Once deployment is complete:

1. Koyeb will provide you with a **public URL** like:
   ```
   https://your-app-name-your-org.koyeb.app
   ```

2. Click the URL to view your live website! 🎂✨

---

## 🔄 Step 6: Update Your Website

Whenever you want to make changes:

```bash
# Make your changes to the code
# Then commit and push:

git add .
git commit -m "Update: describe your changes"
git push
```

Koyeb will **automatically** detect the changes and redeploy your website! 🚀

---

## 🛠️ Troubleshooting

### Build Fails

**Problem**: Build fails with dependency errors

**Solution**:
```bash
# Delete node_modules and package-lock.json locally
rm -rf node_modules package-lock.json

# Reinstall dependencies
npm install

# Commit the updated package-lock.json
git add package-lock.json
git commit -m "Update dependencies"
git push
```

### Images Not Loading

**Problem**: Images don't display on the deployed site

**Solution**: 
- Ensure all images are in the `public` folder
- Use relative paths like `/images/photo.jpg` (not `./images/photo.jpg`)
- Your `next.config.mjs` already has `images: { unoptimized: true }` which is correct for static export

### Music Not Playing

**Problem**: Background music doesn't play automatically

**Solution**: 
- Modern browsers block autoplay audio
- Users need to interact with the page first (click anywhere)
- This is expected behavior and your `BackgroundMusic` component should handle this

### Port Binding Issues

**Problem**: App crashes with port errors

**Solution**: 
- For static export, this shouldn't happen
- If it does, ensure `next.config.mjs` has `output: "export"`
- Contact Koyeb support if issue persists

---

## 📊 Monitoring Your Deployment

In the Koyeb Dashboard, you can:

- 📈 View **deployment logs** in real-time
- 🔍 Monitor **build status**
- 📉 Check **resource usage** (RAM, CPU)
- 🌍 View **traffic analytics**
- ⚙️ Manage **environment variables**
- 🔄 **Rollback** to previous deployments if needed

---

## 💡 Tips & Best Practices

1. **Custom Domain**: You can connect your own domain in Koyeb settings
2. **HTTPS**: Koyeb provides free SSL certificates automatically
3. **Performance**: The static export makes your site super fast
4. **Caching**: Koyeb automatically caches static assets
5. **Global CDN**: Your site is served from multiple locations worldwide

---

## 🎨 Next Steps

Consider enhancing your website:

- Add more photos to the gallery
- Customize messages and text
- Change colors and themes
- Add new screens or features
- Integrate analytics (Google Analytics, etc.)

---

## 📞 Need Help?

- **Koyeb Documentation**: [docs.koyeb.com](https://www.koyeb.com/docs)
- **Koyeb Community**: [community.koyeb.com](https://community.koyeb.com)
- **Next.js Documentation**: [nextjs.org/docs](https://nextjs.org/docs)

---

**Happy Deploying! 🎉**
