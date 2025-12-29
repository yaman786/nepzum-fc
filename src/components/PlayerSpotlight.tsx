'use client';

import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Trophy, Target, Users } from 'lucide-react';
import Image from 'next/image';

const playerSpotlights = [
    {
        id: 1,
        name: 'Marcus Johnson',
        age: 14,
        team: 'U14 Squad',
        position: 'Striker',
        yearsAtClub: 4,
        image: 'https://images.unsplash.com/photo-1606567595334-d39972c85dfd?w=400&h=500&fit=crop&crop=face',
        story: 'Marcus joined Nepzum FC as a shy 10-year-old with raw talent. Under Coach Williams\' guidance, he\'s developed into our top scorer with 23 goals this season. He\'s now been scouted by Charlton Athletic\'s academy.',
        achievement: 'Top Scorer 2024',
        quote: 'The coaches here believed in me when I didn\'t believe in myself. Now I dream bigger than ever.',
    },
    {
        id: 2,
        name: 'Amara Okonkwo',
        age: 12,
        team: 'U12 Girls',
        position: 'Midfielder',
        yearsAtClub: 3,
        image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=500&fit=crop&crop=face',
        story: 'Amara started as a complete beginner at our Mini Kickers program aged 9. Her dedication and natural leadership have made her team captain. She also volunteers to help coach our youngest players.',
        achievement: 'Captain & Role Model',
        quote: 'Nepzum FC is like my second family. I\'ve learned that hard work beats talent when talent doesn\'t work hard.',
    },
    {
        id: 3,
        name: 'Daniel Mensah',
        age: 16,
        team: 'U16 Squad',
        position: 'Goalkeeper',
        yearsAtClub: 6,
        image: 'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?w=400&h=500&fit=crop&crop=face',
        story: 'Daniel\'s journey from our U10s to U16 captain shows what commitment can achieve. He\'s kept 15 clean sheets this season and was nominated for South London Youth Player of the Year.',
        achievement: '15 Clean Sheets',
        quote: 'Every save I make, I think of all the training sessions that prepared me. Nepzum made me who I am.',
    },
];

const achievements = [
    { icon: Trophy, value: '47', label: 'Players Progressed to Trials' },
    { icon: Target, value: '8', label: 'Academy Signings' },
    { icon: Users, value: '200+', label: 'Players Trained' },
];

export default function PlayerSpotlight() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextPlayer = () => {
        setCurrentIndex((prev) => (prev + 1) % playerSpotlights.length);
    };

    const prevPlayer = () => {
        setCurrentIndex((prev) => (prev - 1 + playerSpotlights.length) % playerSpotlights.length);
    };

    const player = playerSpotlights[currentIndex];

    return (
        <section className="relative py-24 sm:py-32 overflow-hidden bg-slate-950">
            {/* Background effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-900/10 via-transparent to-transparent" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400/20 border border-yellow-400/30 text-yellow-300 text-sm font-medium mb-4">
                        <Star className="w-4 h-4" />
                        Player Journeys
                    </span>
                    <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                        Success Stories
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Meet the players who&apos;ve grown with us. Their journeys inspire our next generation.
                    </p>
                </div>

                {/* Achievement Stats */}
                <div className="grid grid-cols-3 gap-4 mb-16 max-w-2xl mx-auto">
                    {achievements.map((item, index) => (
                        <div key={index} className="text-center">
                            <div className="w-12 h-12 mx-auto rounded-xl bg-yellow-400/20 flex items-center justify-center mb-3">
                                <item.icon className="w-6 h-6 text-yellow-400" />
                            </div>
                            <p className="text-3xl font-bold text-white">{item.value}</p>
                            <p className="text-xs text-slate-400">{item.label}</p>
                        </div>
                    ))}
                </div>

                {/* Player Spotlight Card */}
                <div className="relative max-w-5xl mx-auto">
                    <div className="glass rounded-3xl overflow-hidden">
                        <div className="grid lg:grid-cols-2 gap-0">
                            {/* Player Image */}
                            <div className="relative h-80 lg:h-auto">
                                <Image
                                    src={player.image}
                                    alt={player.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    placeholder="blur"
                                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent lg:bg-gradient-to-r" />

                                {/* Achievement Badge */}
                                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                                    <div className="px-4 py-2 bg-yellow-400 text-purple-900 font-bold rounded-full text-sm flex items-center gap-2">
                                        <Trophy className="w-4 h-4" />
                                        {player.achievement}
                                    </div>
                                </div>
                            </div>

                            {/* Player Info */}
                            <div className="p-8 lg:p-12 flex flex-col justify-center">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="px-3 py-1 bg-purple-600 text-white text-xs font-bold rounded-full">
                                        {player.team}
                                    </span>
                                    <span className="text-slate-400 text-sm">
                                        {player.yearsAtClub} years at Nepzum
                                    </span>
                                </div>

                                <h3 className="font-display text-3xl font-bold text-white mb-2">
                                    {player.name}
                                </h3>
                                <p className="text-yellow-400 font-semibold mb-4">
                                    {player.position} • Age {player.age}
                                </p>

                                <p className="text-slate-300 leading-relaxed mb-6">
                                    {player.story}
                                </p>

                                {/* Quote */}
                                <blockquote className="relative pl-6 border-l-4 border-yellow-400 italic text-slate-400">
                                    &ldquo;{player.quote}&rdquo;
                                </blockquote>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevPlayer}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 w-12 h-12 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-white transition-all hover:scale-110 shadow-lg"
                        aria-label="Previous player"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextPlayer}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 w-12 h-12 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-white transition-all hover:scale-110 shadow-lg"
                        aria-label="Next player"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-8">
                        {playerSpotlights.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all ${index === currentIndex
                                    ? 'bg-yellow-400 w-8'
                                    : 'bg-slate-600 hover:bg-slate-500'
                                    }`}
                                aria-label={`View player ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <p className="text-slate-400 mb-4">Your child could be our next success story</p>
                    <a
                        href="#trial"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-bold rounded-xl transition-all hover:scale-105"
                    >
                        Start Their Journey Today
                    </a>
                </div>
            </div>
        </section>
    );
}
