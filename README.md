# 🐾 Hakeem Rahman | Online Portfolio

> A personal portfolio website built with **React + Vite**, featuring interactive 3D renders, 
> smooth animations, and a showcase of projects and work experience.

🔗 **Live Site:** [seppucake.github.io/online-portfolio](https://seppucake.github.io/online-portfolio/)

---

## 📌 About

This is the personal portfolio of **Mohd Ameerul Hakeem bin Abdul Rahman** — a Junior 
Programmer and Web Developer based in Selangor, Malaysia. The portfolio was built from 
scratch using ReactJS and Vite as a hands-on learning project, and serves as a live 
showcase of skills, work experience, and personal projects.

The site features a **3D interactive character** (Inugami Korone from hololive, model 
by [chained_tan](https://sketchfab.com/ch_fren) — CC-BY-4.0) rendered via Three.js and 
React Three Fiber, alongside scroll-based animations powered by Framer Motion.

---

## ✨ Features

- 🐕 **Interactive 3D Model** — Animated Inugami Korone rendered with React Three Fiber,
  complete with skeletal animation and toon shading
- 🎞️ **Framer Motion Animations** — Smooth scroll-triggered reveals and transitions 
  throughout the page
- 📱 **Responsive Design** — Mobile-aware layout with dynamic scaling for the 3D canvas
- 🧭 **Smooth Navigation** — Anchor-based nav links with scroll behaviour
- 💼 **Work Experience Timeline** — Visual timeline of professional experience
- 🛠️ **Tech Stack Display** — Animated 3D tech ball icons via React Three Fiber
- 📂 **Projects Showcase** — Project cards with descriptions, tech tags, and source links
- 📬 **Contact Form** — EmailJS-powered contact form with a 3D Earth canvas

---

## 🛠️ Built With

| Category | Tech |
|---|---|
| Framework | React 18 + Vite 5 |
| 3D Rendering | Three.js, React Three Fiber, React Three Drei |
| Animation | Framer Motion |
| Styling | Tailwind CSS |
| Contact Form | EmailJS |
| 3D Model Format | GLTF / GLB |
| Deployment | GitHub Pages via GitHub Actions |

---

## 📁 Project Structure
```
online-portfolio/
├── public/
│   ├── inugami_korone_hololive/   # 3D model (GLTF + textures)
│   ├── desktop_pc/                # Hero desktop PC model
│   ├── planet/                    # Contact section Earth model
│   └── ...                        # Other GLTF assets
├── src/
│   ├── assets/                    # Images, company logos, project screenshots
│   ├── components/
│   │   ├── canvas/                # Three.js canvas components (Korone, Earth, Stars)
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Tech.jsx
│   │   ├── Works.jsx
│   │   └── Contact.jsx
│   ├── constants/
│   │   └── index.js               # All content data (experience, projects, tech)
│   └── styles.js                  # Shared Tailwind class strings
├── .github/
│   └── workflows/
│       └── deploy.yml             # GitHub Actions auto-deploy to gh-pages
├── vite.config.js
└── package.json
```

---

## 🚀 Getting Started (Local Development)

### Prerequisites
- Node.js v18 or above
- npm

### Installation
```bash
# Clone the repo
git clone https://github.com/SeppuCake/online-portfolio.git
cd online-portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production
```bash
npm run build
```

Output will be in the `/dist` folder.

---

## 🤖 Deployment

This project deploys automatically to GitHub Pages via **GitHub Actions** whenever 
changes are pushed to the `main` branch. The workflow:

1. Checks out the code
2. Installs dependencies with `npm ci`
3. Builds with `npx vite build`
4. Pushes the `/dist` output to the `gh-pages` branch

See [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) for the full config.

---

## 🎨 3D Model Credits

| Model | Author | License |
|---|---|---|
| [Inugami Korone (hololive)](https://sketchfab.com/3d-models/inugami-korone-hololive-8b89fc7bb19c449baceb403a2995fd78) | chained_tan | CC-BY-4.0 |

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Mohd Ameerul Hakeem bin Abdul Rahman**  
📧 mohdameerulhakeem@gmail.com  
🌐 [seppucake.github.io/online-portfolio](https://seppucake.github.io/online-portfolio/)  
🐙 [github.com/SeppuCake](https://github.com/SeppuCake)
