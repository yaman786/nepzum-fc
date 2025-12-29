import { Star } from 'lucide-react';
import TrialForm from './TrialForm';

export default function TrialCTA() {
    return (
        <section id="trial" className="relative py-24 sm:py-32 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-950 via-purple-900 to-purple-950" />
                <div className="abstract-shape w-[400px] h-[400px] bg-yellow-400/10 top-0 right-0" />
                <div className="abstract-shape w-[300px] h-[300px] bg-purple-600/30 bottom-0 left-1/4" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-10">
                    <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
                        Ignite Their Passion for Football.
                        <span className="block text-yellow-400">Start Their Journey Today.</span>
                    </h2>

                    <p className="text-lg sm:text-xl text-purple-200 mb-6 max-w-2xl mx-auto">
                        No experience necessary. No pressure. Just a chance to see if Nepzum FC is the right fit for your family.
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
                        <div className="flex items-center gap-2 text-yellow-400">
                            <Star className="w-5 h-5 fill-current" />
                            <span className="font-medium">✓ Completely Free Trial</span>
                        </div>
                        <div className="flex items-center gap-2 text-yellow-400">
                            <Star className="w-5 h-5 fill-current" />
                            <span className="font-medium">✓ Ages 5 to 16 Welcome</span>
                        </div>
                        <div className="flex items-center gap-2 text-yellow-400">
                            <Star className="w-5 h-5 fill-current" />
                            <span className="font-medium">✓ Beginners to Advanced</span>
                        </div>
                    </div>
                </div>

                {/* Trial Form */}
                <TrialForm />

                {/* Secondary note */}
                <p className="mt-6 text-center text-purple-300 text-sm">
                    No commitment required. We just want to show you what we do.
                </p>
            </div>
        </section>
    );
}
