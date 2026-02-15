import { ProductCard } from './ProductCard';
import { Product } from '../data/products';

interface ProductGridProps {
  products: Product[];
  onProductClick?: (product: Product) => void;
}

export function ProductGrid({ products, onProductClick }: ProductGridProps) {
  return (
    <section>
      {/* Grid - Default 2 columns (Deux Deux) */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-12 md:gap-x-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => onProductClick?.(product)}
          />
        ))}
      </div>
    </section>
  );
}
