"use client"

import { useState } from "react"
import { Modal } from "./modal"
import { CookieBanner } from "./cookie-banner"
import { InfoSections } from "./info-sections"
import { AdvertiserDisclosureModal } from "./advertiser-disclosure-modal"
import { TermsModal } from "./terms-modal"
import { bettingSites } from "../data/mock-data"
import { Ticker } from "./ticker"
import { HeroSection } from "./hero-section"
import { MainLayout } from "./main-layout"
import { SitesList } from "./sites-list"

export default function UkBettingPage() {
  const [isAdvertiserModalOpen, setIsAdvertiserModalOpen] = useState(false)
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false)

  return (
    <>
      <MainLayout>
        <div className="max-w-7xl mx-auto">
          <HeroSection
          onAdvertiserModalOpen={() => setIsAdvertiserModalOpen(true)}
          onTermsModalOpen={() => setIsTermsModalOpen(true)}
        />

        <div className="w-full">
          <Ticker />
        </div>

        <SitesList />

        <InfoSections />
        </div>
      </MainLayout>

      <Modal bettingSites={bettingSites} casinoSites={[]} />
      <CookieBanner />
      <AdvertiserDisclosureModal isOpen={isAdvertiserModalOpen} onClose={() => setIsAdvertiserModalOpen(false)} />
      <TermsModal isOpen={isTermsModalOpen} onClose={() => setIsTermsModalOpen(false)} />
    </>
  )
}
