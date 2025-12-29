'use client';

import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

interface FormData {
    parentName: string;
    email: string;
    phone: string;
    childName: string;
    childAge: string;
    message: string;
}

export default function TrialForm() {
    const [formData, setFormData] = useState<FormData>({
        parentName: '',
        email: '',
        phone: '',
        childName: '',
        childAge: '',
        message: '',
    });
    const [status, setStatus] = useState<FormStatus>('idle');
    const [errors, setErrors] = useState<Partial<FormData>>({});

    const validatePhone = (phone: string): boolean => {
        // UK phone number patterns: 07xxx, +44, landlines
        const ukPhoneRegex = /^(?:(?:\+44)|(?:0))(?:\d{10}|\d{9})$/;
        return ukPhoneRegex.test(phone.replace(/\s/g, ''));
    };

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        return emailRegex.test(email) && email.length <= 254;
    };

    const validateForm = (): boolean => {
        const newErrors: Partial<FormData> = {};

        if (!formData.parentName.trim()) {
            newErrors.parentName = 'Parent name is required';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!validatePhone(formData.phone)) {
            newErrors.phone = 'Please enter a valid UK phone number';
        }
        if (!formData.childName.trim()) {
            newErrors.childName = "Child's name is required";
        }
        if (!formData.childAge) {
            newErrors.childAge = "Child's age is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const sanitizeInput = (text: string): string => {
        return text.replace(/[<>]/g, ''); // Basic stripping of potentially harmful tags
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setStatus('submitting');

        try {
            // Using Formspree for form submission
            const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_TRIAL || 'https://formspree.io/f/xpwzgkqr'; // Fallback for demo

            const sanitizedMessage = sanitizeInput(formData.message);
            const sanitizedParentName = sanitizeInput(formData.parentName);
            const sanitizedChildName = sanitizeInput(formData.childName);

            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    _subject: `Trial Request from ${sanitizedParentName}`,
                    parentName: sanitizedParentName,
                    email: formData.email,
                    phone: formData.phone,
                    childName: sanitizedChildName,
                    childAge: formData.childAge,
                    message: sanitizedMessage || 'No additional message',
                }),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({
                    parentName: '',
                    email: '',
                    phone: '',
                    childName: '',
                    childAge: '',
                    message: '',
                });
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name as keyof FormData]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    if (status === 'success') {
        return (
            <div className="glass rounded-2xl p-8 text-center animate-fade-in">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-2">Request Received!</h3>
                <p className="text-slate-400 mb-6">
                    Thank you for your interest in Nepzum FC. We&apos;ll be in touch within 24 hours to arrange your trial session.
                </p>
                <button
                    onClick={() => setStatus('idle')}
                    className="text-yellow-400 hover:text-yellow-300 font-medium transition-colors"
                >
                    Submit another request →
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 sm:p-8">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                {/* Parent Name */}
                <div>
                    <label htmlFor="parentName" className="block text-sm font-medium text-slate-300 mb-2">
                        Parent/Guardian Name *
                    </label>
                    <input
                        type="text"
                        id="parentName"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg bg-slate-800/50 border ${errors.parentName ? 'border-red-500' : 'border-slate-600/50'
                            } text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors`}
                        placeholder="John Smith"
                    />
                    {errors.parentName && (
                        <p className="mt-1 text-sm text-red-400">{errors.parentName}</p>
                    )}
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                        Email Address *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg bg-slate-800/50 border ${errors.email ? 'border-red-500' : 'border-slate-600/50'
                            } text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors`}
                        placeholder="john@example.com"
                    />
                    {errors.email && (
                        <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                    )}
                </div>

                {/* Phone */}
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                        Phone Number *
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg bg-slate-800/50 border ${errors.phone ? 'border-red-500' : 'border-slate-600/50'
                            } text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors`}
                        placeholder="07123 456789"
                    />
                    {errors.phone && (
                        <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
                    )}
                </div>

                {/* Child Name */}
                <div>
                    <label htmlFor="childName" className="block text-sm font-medium text-slate-300 mb-2">
                        Child&apos;s Name *
                    </label>
                    <input
                        type="text"
                        id="childName"
                        name="childName"
                        value={formData.childName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg bg-slate-800/50 border ${errors.childName ? 'border-red-500' : 'border-slate-600/50'
                            } text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors`}
                        placeholder="Jamie Smith"
                    />
                    {errors.childName && (
                        <p className="mt-1 text-sm text-red-400">{errors.childName}</p>
                    )}
                </div>

                {/* Child Age */}
                <div>
                    <label htmlFor="childAge" className="block text-sm font-medium text-slate-300 mb-2">
                        Child&apos;s Age *
                    </label>
                    <select
                        id="childAge"
                        name="childAge"
                        value={formData.childAge}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg bg-slate-800/50 border ${errors.childAge ? 'border-red-500' : 'border-slate-600/50'
                            } text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors`}
                    >
                        <option value="">Select age</option>
                        {[5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(age => (
                            <option key={age} value={age}>{age} years old</option>
                        ))}
                    </select>
                    {errors.childAge && (
                        <p className="mt-1 text-sm text-red-400">{errors.childAge}</p>
                    )}
                </div>

                {/* Message - Full width */}
                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                        Additional Information (Optional)
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-600/50 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors resize-none"
                        placeholder="Any experience, preferred days, or questions..."
                    />
                </div>
            </div>

            {/* Error Message */}
            {status === 'error' && (
                <div className="mt-4 p-4 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                    <p className="text-red-400 text-sm">
                        Something went wrong. Please try again or call us directly.
                    </p>
                </div>
            )}

            {/* Submit Button */}
            <button
                type="submit"
                disabled={status === 'submitting'}
                className="mt-6 w-full btn-cta inline-flex items-center justify-center gap-3 px-8 py-4 bg-yellow-400 hover:bg-yellow-300 disabled:bg-yellow-400/50 text-purple-900 font-bold text-lg rounded-xl transition-all hover:scale-[1.02] disabled:hover:scale-100 glow-yellow"
            >
                {status === 'submitting' ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending Request...
                    </>
                ) : (
                    <>
                        <Send className="w-5 h-5" />
                        Secure Your Free Spot
                    </>
                )}
            </button>

            <p className="mt-4 text-center text-sm text-slate-500">
                By submitting this form, you agree to our{' '}
                <a href="/privacy" className="text-purple-400 hover:text-purple-300">Privacy Policy</a>
            </p>
        </form>
    );
}
