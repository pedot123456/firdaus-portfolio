/**
 * Blog post detail — /blog/:slug
 *
 * The filename $slug.tsx follows TanStack Router / file-based routing convention.
 * This component uses React Router v6's useParams() to read the :slug param.
 *
 * Features:
 * - Rust-palette prose styles (.prose in styles.css)
 * - Reading time displayed in post header alongside date and author
 * - Back link to blog index
 * - 404 fallback for unknown slugs
 */
import { useParams, Link } from 'react-router-dom'
import { getPostBySlug } from '../../data/blog'

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPostBySlug(slug) : undefined

  /* 404 fallback */
  if (!post) {
    return (
      <div className="not-found">
        <div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '4rem', color: 'var(--rust)', marginBottom: '1rem' }}>
            404
          </h1>
          <p style={{ color: 'var(--text-500)', marginBottom: '2rem' }}>
            Post not found. It may have been removed or the URL is incorrect.
          </p>
          <Link to="/blog" className="btn btn--primary">
            ← Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  /* Render paragraphs from the plain-text content (split on double newlines) */
  const paragraphs = post.content
    .trim()
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean)

  return (
    <article className="blog-post">
      <div className="container container--narrow">
        {/* Back link */}
        <Link to="/blog" className="blog-post__back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <line x1="19" y1="12" x2="5" y2="12"/>
            <polyline points="12 19 5 12 12 5"/>
          </svg>
          All Posts
        </Link>

        {/* Post header */}
        <header className="blog-post__header">
          {/* Meta: date · reading time · author */}
          <div className="blog-post__meta">
            <span>{post.dateFormatted}</span>

            {/* Reading time badge with clock icon */}
            <span className="reading-time">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              {post.readingTime} min read
            </span>

            {post.tags.map((tag) => (
              <span key={tag} className="tech-badge" style={{ fontSize: '11px', padding: '2px 8px' }}>
                {tag}
              </span>
            ))}
          </div>

          <h1 className="blog-post__title">{post.title}</h1>

          <div className="blog-post__author">
            {/* Author avatar placeholder */}
            <div style={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              background: 'var(--rust)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 700,
              fontSize: '0.8rem',
              flexShrink: 0,
            }}>
              MF
            </div>
            <div>
              <span style={{ display: 'block', fontWeight: 600, fontSize: 'var(--text-sm)' }}>
                {post.author}
              </span>
              <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-300)' }}>
                IT Undergraduate · UTP
              </span>
            </div>
          </div>
        </header>

        {/* Post body — renders paragraphs and basic heading recognition */}
        <div className="prose">
          {paragraphs.map((block, i) => {
            if (block.startsWith('## ')) {
              return <h2 key={i}>{block.replace(/^## /, '')}</h2>
            }
            if (block.startsWith('### ')) {
              return <h3 key={i}>{block.replace(/^### /, '')}</h3>
            }
            /* Bullet list block: lines starting with "- " */
            if (block.split('\n').every((l) => l.startsWith('- ') || l === '')) {
              return (
                <ul key={i}>
                  {block
                    .split('\n')
                    .filter((l) => l.startsWith('- '))
                    .map((l, j) => (
                      <li key={j}>{l.replace(/^- /, '')}</li>
                    ))}
                </ul>
              )
            }
            return <p key={i}>{block}</p>
          })}
        </div>

        {/* Post footer: back CTA */}
        <div
          style={{
            marginTop: 'var(--space-3xl)',
            paddingTop: 'var(--space-2xl)',
            borderTop: '1px solid var(--border)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 'var(--space-md)',
          }}
        >
          <Link to="/blog" className="btn btn--outline">
            ← Back to all posts
          </Link>
          <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-300)' }}>
            Written by {post.author}
          </p>
        </div>
      </div>
    </article>
  )
}
