import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { ShoppingBag, Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';

const sizes = ['XS', 'S', 'M', 'L', 'XL'];

const AccordionItem = ({ title, children }: { title: string; children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-t border-[#E5DCD0]">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-4 flex items-center justify-between text-left group"
            >
                <span className="text-[#1A1A1A] font-bold text-xs uppercase tracking-widest group-hover:opacity-70 transition-opacity">
                    {title}
                </span>
                {isOpen ? <Minus size={16} /> : <Plus size={16} />}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="pb-6 text-[#1A1A1A]/80 font-light text-sm leading-relaxed">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export function ProductPage() {
    const { id } = useParams();
    const product = products.find(p => p.id === id) || null;
    const { addToCart } = useCart();

    const [selectedSize, setSelectedSize] = useState('M');
    // Default to first color if available, or empty string
    const [selectedColor, setSelectedColor] = useState<string>('');
    const [mainImage, setMainImage] = useState<string>('');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showStickyBar, setShowStickyBar] = useState(false);

    useEffect(() => {
        if (product) {
            setMainImage(product.image);
            // initialize color
            if (product.colors && product.colors.length > 0) {
                setSelectedColor(product.colors[0].name);
            }
            window.scrollTo(0, 0);
        }
    }, [product]);

    // Scroll listener
    useEffect(() => {
        const handleScroll = () => {
            setShowStickyBar(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!product) {
        return <div className="min-h-screen flex items-center justify-center">Chargement...</div>;
    }

    // Use product images if available, otherwise fallback to mock array
    const allImages = product.images && product.images.length > 0
        ? product.images
        : [product.image, product.image, product.image, product.image];

    const handleAddToCart = () => {
        if (product) {
            addToCart(product, selectedSize);
        }
    };

    // Similar Products Logic
    const similarProducts = products
        .filter(p => p.category === product.category && p.id !== product.id);

    // "Le Compagnon Idéal" - Take the first similar product
    const perfectMatch = similarProducts.length > 0 ? similarProducts[0] : null;
    // "Explorez d'autres pistes" - Take the rest
    const otherSuggestions = similarProducts.slice(1, 4);

    return (
        <div className="min-h-screen bg-[#FBF7F0] pt-24 pb-32 lg:pb-24 font-sans">
            <div className="container mx-auto px-4 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                    {/* --- LEFT: IMAGES --- */}
                    <div className="flex flex-col gap-6">
                        {/* Desktop Grid */}
                        <div className="hidden lg:flex flex-col gap-6">
                            <div className="aspect-[3/4] w-full bg-[#F2EBE3] relative">
                                <img
                                    src={mainImage}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="grid grid-cols-4 gap-4">
                                {allImages.map((img, i) => (
                                    <div
                                        key={i}
                                        onClick={() => setMainImage(img)}
                                        className={`aspect-[3/4] cursor-pointer border transition-all ${mainImage === img ? 'border-[#1A1A1A]' : 'border-transparent hover:border-[#E5DCD0]'}`}
                                    >
                                        <img src={img} className="w-full h-full object-cover" alt={`Thumbnail ${i}`} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Mobile Carousel */}
                        <div className="lg:hidden relative w-full -mx-4 px-4">
                            <div
                                className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-0"
                                onScroll={(e) => {
                                    const scrollLeft = e.currentTarget.scrollLeft;
                                    const width = e.currentTarget.offsetWidth;
                                    setCurrentImageIndex(Math.round(scrollLeft / width));
                                }}
                            >
                                {allImages.map((img, i) => (
                                    <div key={i} className="flex-shrink-0 w-full snap-center bg-[#F2EBE3] aspect-[3/4]">
                                        <img src={img} alt={`${product.name} ${i}`} className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                            {/* Dots */}
                            <div className="flex justify-center gap-2 mt-4">
                                {allImages.map((_, i) => (
                                    <div
                                        key={i}
                                        className={`w-1.5 h-1.5 rounded-full transition-colors ${i === currentImageIndex ? 'bg-[#1A1A1A]' : 'bg-[#E5DCD0]'}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* --- RIGHT: INFO --- */}
                    <div className="lg:sticky lg:top-24 lg:self-start h-fit pt-4">

                        {/* Title & Price */}
                        <div className="mb-8">
                            <h1 className="text-[#1A1A1A] text-2xl lg:text-3xl font-serif uppercase tracking-wide mb-2">
                                {product.name}
                            </h1>
                            <p className="text-[#1A1A1A] text-lg font-light">
                                {product.price.toLocaleString('fr-MA')} MAD
                            </p>
                        </div>

                        {/* Colors */}
                        {product.colors && product.colors.length > 0 && (
                            <div className="mb-8">
                                <p className="text-xs font-bold text-[#1A1A1A]/60 mb-3">
                                    Couleur <span className="text-[#1A1A1A] uppercase">{selectedColor}</span>
                                </p>
                            </div>
                        )}

                        {/* Size (Link style as per reference "Choisir sa taille") */}
                        <div className="mb-8 border-b border-[#E5DCD0] pb-2">
                            <div className="flex justify-between items-center py-2 cursor-pointer group">
                                <span className="text-sm text-[#1A1A1A]">Choisir sa taille</span>
                                <div className="flex gap-2">
                                    {sizes.map(size => (
                                        <button
                                            key={size}
                                            onClick={(e) => { e.stopPropagation(); setSelectedSize(size); }}
                                            className={`w-8 h-8 flex items-center justify-center text-xs transition-colors ${selectedSize === size ? 'bg-[#1A1A1A] text-white' : 'text-[#1A1A1A] hover:bg-gray-100'}`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <button
                            onClick={handleAddToCart}
                            className="w-full py-4 bg-[#1A1A1A] text-white hover:bg-[#333] transition-colors flex items-center justify-center gap-3 uppercase tracking-widest font-bold text-xs mb-10"
                        >
                            <ShoppingBag size={16} />
                            Ajouter au Panier
                        </button>

                        {/* Description */}
                        <div className="mb-10 text-sm font-light text-[#1A1A1A]/80 leading-relaxed">
                            <p>{product.description}</p>
                            <p className="mt-4">
                                Fabriqué au Maroc.<br />
                                Finitions main.
                            </p>
                        </div>

                        {/* Accordions */}
                        <div className="space-y-0">
                            <AccordionItem title="Entretien">
                                Nettoyage à sec uniquement. Manipuler avec soin.
                            </AccordionItem>
                            <AccordionItem title="Livraison et Retours">
                                Livraison gratuite au Maroc. Retours sous 14 jours.
                            </AccordionItem>
                            <AccordionItem title="Offrir un cadeau">
                                Emballage signature Maison Khoub inclus. Message personnalisé disponible au panier.
                            </AccordionItem>
                        </div>

                    </div>
                </div>

                {/* --- CROSS-SELL: COMPAGNON IDÉAL --- */}
                {perfectMatch && (
                    <div className="mt-24 mb-16">
                        <h3 className="text-2xl md:text-3xl font-serif italic text-[#1A1A1A] mb-8">Idéal pour vous</h3>
                        <Link to={`/product/${perfectMatch.id}`} className="block w-full md:w-1/3 group">
                            <div className="bg-[#F2EBE3] aspect-square relative overflow-hidden mb-4">
                                <img src={perfectMatch.image} alt={perfectMatch.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            </div>
                            <h4 className="text-lg font-serif text-[#1A1A1A]">{perfectMatch.name}</h4>
                            <p className="text-sm font-light text-[#1A1A1A]">{perfectMatch.price.toLocaleString('fr-MA')} MAD</p>
                        </Link>
                    </div>
                )}

                {/* --- CROSS-SELL: EXPLOREZ D'AUTRES PISTES --- */}
                {otherSuggestions.length > 0 && (
                    <div className="mt-16 border-t border-[#E5DCD0] pt-16">
                        <h3 className="text-2xl md:text-3xl font-serif italic text-[#1A1A1A] mb-8">Explorez d'autres pistes</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {otherSuggestions.map((p) => (
                                <Link key={p.id} to={`/product/${p.id}`} className="group block">
                                    <div className="aspect-[3/4] overflow-hidden mb-4 bg-[#F2EBE3]">
                                        <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    </div>
                                    <h4 className="text-[#1A1A1A] text-lg mb-1 font-serif">{p.name}</h4>
                                    <p className="text-[#1A1A1A] font-light text-sm">{p.price.toLocaleString('fr-MA')} MAD</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* STICKY BOTTOM BAR (Mobile) */}
            <AnimatePresence>
                {showStickyBar && (
                    <motion.div
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        exit={{ y: 100 }}
                        className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#E5DCD0] p-4 z-50 flex items-center justify-between gap-4"
                    >
                        <div>
                            <p className="text-[#1A1A1A] font-bold text-xs uppercase">{product.name}</p>
                            <p className="text-[#1A1A1A] text-xs">{product.price.toLocaleString('fr-MA')} MAD</p>
                        </div>
                        <button
                            onClick={handleAddToCart}
                            className="bg-[#1A1A1A] text-white px-6 py-3 font-bold text-xs uppercase tracking-widest"
                        >
                            Ajouter
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
