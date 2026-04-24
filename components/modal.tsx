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

        {/* Desktop (lg+): left & right identical width; center clearly wider & taller */}
        <div className="hidden lg:flex w-full items-start justify-center gap-0 px-4 pb-2">
          {reorderedSites.map((site: BettingSite, index: number) => {
            const isCenter = index === 1

            return (
              <div
                key={site?.id || index}
                className={`flex min-h-0 flex-none flex-col overflow-hidden rounded-xl ${isCenter
                    ? "relative z-20 w-[392px] border-4 border-amber-500 shadow-2xl shadow-amber-500/35 xl:w-[424px]"
                    : "relative z-10 w-[228px] border-4 border-slate-200 xl:w-[240px]"
                  }`}
              >
                {/* White header — same height for both side cards */}
                <div
                  className={`flex shrink-0 items-center justify-center bg-white ${isCenter ? "h-[132px] px-5 py-5" : "h-[102px] px-3 py-3"}`}
                  style={{
                    borderTopLeftRadius: "calc(0.75rem - 4px)",
                    borderTopRightRadius: "calc(0.75rem - 4px)",
                  }}
                >
                  <img
                    src={site?.logo || "/placeholder.svg"}
                    alt={site?.name || "Site"}
                    className={isCenter ? "h-[72px] w-auto max-w-[90%] object-contain" : "h-[52px] w-auto max-w-[92%] object-contain"}
                  />
                </div>

                <div
                  className={`flex flex-col bg-black text-center text-white ${isCenter ? "min-h-[280px] px-5 py-5" : "min-h-[210px] px-3 py-4"}`}
                  style={{
                    borderBottomLeftRadius: "calc(0.75rem - 4px)",
                    borderBottomRightRadius: "calc(0.75rem - 4px)",
                  }}
                >
                  <div className={`mb-3 flex shrink-0 justify-center gap-1 ${isCenter ? "mt-1" : "mt-0"}`}>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`fill-amber-400 text-amber-400 ${isCenter ? "h-6 w-6" : "h-4 w-4"}`}
                      />
                    ))}
                  </div>

                  <div className="mb-3 flex shrink-0 flex-col justify-center">
                    <div className={`mb-2 font-bold leading-tight ${isCenter ? "text-2xl xl:text-3xl" : "text-base xl:text-lg"}`}>
                      {site?.bonus}
                    </div>
                    <div className={`leading-tight ${isCenter ? "text-xl xl:text-2xl" : "text-sm xl:text-base"}`}>
                      {site?.welcomeOffer}
                    </div>
                  </div>

                  <div className="mb-2 shrink-0">
                    <Link href={site?.link || "#"} target="_blank" rel="noopener noreferrer">
                      <Button
                        className={`w-full rounded-lg border border-amber-300/80 bg-amber-500 font-bold text-slate-900 hover:bg-amber-400 ${isCenter ? "px-4 py-3 text-base" : "px-3 py-2 text-xs"}`}
                      >
                        GET BONUS
                      </Button>
                    </Link>
                  </div>

                  <div
                    className={`overflow-y-auto overscroll-contain leading-snug text-gray-300 ${isCenter ? "max-h-[220px] text-[10px]" : "max-h-[168px] text-[8px] xl:text-[9px]"}`}
                  >
                    {site?.terms}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Tablet: side cards same width; center wider */}
        <div className="hidden w-full items-start justify-center gap-0 px-1 md:flex lg:hidden">
          {reorderedSites.map((site: BettingSite, index: number) => {
            const isCenter = index === 1

            return (
              <div
                key={site?.id || index}
                className={`flex min-h-0 flex-none flex-col overflow-hidden rounded-xl ${isCenter
                    ? "relative z-20 w-[46%] max-w-[280px] min-w-[220px] border-4 border-amber-500 shadow-2xl shadow-amber-500/35"
                    : "relative z-10 w-[27%] max-w-[168px] min-w-[150px] border-4 border-slate-200"
                  }`}
              >
                <div
                  className={`flex shrink-0 items-center justify-center bg-white ${isCenter ? "h-[88px] px-2 py-2" : "h-[72px] px-1.5 py-1.5"}`}
                  style={{
                    borderTopLeftRadius: "calc(0.75rem - 3px)",
                    borderTopRightRadius: "calc(0.75rem - 3px)",
                  }}
                >
                  <img
                    src={site?.logo || "/placeholder.svg"}
                    alt={site?.name || "Site"}
                    className={isCenter ? "h-14 w-auto max-w-[95%] object-contain" : "h-10 w-auto max-w-[95%] object-contain"}
                  />
                </div>

                <div
                  className={`flex flex-col bg-black text-center text-white ${isCenter ? "min-h-[200px] px-3 py-3" : "min-h-[168px] px-2 py-2.5"}`}
                  style={{
                    borderBottomLeftRadius: "calc(0.75rem - 3px)",
                    borderBottomRightRadius: "calc(0.75rem - 3px)",
                  }}
                >
                  <div className="mb-1.5 flex shrink-0 justify-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`fill-amber-400 text-amber-400 ${isCenter ? "h-3.5 w-3.5" : "h-3 w-3"}`}
                      />
                    ))}
                  </div>

                  <div className="mb-1.5 flex shrink-0 flex-col justify-center">
                    <div className={`mb-1 font-bold leading-tight ${isCenter ? "text-base" : "text-[13px]"}`}>{site?.bonus}</div>
                    <div className={`leading-tight ${isCenter ? "text-sm" : "text-[12px]"}`}>{site?.welcomeOffer}</div>
                  </div>

                  <div className="mb-1 shrink-0">
                    <Link href={site?.link || "#"} target="_blank" rel="noopener noreferrer">
                      <Button
                        className={`w-full rounded-lg border border-amber-300/80 bg-amber-500 font-bold text-slate-900 hover:bg-amber-400 ${isCenter ? "px-3 py-2 text-xs" : "px-2 py-1.5 text-[10px]"}`}
                      >
                        GET BONUS
                      </Button>
                    </Link>
                  </div>

                  <div
                    className={`overflow-y-auto overscroll-contain leading-snug text-gray-300 ${isCenter ? "max-h-[150px] text-[8px]" : "max-h-[120px] text-[7px]"}`}
                  >
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
