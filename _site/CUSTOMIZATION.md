# Al-Folio Theme Customization Guide

This site uses the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme. This guide explains how to explore and modify the key components.

## Directory Structure

```
.
├── _config.yml          # Main site configuration (name, features, plugins)
├── _pages/              # Top-level pages (about, blog, projects, cv)
├── _posts/              # Blog posts (markdown files with YYYY-MM-DD prefix)
├── _projects/           # Project entries (one .md per project)
├── _data/
│   ├── socials.yml      # Social media links (GitHub, LinkedIn, X, etc.)
│   ├── cv.yml           # Structured CV data (optional, for rendered CV)
│   └── repositories.yml # GitHub repos to display on repositories page
├── _includes/           # Liquid template partials (header, footer, etc.)
├── _layouts/            # Page layout templates (about, post, cv, etc.)
├── _sass/               # SCSS stylesheets
│   ├── _variables.scss  # Colors, fonts, spacing — start here for styling
│   ├── _themes.scss     # Light/dark mode color definitions
│   ├── _typography.scss # Font sizes, line heights, headings
│   └── _layout.scss     # Page structure and spacing
├── _plugins/            # Ruby plugins for build-time processing
├── _bibliography/       # BibTeX files for publications page
├── assets/
│   ├── img/             # Images used by al-folio (post thumbnails, profile pic)
│   ├── images/          # Original images organized by year (2024/, 2025/)
│   ├── pdf/             # PDF files (CV, papers)
│   ├── css/             # Compiled CSS and vendor stylesheets
│   ├── js/              # JavaScript (search, MathJax, theme toggle, etc.)
│   └── webfonts/        # Font Awesome icon fonts
└── .github/workflows/
    └── deploy.yml       # GitHub Actions deployment workflow
```

## Common Tasks

### Adding a new blog post

Create a file in `_posts/` named `YYYY-MM-DD-your-title.md`:

```yaml
---
layout: post
title: "Your Post Title"
date: YYYY-MM-DD HH:MM:SS
categories: your-category
tags: tag-one tag-two
description: A short summary shown on the blog listing page.
thumbnail: assets/img/your-image.png  # optional
giscus_comments: false
related_posts: true
---

Your markdown content here.
```

### Adding a new project

Create a file in `_projects/` (any name ending in `.md`):

```yaml
---
layout: page
title: "Project Name"
description: One-line summary
img: assets/img/screenshot.png  # optional thumbnail
importance: 1                   # lower number = appears first
category: data-science           # must match a display_categories value in _pages/projects.md
github: https://github.com/GJQu/repo-name  # optional, adds GitHub button
---

Detailed project description in markdown.
```

Categories are defined in `_pages/projects.md` under `display_categories`. Currently set to `[data-science, web]`. Add new categories there as needed.

### Changing colors and theme

Edit `_sass/_variables.scss` to change base colors:
- `$purple-color`, `$blue-color`, `$cyan-color`, etc. — base palette
- `$grey-color-dark` — dark mode background

Edit `_sass/_themes.scss` to change how colors are applied:
- `:root` block — light mode colors
- `html[data-theme="dark"]` block — dark mode colors
- `--global-theme-color` — accent color for links and interactive elements
- `--global-hover-color` — hover state color
- `--global-bg-color` — page background
- `--global-text-color` — main text color

### Adding or removing navigation tabs

Each page in `_pages/` controls its own nav presence via frontmatter:
- `nav: true` — show in navbar
- `nav: false` — hide from navbar
- `nav_order: N` — position in navbar (lower = further left)

To add a new page, create a file in `_pages/` with these fields set.

### Enabling/disabling features

In `_config.yml`, toggle these booleans:
- `enable_math: true` — MathJax for LaTeX
- `enable_darkmode: true` — light/dark mode toggle
- `enable_masonry: true` — masonry grid layout for projects
- `enable_medium_zoom: true` — click-to-zoom on images
- `enable_progressbar: true` — reading progress bar on posts
- `enable_project_categories: true` — categorized project display
- `search_enabled: true` — site-wide search (Ctrl/Cmd + K)

### Updating your CV

**PDF only (current setup):** Replace `assets/pdf/Qu_Gavin_Predoc_Resume.pdf` with your updated PDF. The filename is referenced in `_pages/cv.md` under `cv_pdf:`.

**Structured CV (optional):** Fill in `_data/cv.yml` following the [RenderCV format](https://github.com/alshedivat/al-folio/blob/master/CUSTOMIZE.md#cv). Add `cv_format: rendercv` to `_pages/cv.md` frontmatter. This renders a styled HTML CV on the page alongside the PDF download button.

### Setting up publications page

1. Add BibTeX entries to `_bibliography/papers.bib`
2. Create `_pages/publications.md` with `nav: true`
3. Update `scholar:` settings in `_config.yml` (name, style)

### Substack / newsletter integration

A TODO is marked in `_config.yml`. Three options:
1. **RSS feed pull:** Set `external_sources` in `_config.yml` to pull your Substack RSS into the blog page
2. **Nav link:** Create `_pages/newsletter.md` with a `redirect:` to your Substack URL
3. **Embedded subscribe form:** Enable `newsletter` in `_config.yml` with your Loops endpoint

## Local Development

```bash
bundle install          # install dependencies (first time only)
bundle exec jekyll serve  # build and serve at http://localhost:4000
```

The site auto-rebuilds on file changes (except `_config.yml`, which requires a restart).

## Deployment

The site deploys via GitHub Actions (`.github/workflows/deploy.yml`). Pushing to `main` triggers a build and deploy to GitHub Pages automatically. Make sure your repo's Settings > Pages > Source is set to **"GitHub Actions"**.

## Further Reading

- [al-folio documentation](https://github.com/alshedivat/al-folio/blob/master/CUSTOMIZE.md)
- [al-folio FAQ](https://github.com/alshedivat/al-folio/blob/master/FAQ.md)
- [Jekyll documentation](https://jekyllrb.com/docs/)
