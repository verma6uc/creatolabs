interface BlogPost {
  date: string;
  title: string;
  overview: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    date: 'October 1, 2024',
    title: 'How AI is Transforming the Web Design Landscape',
    overview: 'Overview of AI\'s role in modern web design, comparing traditional vs. AI-assisted site creation, and introducing our unique approach.',
    slug: 'ai-transforming-web-design'
  },
  {
    date: 'October 8, 2024',
    title: 'The Power of Dynamic Evolution: Why Static Websites Are a Thing of the Past',
    overview: 'Explore the contrast between static and continuously evolving websites, and how real-time user data informs site improvements.',
    slug: 'dynamic-evolution-websites'
  },
  {
    date: 'October 15, 2024',
    title: 'How Competitor Research Fuels AI-Optimized SEO',
    overview: 'Deep dive into the importance of competitor analysis in SEO and how automated competitor tracking can boost your rankings.',
    slug: 'competitor-research-seo'
  },
  {
    date: 'October 22, 2024',
    title: 'A Deep Dive into Token-Based Pricing: Pay for What You Need',
    overview: 'Understanding subscription vs. token-based models and why tokens can be more flexible & cost-effective.',
    slug: 'token-based-pricing'
  },
  {
    date: 'October 29, 2024',
    title: 'Glassmorphism & Beyond: The Latest Web Design Trends for 2024',
    overview: 'Explore modern design approaches like glassmorphism and neomorphism, with visual examples and implementation tips.',
    slug: 'web-design-trends-2024'
  },
  {
    date: 'November 5, 2024',
    title: 'From Idea to Blueprint: Crafting Your Website Roadmap in Minutes',
    overview: 'A detailed walkthrough of our product\'s onboarding wizard and user-centered design principles during setup.',
    slug: 'website-blueprint-creation'
  },
  {
    date: 'November 12, 2024',
    title: 'Harnessing NLP for High-Converting Website Copy',
    overview: 'Learn about Natural Language Processing for content generation and balancing AI outputs with human creativity.',
    slug: 'nlp-website-copy'
  },
  {
    date: 'November 19, 2024',
    title: 'Measuring What Matters: Turning Clicks into Conversion Insights',
    overview: 'Understanding click tracking, heatmaps, and funnel analysis for ongoing website improvement.',
    slug: 'conversion-insights'
  },
  {
    date: 'November 26, 2024',
    title: 'Real Businesses, Real Results: AI-Powered Website Success Stories',
    overview: 'Discover real-world case studies showcasing the power of AI in website optimization and development.',
    slug: 'ai-website-success-stories'
  },
  {
    date: 'December 3, 2024',
    title: 'The Ultimate Pre-Launch Checklist for AI-Optimized Websites',
    overview: 'Everything you need to know about domain setup, brand identity, and content strategy for your website launch.',
    slug: 'website-launch-checklist'
  },
  {
    date: 'December 10, 2024',
    title: 'The Next Frontier: AI, AR, and the Future of Interactive Web Experiences',
    overview: 'Exploring emerging trends in AR/VR, voice interfaces, and the future of AI-driven user experiences.',
    slug: 'future-web-experiences'
  },
  {
    date: 'December 17, 2024',
    title: 'Token Hacks: Getting the Most Out of Your AI Budget',
    overview: 'Advanced tips and strategies for optimizing your token usage and tracking efficiency.',
    slug: 'token-optimization-tips'
  }
];

export function BlogPosts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogPosts.map((post) => (
        <article 
          key={post.slug}
          className="group relative bg-gradient-to-br from-white/[0.12] to-white/[0.08] backdrop-blur-lg border border-white/20 rounded-lg p-6 hover:border-sage-green/50 transition-all duration-300 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[inset_0_0_20px_rgba(147,197,153,0.1)]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-sage-green/10 via-sage-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
          <time className="relative text-sage-green text-sm font-medium">{post.date}</time>
          <h2 className="relative text-xl font-montserrat font-bold text-white mt-2 mb-3 group-hover:text-sage-green-light transition-colors duration-300">
            {post.title}
          </h2>
          <p className="relative text-white/80 mb-4 line-clamp-3">
            {post.overview}
          </p>
          <a 
            href={`/blog/${post.slug}`}
            className="relative inline-flex items-center text-sage-green hover:text-sage-green-light transition-colors duration-200 font-medium"
          >
            Read more
            <svg 
              className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </a>
        </article>
      ))}
    </div>
  );
}
