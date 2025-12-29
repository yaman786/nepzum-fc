'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
    {
        question: 'What age groups do you cater for?',
        answer: 'We welcome players from ages 4 to 16, divided into age-appropriate groups: Mini Kickers (U5-U6), Juniors (U7-U8), Development (U9-U10), Academy (U11-U12), and Youth (U13-U16). Each group has tailored coaching programs.',
    },
    {
        question: 'Do you offer free trials?',
        answer: 'Yes! We offer a completely free trial session for all new players. This gives your child a chance to experience our coaching style and meet potential teammates with no commitment required.',
    },
    {
        question: 'What qualifications do your coaches have?',
        answer: 'All our coaches hold FA coaching qualifications (Level 2 minimum), DBS certificates, and first aid certifications. Our head coach holds UEFA B and FA Level 3 licenses with 15+ years of experience.',
    },
    {
        question: 'What kit does my child need?',
        answer: 'For trials, just football boots and comfortable sportswear. Once registered, we provide a club training top included in membership. Full match kit (shorts, socks) is available for £15, and the away kit for £30.',
    },
    {
        question: 'Where do you train?',
        answer: 'We train at Plumstead Common, Waverley Crescent, SE18 1RH. The facility has free parking available on Waverley Crescent. During winter months, we may use indoor facilities - members are notified in advance.',
    },
    {
        question: 'Can I cancel my membership anytime?',
        answer: 'Yes, you can cancel with 30 days notice. There are no joining fees and no long-term contracts. We believe in earning your loyalty through quality coaching, not binding agreements.',
    },
    {
        question: 'Do you play competitive matches?',
        answer: 'Yes! Our Academy (U11-U12) and Youth (U13-U16) teams compete in local leagues from September to May. Younger age groups participate in friendly tournaments and development festivals.',
    },
    {
        question: 'Is the club FA affiliated?',
        answer: 'Yes, Nepzum FC is fully FA affiliated and follows all FA guidelines for youth football, including safeguarding policies, coach qualifications, and player welfare standards.',
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="relative py-24 sm:py-32 overflow-hidden bg-slate-950">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-900/40 border border-purple-500/30 text-purple-300 text-sm font-medium mb-4">
                        <HelpCircle className="w-4 h-4" />
                        Common Questions
                    </span>
                    <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                        Frequently Asked
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Everything parents need to know about Nepzum FC. Can&apos;t find your answer? Contact us directly.
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="glass rounded-xl overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-800/30 transition-colors"
                                aria-expanded={openIndex === index}
                            >
                                <span className="font-display text-lg font-semibold text-white pr-4">
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 text-purple-400 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                                    }`}
                            >
                                <p className="px-5 pb-5 text-slate-400 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Still have questions */}
                <div className="mt-12 text-center">
                    <p className="text-slate-400 mb-4">Still have questions?</p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-lg transition-all hover:scale-105"
                    >
                        Contact Us Directly
                    </a>
                </div>
            </div>
        </section>
    );
}
