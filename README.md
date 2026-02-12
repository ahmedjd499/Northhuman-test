# Panto - Furniture Landing Page

A pixel-perfect landing page implementation based on the [Panto Furniture Landing Page Figma Design](https://www.figma.com/community/file/1061732519182077733/panto-furniture-landing-page-design).

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: TypeScript

## Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build

# Start the production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css       # Global styles & Tailwind theme
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page (composes all sections)
└── components/
    ├── Navbar.tsx         # Fixed navigation bar with scroll behavior
    ├── Hero.tsx           # Hero section with search bar
    ├── WhyChooseUs.tsx    # "Why Choosing Us" features section
    ├── Products.tsx       # Best selling products grid
    ├── Experiences.tsx    # Experiences section with stats
    ├── Materials.tsx      # Materials section with image grid
    ├── Testimonials.tsx   # Customer testimonials carousel
    └── Footer.tsx         # Footer with links and social media
```

## Design Decisions

- **System fonts** are used for fast loading without external font dependencies
- **CSS gradients** serve as placeholder images (replace with actual product images in production)
- **Responsive design** works on mobile, tablet, and desktop breakpoints
- **Accessible** navigation with keyboard support and ARIA labels
- **Component-based architecture** for maintainability and reusability