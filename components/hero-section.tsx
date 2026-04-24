"use client"
import { Shield, Clock } from "lucide-react"
import Image from "next/image"

interface HeroSectionProps {
  onAdvertiserModalOpen: () => void
  onTermsModalOpen: () => void
}

export function HeroSection({ onAdvertiserModalOpen, onTermsModalOpen }: HeroSectionProps) {
  const getCurrentMonthYear = () => {
    const now = new Date()
    const monthNames = [
      "JANUARY",
      "FEBRUARY",
      "MARCH",
      "APRIL",
      "MAY",
      "JUNE",
      "JULY",
      "AUGUST",
      "SEPTEMBER",
      "OCTOBER",
      "NOVEMBER",
      "DECEMBER",
    ]
    const currentMonth = monthNames[now.getMonth()]
    const currentYear = now.getFullYear()
    return `${currentMonth} ${currentYear}`
  }

  return (
    <>
      {/* Hero — desktop */}
      <div
        className="hidden lg:block relative overflow-hidden text-white mb-2 w-full h-[200px] lg:h-[290px] xl:h-[290px] 2xl:h-[290px]"
        style={{ background: "rgba(0, 0, 0, 0.70)" }}
      >
        <div className="h-full flex flex-col justify-between text-center px-4 lg:px-6 xl:px-8 py-4 lg:py-5 gap-2 mt-3">
          <div className="space-y-1">
            <h1 className="text-lg lg:text-[40px] xl:text-[40px] 2xl:text-[40px] font-bold drop-shadow-lg">
              TOP <span className="text-red-500">UK</span>{" "}
              <span className="text-amber-400">ONLINE BINGO</span>
            </h1>

            <h2 className="text-[32px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px] font-bold">
              REVIEWED FOR {getCurrentMonthYear()}
            </h2>
          </div>

          <div className="space-y-2 lg:space-y-2 mx-auto">
            <p className="text-xs lg:text-xs xl:text-sm 2xl:text-sm leading-tight">
              Choosing a UK bingo room should be simple. We review UKGC-licensed sites so you can compare welcome
              offers, ticket bundles, rooms, and mobile play without the noise—whether you prefer 90-ball classics or
              modern variants.
            </p>

            <p className="text-xs lg:text-sm xl:text-sm 2xl:text-sm leading-tight">
              Each listing highlights real-player value: bonuses in GBP, game variety, and how clearly terms are
              explained under UK advertising rules.
            </p>

            <p className="text-[10px] lg:text-xs xl:text-xs 2xl:text-xs text-gray-300">
              *Individual bonus terms apply to each offer. Restricted to New Players. Must be 18+
            </p>
          </div>

          <div className="space-y-2 lg:space-y-4 mt-1">
            <div className="flex flex-wrap justify-center gap-3 lg:gap-4 xl:gap-6">
              <div className="flex items-center gap-1 lg:gap-2">
                <Shield className="w-3 h-3 lg:w-4 lg:h-4" />
                <span className="text-[10px] lg:text-xs xl:text-sm font-bold">100% Legal</span>
              </div>
              <div className="flex items-center gap-1 lg:gap-2">
                <Image src="/flag.png" alt="UK Flag" width={16} height={16} className="w-3 h-3 lg:w-4 lg:h-4" />
                <span className="text-[10px] lg:text-xs xl:text-sm font-bold">UKGC Licensed</span>
              </div>
              <div className="flex items-center gap-1 lg:gap-2">
                <Clock className="w-3 h-3 lg:w-4 lg:h-4" />
                <span className="text-[10px] lg:text-xs xl:text-sm font-bold">Fast Withdrawals</span>
              </div>
            </div>

            <div className="text-[9px] lg:text-[10px] xl:text-xs leading-tight text-left">
              Play responsibly. Wagering and T&Cs apply.
              <button onClick={onAdvertiserModalOpen} className="underline ml-1 hover:text-amber-300 transition-colors">
                Advertiser Disclosure
              </button>
              <span> | </span>
              <button onClick={onTermsModalOpen} className="underline hover:text-amber-300 transition-colors">
                18+ T&Cs Apply
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero — tablet */}
      <div
        className="hidden md:block lg:hidden h-[160px] md:h-[180px] relative overflow-hidden text-white mb-2 w-full"
        style={{ background: "rgba(0, 0, 0, 0.70)" }}
      >
        <div className="h-full flex flex-col justify-between text-center px-4 md:px-6 py-3">
          <div className="space-y-1">
            <h1 className="text-xl md:text-2xl font-bold">
              TOP <span className="text-red-500">UK</span> <span className="text-amber-400">ONLINE BINGO</span>
            </h1>
            <h2 className="text-lg md:text-xl font-bold">REVIEWED FOR {getCurrentMonthYear()}</h2>
          </div>

          <div className="flex justify-center gap-4 md:gap-6">
            <div className="flex items-center gap-1 md:gap-2">
              <Shield className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-xs md:text-sm font-bold">100% Legal</span>
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <Image src="/flag.png" alt="UK Flag" width={16} height={16} />
              <span className="text-xs md:text-sm font-bold">UKGC Licensed</span>
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <Clock className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-xs md:text-sm font-bold">Fast Withdrawals</span>
            </div>
          </div>

          <div className="text-[10px] md:text-xs">
            Play responsibly; Wagering and T&Cs apply.
            <button onClick={onAdvertiserModalOpen} className="underline ml-1">
              Advertiser Disclosure
            </button>
            <span> | </span>
            <button onClick={onTermsModalOpen} className="underline">
              18+ T&Cs Apply
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section - Mobile - ULTRA COMPACT 120px MAX */}
      <div
        className="md:hidden relative overflow-hidden text-white rounded-xl mb-1 w-full h-[120px]"
        style={{
          backgroundImage: "url(/bg.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/70 rounded-xl"></div>

        {/* Combined Header + Hero content - ULTRA COMPACT */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Hero content - ULTRA COMPACT */}
          <div className="flex-1 px-2 text-center flex flex-col justify-around p-2">
            {/* Main titles - COMPACT */}
            <div className="mb-1">
              <h1 className="text-base font-bold drop-shadow-lg leading-tight">
                TOP <span className="text-red-500">UK</span> <span className="text-amber-400">BINGO</span>
              </h1>

            </div>

            <h2 className="text-[13px] font-bold drop-shadow-lg leading-tight">
              REVIEWED FOR {getCurrentMonthYear()}
            </h2>

            {/* Feature badges - ULTRA COMPACT */}
            <div className="flex justify-center gap-2">
              <div className="flex flex-col items-center">
                <Shield className="w-3 h-3 mb-0.5" />
                <span className="text-[7px] font-bold leading-tight">100% Legal</span>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/flag.png" alt="UK Flag" width={16} height={16} />
                <span className="text-[7px] font-bold leading-tight">UKGC Licensed</span>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="w-3 h-3 mb-0.5" />
                <span className="text-[7px] font-bold leading-tight">Fast Withdrawals</span>
              </div>
            </div>

            {/* Bottom text - ULTRA COMPACT */}
            <div className="text-[6px] leading-tight">
              <div>Play responsibly. Wagering and T&Cs apply.</div>
              <div>
                <button onClick={onAdvertiserModalOpen} className="underline hover:text-amber-300">
                  Advertiser Disclosure
                </button>
                <span> | </span>
                <button onClick={onTermsModalOpen} className="underline hover:text-amber-300">
                  18+ T&Cs Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
