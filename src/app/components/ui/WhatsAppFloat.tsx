import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function WhatsAppFloat() {
    const phoneNumber = "212661380961";
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed z-50 bottom-6 right-6 group"
            aria-label="Contact us on WhatsApp"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="relative"
            >
                {/* Pulse Effect - Behind the button */}
                <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping" style={{ animationDuration: '3s' }}></span>

                {/* Button Container */}
                <div className="relative z-10 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-lg transition-colors flex items-center">

                    {/* Mobile View: Icon Only (60px) */}
                    <div className="flex md:hidden items-center justify-center w-[60px] h-[60px] rounded-full">
                        <MessageCircle size={28} fill="white" className="text-white" />
                    </div>

                    {/* Desktop View: Icon + Text (Pill) */}
                    <div className="hidden md:flex items-center px-6 py-3 gap-3">
                        <MessageCircle size={24} fill="white" className="text-white" />
                        <span className="font-bold text-base whitespace-nowrap">Commander sur WhatsApp</span>
                    </div>
                </div>
            </motion.div>
        </a>
    );
}
