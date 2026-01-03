import { groq } from 'next-sanity'

export const HOMEPAGE_NEWS_QUERY = groq`*[_type == "post"] | order(publishedAt desc)[0...3] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  "imageUrl": mainImage.asset->url,
  category
}`

export const ALL_NEWS_QUERY = groq`*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  "imageUrl": mainImage.asset->url,
  category
}`

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  "imageUrl": mainImage.asset->url,
  category,
  body
}`

export const UPCOMING_MATCHES_QUERY = groq`*[_type == "fixture" && date > now()] | order(date asc)[0...4] {
  _id,
  "homeTeam": select(isHome == true => "Nepzum FC", opponent),
  "awayTeam": select(isHome == true => opponent, "Nepzum FC"),
  date,
  venue,
  competition,
  isHome
}`

export const RECENT_RESULTS_QUERY = groq`*[_type == "fixture" && date < now()] | order(date desc)[0...5] {
  _id,
  "homeTeam": select(isHome == true => "Nepzum FC", opponent),
  "awayTeam": select(isHome == true => opponent, "Nepzum FC"),
  date,
  "homeScore": select(isHome == true => result.ourScore, result.theirScore),
  "awayScore": select(isHome == true => result.theirScore, result.ourScore)
}`

export const COACHES_QUERY = groq`*[_type == "coach"] | order(role asc) {
  _id,
  name,
  role,
  "imageUrl": image.asset->url,
  bio,
  qualifications,
  experience,
  badges
  qualifications,
  experience,
  badges
}`

export const PROGRAMS_QUERY = groq`*[_type == "program"] | order(_createdAt asc) {
  _id,
  name,
  ages,
  ageRange,
  schedule,
  focus,
  color
}`

export const PRICING_QUERY = groq`*[_type == "pricing"] | order(price asc) {
  _id,
  title,
  price,
  period,
  description,
  features,
  popular,
  ctaText,
  ctaLink,
  savings
}`

export const GALLERY_QUERY = groq`*[_type == "gallery"] | order(_createdAt desc) {
  _id,
  type,
  "src": select(type == 'image' => image.asset->url, videoUrl),
  "thumbnail": thumbnail.asset->url,
  caption,
  category,
  featured
}`

export const TESTIMONIALS_QUERY = groq`*[_type == "testimonial"] | order(_createdAt desc) {
  _id,
  author,
  role,
  quote,
  rating
}`
