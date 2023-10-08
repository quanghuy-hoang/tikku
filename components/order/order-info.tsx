import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableFooter,
    TableRow,
} from "@/components/ui/table"
import { TicketType } from "@/lib/mongo/ticket-types"
import { formatVND, toTitleCase } from "@/lib/utils"
import QrSvgGenerator from "../qr-code/qr-svg"


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
        <div className="grid gap-4">
            <Table className="w-full">
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
                    <TableRow className="bg-slate-800 text-slate-200 hover:bg-slate-900 hover:text-slate-50">
                        <TableCell>
                            <p className="font-medium">
                                Total
                            </p>
                        </TableCell>
                        <TableCell className="text-right">
                            {formatVND(totalOrder)}
                        </TableCell>
                    </TableRow>
                </TableBody>

            </Table>
            {
                totalOrder ? <QrSvgGenerator totalOrder={totalOrder} /> : null
            }

        </div>

    )
}

export default OrderInfo