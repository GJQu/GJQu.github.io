import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import headshot from "@/assets/headshot.jpg";

const Bio = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-28 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">About Me</h1>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-1">
              <div className="border-4 border-border shadow-brutal-lg overflow-hidden">
                <img 
                  src={headshot} 
                  alt="Profile" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-2 space-y-6">
              <div className="bg-card border-4 border-border shadow-brutal p-6">
                <h2 className="text-2xl font-bold mb-4">Hi, I'm Your Name</h2>
                <div className="space-y-4 text-lg font-medium text-muted-foreground">
                  <p>
                    I'm a designer and developer based in [Your City], focused on creating bold, functional digital experiences that don't compromise on aesthetics or usability.
                  </p>
                  <p>
                    My work spans web design, front-end development, and user experience design. I believe in design that's honest, direct, and serves a purpose—no unnecessary flourishes, just strong fundamentals executed well.
                  </p>
                  <p>
                    When I'm not pushing pixels or writing code, you'll find me exploring design systems, contributing to open source projects, or experimenting with new web technologies.
                  </p>
                </div>
              </div>

              <div className="bg-neubrutalist-yellow border-4 border-border shadow-brutal p-6">
                <h3 className="text-xl font-bold mb-4">What I Do</h3>
                <ul className="space-y-2 font-bold">
                  <li>• Web Design & Development</li>
                  <li>• Design Systems & Component Libraries</li>
                  <li>• User Experience & Interface Design</li>
                  <li>• Front-End Architecture</li>
                  <li>• Brand Identity & Visual Design</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-neubrutalist-blue border-4 border-border shadow-brutal-lg p-8">
            <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="default" size="lg">
                  <Github className="mr-2" />
                  GitHub
                </Button>
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="default" size="lg">
                  <Linkedin className="mr-2" />
                  LinkedIn
                </Button>
              </a>
              <a href="mailto:your.email@example.com">
                <Button variant="default" size="lg">
                  <Mail className="mr-2" />
                  Email
                </Button>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Bio;
