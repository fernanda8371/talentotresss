"use client";
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, Calendar, MapPin, Clock, Globe, Users, Bookmark, BookmarkCheck, Filter, X, Video, User } from 'lucide-react'
import styles from "./events.module.css"
import Layout from "@/components/layout/layout"

// Event type definition
type EventModality = "Online de pago" | "Presencial de pago" | "Presencial gratuito" | "Online gratuito" 

type Event = {
  id: string
  title: string
  date: string
  time: string
  image: string
  description: string
  location: string
  modality: EventModality
  price: number
  registered: number
  isPublic: boolean
}

export default function Events() {
  // Sample events data
  const eventsData: Event[] = [
    {
      id: "1",
      title: "Las 5 Llaves de la Magia del Servicio al Cliente en Oaxaca",
      date: "Junio 18, 2025",
      time: "9:00 AM - 6:00 PM",
      image: "/POST-18-JUNIO.png",
      description: "​¡Prepárate para una experiencia mágica en Oaxaca! Próximo miércoles 18 de junio de 2025 de 9:00 AM a 6:00 PM las 5 Llaves de la Magia del Servicio al Cliente, un evento que transformará la manera en que interactúas con tus clientes. Organizado por Transforma, Talento 3.0 y La Magia del Aprendizaje este evento promete ser una fiesta de aprendizaje donde desvelaremos los secretos para ofrecer un servicio excepcional que dejará a tus clientes encantados.",
      location: "Zorba el Griego, Oaxaca",
      modality: "Presencial de pago",
      price: 25,
      registered: 200,
      isPublic: true
    },
    {
      id: "2",
      title: "Las 5 Llaves de la Magia del Servicio al Cliente en Oaxaca",
      date: "Junio 19, 2025",
      time: "9:00 AM - 6:00 PM",
      image: "/POST-19-JUNIO.png",
      description: "​Durante este taller, aprenderás a crear un ambiente seguro y acogedor, a mostrar cortesía en cada interacción, y a ser inclusivo con todos tus clientes, sin importar su origen o cultura. Además, te enseñaremos a montar un espectáculo inolvidable que sorprenderá a tus clientes y a ser eficiente en cada paso del camino. No te pierdas esta oportunidad de llevar tu servicio al cliente al siguiente nivel y crear experiencias que tus clientes recordarán para siempre. ¡Nos vemos en Oaxaca!",
      location: "Zorba el Griego, Oaxaca",
      modality: "Presencial de pago",
      price: 150,
      registered: 132,
      isPublic: false    },
    {
      id: "3",
      title: "La Magia del Liderazgo y el Trabajo en Equipo en Oaxaca",
      date: "Junio 20, 2025",
      time: "9:00 AM - 6:00 PM",
      image: "/Post-Liderazgo-20-junio.png",
      description: "​El viernes 20 de junio de 2025, de 9:00 a 18:00 horas nos reuniremos para explorar cómo Disney ha perfeccionado el arte de liderar con inspiración y fomentar la colaboración en un ambiente empresarial vibrante y competitivo.​A través de dinámicas lúdicas y ejemplos prácticos, aprenderás a aplicar estos principios en tu propio entorno laboral. Desde habilidades de liderazgo inspirador hasta estrategias efectivas de servicio al cliente, este curso te equipará con las herramientas necesarias para motivar a tu equipo y alcanzar el éxito. ¡Y no te preocupes, no será solo teoría! Con siete dinámicas interactivas, te sumergirás en un aprendizaje divertido y memorable que te permitirá experimentar y practicar las habilidades de liderazgo al estilo Disney.​Así que, si estás listo para transformar tu enfoque de liderazgo y trabajo en equipo, únete a nosotros en esta experiencia única. ¡Nos vemos en el enlace mágico que te llevará al lugar del evento!",
      location: "Zorba el Griego, Oaxaca",
      modality: "Presencial de pago",
      price: 0,
      registered: 32,
      isPublic: true
    }
    
    // {
    //   id: "6",
    //   title: "Cybersecurity Masterclass",
    //   date: "Friday - Dec 08, 2023",
    //   time: "11:00 AM",
    //   image: "/placeholder.svg?height=200&width=300",
    //   description: "A comprehensive overview of modern cybersecurity threats and how to protect your organization.",
    //   location: "Tech Campus, Austin",
    //   modality: "hybrid",
    //   price: 100,
    //   registered: 75,
    //   isPublic: false,
    //   isSaved: true
    // }
  ]

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
                      <div className={styles.attendeesAvatars}>
                        {/* Placeholder for attendee avatars */}
                        <div className={styles.attendeeAvatar}></div>
                        <div className={styles.attendeeAvatar}></div>
                        <div className={styles.attendeeAvatar}></div>
                        <div className={styles.attendeeAvatar}></div>
                      </div>
                      <span>{event.registered}+ people registered</span>
                    </div>
                    
                    <div className={styles.eventActions}>
                      <div className={styles.visibilityBadge}>
                        <Globe size={14} />
                        <span>{event.isPublic ? "Public" : "Private"}</span>
                      </div>
                      
                      <Link href={`/events/${event.id}`} className={styles.buyTicketsButton}>
                        {event.price === 0 ? "Regístrate Gratis" : `Comprar Boletos ${event.price}`}
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

