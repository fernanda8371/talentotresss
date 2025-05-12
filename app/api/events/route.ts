import { NextRequest, NextResponse } from 'next/server';

// In-memory events array (replace with DB later)
let events = [
  {
    id: "1",
    title: "Las 5 Llaves de la Magia del Servicio al Cliente en Oaxaca",
    date: "Junio 18, 2025",
    time: "9:00 AM - 6:00 PM",
    image: "/POST-18-JUNIO.png",
    description: "​¡Prepárate para una experiencia mágica en Oaxaca!...",
    location: "Zorba el Griego, Oaxaca",
    modality: "Presencial de pago",
    price: 25,
    registered: 200,
    isPublic: true
  }
  // Add more events as needed
];

// GET: Return all events
export async function GET() {
  return NextResponse.json(events);
}

// POST: Add a new event
export async function POST(request: NextRequest) {
  const data = await request.json();
  const newEvent = { ...data, id: String(events.length + 1) };
  events.push(newEvent);
  return NextResponse.json(newEvent, { status: 201 });
} 