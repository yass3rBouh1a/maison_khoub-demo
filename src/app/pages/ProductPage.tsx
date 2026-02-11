import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { MessageCircle, Truck, ShieldCheck, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const sizes = ['XS', 'S', 'M', 'L', 'XL'];

export function ProductPage() {
    const { id } = useParams();
    // const navigate = useNavigate(); // Unused
    // const [product, setProduct] = useState<Product | null>(null); // REMOVED
    const product = products.find(p => p.id === id) || null; // Derived

    const [selectedSize, setSelectedSize] = useState('M');
    const [mainImage, setMainImage] = useState<string>('');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showStickyBar, setShowStickyBar] = useState(false);

    useEffect(() => {
        if (product) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setMainImage(product.image);
            window.scrollTo(0, 0);
        }
    }, [product]);

    // Scroll listener for Sticky Bar
    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling past 300px
            setShowStickyBar(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!product) {
        return <div className="min-h-screen flex items-center justify-center">Chargement...</div>;
    }

    const allImages = [product.image, product.image, product.image, product.image]; // Mock images

    const handleWhatsAppOrder = () => {
        const phoneNumber = "212661380961";
        const message = `Bonjour Maison Khoub, je souhaite commander : ${product.name} (Taille: ${selectedSize}). Est-il disponible ?`;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    // Similar Products Logic
    const similarProducts = products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 3);

    return (
        <div className="min-h-screen bg-[#FBF7F0] pt-24 pb-32 lg:pb-24">
            <div className="container mx-auto px-4 lg:px-8">

                {/* SECTION 1: PRODUCT DETAILS (Grid) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">

                    {/* Left Column: Images */}
                    <div className="flex flex-col gap-6">

                        {/* --- DESKTOP GALLERY (Grid) --- */}
                        <div className="hidden lg:flex flex-col gap-6">
                            <div className="aspect-[3/4] w-full rounded-lg overflow-hidden bg-[#F2EBE3] relative">
                                <img
                                    src={mainImage}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 cursor-zoom-in"
                                />
                            </div>
                            <div className="grid grid-cols-4 gap-4">
                                {allImages.map((img, i) => (
                                    <div
                                        key={i}
                                        onClick={() => setMainImage(img)}
                                        className={`aspect-[3/4] cursor-pointer rounded-md overflow-hidden border-2 transition-all ${mainImage === img ? 'border-[#96754a]' : 'border-transparent hover:border-[#E5DCD0]'}`}
                                    >
                                        <img src={img} className="w-full h-full object-cover" alt={`View ${i}`} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* --- MOBILE GALLERY (Carousel) --- */}
                        <div className="lg:hidden relative w-full -mx-4 px-4 sm:mx-auto sm:px-0">
                            {/* Using negative margin to break container padding on mobile if needed, but keeping simple for now */}
                            <div
                                className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-8"
                                onScroll={(e) => {
                                    const scrollLeft = e.currentTarget.scrollLeft;
                                    const width = e.currentTarget.offsetWidth;
                                    setCurrentImageIndex(Math.round(scrollLeft / width));
                                }}
                            >
                                {allImages.map((img, i) => (
                                    <div key={i} className="flex-shrink-0 w-full snap-center bg-[#F2EBE3] rounded-lg overflow-hidden aspect-[3/4]">
                                        <img src={img} alt={`${product.name} ${i}`} className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>

                            {/* Dots */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                {allImages.map((_, i) => (
                                    <div
                                        key={i}
                                        className={`w-2 h-2 rounded-full transition-colors ${i === currentImageIndex ? 'bg-[#96754a]' : 'bg-[#E5DCD0]'}`}
                                    />
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Info & Sticky */}
                    <div className="lg:sticky lg:top-24 lg:self-start h-fit space-y-6 lg:space-y-8">
                        <div>
                            <p className="text-[#96754a] text-xs uppercase tracking-widest mb-4 font-light">MAISON KHOUB / {product.category}</p>
                            <h1 className="text-[#2A2624] mb-4 text-3xl lg:text-5xl leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>{product.name}</h1>
                            <p className="text-[#96754a] text-2xl font-light">{product.price.toLocaleString('fr-MA')} MAD</p>
                        </div>

                        <div className="text-[#2A2624]/80 space-y-4 leading-relaxed font-light text-base">
                            <p>{product.description}</p>
                        </div>

                        {/* Size Selector */}
                        <div>
                            <p className="text-[#2A2624] mb-3 text-xs font-bold tracking-widest uppercase">Taille</p>
                            <div className="flex gap-3">
                                {sizes.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`w-12 h-12 rounded border transition-all ${selectedSize === size ? 'border-[#96754a] bg-[#96754a] text-white' : 'border-[#E5DCD0] bg-white text-[#2A2624] hover:border-[#96754a]'}`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* DESKTOP CTA (Hidden on Mobile/Replaced by Sticky?) 
                            Actually user requests Sticky only when scrolled. 
                            So we keep this Main CTA visible always inline.
                        */}
                        <button
                            onClick={handleWhatsAppOrder}
                            className="w-full py-4 bg-[#96754a] text-white hover:bg-[#7d6240] transition-colors flex items-center justify-center gap-3 shadow-lg uppercase tracking-widest font-bold text-sm rounded-sm"
                        >
                            <MessageCircle size={20} />
                            Commander sur WhatsApp
                        </button>

                        {/* Reassurance Block */}
                        <div className="bg-[#F2EBE3]/50 p-6 border border-[#E5DCD0] space-y-4 rounded-sm">
                            <div className="flex items-center gap-4 text-sm text-[#2A2624]/70 font-light">
                                <Truck size={20} className="text-[#96754a] flex-shrink-0" />
                                <span>Livraison partout au Maroc et à l'international.</span>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-[#2A2624]/70 font-light">
                                <ShieldCheck size={20} className="text-[#96754a] flex-shrink-0" />
                                <span>Qualité Garantie - Tissus Premium.</span>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-[#2A2624]/70 font-light">
                                <Phone size={20} className="text-[#96754a] flex-shrink-0" />
                                <span>Service Client disponible 7j/7.</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SECTION 2: SIMILAR PRODUCTS */}
                {similarProducts.length > 0 && (
                    <div className="mt-24 py-16 border-t border-[#E5DCD0]">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl text-[#2A2624] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Vous aimerez aussi</h3>
                            <div className="w-16 h-[1px] bg-[#96754a] mx-auto"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {similarProducts.map((p) => (
                                <Link key={p.id} to={`/product/${p.id}`} className="group block">
                                    <div className="aspect-[3/4] overflow-hidden mb-4 bg-[#F2EBE3] rounded-lg">
                                        <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    </div>
                                    <h4 className="text-[#2A2624] text-lg mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>{p.name}</h4>
                                    <p className="text-[#96754a] font-light">{p.price.toLocaleString('fr-MA')} MAD</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* STICKY BOTTOM BAR (Mobile Only) */}
            <AnimatePresence>
                {showStickyBar && (
                    <motion.div
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        exit={{ y: 100 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#FBF7F0] border-t border-[#E5DCD0] shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] p-4 z-50 flex items-center justify-between gap-4"
                    >
                        <div className="flex flex-col">
                            <h3 className="text-[#2A2624] font-bold text-sm truncate max-w-[150px]" style={{ fontFamily: 'Playfair Display, serif' }}>{product.name}</h3>
                            <p className="text-[#96754a] text-xs font-medium">{product.price.toLocaleString('fr-MA')} MAD</p>
                        </div>
                        <button
                            onClick={handleWhatsAppOrder}
                            className="bg-[#25D366] text-white px-6 py-3 rounded-full font-bold text-sm shadow-md flex items-center gap-2"
                        >
                            <MessageCircle size={18} />
                            Commander
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
