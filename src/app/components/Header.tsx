import { useState, useEffect } from 'react';
import { Menu, Search, X, User, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/logo.png';
import { useCart } from '../context/CartContext';

// ... interface (remove cartItemsCount prop)

const categories = [
  'Djellaba',
  'Caftan',
  'Gandoura',
  'Jabador',
  'Tunique',
  'Kimono & Veste',
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartCount, openCart } = useCart();

  // Scroll detection for background transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Background logic: Transparent at top, Cream when scrolled
  const headerBgClass = isScrolled
    ? 'bg-white/70 shadow-sm backdrop-blur-md'
    : 'bg-transparent';

  // Text color logic
  const textColorClass = 'text-[#2A2624]';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBgClass}`}
      >
        <div className="container mx-auto px-4 lg:px-8">

          {/* ================= DESKTOP LAYOUT (Hidden on Mobile) ================= */}
          <div className="hidden lg:flex flex-col">

            {/* --- ROW 1: Top Bar (Search - Logo - Tools) --- */}
            <div className="flex justify-between items-center py-4 relative">

              {/* Left: Search Input */}
              <div className="flex items-center gap-3 w-1/3">
                <Search size={20} className={`${textColorClass} opacity-80`} strokeWidth={1.5} />
                <input
                  type="text"
                  placeholder="Rechercher"
                  className={`bg-transparent border-b border-transparent focus:border-[#2A2624]/20 outline-none text-sm ${textColorClass} placeholder-[#2A2624]/50 w-48 transition-all pb-1`}
                />
              </div>

              {/* Center: Logo */}
              <div className="flex justify-center w-1/3">
                <Link to="/">
                  <img
                    src={logoImage}
                    alt="KHOUB Maison"
                    className={`h-14 w-auto transition-all duration-300 ${isScrolled ? 'scale-75' : 'scale-100'}`}
                  />
                </Link>
              </div>

              {/* Right: Tools (Account + Cart) */}
              <div className="flex items-center justify-end gap-6 w-1/3">
                <Link to="#" className={`flex items-center gap-2 ${textColorClass} hover:text-[#96754a] transition-colors group`}>
                  <User size={20} strokeWidth={1.5} />
                  <span className="text-xs uppercase tracking-widest font-semibold group-hover:text-[#96754a]">Compte</span>
                </Link>
                <button onClick={openCart} className={`flex items-center gap-2 ${textColorClass} hover:text-[#96754a] transition-colors group relative bg-transparent border-none cursor-pointer`}>
                  <ShoppingBag size={20} strokeWidth={1.5} />
                  <span className="text-xs uppercase tracking-widest font-semibold group-hover:text-[#96754a]">Panier</span>
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-[#96754a] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                      {cartCount}
                    </span>
                  )}
                </button>
              </div>
            </div>

            {/* --- ROW 2: Navigation Links --- */}
            <div
              className={`flex justify-center items-center overflow-hidden transition-all duration-500 ease-in-out ${isScrolled ? 'max-h-16 opacity-100 py-3 border-t border-[#E5DCD0]/30' : 'max-h-0 opacity-0 py-0 border-t-0'}`}
            >
              <nav className="flex items-center gap-12">
                {categories.map((cat) => (
                  <Link
                    key={cat}
                    to={`/collections/${cat.toLowerCase().replace(/ /g, '-').replace('&', 'and')}`}
                    className={`text-xs uppercase tracking-[0.15em] font-bold ${textColorClass} hover:text-[#96754a] relative group py-2`}
                    style={{ fontFamily: 'Lato, sans-serif' }}
                  >
                    {cat}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#96754a] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}
              </nav>
            </div>

          </div>


          {/* ================= MOBILE LAYOUT (Visible on Mobile) ================= */}
          <div className="lg:hidden flex items-center justify-between h-20">

            {/* Left: Burger */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 -ml-2"
              aria-label="Menu"
            >
              <Menu size={24} className={textColorClass} strokeWidth={1.5} />
            </button>

            {/* Center: Logo */}
            <Link to="/" className="absolute left-1/2 transform -translate-x-1/2">
              <img
                src={logoImage}
                alt="KHOUB Maison"
                className="h-16 w-auto"
              />
            </Link>

            {/* Right: Cart */}
            <button onClick={openCart} className="relative p-2 -mr-2 bg-transparent border-none">
              <ShoppingBag size={24} className={textColorClass} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-[#96754a] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>


      {/* ================= MOBILE DRAWER ================= */}
      <div className={`fixed inset-0 z-[60] bg-[#FBF7F0] transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full p-8">

          {/* Drawer Header */}
          <div className="flex justify-between items-center mb-8">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              <img src={logoImage} alt="KHOUB Maison" className="h-16 w-auto" />
            </Link>
            <button onClick={() => setIsMobileMenuOpen(false)} className={`${textColorClass} hover:text-[#96754a]`}>
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>

          {/* Mobile Search */}
          <div className="relative mb-10">
            <input
              type="text"
              placeholder="Rechercher..."
              className={`w-full bg-white border border-[#E5DCD0] p-4 text-sm ${textColorClass} outline-none focus:border-[#96754a]`}
            />
            <Search size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

          {/* Mobile Navigation */}
          <nav className="flex flex-col gap-6 flex-grow">
            {categories.map((cat) => (
              <Link
                key={cat}
                to={`/collections/${cat.toLowerCase().replace(/ /g, '-').replace('&', 'and')}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-xl ${textColorClass} font-light uppercase tracking-widest hover:text-[#96754a] flex justify-between items-center border-b border-[#E5DCD0]/30 pb-4`}
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {cat}
              </Link>
            ))}
          </nav>

          {/* Drawer Footer (Account/Utility) */}
          <div className="mt-8 pt-8 border-t border-[#E5DCD0] space-y-4">
            <Link to="#" className="flex items-center gap-3 text-sm uppercase tracking-widest text-[#2A2624]/60 hover:text-[#2A2624]">
              <User size={18} /> Mon Compte
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}