import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, FileText } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Terms & Conditions | Nepzum FC',
    description: 'Terms and Conditions for Nepzum FC Youth Football Academy membership and participation.',
};

export default function TermsPage() {
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
                        <FileText className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                        <h1 className="font-display text-3xl sm:text-4xl font-bold text-white">Terms & Conditions</h1>
                        <p className="text-slate-400">Last updated: December 2024</p>
                    </div>
                </div>

                {/* Content */}
                <div className="glass rounded-2xl p-6 sm:p-8 space-y-6">
                    <section>
                        <h2 className="font-display text-xl font-bold text-white mb-3">1. Membership</h2>
                        <p className="text-slate-300 leading-relaxed">
                            By registering your child with Nepzum Football Club, you agree to these terms and conditions. Membership is subject to availability and acceptance by the club.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-xl font-bold text-white mb-3">2. Fees and Payment</h2>
                        <ul className="list-disc list-inside text-slate-300 space-y-2">
                            <li>Membership fees are payable monthly or as agreed</li>
                            <li>Fees must be paid by the due date specified</li>
                            <li>Failure to pay may result in suspension of membership</li>
                            <li>Refunds are at the discretion of the club management</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-display text-xl font-bold text-white mb-3">3. Attendance</h2>
                        <ul className="list-disc list-inside text-slate-300 space-y-2">
                            <li>Players are expected to attend training sessions regularly</li>
                            <li>Parents/guardians must notify coaches of any absences in advance</li>
                            <li>Persistent non-attendance may affect match selection</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-display text-xl font-bold text-white mb-3">4. Code of Conduct</h2>
                        <p className="text-slate-300 leading-relaxed mb-3">All players, parents, and guardians must:</p>
                        <ul className="list-disc list-inside text-slate-300 space-y-2">
                            <li>Show respect to coaches, officials, opponents, and teammates</li>
                            <li>Play fairly and in the spirit of the game</li>
                            <li>Refrain from using offensive or abusive language</li>
                            <li>Follow instructions from coaching staff</li>
                            <li>Support positive behaviour from the sidelines during matches</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-display text-xl font-bold text-white mb-3">5. Health and Safety</h2>
                        <ul className="list-disc list-inside text-slate-300 space-y-2">
                            <li>Parents must disclose any relevant medical conditions</li>
                            <li>Players must wear appropriate footwear and shin guards</li>
                            <li>The club is not liable for injuries sustained during normal play</li>
                            <li>First aid trained staff are present at all sessions</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-display text-xl font-bold text-white mb-3">6. Equipment</h2>
                        <ul className="list-disc list-inside text-slate-300 space-y-2">
                            <li>Players are responsible for their own equipment</li>
                            <li>Club kit must be purchased through official channels</li>
                            <li>Lost or damaged club property may need to be replaced at cost</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-display text-xl font-bold text-white mb-3">7. Photography and Media</h2>
                        <p className="text-slate-300 leading-relaxed">
                            By joining Nepzum FC, you consent to your child being photographed or filmed during club activities for coaching and promotional purposes, unless you notify us in writing that you do not consent.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-xl font-bold text-white mb-3">8. Termination</h2>
                        <p className="text-slate-300 leading-relaxed">
                            The club reserves the right to terminate membership for serious or repeated breaches of these terms, the code of conduct, or safeguarding policies. One month&apos;s notice is required for voluntary termination of membership.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-xl font-bold text-white mb-3">9. Contact</h2>
                        <p className="text-slate-300 leading-relaxed">
                            For any questions about these terms, please contact:{' '}
                            <a href="tel:07782534993" className="text-yellow-400 hover:text-yellow-300">
                                07782 534993
                            </a>
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
