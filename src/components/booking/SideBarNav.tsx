"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
    items: {
        href: string
        title: string
    }[]
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
    const pathname = usePathname()

    return (
        <nav className={cn(
            "flex gap-x-2 lg:flex-col lg:space-x-0 lg:gap-y-4 ",
            className)}{...props}>
            {items.map((item, index) => (
                <Link href={item.href} key={item.href}
                    className={cn(
                        "group py-2 px-4 rounded-[0.2rem] cursor-pointer",
                        pathname === item.href
                            ? "bg-muted"
                            : "hover:bg-transparent")}>
                    <p className="text-xs">STEP {index + 1}</p>
                    <p className="group-hover:font-semibold whitespace-nowrap">
                        {item.title}
                    </p>
                </Link>

            ))}
        </nav>
    )
}