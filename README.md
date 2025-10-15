# Pseudo Code Pathways

A browser-based learning experience that helps first-year computer science students transform ideas into structured pseudo code and then into working Python. The interface follows PolyU-inspired branding, guides learners through staged lessons, and runs Python safely in the browser with Pyodide—no backend required.

## Features

- **Stage-based journey** – Five progressive stages explain pseudo code structure, inputs/outputs, logic, collections, and modularisation. Learners receive coaching prompts and milestone feedback in each stage.
- **Practice challenges** – Curated problems (compare numbers, grade calculation, quadratic roots, bubble sort, histograms, and more) scaffold practice as skills grow.
- **Pseudo code coach** – Built-in checks encourage BEGIN/END structure, named variables, decision logic, and other expectations per stage.
- **Python lab** – Translate pseudo code into Python, supply test inputs, and execute code directly within the browser using Pyodide.
- **Progress tracking** – Drafts and completions persist locally. A reset button clears progress for a fresh run-through.
- **Static hosting ready** – Works on GitHub Pages, Netlify, or any static host. The codebase is structured so a backend can be added later for accounts or analytics.

## Getting started

1. Clone or download this repository.
2. Open `index.html` in any modern browser. (If loading from the filesystem is blocked, serve it with a lightweight web server such as `python -m http.server`.)
3. Explore the stages, draft pseudo code, and run Python snippets without leaving the page.

## Technology

- HTML, CSS, and vanilla JavaScript for a lightweight, dependency-free UI.
- [Pyodide](https://pyodide.org/) to execute Python safely on the client side.
- LocalStorage to persist stage progress and learner drafts.

## Future extensions

- Add authentication and cloud saves.
- Expand feedback with natural-language pseudo code analysis.
- Track assessment analytics or integrate with learning management systems.

## Deployment recommendations

Both [GitHub Pages](https://pages.github.com/) and [Vercel](https://vercel.com/) can host this project because it is a static
site that only needs to serve `index.html`, `styles.css`, and `app.js`. Use the guide below to pick the best option for your
needs:

| Scenario | GitHub Pages | Vercel |
| --- | --- | --- |
| Quick, no-cost launch | ✅ Publishes straight from the `main` branch with a few clicks. | ➖ Requires connecting the repo to Vercel, but setup is still simple. |
| Branch previews for reviews | ⚠️ Needs manual workflows or third-party actions. | ✅ Automatic preview deployments for every branch/PR. |
| Custom domains & HTTPS | ✅ Supported with manual DNS configuration. | ✅ Built-in HTTPS and domain management. |
| Future serverless/API features | ⚠️ Needs an external service. | ✅ Built-in serverless and edge runtimes. |

**Recommendation:** start with GitHub Pages for a quick, cost-free launch. If you later need branch previews, serverless APIs, or advanced routing, migrating to Vercel is seamless because the codebase is already static-host friendly.

Happy learning and teaching!
