# 💎 Mrinal Paul | Advanced Liquid Glass Portfolio

A state-of-the-art, ultra-responsive personal portfolio engineered with Apple Vision-inspired **Liquid Glassmorphism** design principles. Built to deliver a cinematic user experience, it features custom hardware-accelerated animations, scroll-jacking horizontal layouts, and real-time cursor-tracking haptics.

[![Live Demo](https://img.shields.io/badge/Live_Demo-View_Website-10B981?style=for-the-badge)](https://imrinal-portfolio.vercel.app/)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

---

## ✨ Signature UI / UX Engineering

*   **Liquid Glassmorphism Chassis:** Deeply layered `backdrop-filter` effects combining heavy blurs (up to 100px) with translucent white/black overlays to simulate physical frosted glass.
*   **Golden Cursor-Tracking Illuminator:** A custom React `onMouseMove` hook that calculates mouse coordinates and injects them into CSS variables, rendering a glowing radial gradient that tracks the user's cursor across the borders and backgrounds of cards.
*   **Cinematic "Elevator Slide" Showcase:** The Projects section utilizes a mathematically calculated viewport scroll-tracker that triggers zero-lag, hardware-accelerated (`will-change-transform`) slide replacements upon every mouse wheel flick.
*   **Scroll-Jacking Milestones:** The Experience timeline intercepts vertical scrolling and translates it into a horizontal slider, keeping the section fixed until the user has viewed all chronological milestones.
*   **Serverless Communications:** Fully integrated with the **Web3Forms API** for direct, client-side email transmission without backend overhead.

## 🛠️ Technology Stack

*   **Framework:** React 18 (Vite)
*   **Language:** Strict TypeScript
*   **Styling:** Tailwind CSS (Custom extended themes & keyframes)
*   **Icons:** `lucide-react` & Custom SVGs
*   **Hosting:** Vercel (CI/CD Automated)
*   **API / Services:** Web3Forms (Contact Form)

## 📂 Architecture & File Structure

```text
src/
├── assets/                  # High-res logos, icons, and product display images
├── components/
│   ├── layout/
│   │   ├── GlassCard.tsx    # Reusable Liquid Glass chassis with cursor tracking
│   │   └── ScrollReveal.tsx # Intersection Observer wrapper for fade-up animations
│   └── sections/
│       ├── Hero.tsx         # Typewriter effects & ambient background blooms
│       ├── About.tsx        # Personal narrative and stylized grid layouts
│       ├── Skills.tsx       # Domain-categorized technical competencies
│       ├── Experience.tsx   # Scroll-jacked horizontal career timeline
│       ├── Projects.tsx     # Cinematic scroll-triggered product showcase
│       └── Education.tsx    # Responsive 3-column academic history grid
│       └── Contact.tsx      # Web3Forms integration, map, and social links
├── App.tsx                  # Main assembly & viewport layout anchor
└── index.css                # Global Tailwind directives & custom cubic-bezier animations


## 📈 Featured Projects Included

* **NextGen Farming:** ML-driven precision agriculture research (Scopus Indexed).
* **AgriGuard AI:** Cyber-Physical IoT System using XGBoost & MobileNetV2.
* **WorkSphere:** Full-stack Enterprise HR & Employee Management Portal.
* **Climora:** Liquid glass real-time meteorological telemetry dashboard.
* **AURA:** Universal UI computational engine with multi-matrix processing.

## 🤝 Let's Connect

* **GitHub:** [@imrinal](https://github.com/imrinal)
* **LinkedIn:** [Mrinal Paul](https://www.linkedin.com/in/mrinalpaul12/)
* **X (Twitter):** [@PMrinal12](https://x.com/PMrinal12)

---
*Designed & Engineered by Mrinal Paul.*