"use client"

import { useState, useEffect } from "react"
import { X, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { BettingSite } from "../types"

interface Top3ModalProps {
  bettingSites: BettingSite[]
  casinoSites: BettingSite[]
}

export function Modal({ bettingSites, casinoSites }: Top3ModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 8000)

    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  const top3Sites = bettingSites.slice(0, 3)
  const reorderedSites = [top3Sites[1], top3Sites[0], top3Sites[2]]

  return (
    <div className="hidden md:flex fixed inset-0 z-50 flex-col items-center overflow-y-auto overscroll-y-contain bg-black/80 backdrop-blur-sm px-4 pt-8 pb-16 sm:pt-12 sm:pb-20 md:pt-14">
      {/* Close button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(false)}
        className="absolute top-4 right-4 text-black hover:bg-gray-200 z-10 w-10 h-10 p-0 rounded-full bg-white/90"
      >
        <X className="w-8 h-8 font-bold" />
      </Button>

      <div className="flex w-full max-w-6xl shrink-0 flex-col items-center">
        {/* Title */}
        <div className="text-center mb-2 md:mb-2">
          <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-white">
            Best <span className="text-red-500">UK</span> <span className="text-amber-400">Bingo</span> picks
          </h2>
        </div>

        {/* Desktop Layout (1024px+) */}
        <div className="hidden lg:flex w-full items-start justify-center gap-0 px-4 pb-2">
          {reorderedSites.map((site: BettingSite, index: number) => {
            const isCenter = index === 1

            return (
              <div
                key={site?.id || index}
                className={`flex flex-col overflow-hidden rounded-xl ${isCenter
                    ? "relative z-20 w-[357px] border-4 border-amber-500 shadow-2xl shadow-amber-500/35"
                    : "relative z-10 w-[255px] border-4 border-slate-200"
                  } min-h-0`}
              >
                {/* White header section */}
                <div
                  className={`flex shrink-0 items-center justify-center bg-white p-4 ${isCenter ? "h-[115px]" : "h-[109px]"}`}
                  style={{
                    borderTopLeftRadius: "calc(0.75rem - 4px)",
                    borderTopRightRadius: "calc(0.75rem - 4px)",
                  }}
                >
                  <img
                    src={site?.logo || "/placeholder.svg"}
                    alt={site?.name || "Site"}
                    className="h-18 w-auto object-contain"
                  />
                </div>

                {/* Black content section — grows with terms; scroll if unusually long */}
                <div
                  className={`flex flex-col bg-black p-4 text-center text-white ${isCenter ? "min-h-[240px]" : "min-h-[220px]"}`}
                  style={{
                    borderBottomLeftRadius: "calc(0.75rem - 4px)",
                    borderBottomRightRadius: "calc(0.75rem - 4px)",
                  }}
                >
                  {/* Stars */}
                  <div className="mb-3 mt-2 flex shrink-0 justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Offer text */}
                  <div className="mb-3 flex shrink-0 flex-col justify-center">
                    <div className={`${isCenter ? "text-2xl" : "text-xl"} mb-2 font-bold`}>{site?.bonus}</div>
                    <div className={isCenter ? "text-2xl" : "text-xl"}>{site?.welcomeOffer}</div>
                  </div>

                  {/* Button */}
                  <div className="mb-2 shrink-0">
                    <Link href={site?.link || "#"} target="_blank" rel="noopener noreferrer">
                      <Button className="w-full rounded-lg border border-amber-300/80 bg-amber-500 px-4 py-2 text-sm font-bold text-slate-900 hover:bg-amber-400">
                        GET BONUS
                      </Button>
                    </Link>
                  </div>

                  {/* Terms */}
                  <div className="max-h-[200px] overflow-y-auto overscroll-contain text-[9px] leading-snug text-gray-300">
                    {site?.terms}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Tablet Layout (768px - 1023px) */}
        <div className="hidden w-full items-start justify-center gap-0 px-2 md:flex lg:hidden">
          {reorderedSites.map((site: BettingSite, index: number) => {
            const isCenter = index === 1

            return (
              <div
                key={site?.id || index}
                className={`flex flex-col overflow-hidden rounded-xl ${isCenter
                    ? "relative z-20 w-[240px] border-4 border-amber-500 shadow-2xl shadow-amber-500/35"
                    : "relative z-10 w-[180px] border-4 border-slate-200"
                  } min-h-0`}
              >
                {/* White header section */}
                <div
                  className={`flex shrink-0 items-center justify-center bg-white p-3 ${isCenter ? "h-[80px]" : "h-[75px]"}`}
                  style={{
                    borderTopLeftRadius: "calc(0.75rem - 3px)",
                    borderTopRightRadius: "calc(0.75rem - 3px)",
                  }}
                >
                  <img
                    src={site?.logo || "/placeholder.svg"}
                    alt={site?.name || "Site"}
                    className="h-12 w-auto object-contain"
                  />
                </div>

                {/* Black content section */}
                <div
                  className={`flex flex-col bg-black p-3 text-center text-white ${isCenter ? "min-h-[180px]" : "min-h-[165px]"}`}
                  style={{
                    borderBottomLeftRadius: "calc(0.75rem - 3px)",
                    borderBottomRightRadius: "calc(0.75rem - 3px)",
                  }}
                >
                  {/* Stars */}
                  <div className="mb-1.5 flex shrink-0 justify-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Offer text */}
                  <div className="mb-1.5 flex shrink-0 flex-col justify-center">
                    <div className={`${isCenter ? "text-lg" : "text-base"} mb-1 font-bold`}>{site?.bonus}</div>
                    <div className={isCenter ? "text-lg" : "text-base"}>{site?.welcomeOffer}</div>
                  </div>

                  {/* Button */}
                  <div className="mb-1 shrink-0">
                    <Link href={site?.link || "#"} target="_blank" rel="noopener noreferrer">
                      <Button className="w-full rounded-lg border border-amber-300/80 bg-amber-500 px-3 py-1.5 text-xs font-bold text-slate-900 hover:bg-amber-400">
                        GET BONUS
                      </Button>
                    </Link>
                  </div>

                  {/* Terms */}
                  <div className="max-h-[160px] overflow-y-auto overscroll-contain text-[8px] leading-snug text-gray-300">
                    {site?.terms}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Footer text */}
        <div className="text-center mt-4 md:mt-8">
          <p className="text-white text-xs md:text-sm">
            18+. T&C's apply. <span className="underline">Begambleaware.org</span>. Play responsibly.
          </p>
        </div>
      </div>
    </div>
  )
}
