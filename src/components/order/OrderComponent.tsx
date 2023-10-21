"use client"
import { OrderTable } from '@components/order/OrderTable'
import { TicketType } from '@lib/mongo/ticket-types'
import { useState } from 'react'
import OrderInfo from './OrderInfo'

type OrderProps = {
    ticketTypes: TicketType[]
}

export const OrderComponent = ({ ticketTypes }: OrderProps) => {
    const tableState = ticketTypes.map(v => ({ ...v, amount: 0 }))
    const tableInitState = tableState.sort((a, b) => {
        return a.price - b.price
    })
    const [tableData, setTableData] = useState(tableInitState)

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
        <div className="grid gap-16 w-full">
            <OrderTable data={tableData} handleChange={handleChange} />
            {/* <OrderInfo data={createOrderInfo(tableData)} /> */}
        </div>
    )
}

function createOrderInfo(order: TicketType[]) {
    return order.filter((product) => {
        if (product.amount > 0) return product;
    });
}
