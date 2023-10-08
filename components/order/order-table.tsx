'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import type { TicketType } from '@/lib/mongo/ticket-types'
import { AmountSelector } from "./amount-selector";
import { formatVND, toTitleCase } from "@/lib/utils";

export type OrderTableProps = {
  data: TicketType[];
  handleChange: (id: string, amountChange: number) => void
}

export function OrderTable(props: OrderTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/2">Name</TableHead>
          <TableHead className="text-right">Price</TableHead>
          {/* <TableHead>Details</TableHead> */}
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {
          props.data.map(
            type =>
              <TableRow key={type._id}>
                <TableCell className="font-medium">
                  {toTitleCase(type.name)}
                </TableCell>
                <TableCell className="text-right">
                  {formatVND(type.price)}
                </TableCell>
                {/* <TableCell>{ticketType.details}</TableCell> */}
                <TableCell className="float-right">
                  <AmountSelector
                    amount={type.amount || 0}
                    increaseHandler={() => props.handleChange(type._id, 1)}
                    decreaseHandler={() => props.handleChange(type._id, -1)} />
                </TableCell>
              </TableRow>
          )
        }
      </TableBody>
    </Table>
  )
}