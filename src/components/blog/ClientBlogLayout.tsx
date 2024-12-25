'use client';

import BlogPostLayout from './BlogPostLayout';

interface ClientBlogLayoutProps {
  children: React.ReactNode;
}

export default function ClientBlogLayout({ children }: ClientBlogLayoutProps) {
  return <BlogPostLayout>{children}</BlogPostLayout>;
}
