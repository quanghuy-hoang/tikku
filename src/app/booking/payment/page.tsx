import React from 'react'
import { Layout } from '@layout/Layout'
import { TicketBookingLayout } from '@components/booking/TicketBookingLayout'
import { PaymentForm } from '@components/booking/PaymentForm'

const BookingSelectTicket = async () => {
    return (
        <Layout>
            <TicketBookingLayout
                title='Payment'
                description='Please do not alter the amount of the money or the message provided by the QR.'>
                <PaymentForm />

            </TicketBookingLayout>
        </Layout>
    )
}

export default BookingSelectTicket