'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Camera, Play, X, ChevronLeft, ChevronRight, Video, Image as ImageIcon, ZoomIn, Maximize2 } from 'lucide-react';

type GalleryItem = {
    _id?: string;
    id?: number;
    type: 'image' | 'video';
    src: string;
    thumbnail?: string;
    alt?: string;
    caption: string;
    category: 'training' | 'matches' | 'events' | 'facilities';
    featured?: boolean;
};

const FALLBACK_ITEMS: GalleryItem[] = [
    // Featured hero images
    {
        id: 1,
        type: 'image',
        src: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1920&h=1280&fit=crop&q=90',
        alt: 'Youth football training session at sunset',
        caption: 'Training in the Golden Hour',
        category: 'training',
        featured: true
    },
    {
        id: 2,
        type: 'image',
        src: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1600&h=1000&fit=crop&q=85',
        alt: 'Intense match day action with young players',
        caption: 'Match Day Intensity',
        category: 'matches',
        featured: true
    },
    // Training images
    {
        id: 3,
        type: 'image',
        src: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=1200&h=800&fit=crop&q=80',
        alt: 'Football skills development drills',
        caption: 'Skills Development',
        category: 'training'
    },
    {
        id: 4,
        type: 'image',
        src: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=1200&h=800&fit=crop&q=80',
        alt: 'Coach working with youth players',
        caption: 'Expert Coaching',
        category: 'training'
    },
    {
        id: 5,
        type: 'image',
        src: 'https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=1200&h=800&fit=crop&q=80',
        alt: 'Young player practicing dribbling',
        caption: 'Ball Control Practice',
        category: 'training'
    },
    {
        id: 6,
        type: 'image',
        src: 'https://images.unsplash.com/photo-1518604666860-9ed391f76460?w=1200&h=800&fit=crop&q=80',
        alt: 'Goalkeeper training session',
        caption: 'Goalkeeper Academy',
        category: 'training'
    },
    // Match images
    {
        id: 7,
        type: 'image',
        src: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=1200&h=800&fit=crop&q=80',
        alt: 'Team celebration after scoring',
        caption: 'Victory Celebration',
        category: 'matches'
    },
    {
        id: 8,
        type: 'image',
        src: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1200&h=800&fit=crop&q=80',
        alt: 'Players competing for the ball',
        caption: 'In the Heat of Battle',
        category: 'matches'
    },
    {
        id: 9,
        type: 'image',
        src: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=1200&h=800&fit=crop&q=80',
        alt: 'Football trophy on display',
        caption: 'Champions Trophy',
        category: 'matches'
    },
    // Facilities
    {
        id: 10,
        type: 'image',
        src: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=1200&h=800&fit=crop&q=80',
        alt: 'Beautiful green football pitch',
        caption: 'Our Home Ground',
        category: 'facilities'
    },
    {
        id: 11,
        type: 'image',
        src: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=1200&h=800&fit=crop&q=80',
        alt: 'Football boots ready on the field',
        caption: 'Ready to Play',
        category: 'facilities'
    },
    {
        id: 12,
        type: 'image',
        src: 'https://images.unsplash.com/photo-1556816213-9e2c2f099ab8?w=1200&h=800&fit=crop&q=80',
        alt: 'Clean modern changing rooms',
        caption: 'Modern Facilities',
        category: 'facilities'
    },
    // Events
    {
        id: 13,
        type: 'image',
        src: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=1200&h=800&fit=crop&q=80',
        alt: 'Award ceremony for young players',
        caption: 'Season Awards Night',
        category: 'events'
    },
    {
        id: 14,
        type: 'image',
        src: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1200&h=800&fit=crop&q=80',
        alt: 'Team photo day',
        caption: 'Team Photo Day',
        category: 'events'
    },
    // Videos
    {
        id: 15,
        type: 'video',
        src: 'https://player.vimeo.com/video/364802206?autoplay=1&muted=1',
        thumbnail: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=600&fit=crop&q=80',
        alt: 'Football training highlights video',
        caption: 'Training Highlights',
        category: 'training'
    },
    {
        id: 16,
        type: 'video',
        src: 'https://player.vimeo.com/video/312879457?autoplay=1&muted=1',
        thumbnail: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&h=600&fit=crop&q=80',
        alt: 'Match day atmosphere video',
        caption: 'Match Day Vibes',
        category: 'matches'
    },
];

const categories = [
    { id: 'all', label: 'All', icon: Camera },
    { id: 'training', label: 'Training', icon: ImageIcon },
    { id: 'matches', label: 'Matches', icon: Play },
    { id: 'events', label: 'Events', icon: Video },
    { id: 'facilities', label: 'Facilities', icon: ImageIcon },
];


