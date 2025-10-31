import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { blogPosts } from "@/data/blog";
import { Calendar, Tag } from "lucide-react";

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-28 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Blog</h1>
            <p className="text-xl text-muted-foreground font-medium">
              Thoughts, tutorials, and observations. Updated biweekly.
            </p>
          </div>

          <div className="space-y-8">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="block group"
              >
                <article className="bg-card border-4 border-border shadow-brutal p-6 md:p-8 transition-all group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none">
                  <h2 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground mb-4 font-medium">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-muted border-2 border-border text-sm font-bold"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
