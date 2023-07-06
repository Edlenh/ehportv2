"use client"
import "../styles/globals.css"
import { ThemeProvider } from "next-themes"

// components
import Navbar from "@/components/Navbar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark:bg-red-50">
      <ThemeProvider enableSystem={true} attribute="class">
        <Navbar />
        {children}
        
        </ThemeProvider>
        </body>
    </html>
  )
}
