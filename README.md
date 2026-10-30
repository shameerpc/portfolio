# Shamseer PC — Portfolio (Neon Gold Noir)

Executive full-stack MERN engineering and commercial creative direction portfolio designed for enterprise clients, agency retainers, and high-net-worth brands across Qatar, the UAE (Dubai), GCC, India, and worldwide.

---

## ⚡ Tech Stack

* **Core Framework**: React 19 + Vite 8
* **Styling**: Tailwind CSS 3 + Vanilla CSS tokens ("Neon Gold Noir")
* **Animations & Transitions**: Framer Motion 13 + Native HTML5 Canvas
* **Internationalization**: Custom zero-dependency i18n engine with full RTL (`dir="rtl"`) and Cairo font
* **Icons**: React Icons (Heroicons, Feather, Simple Icons, FontAwesome)
* **Optimization Tooling**: Sharp (WebP batch generation), ffmpeg-static (H.264 & WebM encoding), Oxlint

---

## 🚀 Getting Started

### 1. Prerequisites
* Node.js 18+ (tested on Node v20/v24)
* npm 9+

### 2. Installation
```bash
git clone https://github.com/shameerpc/portfolio.git
cd portfolio
npm install
```

### 3. Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Configure your contact form submission endpoint:
```env
VITE_CONTACT_FORM_ENDPOINT=https://formspree.io/f/your_form_id
# Optional Google Analytics 4 Measurement ID
# VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### 4. Running Locally
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your browser.

### 5. Quality Checks & Production Build
```bash
# Run lightning-fast linter
npm run lint

# Compile production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 🛠️ How to Update Assets & Data

### 1. How to Update Your CV Resume
1. Place your new PDF file in `public/cv/Shamseer-PC-CV.pdf`.
2. The navbar, hero, CV section, and terminal download commands will immediately serve the updated PDF.

### 2. How to Update Your Profile Photo
1. Save your portrait image as `public/images/about/shamseer-photo.jpg`.
2. Run the image optimization script to generate responsive WebP versions:
   ```bash
   node scripts/optimize-images.mjs
   ```

### 3. How to Add or Edit Projects ("Missions")
1. Open [`src/components/WebDev.jsx`](src/components/WebDev.jsx).
2. Edit or add an object to the `projects` array:
   ```javascript
   {
     id: 'project-slug',
     title: 'Project Title',
     category: 'Enterprise SaaS',
     filterTag: 'Qatar',
     region: '🇶🇦 Qatar',
     live: 'https://example.com',
     problem: '1-sentence challenge description',
     solution: '1-sentence architecture & technical solution',
     result: '1-sentence measurable business outcome',
     stack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
     images: ['/images/webdev/screenshot1.png', '/images/webdev/screenshot2.png'],
   }
   ```
3. Place screenshots in `public/images/webdev/` and run `node scripts/optimize-images.mjs`.

### 4. How to Update Video Showreel
1. If you have a new commercial showreel video, place it in `public/videos/` and run:
   ```bash
   node scripts/convert-video.mjs
   ```
   This automatically compresses the video into a fast-start H.264 MP4 (≤ 8 MB), WebM fallback, and extracts a fresh poster frame.

---

## 🌐 Deployment

### Netlify Deployment
1. Connect your repository to [Netlify](https://www.netlify.com/).
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Netlify automatically detects [`netlify.toml`](netlify.toml) for SPA routing and long-term asset caching.

### Vercel Deployment
1. Import repository on [Vercel](https://vercel.com/).
2. Framework Preset: **Vite**
3. Build command: `npm run build`
4. Output directory: `dist`
5. Vercel automatically applies [`vercel.json`](vercel.json) rewrites and headers.

---

## 📜 License
© Shamseer PC. All rights reserved.
