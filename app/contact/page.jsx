'use client'

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { AnimatedBackground } from '@/components/3d/animated-background'
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  Send,
  CheckCircle,
  Github,
  Linkedin,
  Cloud,
  ShieldCheck,
  BrainCircuit,
} from 'lucide-react'

// Updated with your real information
const contactMethods = [
  {
    title: 'Email',
    description: 'Best way to reach me',
    value: 'adarshbhardwaj1919@gmail.com',
    icon: Mail,
    action: 'mailto:adarshbhardwaj1919@gmail.com',
    primary: true,
  },
  {
    title: 'Phone',
    description: 'Call for urgent inquiries',
    value: '+91 8349859827',
    icon: Phone,
    action: 'tel:+918349859827',
    primary: false,
  },
  {
    title: 'Location',
    description: 'Based in Bhopal, India',
    value: 'Available for remote work globally',
    icon: MapPin,
    action: null,
    primary: false,
  },
]

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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Here you would integrate a real email sending service (e.g., Resend, SendGrid)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background relative overflow-x-hidden flex items-center justify-center">
        <div className="fixed top-0 left-0 w-full h-full -z-10"><AnimatedBackground /></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-md mx-auto text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold mb-4">Message Sent!</h1>
            <p className="text-muted-foreground mb-8">
              Thank you for reaching out, Adarsh. I&apos;ll get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
              <Button variant="outline" asChild><Link to="/">Back to Home</Link></Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
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
                      <CardTitle className="text-2xl">Send Me a Message</CardTitle>
                      <CardDescription>
                        Have a research idea, project, or question? Fill out the form below.
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
                          <select id="projectType" name="projectType" value={formData.projectType} onChange={handleInputChange} className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent">
                            <option value="freelance">Freelance Project Inquiry</option>
                            <option value="Research">Research Idea</option>
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
                            <><Send className="w-4 h-4 mr-2" /> Send Message</>
                          )}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-8">
                  {/* --- REDESIGNED HIRE ME CARD --- */}
                  <Card className="overflow-hidden">
                    <CardHeader className="p-0">
                      <div className="bg-muted p-4 border-b">
                        <CardTitle>Professional Profiles</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 space-y-4">
                      {/* Freelancer Profile */}
                      <div className="flex items-center gap-4 p-3 rounded-lg border bg-card">
                        <div>
                          <h4 className="font-bold">ADARSH BHARDWAJ</h4>
                          <p className="text-xs text-muted-foreground">Full Stack Developer</p>
                          <a href="https://github.com/ADARSHBHARDWAJ21" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-primary hover:underline">
                            View My GitHub Profile
                          </a>
                        </div>
                      </div>
                      {/* Other Links */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <Button variant="outline" className="w-full justify-start" asChild>
                          <a href="https://www.linkedin.com/in/adarsh-bhardwaj-92072b316/" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
                          </a>
                        </Button>
                        <Button variant="outline" className="w-full justify-start" asChild>
                          <a href="https://github.com/ADARSHBHARDWAJ21" target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" /> GitHub
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {contactMethods.map((method) => (
                        <div key={method.title} className="flex items-start">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-4 ${method.primary ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                            <method.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="font-semibold">{method.title}</h4>
                            {method.action ? (
                              <a href={method.action} className="text-sm text-primary hover:underline">{method.value}</a>
                            ) : (
                              <p className="text-sm">{method.value}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

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
                          <span>Research Collaboration</span>
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
                    I&apos;m currently available for new freelance projects and open to reserach collaborations. I typically respond within 24 hours and can start immediately.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Do you only work through Freelancer.com?</h3>
                  <p className="text-sm text-muted-foreground">
                    While I have a strong 5-star reputation on Freelancer.com, I am open to direct collaborations and long-term contracts outside the platform.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">What technologies are you most passionate about?</h3>
                  <p className="text-sm text-muted-foreground">
                    I&apos;m passionate about web privacy, AI technologies, and applying deep learning to solve real-world business problems.
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

