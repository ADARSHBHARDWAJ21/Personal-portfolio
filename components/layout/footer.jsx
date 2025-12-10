import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin } from "lucide-react";

// Minimal custom Freelancer logo (origami-style bird) in single color to match icon set
const XLogo = ({ className }) => (
  <svg
    viewBox="0 0 1024 1024"
    fill="currentColor"
    role="img"
    aria-label="X"
    className={className}
  >
    <path d="M818 800 498.11 333.745l.546.437L787.084 0h-96.385L455.738 272 269.15 0H16.367l298.648 435.31-.036-.037L0 800h96.385l261.222-302.618L565.217 800zM230.96 72.727l448.827 654.546h-76.38L154.217 72.727z" />
  </svg>
);


export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground font-mono font-bold text-lg">
                AB
              </div>
              <span className="font-semibold text-foreground">Adarsh Bhardwaj</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm">
              Full Stack Developer building reliable, modern web applications for startups and teams worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/projects" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Projects
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                About
              </Link>
              <Link to="/experience" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Experience
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Connect</h3>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/ADARSHBHARDWAJ21" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://www.linkedin.com/in/adarsh-bhardwaj-92072b316/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Adarsh Bhardwaj. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

