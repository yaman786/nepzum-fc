import { Check, Star, Users, Zap } from 'lucide-react';

interface Plan {
    _id?: string;
    title: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    popular: boolean;
    ctaText: string;
    ctaLink: string;
    savings?: string;
    originalPrice?: string;
    billedAs?: string;
}

const FALLBACK_PLANS: Plan[] = [
    {
        title: 'Annual',
        price: '35',
        period: 'per month',
        description: 'Commit for the season and save £60',
        billedAs: 'Billed as £420/year',
        savings: 'Save £60/year',
        features: [
            'Everything in Single Child',
            'Lowest monthly rate',
            'Priority enrollment',
            'Free club kit worth £35',
            'Exclusive member events',
        ],
        popular: false,
        ctaText: 'Start Free Trial →',
        ctaLink: '#trial'
    },
    {
        title: 'Single Child',
        price: '40',
        period: 'per month',
        description: 'Complete training package for aspiring players',
        features: [
            'Weekly training sessions',
            'Match day registration',
            'Club training top included',
            'FA certified coaching',
            'Progress reports',
        ],
        popular: false,
        ctaText: 'Start Free Trial →',
        ctaLink: '#trial'
    },
    {
        title: 'Family',
        price: '65',
        period: 'per month',
        description: 'Perfect for siblings to develop together',
        originalPrice: '80',
        savings: 'Save £15/month',
        features: [
            'Everything in Single Child',
            '2 children included',
            '2 club training tops',
            'Priority match selection',
            'Family events access',
        ],
        popular: true,
        ctaText: 'Start Free Trial →',
        ctaLink: '#trial'
    },
];

const additionalItems = [
    { name: 'Match day subs', price: '£5 per game' },
    { name: 'Club kit (full set)', price: '£35' },
    { name: 'Training shorts & socks', price: '£15' },
    { name: 'Away kit (optional)', price: '£30' },
];

export default function PricingSection({ plans }: { plans?: Plan[] }) {
    const plansToDisplay = plans && plans.length > 0 ? plans : FALLBACK_PLANS;
    return (
        <section id="pricing" className="relative py-24 sm:py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-950/30 to-slate-950" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-900/40 border border-purple-500/30 text-purple-300 text-sm font-medium mb-4">
                        <Zap className="w-4 h-4" />
                        No Hidden Fees. Ever.
                    </span>
                    <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                        Professional Coaching. Accessible to All.
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Professional coaching shouldn&apos;t break the bank. All plans include kit, qualified coaches, and match registration.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
                    {plansToDisplay.map((plan) => (
                        <div
                            key={plan.title}
                            className={`relative glass rounded-2xl p-6 lg:p-8 ${plan.popular
                                ? 'ring-2 ring-yellow-400 scale-[1.02]'
                                : ''
                                }`}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <span className="inline-flex items-center gap-1 px-4 py-1.5 bg-yellow-400 text-purple-900 text-sm font-bold rounded-full">
                                        <Star className="w-4 h-4 fill-current" />
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            {/* Plan Header */}
                            <div className="text-center mb-6 pt-2">
                                <h3 className="font-display text-2xl font-bold text-white mb-2">
                                    {plan.title}
                                </h3>
                                <p className="text-slate-400 text-sm">{plan.description}</p>
                            </div>

                            {/* Price */}
                            <div className="text-center mb-6">
                                <div className="flex items-baseline justify-center gap-1">
                                    <span className="text-slate-400 text-2xl">£</span>
                                    <span className="font-display text-6xl font-bold text-white">
                                        {plan.price}
                                    </span>
                                </div>
                                <p className="text-slate-400">{plan.period}</p>

                                {plan.originalPrice && (
                                    <p className="text-slate-500 text-sm mt-1 line-through">
                                        Was £{plan.originalPrice}/month
                                    </p>
                                )}
                                {plan.billedAs && (
                                    <p className="text-slate-500 text-sm mt-1">
                                        {plan.billedAs}
                                    </p>
                                )}
                                {plan.savings && (
                                    <span className="inline-block mt-2 px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full">
                                        {plan.savings}
                                    </span>
                                )}
                            </div>

                            {/* Features */}
                            <ul className="space-y-3 mb-8">
                                {plan.features && plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <a
                                href={plan.ctaLink}
                                className={`block w-full py-3 px-6 text-center font-bold rounded-lg transition-all ${plan.popular
                                    ? 'bg-yellow-400 hover:bg-yellow-300 text-purple-900'
                                    : 'bg-purple-600 hover:bg-purple-500 text-white'
                                    }`}
                            >
                                {plan.ctaText}
                            </a>
                        </div>
                    ))}
                </div>

                {/* Additional Costs */}
                <div className="glass rounded-2xl p-6 lg:p-8">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-lg bg-purple-900/50 flex items-center justify-center">
                            <Users className="w-5 h-5 text-yellow-400" />
                        </div>
                        <div>
                            <h4 className="font-display text-lg font-bold text-white">
                                Additional Items
                            </h4>
                            <p className="text-slate-400 text-sm">Optional extras available</p>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {additionalItems.map((item) => (
                            <div
                                key={item.name}
                                className="flex items-center justify-between p-4 rounded-lg bg-slate-800/50"
                            >
                                <span className="text-slate-300">{item.name}</span>
                                <span className="text-yellow-400 font-semibold">{item.price}</span>
                            </div>
                        ))}
                    </div>

                    <p className="text-center text-slate-500 text-sm mt-6">
                        All prices include VAT. No joining fees. Cancel anytime with 30 days notice.
                    </p>
                </div>
            </div>
        </section>
    );
}
