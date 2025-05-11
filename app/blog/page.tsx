import Image from "next/image"
import Link from "next/link"
import { Clock } from "lucide-react"
import styles from "./blog.module.css"
import Layout from "@/components/layout/layout"

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
  // Sample blog posts data
  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "Diplomado en RH 2025",
      excerpt:
        "Construyendo organizaciones altamente competitivas y profundamente humanas.",
      featuredImage: "/placeholder.svg?height=600&width=1200",
      author: {
        name: "Web Manager",
      },
      date: "13 Mar 2025",
      readTime: "8 min read",
      categories: ["Atracción de talento", "Autogestión", "Capacitación", "Clima laboral "],
      slug: "strategic-consulting-tech-startup-growth",
      featured: true,
    },
    {
      id: "2",
      title: "Financial Planning for Post-Pandemic Business Recovery",
      excerpt:
        "Expert insights on rebuilding financial stability and planning for sustainable growth in the post-pandemic business landscape.",
      featuredImage: "/placeholder.svg?height=400&width=600",
      author: {
        name: "Marcus Johnson",
      },
      date: "28 April 2025",
      readTime: "6 min read",
      categories: ["Finance", "Recovery", "Planning"],
      slug: "financial-planning-post-pandemic-recovery",
    },
    {
      id: "3",
      title: "The Rise of AI in Business Consulting: Trends and Implications",
      excerpt:
        "Exploring how artificial intelligence is revolutionizing the consulting industry and what it means for businesses and consultants alike.",
      featuredImage: "/placeholder.svg?height=400&width=600",
      author: {
        name: "Sophia Rodriguez",
      },
      date: "15 April 2025",
      readTime: "10 min read",
      categories: ["Technology", "AI", "Innovation"],
      slug: "ai-business-consulting-trends",
    },
    {
      id: "4",
      title: "Building Resilient Supply Chains: Lessons from Global Disruptions",
      excerpt:
        "Key strategies for creating adaptable and resilient supply chains that can withstand unexpected global challenges.",
      featuredImage: "/placeholder.svg?height=400&width=600",
      author: {
        name: "David Kim",
      },
      date: "5 April 2025",
      readTime: "7 min read",
      categories: ["Supply Chain", "Strategy", "Risk Management"],
      slug: "resilient-supply-chains-global-disruptions",
    },
    {
      id: "5",
      title: "ESG Integration: A Competitive Advantage for Modern Businesses",
      excerpt:
        "How incorporating environmental, social, and governance factors into business strategy creates long-term value and competitive edge.",
      featuredImage: "/placeholder.svg?height=400&width=600",
      author: {
        name: "Priya Sharma",
      },
      date: "22 March 2025",
      readTime: "9 min read",
      categories: ["Sustainability", "Strategy", "ESG"],
      slug: "esg-integration-competitive-advantage",
    },
    {
      id: "6",
      title: "Digital Transformation: Beyond Technology Implementation",
      excerpt:
        "Why successful digital transformation requires cultural change, strategic vision, and human-centered approaches alongside technology.",
      featuredImage: "/placeholder.svg?height=400&width=600",
      author: {
        name: "James Wilson",
      },
      date: "10 March 2025",
      readTime: "11 min read",
      categories: ["Digital", "Transformation", "Culture"],
      slug: "digital-transformation-beyond-technology",
    },
  ]

  // Get featured post
  const featuredPost = blogPosts.find((post) => post.featured)

  // Get other posts (excluding featured)
  const otherPosts = blogPosts.filter((post) => !post.featured)

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

        {/* Featured Post */}
        {featuredPost && (
          <div className={styles.featuredPost}>
            <div >
              {/* <Image
                src={featuredPost.featuredImage || "/placeholder.svg"}
                alt={featuredPost.title}
                width={1200}
                height={600}
                className={styles.featuredImage}
              /> */}
              <div className={styles.featuredContent}>
                <h2 className={styles.featuredTitle}>
                  <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                </h2>
                <div className={styles.postMeta}>
                  <div className={styles.authorInfo}>
                    <span className={styles.writtenBy}>Autor</span>
                    <div className={styles.author}>

                      <span className={styles.authorName}>{featuredPost.author.name}</span>
                    </div>
                  </div>
                  <div className={styles.postDetails}>
                    <span className={styles.postDate}>{featuredPost.date}</span>
                  </div>
                </div>
                <div className={styles.postCategories}>
                  <span className={styles.fileUnder}>Etíquetas</span>
                  <div className={styles.categories}>
                    {featuredPost.categories.map((category, index) => (
                      <span key={index} className={styles.category}>
                        {category}
                      </span>
                    ))}
                    <span className={styles.readTime}>
                      <Clock size={14} />
                      {featuredPost.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Section */}
        <div className={styles.blogPostsSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Otros posts</h2>
            <Link href="/blog/all" className={styles.viewAllLink}>
              Ver todos
            </Link>
          </div>

          <div className={styles.postsGrid}>
            {otherPosts.map((post) => (
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
