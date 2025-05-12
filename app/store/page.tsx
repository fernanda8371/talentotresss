"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, Bookmark, ShoppingBag, MoreVertical, Headphones, Book, Pause, RotateCcw, RotateCw } from 'lucide-react'
import styles from "./store.module.css"
import Layout from "@/components/layout/layout"
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
  featured?: boolean
  collection?: boolean
  bookCount?: number
  isNew?: boolean
  isTrending?: boolean
  isAudioPlaying?: boolean
}

export default function Store() {
  // State for active tab
  const [activeTab, setActiveTab] = useState<"books" | "audiobooks">("books")

  // Sample books data
  const books: Book[] = [
    {
      id: "1",
      title: "RELACIONES HUMANAS SU IMPORTANCIA EN LA VIDA Y EN LAS ORGANIZACIONES",
      author: "Laura Dave",
      cover: "/relaciones_humanas.png",
      price: 349.00,
      rating: 4.5,
      format: "both",
      featured: true,
      isNew: true,
      isTrending: true,
    },
    {
      id: "2",
      title: "La Influencia Es Tu Superpoder",
      author: "Zoe Chance",
      cover: "/la-influencia.jpg",
      price: 500.00,
      rating: 5,
      format: "physical",
      collection: true,
      bookCount: 78,
    },
    {
      id: "3",
      title: "Bullshit Jobs",
      author: "David Graeber",
      cover: "/Bullshit_Jobs-679x1024.jpg",
      price: 600.00,
      rating: 3,
      format: "audio",
      isAudioPlaying: true,
    }

    // {
    //   id: "6",
    //   title: "Black Ice",
    //   author: "Brad Thor",
    //   cover: "/placeholder.svg?height=300&width=200",
    //   price: 22.99,
    //   rating: 3,
    //   format: "physical",
    // },

  ]

  // Get featured book
  const featuredBook = books.find((book) => book.featured)

  // Get bestsellers (excluding featured)
  const bestsellers = books.filter((book) => !book.featured).slice(0, 6)

  // Render star ratings


  return (
    <Layout>
    <div className={styles.storeContainer}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <h1>Libros y Descargables </h1>
        </div>

        <div className={styles.tabs}>
          <button
            className={`${styles.tabButton} ${activeTab === "books" ? styles.activeTab : ""}`}
            onClick={() => setActiveTab("books")}
          >
            <Book size={18} />
            <span>Libros</span>
          </button>
          <button
            className={`${styles.tabButton} ${activeTab === "audiobooks" ? styles.activeTab : ""}`}
            onClick={() => setActiveTab("audiobooks")}
          >
            <Headphones size={18} />
            <span>Descargables</span>
          </button>
        </div>

        <div className={styles.headerActions}>

          <button className={styles.iconButton}>
            <ShoppingBag size={20} />
          </button>

  
        </div>
      </header>

      {/* Main Content */}
      <main className={styles.mainContent}>
        {/* New & Trending Section */}
        <section className={styles.featuredSection}>
          <div className={styles.featuredHeader}>
            <div>
              {/* <h2 className={styles.sectionTitle}>Lo último</h2> */}
              <p className={styles.sectionSubtitle}>Explorar los últimos libros y descargables</p>
            </div>

            
          </div>

          <div className={styles.featuredContent}>
            {/* Featured Book */}
            {featuredBook && (
              <div className={styles.featuredBook}>
    <Image src="/relaciones_humanas.png" alt="Relaciones Humanas" width={400} height={600} />
              </div>
            )}

            {/* Side Cards */}
            <div className={styles.sideCards}>
              {/* Collection Card */}
              {/* <div className={styles.collectionCard}>
                <div className={styles.collectionContent}>
                  <h3 className={styles.collectionTitle}>Stephen King Collection</h3>
                  <p className={styles.collectionCount}>78 books</p>
                  <div className={styles.authorImage}>
                    <Image src="/placeholder.svg?height=200&width=200" alt="Stephen King" width={200} height={200} />
                  </div>
                </div>
              </div> */}

              {/* Audio Book Card */}
              <div className={styles.audioCard}>
                <div className={styles.audioContent}>
                  <div className={styles.audioHeader}>
                    <h3 className={styles.audioTitle}>RELACIONES HUMANAS SU IMPORTANCIA EN LA VIDA Y EN LAS ORGANIZACIONES</h3>
                    <p className={styles.audioAuthor}>PABLO MOCH
CARLOS RODRÍGUEZ HUGO MOSQUEIRA CARLOS VÁSQUEZ
Francisco Belgodere Eugenio Cárdenas Gonzalo Castillo Emma Dietz
Miguel Ángel Hernández Karla Merino Héctor Núñez
Juan Francisco Pando Javier Solana Gustavo Zavala</p>
                  </div>






                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bestsellers Section */}
        <section className={styles.bestsellersSection}>
          <div className={styles.bestsellersHeader}>
            <h2 className={styles.bestsellersTitle}>Librería</h2>
          </div>

          <div className={styles.bestsellersGrid}>
            {bestsellers.map((book) => (
              <div key={book.id} className={styles.bookCard}>
                <div className={styles.bookCoverWrapper}>
                  <Image src={book.cover || "/placeholder.svg"} alt={book.title} width={200} height={300} className={styles.bookCover} />
                </div>
                <div className={styles.bookInfo}>
                  
                  <h3 className={styles.bookTitle}>{book.title}</h3>
                  <p className={styles.bookAuthor}>{book.author}</p>
                  <button className={styles.buyButton}>Agregar al carrito</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
    </Layout>
  )
}
