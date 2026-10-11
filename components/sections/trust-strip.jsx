"use client";

import { TrendingUp, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { profile, projects } from "@/lib/portfolio-data";

const trustElements = [
    {
        name: `${projects.length} Portfolio Projects`,
        icon: TrendingUp,
        description: "Building and sharing web, mobile, and AI-assisted applications, with project details and source code available to explore.",
        color: "text-purple-400",
        bgColor: "bg-purple-400/10",
        borderColor: "border-purple-400/20",
    },
    {
        name: "LNCT Engineering Student",
        icon: GraduationCap,
        description:
            `${profile.education[0].degree} student at ${profile.education[0].school}, ${profile.education[0].location}.`,
        color: "text-accent",
        bgColor: "bg-accent/10",
        borderColor: "border-accent/20",
    },
];

export function TrustStrip() {
    return (
        <section className="py-24 bg-background/50 backdrop-blur-sm">
            <div className="container mx-auto max-w-7xl px-4">
                <motion.div
                    className="text-center space-y-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    {/* Section Header */}
                    <div className="space-y-4">
                        <motion.h2
                            className="text-4xl lg:text-5xl font-bold tracking-tight"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            Why Hire{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient">
                                Me?
                            </span>
                        </motion.h2>
                        <motion.h2
                            className="text-4xl font-bold tracking-tight text-foreground"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            A Foundation of Trust and Excellence
                        </motion.h2>
                        <motion.p
                            className="text-lg text-muted-foreground max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            I learn by building practical projects, working through problems,
                            and improving each application. Explore my work to see the
                            technologies and ideas behind it.
                        </motion.p>
                    </div>

                    {/* Trust Badges Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {trustElements.map((element, index) => (
                            <motion.div
                                key={element.name}
                                className="relative group p-6 rounded-xl bg-card/40 border border-primary/10 hover:border-primary/30 hover:bg-card/60 transition-all duration-300 shadow-lg hover:shadow-primary/10"
                                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.3 + index * 0.1,
                                    ease: "easeOut",
                                }}
                                viewport={{ once: true }}
                                whileHover={{
                                    y: -5,
                                    transition: { type: "spring", stiffness: 300 },
                                }}
                            >
                                <div className="flex items-start gap-4">
                                    <div
                                        className={`p-3 rounded-lg ${element.bgColor} border ${element.borderColor}`}
                                    >
                                        <element.icon
                                            className={`w-6 h-6 ${element.color}`}
                                        />
                                    </div>
                                    <div className="text-left">
                                        <h3 className="text-lg font-semibold text-foreground">
                                            {element.name}
                                        </h3>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            {element.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

