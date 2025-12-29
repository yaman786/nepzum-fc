import { Phone, MapPin, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';
import Image from 'next/image';
import NewsletterForm from './NewsletterForm';

const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/nepzumfc', color: 'hover:text-pink-400' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/nepzumfc', color: 'hover:text-blue-400' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/nepzumfc', color: 'hover:text-sky-400' },
];

const contacts = [
    {
        role: 'Head Office',
        phone: '07782 534993',
        icon: Phone,
        description: 'General enquiries & registrations'
    },
    {
        role: 'Welfare Officer',
        phone: '07865 954138',
        icon: Phone,
        description: 'Safeguarding & player welfare'
    },
    {
        role: 'U12 Manager',
        phone: '07427 223777',
        icon: Phone,
        description: 'Under 12s team enquiries'
    },
    {
        role: 'U16 Manager',
        phone: '07307 345334',
        icon: Phone,
        description: 'Under 16s team enquiries'
    },
    {
        role: 'Admin Support',
        phone: '07704 599726',
        icon: Phone,
        description: 'Payments & documentation'
    },
];

export default function ContactGrid() {
    return (
        <footer id="contact" className="relative py-24 sm:py-32 bg-slate-950">
            {/* Top border gradient */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-purple-900/40 border border-purple-500/30 text-purple-300 text-sm font-medium mb-4">
                        Get In Touch
                    </span>
                    <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
                        Contact Directory
                    </h2>
                    <p className="text-slate-400 max-w-xl mx-auto">
                        Reach out to the right person directly. We&apos;re here to answer all your questions.
                    </p>
                </div>

                {/* Contact Cards Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {contacts.map((contact) => (
                        <div
                            key={contact.role}
                            className="card-hover glass rounded-xl p-6 group cursor-pointer"
                        >
                            <div className="flex items-start gap-4">
                                {/* Icon */}
                                <div className="w-12 h-12 rounded-lg bg-purple-900/50 flex items-center justify-center group-hover:bg-purple-800/50 transition-colors flex-shrink-0">
                                    <contact.icon className="w-5 h-5 text-yellow-400" />
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h3 className="font-display text-lg font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors">
                                        {contact.role}
                                    </h3>
                                    <a
                                        href={`tel:${contact.phone.replace(/\s/g, '')}`}
                                        className="text-lg font-semibold text-yellow-400 hover:text-yellow-300 transition-colors"
                                    >
                                        {contact.phone}
                                    </a>
                                    <p className="text-sm text-slate-500 mt-1">
                                        {contact.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Address Card - Special styling */}
                    <div className="card-hover glass rounded-xl p-6 group sm:col-span-2 lg:col-span-1">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-lg bg-purple-900/50 flex items-center justify-center group-hover:bg-purple-800/50 transition-colors flex-shrink-0">
                                <MapPin className="w-5 h-5 text-yellow-400" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-display text-lg font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors">
                                    Location
                                </h3>
                                <p className="text-lg font-semibold text-yellow-400">
                                    Plumstead, London
                                </p>
                                <p className="text-sm text-slate-500 mt-1">
                                    Training facility details on enquiry
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Training Schedule */}
                <div className="glass rounded-2xl p-8 mb-16">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-xl bg-yellow-400 flex items-center justify-center">
                                <Clock className="w-7 h-7 text-purple-900" />
                            </div>
                            <div>
                                <h3 className="font-display text-xl font-bold text-white">Training Schedule</h3>
                                <p className="text-slate-400">Weekday evenings & Weekend mornings</p>
                            </div>
                        </div>
                        <a
                            href="mailto:info@nepzumfc.com"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-800 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
                        >
                            <Mail className="w-5 h-5" />
                            Email for Details
                        </a>
                    </div>
                </div>

                {/* Newsletter Signup */}
                <div className="glass rounded-2xl p-8 mb-16">
                    <div className="max-w-2xl mx-auto text-center">
                        <h3 className="font-display text-2xl font-bold text-white mb-2">
                            Stay in the Loop
                        </h3>
                        <p className="text-slate-400 mb-6">
                            Get weekly updates on training, match results, and club news. Join 200+ Nepzum FC families!
                        </p>
                        <NewsletterForm />
                        <p className="text-slate-500 text-xs mt-4">
                            We respect your privacy. Unsubscribe anytime.
                        </p>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-slate-800 pt-8">
                    <div className="flex flex-col items-center gap-6 text-slate-500 text-sm">
                        {/* Logo */}
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full overflow-hidden">
                                <Image
                                    src="/logo.png"
                                    alt="Nepzum FC Logo"
                                    width={40}
                                    height={40}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <span className="font-display text-lg font-semibold text-white">NEPZUM FC</span>
                        </div>

                        {/* Social Media Links */}
                        <div className="flex items-center gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 ${social.color} transition-all hover:scale-110 hover:bg-slate-700`}
                                    aria-label={`Follow us on ${social.name}`}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>

                        {/* Links - Stack on mobile, row on desktop */}
                        <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
                            <a href="/privacy" className="hover:text-white transition-colors py-1">Privacy Policy</a>
                            <a href="/safeguarding" className="hover:text-white transition-colors py-1">Safeguarding Policy</a>
                            <a href="/terms" className="hover:text-white transition-colors py-1">Terms</a>
                        </div>

                        {/* Copyright */}
                        <p className="text-center">© 2025 Nepzum FC. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
