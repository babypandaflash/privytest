# 🚀 Privy Authentication React App

React website with **Privy.io** integration for Web3 authentication - Optimized for **GitHub Codespaces**.

![React](https://img.shields.io/badge/React-18.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-5.0.8-purple)
![Privy](https://img.shields.io/badge/Privy-1.78.1-green)

## 📱 Setup Guide for GitHub Codespaces (Mobile/Desktop)

### Step 1️⃣: Upload to GitHub

**From Mobile:**
1. Open **github.com** in browser
2. Login to your GitHub account
3. Click **"+"** button (top right) → **New repository**
4. Repository name: `privy-auth-app`
5. Check **"Add a README file"**
6. Click **"Create repository"**

**Upload Files:**
1. On repo page, click **"Add file"** → **"Upload files"**
2. Upload all files from this folder (drag & drop or select files)
3. Click **"Commit changes"**

### Step 2️⃣: Open Codespaces

**From Mobile/Desktop:**
1. On your repo page, click **"Code"** button (green)
2. Select **"Codespaces"** tab
3. Click **"Create codespace on main"**
4. Wait 1-2 minutes, VS Code web will open! 🎉

### Step 3️⃣: Get Privy App ID

**Open new browser tab:**
1. Visit: https://dashboard.privy.io
2. Sign up for new account (or login)
3. Click **"Create New App"**
4. Enter app name (e.g., "My Auth App")
5. **Copy the App ID** that appears (e.g., `clp7x...`)

### Step 4️⃣: Configure App ID

**In Codespaces:**
1. Open file **`src/App.jsx`** (in left sidebar)
2. On **line 4**, replace:
   ```javascript
   const PRIVY_APP_ID = 'YOUR_PRIVY_APP_ID';
With your App ID:
const PRIVY_APP_ID = 'clp7x1234567890abcdef';
Save file (Ctrl+S or Cmd+S)
Step 5️⃣: Run the Website
In Codespaces Terminal:
Dependencies auto-install! Just run:
npm run dev
Or if not installed yet:
npm install
npm run dev
✅ Website will appear!
Codespaces will automatically open preview
Or click "Open in Browser" notification
URL will look like: https://xxx-5173.app.github.dev
Step 6️⃣: Configure Privy Dashboard
Important for production:
Go back to dashboard.privy.io
Select your app
Go to Settings → Domains
Add your Codespaces domain:
*.app.github.dev
Or specific domain from Codespaces
Save
🎨 Available Features
✅ Email Login - Magic link authentication
✅ Wallet Login - MetaMask, WalletConnect, Coinbase Wallet
✅ Google OAuth - Sign in with Google
✅ Twitter OAuth - Sign in with Twitter
✅ Embedded Wallets - Auto-create wallet for new users
✅ Multi-Chain Support - Ethereum, Polygon, Base, etc.
✅ Modern UI - Responsive & mobile-friendly
📂 Project Structure
privy-auth-app/
├── .devcontainer/
│   └── devcontainer.json      # Codespaces config
├── src/
│   ├── App.jsx                # 🔑 Main component (EDIT THIS)
│   ├── main.jsx               # Entry point
│   └── index.css              # Styling
├── index.html                 # HTML template
├── package.json               # Dependencies
├── vite.config.js             # Vite config
└── README.md                  # This file
🔧 Customization
Change Login Methods
Edit src/App.jsx (around line 110):
config={{
  loginMethods: ['email', 'wallet', 'google', 'twitter'], // Choose what you want
  // ...
}}
Available options:
'email' - Email magic link
'wallet' - Crypto wallets
'google' - Google OAuth
'twitter' - Twitter OAuth
'discord' - Discord OAuth
'github' - GitHub OAuth
Change Theme & Colors
appearance: {
  theme: 'light',  // or 'dark'
  accentColor: '#667eea',  // Your brand color
  logo: 'https://your-logo.com/logo.png',  // Your logo
},
Change Styling
Edit src/index.css to customize the appearance as you like.
💡 Tips for Codespaces on Mobile
Use Desktop Mode in browser for better experience
Rotate to Landscape for more comfortable keyboard
Terminal can be resized - drag from top to enlarge/shrink
Save frequently - Codespaces auto-saves but manual save is safer
Codespaces free 60 hours/month for free GitHub accounts
🐛 Troubleshooting
Port 5173 already in use?
# Stop running process
# Press Ctrl+C in terminal
# Then run again
npm run dev
Module not found?
# Reinstall dependencies
npm install
App ID error?
Make sure App ID is correct
Check for no extra spaces or quotes
Format: 'clp7x1234567890abcdef'
Website not showing?
Check terminal - look for "Local: http://localhost:5173"
Click the link that appears in terminal
Or click "PORTS" tab at bottom → click globe icon on port 5173
Privy modal not appearing?
Check browser console (F12) for errors
Make sure domain is added in Privy dashboard
Try logout & login again
📚 Resources
Privy Documentation
GitHub Codespaces Docs
React Documentation
Vite Documentation
🚀 Deploy to Production
After development is complete, deploy to:
Vercel (Recommended)
npm install -g vercel
vercel
Netlify
Push to GitHub
Connect repo on netlify.com
Auto deploy!
GitHub Pages
npm run build
# Upload 'dist' folder to GitHub Pages
🔐 Security
✅ App ID is safe in frontend (not a secret key)
✅ Privy handles all authentication
✅ Tokens stored securely
❌ Don't commit .env files to Git
❌ Don't share Privy API Secret
🎯 Next Steps
✅ Setup Privy & test login
🎨 Customize UI to match your brand
🔗 Add more pages (Dashboard, Profile, etc.)
🌐 Connect to backend API
🚀 Deploy to production
💬 Support
Having issues?
Check Privy Discord
Open issue in this repo
Email: support@privy.io

Happy Coding! 🎉
Built with ❤️ using React, Vite & Privy