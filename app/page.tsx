import { getTicketTypes } from '@/lib/mongo/ticketTypes'

async function fetchTicketTypes() {
  const { ticketTypes } = await getTicketTypes()
  if (!ticketTypes) throw new Error('Failed to fetch ticket types!')

  return ticketTypes
}

export default async function Home() {
  const ticketTypes = await fetchTicketTypes()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section>
        <ul>
          {ticketTypes.map(type => (
            <li key={type._id}>{type.name} {type.price}</li>
          ))}
        </ul>
      </section>

    </main>
  )
}
