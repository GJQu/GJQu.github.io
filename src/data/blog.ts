export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "building-neubrutalist-web",
    title: "Building a Neubrutalist Web Experience",
    date: "2025-01-15",
    excerpt: "Exploring the bold design principles of Neubrutalism and how to implement them in modern web applications.",
    tags: ["design", "web", "neubrutalism"],
    content: `# Building a Neubrutalist Web Experience

Neubrutalism is more than just a design trend—it's a return to raw, honest design principles that prioritize clarity and boldness over polish and perfection.

## The Core Principles

1. **Bold Borders**: Thick, black outlines that define clear boundaries
2. **Hard Shadows**: Offset shadows without blur create depth
3. **Flat Colors**: High-contrast, vibrant colors without gradients
4. **Typography First**: Let the text speak for itself

## Implementation Tips

When building with Neubrutalism, start with your design system. Define your borders, shadows, and colors as reusable tokens. This ensures consistency and makes updates easier.

The key is not to overthink it—Neubrutalism thrives on simplicity and directness. Every element should have a purpose, and that purpose should be immediately clear to the user.

## Why It Works

In an age of over-polished interfaces, Neubrutalism stands out by being unapologetically direct. It's accessible, fast to load, and memorable.`
  },
  {
    id: "react-performance-tips",
    title: "React Performance: Beyond the Basics",
    date: "2025-01-01",
    excerpt: "Advanced techniques for optimizing React applications that go beyond memo and useMemo.",
    tags: ["react", "javascript", "performance"],
    content: `# React Performance: Beyond the Basics

We all know about React.memo and useMemo, but there's so much more to React performance optimization. Let's dive deeper.

## Understanding Re-renders

The first step to optimization is understanding when and why components re-render. Use the React DevTools Profiler to identify bottlenecks before optimizing blindly.

## Advanced Patterns

### 1. Component Splitting
Instead of one large component, split into smaller, focused components. This allows React to skip re-rendering parts that haven't changed.

### 2. State Colocation
Keep state as close as possible to where it's used. This minimizes the impact of state changes on your component tree.

### 3. Lazy Loading
Use React.lazy and Suspense to defer loading components until they're needed. This can dramatically improve initial load times.

## Measuring Success

Always measure before and after. Use tools like Lighthouse and Chrome DevTools to quantify improvements. Remember: premature optimization is the root of all evil.`
  },
  {
    id: "typescript-patterns",
    title: "TypeScript Patterns for Cleaner Code",
    date: "2024-12-15",
    excerpt: "Practical TypeScript patterns that make your code more maintainable and type-safe.",
    tags: ["typescript", "patterns", "best-practices"],
    content: `# TypeScript Patterns for Cleaner Code

TypeScript is powerful, but it's easy to write code that's technically type-safe but still hard to maintain. Here are patterns that help.

## Discriminated Unions

Instead of optional properties that may or may not exist together, use discriminated unions:

\`\`\`typescript
type LoadingState = 
  | { status: 'loading' }
  | { status: 'success'; data: Data }
  | { status: 'error'; error: Error };
\`\`\`

This makes impossible states impossible.

## Utility Types

TypeScript's built-in utility types are your friends. \`Pick\`, \`Omit\`, \`Partial\`, and \`Required\` can help you derive types without duplication.

## Type Guards

Custom type guards make your code both type-safe and readable:

\`\`\`typescript
function isError(x: unknown): x is Error {
  return x instanceof Error;
}
\`\`\`

## The Bottom Line

Good TypeScript code isn't about using every feature—it's about using the right features to make your intent clear and your errors impossible.`
  },
  {
    id: "minimal-design-philosophy",
    title: "The Philosophy of Minimal Design",
    date: "2024-12-01",
    excerpt: "Why less is more in web design, and how to achieve it without sacrificing functionality.",
    tags: ["design", "minimalism", "ux"],
    content: `# The Philosophy of Minimal Design

Minimal design isn't about removing features—it's about removing distractions. Every element should earn its place on the page.

## What Minimal Design Is NOT

- It's not just white space
- It's not about being boring
- It's not about removing useful features

## What It IS

Minimal design is about hierarchy, focus, and intention. It's about guiding the user's attention to what matters most.

## Practical Tips

1. **Start with content**: Design around your content, not the other way around
2. **Use whitespace intentionally**: Space isn't empty—it's a design element
3. **Limit your palette**: Fewer colors, used well, beat many colors used poorly
4. **Typography matters**: With fewer visual elements, type becomes more important

## The Result

When done well, minimal design feels effortless. Users can focus on the content and tasks, not on navigating a cluttered interface.`
  }
];
