import { ShoppingBag } from 'lucide-react';
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category?: string;
  isHot?: boolean;
}

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden mb-4 bg-[#F5F5F5]" style={{ aspectRatio: '3/4' }}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* HOT SALE Badge */}
        {product.isHot && (
          <div className="absolute top-0 left-0 z-10 bg-luxury-black text-white text-[10px] lowercase tracking-widest px-3 py-1 font-medium">
            hot sale
          </div>
        )}
        {/* Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Product Info */}
      <div className="flex justify-between items-end mt-4">
        <div className="space-y-1">
          <h3 className="text-[#1A1A1A] font-serif text-lg leading-tight">
            {product.name}
          </h3>
          <p className="text-[#1A1A1A] font-sans text-base">
            {product.price.toLocaleString('fr-MA')} €
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
