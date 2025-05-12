"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, Share2, Bookmark, Facebook, Twitter, Linkedin, Mail } from "lucide-react"
import styles from "./blog-post.module.css"
import Layout from "@/components/layout/layout"
import { blogPosts, getBlogPostBySlug } from "../data"

// Blog post type definition
type BlogPost = {
  id: string
  title: string
  excerpt: string
  content: string
  featuredImage: string
  author: {
    name: string
    bio: string
  }
  date: string
  readTime: string
  categories: string[]
  slug: string
  relatedPosts?: {
    title: string
    slug: string
    featuredImage: string
  }[]
}

// Sample blog posts data


export default function BlogPost({ params }: { params: { slug: string } }) {
  const router = useRouter()
  const { slug } = params;
  const post = getBlogPostBySlug(slug);

  // Handle case when page is first loading and slug is undefined
  if (!slug || typeof slug !== "string") {
    return (
      <Layout>
        <div className={styles.container}>
          <div className={styles.loading}>Loading article...</div>
        </div>
      </Layout>
    )
  }

  // Handle case when post is not found
  if (!post) {
    return (
      <Layout>
        <div className={styles.container}>
          <div className={styles.notFound}>
            <h1>Article Not Found</h1>
            <p>The article you're looking for doesn't exist or has been removed.</p>
            <Link href="/blog" className={styles.backButton}>
              <ArrowLeft size={16} />
              Back to Blog
            </Link>
          </div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className={styles.container}>
        {/* Breadcrumb */}
        <div className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          <span className={styles.breadcrumbSeparator}>&gt;</span>
          <Link href="/blog">Blog</Link>
          <span className={styles.breadcrumbSeparator}>&gt;</span>
          <span className={styles.breadcrumbCurrent}>{post.categories[0]}</span>
        </div>

        {/* Article Header */}
        <div className={styles.articleHeader}>
          <h1 className={styles.articleTitle}>{post.title}</h1>
          <p className={styles.articleExcerpt}>{post.excerpt}</p>

          <div className={styles.articleMeta}>
            <div className={styles.authorInfo}>
              <span className={styles.writtenBy}>Written by</span>
              <div className={styles.author}>
               
                <span className={styles.authorName}>{post.author.name}</span>
              </div>
            </div>

            <div className={styles.publishInfo}>
              <span className={styles.publishedOn}>Published on</span>
              <span className={styles.publishDate}>{post.date}</span>
            </div>
          </div>

          <div className={styles.articleCategories}>
            <div className={styles.categories}>
              {post.categories.map((category, index) => (
                <Link key={index} href={`/blog/category/${category.toLowerCase()}`} className={styles.category}>
                  {category}
                </Link>
              ))}
            </div>
            <div className={styles.readTime}>
              <Clock size={16} />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className={styles.featuredImageContainer}>
          <Image
            src={post.featuredImage || "/placeholder.svg"}
            alt={post.title}
            width={1200}
            height={600}
            className={styles.featuredImage}
          />
        </div>

        {/* Article Content */}
        <div className={styles.articleLayout}>
          <div className={styles.articleContent}>
            {/* Social Share Sidebar */}
            <div className={styles.socialSidebar}>
              <button className={styles.socialButton} aria-label="Share article">
                <Share2 size={18} />
              </button>
              <button className={styles.socialButton} aria-label="Share on Facebook">
                <Facebook size={18} />
              </button>
              <button className={styles.socialButton} aria-label="Share on Twitter">
                <Twitter size={18} />
              </button>
              <button className={styles.socialButton} aria-label="Share on LinkedIn">
                <Linkedin size={18} />
              </button>
              <button className={styles.socialButton} aria-label="Share via Email">
                <Mail size={18} />
              </button>
              <button className={styles.socialButton} aria-label="Bookmark article">
                <Bookmark size={18} />
              </button>
            </div>

            {/* Main Content */}
            <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Author Bio */}
          <div className={styles.authorBio}>
            <div className={styles.authorBioHeader}>

              <div>
                <h3 className={styles.authorBioName}>{post.author.name}</h3>
                <p className={styles.authorBioTitle}>Talento 3.0</p>
              </div>
            </div>
            <p className={styles.authorBioText}>{post.author.bio}</p>
          </div>
        </div>

        {/* Related Articles */}
        {post.relatedPosts && post.relatedPosts.length > 0 && (
          <div className={styles.relatedArticles}>
            <h2 className={styles.relatedTitle}>Related Articles</h2>
            <div className={styles.relatedGrid}>
              {post.relatedPosts.map((relatedPost, index) => (
                <Link key={index} href={`/blog/${relatedPost.slug}`} className={styles.relatedPost}>
                  <div className={styles.relatedImageContainer}>
                    <Image
                      src={relatedPost.featuredImage || "/placeholder.svg"}
                      alt={relatedPost.title}
                      width={300}
                      height={200}
                      className={styles.relatedImage}
                    />
                  </div>
                  <h3 className={styles.relatedPostTitle}>{relatedPost.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        )}


      </div>
    </Layout>
  )
}
