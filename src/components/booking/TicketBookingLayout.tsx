import { Metadata } from "next"

import { Separator } from "@components/ui/separator"
import { SidebarNav } from "./SideBarNav"

export const metadata: Metadata = {
    title: "Forms",
    description: "Advanced form example using react-hook-form and Zod.",
}

const sidebarNavItems = [
    {
        title: "Select Tickets",
        href: "/booking/select-tickets",
    },
    {
        title: "Information",
        href: "/booking/information",
    },
    {
        title: "Payment",
        href: "/booking/payment",
    }
]

interface TicketBookingLayoutProps {
    title: string,
    description: string,
    children: React.ReactNode
}

export function TicketBookingLayout({ title, description, children }: TicketBookingLayoutProps) {
    return (
        <div className="w-full lg:w-[80%] sm:container sm:border rounded-[0.5rem] sm:shadow">
            <div className="space-y-6 py-8 lg:p-10 lg:py-16 md:block">
                <div className="space-y-0.5">
                    <h2 className="text-2xl font-bold tracking-tight">
                        Lorem Ipsum Event 2023
                    </h2>
                    <p className="text-muted-foreground">
                        123 P. Đỗ Đức Dục, Mễ Trì, Nam Từ Liêm, Hà Nội
                    </p>
                </div>
                <Separator />
                <div className="flex flex-col gap-8 lg:flex-row lg:space-x-8 lg:space-y-0">
                    <aside className="overflow-auto sm:min-w-max lg:-mx-4">
                        <SidebarNav items={sidebarNavItems} />
                    </aside>
                    <div className="w-full flex flex-col gap-4">
                        <div>
                            <h3 className="text-lg font-medium">{title}</h3>
                            <div className="text-sm text-muted-foreground">
                                {description.split('\\n').map(str =>
                                    <p key={str}>{str}</p>)
                                }
                            </div>
                        </div>
                        <Separator />
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}