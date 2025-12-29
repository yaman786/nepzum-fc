import { Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface NewsItem {
    _id: string;
    title: string;
    slug: string;
    excerpt: string;
    publishedAt: string;
    imageUrl: string;
    category: string;
}

interface HomeNewsSectionProps {
    news: NewsItem[];
}

export default function HomeNewsSection({ news }: HomeNewsSectionProps) {
    if (!news || news.length === 0) return null;

    return (
        <section id="news" className="relative py-24 sm:py-32 bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
                            Latest Club News
                        </h2>
                        <p className="text-slate-400">Stay updated with match reports and announcements.</p>
                    </div>
                    <Link
                        href="/news"
                        className="hidden sm:inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-semibold transition-colors"
                    >
                        View All News <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {news.map((item) => (
                        <Link
                            key={item._id}
                            href={`/news/${item.slug}`}
                            className="group glass rounded-2xl overflow-hidden card-hover block"
                        >
                            <div
                                className="h-48 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                style={{ backgroundImage: `url(${item.imageUrl || '/placeholder-news.jpg'})` }} // Add your placeholder
                            />
                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-purple-400 text-xs font-bold uppercase tracking-wider">
                                        {item.category}
                                    </span>
                                </div>
                                <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors line-clamp-2">
                                    {item.title}
                                </h3>
                                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                                    {item.excerpt}
                                </p>
                                <div className="flex items-center text-slate-500 text-xs">
                                    <Calendar className="w-3 h-3 mr-2" />
                                    {new Date(item.publishedAt).toLocaleDateString('en-GB')}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
