"use client";

import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AnimatedBackground } from '@/components/3d/animated-background';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';

const projects = [
  {
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
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* 3D Animated Background */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <AnimatedBackground />
      </div>

      <div className="relative z-10">
        <div className="container mx-auto max-w-7xl px-4 py-24">
          {/* Page Header */}
          <motion.div
            className="text-center space-y-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.h1
              className="text-4xl lg:text-5xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              My
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient">
                {" "}Projects
              </span>
            </motion.h1>
            <motion.p
              className="text-lg text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Explore my portfolio of projects showcasing my skills and expertise in web development, AI, and full-stack solutions.
            </motion.p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  {project.image && (
                    <div className="relative w-full h-48 overflow-hidden bg-muted/20">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        fill
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{project.title}</CardTitle>
                    <CardDescription className="text-base mt-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-medium mb-2">Category:</p>
                        <p className="text-sm text-muted-foreground">{project.category}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-2">Technologies:</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button asChild variant="default" className="flex-1">
                      <Link to={`/projects/${project.slug}`}>
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    {project.liveUrl && project.liveUrl !== '#' && (
                      <Button asChild variant="outline" size="icon">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
