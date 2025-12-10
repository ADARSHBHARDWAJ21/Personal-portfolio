# Portfolio Website - Adarsh Bhardwaj

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features include 3D animated backgrounds, smooth animations, and a fully responsive design.

## 🚀 Technologies

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Three.js & React Three Fiber** - 3D graphics and animations
- **Framer Motion** - Animation library
- **Radix UI** - Accessible component primitives

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment

### Deploy to Vercel

This project is configured for easy deployment on Vercel:

1. **Push to GitHub**: Ensure your code is pushed to GitHub
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite configuration
   - Click "Deploy"

3. **Automatic Deployments**: 
   - Every push to `main` branch will trigger a new deployment
   - Preview deployments are created for pull requests

The `vercel.json` file is pre-configured with:
- Build command: `npm run build`
- Output directory: `dist`
- SPA routing rewrites
- Optimized caching headers

### Manual Build

```bash
npm run build
# Output will be in /dist directory
```

## 📁 Project Structure

```
├── app/                  # Page components
│   ├── about/           # About page
│   ├── contact/         # Contact page
│   ├── experience/      # Experience & skills page
│   └── projects/        # Projects showcase
├── components/          # Reusable components
│   ├── 3d/             # 3D animated backgrounds
│   ├── layout/         # Layout components
│   ├── sections/       # Page sections
│   └── ui/             # UI components
├── public/             # Static assets
├── src/                # Entry point and App
└── lib/                # Utilities
```

## 🎨 Features

- ✨ Modern, responsive design
- 🎭 Dark theme support
- 🎬 Smooth animations and transitions
- 🌟 3D interactive backgrounds
- 📱 Fully mobile-responsive
- ⚡ Optimized performance
- 🔍 SEO-friendly
- ♿ Accessible components

## 📝 Environment Variables

No environment variables are required for basic deployment. All configuration is in the codebase.

## 🛠️ Development

```bash
# Run development server
npm run dev

# Lint code
npm run lint

# Optimize images before build
npm run optimize-images
```

## 📄 License

Private project - All rights reserved.

## 👤 Author

**Adarsh Bhardwaj**
- Email: adarshbhardwaj1919@gmail.com
- GitHub: [@ADARSHBHARDWAJ21](https://github.com/ADARSHBHARDWAJ21)
- LinkedIn: [adarsh-bhardwaj-92072b316](https://www.linkedin.com/in/adarsh-bhardwaj-92072b316/)

---

Built with ❤️ using React and Vite
