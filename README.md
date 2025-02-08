# Portfolio

A fully customizable portfolio website made with:

- Next.js
- Tailwind CSS
- Framer Motion
- Contentlayer
- shadcn/ui

## Features

- Fully customizable with Contentlayer.
- Blog pages.
- Precise animations with Framer Motion.
- Add / edit projects, blog posts, and more with MDX.
- Typesafe and secure.
- Optimized for performance.
- OpenGraph and Twitter card support.
- Static pages for fast loading.
- (WIP) Integration with Github / Leetcode API.
- (WIP) SEO optimized.

### Blog Features

- Static generated blog pages with zero latency.
- Syntax highlighting Code blocks.
- Custom Components.
  - Code blocks (with syntax highlighting)
  - Auto generated 'Table of Contents' and navigation.
  - Callouts
- (WIP) OpenGraph images.
- (WIP) SEO optimized.
- Intellegent blog search.
- Blog history table.

![image](https://github.com/user-attachments/assets/b6eb0ff5-884a-46e7-85c6-e3094555f575)

[Demo Portfolio](https://zackozack.xyz)

## Routes

```bash
/

/about-me

/blogs

/blogs/[slug]

/contact

/projects
```

## Runnning Locally

1. Clone the repository

```bash
pnpm install
```

2. Generate pages from Contentlayer

```bash
pnpm build:content
```

**Please ⭐ star this repo, if you found this project helpful**
