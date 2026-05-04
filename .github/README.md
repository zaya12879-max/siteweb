# GitHub Configuration

This folder contains GitHub-specific configurations for ADSDO Agency.

## Contents

- **`workflows/deploy.yml`** — GitHub Actions workflow for automatic GitHub Pages deployment
  - Triggers on push to `main` or `master` branches
  - Installs dependencies
  - Builds the project
  - Deploys to GitHub Pages (`gh-pages` branch)
  - Supports custom domain (optional)

## How GitHub Actions Works

When you push code to the repository:

1. GitHub Actions automatically runs the `deploy.yml` workflow
2. It installs Node.js 18 and npm dependencies
3. It builds the project using `npm run build`
4. The `dist/` folder is pushed to the `gh-pages` branch
5. GitHub Pages automatically deploys the `gh-pages` branch to your site

## Deployment Status

Check deployment status:
- Go to **Actions** tab in your repository
- Look for **Deploy to GitHub Pages** workflow
- Green ✓ = successful deployment
- Red ✗ = failed (check logs for errors)

## Custom Domain Configuration

If using a custom domain, update line 30 in `deploy.yml`:

```yaml
cname: adsdo.agency  # Change to your domain
```

Then configure DNS at your domain registrar and enable in GitHub Pages settings.

## Troubleshooting

### Workflow not running
- Check **Settings** → **Actions** → **General**
- Ensure **Allow all actions and reusable workflows** is selected

### Build fails
- Check **Actions** tab for error messages
- Verify all dependencies are in `package.json`
- Try running `npm run build` locally to debug

### Site not updating
- Clear browser cache (Cmd/Ctrl + Shift + R)
- Check **Settings** → **Pages** → Branch is `gh-pages`
- Wait 5 minutes and hard refresh

## Manual Deployment (if needed)

If GitHub Actions isn't available:

1. Run `npm run build` locally
2. Install GitHub Pages CLI: `npm install -g gh-pages`
3. Deploy: `gh-pages -d dist`

## Security Notes

- Never commit `.env` files (already in `.gitignore`)
- GitHub token is handled automatically by GitHub Actions
- No secrets need to be manually configured

For more info, see [DEPLOYMENT.md](../DEPLOYMENT.md)
