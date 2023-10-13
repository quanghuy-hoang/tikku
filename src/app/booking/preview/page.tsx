import React from 'react'
import { Layout } from '@layout/Layout'
import { StepsLayout } from '@components/booking-steps/StepsLayout'

const BookingPreview = async () => {
    return (
        <Layout>
            <StepsLayout>
                <div className="bg-yellow-200 w-full h-[200px]">
                    BookingPreview
                </div>
            </StepsLayout>
        </Layout>
    )
}

export default BookingPreview