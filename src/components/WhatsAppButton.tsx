'use client';

import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppButton() {
    const [isOpen, setIsOpen] = useState(false);
    const phoneNumber = '447782534993'; // UK format without + for WhatsApp link
    const defaultMessage = 'Hi! I\'m interested in Nepzum FC. Can you tell me more about your youth football program?';

    const handleWhatsAppClick = () => {
        const encodedMessage = encodeURIComponent(defaultMessage);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
            {/* Tooltip/Preview */}
            {isOpen && (
                <div className="animate-fade-in glass rounded-2xl p-4 max-w-[280px] shadow-xl">
                    <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                                <MessageCircle className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <p className="font-semibold text-white text-sm">Nepzum FC</p>
                                <p className="text-xs text-green-400">Usually replies in minutes</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-slate-400 hover:text-white transition-colors"
                            aria-label="Close"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                    <p className="text-slate-300 text-sm mb-4">
                        👋 Hi! Have a quick question? Message us on WhatsApp for the fastest response.
                    </p>
                    <button
                        onClick={handleWhatsAppClick}
                        className="w-full py-3 px-4 bg-green-500 hover:bg-green-400 text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2"
                    >
                        <MessageCircle className="w-5 h-5" />
                        Start Chat
                    </button>
                </div>
            )}

            {/* Main Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 ${isOpen
                        ? 'bg-slate-700 hover:bg-slate-600'
                        : 'bg-green-500 hover:bg-green-400 animate-pulse'
                    }`}
                aria-label={isOpen ? 'Close WhatsApp chat' : 'Open WhatsApp chat'}
            >
                {isOpen ? (
                    <X className="w-6 h-6 text-white" />
                ) : (
                    <MessageCircle className="w-6 h-6 text-white" />
                )}
            </button>

            {/* Pulse ring when closed */}
            {!isOpen && (
                <span className="absolute bottom-0 right-0 w-14 h-14 rounded-full bg-green-500 animate-ping opacity-30 pointer-events-none" />
            )}
        </div>
    );
}
