"use client";
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, Calendar, MapPin, Clock, Globe, Users, Bookmark, BookmarkCheck, Filter, X, Video, User } from 'lucide-react'
import styles from "./events.module.css"
import Layout from "@/components/layout/layout"
import { eventsData, Event } from "./data"

// Event type definition
type EventModality = "Online de pago" | "Presencial de pago" | "Presencial gratuito" | "Online gratuito" 

export default function Events() {
  // State for events, search, and filters
  const [events, setEvents] = useState<Event[]>(eventsData)
  const [searchTerm, setSearchTerm] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    modality: "all" as "all" | EventModality,
    price: "all" as "all" | "free" | "paid",
    visibility: "all" as "all" | "public" | "private"
  })

  // Handle search and filtering
  useEffect(() => {
    let filteredEvents = eventsData

    // Apply search
    if (searchTerm) {
      filteredEvents = filteredEvents.filter(event => 
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.location.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Apply modality filter
    if (filters.modality !== "all") {
      filteredEvents = filteredEvents.filter(event => event.modality === filters.modality)
    }

    // Apply price filter
    if (filters.price !== "all") {
      if (filters.price === "free") {
        filteredEvents = filteredEvents.filter(event => event.price === 0)
      } else {
        filteredEvents = filteredEvents.filter(event => event.price > 0)
      }
    }

    // Apply visibility filter
    if (filters.visibility !== "all") {
      if (filters.visibility === "public") {
        filteredEvents = filteredEvents.filter(event => event.isPublic)
      } else {
        filteredEvents = filteredEvents.filter(event => !event.isPublic)
      }
    }

    setEvents(filteredEvents)
  }, [searchTerm, filters])

  // Toggle bookmark/save event


  // Reset filters
  const resetFilters = () => {
    setFilters({
      modality: "all",
      price: "all",
      visibility: "all"
    })
    setSearchTerm("")
  }

  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>Próximos Eventos</h1>

        {/* Search and Filter Section */}
        <div className={styles.searchContainer}>
          <div className={styles.searchInputWrapper}>
            <Search className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Buscar eventos..."
              className={styles.searchInput}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button 
                className={styles.clearButton}
                onClick={() => setSearchTerm("")}
              >
                <X size={16} />
              </button>
            )}
          </div>

          <button 
            className={styles.filterButton}
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter size={18} />
            <span>Filtrar</span>
          </button>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div className={styles.filtersPanel}>
            <div className={styles.filterGroup}>
              <h3>Modalidad</h3>
              <div className={styles.filterOptions}>
                <button 
                  className={`${styles.filterOption} ${filters.modality === "all" ? styles.activeFilter : ""}`}
                  onClick={() => setFilters({...filters, modality: "all"})}
                >
                  Todos
                </button>
                <button 
                  className={`${styles.filterOption} ${filters.modality === "Presencial gratuito" ? styles.activeFilter : ""}`}
                  onClick={() => setFilters({...filters, modality: "Presencial gratuito"})}
                >
                  <Video size={14} />
                  Presencial Gratuito
                </button>
                <button 
                  className={`${styles.filterOption} ${filters.modality === "Presencial de pago" ? styles.activeFilter : ""}`}
                  onClick={() => setFilters({...filters, modality: "Presencial de pago"})}
                >
                  <User size={14} />
