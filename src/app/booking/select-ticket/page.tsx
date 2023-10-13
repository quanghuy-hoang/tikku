import React from 'react'
import { Layout } from '@layout/Layout'
import { StepsLayout } from '@components/booking-steps/StepsLayout'

const BookingSelectTicket = async () => {
    return (
        <Layout>
            <StepsLayout>
                <div className="bg-red-200 w-full h-full">
                    BookingSelectTicket
                </div>
            </StepsLayout>
        </Layout>
    )
}

export default BookingSelectTicket