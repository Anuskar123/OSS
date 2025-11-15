# Operating Systems Quiz 

This folder contains the minimal files needed to run the quiz locally or host it on GitHub Pages.

## Files
- `index.html` — Main page
- `styles.css` — UI styles
- `quiz.js` — Quiz logic and UI interactions
- `mcqs.json` — Question bank with answers and explanations

## Run locally
You can open `index.html` directly in a browser. For best results (and to avoid any browser restrictions), serve it with a simple HTTP server:

```powershell
# From this folder
# Option 1: Python 3
python -m http.server 8080

# Then open
Start-Process "http://localhost:8080"
```

## Deploy to GitHub Pages
1. Create a new GitHub repository (public is fine).
2. Upload the contents of this `publish/` folder to the repository root (or push via Git from this folder).
3. In the repo settings, enable GitHub Pages:
   - Settings → Pages → Source: `Deploy from a branch`
   - Branch: `main` (or `master`), Folder: `/ (root)`
4. Wait 1–2 minutes, then open the GitHub Pages URL shown in the settings.

That's it — the quiz will load `mcqs.json` from the same folder and run in the browser.