Presencial de pago                </button>
                <button 
                  className={`${styles.filterOption} ${filters.modality === "Online gratuito" ? styles.activeFilter : ""}`}
                  onClick={() => setFilters({...filters, modality: "Online gratuito"})}
                >
                  <Globe size={14} />
                  Online gratuito
                </button>
                <button 
                  className={`${styles.filterOption} ${filters.modality === "Online de pago" ? styles.activeFilter : ""}`}
                  onClick={() => setFilters({...filters, modality: "Online de pago"})}
                >
                  <Globe size={14} />
                  Online de pago
                </button>
              </div>
            </div>

            <div className={styles.filterGroup}>
              <h3>Precio</h3>
              <div className={styles.filterOptions}>
                <button 
                  className={`${styles.filterOption} ${filters.price === "all" ? styles.activeFilter : ""}`}
                  onClick={() => setFilters({...filters, price: "all"})}
                >
                  Todos
                </button>
                <button 
                  className={`${styles.filterOption} ${filters.price === "free" ? styles.activeFilter : ""}`}
                  onClick={() => setFilters({...filters, price: "free"})}
                >
                  Gratuito
                </button>
                <button 
                  className={`${styles.filterOption} ${filters.price === "paid" ? styles.activeFilter : ""}`}
                  onClick={() => setFilters({...filters, price: "paid"})}
                >
                  De pago
                </button>
              </div>
            </div>

            <div className={styles.filterGroup}>
              <h3>Visibility</h3>
              <div className={styles.filterOptions}>
                <button 
                  className={`${styles.filterOption} ${filters.visibility === "all" ? styles.activeFilter : ""}`}
                  onClick={() => setFilters({...filters, visibility: "all"})}
                >
                  All
                </button>
                <button 
                  className={`${styles.filterOption} ${filters.visibility === "public" ? styles.activeFilter : ""}`}
                  onClick={() => setFilters({...filters, visibility: "public"})}
                >
                  Public
                </button>
                <button 
                  className={`${styles.filterOption} ${filters.visibility === "private" ? styles.activeFilter : ""}`}
                  onClick={() => setFilters({...filters, visibility: "private"})}
                >
                  Private
                </button>
              </div>
            </div>

            <button 
              className={styles.resetButton}
              onClick={resetFilters}
            >
              Reiniciar Filtros
            </button>
          </div>
        )}

        {/* Results Count */}
        <div className={styles.resultsCount}>
          {events.length} {events.length === 1 ? 'Evento encontrado' : 'Eventos encontrados'}
        </div>

        {/* Events List */}
        <div className={styles.eventsList}>
          {events.length > 0 ? (
            events.map((event) => (
              <div key={event.id} className={styles.eventCard}>
                <div className={styles.eventImageContainer}>
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    width={300}
                    height={200}
                    className={styles.eventImage}
                  />
                </div>
                <div className={styles.eventContent}>
                  <div className={styles.eventHeader}>
                    <div className={styles.eventDateTime}>
                      <Calendar className={styles.eventIcon} size={14} />
                      <span>{event.date}. {event.time}</span>
                    </div>

                  </div>
                  
                  <h2 className={styles.eventTitle}>{event.title}</h2>
                  
                  <p className={styles.eventDescription}>{event.description}</p>
                  
                  <div className={styles.eventDetails}>
                    <div className={styles.eventDetail}>
                      <MapPin className={styles.eventIcon} size={14} />
                      <span>{event.location}</span>
                    </div>
                    
                    <div className={styles.eventDetail}>
                      <Clock className={styles.eventIcon} size={14} />
                      <span>{event.time}</span>
                    </div>
                    
                    <div className={styles.eventDetail}>
                      {event.modality === "Online gratuito" ? (
                        <Video className={styles.eventIcon} size={14} />
                      ) : event.modality === "Presencial de pago" ? (
                        <Globe className={styles.eventIcon} size={14} />
                      ) : (
                        <User className={styles.eventIcon} size={14} />
                      )}
                      <span className={styles.modalityBadge}>
                        {event.modality === "Online de pago" 
                          ? "Online de pago" 
                          : event.modality === "Presencial de pago" 
                            ? "Presencial de pago" 
                            : "Presencial gratuito"}
                      </span>
                    </div>
                  </div>
                  
                  <div className={styles.eventFooter}>
                    <div className={styles.registrationInfo}>
    
                    </div>
                    
                    <div className={styles.eventActions}>

                      
                      <Link href={`/events/${event.id}`} className={styles.buyTicketsButton}>
                        {event.price === 0 ? "Regístrate Gratis" : `Comprar Boletos `}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className={styles.noResults}>
              <p>No se han encontrado eventos.</p>
              <button 
                className={styles.resetButton}
                onClick={resetFilters}
              >
                Reiniciar Filtros
              </button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

