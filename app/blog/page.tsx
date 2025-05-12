import Image from "next/image"
import Link from "next/link"
import { Clock } from "lucide-react"
import styles from "./blog.module.css"
import Layout from "@/components/layout/layout"
import { blogPosts } from "./data"

// Blog post type definition
type BlogPost = {
  id: string
  title: string
  excerpt: string
  featuredImage: string
  author: {
    name: string
  }
  date: string
  readTime: string
  categories: string[]
  slug: string
  featured?: boolean
}

export default function Blog() {
  return (
    <Layout>
      <div className={styles.container}>
        {/* Breadcrumb */}
        {/* <div className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          <span className={styles.breadcrumbSeparator}>&gt;</span>
          <span>Blog</span>
        </div> */}

        {/* Blog Header */}
        <div className={styles.blogHeader}>
          <h1 className={styles.blogTitle}>Bienvenido a nuestro blog</h1>
          <p className={styles.blogDescription}>
            Nuestro blog presenta artículos cuidadosamente seleccionados de expertos en negocios, consultores y líderes de la industria.
          </p>

          {/* <div className={styles.subscribeContainer}>
            <input type="email" placeholder="Your email address" className={styles.subscribeInput} />
            <button className={styles.subscribeButton}>Subscribe</button>
          </div> */}
        </div>

        {/* Blog Posts Section */}
        <div className={styles.blogPostsSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Posts</h2>
            <Link href="/blog/all" className={styles.viewAllLink}>
              Ver todos
            </Link>
          </div>
          <div className={styles.postsGrid}>
            {blogPosts.map((post) => (
              <div key={post.id} className={styles.postCard}>
                <Link href={`/blog/${post.slug}`} className={styles.postImageLink}>
                  <Image
                    src={post.featuredImage || "/placeholder.svg"}
                    alt={post.title}
                    width={600}
                    height={400}
                    className={styles.postImage}
                  />
                </Link>
                <div className={styles.postCardContent}>
                  <h3 className={styles.postTitle}>
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className={styles.postExcerpt}>{post.excerpt}</p>
                  <div className={styles.postCardFooter}>
                    <div className={styles.postCardMeta}>
                      <span className={styles.smallAuthorName}>{post.author.name}</span>
                      <span className={styles.postCardDate}>{post.date}</span>
                    </div>
                    <span className={styles.smallReadTime}>
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}
