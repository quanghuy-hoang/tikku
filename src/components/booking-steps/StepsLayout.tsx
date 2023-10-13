'use client'

import { ReactNode } from "react"
import Link from "next/link"
//importing the new icons
import { Dot } from "../icons/Dot"
import { VerticalLine } from "../icons/VerticalLine"
import { usePathname } from "next/navigation";

type StepsLayoutProps = {
    children: ReactNode
}

type Step = {
    name: string,
    path: string
}

const steps: Step[] = [
    { name: "Select Ticket", path: "/booking/select-ticket" },
    { name: "Preview", path: "/booking/preview" },
    { name: "Payment", path: "/booking/payment" }
]

export const StepsLayout = ({ children }: StepsLayoutProps) => {
    const pathname = usePathname();
    const activeIndex = steps.findIndex(step => pathname === step.path)

    return (
        <article className='flex justify-start gap-28 min-w-[82%]'>
            <div className='flex flex-col px-8 py-6 mx-20 h-[200px] border-r-2 border-[#8586887c] border-dashed'>
                {steps.map((step, i, steps) => {
                    return (
                        <div key={step.path}>
                            <Link href={step.path}>
                                <div className='flex items-center gap-4'>
                                    <Dot active={i <= activeIndex} />
                                    <p>{step.name}</p>
                                </div>
                            </Link>
                            {i + 1 === steps.length ||
                                <VerticalLine active={i < activeIndex} />}
                        </div>
                    )
                }

                )}
            </div>
            <form>{children}</form>
        </article>
    )
}
