import { useParams, Link, Navigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { blogPosts } from "@/data/blog";
import { Calendar, Tag, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  
  const currentIndex = blogPosts.findIndex(post => post.id === id);
  const post = blogPosts[currentIndex];
  
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-28 pb-20">
        <div className="max-w-3xl mx-auto">
          <Link to="/blog">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2" />
              Back to Blog
            </Button>
          </Link>

          <article>
            <header className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
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

              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-neubrutalist-yellow border-2 border-border text-sm font-bold"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <div className="bg-card border-4 border-border shadow-brutal p-6 md:p-8 whitespace-pre-wrap font-medium leading-relaxed">
                {post.content}
              </div>
            </div>
          </article>

          {/* Navigation */}
          <nav className="mt-16 pt-8 border-t-4 border-border">
            <div className="grid md:grid-cols-2 gap-6">
              {prevPost && (
                <Link to={`/blog/${prevPost.id}`} className="group">
                  <div className="bg-card border-4 border-border shadow-brutal p-6 transition-all group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <ArrowLeft className="w-4 h-4" />
                      <span className="font-bold">Previous</span>
                    </div>
                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                      {prevPost.title}
                    </h3>
                  </div>
                </Link>
              )}
              
              {nextPost && (
                <Link to={`/blog/${nextPost.id}`} className="group md:col-start-2">
                  <div className="bg-card border-4 border-border shadow-brutal p-6 transition-all group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none text-right">
                    <div className="flex items-center justify-end gap-2 text-sm text-muted-foreground mb-2">
                      <span className="font-bold">Next</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                      {nextPost.title}
                    </h3>
                  </div>
                </Link>
              )}
            </div>
          </nav>
        </div>
      </main>
    </div>
  );
};

export default BlogPost;
