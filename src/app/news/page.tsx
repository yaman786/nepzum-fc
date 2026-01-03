import { Calendar, ArrowRight, Trophy, Users, Megaphone } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import ContactGrid from '@/components/ContactGrid';
import { sanityFetch } from '@/sanity/lib/fetch';
import { ALL_NEWS_QUERY } from '@/sanity/lib/queries';
import { FALLBACK_NEWS } from '@/sanity/lib/fallback';

export const revalidate = 60;

const categoryIcons: Record<string, any> = {
    'match-report': Trophy,
    'announcement': Megaphone,
    'achievement': Trophy,
    'event': Calendar,
    'registration': Users,
    'default': Megaphone
};

const categoryLabels: Record<string, string> = {
    'match-report': 'Match Report',
    'announcement': 'Announcement',
    'achievement': 'Achievement',
    'event': 'Event',
    'registration': 'Registration'
};

function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
}

export default async function NewsPage() {
    let newsItems = [];

    try {
        newsItems = await sanityFetch<any[]>({ query: ALL_NEWS_QUERY });
        if (!newsItems || newsItems.length === 0) {
            console.log('No news items found, using fallback');
            newsItems = FALLBACK_NEWS;
        }
    } catch (error) {
        console.error('Error fetching news:', error);
        newsItems = FALLBACK_NEWS;
    }

    // Map icons and labels
    const processedNews = newsItems.map(item => ({
        ...item,
        icon: categoryIcons[item.category] || categoryIcons['default'],
        categoryLabel: categoryLabels[item.category] || item.category,
        featured: newsItems.indexOf(item) === 0 // Make the newest one featured
    }));

    const featuredNews = processedNews[0];
    const otherNews = processedNews.slice(1);

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-slate-950 pt-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-900/40 border border-purple-500/30 text-purple-300 text-sm font-medium mb-4">
                            <Megaphone className="w-4 h-4" />
                            Club Updates
                        </span>
                        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                            Latest News
                        </h1>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                            Match reports, announcements, and updates from Nepzum FC.
                        </p>
                    </div>

                    {/* Featured News */}
                    {featuredNews && (
                        <div className="mb-16">
                            <div className="glass rounded-2xl overflow-hidden card-hover">
                                <div className="grid lg:grid-cols-2 gap-0">
                                    <div
                                        className="h-64 lg:h-auto bg-cover bg-center"
                                        style={{ backgroundImage: `url(${featuredNews.imageUrl || '/placeholder-news.jpg'})` }}
                                    />
                                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="px-3 py-1 bg-yellow-400 text-purple-900 text-xs font-bold rounded-full">
                                                Featured
                                            </span>
                                            <span className="text-purple-400 text-sm font-medium uppercase tracking-wider">
                                                {featuredNews.categoryLabel}
                                            </span>
                                        </div>
                                        <h2 className="font-display text-3xl font-bold text-white mb-4">
                                            {featuredNews.title}
                                        </h2>
                                        <p className="text-slate-400 mb-6 leading-relaxed line-clamp-3">
                                            {featuredNews.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-slate-500 text-sm">
                                                <Calendar className="w-4 h-4" />
                                                {formatDate(featuredNews.publishedAt)}
                                            </div>
                                            <Link
                                                href={`/news/${featuredNews.slug}`}
                                                className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-semibold transition-colors"
                                            >
                                                Read More
                                                <ArrowRight className="w-4 h-4" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* News Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {otherNews.map((item) => (
                            <Link
                                key={item._id}
                                href={`/news/${item.slug}`}
                                className="glass rounded-2xl overflow-hidden card-hover group block"
                            >
                                <div
                                    className="h-48 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                    style={{ backgroundImage: `url(${item.imageUrl || '/placeholder-news.jpg'})` }}
                                />
                                <div className="p-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <item.icon className="w-4 h-4 text-yellow-400" />
                                        <span className="text-purple-400 text-sm font-medium uppercase tracking-wider">
                                            {item.categoryLabel}
                                        </span>
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors line-clamp-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                                        {item.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between text-slate-500 text-xs">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-3 h-3" />
                                            {formatDate(item.publishedAt)}
                                        </div>
                                        <span className="text-yellow-400 font-semibold group-hover:text-yellow-300 transition-colors">
                                            Read →
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Load More */}
                    <div className="text-center mt-12">
                        <p className="text-slate-500 text-sm">Showing {newsItems.length} articles</p>
                    </div>
                </div>
            </main>
            <ContactGrid />
        </>
    );
}
