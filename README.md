# CreatorLabs Website

The official website for CreatorLabs, showcasing our AI-powered website creation platform.

## Features

- Modern, responsive design using Next.js 13 and Tailwind CSS
- Dynamic blog system with categorization
- Interactive AI simulation demonstrations
- Comprehensive onboarding wizard
- Token-based pricing system visualization

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/verma6uc/creatolabs.git
```

2. Install dependencies:
```bash
cd creatolabs
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js 13 app directory
│   ├── blog/              # Blog posts and categories
│   ├── features/          # Feature pages
│   ├── about/             # About pages
│   └── ...
├── components/            # React components
│   ├── blog/             # Blog-related components
│   ├── features/         # Feature-related components
│   ├── shared/           # Shared components
│   └── ...
└── types/                # TypeScript type definitions
```

## Changelog

### [1.2.0] - 2024-01-05
- Added blog sidebar with search, categories, and newsletter signup
- Created dynamic category pages for blog posts
- Added BlogPostLayout component for consistent blog post styling
- Updated all blog posts to use new layout system
- Fixed blog post navigation and category links

### [1.1.0] - 2024-01-04
- Added comprehensive blog section with AI-focused articles
- Integrated Salesken experience into content
- Improved mobile responsiveness
- Enhanced typography and visual hierarchy

### [1.0.0] - 2024-01-03
- Initial release
- Core pages and components
- Basic navigation and layout
- Responsive design implementation

## License

Copyright © 2024 CreatorLabs. All rights reserved.
