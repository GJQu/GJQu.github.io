import Navigation from "@/components/Navigation";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform Redesign",
    description: "Complete redesign and development of a modern e-commerce platform with focus on conversion optimization and user experience.",
    tags: ["React", "TypeScript", "Stripe"],
    link: "#",
    color: "bg-neubrutalist-yellow"
  },
  {
    id: 2,
    title: "Design System Documentation",
    description: "Comprehensive design system with component library, usage guidelines, and interactive documentation for a SaaS product.",
    tags: ["Figma", "Storybook", "React"],
    link: "#",
    color: "bg-neubrutalist-blue"
  },
  {
    id: 3,
    title: "Portfolio Dashboard",
    description: "Real-time investment portfolio tracking dashboard with data visualization and performance analytics.",
    tags: ["React", "D3.js", "Node.js"],
    link: "#",
    color: "bg-neubrutalist-coral"
  },
  {
    id: 4,
    title: "Community Platform",
    description: "Social platform connecting local creators with features for events, messaging, and content sharing.",
    tags: ["Next.js", "Supabase", "Tailwind"],
    link: "#",
    color: "bg-neubrutalist-yellow"
  },
  {
    id: 5,
    title: "Task Management App",
    description: "Minimalist task management application with smart categorization and productivity insights.",
    tags: ["React", "TypeScript", "Firebase"],
    link: "#",
    color: "bg-neubrutalist-blue"
  },
  {
    id: 6,
    title: "Brand Identity Refresh",
    description: "Complete brand refresh including logo design, color system, typography, and brand guidelines.",
    tags: ["Branding", "Design", "Figma"],
    link: "#",
    color: "bg-neubrutalist-coral"
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-28 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Projects</h1>
            <p className="text-xl text-muted-foreground font-medium">
              Selected work spanning design, development, and creative problem-solving.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.link}
                className="group block"
                target="_blank"
                rel="noopener noreferrer"
              >
                <article className={`${project.color} border-4 border-border shadow-brutal p-6 h-full transition-all group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none`}>
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold flex-1">
                      {project.title}
                    </h3>
                    <ExternalLink className="w-5 h-5 flex-shrink-0 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                  
                  <p className="text-foreground font-medium mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-background border-2 border-border text-xs font-bold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </a>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
