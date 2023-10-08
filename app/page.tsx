import Order from '@/components/order/order'
import { getTicketTypes } from '@/lib/mongo/ticket-types'

async function fetchTicketTypes() {
  const { ticketTypes } = await getTicketTypes()
  if (!ticketTypes) throw new Error('Failed to fetch ticket types!')

  return ticketTypes
}

export default async function Home() {
  const ticketTypes = await fetchTicketTypes()
  return (
    <main className="flex flex-col items-center justify-between lg:p-20 p-4">
      <Order ticketTypes={ticketTypes} />
    </main>
  )
}
