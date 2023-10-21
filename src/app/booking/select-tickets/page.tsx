import React from 'react'
import { Layout } from '@layout/Layout'
import { TicketBookingLayout } from '@components/booking/TicketBookingLayout'
import { getTicketTypes } from '@lib/mongo/ticket-types'
import { SelectTicketForm } from '@components/booking/SelectTicketForm'

const BookingSelectTicket = async () => {
    const { ticketTypes } = await getTicketTypes()

    return (
        <Layout>
            <TicketBookingLayout
                title='Select Ticket'
                description='Select type and amount of tickets.'
            >
                <SelectTicketForm ticketTypes={ticketTypes} />
            </TicketBookingLayout>
        </Layout>
    )
}

export default BookingSelectTicket