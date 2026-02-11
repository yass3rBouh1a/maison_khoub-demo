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
            className="fixed z-50 bottom-8 right-6 md:bottom-6 md:right-6 group"
            aria-label="Contact us on WhatsApp"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:bg-[#20bd5a] transition-colors"
            >
                {/* Pulse Effect */}
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping duration-1000" style={{ animationDuration: '3s' }}></span>

                <MessageCircle size={32} color="white" fill="white" className="relative z-10" />

                {/* Tooltip (Desktop only) */}
                <span className="absolute right-full mr-4 px-3 py-1 bg-white text-[#2A2624] text-xs font-bold rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block">
                    Discutez avec nous
                </span>
            </motion.div>
        </a>
    );
}