export default function GallerySection({ items }: { items?: GalleryItem[] }) {
    const galleryItems = items && items.length > 0 ? items : FALLBACK_ITEMS;
    const [activeCategory, setActiveCategory] = useState('all');
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imageLoaded, setImageLoaded] = useState<Record<string, boolean>>({});
    const [touchStart, setTouchStart] = useState<number | null>(null);

    const filteredItems = activeCategory === 'all'
        ? galleryItems
        : galleryItems.filter(item => item.category === activeCategory);

    const openLightbox = (index: number) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = useCallback(() => {
        setLightboxOpen(false);
        document.body.style.overflow = '';
    }, []);

    const nextItem = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % filteredItems.length);
    }, [filteredItems.length]);

    const prevItem = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    }, [filteredItems.length]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!lightboxOpen) return;

            switch (e.key) {
                case 'Escape':
                    closeLightbox();
                    break;
                case 'ArrowRight':
                    nextItem();
                    break;
                case 'ArrowLeft':
                    prevItem();
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxOpen, closeLightbox, nextItem, prevItem]);

    // Touch/swipe handlers
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.touches[0].clientX);
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStart === null) return;

        const touchEnd = e.changedTouches[0].clientX;
        const diff = touchStart - touchEnd;

        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                nextItem();
            } else {
                prevItem();
            }
        }
        setTouchStart(null);
    };

    const handleImageLoad = (id: string | number) => {
        setImageLoaded(prev => ({ ...prev, [id]: true }));
    };

    const currentItem = filteredItems[currentIndex];
    const currentItemId = currentItem?._id || currentItem?.id; // Safety check

    // Get grid span class based on index and featured status
    const getGridClass = (item: GalleryItem, index: number) => {
        if (item.featured && index < 2) {
            return 'md:col-span-2 md:row-span-2';
        }
        // Create visual variety
        if (index % 7 === 3) return 'md:col-span-2';
        return '';
    };

    const getAspectClass = (item: GalleryItem, index: number) => {
        if (item.featured && index < 2) return 'aspect-square';
        if (index % 7 === 3) return 'aspect-[2/1]';
        return 'aspect-[4/3]';
    };

    return (
        <section id="gallery" className="relative py-24 sm:py-32 overflow-hidden bg-slate-950">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-900/40 border border-purple-500/30 text-purple-300 text-sm font-medium mb-4">
                        <Camera className="w-4 h-4" />
                        Life at Nepzum FC
                    </span>
                    <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">Gallery</span>
                    </h2>
                    <p className="text-slate-400 max-w-xl mx-auto">
                        See our players in action - training sessions, match days, and memorable moments.
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => {
                                setActiveCategory(cat.id);
                                setImageLoaded({});
                            }}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat.id
                                ? 'bg-gradient-to-r from-yellow-400 to-yellow-300 text-purple-900 shadow-lg shadow-yellow-400/25'
                                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
                                }`}
                        >
                            <cat.icon className="w-4 h-4" />
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid - Enhanced Masonry Style */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-auto">
                    {filteredItems.map((item, index) => {
                        const itemId = item._id || item.id || index;
                        return (
                            <div
                                key={itemId}
                                onClick={() => openLightbox(index)}
                                className={`group relative rounded-xl overflow-hidden cursor-pointer transform hover:scale-[1.02] transition-all duration-300 ${getGridClass(item, index)}`}
                            >
                                <div className={`relative ${getAspectClass(item, index)}`}>
                                    {/* Loading skeleton */}
                                    {!imageLoaded[itemId] && (
                                        <div className="absolute inset-0 bg-slate-800 animate-pulse">
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-700/50 to-transparent skeleton-shimmer" />
                                        </div>
                                    )}

                                    <Image
                                        src={item.type === 'video' ? item.thumbnail! : item.src}
                                        alt={item.alt || item.caption}
                                        fill
                                        className={`object-cover transition-all duration-700 group-hover:scale-110 ${imageLoaded[itemId] ? 'opacity-100' : 'opacity-0'}`}
                                        onLoad={() => handleImageLoad(itemId)}
                                        placeholder="blur"
                                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                                    />
                                </div>

                                {/* Video Play Button */}
                                {item.type === 'video' && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-300 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-yellow-400/30">
                                            <Play className="w-8 h-8 text-purple-900 ml-1" fill="currentColor" />
                                        </div>
                                    </div>
                                )}

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

                                {/* Zoom Icon */}
                                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                    <div className="p-2 rounded-full bg-white/20 backdrop-blur-sm">
                                        {item.type === 'video' ? (
                                            <Maximize2 className="w-4 h-4 text-white" />
                                        ) : (
                                            <ZoomIn className="w-4 h-4 text-white" />
                                        )}
                                    </div>
                                </div>

                                {/* Caption */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <span className="text-white font-medium text-sm flex items-center gap-2">
                                        {item.type === 'video' && <Video className="w-4 h-4" />}
                                        {item.caption}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Gallery Stats */}
                <div className="mt-12 flex justify-center gap-12 text-center">
                    <div className="group">
                        <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200 group-hover:scale-110 transition-transform">
                            {galleryItems.filter(i => i.type === 'image').length}
                        </p>
                        <p className="text-sm text-slate-400 mt-1">Photos</p>
                    </div>
                    <div className="w-px bg-slate-700" />
                    <div className="group">
                        <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-200 group-hover:scale-110 transition-transform">
                            {galleryItems.filter(i => i.type === 'video').length}
                        </p>
                        <p className="text-sm text-slate-400 mt-1">Videos</p>
                    </div>
                    <div className="w-px bg-slate-700" />
                    <div className="group">
                        <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-200 group-hover:scale-110 transition-transform">
                            {categories.length - 1}
                        </p>
                        <p className="text-sm text-slate-400 mt-1">Categories</p>
                    </div>
                </div>

                {/* Social CTA */}
                <div className="mt-10 text-center">
                    <p className="text-slate-500 text-sm">
                        Follow us on social media for daily updates and behind-the-scenes content
                    </p>
                </div>
            </div>

            {/* Enhanced Lightbox Modal */}
            {lightboxOpen && currentItem && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center backdrop-blur-sm"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    {/* Close Button */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110 z-50"
                        aria-label="Close lightbox"
                    >
                        <X className="w-6 h-6" />
                    </button>
                    {/* ... Navigation buttons omitted for brevity if unchanged, but included in replace ... */}
                    {/* Navigation - Left */}
                    <button
                        onClick={prevItem}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110 group"
                        aria-label="Previous"
                    >
                        <ChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
                    </button>

                    {/* Navigation - Right */}
                    <button
                        onClick={nextItem}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110 group"
                        aria-label="Next"
                    >
                        <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
                    </button>

                    {/* Content */}
                    <div className="max-w-6xl max-h-[85vh] w-full mx-4">
                        {currentItem.type === 'image' ? (
                            <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-2xl">
                                <Image
                                    src={currentItem.src}
                                    alt={currentItem.alt || currentItem.caption}
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        ) : (
                            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
                                <iframe
                                    src={currentItem.src}
                                    className="w-full h-full"
                                    allow="autoplay; fullscreen"
                                    allowFullScreen
                                />
                            </div>
                        )}

                        {/* Caption & Counter */}
                        <div className="text-center mt-6">
                            <p className="text-white font-medium text-xl">{currentItem.caption}</p>
                            <p className="text-slate-400 text-sm mt-2">
                                {currentIndex + 1} / {filteredItems.length}
                            </p>
                            {/* Keyboard hint */}
                            <p className="text-slate-600 text-xs mt-4 hidden sm:block">
                                Use ← → arrow keys to navigate • ESC to close
                            </p>
                        </div>
                    </div>

                    {/* Click outside to close */}
                    <div
                        className="absolute inset-0 -z-10"
                        onClick={closeLightbox}
                    />

                    {/* Thumbnail strip */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex gap-2 max-w-xl overflow-x-auto p-2 rounded-xl bg-black/50 backdrop-blur-sm">
                        {filteredItems.slice(0, 6).map((item, idx) => {
                            const thumbId = item._id || item.id || idx;
                            return (
                                <button
                                    key={thumbId}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`relative w-16 h-12 rounded-lg overflow-hidden flex-shrink-0 transition-all ${idx === currentIndex
                                        ? 'ring-2 ring-yellow-400 scale-105'
                                        : 'opacity-50 hover:opacity-100'
                                        }`}
                                >
                                    <Image
                                        src={item.type === 'video' ? item.thumbnail! : item.src}
                                        alt=""
                                        fill
                                        className="object-cover"
                                    />
                                </button>
                            );
                        })}
                        {filteredItems.length > 6 && (
                            <div className="w-16 h-12 rounded-lg bg-white/10 flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
                                +{filteredItems.length - 6}
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* CSS for skeleton shimmer animation */}
            <style jsx>{`
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                .skeleton-shimmer {
                    animation: shimmer 1.5s infinite;
                }
            `}</style>
        </section>
    );
}

