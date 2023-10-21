"use client"
import OrderInfo from '@components/order/OrderInfo'
import { TicketType } from '@lib/mongo/ticket-types'
import { useSelectedTickets, useUserInfo } from '@store/bookingStore'
import { Avatar, AvatarFallback } from '@components/ui/avatar'

export const PaymentForm = () => {
    const userInfo = useUserInfo()
    const selectedTickets = useSelectedTickets()
    return (
        <div >
            <div className="flex items-center py-8">
                <Avatar className="h-16 w-16">
                    <AvatarFallback>NVA</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">{userInfo.username}</p>
                    <p className="text-sm text-muted-foreground">
                        {userInfo.email}
                    </p>
                    <p className="text-sm text-muted-foreground">
                        (+84) {userInfo.phoneNumber}
                    </p>
                </div>
            </div>
            <OrderInfo data={createOrderInfo(selectedTickets)} />
        </div>
    )
}

function createOrderInfo(order: TicketType[]) {
    return order.filter((product) => {
        if (product.amount > 0) return product;
    });
}

