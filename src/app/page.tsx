import { OrderComponent } from '@components/order/OrderComponent'
import { Layout } from '@layout/Layout'
import { getTicketTypes } from '@lib/mongo/ticket-types'
import { ProfileForm } from '@components/booking/ProfileForm'

async function fetchTicketTypes() {
  const { ticketTypes } = await getTicketTypes()
  if (!ticketTypes) throw new Error('Failed to fetch ticket types!')

  return ticketTypes
}

export default async function Home() {
  const ticketTypes = await fetchTicketTypes()
  return (
    <Layout>
      <div >
        <ProfileForm />
        <OrderComponent ticketTypes={ticketTypes} />
      </div>
    </Layout>
  )
}
