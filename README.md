# Shivam Naithani — Portfolio

A modern, dark-themed personal developer portfolio built with **React + Vite**.  
Live, recruiter-ready, and fully customizable.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server (http://localhost:5173)
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## 🌐 Deploy to Vercel (Recommended)

1. Push this folder to a GitHub repo named `shivam-naithani-portfolio`
2. Go to [vercel.com](https://vercel.com) → **New Project** → import the repo
3. Framework preset: **Vite** — Vercel detects this automatically
4. Click **Deploy** — done! You'll get a URL like `shivam-naithani-portfolio.vercel.app`

---

## 📁 Project Structure

```
shivam-naithani-portfolio/
├── public/
│   └── favicon.svg          # Browser tab icon
├── src/
│   ├── App.jsx              # ← All portfolio content lives here
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles + fonts
├── index.html               # HTML shell
├── vite.config.js           # Vite config
└── package.json
```

---

## ✏️ How to Customize

All editable data is at the **top of `src/App.jsx`**:

### Update Links
Search for `href: "#"` and replace with your actual URLs:
- GitHub: `https://github.com/yourusername`
- LinkedIn: `https://linkedin.com/in/yourprofile`
- Email: `mailto:you@email.com`

### Update Projects
Edit the `PROJECTS` array — add GitHub/demo links, update descriptions.

### Update Education
Find the `Education()` component and replace `"Your College Name Here"` with your actual college.

### Update Contact Email
Find `shivam.naithani@email.com` in the `Contact()` component.

### Add Real Resume
Replace the `href="#"` on the "Download Resume" button in `Experience()` with a link to your PDF hosted on Google Drive or any CDN.

---

## 🎨 Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| Vite | Build tool & dev server |
| Space Grotesk | Display/heading font |
| Space Mono | Code/mono font |
| Pure CSS | Animations, transitions, responsive |

> No Tailwind, no Framer Motion — pure CSS for zero build-time surprises.

---

## 📱 Responsive

- Mobile: hamburger nav, single-column layout
- Desktop: full nav bar, multi-column grid
- Tested on 320px → 1440px viewports

---

Made with ❤️ by Shivam Naithani
