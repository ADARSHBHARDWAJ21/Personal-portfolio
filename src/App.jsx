import { useLayoutEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { ThemeProvider } from '@/components/theme-provider'
import { CursorGlow } from '@/components/ui/cursor-glow'
import { profile, projects } from '@/lib/portfolio-data'
import HomePage from '@/app/page'
import AboutPage from '@/app/about/page'
import ContactPage from '@/app/contact/page'
import ExperiencePage from '@/app/experience/page'
import ProjectsPage from '@/app/projects/page'
import ProjectDetailPage from '@/app/projects/[slug]/page'
import ResumePage from '@/app/resume/page'

const pageTitles = { '/': profile.title, '/projects': 'Projects', '/about': 'About', '/contact': 'Contact', '/experience': 'Experience & Learning', '/resume': 'Resume' }

function PortfolioRoutes() {
  const { pathname, hash } = useLocation()
  useLayoutEffect(() => {
    const project = pathname.startsWith('/projects/') ? projects.find(item => pathname === '/projects/' + item.slug) : null
    document.title = (project?.title || pageTitles[pathname] || 'Page not found') + ' | ' + profile.name
    const frame = requestAnimationFrame(() => {
      const target = hash ? document.getElementById(hash.slice(1)) : null
      if (target) target.scrollIntoView({ block: 'start' })
      else window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    })
    return () => cancelAnimationFrame(frame)
  }, [pathname, hash])

  return (
    <div className="relative isolate min-h-screen bg-background font-sans antialiased">
      <a href="#main-content" className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-lg bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 focus:translate-y-0 print:hidden">Skip to content</a>
      <Header />
      <main id="main-content" className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="*" element={<div className="container-max py-24"><h1 className="text-3xl font-bold">Page not found</h1><Link to="/" className="mt-6 inline-block text-cyan-300">Return home</Link></div>} />
        </Routes>
      </main>
      <Footer />
      <CursorGlow />
    </div>
  )
}

export default function App() {
  return <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange><BrowserRouter><PortfolioRoutes /></BrowserRouter></ThemeProvider>
}

