import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProductGrid } from '../components/ProductGrid';
import { FilterSidebar, FilterAction } from '../components/FilterSidebar';
import { CollectionHero } from '../components/CollectionHero';
import { products as allProducts } from '../data/products';

export function CategoryPage() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState({
        priceMin: '',
        priceMax: '',
        inStockOnly: false
    });

    // Normalize slug to match category names roughly
    const normalizedSlug = slug ? slug.toLowerCase() : 'all';

    // Page Title Logic
    const pageTitle = normalizedSlug === 'all'
        ? 'Toute la Collection'
        : slug ? slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ') : 'Collection';

    // Filter products based on slug/category AND search query AND filters
    const filteredProducts = allProducts.filter(p => {
        // 1. Search Query
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());

        // 2. Category Filter
        let matchesCategory = true;
        if (normalizedSlug !== 'all') {
            const productCategory = p.category ? p.category.toLowerCase() : '';
            const productSlug = productCategory.replace(/ & /g, '-').replace(/ /g, '-');
            matchesCategory = productSlug === normalizedSlug;
        }

        // 3. Price Filter
        let matchesPrice = true;
        if (filters.priceMin && p.price < Number(filters.priceMin)) matchesPrice = false;
        if (filters.priceMax && p.price > Number(filters.priceMax)) matchesPrice = false;

        // 4. Availability Filter
        let matchesAvailability = true;
        if (filters.inStockOnly) {
            // Default to true if inStock is undefined
            matchesAvailability = p.inStock !== false;
        }

        return matchesSearch && matchesCategory && matchesPrice && matchesAvailability;
    });

    // Dynamic Hero Image based on category or first product
    // If 'all', use a generic luxury banner or the first product
    const heroImage = filteredProducts.length > 0
        ? filteredProducts[0].image
        : 'https://images.unsplash.com/photo-1549439602-43ebca2327af?q=80&w=2070&auto=format&fit=crop';

    return (
        <div className="bg-[#FBF7F0] min-h-screen pb-24">
            {/* Hero Banner */}
            <CollectionHero
                title={pageTitle}
                description="Découvrez nos créations exclusives, alliant savoir-faire traditionnel et élégance contemporaine."
                image={heroImage}
            />

            <div className="container mx-auto px-8 mt-12">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Sidebar - Hidden on Mobile for MVP (or add Sheet later) */}
                    <div className="hidden lg:block w-1/4 sticky top-32 self-start">
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
                    </div>

                    {/* Main Content - Grid */}
                    <div className="w-full lg:w-3/4">
                        {/* Mobile Filter Toggle Placeholder (could be added here) */}

                        {filteredProducts.length > 0 ? (
                            <ProductGrid
                                products={filteredProducts}
                                onProductClick={(product) => navigate(`/product/${product.id}`)}
                            />
                        ) : (
                            <div className="py-24 text-center">
                                <p className="text-gray-500 font-light italic text-lg" style={{ fontFamily: 'Lato, sans-serif' }}>
                                    Aucun produit ne correspond à votre recherche.
                                </p>
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className="mt-4 text-[#96754a] hover:underline"
                                >
                                    Effacer la recherche
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
