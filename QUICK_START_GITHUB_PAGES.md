# Quick Start: Deploy to GitHub Pages in 5 Minutes

Follow these steps to get your ADSDO Agency landing page live on GitHub Pages.

## Step 1: Create GitHub Repository (1 min)

1. Go to [GitHub](https://github.com/new)
2. Click **New repository**
3. Name: `adsdo-agency`
4. Select **Public**
5. Click **Create repository**

## Step 2: Push Code to GitHub (2 min)

```bash
# Navigate to your project folder
cd /path/to/adsdo-agency

# Initialize git (if needed)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: ADSDO Agency landing page"

# Add your GitHub repo (replace USERNAME)
git remote add origin https://github.com/USERNAME/adsdo-agency.git

# Rename branch to main and push
git branch -M main
git push -u origin main
```

## Step 3: Enable GitHub Pages (1 min)

1. Go to your repo on GitHub
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under "Source", select **Deploy from a branch**
5. Select branch: **gh-pages**
6. Click **Save**

## Step 4: Enable GitHub Actions (1 min)

1. In **Settings**, click **Actions** → **General**
2. Select **Allow all actions and reusable workflows**
3. Click **Save**

## Step 5: Watch It Deploy (automatic)

1. Click **Actions** tab
2. Watch **Deploy to GitHub Pages** workflow
3. When green ✓ appears (2-5 minutes), you're done!

Your site is live at: **https://username.github.io/adsdo-agency/**

---

## Verify Everything Works

- [ ] Open `https://username.github.io/adsdo-agency/` in browser
- [ ] Language toggle (EN/FR) works
- [ ] Scroll through all sections
- [ ] Try the contact form
- [ ] Test on mobile phone

## Add Custom Domain (Optional)

Want to use a custom domain like `adsdo.agency`?

1. Buy domain from GoDaddy, Namecheap, etc.
2. Go to **Settings** → **Pages**
3. Enter domain under "Custom domain"
4. Update domain DNS records (registrar will have instructions)
5. Wait 24-48 hours for propagation

## Deploy Future Changes

Just push to GitHub and GitHub Actions automatically rebuilds and deploys:

```bash
git add .
git commit -m "Your change description"
git push
```

Done! Changes live in 2-5 minutes.

## Need the n8n Webhook?

To connect the contact form to n8n:

1. Create n8n webhook in your n8n instance
2. Open `src/components/Contact.tsx` in your code editor
3. Find line 8: `const N8N_WEBHOOK_URL = 'YOUR_N8N_WEBHOOK_URL_HERE';`
4. Replace with your webhook URL
5. Push to GitHub:
   ```bash
   git add src/components/Contact.tsx
   git commit -m "Add n8n webhook URL"
   git push
   ```

---

**Questions?** See full guides:
- [DEPLOYMENT.md](./DEPLOYMENT.md) — Detailed setup guide
- [DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md) — Pre-launch checklist
- [README.md](./README.md) — Full project documentation
