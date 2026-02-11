import { Link } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react';
import { Star, Globe, MessageCircle } from 'lucide-react';
import { Product } from '../data/products';

interface HomePageProps {
    products: Product[];
    onProductClick: (product: Product) => void;
    onScrollToProducts: () => void;
}

export function HomePage({ products: allProducts, onProductClick }: HomePageProps) {
    const featuredProducts = allProducts.filter(p => p.isFeatured).slice(0, 8); // Get enough for carousel
    const [emblaRef] = useEmblaCarousel({ align: 'start', loop: true });

    return (
        <div className="bg-white">
            {/* 1. Hero Section (Immersion Totale) */}
            <section className="relative h-[90vh] w-full overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://www.kounouz.ma/themes/at_movic/assets/img/modules/appagebuilder/images/0L3A2235_.webp"
                        alt="Hero Collection"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" /> {/* Slight overlay for readability */}
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
                    <h1 className="text-5xl md:text-7xl font-serif mb-4 drop-shadow-md" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Collection Évasion
                    </h1>
                    <p className="text-xl md:text-2xl font-light mb-8 tracking-wide drop-shadow-md" style={{ fontFamily: 'Lato, sans-serif' }}>
                        L'Art de l'Authenticité Marocaine
                    </p>
                    <Link
                        to="/collections/new"
                        className="px-8 py-3 border border-white text-white uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors duration-300"
                    >
                        DÉCOUVRIR LA COLLECTION
                    </Link>
                </div>
            </section>

            {/* 2. Section "Double Bannière" (Split Screen) */}
            <section className="flex flex-col md:flex-row h-auto md:h-[80vh] w-full">
                {/* Left Column - Lifestyle */}
                <div className="relative w-full md:w-1/2 h-[60vh] md:h-full group overflow-hidden cursor-pointer">
                    <img
                        src="https://www.kounouz.ma/2278-home_default/ensemble-caftan-deux-pieces.jpg"
                        alt="Collection Kaftan"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <h2 className="text-3xl md:text-4xl text-white uppercase tracking-widest font-serif drop-shadow-sm mb-4">
                            COLLECTION KAFTAN
                        </h2>
                        <span className="text-white text-sm uppercase tracking-widest border-b border-white pb-1">Explorer</span>
                    </div>
                </div>

                {/* Right Column - Detail */}
                <div className="relative w-full md:w-1/2 h-[60vh] md:h-full group overflow-hidden cursor-pointer">
                    <img
                        src="https://www.kounouz.ma/2331-home_default/kimono-femme.jpg"
                        alt="Collection Djellaba"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <h2 className="text-3xl md:text-4xl text-white uppercase tracking-widest font-serif drop-shadow-sm mb-4">
                            COLLECTION DJELLABA
                        </h2>
                        <span className="text-white text-sm uppercase tracking-widest border-b border-white pb-1">Explorer</span>
                    </div>
                </div>
            </section>

            {/* 3. Section "New Arrivals" (Carousel Défilant) */}
            <section className="py-24 bg-[#FBF7F0]">
                <div className="container mx-auto px-4 md:px-12">
                    <div className="flex justify-between items-end mb-16">
                        <h2 className="text-3xl md:text-4xl text-[#1A1A1A] font-serif mx-auto md:mx-0">
                            NOUVEAUTÉS
                        </h2>
                        <Link to="/collections/all" className="hidden md:block text-sm text-[#1A1A1A] border-b border-[#1A1A1A] pb-1 uppercase tracking-widest hover:opacity-60 transition-opacity">
                            Voir tout
                        </Link>
                    </div>

                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex -ml-4">
                            {featuredProducts.map((product) => (
                                <div key={product.id} className="flex-[0_0_66%] md:flex-[0_0_25%] min-w-0 pl-4">
                                    <div
                                        className="group cursor-pointer flex flex-col gap-4"
                                        onClick={() => onProductClick(product)}
                                    >
                                        <div className="relative aspect-[3/4] overflow-hidden bg-[#ECECEC]">
                                            {/* Badge */}
                                            {product.isFeatured && (
                                                <span className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-[10px] uppercase tracking-widest text-black z-10">
                                                    Nouveau
                                                </span>
                                            )}

                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                            />
                                        </div>

                                        <div className="text-center md:text-left space-y-1">
                                            <h3 className="text-lg text-[#1A1A1A] font-serif">
                                                {product.name}
                                            </h3>
                                            <p className="text-sm text-[#595959] font-sans">
                                                {product.price.toLocaleString('fr-MA')} MAD
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-8 text-center md:hidden">
                        <Link to="/collections/all" className="text-sm text-[#1A1A1A] border-b border-[#1A1A1A] pb-1 uppercase tracking-widest">
                            Voir tout
                        </Link>
                    </div>
                </div>
            </section>

            {/* 4. Section "Focus Collection" (Bloc Narratif) */}
            {/* 4. Section "Focus Collection" (Bloc Narratif) */}
            {/* 4. Section "Focus Collection" (Bloc Narratif - Redesign) */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
                        {/* Colonne 1 : Texte */}
                        <div className="text-left order-2 lg:order-1">
                            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-[#2A2624]" style={{ fontFamily: 'Playfair Display, serif' }}>
                                L'HÉRITAGE MAROCAIN
                            </h2>
                            <p className="text-lg text-gray-700 font-light leading-relaxed mb-8 font-sans" style={{ fontFamily: 'Lato, sans-serif' }}>
                                Chaque pièce raconte une histoire tissée de fils d'or et de soie.
                                Nous perpétuons un savoir-faire ancestral, où le geste de l'artisan
                                rencontre la vision contemporaine du luxe. Une élégance intemporelle
                                qui traverse les générations.
                            </p>
                            <Link
                                to="/savoir-faire"
                                className="inline-block text-sm uppercase tracking-widest border-b border-[#2A2624] pb-1 hover:opacity-60 transition-opacity text-[#2A2624]"
                            >
                                EN SAVOIR PLUS
                            </Link>
                        </div>

                        {/* Colonne 2 : Images Mosaïque */}
                        <div className="relative pl-8 pb-8 lg:pl-0 lg:pb-0 order-1 lg:order-2">
                            {/* Image 1 (Principale - Vidéo) */}
                            <video
                                src="https://www.kounouz.ma/kounouz-articles.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="h-96 w-full object-cover rounded-sm shadow-lg relative z-0"
                            />

                            {/* Image 2 (Détail) */}
                            <img
                                src="https://www.kounouz.ma/themes/at_movic/assets/img/modules/appagebuilder/images/0L3A2235_.webp"
                                alt="Détail Artisanat"
                                className="absolute -bottom-8 -left-8 lg:-bottom-12 lg:-left-12 h-48 w-48 object-cover rounded-sm border-4 border-white shadow-xl z-10"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Section "Focus Collection Signature" (Mise en avant Produit) */}
            <section className="bg-[#FBF7F0] py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
                        {/* Colonne Gauche (Visuel) */}
                        {/* Colonne Gauche (Visuel - Mosaïque) */}
                        <div className="grid grid-cols-2 gap-4 h-full items-center">
                            {/* Image Principale (Gauche) */}
                            <img
                                src="https://www.kounouz.ma/2335-home_default/caftan-elegance-brocard-a-double-sfifa.jpg"
                                alt="Signature Principale"
                                className="row-span-2 h-96 md:h-[32rem] object-cover rounded-sm w-full"
                            />

                            {/* Colonne Droite (2 Petites Images) */}
                            <div className="flex flex-col gap-4">
                                <img
                                    src="https://www.kounouz.ma/2299-home_default/caftan-long-a-franges-tenue-traditionnelle-moderne.jpg"
                                    alt="Détail Signature Haut"
                                    className="h-48 md:h-64 object-cover rounded-sm w-full"
                                />
                                <img
                                    src="https://www.kounouz.ma/2340-home_default/ensemble-djellaba-en-lainage-premium-deux-pieces.jpg"
                                    alt="Détail Signature Bas"
                                    className="h-48 md:h-64 object-cover rounded-sm w-full"
                                />
                            </div>
                        </div>

                        {/* Colonne Droite (Éditorial) */}
                        <div className="lg:pl-16 text-center lg:text-left">
                            <span className="text-xs uppercase tracking-widest text-gray-500 mb-4 block">
                                ÉDITION LIMITÉE
                            </span>
                            <h2 className="text-4xl text-[#2A2624] font-serif mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                                Le Kimono Royal
                            </h2>
                            <p className="text-gray-600 leading-relaxed font-sans text-lg mt-6" style={{ fontFamily: 'Lato, sans-serif' }}>
                                Une pièce d'exception en velours de soie, brodée à la main pendant plus de 40 heures par nos Maâllems.
                                L'incarnation du luxe silencieux et de l'authenticité.
                            </p>
                            <Link
                                to="/collections/signature"
                                className="inline-block mt-8 bg-[#1A1A1A] text-white px-8 py-4 uppercase tracking-widest text-sm hover:bg-[#96754a] transition-colors duration-300"
                            >
                                DÉCOUVRIR LA PIÈCE
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Section "Services & Engagements" (Réassurance) */}
            <section className="bg-white border-t border-gray-100 py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Bloc 1 */}
                        <div className="flex flex-col items-center text-center gap-3">
                            <Star className="w-6 h-6 text-[#96754a]" />
                            <div>
                                <h3 className="text-lg text-[#2A2624] font-serif mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                                    Savoir-Faire Authentique
                                </h3>
                                <p className="text-sm text-gray-500 font-sans" style={{ fontFamily: 'Lato, sans-serif' }}>
                                    Fait main à Fès
                                </p>
                            </div>
                        </div>

                        {/* Bloc 2 */}
                        <div className="flex flex-col items-center text-center gap-3">
                            <Globe className="w-6 h-6 text-[#96754a]" />
                            <div>
                                <h3 className="text-lg text-[#2A2624] font-serif mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                                    Livraison Internationale
                                </h3>
                                <p className="text-sm text-gray-500 font-sans" style={{ fontFamily: 'Lato, sans-serif' }}>
                                    Expédition sécurisée sous 5 jours
                                </p>
                            </div>
                        </div>

                        {/* Bloc 3 */}
                        <div className="flex flex-col items-center text-center gap-3">
                            <MessageCircle className="w-6 h-6 text-[#96754a]" />
                            <div>
                                <h3 className="text-lg text-[#2A2624] font-serif mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                                    Conciergerie Privée
                                </h3>
                                <p className="text-sm text-gray-500 font-sans" style={{ fontFamily: 'Lato, sans-serif' }}>
                                    Assistance WhatsApp 7j/7
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
