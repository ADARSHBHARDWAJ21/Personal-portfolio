'use client'

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { profile } from '@/lib/portfolio-data'
import { ContactProfileCard } from '@/components/contact-profile-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { AnimatedBackground } from '@/components/3d/animated-background'
import {
  MapPin,
  Calendar,
  Clock,
  Send,
  CheckCircle,
  Cloud,
  ShieldCheck,
  BrainCircuit,
} from 'lucide-react'

// Updated with your expertise from your resume
const expertiseAreas = [
  {
    title: 'Full Stack Development',
    description: 'Building end-to-end web applications with modern frameworks like React, Next.js, and Python, creating scalable and performant solutions.',
    icon: BrainCircuit,
  },
  {
    title: 'Frontend Development',
    description: 'Creating responsive and interactive user interfaces using React, Next.js, and modern CSS frameworks like Tailwind CSS.',
    icon: ShieldCheck,
  },
  {
    title: 'Backend Development',
    description: 'Developing robust backend systems with Python, Node.js, and databases, ensuring scalability and reliability.',
    icon: Cloud,
  },
];


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: 'general',
  })
  const isSubmitting = false
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(formData.subject.trim())
    const body = encodeURIComponent('Hi Adarsh,\n\n' + formData.message.trim() + '\n\nInquiry: ' + formData.projectType + '\nName: ' + formData.name.trim() + '\nReply email: ' + formData.email.trim())
    window.location.href = 'mailto:' + profile.email + '?subject=' + subject + '&body=' + body
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background relative isolate overflow-x-hidden flex items-center justify-center">
        <div className="fixed top-0 left-0 w-full h-full -z-10"><AnimatedBackground /></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-md mx-auto text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold mb-4">Email Draft Requested</h1>
            <p className="text-muted-foreground mb-8">
              Finish sending the draft in your email app. If it did not open, email me directly at {profile.email}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => setIsSubmitted(false)}>Edit Message</Button>
              <Button variant="outline" asChild><Link to="/">Back to Home</Link></Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background relative isolate overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full h-full -z-10"><AnimatedBackground /></div>
      <div className="relative z-10">
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4">Full Stack Developer</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Let&apos;s Build Something Amazing Together
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Full Stack Developer specializing in modern web technologies, building scalable applications with React, Next.js, and Python. I am passionate about creating innovative solutions and I am <strong>open for collaborations</strong> and <strong>freelance projects</strong>.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="secondary"><Clock className="w-3 h-3 mr-1" /> 24h Response Time</Badge>
                <Badge variant="secondary"><Calendar className="w-3 h-3 mr-1" /> Open to Opportunities</Badge>
                <Badge variant="secondary"><MapPin className="w-3 h-3 mr-1" /> Remote Available</Badge>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl">Write Me a Message</CardTitle>
                      <CardDescription>
                        Have a project or question? This form opens an email draft. Review and send it from your email app.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name *</label>
                            <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Your full name" />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address *</label>
                            <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required placeholder="your.email@example.com" />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="projectType" className="block text-sm font-medium mb-2">Inquiry Type</label>
                          <select id="projectType" name="projectType" value={formData.projectType} onChange={handleInputChange} className="inquiry-select w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent">
                            <option value="freelance">Freelance Project Inquiry</option>
                            <option value="Research">Project Idea</option>
                            <option value="collaboration">Collaboration Proposal</option>
                            <option value="general">General Question</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject *</label>
                          <Input id="subject" name="subject" value={formData.subject} onChange={handleInputChange} required placeholder="Brief description of your inquiry" />
                        </div>
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
                          <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={6} placeholder="Tell me more about the opportunity, project, timeline, etc..." />
                        </div>
                        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                          {isSubmitting ? (
                            <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" /> Sending...</>
                          ) : (
                            <><Send className="w-4 h-4 mr-2" /> Open Email Draft</>
                          )}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-8">
                  <ContactProfileCard />

                  <Card>
                    <CardHeader>
                      <CardTitle>Key Expertise</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {expertiseAreas.map((service) => (
                        <div key={service.title} className="flex items-start">
                          <service.icon className="w-5 h-5 text-primary mr-3 mt-1" />
                          <div>
                            <h4 className="font-semibold text-sm">{service.title}</h4>
                            <p className="text-xs text-muted-foreground">{service.description}</p>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Current Status</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center justify-between">
                          <span>Freelance Work</span>
                          <Badge variant="default" className="text-xs bg-green-600">Available</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Project Collaboration</span>
                           <Badge variant="default" className="text-xs">Actively Seeking</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Time Zone</span>
                          <span className="text-muted-foreground">IST (India)</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-2">What is your current availability?</h3>
                  <p className="text-sm text-muted-foreground">
                    I’m open to project discussions and collaboration opportunities. Email me with the scope and timeline to discuss availability.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">How can we discuss a project?</h3>
                  <p className="text-sm text-muted-foreground">
                    You can reach me directly by email or connect through LinkedIn. Share your project idea and the kind of help you need.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">What technologies are you most passionate about?</h3>
                  <p className="text-sm text-muted-foreground">
                    I’m interested in full-stack web development and AI applications, and I learn by building practical projects.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">What technologies do you specialize in?</h3>
                  <p className="text-sm text-muted-foreground">
                    I specialize in modern web development technologies including React, Next.js, JavaScript, Python, and various databases. I focus on building scalable, performant applications with clean code and best practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

