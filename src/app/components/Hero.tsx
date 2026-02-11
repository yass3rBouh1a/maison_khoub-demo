interface HeroProps {
  onCTAClick?: () => void;
}

export function Hero({ onCTAClick }: HeroProps) {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src="https://www.kounouz.ma/themes/at_movic/assets/img/modules/appagebuilder/images/0L3A2235_.webp"
        alt="Maison Khoub - L'Élégance Marocaine"
        className="absolute inset-0 w-full h-full object-cover"
        // Astuce Performance : lazy="eager" pour que l'image charge en priorité
        loading="eager"
      />

      {/* Dark Overlay for readability (Gardé à 20% comme demandé) */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 text-center px-8 animate-fade-in-up">
        <h2
          className="text-white mb-12 drop-shadow-md"
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(40px, 6vw, 80px)', // Responsive font size
            fontWeight: 400,
            letterSpacing: '0.02em',
            lineHeight: 1.2
          }}
        >
          L'Élégance Marocaine
        </h2>

        <button
          onClick={onCTAClick}
          className="group px-12 py-4 border border-white bg-transparent hover:bg-white hover:text-[#96754a] transition-all duration-300 ease-out"
          style={{ fontFamily: 'Lato, sans-serif' }}
        >
          <span className="text-white group-hover:text-[#96754a] text-[13px] tracking-[0.15em] uppercase font-medium">
            Découvrir la Collection
          </span>
        </button>
      </div>
    </section>
  );
}