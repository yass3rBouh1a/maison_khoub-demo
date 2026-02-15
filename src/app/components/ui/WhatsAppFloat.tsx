import { MessageCircle } from 'lucide-react';

export function WhatsAppFloat() {
    return (
        <a
            href="https://wa.me/212661380961" // Replace with actual number
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:bg-[#20bd5a] transition-colors duration-300"
        >
            <MessageCircle size={20} className="fill-current" />
            <span className="font-sans font-medium text-sm hidden md:inline">Commander sur WhatsApp</span>
        </a>
    );
}
