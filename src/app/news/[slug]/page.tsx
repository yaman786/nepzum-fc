
import { sanityFetch } from "@/sanity/lib/fetch";
import { POST_QUERY } from "@/sanity/lib/queries";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactGrid from "@/components/ContactGrid";
import { notFound } from "next/navigation";

export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await sanityFetch<any>({
        query: POST_QUERY,
        params: { slug },
    });

    if (!post) {
        return {
            title: "Article Not Found | Nepzum FC",
        };
    }

    return {
        title: `${post.title} | Nepzum FC`,
        description: post.excerpt,
    };
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await sanityFetch<any>({
        query: POST_QUERY,
        params: { slug },
    });

    if (!post) {
        notFound();
    }

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-slate-950 pt-24 pb-16">
                <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Back Link */}
                    <Link
                        href="/news"
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to News
                    </Link>

                    {/* Header */}
                    <header className="mb-12">
                        <div className="flex flex-wrap items-center gap-4 text-sm text-purple-300 mb-6 font-medium">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-900/40 border border-purple-500/30 uppercase tracking-wider text-xs">
                                <Tag className="w-3 h-3" />
                                {post.category}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Calendar className="w-4 h-4 text-slate-500" />
                                <span className="text-slate-400">
                                    {new Date(post.publishedAt || new Date()).toLocaleDateString("en-GB", {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                    })}
                                </span>
                            </span>
                        </div>

                        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                            {post.title}
                        </h1>

                        {post.imageUrl && (
                            <div className="relative aspect-video w-full rounded-2xl overflow-hidden glass border border-white/10">
                                <Image
                                    src={post.imageUrl}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        )}
                    </header>

                    {/* Content */}
                    <div className="prose prose-invert prose-lg max-w-none">
                        {post.body ? (
                            <PortableText
                                value={post.body}
                                components={{
                                    block: {
                                        h2: ({ children }) => (
                                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">{children}</h2>
                                        ),
                                        h3: ({ children }) => (
                                            <h3 className="text-xl font-bold text-white mt-6 mb-3">{children}</h3>
                                        ),
                                        normal: ({ children }) => (
                                            <p className="text-slate-300 mb-4 leading-relaxed">{children}</p>
                                        ),
                                    },
                                    marks: {
                                        link: ({ value, children }) => {
                                            const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
                                            return (
                                                <a href={value?.href} target={target} rel={target === '_blank' ? 'noindex nofollow' : undefined} className="text-yellow-400 hover:text-yellow-300 underline underline-offset-2">
                                                    {children}
                                                </a>
                                            )
                                        },
                                    }
                                }}
                            />
                        ) : (
                            <p className="text-slate-400 italic">No content available for this article.</p>
                        )}
                    </div>
                </article>
            </main>
            <ContactGrid />
        </>
    );
}
