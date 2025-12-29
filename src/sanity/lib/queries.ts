import { groq } from 'next-sanity'

export const HOMEPAGE_NEWS_QUERY = groq`*[_type == "post"] | order(publishedAt desc)[0...3] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  "imageUrl": mainImage.asset->url,
  // Fallback category if not defined in schema yet, or add category to schema
  "category": "Club Update" 
}`

export const UPCOMING_MATCHES_QUERY = groq`*[_type == "fixture" && date > now()] | order(date asc)[0...4] {
  _id,
  "homeTeam": select(isHome == true => "Nepzum FC", opponent),
  "awayTeam": select(isHome == true => opponent, "Nepzum FC"),
  date,
  "venue": location,
  "competition": "League", // Default for now
  isHome
}`
