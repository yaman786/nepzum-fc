'use client';

import { useState } from 'react';
import { Mail, CheckCircle, Loader2 } from 'lucide-react';

export default function NewsletterForm() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !validateEmail(email)) {
            setStatus('error'); // Could add specific validation error state if needed
            return;
        }

        setStatus('loading');

        try {
            const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_NEWSLETTER || 'https://formspree.io/f/newsletter';
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, _subject: 'New Newsletter Subscriber!' }),
            });

            if (response.ok) {
                setStatus('success');
                setEmail('');
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="flex items-center gap-3 p-4 rounded-xl bg-green-500/20 border border-green-500/30">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <p className="text-green-300 text-sm">
                    You&apos;re subscribed! Check your inbox for updates.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="w-full">
            <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    />
                </div>
                <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="px-6 py-3 bg-yellow-400 hover:bg-yellow-300 disabled:bg-yellow-400/50 text-purple-900 font-bold rounded-xl transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                >
                    {status === 'loading' ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Subscribing...
                        </>
                    ) : (
                        'Subscribe'
                    )}
                </button>
            </div>
            {status === 'error' && (
                <p className="text-red-400 text-sm mt-2">
                    Something went wrong. Please try again.
                </p>
            )}
        </form>
    );
}
