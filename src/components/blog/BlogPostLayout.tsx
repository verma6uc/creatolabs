interface BlogPostLayoutProps {
  children: React.ReactNode;
}

export default function BlogPostLayout({ children }: BlogPostLayoutProps) {
  return (
    <div className="min-h-screen bg-dark-bg text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {children}
        </div>
      </div>
    </div>
  );
}
