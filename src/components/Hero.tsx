export default function Hero() {
    return (
        <section id="academy" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Abstract Background Effects */}
            <div className="absolute inset-0">
                {/* Purple glow - top left */}
                <div className="abstract-shape w-[600px] h-[600px] bg-purple-900/80 -top-40 -left-40 animate-pulse-glow" />

                {/* Purple glow - center right */}
                <div className="abstract-shape w-[500px] h-[500px] bg-purple-800/60 top-1/4 -right-20 animate-float" />

                {/* Deep purple - bottom */}
                <div className="abstract-shape w-[800px] h-[400px] bg-purple-950/70 -bottom-20 left-1/4 animate-pulse-glow" style={{ animationDelay: '1s' }} />

                {/* Yellow accent glow */}
                <div className="abstract-shape w-[200px] h-[200px] bg-yellow-400/20 top-1/3 left-1/4 animate-float" style={{ animationDelay: '2s' }} />
            </div>

            {/* Grid overlay */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }}
            />

            {/* Content */}
            <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
                {/* Badge */}
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-900/50 border border-purple-500/30 mb-8 animate-float">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></span>
                    <span className="text-sm font-medium text-purple-200">🌟 Spring 2025 Intake Open — Limited Spots</span>
                </div>

                {/* Main Headline */}
                <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
                    <span className="text-white">BUILDING CHARACTER.</span>
                    <br />
                    <span className="text-gradient-purple">ON AND OFF THE PITCH.</span>
                </h1>

                {/* Subtext */}
                <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto">
                    Developing confidence, discipline, and football excellence.
                    <span className="block text-yellow-400 font-semibold mt-2">Join Southeast London&apos;s most supportive youth academy community.</span>
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="#trial"
                        className="btn-cta w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-bold text-lg rounded-xl transition-all hover:scale-105 glow-yellow"
                    >
                        Book Your Child&apos;s Free Session
                    </a>
                    <a
                        href="#safeguarding"
                        className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 text-white font-semibold text-lg rounded-xl border border-slate-600/50 transition-all hover:border-purple-500/50"
                    >
                        See Why Parents Trust Us
                    </a>
                </div>

                {/* Stats */}
                <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
                    <div className="text-center">
                        <div className="font-display text-3xl sm:text-4xl font-bold text-yellow-400">100+</div>
                        <div className="text-sm text-slate-400 mt-1">Young Athletes</div>
                    </div>
                    <div className="text-center">
                        <div className="font-display text-3xl sm:text-4xl font-bold text-yellow-400">5-16</div>
                        <div className="text-sm text-slate-400 mt-1">Ages Welcome</div>
                    </div>
                    <div className="text-center">
                        <div className="font-display text-3xl sm:text-4xl font-bold text-yellow-400">FA</div>
                        <div className="text-sm text-slate-400 mt-1">Registered</div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 rounded-full border-2 border-slate-500 flex items-start justify-center pt-2">
                    <div className="w-1.5 h-2.5 bg-yellow-400 rounded-full animate-pulse"></div>
                </div>
            </div>
        </section>
    );
}
