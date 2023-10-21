'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@components/ui/table"

import type { TicketType } from '@lib/mongo/ticket-types'
import { AmountSelector } from "./AmountSelector";
import { formatVND, toTitleCase } from "@lib/utils";

export type OrderTableProps = {
  data: TicketType[];
  handleChange: (id: string, amountChange: number) => void
}

export function OrderTable(props: OrderTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="">Name</TableHead>
          <TableHead className="hidden text-right sm:table-cell">Price</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {
          props.data.map(
            type =>
              <TableRow key={type._id} >
                <TableCell className="text-base font-medium">
                  {type.name}
                  <p className="text-sm text-neutral-500">
                    {type.details}
                  </p>
                </TableCell>
                <TableCell className="hidden text-right sm:table-cell">
                  {formatVND(type.price)}
                </TableCell>
                <TableCell className="flex-1 justify-end align-middle items-center">
                  <div className="float-right">
                    <p className="text-right sm:hidden">
                      {formatVND(type.price)}
                    </p>
                    <AmountSelector
                      amount={type.amount || 0}
                      increaseHandler={() => props.handleChange(type._id, 1)}
                      decreaseHandler={() => props.handleChange(type._id, -1)} />
                  </div>
                </TableCell>
              </TableRow>
          )
        }
      </TableBody>
    </Table>
  )
}