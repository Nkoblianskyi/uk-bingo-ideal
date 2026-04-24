import type React from "react"
import type { Metadata } from "next"
import { Lato } from "next/font/google"
import "./globals.css"
import { Footer } from "../components/footer"
import { Header } from "../components/header"
import { SITE_DISPLAY_NAME, SITE_URL } from "@/lib/site"

const mulish = Lato({ subsets: ["latin"], weight: ["400", "700"] })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${SITE_DISPLAY_NAME} — Top licensed UK bingo rooms & offers`,
  description:
    "Compare the best UK online bingo rooms: UKGC-licensed operators, welcome bonuses in GBP, free tickets, game variety, and safer gambling resources for players in Great Britain.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <div
          className="min-h-screen relative"
          style={{
            backgroundImage: "url(/bg.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="relative z-10">
            {/* Header in layout - will show on all pages */}
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
