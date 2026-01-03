import Image from 'next/image';
import { Award, Shield, Star, CheckCircle } from 'lucide-react';

interface Coach {
    _id?: string;
    name: string;
    role: string;
    qualifications: string[];
    experience: string;
    bio: string;
    image?: string; // Rename to imageUrl in query but optional here for fallback match
    imageUrl?: string;
    badges: string[];
}

const FALLBACK_COACHES = [
    {
        name: 'David Thompson',
        role: 'Head Coach',
        qualifications: ['FA Level 3', 'UEFA B License'],
        experience: 'Former Charlton Athletic Youth',
        bio: '15+ years developing young talent in Southeast London. Passionate about building confidence and skills in every player.',
        // Professional full-body/portrait image
        imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=600&fit=crop',
        badges: ['DBS Checked', 'First Aid Certified']
    },
    {
        name: 'Marcus Williams',
        role: 'Assistant Coach',
        qualifications: ['FA Level 2', 'UEFA C License'],
        experience: 'Youth Development Specialist',
        bio: '8 years coaching grassroots football. Expert in technical skills development for ages 6-12.',
        imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop',
        badges: ['DBS Checked', 'Safeguarding Lead']
    },
    {
        name: 'Sarah Mitchell',
        role: 'Goalkeeper Coach',
        qualifications: ['FA Level 2 GK', 'FA Safeguarding'],
        experience: "Former Women's Super League",
        bio: 'Specialist in youth goalkeeper development. Bringing elite-level training to grassroots.',
        imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=600&fit=crop',
        badges: ['DBS Checked', 'First Aid Certified']
    },
];

export default function CoachesSection({ coaches }: { coaches?: Coach[] }) {
    const coachesToDisplay = coaches && coaches.length > 0 ? coaches : FALLBACK_COACHES;

    return (
        <section id="coaches" className="relative py-24 sm:py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-950/20 to-slate-900" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-purple-900/40 border border-purple-500/30 text-purple-300 text-sm font-medium mb-4">
                        Meet Your Child&apos;s Mentors
                    </span>
                    <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                        The Team Behind the Dream
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Decades of combined experience. UEFA licenses. Former professionals. One mission: unlocking your child&apos;s potential.
                    </p>
                </div>

                {/* Coaches Grid - Better Layout */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {coachesToDisplay.map((coach) => (
                        <div
                            key={coach.name}
                            className="group card-hover glass rounded-2xl overflow-hidden"
                        >
                            {/* Image Container - Proper Aspect Ratio */}
                            <div className="relative aspect-[4/5] overflow-hidden bg-slate-800">
                                {coach.imageUrl && (
                                    <Image
                                        src={coach.imageUrl}
                                        alt={`${coach.name} - ${coach.role}`}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                    />
                                )}
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />

                                {/* Name & Role Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-5">
                                    <h3 className="font-display text-2xl font-bold text-white mb-1">
                                        {coach.name}
                                    </h3>
                                    <p className="text-yellow-400 font-semibold text-lg">{coach.role}</p>
                                </div>

                                {/* Award Badge */}
                                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg">
                                    <Award className="w-6 h-6 text-purple-900" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                {/* Qualifications */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {coach.qualifications && coach.qualifications.map((qual) => (
                                        <span
                                            key={qual}
                                            className="px-3 py-1.5 bg-purple-900/50 text-purple-200 text-sm font-medium rounded-lg border border-purple-500/30"
                                        >
                                            {qual}
                                        </span>
                                    ))}
                                </div>

                                {/* Experience */}
                                <p className="text-sm text-yellow-400/90 mb-3 flex items-center gap-2">
                                    <Star className="w-4 h-4 fill-current" />
                                    {coach.experience}
                                </p>

                                {/* Bio */}
                                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                    {coach.bio}
                                </p>

                                {/* Verification Badges */}
                                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700/50">
                                    {coach.badges && coach.badges.map((badge) => (
                                        <span
                                            key={badge}
                                            className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-green-500/10 text-green-400 text-xs font-medium rounded-full border border-green-500/30"
                                        >
                                            <CheckCircle className="w-3.5 h-3.5" />
                                            {badge}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trust Footer */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-green-500/10 border border-green-500/30">
                        <Shield className="w-5 h-5 text-green-400" />
                        <span className="text-green-300 font-medium">
                            All coaches hold valid DBS certificates and complete annual safeguarding training
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
