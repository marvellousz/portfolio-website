import type React from "react"
import type { Metadata } from "next"
import { Poppins, Inter, Playfair_Display, Luckiest_Guy, Ephesis } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
})

const luckiestGuy = Luckiest_Guy({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-luckiest-guy",
})

const ephesis = Ephesis({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ephesis",
})

export const metadata: Metadata = {
  title: "Marvellous",
  description: "Modern portfolio showcasing my work as a designer and developer",
  generator: "next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="light">
      <body className={`${poppins.variable} ${inter.variable} ${playfair.variable} ${luckiestGuy.variable} ${ephesis.variable} font-sans`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
