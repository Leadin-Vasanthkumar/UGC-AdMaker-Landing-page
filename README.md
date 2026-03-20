# 🚀 UGC AdMaker Landing Page

A premium, interactive, and hyper-modern landing page for **UGC AdMaker**—an AI-powered platform for generating high-converting UGC (User-Generated Content) video ads. 

This project is built with a focus on immersive UX, featuring custom holographic effects, glassmorphic UI components, and smooth framer-motion animations.

## ✨ Key Features

- **Liquid Glass Design:** A deep-space aesthetic (`#030014`) with glassmorphism, noise overlays, and vibrant gradients.
- **Holographic Cards:** Interactive 3D tilt effects on feature cards that react to mouse movements.
- **Shine Border Effects:** Dynamic, animated gradient borders that follow the edges of key components.
- **Infinite Video Scroll:** A seamless, auto-scrolling carousel of vertical (9:16) video ad examples.
- **Bento Grid Layout:** A responsive, modern grid showing off platform capabilities like "Product-in-Hand" and "Scriptwriter."
- **Performance Optimized:** Built with Vite and Tailwind CSS for blistering fast load times and clean, semantic HTML.
- **Micro-Animations:** Powered by `framer-motion` for a premium, "alive" feel throughout the scrolling experience.

## 🛠️ Tech Stack

- **Framework:** [React](https://reactjs.org/) (Vite)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** [Vercel](https://vercel.com/)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Leadin-Vasanthkumar/UGC-AdMaker-Landing-page.git
   cd UGC-AdMaker-Landing-page
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 🎥 Background Video Customization

To change the cinematic background video in the Hero section, locate the `<video>` tag in `src/App.tsx` and update the `src` attribute:

```tsx
<video 
  autoPlay muted loop playsInline 
  className="..."
>
  <source src="/YOUR_VIDEO_URL_HERE.mp4" type="video/mp4" />
</video>
```

## 📝 License

Distributed under the Apache-2.0 License. See `LICENSE` for more information.

---

Built with ❤️ by [Vasanthkumar](https://github.com/Leadin-Vasanthkumar)
