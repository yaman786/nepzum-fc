import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Phone, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Safeguarding Policy | Nepzum FC',
    description: 'Our commitment to child protection and safeguarding at Nepzum FC Youth Football Academy.',
};

export default function SafeguardingPage() {
    return (
        <main className="min-h-screen bg-slate-900 pt-24 pb-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Link */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>

                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-purple-900/50 flex items-center justify-center">
                        <ShieldCheck className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                        <h1 className="font-display text-3xl sm:text-4xl font-bold text-white">Safeguarding Policy</h1>
                        <p className="text-slate-400">FA Compliant | Last updated: December 2024</p>
                    </div>
                </div>

                {/* Emergency Contact Card */}
                <div className="glass rounded-2xl p-6 mb-8 border border-yellow-400/30 bg-yellow-400/5">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-yellow-400 flex items-center justify-center flex-shrink-0">
                            <Phone className="w-6 h-6 text-purple-900" />
                        </div>
                        <div>
                            <h2 className="font-display text-lg font-bold text-yellow-400 mb-1">Welfare Officer Contact</h2>
                            <p className="text-white text-lg font-semibold">07865 954138</p>
                            <p className="text-slate-400 text-sm mt-1">Available for any safeguarding concerns or disclosures</p>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
                    <section>
                        <h2 className="font-display text-xl font-bold text-white mb-3">Our Commitment</h2>
                        <p className="text-slate-300 leading-relaxed">
                            Nepzum FC is committed to providing a safe environment for all children and young people in our care. We believe that every child has the right to participate in football free from harm, and we take our safeguarding responsibilities extremely seriously.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-xl font-bold text-white mb-3">Key Principles</h2>
                        <ul className="list-disc list-inside text-slate-300 space-y-2">
                            <li>The welfare of children is paramount</li>
                            <li>All children have the right to protection from abuse</li>
                            <li>All suspicions and allegations will be taken seriously</li>
                            <li>We work in partnership with parents and other agencies</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-display text-xl font-bold text-white mb-3">Coach Requirements</h2>
                        <p className="text-slate-300 leading-relaxed mb-3">All Nepzum FC coaches and volunteers must:</p>
                        <ul className="list-disc list-inside text-slate-300 space-y-2">
                            <li>Hold a valid, enhanced DBS check</li>
                            <li>Complete FA Safeguarding Children Workshop</li>
                            <li>Adhere to the FA&apos;s Code of Conduct</li>
                            <li>Never be alone with a child</li>
                            <li>Report any concerns immediately to the Welfare Officer</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-display text-xl font-bold text-white mb-3">Reporting Concerns</h2>
                        <div className="bg-purple-900/30 rounded-xl p-4 border border-purple-500/30">
                            <div className="flex items-start gap-3">
                                <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-white font-medium mb-2">If you have any concerns about a child&apos;s welfare:</p>
                                    <ol className="list-decimal list-inside text-slate-300 space-y-1">
                                        <li>Contact our Welfare Officer: <strong className="text-yellow-400">07865 954138</strong></li>
                                        <li>Or contact the FA Safeguarding Team: <strong className="text-yellow-400">0800 169 1863</strong></li>
                                        <li>In an emergency, always call <strong className="text-yellow-400">999</strong></li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="font-display text-xl font-bold text-white mb-3">FA Affiliation</h2>
                        <p className="text-slate-300 leading-relaxed">
                            Nepzum FC operates under the guidance and regulations of The Football Association. Our safeguarding policies are aligned with FA standards and are reviewed annually to ensure compliance with best practices.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-xl font-bold text-white mb-3">Photography Policy</h2>
                        <p className="text-slate-300 leading-relaxed">
                            We obtain written consent from parents/guardians before photographing or filming any child. Images are used only for coaching purposes or club promotion and are stored securely. Children are never identified by name alongside photographs without explicit consent.
                        </p>
                    </section>
                </div>

                {/* External Links */}
                <div className="mt-8 text-center text-slate-400 text-sm">
                    <p>For more information on safeguarding in football, visit:</p>
                    <a
                        href="https://www.thefa.com/football-rules-governance/safeguarding"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:text-purple-300 transition-colors"
                    >
                        The FA Safeguarding Hub →
                    </a>
                </div>
            </div>
        </main>
    );
}
