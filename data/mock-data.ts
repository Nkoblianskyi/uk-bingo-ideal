import type { BettingSite, HorizontalBanner } from "../types"

export const bettingSites: BettingSite[] = [
  {
    id: 1,
    name: "Midnite",
    logo: "/midnite.webp",
    rating: 9.8,
    bonus: "Bet £10 Get £20",
    description: "Modern UK-focused sportsbook",
    features: ["Esports & Football", "Clean App", "Fast Withdrawals"],
    welcomeOffer: "50 Free Spins",
    terms:
      "18+ UK only. Bet £10 in total on pre-match accas with 4+ legs, min combined odds 3/1 (4.0), to qualify. Rewarded as free bets and/or spins per operator rules. Stake limits, payment exclusions and time limits apply. BeGambleAware.org",
    userRating: 9.8,
    votes: 6849,
    link: "https://www.midnite.com",
    backgroundImage: "/banner-3.jpg",
  },
  {
    id: 2,
    name: "Tonybet",
    logo: "/tonybetcasino.webp",
    rating: 9.7,
    bonus: "100% up to £100",
    description: "Trusted international brand",
    features: ["In-Play Betting", "Cash Out", "UK Payments"],
    welcomeOffer: " ",
    terms:
      "18+ UK new customers only. Min deposit and wagering requirements apply. Bonus paid as free bets or bonus funds per offer rules. Payment method and market exclusions apply. Full T&Cs on the operator site. BeGambleAware.org",
    userRating: 9.7,
    votes: 7186,
    link: "https://tonybet.co.uk",
    backgroundImage: "/banner-3.jpg",
  },
  {
    id: 3,
    name: "Novibet",
    logo: "/novibet.webp",
    rating: 9.6,
    bonus: "Bet £10",
    description: "Strong odds and UK promotions",
    features: ["Live Streaming", "Statistics", "Cash Out"],
    welcomeOffer: "Get £50 in free bets",
    terms:
      "18+ | UK new customers only | Max £50 in free bets (e.g. 5 x £10) may apply to a losing first qualifying bet only | Min stake £10 | Min odds 7/10 (1.70) | Free bet stake not returned | Payment and market restrictions may apply | Qualifying bet within 30 days of registration | Free bet validity 30 days | Full T&Cs on novibet.co.uk",
    userRating: 9.6,
    votes: 8525,
    link: "https://www.novibet.co.uk/en/sports",
    backgroundImage: "/banner-3.jpg",
  },
  {
    id: 6,
    name: "BetVictor",
    logo: "/betvictor.webp",
    rating: 9.7,
    bonus: "Bet £10",
    description: "Popular UK bookmaker",
    features: ["Competitive Odds", "Cash Out", "Bet Builder"],
    welcomeOffer: "Get £50 in racing free bets",
    terms:
      "18+ UK customers. Opt in, min £10 stake at min odds 2.0+ on eligible racing markets where stated. Rewards as free bets with expiry dates; cash out may void eligibility. Regional and payment restrictions apply. See BetVictor for current offer dates and full T&Cs. BeGambleAware.org",
    userRating: 9.7,
    votes: 8935,
    link: "https://www.betvictor.com/en-gb",
    backgroundImage: "/banner-10.jpg",
  },
  {
    id: 4,
    name: "BoyleSports",
    logo: "/boylesports.webp",
    rating: 9.5,
    bonus: "Bet £10 Get £30",
    description: "Retail heritage, UK online",
    features: ["Football & Racing", "Request-a-Bet", "Cash Out"],
    welcomeOffer: "£10 Casino Bonus",
    terms:
      "New UK online customers only: deposit £10+ and place a £10+ bet at odds of 2.0+ to receive £30 in free bets (7-day expiry) + £10 casino bonus where offered (acceptance and validity per offer rules). Excludes certain e-wallets and prepaid methods. 18+. T&Cs apply.",
    userRating: 9.5,
    votes: 9749,
    link: "https://www.boylesports.com",
    backgroundImage: "/banner-6.jpg",
  },
  {
    id: 5,
    name: "BetFred",
    logo: "/betfred.webp",
    rating: 9.4,
    bonus: "Bet £10",
    description: "Established UK bookmaker",
    features: ["Best Odds Guaranteed", "Extra Places", "Acca Insurance"],
    welcomeOffer: "Get £50 in free bets",
    terms:
      "New UK customers only. Register, deposit by debit card, place first sports bet £10+ at Evens (2.0)+ within 7 days. Free bets credited as stated in the active sign-up offer (typically split across sports and accas) with 7-day expiry. Eligibility exclusions and T&Cs apply.",
    userRating: 9.4,
    votes: 8567,
    link: "https://www.betfred.com",
    backgroundImage: "/banner-3.jpg",
  },
  {
    id: 7,
    name: "Spreadex Sports",
    logo: "/spreadex.webp",
    rating: 9.2,
    bonus: "Bet £10",
    description: "Fixed odds and spread betting",
    features: ["Live Streaming", "In-Play", "Cash Out"],
    welcomeOffer: "Welcome package in £",
    terms:
      "Spread betting losses can exceed deposit. 18+ UK. See Spreadex for the current new-customer package (may include free fixed-odds bets and spread-free stakes). Min odds and stake rules apply. www.gambleaware.org",
    userRating: 9.2,
    votes: 6834,
    link: "https://www.spreadex.com/sports/en-GB/spread-betting",
    backgroundImage: "/banner-6.jpg",
  },
  {
    id: 9,
    name: "LiveScore Bet",
    logo: "/livescorebet.png",
    rating: 9.0,
    bonus: "Bet £10",
    description: "Sportsbook from a familiar scores brand",
    features: ["Live Betting", "Price Boosts", "Cash Out"],
    welcomeOffer: "Get £50 in free bets",
    terms:
      "18+ UK new customers. Min £10 qualifying bet on sportsbook at min odds 1.5, settled within 14 days of sign-up where stated. Free bets: accept within 7 days, 7-day validity, stake not returned. Excludes virtuals where stated. T&Cs apply.",
    userRating: 9.0,
    votes: 5123,
    link: "https://www.livescorebet.com/uk/en/",
    backgroundImage: "/banner-3.jpg",
  },
  {
    id: 10,
    name: "Ladbrokes",
    logo: "/ladbrokes.webp",
    rating: 8.9,
    bonus: "Bet £5",
    description: "High-street name, full online service",
    features: ["Football & Racing", "Boosts", "Cash Out"],
    welcomeOffer: "Get £20 in free bets",
    terms:
      "18+ New UK customers only. Certain deposit methods and bet types excluded. Min first bet £5+ at min odds 1/2 within 14 days of registration to receive free bets as per the active offer (e.g. 4 x £5). Free bets valid 7 days on selected markets; stake not returned. Full T&Cs on Ladbrokes.",
    userRating: 8.9,
    votes: 9475,
    link: "https://sports.ladbrokes.com/en-gb/",
    backgroundImage: "/banner-3.webp",
  },
]

