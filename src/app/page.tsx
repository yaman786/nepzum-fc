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

import { client } from '@/sanity/lib/client';
import { HOMEPAGE_NEWS_QUERY, UPCOMING_MATCHES_QUERY } from '@/sanity/lib/queries';
import { FALLBACK_NEWS, FALLBACK_MATCHES } from '@/sanity/lib/fallback';

export const revalidate = 60; // Revalidate every 60 seconds

export default async function Home() {
  let latestNews = [];
  let upcomingMatches = [];
  const isSanityConfigured = !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

  try {
    if (isSanityConfigured) {
      latestNews = await client.fetch(HOMEPAGE_NEWS_QUERY);
      upcomingMatches = await client.fetch(UPCOMING_MATCHES_QUERY);
    } else {
      console.warn("Sanity not configured. Using fallback data.");
      latestNews = FALLBACK_NEWS;
      upcomingMatches = FALLBACK_MATCHES;
    }
  } catch (error) {
    console.error("Sanity fetch failed:", error);
    // Fallback on error
    latestNews = FALLBACK_NEWS;
    upcomingMatches = FALLBACK_MATCHES;
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <HomeNewsSection news={latestNews} />
        <CoachesSection />
        <ScheduleSection />
        <PricingSection />
        <FixturesSection upcomingMatches={upcomingMatches} />
        <PlayerSpotlight />
        <GallerySection />
        <TestimonialsSection />
        <FAQSection />
        <TrialCTA />
      </main>
      <ContactGrid />
      <WhatsAppButton />
    </>
  );
}
