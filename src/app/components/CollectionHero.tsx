import { Link } from 'react-router-dom';

interface CollectionHeroProps {
    title: string;
    description?: string;
    image: string;
}

export function CollectionHero({ title, description, image }: CollectionHeroProps) {
    return (
        <div className="relative h-[40vh] min-h-[400px] w-full mt-20">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Content */}
            <div className="relative h-full container mx-auto px-8 flex flex-col justify-center items-center text-center">
                {/* Breadcrumbs - Absolute Top Left */}
                <div className="absolute top-8 left-8 flex items-center gap-2 text-white/80 text-xs tracking-widest uppercase font-light">
                    <Link to="/" className="hover:text-white transition-colors">Accueil</Link>
                    <span>/</span>
                    <span className="text-white">{title}</span>
                </div>

                <h1
                    className="text-white text-5xl md:text-6xl mb-4"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                >
                    {title}
                </h1>

                {description && (
                    <p
                        className="text-white/90 text-sm md:text-base max-w-xl font-light tracking-wide"
                        style={{ fontFamily: 'Lato, sans-serif' }}
                    >
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
}
