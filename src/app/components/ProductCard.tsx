import { useState, useRef } from 'react';
import { ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Filter valid images (ensure we have an array)
  // Fallback to [product.image] if images array is missing or empty
  const images = product.images && product.images.length > 0 ? product.images : [product.image];

  const handleMouseEnter = () => {
    if (images.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 1500); // Faster slideshow
    }
  };

  const handleMouseLeave = () => {
    setCurrentImageIndex(0); // Reset to primary image
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleDotClick = (e: React.MouseEvent, index: number) => {
    e.stopPropagation(); // Prevent product click
    setCurrentImageIndex(index);
    // Reset interval to avoid jumpy behavior immediately after click
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 1500);
    }
  };

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden mb-4 bg-[#F5F5F5]" style={{ aspectRatio: '3/4' }}>
        <AnimatePresence>
          <motion.img
            key={images[currentImageIndex]}
            src={images[currentImageIndex]}
            alt={product.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full h-full object-cover absolute inset-0"
            loading="lazy"
            decoding="async"
          />
        </AnimatePresence>

        {/* HOT SALE Badge */}
        {product.isHot && (
          <div className="absolute top-0 left-0 z-10 bg-luxury-black text-white text-[10px] lowercase tracking-widest px-3 py-1 font-medium">
            hot sale
          </div>
        )}

        {/* Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Thumbnails / Dots Indicator */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => handleDotClick(e, idx)}
                className={`w-2 h-2 rounded-full shadow-sm transition-all ${idx === currentImageIndex
                  ? 'bg-white scale-110'
                  : 'bg-white/50 hover:bg-white/80'
                  }`}
                aria-label={`View image ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="flex justify-between items-end mt-4">
        <div className="space-y-1">
          <h3 className="text-[#1A1A1A] font-serif text-lg leading-tight">
            {product.name}
          </h3>
          <p className="text-[#1A1A1A] font-sans text-base">
            {product.price.toLocaleString('fr-MA')} MAD
          </p>
        </div>

        <button
          className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-[#1A1A1A] hover:bg-gray-100 transition-colors"
          aria-label="Ajouter au panier"
          onClick={(e) => {
            e.stopPropagation();
            // Add to cart logic would go here
          }}
        >
          <ShoppingBag size={16} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}
