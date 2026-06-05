# Talking Shit - Blog Site

A minimal, fast, and responsive blog built with [Astro](https://astro.build) and deployed using Docker.

## 🚀 Features

- **Astro Framework** — Fast, minimal JavaScript, static site generation
- **Responsive Design** — Mobile-first approach with hamburger menu for mobile devices
- **Blog Collection** — Markdown-based blog posts with metadata and tags
- **Docker Deployment** — Multi-stage Docker build for production deployment
- **Dark-Friendly Styling** — Custom CSS with texture background and optimized typography
- **Syntax Highlighting** — Catppuccin Mocha theme for code blocks via Shiki
- **SEO Optimized** — Clean HTML structure and metadata

## 📁 Project Structure

```
blog-site/
├── src/
│   ├── assets/           # Images, icons, textures
│   ├── components/       # Reusable Astro components
│   │   ├── About.astro   # About page content
│   │   ├── Home.astro    # Homepage with blog list
│   │   ├── NavBar.astro  # Navigation with mobile hamburger menu
│   │   ├── BlogCard.astro # Individual blog post card
│   │   └── Tag.astro     # Tag component
│   ├── content/          # Markdown blog posts
│   │   └── blogs/        # Blog collection
│   ├── layouts/
│   │   └── BaseLayout.astro # Base template layout
│   ├── pages/            # Route-based pages
│   │   ├── index.astro   # Homepage
│   │   ├── about.astro   # About page
│   │   └── blogs/
│   │       └── [id].astro # Dynamic blog post pages
│   ├── styles/
│   │   └── global.css    # Global styles
│   └── content.config.ts # Content collection config
├── public/               # Static assets
├── Dockerfile            # Multi-stage Docker build
├── docker-compose.yml    # Docker Compose configuration
├── nginx.conf            # Nginx configuration
├── astro.config.mjs      # Astro configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies
```

## 🛠️ Tech Stack

- **Framework:** Astro 6.4.2
- **Runtime:** Node.js 22.12.0+
- **Deployment:** Docker + Nginx
- **Styling:** CSS with custom variables
- **Content:** Markdown with Astro Content Collections
- **Syntax Highlighting:** Shiki (Catppuccin Mocha theme)

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd blog-site
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## 🧞 Available Commands

All commands are run from the project root:

| Command | Action |
|---------|--------|
| `npm run dev` | Start local dev server at `http://localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview build locally before deploying |
| `npm run astro ...` | Run Astro CLI commands |

## 🌐 Local Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:4321`

## 🐳 Docker Deployment

### Build and run with Docker Compose:

```bash
docker-compose up -d --build
```

The site will be available at `http://localhost:4321`

### Manual Docker build:

```bash
# Build image
docker build -t blog-site .

# Run container
docker run -p 4321:80 blog-site
```

### Container Restart Policy

The `docker-compose.yml` is configured with `restart: always` to automatically restart the container if it crashes or when the host reboots.

## 📝 Writing Blog Posts

Blog posts are stored as Markdown files in `src/content/blogs/`. Each post should have frontmatter metadata:

```markdown
---
title: "My Blog Post Title"
summary: "A brief summary of the post"
tags: ["tag1", "tag2"]
---

Your markdown content here...
```

The `[id].astro` dynamic route automatically generates pages for each post.

## 🎨 Customization

### Global Styles
Edit `src/styles/global.css` to customize:
- Font family and sizes
- Background image and opacity
- Colors and spacing

### Navigation
Modify `src/components/NavBar.astro`:
- Update links
- Adjust hamburger menu behavior
- Customize styling

### Layout
Edit `src/layouts/BaseLayout.astro` to change the base template for all pages.

## 📱 Mobile Responsiveness

The site uses a mobile-first CSS approach:
- **Mobile (< 640px):** Hamburger menu, stacked layout
- **Desktop (≥ 640px):** Full navigation, side-by-side layouts

The hamburger menu toggles on click with smooth animations.

## 🔧 Configuration

### Astro Config
`astro.config.mjs` includes:
- Markdown syntax highlighting with Catppuccin Mocha theme
- Static site generation

### TypeScript
`tsconfig.json` is configured for Astro development with strict mode.

## 🚀 Deployment

To deploy:

1. **Build the site:**
   ```bash
   npm run build
   ```

2. **Deploy using Docker:**
   ```bash
   docker-compose up -d --build
   ```

   Or push to a Docker registry and deploy to your hosting platform (AWS, GCP, Digital Ocean, etc.).


## 📚 Learn More

- [Astro Documentation](https://docs.astro.build)
- [Markdown Guide](https://www.markdownguide.org/)
- [Docker Documentation](https://docs.docker.com)
