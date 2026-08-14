import type { ReactNode } from "react"

interface PageContentProps {
  children: ReactNode
  className?: string
}

const PageContent = ({ children, className = "" }: PageContentProps) => {
  return (
    <section
      className={`bg-white px-3 py-10 sm:px-5 sm:py-14 md:px-8 md:py-16 ${className}`}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  )
}

export default PageContent
