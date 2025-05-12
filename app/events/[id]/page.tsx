"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, Clock, Globe, Users, ArrowLeft, Video, User, Share2, Download, Star } from "lucide-react"
import styles from "../events-detail.module.css"
import Layout from "@/components/layout/layout"
import { eventsData } from "../data"
import { useCallback } from "react";

// Event type definition
type EventModality = "online" | "in-person" | "hybrid"

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
  isSaved: boolean
  organizer: string
  fullDescription: string
  ticketUrl?: string
}

export default function EventDetail({ params }: { params: { id: string } }) {
  const router = useRouter()
  const { id } = params;
  

  
  // Handle case when page is first loading and id is undefined
  if (!id || typeof id !== "string") {
    return (
      <Layout>
        <div className={styles.container}>
          <div className={styles.loading}>Loading event details...</div>
        </div>
      </Layout>
    )
  }

  // Get event data from shared data
  const event = eventsData.find(e => e.id === id)

  // Handle case when event is not found
  if (!event) {
    return (
      <Layout>
        <div className={styles.container}>
          <div className={styles.loading}>Event not found.</div>
        </div>
      </Layout>
    )
  }

  // Map modality to display and icon
  let modalityLabel = "Presencial"
  let modalityIcon = <User className={styles.eventIcon} size={16} />
  if (event.modality === "Online gratuito" || event.modality === "Online de pago") {
    modalityLabel = "Online"
    modalityIcon = <Video className={styles.eventIcon} size={16} />
  }

  // Add to Calendar functionality
  const handleAddToCalendar = useCallback(() => {
    if (!event) return;
    // Parse date and time
    // Example: "Junio 18, 2025", "9:00 AM - 6:00 PM"
    const [startTime, endTime] = event.time.split("-").map(t => t.trim());
    const months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    const [_, day, year] = event.date.match(/(\d+), (\d{4})$/) || [];
    const monthName = event.date.split(" ")[0];
    const month = months.findIndex(m => m === monthName);
    const to24 = (t: string) => {
      const [time, ampm] = t.split(" ");
      let [h, m] = time.split(":").map(Number);
      if (ampm === "PM" && h !== 12) h += 12;
      if (ampm === "AM" && h === 12) h = 0;
      return { h, m };
    };
    const start = new Date(Number(year), month, Number(day), ...Object.values(to24(startTime)));
    const end = new Date(Number(year), month, Number(day), ...Object.values(to24(endTime)));
    const pad = (n: number) => n.toString().padStart(2, "0");
    const formatDate = (d: Date) => `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}00Z`;
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "BEGIN:VEVENT",
      `DTSTART:${formatDate(start)}`,
      `DTEND:${formatDate(end)}`,
      `SUMMARY:${event.title}`,
      `DESCRIPTION:${event.description}`,
      `LOCATION:${event.location}`,
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\r\n");
    const blob = new Blob([icsContent], { type: "text/calendar" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${event.title}.ics`;
    a.click();
    URL.revokeObjectURL(url);
  }, [event]);

  // Share functionality
  const handleShare = useCallback(() => {
    if (!event) return;
    if (navigator.share) {
      navigator.share({
        title: event.title,
        text: event.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("¡Enlace copiado al portapapeles!");
    }
  }, [event]);

  return (
    <Layout>
      <div className={styles.container}>
        {/* Back Button */}
        <Link href="/events" className={styles.backLink}>
          <ArrowLeft size={16} />
          <span>Regresar a eventos</span>
        </Link>

        {/* Event Header */}
        <div className={styles.eventHeader}>
          <h1 className={styles.eventTitle}>{event.title}</h1>

          <div className={styles.eventMeta}>
            <div className={styles.eventDetail}>
              <Calendar className={styles.eventIcon} size={16} />
              <span>{event.date}</span>
            </div>

            <div className={styles.eventDetail}>
              <Clock className={styles.eventIcon} size={16} />
              <span>{event.time}</span>
            </div>

            <div className={styles.eventDetail}>
              <MapPin className={styles.eventIcon} size={16} />
              <span>{event.location}</span>
            </div>

            <div className={styles.eventDetail}>
              {modalityIcon}
              <span className={styles.modalityBadge}>{modalityLabel}</span>
            </div>
          </div>
        </div>

        {/* Event Image */}
        <div className={styles.eventImageContainer}>
          <Image
            src={event.image || "/placeholder.svg"}
            alt={event.title}
            width={800}
            height={400}
            className={styles.eventImage}
          />
        </div>

        {/* Event Actions */}
        <div className={styles.eventActions}>
          <div className={styles.eventInfo}>

          </div>

          <div className={styles.actionButtons}>
            <button className={styles.actionButton} onClick={handleShare}>
              <Share2 size={16} />
              <span>Compartir</span>
            </button>
            <button className={styles.actionButton} onClick={handleAddToCalendar}>
              <Download size={16} />
              <span>Agregar al calendario</span>
            </button>
            
          </div>
        </div>

        {/* Event Content */}
        <div className={styles.eventContent}>
          <div className={styles.eventDescription}>
            <h2 className={styles.sectionTitle}>Detalles del Evento</h2>
            <div className={styles.descriptionText}>
              <p>{event.description}</p>
            </div>
          </div>

          <div className={styles.eventSidebar}>
            <div className={styles.ticketCard}>
              <h3 className={styles.ticketTitle}>Comprar boleto</h3>
              <div className={styles.ticketPrice}>
                {event.price === 0 ? (
                  <span className={styles.freeLabel}>Gratis</span>
                ) : (
                  <span className={styles.priceLabel}>${event.price}</span>
                )}
              </div>
              {event.price === 0 ? (
                <button className={styles.buyButton} onClick={handleAddToCalendar}>
                  Regístrate Gratis
                </button>
              ) : (
                event.ticketUrl ? (
                  <a
                    href={event.ticketUrl}
                    className={styles.buyButton}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Comprar
                  </a>
                ) : (
                  <button className={styles.buyButton} disabled>
                    No disponible
                  </button>
                )
              )}
              <div className={styles.ticketInfo}>
           
                <p className={styles.refundPolicy}>
                  Política de reembolso: Revisa el link de la página del evento para más información.
                </p>
              </div>
            </div>

            <div className={styles.venueCard}>
              <h3 className={styles.venueTitle}>Lugar</h3>

              <div className={styles.venueDetails}>
                <MapPin size={16} className={styles.venueIcon} />
                <div>
                  <p className={styles.venueName}>{modalityLabel === "Online" ? "Evento Virtual" : event.location}</p>
                  {modalityLabel !== "Online" && (
                    <a href="#" className={styles.directionsLink}>
                      Obtener direcciones
                    </a>
                  )}
                </div>
              </div>

              {modalityLabel !== "Online" && (
                <div className={styles.venueMap}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3814.1059287622193!2d-96.7238631241996!3d17.06747048376619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c7223be776721d%3A0xa1065972633baa66!2sZorba%20el%20Griego!5e0!3m2!1ses-419!2smx!4v1746994292303!5m2!1ses-419!2smx"
                    width="600"
                    height="450"
                    style={{ border: 0, width: '100%', maxWidth: '100%', borderRadius: '1rem' }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
