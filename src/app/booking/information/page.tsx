import React from 'react'
import { Layout } from '@layout/Layout'
import { ProfileForm } from '@components/booking/ProfileForm'
import { TicketBookingLayout } from '@components/booking/TicketBookingLayout'

const BookingSelectTicket = async () => {
    return (
        <Layout>
            <TicketBookingLayout
                title='Information'
                description='Ticket information will be sent to your email.\nYour name and phone number will be use for identification purposes.'
            >
                <ProfileForm />
            </TicketBookingLayout>
        </Layout>
    )
}

export default BookingSelectTicket