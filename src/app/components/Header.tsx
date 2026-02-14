import { useState, useEffect } from 'react';
import { Menu, Search, X, User, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/logo.png';
import { useCart } from '../context/CartContext';

// ... interface (remove cartItemsCount prop)

const categories = [
  'COLLECTION RAMADAN EID 2026',
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartCount, openCart } = useCart();


  // Scroll detection for background transition (Main Bar & Nav Bar)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">

        {/* ================= STAGE B & C: BACKGROUND WRAPPER ================= */}
        <div className={`transition-all duration-500 ease-in-out ${isScrolled ? 'bg-luxury-cream/60 shadow-sm backdrop-blur-xl' : 'bg-transparent'}`}>

          <div className="container mx-auto px-4 lg:px-8">

            {/* ================= DESKTOP LAYOUT (Hidden on Mobile) ================= */}
            <div className="hidden lg:flex flex-col">

              {/* --- STAGE B: MAIN BAR (Identité & Outils) --- */}
              <div className="grid grid-cols-3 items-center py-2">

                {/* Left: Search */}
                <div className="flex justify-start">
                  <div className="flex items-center gap-3 border-b border-luxury-black pb-1 w-64">
                    <Search size={16} className="text-luxury-black" strokeWidth={1.5} />
                    <input
                      type="text"
                      placeholder="Rechercher..."
                      className="bg-transparent border-none outline-none text-xs font-sans placeholder-luxury-black/60 w-full text-luxury-black"
                    />
                  </div>
                </div>

                {/* Center: Logo */}
                <div className="flex justify-center">
                  <Link to="/">
                    <img src={logoImage} alt="MAISON KHOUB" className="h-10 w-auto object-contain" />
                  </Link>
                </div>

                {/* Right: Icons */}
                <div className="flex justify-end items-center gap-8">
                  <Link to="#" className="text-luxury-black hover:text-primary transition-colors">
                    <User size={22} strokeWidth={1.5} />
                  </Link>
                  <button onClick={openCart} className="text-luxury-black hover:text-primary transition-colors relative bg-transparent border-none cursor-pointer">
                    <ShoppingBag size={22} strokeWidth={1.5} />
                    {cartCount > 0 && (
                      <span className="absolute -top-1 -right-2 bg-primary text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full">
                        {cartCount}
                      </span>
                    )}
                  </button>
                </div>
              </div>

              {/* --- STAGE C: NAV BAR (Menu Catégories) --- */}
              <div className="flex justify-center items-center py-2 pb-4">
                <nav className="flex items-center gap-10">
                  {categories.map((cat) => (
                    <Link
                      key={cat}
                      to={`/collections/${cat.toLowerCase().replace(/ /g, '-')}`}
                      className="text-xs uppercase font-bold tracking-widest text-luxury-black hover:text-primary transition-colors duration-300"
                      style={{ fontFamily: 'Lato, sans-serif' }}
                    >
                      {cat}
                    </Link>
                  ))}
                </nav>
              </div>

            </div>

            {/* ================= MOBILE LAYOUT (Visible on Mobile) ================= */}
            <div className="lg:hidden flex items-center justify-between py-4">

              {/* Left: Burger */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 -ml-2 text-luxury-black"
              >
                <Menu size={24} strokeWidth={1.5} />
              </button>

              {/* Center: Logo */}
              <Link to="/" className="absolute left-1/2 transform -translate-x-1/2">
                <img src={logoImage} alt="MAISON KHOUB" className="h-10 w-auto" />
              </Link>

              {/* Right: Cart */}
              <button onClick={openCart} className="relative p-2 -mr-2 text-luxury-black bg-transparent border-none">
                <ShoppingBag size={24} strokeWidth={1.5} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ================= MOBILE DRAWER ================= */}
      <div className={`fixed inset-0 z-[60] bg-luxury-cream transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full p-8">

          {/* Drawer Header */}
          <div className="flex justify-between items-center mb-10">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              <img src={logoImage} alt="KHOUB Maison" className="h-12 w-auto" />
            </Link>
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-luxury-black hover:text-primary transition-colors">
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>

          {/* Mobile Search */}
          <div className="relative mb-12">
            <input
              type="text"
              placeholder="Rechercher..."
              className="w-full bg-white border border-luxury-border p-4 text-sm text-luxury-black outline-none focus:border-primary font-sans"
            />
            <Search size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

          {/* Mobile Navigation */}
          <nav className="flex flex-col gap-6 flex-grow">
            {categories.map((cat) => (
              <Link
                key={cat}
                to={`/collections/${cat.toLowerCase().replace(/ /g, '-')}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-luxury-black font-medium uppercase tracking-widest hover:text-primary flex justify-between items-center border-b border-luxury-border/30 pb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {cat}
              </Link>
            ))}
          </nav>

          {/* Drawer Footer */}
          <div className="mt-8 pt-8 border-t border-luxury-border space-y-4">
            <Link to="#" className="flex items-center gap-3 text-sm uppercase tracking-widest text-luxury-black/60 hover:text-luxury-black">
              <User size={18} /> Mon Compte
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}