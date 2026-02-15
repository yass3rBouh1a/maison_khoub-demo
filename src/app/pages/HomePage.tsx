import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, Globe, MessageCircle, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '../data/products';

import heroVideo from '../../assets/video/maison_khoub_1.mp4';
import heritageImg1 from '../../assets/image/COLLECTION RAMADAN EID 2026/img3/A6709425 - primary.jpg';
import heritageImg2 from '../../assets/image/COLLECTION RAMADAN EID 2026/img6/A6709610 - primary.jpg';
import eidReminderImg from '../../assets/image/COLLECTION RAMADAN EID 2026/img5/A6709513 - primary.jpg';

// Image imports removed - using data/products.ts


interface HomePageProps {
    products: Product[];
    onProductClick: (product: Product) => void;
    onScrollToProducts: () => void;
}

const SlideshowProductCard = ({ product, onClick }: { product: Product; onClick: () => void }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = () => {
        if (product.images && product.images.length > 1) {
            intervalRef.current = setInterval(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images!.length);
            }, 3000); // Slower interval for 2s transition
        }
    };

    const handleMouseLeave = () => {
        setCurrentImageIndex(0); // Reset to primary image
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    const currentImage = product.images && product.images.length > 0
        ? product.images[currentImageIndex]
        : product.image;

    return (
        <div
            className="group cursor-pointer flex flex-col gap-4"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
        >
            <div className="relative aspect-[3/4] overflow-hidden bg-[#F5F0E6]">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentImage}
                        src={currentImage}
                        alt={product.name}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="w-full h-full object-cover absolute inset-0"
                        loading="lazy"
                        decoding="async"
                    />
                </AnimatePresence>
            </div>

            <div className="text-left space-y-1">
                <h3 className="text-base text-luxury-black font-sans font-medium">
                    {product.name}
                </h3>
                <p className="text-sm text-luxury-black/60 font-sans">
                    {product.price.toLocaleString('fr-MA')} MAD
                </p>
            </div>
        </div>
    );
};

