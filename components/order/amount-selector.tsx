'use client'

import { MouseEventHandler } from "react"
import { Button } from "../ui/button"
import { Plus, Minus } from "lucide-react"

type AmountSelectorProps = {
    amount: number
    increaseHandler: MouseEventHandler<HTMLButtonElement>
    decreaseHandler: MouseEventHandler<HTMLButtonElement>
}

export function AmountSelector(props: AmountSelectorProps) {
    return (
        <div className="flex items-center gap-2">
            <Button onClick={props.decreaseHandler} variant="ghost" size="icon">
                <Minus className="h-4 w-4" />
            </Button>
            <div className="w-5 text-center">
                {props.amount}
            </div>
            <Button onClick={props.increaseHandler} variant="ghost" size="icon">
                <Plus className="h-4 w-4" />
            </Button>
        </div>
    )
}