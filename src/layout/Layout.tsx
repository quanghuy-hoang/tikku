import { ReactNode } from "react"

type LayoutProps = {
    children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <section className='p-16 flex justify-center items-center'>
            {children}
        </section>
    )
}
