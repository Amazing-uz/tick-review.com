import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Watch-Hub - Expert Watch Reviews & Amazon Deals",
    template: "%s | Watch-Hub",
  },
  description:
    "Discover the best watches with expert reviews, buying guides, and exclusive Amazon deals. From luxury Swiss watches to affordable everyday timepieces.",
  keywords:
    "watches, watch reviews, luxury watches, affordable watches, Amazon watches, Rolex, Omega, Seiko, Casio, watch buying guide, dive watches, dress watches",
  authors: [{ name: "Watch-Hub Team" }],
  creator: "Watch-Hub",
  publisher: "Watch-Hub",
  metadataBase: new URL("https://watchhub.com"),
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", sizes: "192x192", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://watchhub.com",
    siteName: "Watch-Hub",
    title: "Watch-Hub - Expert Watch Reviews & Amazon Deals",
    description: "Your trusted source for watch reviews, comparisons, and the best Amazon deals on timepieces.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Watch-Hub - Expert Watch Reviews & Amazon Deals",
    description: "Your trusted source for watch reviews, comparisons, and the best Amazon deals on timepieces.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
