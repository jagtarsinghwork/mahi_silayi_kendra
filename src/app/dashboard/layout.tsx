import { Suspense } from "react"
import LoadingSkeleton from "./loading"

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <Suspense fallback={<LoadingSkeleton />}>
        {children}
      </Suspense>
    </section>
  )
}