import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { ThemeProvider } from '@/components/theme-provider'
import { CursorGlow } from '@/components/ui/cursor-glow'
import { PerformanceMonitor } from '@/components/ui/performance-monitor'
import { cn } from '@/lib/utils'

// Import pages
import HomePage from '@/app/page'
import AboutPage from '@/app/about/page'
import ContactPage from '@/app/contact/page'
import ExperiencePage from '@/app/experience/page'
import ProjectsPage from '@/app/projects/page'
import ProjectDetailPage from '@/app/projects/[slug]/page'
import ResumePage from '@/app/resume/page'

function App() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      <BrowserRouter>
        <div className={cn("min-h-screen bg-background font-sans antialiased")}>
          <Header />
          <main className="min-h-screen">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:slug" element={<ProjectDetailPage />} />
              <Route path="/resume" element={<ResumePage />} />
            </Routes>
          </main>
          <Footer />
          <CursorGlow />
          <PerformanceMonitor />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

