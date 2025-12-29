import { Shield, Trophy, Users } from 'lucide-react';

const trustItems = [
    {
        icon: Shield,
        title: 'Mentors, Not Just Coaches',
        description: 'Every coach holds an enhanced DBS certificate and completes annual FA safeguarding training. No exceptions.',
        highlight: 'DBS Checked'
    },
    {
        icon: Trophy,
        title: 'UEFA-Licensed Expertise',
        description: 'Our coaching team includes former professional players and UEFA-licensed specialists—bringing elite training to grassroots football.',
        highlight: 'UEFA Licensed'
    },
    {
        icon: Users,
        title: 'More Than a Club',
        description: "We're building tomorrow's leaders, not just footballers. Every child is welcomed, valued, and pushed to be their best.",
        highlight: 'Inclusive'
    }
];

export default function TrustSection() {
    return (
        <section id="safeguarding" className="relative py-24 sm:py-32 overflow-hidden">
            {/* Background accent */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-purple-900/40 border border-purple-500/30 text-purple-300 text-sm font-medium mb-4">
                        Trusted by 100+ Local Families
                    </span>
                    <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                        Safety First. Development Always.
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Every parent wants the best for their child. At Nepzum FC, safeguarding isn&apos;t a checkbox—it&apos;s our foundation.
                    </p>
                </div>

                {/* Trust Cards Grid */}
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {trustItems.map((item, index) => (
                        <div
                            key={item.title}
                            className="group card-hover glass rounded-2xl p-8 relative overflow-hidden"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Hover gradient effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-purple-600/0 to-purple-600/0 group-hover:from-purple-600/10 group-hover:via-purple-600/5 group-hover:to-transparent transition-all duration-500" />

                            {/* Icon Container */}
                            <div className="relative mb-6">
                                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <item.icon className="w-8 h-8 text-yellow-400" />
                                </div>
                                {/* Highlight badge */}
                                <span className="absolute -top-2 -right-2 px-2 py-1 bg-yellow-400 text-purple-900 text-xs font-bold rounded-full">
                                    {item.highlight}
                                </span>
                            </div>

                            {/* Content */}
                            <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                {item.description}
                            </p>

                            {/* Bottom accent line */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                    ))}
                </div>

                {/* Trust indicators */}
                <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-slate-500">
                    <div className="flex items-center gap-2">
                        <Shield className="w-5 h-5" />
                        <span className="text-sm">Fully Insured</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Shield className="w-5 h-5" />
                        <span className="text-sm">FA Affiliated</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Shield className="w-5 h-5" />
                        <span className="text-sm">First Aid Trained</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
