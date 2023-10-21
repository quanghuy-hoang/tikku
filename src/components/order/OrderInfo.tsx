import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableFooter,
    TableRow,
} from "@components/ui/table"
import { TicketType } from "@lib/mongo/ticket-types"
import { formatVND, toTitleCase } from "@lib/utils"
import QrSvgGenerator from "../qr-code/QrSvgGenerator"


function calculateTotalOrder(tableData: TicketType[]) {
    let totalOrder = 0
    tableData.forEach(ticketType => {
        totalOrder += ticketType.price * ticketType.amount
    })
    return totalOrder
}


const OrderInfo = ({ data }: { data: TicketType[] }) => {
    const totalOrder = calculateTotalOrder(data)
    return (
        <div className="flex flex-col sm:flex-row gap-8">
            <div className="w-full">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-1/2">Ticket Type</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map(type =>
                            <TableRow key={type._id}>
                                <TableCell>
                                    <p className="font-medium">
                                        {toTitleCase(type.name)}
                                    </p>
                                    <p className="text-slate-500">
                                        {formatVND(type.price)}

                                    </p>
                                </TableCell>
                                <TableCell className="text-right">
                                    <p>{type.amount}</p>
                                    {formatVND(type.price * type.amount)}
                                </TableCell>
                            </TableRow>
                        )}
                        <TableRow className="bg-muted font-bold">
                            <TableCell>
                                <p>
                                    Total
                                </p>
                            </TableCell>
                            <TableCell className="text-right">
                                {formatVND(totalOrder)}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
            <div className="w-full flex justify-center sm:flex-col sm:align-middle sm:w-[25em]">
                <div className="w-3/5 sm:w-full text-center">
                    <p className="py-2 text-sm">Scan QR with your banking app.</p>
                    <QrSvgGenerator totalOrder={totalOrder} />
                </div>
            </div>

        </div>

    )
}

export default OrderInfo