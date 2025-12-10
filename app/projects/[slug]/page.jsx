import { Link, useParams } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { AnimatedBackground } from '@/components/3d/animated-background'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { Image } from '@/components/ui/image'

const projects = {
  'go-for-it': {
    slug: 'go-for-it',
    title: 'Go For it',
    description: 'Smart AI Itineraries, Hassle-free rides, Meals, and stays. We handle the details, You enjoy the Journey.',
    longDescription: 'A comprehensive travel planning service that simplifies the entire travel experience. Go For it offers AI-powered itinerary planning, seamless booking for flights, hotels, and train tickets, along with 24/7 support. The platform features over 200 destinations and instant booking capabilities, making travel planning effortless and enjoyable.',
    category: 'Travel & Tourism',
    technologies: ['React', 'Next.js', 'AI/ML', 'Travel API'],
    features: [
      'AI Trip Planner',
      'Book Flight',
      'Find Hotel',
      'Book Train Tickets',
      '200+ Destinations',
      '24/7 Support',
      'Instant Booking'
    ],
    image: '/projectimage/goforit.png',
    liveUrl: 'https://goforittt.netlify.app/',
    githubUrl: 'https://github.com/ADARSHBHARDWAJ21/Go-for-it-updatedd',
    featured: true
  }
}

export default function ProjectPage() {
  const { slug } = useParams()
  const project = projects[slug]

  if (!project) {
    return (
      <div className="min-h-screen bg-background relative overflow-x-hidden">
        <div className="fixed top-0 left-0 w-full h-full -z-10">
          <AnimatedBackground />
        </div>
        <div className="relative z-10">
          <div className="container mx-auto px-4 pt-8">
            <Button variant="ghost" asChild className="mb-8">
              <Link to="/projects" className="flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Link>
            </Button>
          </div>
          <section className="py-24 text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              The project you're looking for doesn't exist.
            </p>
            <Button asChild size="lg">
              <Link to="/projects">Back to Projects</Link>
            </Button>
          </section>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* 3D Animated Background */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <AnimatedBackground />
      </div>

      <div className="relative z-10">
        {/* Back Navigation */}
        <div className="container mx-auto max-w-7xl px-4 pt-8">
          <Button variant="ghost" asChild className="mb-8">
            <Link to="/projects" className="flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>
          </Button>
        </div>

        {/* Project Details */}
        <section className="container mx-auto max-w-7xl px-4 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Card className="mb-8 overflow-hidden">
              {project.image && (
                <div className="relative w-full h-64 md:h-96 overflow-hidden bg-muted/20">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    fill
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-4xl mb-4">{project.title}</CardTitle>
                <CardDescription className="text-lg">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">About the Project</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-muted-foreground">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-md text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <Button asChild size="lg">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && project.githubUrl !== '#' && (
                    <Button asChild variant="outline" size="lg">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>
      </div>
    </div>
  )
}
