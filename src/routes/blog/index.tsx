/**
 * Blog index — /blog
 *
 * Features:
 * - Numbered editorial list (large italic serif 01, 02, 03…)
 * - Featured post: rust left border + rust-coloured number
 * - Estimated reading time badge per post (calculated at 200 wpm)
 * - Slide-in hover effect via translateX (CSS class .blog-post-row)
 */
import BlogPostRow from '../../components/BlogPostRow'
import { blogPosts } from '../../data/blog'

/* Sort newest first */
const sorted = [...blogPosts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
)

export default function BlogIndexPage() {
  return (
    <>
      <div className="page-banner">
        <div className="container">
          <p className="page-banner__label">Writing</p>
          <h1 className="page-banner__title">All Posts</h1>
          <p className="page-banner__subtitle">
            Thoughts on leadership, software, cybersecurity, and building things that matter.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container container--narrow">
          <div className="blog-list">
            {sorted.map((post, i) => (
              <BlogPostRow key={post.slug} post={post} position={i + 1} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
