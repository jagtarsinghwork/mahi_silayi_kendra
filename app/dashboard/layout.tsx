"use client"
import React, { useContext, useEffect, useState } from 'react';
import { Suspense } from "react"
import { Inter } from 'next/font/google'
import LoadingSkeleton from "./loading"
import { Sidebar } from '@/components/dashboard/Sidebar'
import { MobileSidebar } from '@/components/ui/sidebar'
import { UserNav } from '@/components/dashboard/user-nav'
// import { Toaster } from '@/components/ui/toaster'
import { Toaster } from '@/components/ui/sonner';
import { AuthContext } from '@/context/AuthContext';

const inter = Inter({ subsets: ['latin'] })

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const { session, isAuthenticated, isAuthenticating, logout } = useContext(AuthContext);
  console.log("session", session);
  return (
    <>
      <div className="flex min-h-screen">
        {/* Desktop Sidebar */}
        <Sidebar />

        {/* Mobile Sidebar Toggle */}
        <div className="md:hidden fixed top-4 left-4 z-50">
          <MobileSidebar />
        </div>

        {/* Main Content Area */}
        <main className="flex-1 md:ml-64 p-4 md:p-8 bg-black">
          {/* Mobile Header */}
          <header className="sticky top-0 z-40 border-b border-gray-800 bg-black/50 backdrop-blur-md md:hidden mb-6">
            <div className="flex h-16 items-center justify-between px-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500" />
                <h1 className="text-lg font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  TestFire
                </h1>
              </div>
              <UserNav user={session} />
            </div>
          </header>

          {/* Page Content with Suspense */}
          <Suspense fallback={<LoadingSkeleton />}>
            {children}
          </Suspense>
        </main>
      </div>
      <Toaster />
    </>
  )
}

// import { Suspense } from "react"
// import LoadingSkeleton from "./loading"

// export default function DashboardLayout({
//   children, // will be a page or nested layout
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <section>
//       <Suspense fallback={<LoadingSkeleton />}>
//         {children}
//       </Suspense>
//     </section>
//   )
// }