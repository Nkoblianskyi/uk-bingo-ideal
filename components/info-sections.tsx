"use client"

export function InfoSections() {
  return (
    <div className="mt-16">
      <section className="relative rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-black/80"></div>

        <div className="relative z-10 px-4 py-6 lg:py-8 text-white flex flex-col items-center text-center">
          <h2 className="text-xl lg:text-2xl font-bold mb-4 text-amber-400">
            Your guide to choosing a UK online bingo room
          </h2>

          <div className="space-y-4 w-full">
            <p className="text-gray-200 leading-relaxed text-sm">
              Great Britain has a busy online bingo market. The right site for you depends on ticket prices, room
              schedules, jackpots, side games, and how you like to play on mobile or desktop—not only the headline
              welcome bundle.
            </p>

            <div>
              <h3 className="text-lg font-bold mb-2 text-amber-400">How we review operators</h3>
              <p className="text-gray-200 leading-relaxed text-sm">
                We look at factors that matter to UK players: clarity of offers under UK advertising standards, game
                variety (including 90-ball and 75-ball where available), chat and community features, payments and
                withdrawal experience, customer support, and safer gambling tools on the UKGC-licensed platform.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2 text-amber-400">Finding the right fit</h3>
              <p className="text-gray-200 leading-relaxed text-sm mb-2">
                If you play evenings only, check peak-room traffic and ticket bundles. If you mostly play on your
                phone, prioritise a stable app, quick ticket purchase, and readable cards.
              </p>
              <p className="text-gray-200 leading-relaxed text-sm">
                Small differences in ticket value and promo rules add up—compare a few brands on the sessions you
                actually join, not only the first-deposit offer.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2 text-amber-400">Welcome offers and promotions</h3>
              <p className="text-gray-200 leading-relaxed text-sm">
                UK promotions are tightly regulated: always read the operator&apos;s full terms (wagering or game
                weighting if applicable, max win caps, payment exclusions, expiry). Our summaries are for comparison
                only; the bingo site&apos;s own terms are definitive.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2 text-amber-400">Regulation in the United Kingdom</h3>
              <p className="text-gray-200 leading-relaxed text-sm">
                Operators serving customers in Great Britain normally need a licence from the Gambling Commission
                (UKGC). That covers fairness, age checks, safer gambling messaging, and how offers must be presented.
                Confirm licence status on the brand&apos;s website before you deposit.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2 text-amber-400">What UK players often look for</h3>
              <p className="text-gray-200 leading-relaxed text-sm">
                Pre-buy for big linked games, BOGOF ticket deals where available, loyalty perks, and side slots or
                instant games between calls. The best rooms pair variety with clear limits and quick access to reality
                checks, timeouts, and self-exclusion (including GamStop where applicable).
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2 text-amber-400">Playing responsibly</h3>
              <p className="text-gray-200 leading-relaxed text-sm">
                Treat bingo as entertainment, not a way to make money. Use deposit and loss limits, take breaks, and
                never chase losses. If play stops feeling like a choice, organisations such as GambleAware and GamCare can
                help.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-gray-600 w-full">
            <div className="text-xs text-gray-400 leading-relaxed">
              <p className="mb-2">
                THIS MATERIAL IS COPYRIGHT PROTECTED. OFFERS AND SERVICES ARE INTENDED FOR UK RESIDENTS AGED 18+ ONLY.
              </p>
              <p>
                FURTHER RESTRICTIONS MAY APPLY, INCLUDING IDENTITY VERIFICATION, LOCATION CHECKS, AND OPERATOR-SPECIFIC
                ELIGIBILITY RULES.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
