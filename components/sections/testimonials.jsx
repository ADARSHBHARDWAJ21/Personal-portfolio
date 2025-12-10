"use client";

import { motion } from "framer-motion";

export function Testimonials() {
    return (
        <section id="testimonials" className="py-20 lg:py-32 relative overflow-hidden scroll-mt-24">
            <div className="container mx-auto max-w-7xl px-4">

                {/* Section Header */}
                <motion.div
                    className="text-center space-y-6 mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl lg:text-4xl font-bold">
                        Testimonials{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                            Coming Soon!
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Exciting testimonials and real client stories will be added here soon. Stay tuned! 🚀
                    </p>
                </motion.div>

                {/* Placeholder UI */}
                <motion.div
                    className="text-center py-16 text-muted-foreground text-xl"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    ⭐ Real client success stories loading…  
                </motion.div>

            </div>

            {/* Background Aesthetic Blur */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-1/3 -right-32 w-64 h-64 bg-gradient-to-l from-accent/5 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 -left-32 w-64 h-64 bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl" />
            </div>
        </section>
    );
}
