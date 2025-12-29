'use client';

import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <main className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
            {/* Background effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-950 to-slate-950" />

            <div className="relative z-10 text-center max-w-lg">
                {/* 404 Number */}
                <h1 className="font-display text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-yellow-400 mb-4">
                    404
                </h1>

                {/* Message */}
                <h2 className="font-display text-3xl font-bold text-white mb-4">
                    Page Not Found
                </h2>
                <p className="text-slate-400 mb-8">
                    Oops! Looks like this page went offside. The page you&apos;re looking for doesn&apos;t exist or has been moved.
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-bold rounded-lg transition-all hover:scale-105"
                    >
                        <Home className="w-5 h-5" />
                        Back to Home
                    </Link>
                    <button
                        onClick={() => history.back()}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-purple-800 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Go Back
                    </button>
                </div>

                {/* Decorative football */}
                <div className="mt-12 text-6xl">⚽</div>
            </div>
        </main>
    );
}
