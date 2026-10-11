// Client component for interactive resume page
'use client'

import { Link } from 'react-router-dom'
import { profile, projects } from '@/lib/portfolio-data'
import { useEffect } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { AnimatedBackground } from '@/components/3d/animated-background'
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Calendar,
  Building,
  GraduationCap,
  Award,
  Code,
  Star,
  ExternalLink
} from 'lucide-react'

const personalInfo = {
  ...profile,
  title: 'Full Stack Developer | B.Tech CSE (AI & DS) Student',
  linkedin: profile.linkedin.replace('https://www.', '').replace(/\/$/, ''),
  github: profile.github.replace('https://', '').replace(/\/$/, ''),
}
const professionalSummary = profile.summary
const experience = projects.filter((project) => project.featured).slice(0, 3)
const education = profile.education
const skills = Object.fromEntries(profile.skillGroups.map((group) => [group.category, group.items]))
const certifications = profile.certifications.map((certificate) => certificate.title + ' — ' + certificate.issuer + ' · ' + certificate.date)
const achievements = projects.filter((project) => project.status.startsWith('SIH')).map((project) => project.title + ' — ' + project.status)

export default function ResumePage() {
  useEffect(() => {
    document.title = 'Resume | Adarsh Bhardwaj'
  }, [])

  return (
    <div className="min-h-screen relative isolate bg-transparent print:bg-white">
      <AnimatedBackground variant="resume" />

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-4xl mx-auto relative group">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 blur-xl opacity-40 group-hover:opacity-60 transition-all print:hidden" />

          <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl border border-border shadow-xl print:bg-white print:border-0">
            <div className="p-8">
              
              {/* === HEADER === */}
              <header className="text-center mb-10">
                <h1 className="text-4xl font-bold mb-2">{personalInfo.name}</h1>
                <h2 className="text-lg font-medium text-primary mb-4">{personalInfo.title}</h2>

                <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center"><Mail className="w-4 h-4 mr-1" />{personalInfo.email}</div>
                  <div className="flex items-center"><Phone className="w-4 h-4 mr-1" />{personalInfo.phone}</div>
                  <div className="flex items-center"><MapPin className="w-4 h-4 mr-1" />{personalInfo.location}</div>
                </div>

                <div className="flex justify-center gap-3 mt-3 text-xs">
                  <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 px-3 py-1 rounded-md bg-muted/40 hover:bg-muted">
                    <Linkedin className="w-3 h-3" /> LinkedIn
                  </a>
                  <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 px-3 py-1 rounded-md bg-muted/40 hover:bg-muted">
                    <Github className="w-3 h-3" /> GitHub
                  </a>
                </div>

                <div className="mt-5 print:hidden flex justify-center gap-3">
                  <Button size="sm" variant="outline" onClick={() => window.print()}>Print/PDF</Button>
                  <Button size="sm" asChild><Link to="/contact">Hire Me</Link></Button>
                </div>
              </header>

              {/* === SUMMARY === */}
              <section className="mb-8">
                <h3 className="text-lg font-semibold mb-3 flex items-center"><Star className="w-5 h-5 mr-2 text-primary" />Professional Summary</h3>
                <p className="text-sm text-muted-foreground text-justify">{professionalSummary}</p>
              </section>

              <Separator className="my-6" />

              {/* === EXPERIENCE === */}
              <section className="mb-8">
                <h3 className="text-lg font-semibold mb-4 flex items-center"><Building className="w-5 h-5 mr-2 text-primary" />Project Experience</h3>

                {experience.map((project) => (
                  <div key={project.slug} className="mb-6">
                    <h4 className="text-base font-bold">{project.title}</h4>
                    <p className="text-xs text-muted-foreground">{project.category} — {project.year}</p>
                    <p className="text-sm text-muted-foreground mt-2 mb-2">{project.description}</p>
                    <ul className="text-sm list-disc ml-6">{project.features.slice(0, 2).map((feature) => <li key={feature}>{feature}</li>)}</ul>
                    <p className="text-xs text-muted-foreground mt-2">{project.technologies.join(' · ')}</p>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline">View project on GitHub</a>
                  </div>
                ))}
              </section>

              <Separator className="my-6" />

              {/* === EDUCATION === */}
              <section className="mb-8">
                <h3 className="text-lg font-semibold mb-4 flex items-center"><GraduationCap className="w-5 h-5 mr-2 text-primary" />Education</h3>

                {education.map((edu, i) => (
                  <div key={i} className="mb-6">
                    <h4 className="text-base font-bold">{edu.degree}</h4>
                    <p className="text-xs text-muted-foreground">{edu.school} — {edu.location}</p>
                    <p className="text-xs text-muted-foreground mb-2">{edu.period}</p>
                    <ul className="text-sm list-disc ml-6">
                      {edu.details.map((d, i2) => (
                        <li key={i2}>{d}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </section>

              <Separator className="my-6" />

              {/* === SKILLS === */}
              <section className="mb-8">
                <h3 className="text-lg font-semibold mb-4 flex items-center"><Code className="w-5 h-5 mr-2 text-primary" />Technical Skills</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(skills).map(([category, list]) => (
                    <div key={category}>
                      <h4 className="font-semibold text-sm mb-2">{category}</h4>
                      <div className="flex flex-wrap gap-1">
                        {list.map(skill => (
                          <Badge key={skill} variant="secondary" className="text-[10px]">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <Separator className="my-6" />

              {/* === CERTIFICATIONS === */}
              <section className="mb-8">
                <h3 className="text-lg font-semibold mb-3 flex items-center"><Award className="w-5 h-5 mr-2 text-primary" />Certifications</h3>
                {certifications.length === 0 ? (
                  <p className="text-sm italic text-muted-foreground">Add certificates & online courses later</p>
                ) : (
                  <ul className="text-sm list-disc ml-6">
                    {certifications.map((c, i) => <li key={i}>{c}</li>)}
                  </ul>
                )}
              </section>

              {/* === ACHIEVEMENTS === */}
              <section>
                <h3 className="text-lg font-semibold mb-3 flex items-center"><Star className="w-5 h-5 mr-2 text-primary" />Hackathon Projects</h3>
                {achievements.length === 0 ? (
                  <p className="text-sm italic text-muted-foreground">Add Hackathons / Competition results here</p>
                ) : (
                  <ul className="text-sm list-disc ml-6">
                    {achievements.map((a, i) => <li key={i}>{a}</li>)}
                  </ul>
                )}
              </section>

              <footer className="mt-10 text-center text-xs text-muted-foreground">
                References available upon request
              </footer>
            </div>
          </div>
        </div>
      </div>

      {/* === CONNECT SECTION === */}
      <section className="py-12 text-center print:hidden">
        <h2 className="text-xl font-bold mb-3">Let’s Connect</h2>
        <div className="flex justify-center gap-3">
          <Button asChild><Link to="/contact"><Mail className="w-4 h-4 mr-1" />Contact Me</Link></Button>
          <Button variant="outline" asChild><Link to="/projects"><ExternalLink className="w-4 h-4 mr-1" />Projects</Link></Button>
        </div>
      </section>
    </div>
  )
}
