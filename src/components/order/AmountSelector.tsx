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
        <div className="flex items-center gap-1 -mx-4">
            <Button onClick={props.decreaseHandler} variant="ghost" size="icon">
                <Minus className="w-4" />
            </Button>
            <div className="w-4 text-center">
                {props.amount}
            </div>
            <Button onClick={props.increaseHandler} variant="ghost" size="icon">
                <Plus className="w-4" />
            </Button>
        </div>
    )
}