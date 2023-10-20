"use client"
import { OrderTable } from '@components/order/OrderTable'
import { Button } from '@components/ui/button'
import { TicketType } from '@lib/mongo/ticket-types'
import { useSetSelectedTickets } from '@store/bookingStore'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

type SelectTicketFormProps = {
    ticketTypes: TicketType[]
}

export const SelectTicketForm = ({ ticketTypes }: SelectTicketFormProps) => {
    const tableState = ticketTypes.map(v => ({ ...v, amount: 0 }))
    const tableInitState = tableState.sort((a, b) => {
        return a.price - b.price
    })
    const [tableData, setTableData] = useState(tableInitState)

    const router = useRouter()
    const setSelectedTickets = useSetSelectedTickets()

    function onSubmit(values: TicketType[]) {
        setSelectedTickets(values)
        router.push('/booking/information')
    }

    const handleChange = (id: string, amountChange: number) => {
        const index = tableData.findIndex((obj => obj._id == id))
        const newAmount = tableData[index].amount + amountChange
        let clone = [...tableData]
        clone[index] = {
            ...clone[index],
            amount: newAmount < 0 ? 0 : newAmount
        }
        setTableData(clone)
    }

    return (
        <div >
            <OrderTable data={tableData} handleChange={handleChange} />
            <Link href='/booking/information' className="pt-4 flex justify-end">
                <Button onClick={() => onSubmit(tableData)}>
                    Next Step
                </Button>
            </Link>
        </div>
    )
}
