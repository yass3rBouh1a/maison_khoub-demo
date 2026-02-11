import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FilterSidebarProps {
    activeCategory?: string;
    onSearch?: (query: string) => void;
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

export function FilterSidebar({ activeCategory, onSearch, className = '' }: FilterSidebarProps) {
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
                        // Create slug from category name (e.g. "Kimono & Veste" -> "kimono-veste"?? User example was "kimono-veste")
                        // Simple slugify: lowercase, replace & with '', replace spaces with -
                        const slug = category.toLowerCase()
                            .replace(' & ', '-')
                            .replace(' ', '-'); // fallback for spaces

                        // Check active state (handle lenient matching if needed, but exact slug match is best)
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
        </aside>
    );
}
