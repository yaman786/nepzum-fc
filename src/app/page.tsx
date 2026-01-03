import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustSection from '@/components/TrustSection';
import CoachesSection from '@/components/CoachesSection';
import ScheduleSection from '@/components/ScheduleSection';
import PricingSection from '@/components/PricingSection';
import FixturesSection from '@/components/FixturesSection';
import PlayerSpotlight from '@/components/PlayerSpotlight';
import GallerySection from '@/components/GallerySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import TrialCTA from '@/components/TrialCTA';
import ContactGrid from '@/components/ContactGrid';
import WhatsAppButton from '@/components/WhatsAppButton';
import HomeNewsSection from '@/components/HomeNewsSection';

import { sanityFetch } from '@/sanity/lib/fetch';
import { HOMEPAGE_NEWS_QUERY, UPCOMING_MATCHES_QUERY, RECENT_RESULTS_QUERY, COACHES_QUERY, PROGRAMS_QUERY, PRICING_QUERY, GALLERY_QUERY } from '@/sanity/lib/queries';
import { FALLBACK_NEWS, FALLBACK_MATCHES, FALLBACK_RESULTS } from '@/sanity/lib/fallback';

export const revalidate = 60; // Revalidate every 60 seconds

export default async function Home() {
  let latestNews = [];
  let upcomingMatches = [];
  let recentResults = [];
  let coaches = [];
  let programs = [];
  let plans = [];
  let gallery = [];
  const isSanityConfigured = !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

  try {
    if (isSanityConfigured) {
      latestNews = await sanityFetch<any[]>({ query: HOMEPAGE_NEWS_QUERY });
      upcomingMatches = await sanityFetch<any[]>({ query: UPCOMING_MATCHES_QUERY });
      recentResults = await sanityFetch<any[]>({ query: RECENT_RESULTS_QUERY });
      coaches = await sanityFetch<any[]>({ query: COACHES_QUERY });
      programs = await sanityFetch<any[]>({ query: PROGRAMS_QUERY });
      plans = await sanityFetch<any[]>({ query: PRICING_QUERY });
      gallery = await sanityFetch<any[]>({ query: GALLERY_QUERY });
    } else {
      console.warn("Sanity not configured. Using fallback data.");
      latestNews = FALLBACK_NEWS;
      upcomingMatches = FALLBACK_MATCHES;
      recentResults = FALLBACK_RESULTS;
    }
  } catch (error) {
    console.error("Sanity fetch failed:", error);
    // Fallback on error
    latestNews = FALLBACK_NEWS;
    upcomingMatches = FALLBACK_MATCHES;
    recentResults = FALLBACK_RESULTS;
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <HomeNewsSection news={latestNews} />
        <CoachesSection coaches={coaches} />
        <ScheduleSection programs={programs} />
        <PricingSection plans={plans} />
        <FixturesSection upcomingMatches={upcomingMatches} recentResults={recentResults} />
        <PlayerSpotlight />
        <GallerySection items={gallery} />
        <TestimonialsSection />
        <FAQSection />
        <TrialCTA />
      </main>
      <ContactGrid />
      <WhatsAppButton />
    </>
  );
}
