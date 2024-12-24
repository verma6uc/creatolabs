import { BlogPosts } from '../../components/blog/BlogPosts';

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-dark-bg to-dark-bg/90 pt-20">
      <div className="container mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-white mb-6">
            CreatorLabs Blog
          </h1>
          <p className="text-white/70 text-lg">
            Insights, tutorials, and updates about AI-driven web design, dynamic evolution, 
            and the future of website creation. Stay ahead with our latest articles and expert tips.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <BlogPosts />
      </div>
    </main>
  );
}
