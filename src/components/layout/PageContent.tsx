import type { ReactNode } from "react"

interface PageContentProps {
  children: ReactNode
  className?: string
}

const PageContent = ({ children, className = "" }: PageContentProps) => {
  return (
    <section className={`bg-[#F3F7F2] ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  )
}

export default PageContent
