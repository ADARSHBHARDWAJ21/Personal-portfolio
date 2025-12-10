"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Image } from "@/components/ui/image";

const featuredProjects = [
    {
        slug: 'go-for-it',
        title: 'Go For it',
        description: 'Smart AI Itineraries, Hassle-free rides, Meals, and stays. We handle the details, You enjoy the Journey.',
        category: 'Travel & Tourism',
        technologies: ['React', 'Next.js', 'AI/ML'],
        image: '/projectimage/goforit.png',
        featured: true
    }
];

export function FeaturedProjects() {
    return (
        <section className="py-24 bg-background/50 backdrop-blur-sm">
            <div className="container mx-auto max-w-7xl px-4">

                {/* Section Title */}
                <motion.div
                    className="text-center space-y-6 mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <motion.h2
                        className="text-4xl lg:text-5xl font-bold tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Featured
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient">
                            {" "}Projects
                        </span>
                    </motion.h2>

                    <motion.p
                        className="text-lg text-muted-foreground max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        Explore some of my recent work and projects that showcase my skills and expertise.
                    </motion.p>
                </motion.div>

                {/* Featured Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={project.slug}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
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
                                <CardFooter>
                                    <Button asChild variant="default" className="w-full">
                                        <Link to={`/projects/${project.slug}`}>
                                            View Details
                                            <ArrowRight className="w-4 h-4 ml-2" />
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Button */}
                <motion.div
                    className="text-center mt-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <Button asChild size="lg" className="font-semibold">
                        <Link to="/projects">
                            View All Projects <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
