# Kaaviya Paramalingam - Portfolio Website

> A modern, animated portfolio showcasing finance expertise, leadership experience, and entrepreneurial spirit.

## 🌐 Live Website

**Visit the portfolio at: [kaaviya.online](https://kaaviya.online)**

## ✨ Features

### 🎨 Modern Design
- **Premium UI/UX** with glassmorphism effects and smooth animations
- **Responsive design** that works perfectly on desktop, tablet, and mobile
- **Dark/light mode** automatic adaptation based on system preferences
- **Gradient backgrounds** with floating animated elements

### 🖱️ Interactive Animations
- **Typing animations** for name and section titles as you scroll
- **Framer Motion** powered micro-interactions and hover effects
- **Smooth scrolling** between sections with staggered entrance animations
- **3D hover effects** on cards and interactive elements

### 📅 Smart Calendar Integration
- **Calendly integration** for professional meeting scheduling
- **Fallback calendar** with email integration when Calendly isn't configured
- **Interactive date/time selection** with smooth state transitions

### 🎯 Content Sections
- **Hero Section** with animated introduction and skill highlights
- **About** - Personal background and career objectives
- **Experience** - Professional work history with achievements
- **Leadership** - Volunteer work and community contributions
- **Skills** - Technical and professional competencies
- **Education** - Academic background and qualifications
- **Contact** - Multiple ways to connect (LinkedIn, Calendar, CV download)

### 🖼️ Dynamic Media Handling
- **Conditional image rendering** with elegant fallbacks
- **Gallery strip** for showcasing additional content
- **Logo integration** with automatic fallback to initials

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v3.4.0
- **Animations:** Framer Motion v12.23.26
- **Icons:** Lucide React v0.562.0
- **Language:** JavaScript (ES6+)

## 📂 Project Structure

```
kaaviya-portfolio/
├── public/
│   ├── hero.jpg           # Main portrait image (optional)
│   ├── gallery-1.jpg      # Gallery images (optional)
│   ├── gallery-2.jpg
│   ├── gallery-3.jpg
│   ├── logo.jpg           # Logo/favicon image (optional)
│   └── Kaaviya_Paramalingam_CV.pdf  # Resume file (optional)
├── src/
│   ├── App.jsx           # Main portfolio component
│   ├── App.css           # Component styles
│   ├── index.css         # Global styles & Tailwind imports
│   └── main.jsx          # React app entry point
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind configuration
├── postcss.config.js     # PostCSS configuration
├── vite.config.js        # Vite build configuration
└── README.md            # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/KrishanSritharar2000/kaaviya-portfolio.git
   cd kaaviya-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5174`

### Build for Production

```bash
# Build optimized production files
npm run build

# Preview production build locally
npm run preview
```

## ⚙️ Customization

### Personal Information
Update these variables in `src/App.jsx`:

```javascript
const name = "Your Name";
const headline = "Your Professional Title";
const location = "Your Location";
const linkedinHref = "https://www.linkedin.com/in/yourprofile/";
const cvHref = "/Your_CV.pdf";
const calendlyHref = "https://calendly.com/yourusername";
```

### Images & Media
Add these files to the `public/` directory:
- `hero.jpg` - Your main portrait photo
- `logo.jpg` - Your personal logo or professional headshot
- `gallery-1.jpg`, `gallery-2.jpg`, `gallery-3.jpg` - Additional showcase images
- `Your_CV.pdf` - Your resume/CV file

### Content Sections
Modify the JSX content in `src/App.jsx` to reflect your:
- Professional experience
- Educational background
- Skills and competencies
- Leadership activities
- Personal projects

### Styling & Colors
The portfolio uses a carefully crafted color palette with:
- **Primary:** Indigo/Purple gradients for key actions
- **Secondary:** Blue, Green, Pink, Orange for categorization
- **Neutral:** Slate grays for content and backgrounds

Customize colors by modifying the Tailwind classes or updating `tailwind.config.js`.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- **Mobile:** 320px - 768px
- **Tablet:** 768px - 1024px
- **Desktop:** 1024px+

Key responsive features:
- Adaptive navigation (hidden menu on mobile)
- Flexible grid layouts
- Scalable typography
- Touch-optimized interactions

## 🎭 Animation System

### Typing Animations
- **TypingAnimation:** For the main hero name
- **ScrollTypingAnimation:** For section titles that trigger on scroll

### Motion Variants
- **fadeUp:** Smooth entrance from bottom
- **slideInLeft/Right:** Horizontal entrance effects
- **bounceIn:** Playful scale entrance
- **stagger:** Cascading animation for grouped elements

### Interactive Effects
- **Card hover:** 3D tilt, scale, and glow effects
- **Button interactions:** Scale, lift, and gradient shifts
- **Pill components:** Subtle hover animations
- **Particle effects:** Floating elements on hover

## 📊 Performance Optimizations

- **Vite build system** for fast development and optimized production builds
- **Code splitting** for efficient bundle loading
- **Image optimization** with proper fallbacks
- **Conditional rendering** to reduce unnecessary DOM elements
- **Framer Motion** optimized animations with GPU acceleration

## 🔧 Configuration Files

### Tailwind CSS (`tailwind.config.js`)
```javascript
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

### Vite (`vite.config.js`)
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174
  }
})
```

## 🌟 Key Components

### DefaultCalendar
Interactive calendar component with:
- Date and time selection
- Email integration for meeting requests
- Professional styling with animations
- Fallback for when Calendly isn't configured

### Card System
Reusable card components featuring:
- Multiple gradient themes (blue, purple, green, orange, pink)
- Animated icons and hover effects
- Flexible content layout
- Consistent design language

### Navigation
Smooth-scrolling navigation with:
- Sticky header with backdrop blur
- Animated underlines on hover
- Mobile-responsive design
- Gradient logo integration

## 📈 SEO & Accessibility

- **Semantic HTML** structure for better SEO
- **Alt text** for all images
- **ARIA labels** for interactive elements
- **Focus management** for keyboard navigation
- **Color contrast** meeting WCAG guidelines
- **Responsive meta tags** for social sharing

## 🚀 Deployment

The portfolio is optimized for deployment on:
- **Netlify** (recommended)
- **Vercel**
- **GitHub Pages**
- **Traditional web hosting**

### Netlify Deployment
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Configure custom domain to point to `kaaviya.online`

## 📞 Contact & Support

For questions about this portfolio template or customization:

- **Website:** [kaaviya.online](https://kaaviya.online)
- **LinkedIn:** [Kaaviya Paramalingam](https://www.linkedin.com/in/kaaviya/)
- **GitHub:** [@KrishanSritharar2000](https://github.com/KrishanSritharar2000)

## 📄 License

This project is created for Kaaviya Paramalingam's professional portfolio. Feel free to use as inspiration, but please create your own unique content and design variations.

---

**Built with ❤️ using React, Tailwind CSS, and Framer Motion**

*Last updated: December 2024*
