# ADSDO Agency - Pre-Deployment Checklist

Use this checklist to ensure everything is ready for GitHub Pages deployment.

## Code & Configuration

- [ ] All components created and working (`Header`, `Hero`, `Services`, `About`, `Contact`, `Footer`)
- [ ] Bilingual translations complete in `src/translations.ts`
- [ ] SEO meta tags updated in `index.html`
- [ ] `vite.config.ts` has `base: '/adsdo-agency/'` configured
- [ ] `package.json` name updated to `adsdo-agency`
- [ ] `.nojekyll` file exists in `public/` folder
- [ ] Build runs successfully: `npm run build` (check for no errors)

## GitHub Repository Setup

- [ ] GitHub account created
- [ ] New repository `adsdo-agency` created as **Public**
- [ ] Repository cloned or initialized locally with git
- [ ] All project files pushed to `main` branch:
  ```bash
  git add .
  git commit -m "Initial commit: ADSDO Agency landing page"
  git push -u origin main
  ```

## GitHub Pages Configuration

- [ ] Go to **Settings** → **Pages**
- [ ] Source set to **Deploy from a branch**
- [ ] Branch selected: **gh-pages** (created by GitHub Actions)
- [ ] Folder selected: **/ (root)**
- [ ] Click **Save**

## GitHub Actions Setup

- [ ] Go to **Settings** → **Actions** → **General**
- [ ] Select **Allow all actions and reusable workflows**
- [ ] Click **Save**
- [ ] `.github/workflows/deploy.yml` file exists in repository

## First Deployment

- [ ] Go to **Actions** tab
- [ ] Watch for **Deploy to GitHub Pages** workflow
- [ ] Wait for green checkmark (usually 2-5 minutes)
- [ ] Site live at: `https://username.github.io/adsdo-agency/`
- [ ] Test all sections load correctly
- [ ] Test language toggle (EN/FR)
- [ ] Verify responsive design on mobile

## Content Verification (on Live Site)

### Header
- [ ] Logo displays correctly
- [ ] Navigation menu works
- [ ] Language toggle switches between EN/FR
- [ ] Mobile hamburger menu appears on small screens
- [ ] Header background changes on scroll

### Hero Section
- [ ] Founder photo loads from Pexels
- [ ] Animated wave emoji displays
- [ ] Meta & Google badges visible
- [ ] Stats display (9+, 200+, 98%)
- [ ] Both CTA buttons work and link correctly
- [ ] Background animations smooth

### Services Section
- [ ] All 6 service cards display
- [ ] Icons visible for each service
- [ ] Bilingual content correct
- [ ] Hover animations working
- [ ] Cards responsive on mobile

### About Section
- [ ] Team photo loads from Pexels
- [ ] Certification badges overlay correctly
- [ ] Bilingual text displays properly
- [ ] Layout responsive on mobile
- [ ] Checkmark icons visible

### Contact Form
- [ ] All fields present (Name, Email, Service, Message)
- [ ] Form validates required fields
- [ ] Language toggle updates form labels
- [ ] Submit button works
- [ ] Success/error messages display
- [ ] Form accessible on mobile

### Footer
- [ ] Logo displays in footer
- [ ] All links work
- [ ] Certifications visible
- [ ] Copyright year correct
- [ ] Mobile layout responsive

## Functionality Testing

- [ ] Language toggle works site-wide
- [ ] No console errors (check Dev Tools → Console)
- [ ] All links internal (`#services`, `#about`, `#contact`)
- [ ] Smooth scrolling works
- [ ] Form submits (currently simulates or connects to n8n)
- [ ] Images load correctly
- [ ] No broken images

## SEO Verification

- [ ] Page title in browser tab correct
- [ ] Meta description visible in search snippet preview
- [ ] Open Graph tags present (use [OG Tag Checker](https://www.opengraph.xyz/))
- [ ] Twitter Card appears correctly
- [ ] Mobile-Friendly Test passes ([Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly))

## Performance Checks

- [ ] Page loads in < 3 seconds
- [ ] Lighthouse score 90+ ([Chrome DevTools Lighthouse](chrome://inspect))
  - [ ] Performance: 90+
  - [ ] Accessibility: 90+
  - [ ] Best Practices: 90+
  - [ ] SEO: 90+
- [ ] No console warnings or errors
- [ ] CSS properly minified (check Dev Tools → Network → CSS files)
- [ ] JavaScript properly minified

## Custom Domain (Optional)

- [ ] Domain registrar account with DNS settings
- [ ] DNS records configured (A records or CNAME)
- [ ] `CNAME` value updated in `.github/workflows/deploy.yml` (if using custom domain)
- [ ] Wait up to 48 hours for DNS propagation
- [ ] **Settings** → **Pages** → **Custom domain** set and verified
- [ ] SSL certificate shows as valid (green padlock in browser)

## n8n Webhook Integration (If Implemented)

- [ ] n8n workflow created with Webhook trigger
- [ ] Webhook URL copied
- [ ] `N8N_WEBHOOK_URL` updated in `src/components/Contact.tsx`
- [ ] Code committed and pushed
- [ ] GitHub Actions redeploy completed
- [ ] Test form submission with n8n workflow

## Documentation

- [ ] `README.md` complete and accurate
- [ ] `DEPLOYMENT.md` complete with setup instructions
- [ ] This checklist reviewed and all items completed
- [ ] Any custom instructions documented for future maintainers

## Final Launch

- [ ] Share site URL with stakeholders
- [ ] Monitor GitHub Actions for any failed deployments
- [ ] Set up Google Analytics (optional)
- [ ] Submit sitemap to Google Search Console
- [ ] Monitor browser console for errors
- [ ] Test on real devices (iOS, Android, desktop browsers)

## Post-Launch Monitoring

- [ ] Check site daily for first week
- [ ] Monitor GitHub Actions for deployment status
- [ ] Respond to contact form submissions (via n8n or email)
- [ ] Track performance in Google Analytics
- [ ] Update content as needed

---

**When all items are checked, your site is ready for production!**
