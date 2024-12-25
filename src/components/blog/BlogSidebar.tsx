'use client';

interface BlogPost {
  title: string;
  slug: string;
  date: string;
}

const recentPosts: BlogPost[] = [
  {
    title: "Why CreatorLabs Stands Apart: Our Vision for AI-Powered Web Development",
    slug: "/blog/why-creatorlabs-stands-apart",
    date: "December 18, 2024"
  },
  {
    title: "Token-Based Pricing: A New Era in Web Development Economics",
    slug: "/blog/token-based-pricing",
    date: "December 17, 2024"
  },
  {
    title: "NLP-Driven Website Copy: The Future of Content Creation",
    slug: "/blog/nlp-website-copy",
    date: "December 16, 2024"
  },
  {
    title: "Dynamic Evolution: The Future of Website Development",
    slug: "/blog/dynamic-evolution-websites",
    date: "December 14, 2024"
  },
  {
    title: "AI-Powered Conversion Insights: The Future of Web Analytics",
    slug: "/blog/conversion-insights",
    date: "December 13, 2024"
  }
];

const categories = [
  { name: "AI Technology", slug: "ai-technology", count: 8 },
  { name: "Web Development", slug: "web-development", count: 6 },
  { name: "Design Innovation", slug: "design-innovation", count: 5 },
  { name: "Business Strategy", slug: "business-strategy", count: 4 },
  { name: "User Experience", slug: "user-experience", count: 4 },
  { name: "Analytics", slug: "analytics", count: 3 }
];

export default function BlogSidebar() {
  return (
    <aside className="w-full lg:w-80 space-y-8">
      {/* Search Box */}
      <div className="bg-white/5 rounded-xl p-6">
        <h3 className="text-xl font-montserrat font-bold text-sage-green mb-4">Search</h3>
        <div className="relative">
          <input 
            type="text"
            placeholder="Search articles..."
            className="w-full bg-white/10 text-white border border-sage-green/20 rounded-lg px-4 py-2 focus:outline-none focus:border-sage-green/50 placeholder-white/50"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <svg className="w-5 h-5 text-sage-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="bg-white/5 rounded-xl p-6">
        <h3 className="text-xl font-montserrat font-bold text-sage-green mb-4">Recent Posts</h3>
        <div className="space-y-4">
          {recentPosts.map((post, index) => (
            <a 
              key={index}
              href={post.slug}
              className="block group"
            >
              <div className="space-y-1">
                <h4 className="text-white/90 group-hover:text-sage-green transition-colors duration-200 line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-sm text-sage-green/80">{post.date}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white/5 rounded-xl p-6">
        <h3 className="text-xl font-montserrat font-bold text-sage-green mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category, index) => (
            <a 
              key={index}
              href={`/blog/category/${category.slug}`}
              className="flex items-center justify-between group"
            >
              <span className="text-white/90 group-hover:text-sage-green transition-colors duration-200">
                {category.name}
              </span>
              <span className="text-sm text-sage-green/80 bg-sage-green/10 px-2 py-1 rounded">
                {category.count}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-br from-sage-green/20 to-sage-green/5 rounded-xl p-6 border border-sage-green/30">
        <h3 className="text-xl font-montserrat font-bold text-sage-green mb-4">Newsletter</h3>
        <p className="text-white/80 mb-4">Stay updated with our latest insights and news.</p>
        <div className="space-y-3">
          <input 
            type="email"
            placeholder="Your email address"
            className="w-full bg-white/10 text-white border border-sage-green/20 rounded-lg px-4 py-2 focus:outline-none focus:border-sage-green/50 placeholder-white/50"
          />
          <button className="w-full bg-sage-green text-white px-4 py-2 rounded-lg hover:bg-sage-green/90 transition-colors duration-200">
            Subscribe
          </button>
        </div>
      </div>
    </aside>
  );
}
