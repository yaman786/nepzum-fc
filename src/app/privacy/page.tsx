import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Privacy Policy | Nepzum FC',
    description: 'Privacy Policy for Nepzum FC Youth Football Academy. Learn how we collect, use, and protect your personal data.',
};

export default function PrivacyPage() {
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
                        <Shield className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                        <h1 className="font-display text-3xl sm:text-4xl font-bold text-white">Privacy Policy</h1>
                        <p className="text-slate-400">Last updated: December 2024</p>
                    </div>
                </div>

                {/* Content */}
                <div className="prose prose-invert prose-purple max-w-none">
                    <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
                        <section>
                            <h2 className="font-display text-xl font-bold text-white mb-3">1. Introduction</h2>
                            <p className="text-slate-300 leading-relaxed">
                                Nepzum Football Club (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting the privacy of all individuals, especially children, who interact with our youth football academy. This policy explains how we collect, use, and safeguard your personal information in compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-display text-xl font-bold text-white mb-3">2. Information We Collect</h2>
                            <p className="text-slate-300 leading-relaxed mb-3">We collect the following types of information:</p>
                            <ul className="list-disc list-inside text-slate-300 space-y-2">
                                <li><strong className="text-white">Parent/Guardian Information:</strong> Name, email address, phone number, address</li>
                                <li><strong className="text-white">Child Information:</strong> Name, date of birth, emergency contact details, medical conditions relevant to sports participation</li>
                                <li><strong className="text-white">Payment Information:</strong> Processed securely through third-party payment providers</li>
                                <li><strong className="text-white">Photography/Video:</strong> Training and match footage for coaching purposes (with consent)</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-display text-xl font-bold text-white mb-3">3. How We Use Your Information</h2>
                            <ul className="list-disc list-inside text-slate-300 space-y-2">
                                <li>To register players and manage academy membership</li>
                                <li>To communicate about training, matches, and academy news</li>
                                <li>To ensure player safety and welfare</li>
                                <li>To comply with FA and league requirements</li>
                                <li>To process payments and manage accounts</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-display text-xl font-bold text-white mb-3">4. Data Sharing</h2>
                            <p className="text-slate-300 leading-relaxed">
                                We do not sell your personal data. We may share information with:
                            </p>
                            <ul className="list-disc list-inside text-slate-300 space-y-2 mt-3">
                                <li>The Football Association (FA) for player registration</li>
                                <li>League organisers for fixture management</li>
                                <li>Emergency services when necessary for player safety</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-display text-xl font-bold text-white mb-3">5. Your Rights</h2>
                            <p className="text-slate-300 leading-relaxed">Under UK GDPR, you have the right to:</p>
                            <ul className="list-disc list-inside text-slate-300 space-y-2 mt-3">
                                <li>Access your personal data</li>
                                <li>Correct inaccurate data</li>
                                <li>Request deletion of your data</li>
                                <li>Object to processing</li>
                                <li>Data portability</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-display text-xl font-bold text-white mb-3">6. Contact Us</h2>
                            <p className="text-slate-300 leading-relaxed">
                                For any privacy-related queries, please contact our Data Protection Officer at:{' '}
                                <a href="mailto:privacy@nepzumfc.com" className="text-yellow-400 hover:text-yellow-300">
                                    privacy@nepzumfc.com
                                </a>
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}
