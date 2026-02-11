import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export type FilterAction =
    | { type: 'price_min'; value: string }
    | { type: 'price_max'; value: string }
    | { type: 'availability'; value: boolean };

interface FilterSidebarProps {
    activeCategory?: string;
    onSearch?: (query: string) => void;
    onFilterChange?: (action: FilterAction) => void;
    className?: string;
}

// Official Category List
const categories = [
    'Djellaba',
    'Caftan',
    'Gandoura',
    'Jabador',
    'Tunique',
    'Kimono & Veste'
];

export function FilterSidebar(props: FilterSidebarProps) {
    const { activeCategory, onSearch, onFilterChange, className = '' } = props;

    return (
        <aside className={`w-full ${className}`}>
            {/* Title & Reset */}
            <div className="flex items-baseline justify-between mb-8">
                <h3
                    className="text-[#1A1A1A] font-bold text-sm tracking-widest uppercase"
                    style={{ fontFamily: 'Lato, sans-serif' }}
                >
                    Filtres
                </h3>
                <Link
                    to="/collections/all"
                    className="text-xs text-gray-400 hover:text-[#96754a] transition-colors"
                >
                    Reset
                </Link>
            </div>

            {/* Search */}
            <div className="relative mb-8">
                <input
                    type="text"
                    placeholder="Rechercher..."
                    onChange={(e) => onSearch?.(e.target.value)}
                    className="w-full py-2 pl-0 pr-8 bg-transparent border-b border-gray-200 text-sm text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-[#96754a] transition-colors"
                    style={{ fontFamily: 'Lato, sans-serif' }}
                />
                <Search
                    size={16}
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400"
                />
            </div>

            {/* Categories */}
            <div className="space-y-4">
                <h4
                    className="text-[#1A1A1A] text-xs font-bold uppercase tracking-wider mb-4"
                    style={{ fontFamily: 'Lato, sans-serif' }}
                >
                    Catégories
                </h4>
                <ul className="space-y-3">
                    {categories.map((category) => {
                        const slug = category.toLowerCase()
                            .replace(' & ', '-')
                            .replace(' ', '-');

                        const isActive = activeCategory === slug;

                        return (
                            <li key={category}>
                                <Link
                                    to={`/collections/${slug}`}
                                    className={`text-[15px] transition-colors block ${isActive
                                        ? 'text-[#96754a] font-medium'
                                        : 'text-gray-600 hover:text-black'
                                        }`}
                                    style={{ fontFamily: 'Lato, sans-serif' }}
                                >
                                    {category}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>

            {/* Price Filter */}
            <div className="mt-8">
                <h4
                    className="text-[#1A1A1A] text-xs font-bold uppercase tracking-wider mb-4"
                    style={{ fontFamily: 'Lato, sans-serif' }}
                >
                    Prix
                </h4>
                <div className="flex items-center gap-2">
                    <input
                        type="number"
                        placeholder="Min"
                        className="w-full py-2 px-3 bg-white border border-gray-200 text-sm focus:outline-none focus:border-[#96754a]"
                        onChange={(e) => onFilterChange?.({ type: 'price_min', value: e.target.value })}
                    />
                    <span className="text-gray-400">-</span>
                    <input
                        type="number"
                        placeholder="Max"
                        className="w-full py-2 px-3 bg-white border border-gray-200 text-sm focus:outline-none focus:border-[#96754a]"
                        onChange={(e) => onFilterChange?.({ type: 'price_max', value: e.target.value })}
                    />
                </div>
            </div>

            {/* Availability Filter */}
            <div className="mt-8">
                <h4
                    className="text-[#1A1A1A] text-xs font-bold uppercase tracking-wider mb-4"
                    style={{ fontFamily: 'Lato, sans-serif' }}
                >
                    Disponibilité
                </h4>
                <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                        type="checkbox"
                        className="w-4 h-4 border-gray-300 rounded text-[#96754a] focus:ring-[#96754a]"
                        onChange={(e) => onFilterChange?.({ type: 'availability', value: e.target.checked })}
                    />
                    <span className="text-sm text-gray-600 group-hover:text-black transition-colors" style={{ fontFamily: 'Lato, sans-serif' }}>
                        En stock uniquement
                    </span>
                </label>
            </div>
        </aside>
    );
}
