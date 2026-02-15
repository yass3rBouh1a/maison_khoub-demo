import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-[#96754a] border-t border-[#E5DCD0] pt-16 pb-8">
            <div className="container mx-auto px-8">
                {/* 4 Columns Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Column 1: Brand */}
                    <div className="space-y-6">
                        <Link to="/" className="text-2xl tracking-widest uppercase font-bold text-[#FBF7F0] hover:text-[#96754a] transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>
                            Maison Khoub
                        </Link>
                        <p className="text-[#FBF7F0]/70 text-sm leading-relaxed font-light">
                            L'Art de l'élégance marocaine. Une fusion entre tradition ancestrale et modernité, pour la femme d'aujourd'hui.
                        </p>
                        <div className="flex gap-4 text-[#FBF7F0]">
                            <a href="https://www.instagram.com/maison_khoub/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <Instagram size={20} className="hover:text-[#2A2624] cursor-pointer transition-colors" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Collections */}
                    <div>
                        <h4 className="text-[#FBF7F0] font-bold text-xs uppercase tracking-widest mb-6">Nos Collections</h4>
                        <ul className="space-y-4 text-sm text-[#FBF7F0]/80 font-light">
                            <li><Link to="/collections/kaftans" className="hover:text-[#FBF7F0] transition-colors opacity-80 hover:opacity-100">Kaftans</Link></li>
                            <li><Link to="/collections/djellabas" className="hover:text-[#FBF7F0] transition-colors opacity-80 hover:opacity-100">Djellabas</Link></li>
                            <li><Link to="/collections/tissus-liberty" className="hover:text-[#FBF7F0] transition-colors opacity-80 hover:opacity-100">Tissus Liberty</Link></li>
                            <li><Link to="/collections/signature" className="hover:text-[#FBF7F0] transition-colors opacity-80 hover:opacity-100">Signature</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Service Client */}
                    <div>
                        <h4 className="text-[#FBF7F0] font-bold text-xs uppercase tracking-widest mb-6">Service Client</h4>
                        <ul className="space-y-4 text-sm text-[#FBF7F0]/80 font-light">
                            <li><Link to="#" className="hover:text-[#FBF7F0] transition-colors opacity-80 hover:opacity-100">Contactez-nous</Link></li>
                            <li><Link to="#" className="hover:text-[#FBF7F0] transition-colors opacity-80 hover:opacity-100">Livraison & Retours</Link></li>
                            <li><Link to="#" className="hover:text-[#FBF7F0] transition-colors opacity-80 hover:opacity-100">Guide des tailles</Link></li>
                            <li><Link to="#" className="hover:text-[#FBF7F0] transition-colors opacity-80 hover:opacity-100">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div>
                        <h4 className="text-[#FBF7F0] font-bold text-xs uppercase tracking-widest mb-6">Newsletter</h4>
                        <p className="text-[#FBF7F0]/80 text-sm font-light mb-4">Inscrivez-vous pour recevoir nos nouveautés et offres exclusives.</p>
                        <div className="flex border-b border-[#FBF7F0]/20 pb-2">
                            <input
                                type="email"
                                placeholder="Votre email"
                                className="bg-transparent w-full outline-none text-sm text-[#FBF7F0] placeholder-[#FBF7F0]/40"
                            />
                            <button className="text-[#FBF7F0] text-xs font-bold uppercase tracking-widest hover:text-white">OK</button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-[#E5DCD0]/50 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex flex-col md:flex-row gap-2 text-xs text-[#FBF7F0]/40 font-light">
                        <p>&copy; 2026 Maison Khoub. Tous droits réservés.</p>
                        <span className="hidden md:block">•</span>
                        <p>Powered by NextLevel AI</p>
                    </div>

                    {/* Payment Logos (Grayscale) */}
                    <div className="flex items-center gap-4 opacity-80">
                        <div className="h-6 w-10 bg-[#FBF7F0]/10 rounded flex items-center justify-center text-[8px] font-bold text-[#FBF7F0]">VISA</div>
                        <div className="h-6 w-10 bg-[#FBF7F0]/10 rounded flex items-center justify-center text-[8px] font-bold text-[#FBF7F0]">MC</div>
                        <div className="h-6 w-10 bg-[#FBF7F0]/10 rounded flex items-center justify-center text-[8px] font-bold text-[#FBF7F0]">CMI</div>
                        <div className="h-6 w-10 bg-[#FBF7F0]/10 rounded flex items-center justify-center text-[8px] font-bold text-[#FBF7F0]">COD</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
