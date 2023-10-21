import { ReactNode } from "react"

type LayoutProps = {
    children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <section className='px-4 sm:px-8 py-16 md:px-12 lg:p-16 flex justify-center items-center'>
            {children}
        </section>
    )
}
