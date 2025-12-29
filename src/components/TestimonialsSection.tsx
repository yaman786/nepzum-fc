import { Quote, Star } from 'lucide-react';

const testimonials = [
    {
        quote: "My son was nervous at his first session, but Coach Dave made him feel so welcome. Six months later, he can't wait for training every week!",
        author: "Sarah M.",
        role: "Parent of U9 player",
        rating: 5
    },
    {
        quote: "Brilliant club with great communication. The coaches genuinely care about the kids' development both on and off the pitch.",
        author: "James K.",
        role: "Parent of U11 player",
        rating: 5
    },
    {
        quote: "My daughter has improved so much since joining Nepzum. The girls' training is fantastic and the environment is really inclusive.",
        author: "Michelle R.",
        role: "Parent of U10 player",
        rating: 5
    },
];

export default function TestimonialsSection() {
    return (
        <section className="relative py-24 sm:py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-purple-950/30 to-slate-900" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-purple-900/40 border border-purple-500/30 text-purple-300 text-sm font-medium mb-4">
                        Real Parents. Real Results.
                    </span>
                    <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
                        What the Nepzum FC Family Says
                    </h2>
                    <p className="text-slate-400 max-w-xl mx-auto">
                        Join 100+ families who&apos;ve seen the difference quality coaching makes.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="glass rounded-2xl p-6 relative"
                        >
                            {/* Quote Icon */}
                            <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center">
                                <Quote className="w-5 h-5 text-purple-900" />
                            </div>

                            {/* Stars */}
                            <div className="flex gap-1 mb-4 pt-2">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-slate-300 leading-relaxed mb-6">
                                &ldquo;{testimonial.quote}&rdquo;
                            </p>

                            {/* Author */}
                            <div className="border-t border-slate-700 pt-4">
                                <p className="font-display font-bold text-white">
                                    {testimonial.author}
                                </p>
                                <p className="text-sm text-slate-500">
                                    {testimonial.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <p className="text-slate-400 mb-4">
                        Ready to see the difference?
                    </p>
                    <a
                        href="#trial"
                        className="inline-flex items-center px-6 py-3 bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-bold rounded-lg transition-all hover:scale-105"
                    >
                        Book Your Free Trial
                    </a>
                </div>
            </div>
        </section>
    );
}
