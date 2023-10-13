import Order from '@components/order/Order'
import { Layout } from '@layout/Layout'
import { getTicketTypes } from '@lib/mongo/ticket-types'

async function fetchTicketTypes() {
  const { ticketTypes } = await getTicketTypes()
  if (!ticketTypes) throw new Error('Failed to fetch ticket types!')

  return ticketTypes
}

export default async function Home() {
  const ticketTypes = await fetchTicketTypes()
  return (
    <Layout>
      <Order ticketTypes={ticketTypes} />
    </Layout>
  )
}