export const horizontalBanners: HorizontalBanner[] = [
  {
    id: 1,
    name: "Tonybet",
    logo: "/tonybet.png",
    bonus: " ",
    welcomeOffer: "100% up to £100",
    link: "https://tonybet.co.uk",
    backgroundImage: "/banner-bingo.webp",
    mobileBackgroundImage: "/banner-mobile.jpg",
    terms:
      "18+ UK new customers only. Min deposit and wagering requirements apply. Bonus paid as free bets or bonus funds per offer rules. Payment method and market exclusions apply. Full T&Cs on the operator site. BeGambleAware.org",
  },
  {
    id: 2,
    name: "Tonybet",
    logo: "/tonybet.png",
    bonus: "",
    welcomeOffer: "100% up to £100",
    link: "https://tonybet.co.uk",
    backgroundImage: "/banner-bingo.webp",
    mobileBackgroundImage: "/banner-mobile.jpg",
    terms:
      "18+ UK new customers only. Min deposit and wagering requirements apply. Bonus paid as free bets or bonus funds per offer rules. Payment method and market exclusions apply. Full T&Cs on the operator site. BeGambleAware.org",
  },
]

/** Slug for `/go/<slug>` redirects — lowercase, non-alphanumeric → hyphen */
function affiliateSlug(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

/** GET /go/<slug> → operator URL (e.g. Keitaro can replace values in production) */
export const affiliateLinks: Record<string, string> = Object.fromEntries(
  bettingSites.map((site) => [affiliateSlug(site.name), site.link]),
)
