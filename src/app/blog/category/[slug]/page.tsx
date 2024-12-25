'use client';

import BlogPostLayout from '../../../../components/blog/BlogPostLayout';

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

const categoryTitles: { [key: string]: string } = {
  'ai-technology': 'AI Technology',
  'web-development': 'Web Development',
  'design-innovation': 'Design Innovation',
  'business-strategy': 'Business Strategy',
  'user-experience': 'User Experience',
  'analytics': 'Analytics'
};

export default function CategoryPage({ params }: CategoryPageProps) {
  const categoryTitle = categoryTitles[params.slug] || params.slug;

  return (
    <BlogPostLayout>
      <div className="max-w-4xl">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mt-4 mb-6">
            {categoryTitle}
          </h1>
          <p className="text-xl text-white/80 mb-8">
            Latest articles in {categoryTitle.toLowerCase()}
          </p>
        </header>

        <div className="space-y-12">
          {/* Placeholder for blog posts in this category */}
          <div className="bg-white/5 rounded-xl p-8">
            <p className="text-white/90 text-center">
              Coming soon: Blog posts in this category will be displayed here.
            </p>
          </div>
        </div>
      </div>
    </BlogPostLayout>
  );
}
