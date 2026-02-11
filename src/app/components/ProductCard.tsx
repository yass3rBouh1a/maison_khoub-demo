export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category?: string;
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
        {/* Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Product Info */}
      <div className="space-y-1">
        <h3
          className="text-[#1A1A1A]"
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '16px',
            fontWeight: 400,
            letterSpacing: '0.01em'
          }}
        >
          {product.name}
        </h3>
        <p
          className="text-[#96754a]"
          style={{
            fontFamily: 'Lato, sans-serif',
            fontSize: '14px',
            fontWeight: 400
          }}
        >
          {product.price.toLocaleString('fr-MA')} MAD
        </p>
      </div>
    </div>
  );
}
