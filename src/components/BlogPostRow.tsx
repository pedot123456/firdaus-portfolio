import { Link } from 'react-router-dom'
import type { BlogPost } from '../types'

interface Props {
  post: BlogPost
  /** 1-based position in the rendered list — drives the editorial number */
  position: number
}

/**
 * BlogPostRow — editorial list item for the blog index.
 *
 * Behaviours:
 * - Hover: slide-in via translateX (CSS class .blog-post-row)
 * - Featured post: rust left border + rust number (CSS class .featured-post)
 * - Reading time badge appears inline with tags
 */
export default function BlogPostRow({ post, position }: Props) {
  const { slug, title, excerpt, dateFormatted, tags, readingTime, featured } = post

  const rowClass = ['blog-post-row', featured ? 'featured-post' : ''].join(' ').trim()

  return (
    <Link to={`/blog/${slug}`} className={rowClass}>
      {/* Editorial serif number */}
      <span className="blog-post-row__number" aria-hidden>
        {String(position).padStart(2, '0')}
      </span>

      <div className="blog-post-row__content">
        {/* Meta: date · tags · reading time */}
        <div className="blog-post-row__meta">
          <span className="blog-post-row__date">{dateFormatted}</span>

          {tags.map((tag) => (
            <span key={tag} className="tech-badge" style={{ fontSize: '11px', padding: '2px 8px' }}>
              {tag}
            </span>
          ))}

          <span className="reading-time">
            {/* Clock icon */}
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            {readingTime} min read
          </span>
        </div>

        <h2 className="blog-post-row__title">{title}</h2>
        <p className="blog-post-row__excerpt">{excerpt}</p>
      </div>
    </Link>
  )
}
