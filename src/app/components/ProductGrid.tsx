import { useState } from 'react';
import { ProductCard, Product } from './ProductCard';
import { LayoutGrid, Grid2X2, RectangleHorizontal } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  onProductClick?: (product: Product) => void;
}

export function ProductGrid({ products, onProductClick }: ProductGridProps) {
  const [columns, setColumns] = useState<2 | 3 | 4>(3);

  const getGridClass = () => {
    switch (columns) {
      case 2: return 'grid-cols-1 md:grid-cols-2';
      case 3: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
      case 4: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
      default: return 'grid-cols-1 md:grid-cols-3';
    }
  };

  return (
    <section>

      {/* Toolbar */}
      <div className="flex justify-end items-center mb-8 gap-4 border-b border-gray-200 pb-4">
        <span className="text-sm text-gray-500 font-light" style={{ fontFamily: 'Lato, sans-serif' }}>
          Affichage :
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setColumns(2)}
            className={`p-2 transition-colors ${columns === 2 ? 'text-[#96754a]' : 'text-gray-400 hover:text-gray-600'}`}
            aria-label="2 columns"
          >
            <RectangleHorizontal size={20} strokeWidth={1.5} />
          </button>
          <button
            onClick={() => setColumns(3)}
            className={`p-2 transition-colors ${columns === 3 ? 'text-[#96754a]' : 'text-gray-400 hover:text-gray-600'}`}
            aria-label="3 columns"
          >
            <LayoutGrid size={20} strokeWidth={1.5} />
          </button>
          <button
            onClick={() => setColumns(4)}
            className={`p-2 transition-colors ${columns === 4 ? 'text-[#96754a]' : 'text-gray-400 hover:text-gray-600'}`}
            aria-label="4 columns"
          >
            <Grid2X2 size={20} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className={`grid gap-x-8 gap-y-12 transition-all duration-500 ${getGridClass()}`}>
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
