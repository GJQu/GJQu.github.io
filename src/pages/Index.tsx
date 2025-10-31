import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center justify-center px-4 pt-20"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <div className="bg-card border-4 border-border shadow-brutal-lg p-8 md:p-12">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Hi, I'm <span className="bg-neubrutalist-yellow px-4 py-2 inline-block">Gavin Qu</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-muted-foreground font-medium">
                Designer, Developer, and Digital Craftsperson. I build bold, functional experiences for the web.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/projects">
                  <Button variant="neubrutalist" size="lg">
                    View Projects <ArrowRight className="ml-2" />
                  </Button>
                </Link>
                <Link to="/blog">
                  <Button variant="outline" size="lg">
                    Read Blog
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/blog" className="group">
              <div className="bg-neubrutalist-yellow border-4 border-border shadow-brutal p-8 transition-all group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none h-full">
                <h3 className="text-2xl font-bold mb-4">Blog</h3>
                <p className="text-muted-foreground font-medium">
                  Thoughts on design, development, and digital culture. Updated biweekly.
                </p>
              </div>
            </Link>

            <Link to="/projects" className="group">
              <div className="bg-neubrutalist-blue border-4 border-border shadow-brutal p-8 transition-all group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none h-full">
                <h3 className="text-2xl font-bold mb-4">Projects</h3>
                <p className="text-foreground font-medium">
                  A selection of work that showcases my approach to solving problems.
                </p>
              </div>
            </Link>

            <Link to="/bio" className="group">
              <div className="bg-neubrutalist-coral border-4 border-border shadow-brutal p-8 transition-all group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none h-full">
                <h3 className="text-2xl font-bold mb-4">About Me</h3>
                <p className="text-foreground font-medium">
                  Learn more about my background, skills, and what drives my work.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
