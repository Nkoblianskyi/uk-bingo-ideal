"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 shadow-2xl border-t border-bingo-pink/35 bg-slate-950 text-white">
      <div className="flex h-1 w-full" aria-hidden>
        <div className="w-1/3 bg-slate-800" />
        <div className="w-1/3 bg-white" />
        <div className="w-1/3 bg-red-600" />
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4 py-4">
        <div className="flex-1">
          <p className="text-sm text-slate-200">
            We use cookies to improve your experience and to understand how visitors use our UK bingo comparison pages.
            By continuing, you agree to our use of cookies as described in our policies.
            <Link href="/privacy-policy" className="text-bingo-pink hover:text-bingo-purple-light underline underline-offset-2 ml-1">
              Privacy Policy
            </Link>
            <span className="text-slate-500"> · </span>
            <Link href="/cookie-policy" className="text-bingo-pink hover:text-bingo-purple-light underline underline-offset-2">
              Cookie Policy
            </Link>
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 shrink-0">
          <Button
            onClick={handleDecline}
            variant="outline"
            className="border-2 border-slate-500 bg-transparent text-white hover:bg-slate-800 hover:text-white hover:border-slate-400"
          >
            Decline
          </Button>
          <Button
            onClick={handleAccept}
            className="bg-bingo-pink hover:bg-bingo-pink-hover text-white font-semibold shadow-md border border-bingo-purple-light/50"
          >
            Accept cookies
          </Button>
        </div>
      </div>
    </div>
  )
}
