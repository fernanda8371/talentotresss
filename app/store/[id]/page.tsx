"use client"

import { useParams, useRouter } from "next/navigation"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ShoppingBag, Bookmark, Share2, Star, Headphones, BookIcon } from "lucide-react"
import styles from "./book-detail.module.css"

// Book type definition
type BookFormat = "physical" | "audio" | "both"

type Book = {
  id: string
  title: string
  author: string
  cover: string
  price: number
  rating: number
  format: BookFormat
  description: string
  publishDate: string
  pages?: number
  language: string
  isbn?: string
  categories: string[]
  featured?: boolean
  collection?: boolean
  bookCount?: number
  isNew?: boolean
  isTrending?: boolean
  isAudioPlaying?: boolean
}

export default function BookDetail() {
  const router = useRouter()
  const params = useParams()
  const { id } = params

  // State for selected format
  const [selectedFormat, setSelectedFormat] = useState<"physical" | "audio">("physical")

  // Sample books data
  const booksData: Record<string, Book> = {
    "1": {
      id: "1",
      title: "The Last Thing He Told Me",
      author: "Laura Dave",
      cover: "/placeholder.svg?height=600&width=400",
      price: 24.99,
      rating: 4.5,
      format: "both",
      description:
        "Before Owen Michaels disappears, he smuggles a note to his beloved wife of one year: Protect her. Despite her confusion and fear, Hannah Hall knows exactly to whom the note refers—Owen's sixteen-year-old daughter, Bailey. Bailey, who lost her mother tragically as a child. Bailey, who wants absolutely nothing to do with her new stepmother. As Hannah's increasingly desperate calls to Owen go unanswered, as the FBI arrests Owen's boss, as a US marshal and federal agents arrive at her Sausalito home unannounced, Hannah quickly realizes her husband isn't who he said he was. And that Bailey just may hold the key to figuring out Owen's true identity—and why he really disappeared. Hannah and Bailey set out to discover the truth. But as they start putting together the pieces of Owen's past, they soon realize they're also building a new future—one neither of them could have anticipated.",
      publishDate: "May 4, 2021",
      pages: 320,
      language: "English",
      isbn: "9781501171345",
      categories: ["Fiction", "Thriller", "Mystery", "Suspense"],
      featured: true,
      isNew: true,
      isTrending: true,
    },
    "2": {
      id: "2",
      title: "Stephen King Collection",
      author: "Stephen King",
      cover: "/placeholder.svg?height=600&width=400",
      price: 99.99,
      rating: 5,
      format: "physical",
      description:
        "A comprehensive collection of Stephen King's most iconic works, spanning his entire career from early classics to recent masterpieces. This collection includes 78 books that showcase King's unparalleled ability to craft stories of horror, suspense, and the supernatural that have captivated readers for generations. From 'Carrie' to 'The Shining,' 'It' to 'The Stand,' this collection is a must-have for any fan of the master of horror.",
      publishDate: "Various",
      language: "English",
      categories: ["Horror", "Fiction", "Thriller", "Supernatural"],
      collection: true,
      bookCount: 78,
    },
    "3": {
      id: "3",
      title: "False Witness: A Novel",
      author: "Karin Slaughter",
      cover: "/placeholder.svg?height=600&width=400",
      price: 18.99,
      rating: 3,
      format: "audio",
      description:
        "Leigh Collier has worked hard to build what looks like a normal life. She has a good job as a defense attorney, a daughter doing well in school, and even her divorce is relatively civilized—her life is just as unremarkable as she'd always hoped it would be. But Leigh's ordinary life masks a childhood which was far from average... a childhood tarnished by secrets, broken by betrayal, and finally torn apart by a devastating act of violence. Then a case lands on her desk—defending a wealthy man accused of rape. It's the highest profile case she's ever been given—a case which could transform her career, if she wins. But when she meets the accused, she realizes that it's no coincidence that he's chosen her as his attorney. She knows him. And he knows her. More to the point, he knows what happened twenty years ago, and why Leigh has spent two decades running. If she can't get him acquitted, she'll lose much more than the case. The only person who can help her is her younger, estranged sister Callie, the last person Leigh would ever want to ask for help. But suddenly she has no choice...",
      publishDate: "July 20, 2021",
      pages: 504,
      language: "English",
      isbn: "9780062858092",
      categories: ["Fiction", "Thriller", "Mystery", "Crime"],
      isAudioPlaying: true,
    },
  }

  // Get book data
  const book = booksData[id as string]

  // Handle case when book is not found
  if (!book) {
    return (
      <div className={styles.container}>
        <div className={styles.notFound}>
          <h1>Book Not Found</h1>
          <p>The book you're looking for doesn't exist or has been removed.</p>
          <Link href="/store" className={styles.backButton}>
            <ArrowLeft size={16} />
            Back to Store
          </Link>
        </div>
      </div>
    )
  }

  // Render star ratings
  const renderRating = (rating: number) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

    return (
      <div className={styles.rating}>
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} className={styles.starFull} size={20} fill="#e9d9b2" />
        ))}
        {hasHalfStar && <Star key="half" className={styles.starHalf} size={20} />}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`} className={styles.starEmpty} size={20} />
        ))}
        <span className={styles.ratingValue}>{rating.toFixed(1)}</span>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      {/* Back Button */}
      <Link href="/store" className={styles.backLink}>
        <ArrowLeft size={20} />
        <span>Back to Store</span>
      </Link>

      <div className={styles.bookDetail}>
        {/* Book Cover */}
        <div className={styles.coverContainer}>
          <Image
            src={book.cover || "/placeholder.svg"}
            alt={book.title}
            width={400}
            height={600}
            className={styles.bookCover}
          />
        </div>

        {/* Book Info */}
        <div className={styles.bookInfo}>
          <h1 className={styles.bookTitle}>{book.title}</h1>
          <p className={styles.bookAuthor}>by {book.author}</p>

          {renderRating(book.rating)}

          <div className={styles.bookDescription}>
            <h3 className={styles.sectionTitle}>Description</h3>
            <p>{book.description}</p>
          </div>

          <div className={styles.bookDetails}>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Published:</span>
              <span className={styles.detailValue}>{book.publishDate}</span>
            </div>
            {book.pages && (
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Pages:</span>
                <span className={styles.detailValue}>{book.pages}</span>
              </div>
            )}
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Language:</span>
              <span className={styles.detailValue}>{book.language}</span>
            </div>
            {book.isbn && (
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>ISBN:</span>
                <span className={styles.detailValue}>{book.isbn}</span>
              </div>
            )}
          </div>

          <div className={styles.categories}>
            {book.categories.map((category, index) => (
              <span key={index} className={styles.category}>
                {category}
              </span>
            ))}
          </div>

          {/* Format Selection */}
          {book.format === "both" && (
            <div className={styles.formatSelection}>
              <button
                className={`${styles.formatButton} ${selectedFormat === "physical" ? styles.activeFormat : ""}`}
                onClick={() => setSelectedFormat("physical")}
              >
                <BookIcon size={18} />
                <span>Physical Book</span>
              </button>
              <button
                className={`${styles.formatButton} ${selectedFormat === "audio" ? styles.activeFormat : ""}`}
                onClick={() => setSelectedFormat("audio")}
              >
                <Headphones size={18} />
                <span>Audiobook</span>
              </button>
            </div>
          )}

          {/* Price and Actions */}
          <div className={styles.purchaseSection}>
            <div className={styles.priceContainer}>
              <span className={styles.price}>${book.price.toFixed(2)}</span>
              {book.isNew && <span className={styles.newBadge}>New</span>}
            </div>

            <div className={styles.actionButtons}>
              <button className={styles.addToCartButton}>
                <ShoppingBag size={18} />
                <span>Add to Cart</span>
              </button>
              <button className={styles.iconActionButton}>
                <Bookmark size={20} />
              </button>
              <button className={styles.iconActionButton}>
                <Share2 size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
