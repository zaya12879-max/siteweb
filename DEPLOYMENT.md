# ADSDO Agency - GitHub Pages Deployment Guide

## Prerequisites

- GitHub account
- Git installed locally
- Node.js 18+ installed

## Setup Instructions

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com/new) and create a new repository
2. Name it `adsdo-agency`
3. Add a description: "Meta & Google Certified Digital Marketing Agency - Multilingual Landing Page"
4. Choose **Public** (required for GitHub Pages free tier)
5. Do **not** initialize with README (we'll push existing files)

### 2. Push Code to GitHub

```bash
# Navigate to project directory
cd /path/to/project

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: ADSDO Agency landing page"

# Add remote origin (replace USERNAME with your GitHub username)
git remote add origin https://github.com/USERNAME/adsdo-agency.git

# Push to main branch
git branch -M main
git push -u origin main
```

### 3. Configure GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Source", select **Deploy from a branch**
4. Select branch: **gh-pages** (created automatically by GitHub Actions)
5. Select folder: **/ (root)**
6. Click **Save**

### 4. Enable GitHub Actions

1. Go to **Settings** → **Actions** → **General**
2. Under "Actions permissions", select **Allow all actions and reusable workflows**
3. Click **Save**

### 5. Monitor Deployment

1. Go to **Actions** tab in your repository
2. Watch for the **Deploy to GitHub Pages** workflow
3. When complete (green checkmark), your site is live at:
   - `https://username.github.io/adsdo-agency/`

## Custom Domain Setup (Optional)

If you have a custom domain (e.g., `adsdo.agency`):

1. Update the `CNAME` value in `.github/workflows/deploy.yml`
2. Configure DNS records with your domain registrar:
   - Type: **CNAME**
   - Name: **www** (or your subdomain)
   - Value: `username.github.io`
   
   OR for root domain (@):
   - Type: **A**
   - Values:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

3. Go to **Settings** → **Pages**
4. Under "Custom domain", enter your domain and click **Save**
5. GitHub will create and verify the CNAME file automatically

## n8n Webhook Integration

To connect the contact form to n8n:

1. Set up your n8n webhook endpoint
2. Open `src/components/Contact.tsx`
3. Replace line 8:
   ```typescript
   const N8N_WEBHOOK_URL = 'YOUR_N8N_WEBHOOK_URL_HERE';
   ```
   with your actual webhook URL:
   ```typescript
   const N8N_WEBHOOK_URL = 'https://your-n8n-instance.com/webhook/...';
   ```
4. Commit and push changes
5. GitHub Actions will automatically rebuild and redeploy

## Troubleshooting

### Site not appearing after 10 minutes

- Check **Actions** tab for build errors
- Verify branch is set to `gh-pages` in **Settings** → **Pages**
- Clear browser cache and hard refresh (Cmd+Shift+R / Ctrl+Shift+R)

### Custom domain not working

- Verify DNS records are correctly configured
- Wait up to 48 hours for DNS propagation
- Check **Settings** → **Pages** for SSL certificate status (should show "Certificate is valid")

### Build fails

- Check **Actions** tab for error details
- Ensure `Node.js 18` or higher is available
- Verify all dependencies are in `package.json`

## Local Development

To test locally before deployment:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## File Structure

```
adsdo-agency/
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Navigation with language toggle
│   │   ├── Hero.tsx            # Hero section with founder intro
│   │   ├── Services.tsx        # Services cards
│   │   ├── About.tsx           # About section
│   │   ├── Contact.tsx         # Contact form with n8n webhook
│   │   └── Footer.tsx          # Footer
│   ├── translations.ts         # Bilingual content (EN/FR)
│   ├── App.tsx                 # Main app component
│   ├── index.css               # Global styles
│   ├── main.tsx                # Entry point
│   └── vite-env.d.ts           # Vite types
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── index.html                  # HTML with SEO meta tags
├── vite.config.ts              # Vite configuration
├── tailwind.config.js          # Tailwind CSS config
├── tsconfig.json               # TypeScript config
├── eslint.config.js            # ESLint config
├── package.json                # Dependencies
├── DEPLOYMENT.md               # This file
└── README.md                   # Project info
```

## SEO & Meta Tags

The site includes optimized meta tags for both English and French:

- Bilingual title and description
- Open Graph tags with locale alternates
- Twitter Card metadata
- Keywords targeting digital marketing services
- Mobile viewport optimization

## Performance Optimizations

- Vite's optimized build output
- Tailwind CSS purging (production only)
- Image optimization via Pexels
- Lazy-loaded components
- Minimal bundle size (~175KB gzipped)

## Support

For issues or questions:

1. Check GitHub Actions logs for build errors
2. Review `DEPLOYMENT.md` troubleshooting section
3. Verify all configuration matches this guide
4. Check GitHub Pages status page: https://www.githubstatus.com/
