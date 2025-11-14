/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { formats: ['image/avif','image/webp'] }
}
module.exports = nextConfig
```

4. Scroll down, commit message: `Fix next.config.js`
5. Click **"Commit changes"**

---

### **Step 7: Redeploy on Vercel**

Now Vercel should automatically detect your changes and redeploy! 

1. Go to your **Vercel dashboard** (vercel.com)
2. Click on your project
3. You should see it's building automatically
4. Wait for it to finish (usually 1-2 minutes)

If it doesn't auto-deploy:
1. Click the **"Deployments"** tab
2. Click the **three dots** (•••) on the latest deployment
3. Click **"Redeploy"**

---

### **Step 8: Check If It Works**

Once the build finishes:
1. Vercel will show you a **"Visit"** button
2. Click it to see your site live!
3. You should see "Welcome to Astratrix" on the page

---

## **Your Repository Should Now Look Like This:**
```
📁 astratrix-next-starter/
├── 📁 pages/
│   ├── _app.tsx          ✅ NEW
│   └── index.tsx         ✅ NEW
├── 📁 styles/
│   └── globals.css       ✅ NEW
├── 📄 next.config.js     ✅ FIXED
├── 📄 package.json
├── 📄 tailwind.config.js
└── 📄 tsconfig.json