export function HomePage({ products: allProducts, onProductClick, onScrollToProducts }: HomePageProps) {
    // Filter Ramadan Collection from main products data
    const ramadanProducts = allProducts.filter(p => p.category === "COLLECTION RAMADAN EID 2026");

    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <div className="bg-white">
            {/* 1. Hero Section: Plein écran, Image sombre, Titre Centré Bas "Collection Évasion" */}
            <section className="relative h-[95vh] w-full overflow-hidden">
                <div className="absolute inset-0">
                    <video
                        ref={videoRef}
                        src={heroVideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    />
                    {/* Gradient Overlay: Bottom Black for readiness */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                </div>

                {/* Video Controls (Bottom Left) */}
                <div className="absolute bottom-4 left-2 z-20 flex gap-2">
                    <button
                        onClick={togglePlay}
                        className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all border border-white/20"
                        aria-label={isPlaying ? "Pause" : "Play"}
                    >
                        {isPlaying ? <Pause size={20} fill="currentColor" stroke="none" /> : <Play size={20} fill="currentColor" stroke="none" />}
                    </button>
                    <button
                        onClick={toggleMute}
                        className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all border border-white/20"
                        aria-label={isMuted ? "Unmute" : "Mute"}
                    >
                        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                    </button>
                </div>

                {/* Content Centered at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 flex flex-col items-start justify-end pb-20 text-left text-white z-10 px-2 pointer-events-none">
                    <h1 className="text-3xl md:text-5xl mb-0 font-serif italic leading-tight">
                        L'élégance pour horizon
                    </h1>
                    <p className="text-white text-xs md:text-sm mb-2 font-sans font-light max-w-md">
                        Un souffle de soie et l'allure prend le large.
                    </p>
                    <button
                        onClick={onScrollToProducts}
                        className="text-white uppercase tracking-[0.2em] text-[9px] md:text-[11px] border-b border-white pb-1 hover:text-luxury-cream transition-all duration-300 font-sans font-bold pointer-events-auto"
                    >
                        PARTEZ À LA DÉCOUVERTE DE LA COLLECTION
                    </button>
                </div>
            </section>



            {/* 3. COLLECTION RAMADAN EID 2026 (Grid Layout) */}
            <section className="py-24 bg-luxury-cream" id="products">
                <div className="container mx-auto px-4 md:px-12">
                    <h2 className="text-3xl md:text-4xl text-luxury-black font-serif text-center mb-16 uppercase tracking-widest">
                        COLLECTION RAMADAN EID 2026
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
                        {ramadanProducts.map((product) => (
                            <SlideshowProductCard
                                key={product.id}
                                product={product}
                                onClick={() => onProductClick(product)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Section Héritage (Split): Texte Gauche / Images Droite */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        {/* Text Left */}
                        <div className="w-full lg:w-1/2 text-left space-y-6">
                            <span className="text-xs uppercase tracking-[0.2em] text-primary">Savoir-Faire</span>
                            <h2 className="text-4xl md:text-5xl font-serif text-luxury-black leading-tight">
                                L'HÉRITAGE MAROCAIN
                            </h2>
                            <p className="text-lg text-gray-600 font-light leading-relaxed font-sans">
                                Chaque création incarne l'excellence de l'artisanat marocain.
                                Entre tradition séculaire et design contemporain, nos pièces racontent
                                une histoire de passion, de temps et de beauté intemporelle.
                            </p>
                            <Link
                                to="/savoir-faire"
                                className="inline-block mt-4 text-xs uppercase tracking-[0.2em] border-b border-luxury-black pb-2 hover:text-primary hover:border-primary transition-colors"
                            >
                                Découvrir l'Atelier
                            </Link>
                        </div>

                        {/* Images Right - Composition */}
                        <div className="w-full lg:w-1/2 relative h-[600px]">
                            {/* Big Image */}
                            <img
                                src={heritageImg1}
                                alt="Atelier"
                                className="absolute top-0 right-0 w-3/4 h-[500px] object-cover z-0"
                                loading="lazy"
                                decoding="async"
                            />
                            {/* Small Image Overlay */}
                            <img
                                src={heritageImg2}
                                alt="Detail"
                                className="absolute bottom-0 left-0 w-1/2 h-[350px] object-cover z-10 border-8 border-white"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                    </div>
                </div>
            </section>



            {/* 5. Section Rappel Collection Eid */}
            <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={eidReminderImg}
                        alt="Collection Eid"
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                    />
                    <div className="absolute inset-0 bg-black/30"></div>
                </div>

                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    <span className="block text-xs md:text-sm uppercase tracking-[0.3em] mb-4 font-light">
                        Édition Limitée
                    </span>
                    <h2 className="text-4xl md:text-6xl font-serif italic mb-8">
                        Sublimez votre Eïd
                    </h2>
                    <p className="text-sm md:text-base font-light mb-10 max-w-xl mx-auto opacity-90">
                        Découvrez nos créations exclusives pour les célébrations, alliant tradition et modernité.
                    </p>
                    <button
                        onClick={onScrollToProducts}
                        className="bg-white text-luxury-black px-10 py-4 uppercase tracking-widest text-xs font-bold hover:bg-luxury-cream transition-all duration-300 pointer-events-auto"
                    >
                        Explorer la Collection
                    </button>
                </div>
            </section>
            <section className="py-24 bg-white border-t border-luxury-border/30">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        <div className="flex flex-col items-center gap-4">
                            <Star className="w-8 h-8 text-luxury-black stroke-1" />
                            <h3 className="uppercase tracking-widest text-sm font-bold">Savoir-Faire</h3>
                            <p className="text-gray-500 font-light text-sm">Finitions main artisanales</p>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <Globe className="w-8 h-8 text-luxury-black stroke-1" />
                            <h3 className="uppercase tracking-widest text-sm font-bold">Livraison</h3>
                            <p className="text-gray-500 font-light text-sm">Expédition internationale rapide</p>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <MessageCircle className="w-8 h-8 text-luxury-black stroke-1" />
                            <h3 className="uppercase tracking-widest text-sm font-bold">Service Client</h3>
                            <p className="text-gray-500 font-light text-sm">Disponible 7j/7 sur WhatsApp</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
