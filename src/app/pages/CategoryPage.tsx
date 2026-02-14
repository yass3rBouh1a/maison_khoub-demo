import { useParams, useNavigate } from 'react-router-dom';
import { ProductGrid } from '../components/ProductGrid';
import { products as allProducts } from '../data/products';

export function CategoryPage() {
    const { slug } = useParams();
    const navigate = useNavigate();

    // Normalize slug to match category names roughly
    const normalizedSlug = slug ? slug.toLowerCase() : 'all';

    // Page Title Logic
    const pageTitle = normalizedSlug === 'all'
        ? 'Toute la Collection'
        : normalizedSlug === 'new'
            ? 'Nouveautés'
            : slug ? slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ') : 'Collection';

    // Filter products based on slug/category
    const filteredProducts = allProducts.filter(p => {
        // Category Filter
        let matchesCategory = true;
        if (normalizedSlug === 'new') {
            matchesCategory = !!p.isFeatured;
        } else if (normalizedSlug !== 'all') {
            const productCategory = p.category ? p.category.toLowerCase() : '';
            const productSlug = productCategory.replace(/ & /g, '-').replace(/ /g, '-');
            matchesCategory = productSlug === normalizedSlug;
        }

        return matchesCategory;
    });

    return (
        <div className="bg-[#FBF7F0] min-h-screen pb-24 font-sans">

            {/* Header / Filter Section */}
            <div className="container mx-auto px-4 md:px-8 pt-12 mb-12">
                <div className="flex flex-col gap-2">
                    {/* Breadcrumb / Label */}
                    <span className="text-xs font-bold tracking-widest text-[#1A1A1A] uppercase">
                        COLLECTION
                    </span>

                    <div className="flex justify-between items-end">
                        {/* Title & Count */}
                        <div className="flex items-baseline gap-3">
                            <h1 className="text-4xl md:text-5xl font-serif text-[#1A1A1A]">
                                {pageTitle}
                            </h1>
                            <span className="text-sm md:text-base text-gray-500 font-light">
                                ({filteredProducts.length})
                            </span>
                        </div>

                        {/* Filter Button */}
                        <button className="hidden md:flex items-center gap-2 text-sm font-bold tracking-widest border-b border-[#1A1A1A] pb-1 uppercase hover:opacity-70 transition-opacity">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 6H20M7 12H17M10 18H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Filtrer
                        </button>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-8">
                {/* Sidebar - Hidden for this layout style as requested (Hermes uses slide-over or top filters usually, for now removing sidebar to match image cleanly) */}
                {/* <div className="hidden lg:block w-1/4 sticky top-32 self-start">
                        <FilterSidebar
                            activeCategory={slug}
                            onSearch={setSearchQuery}
                            onFilterChange={(filterAction: FilterAction) => {
                                setFilters(prev => {
                                    const newFilters = { ...prev };
                                    if (filterAction.type === 'price_min') newFilters.priceMin = filterAction.value;
                                    if (filterAction.type === 'price_max') newFilters.priceMax = filterAction.value;
                                    if (filterAction.type === 'availability') newFilters.inStockOnly = filterAction.value;
                                    return newFilters;
                                });
                            }}
                        />
                    </div> */}

                {/* Main Content - Grid */}
                <div className="w-full">
                    {filteredProducts.length > 0 ? (
                        <ProductGrid
                            products={filteredProducts}
                            onProductClick={(product) => navigate(`/product/${product.id}`)}
                        />
                    ) : (
                        <div className="py-24 text-center">
                            <p className="text-gray-500 font-light italic text-lg">
                                Aucun produit ne correspond à votre recherche.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
