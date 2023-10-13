import React from 'react'
import { Layout } from '@layout/Layout'
import { StepsLayout } from '@components/booking-steps/StepsLayout'

const BookingPayment = async () => {
    return (
        <Layout>
            <StepsLayout>
                <div className="bg-green-200 w-full h-[200px]">
                    BookingPayment
                </div>
            </StepsLayout>
        </Layout>
    )
}

export default BookingPayment