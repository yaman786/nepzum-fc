import { Calendar, ArrowRight, Trophy, Users, Megaphone } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import ContactGrid from '@/components/ContactGrid';

const newsItems = [
    {
        id: 1,
        title: 'Welcome to Our New Website!',
        excerpt: 'We\'re excited to launch our brand new website, making it easier for parents and players to find information about Nepzum FC.',
        date: '2024-12-28',
        category: 'Announcement',
        icon: Megaphone,
        image: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800&h=400&fit=crop',
        featured: true,
    },
    {
        id: 2,
        title: 'U12s Reach Cup Semi-Final!',
        excerpt: 'Fantastic performance from our Under 12s as they secured a 3-1 victory against local rivals to reach the semi-finals.',
        date: '2024-12-20',
        category: 'Match Report',
        icon: Trophy,
        image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=400&fit=crop',
        featured: false,
    },
    {
        id: 3,
        title: 'Spring 2025 Registration Now Open',
        excerpt: 'Places are filling fast for our spring intake. Book your free trial today and secure your child\'s spot.',
        date: '2024-12-15',
        category: 'Registration',
        icon: Users,
        image: 'https://images.unsplash.com/photo-1529629468155-d61b7e3b0856?w=800&h=400&fit=crop',
        featured: false,
    },
    {
        id: 4,
        title: 'Coach Marcus Achieves UEFA B License',
        excerpt: 'Congratulations to Coach Marcus on completing his UEFA B coaching qualification after intensive training.',
        date: '2024-12-10',
        category: 'Team News',
        icon: Trophy,
        image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&h=400&fit=crop',
        featured: false,
    },
    {
        id: 5,
        title: 'Holiday Football Camp Announced',
        excerpt: 'Join us for our February half-term football camp! 3 days of intensive coaching, games, and fun for ages 6-14.',
        date: '2024-12-05',
        category: 'Events',
        icon: Megaphone,
        image: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=800&h=400&fit=crop',
        featured: false,
    },
];

function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
}

export default function NewsPage() {
    const featuredNews = newsItems.find(item => item.featured);
    const otherNews = newsItems.filter(item => !item.featured);

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
                                        style={{ backgroundImage: `url(${featuredNews.image})` }}
                                    />
                                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="px-3 py-1 bg-yellow-400 text-purple-900 text-xs font-bold rounded-full">
                                                Featured
                                            </span>
                                            <span className="text-purple-400 text-sm font-medium">
                                                {featuredNews.category}
                                            </span>
                                        </div>
                                        <h2 className="font-display text-3xl font-bold text-white mb-4">
                                            {featuredNews.title}
                                        </h2>
                                        <p className="text-slate-400 mb-6 leading-relaxed">
                                            {featuredNews.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-slate-500 text-sm">
                                                <Calendar className="w-4 h-4" />
                                                {formatDate(featuredNews.date)}
                                            </div>
                                            <Link
                                                href="#"
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
                            <article
                                key={item.id}
                                className="glass rounded-2xl overflow-hidden card-hover group"
                            >
                                <div
                                    className="h-48 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                    style={{ backgroundImage: `url(${item.image})` }}
                                />
                                <div className="p-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <item.icon className="w-4 h-4 text-yellow-400" />
                                        <span className="text-purple-400 text-sm font-medium">
                                            {item.category}
                                        </span>
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                                        {item.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-slate-500 text-xs">
                                            <Calendar className="w-3 h-3" />
                                            {formatDate(item.date)}
                                        </div>
                                        <Link
                                            href="#"
                                            className="text-yellow-400 hover:text-yellow-300 text-sm font-semibold transition-colors"
                                        >
                                            Read →
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Load More */}
                    <div className="text-center mt-12">
                        <button className="px-8 py-3 bg-purple-800 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors">
                            Load More News
                        </button>
                    </div>
                </div>
            </main>
            <ContactGrid />
        </>
    );
}
