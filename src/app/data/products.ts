export interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    images?: string[]; // Added for gallery/slideshow support
    category: string;
    slug: string;
    description: string;
    isFeatured?: boolean;
    isHot?: boolean;
    inStock?: boolean;
    colors?: { name: string; hex: string }[];
}

// Ramadan Collection Imports
// Product 1
import r1_1 from '../../assets/image/COLLECTION RAMADAN EID 2026/img1/A6709247 - primary.jpg'; // Primary
import r1_2 from '../../assets/image/COLLECTION RAMADAN EID 2026/img1/A6709228 (3).jpg';
import r1_3 from '../../assets/image/COLLECTION RAMADAN EID 2026/img1/A6709246.jpg';
import r1_4 from '../../assets/image/COLLECTION RAMADAN EID 2026/img1/A6709249.jpg';
import r1_5 from '../../assets/image/COLLECTION RAMADAN EID 2026/img1/A6709252.jpg';
import r1_6 from '../../assets/image/COLLECTION RAMADAN EID 2026/img1/A6709257.jpg';

// Product 2
import r2_1 from '../../assets/image/COLLECTION RAMADAN EID 2026/img2/A6709306 - primary.jpg'; // Primary
import r2_2 from '../../assets/image/COLLECTION RAMADAN EID 2026/img2/A6709262.jpg';
import r2_3 from '../../assets/image/COLLECTION RAMADAN EID 2026/img2/A6709293.jpg';
import r2_4 from '../../assets/image/COLLECTION RAMADAN EID 2026/img2/A6709303.jpg';
import r2_5 from '../../assets/image/COLLECTION RAMADAN EID 2026/img2/A6709313.jpg';
import r2_6 from '../../assets/image/COLLECTION RAMADAN EID 2026/img2/A6709332.jpg';

// Product 3
import r3_1 from '../../assets/image/COLLECTION RAMADAN EID 2026/img3/A6709425 - primary.jpg'; // Primary
import r3_2 from '../../assets/image/COLLECTION RAMADAN EID 2026/img3/A6709438.jpg';
import r3_3 from '../../assets/image/COLLECTION RAMADAN EID 2026/img3/A6709449.jpg';

// Product 4
import r4_1 from '../../assets/image/COLLECTION RAMADAN EID 2026/img4/A6709472 - primary.jpg'; // Primary
import r4_2 from '../../assets/image/COLLECTION RAMADAN EID 2026/img4/A6709475.jpg';

// Product 5
import r5_1 from '../../assets/image/COLLECTION RAMADAN EID 2026/img5/A6709513 - primary.jpg'; // Primary
import r5_2 from '../../assets/image/COLLECTION RAMADAN EID 2026/img5/A6709509.jpg';
import r5_3 from '../../assets/image/COLLECTION RAMADAN EID 2026/img5/A6709510.jpg';
import r5_4 from '../../assets/image/COLLECTION RAMADAN EID 2026/img5/A6709516.jpg';
import r5_5 from '../../assets/image/COLLECTION RAMADAN EID 2026/img5/A6709518.jpg';
import r5_6 from '../../assets/image/COLLECTION RAMADAN EID 2026/img5/A6709527.jpg';
import r5_7 from '../../assets/image/COLLECTION RAMADAN EID 2026/img5/A6709528.jpg';

// Product 6
import r6_1 from '../../assets/image/COLLECTION RAMADAN EID 2026/img6/A6709610 - primary.jpg'; // Primary
import r6_2 from '../../assets/image/COLLECTION RAMADAN EID 2026/img6/A6709566.jpg';
import r6_3 from '../../assets/image/COLLECTION RAMADAN EID 2026/img6/A6709571.jpg';
import r6_4 from '../../assets/image/COLLECTION RAMADAN EID 2026/img6/A6709598.jpg';
import r6_5 from '../../assets/image/COLLECTION RAMADAN EID 2026/img6/A6709605 (1).jpg';
import r6_6 from '../../assets/image/COLLECTION RAMADAN EID 2026/img6/A6709613.jpg';
import r6_7 from '../../assets/image/COLLECTION RAMADAN EID 2026/img6/A6709614.jpg';
import r6_8 from '../../assets/image/COLLECTION RAMADAN EID 2026/img6/A6709621.jpg';
import r6_9 from '../../assets/image/COLLECTION RAMADAN EID 2026/img6/A6709628 (2).jpg';
import r6_10 from '../../assets/image/COLLECTION RAMADAN EID 2026/img6/A6709630.jpg';

// Product 7
import r7_1 from '../../assets/image/COLLECTION RAMADAN EID 2026/img7/A6709641 - primary.jpg'; // Primary
import r7_2 from '../../assets/image/COLLECTION RAMADAN EID 2026/img7/A6709654 (1).jpg';
import r7_3 from '../../assets/image/COLLECTION RAMADAN EID 2026/img7/A6709657.jpg';
import r7_4 from '../../assets/image/COLLECTION RAMADAN EID 2026/img7/A6709661 (1).jpg';
import r7_5 from '../../assets/image/COLLECTION RAMADAN EID 2026/img7/A6709661.jpg';

// Product 8
import r8_1 from '../../assets/image/COLLECTION RAMADAN EID 2026/img8/A6709352.jpg';

export interface CartItem {
    product: Product;
    size: string;
    quantity: number;
}

const ramadanCollection: Product[] = [
    {
        id: "ramadan-1",
        name: "Ensemble Gandoura",
        slug: "ensemble-gandoura",
        price: 1850,
        category: "COLLECTION RAMADAN EID 2026",
        image: r1_1,
        images: [r1_1, r1_2, r1_3, r1_4, r1_5, r1_6],
        description: "Un ensemble Gandoura élégant et confortable, idéal pour les célébrations du Ramadan.",
        isFeatured: true,
        colors: [
            { name: "Beige Sable", hex: "#E5DCD0" },
            { name: "Blanc Cassé", hex: "#F5F5F0" },
            { name: "Taupe", hex: "#8B8589" }
        ]
    },
    {
        id: "ramadan-2",
        name: "Costume Beldi",
        slug: "costume-beldi",
        price: 2450,
        category: "COLLECTION RAMADAN EID 2026",
        image: r2_1,
        images: [r2_1, r2_2, r2_3, r2_4, r2_5, r2_6],
        description: "Costume Beldi traditionnel revisité avec une touche moderne.",
        isFeatured: true,
        colors: [
            { name: "Vert Olive", hex: "#708238" },
            { name: "Noir Profond", hex: "#1A1A1A" }
        ]
    },
    {
        id: "ramadan-3",
        name: "Djellaba Impériale",
        slug: "djellaba-imperiale",
        price: 1950,
        category: "COLLECTION RAMADAN EID 2026",
        image: r3_1,
        images: [r3_1, r3_2, r3_3],
        description: "Djellaba Impériale aux finitions luxueuses.",
        isFeatured: true,
        colors: [
            { name: "Bleu Majorelle", hex: "#6050DC" },
            { name: "Blanc Pur", hex: "#FFFFFF" }
        ]
    },
    {
        id: "ramadan-4",
        name: "Tunique Soie",
        slug: "tunique-soie",
        price: 1450,
        category: "COLLECTION RAMADAN EID 2026",
        image: r4_1,
        images: [r4_1, r4_2],
        description: "Tunique en soie légère et fluide.",
        isFeatured: true,
        colors: [
            { name: "Rose Poudré", hex: "#FFD1DC" },
            { name: "Champagne", hex: "#F7E7CE" }
        ]
    },
    {
        id: "ramadan-5",
        name: "Caftan Moderne",
        slug: "caftan-moderne",
        price: 2100,
        category: "COLLECTION RAMADAN EID 2026",
        image: r5_1,
        images: [r5_1, r5_2, r5_3, r5_4, r5_5, r5_6, r5_7],
        description: "Caftan moderne alliant tradition et tendances actuelles.",
        isFeatured: true,
        colors: [
            { name: "Bordeaux", hex: "#800020" },
            { name: "Or", hex: "#FFD700" }
        ]
    },
    {
        id: "ramadan-6",
        name: "Kimono Brodé",
        slug: "kimono-brode",
        price: 2800,
        category: "COLLECTION RAMADAN EID 2026",
        image: r6_1,
        images: [r6_1, r6_2, r6_3, r6_4, r6_5, r6_6, r6_7, r6_8, r6_9, r6_10],
        description: "Kimono richement brodé pour une allure majestueuse.",
        isFeatured: true,
        colors: [
            { name: "Noir & Or", hex: "#1A1A1A" },
            { name: "Blanc & Argent", hex: "#F5F5F0" }
        ]
    },
    {
        id: "ramadan-7",
        name: "Tunique Brocard",
        slug: "tunique-brocard",
        price: 1650,
        category: "COLLECTION RAMADAN EID 2026",
        image: r7_1,
        images: [r7_1, r7_2, r7_3, r7_4, r7_5],
        description: "Tunique en brocard texturé.",
        isFeatured: true,
        colors: [
            { name: "Bleu Nuit", hex: "#191970" },
            { name: "Vert Émeraude", hex: "#50C878" }
        ]
    },
    {
        id: "ramadan-8",
        name: "Jellaba Moderne Chic",
        slug: "jellaba-moderne-chic",
        price: 1950,
        category: "COLLECTION RAMADAN EID 2026",
        image: r8_1,
        images: [r8_1],
        description: "Une Jellaba moderne au design épuré, parfaite pour les occasions spéciales du Ramadan.",
        isFeatured: true,
        colors: [
            { name: "Gris Perle", hex: "#EAEAEA" },
            { name: "Bleu Ciel", hex: "#87CEEB" }
        ]
    }
];

export const products: Product[] = [
    ...ramadanCollection,

    // --- CAFTAN (Ex-Kaftans) ---
    {
        id: "k1",
        name: "Caftan Crêpe Impérial",
        slug: "caftan-crepe-imperial",
        price: 2800,
        category: "Caftan",
        image: "https://www.kounouz.ma/1698-home_default/caftan-en-crepe-detail-imprime-caftan-marocain-kounouz.jpg",
        description: "L'alliance subtile du crêpe de soie et d'un imprimé floral délicat. Finitions maalem pour une allure sophistiquée.",
        isFeatured: true,
        isHot: true,
        inStock: false
    },
    {
        id: "k2",
        name: "Caftan Sfifa Bicolore",
        slug: "caftan-sfifa-bicolore",
        price: 3200,
        category: "Caftan",
        image: "https://www.kounouz.ma/1694-large_default/caftan-sfifa-bicolore.jpg",
        description: "Une pièce maîtresse aux finitions bicolores contrastées. Coupe droite et élégante pour vos soirées.",
        isFeatured: false
    },
    {
        id: "k3",
        name: "Caftan Col Imprimé",
        slug: "caftan-col-imprime",
        price: 2600,
        category: "Caftan",
        image: "https://www.kounouz.ma/752-home_default/caftan-marocain-a-col-imprime.jpg",
        description: "Un design moderne mettant l'accent sur un col structuré aux motifs géométriques. Minimalisme chic.",
        isFeatured: false
    },

    // --- DJELLABA (Ex-Djellabas) ---
    {
        id: "d1",
        name: "Djellaba Hivernale Tweed",
        slug: "djellaba-hivernale-tweed",
        price: 1700,
        category: "Djellaba",
        image: "https://www.kounouz.ma/2191-home_default/djellaba-femme-manches-larges-avec-bande.jpg",
        description: "Manches amples sublimées par une bande en tweed. Idéale pour la saison fraîche avec son tissu lainage.",
        isFeatured: true,
        isHot: true
    },
    {
        id: "d2",
        name: "Djellaba Mlifa Classique",
        slug: "djellaba-mlifa-classique",
        price: 1500,
        category: "Djellaba",
        image: "https://www.kounouz.ma/2125-home_default/djellaba-unie-en-mlifa.jpg",
        description: "L'intemporelle Djellaba en Mlifa unie. Coupe fluide, confort absolu et élégance discrète.",
        isFeatured: true
    },
    {
        id: "d3",
        name: "Djellaba Bohème",
        slug: "djellaba-boheme",
        price: 1600,
        category: "Djellaba",
        image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=800",
        description: "Inspirée des couleurs de Chefchaouen, une coupe fluide et légère pour les journées ensoleillées.",
        isFeatured: false
    },

    // --- KIMONO & VESTE (Ex-Signature) ---
    {
        id: "s1",
        name: "Kimono Signature Moderne",
        slug: "kimono-signature-moderne",
        price: 1900,
        category: "Kimono & Veste",
        image: "https://www.kounouz.ma/1068-home_default/kimono-ouvert-moderne.jpg",
        description: "Une réinterprétation contemporaine du vestiaire marocain. Porté ouvert pour un style audacieux.",
        isFeatured: true
    },
    {
        id: "s2",
        name: "Cape Selham Royale",
        slug: "cape-selham-royale",
        price: 2900,
        category: "Kimono & Veste",
        image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80&w=800",
        description: "L'élégance ultime. Un selham en velours noir brodé main, à porter sur un kaftan ou une tenue de soirée.",
        isFeatured: false
    },

    // --- GANDOURA (New) ---
    {
        id: "g1",
        name: "Gandoura Lin Argile",
        slug: "gandoura-lin-argile",
        price: 1200,
        category: "Gandoura",
        image: "https://images.unsplash.com/photo-1504198458649-3128b932f49e?auto=format&fit=crop&q=80&w=800",
        description: "Gandoura légère en lin couleur argile. Coupe ample pour un confort optimal à la maison ou en extérieur.",
        isFeatured: false
    },

    // --- JABADOR (New) ---
    {
        id: "j1",
        name: "Jabador Soie Ivoire",
        slug: "jabador-soie-ivoire",
        price: 2200,
        category: "Jabador",
        image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80&w=800",
        description: "Ensemble Jabador 2 pièces en crêpe de soie ivoire. Broderies fines et coupe ajustée.",
        isFeatured: false,
        isHot: true
    },

    // --- TUNIQUE (New) ---
    {
        id: "tu1",
        name: "Tunique Brodée Noir",
        slug: "tunique-brodee-noir",
        price: 950,
        category: "Tunique",
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800",
        description: "Tunique noire élégante avec plastron brodé or. Parfaite sur un jean ou un pantalon classique.",
        isFeatured: false
    },

    // --- ACCESSOIRES (Preserved) ---
    {
        id: "ac1",
        name: "Ceinture Mdammas Or",
        slug: "ceinture-mdammas-or",
        price: 1200,
        category: "Accessoires",
        image: "https://images.unsplash.com/photo-1605763240004-7e93b172d754?auto=format&fit=crop&q=80&w=800",
        description: "Ceinture traditionnelle plaquée or 18 carats, motif floral ciselé. La touche finale indispensable.",
        isFeatured: false
    },
    // --- NOUVEAUTÉS (User Request) ---
    {
        id: "k4",
        name: "Caftan Long à Franges",
        slug: "caftan-long-franges",
        price: 3500,
        category: "Caftan",
        image: "https://www.kounouz.ma/2299-home_default/caftan-long-a-franges-tenue-traditionnelle-moderne.jpg",
        description: "Un caftan majestueux alliant tradition et modernité, sublimé par des franges artisanales pour un mouvement gracieux.",
        isFeatured: true
    },
    {
        id: "tu2",
        name: "Tunique Moutarde Rayée Or",
        slug: "tunique-moutarde-or",
        price: 850,
        category: "Tunique",
        image: "https://www.kounouz.ma/2246-home_default/tunique-jaune-moutarde-motif-raye-dore.jpg",
        description: "L'éclat du jaune moutarde rehaussé de rayures dorées. Une pièce lumineuse et sophistiquée.",
        isFeatured: false
    },
    {
        id: "tu3",
        name: "Tunique Marocaine Classique",
        slug: "tunique-marocaine-classique",
        price: 750,
        category: "Tunique",
        image: "https://www.kounouz.ma/1562-home_default/tunique-marocaine.jpg",
        description: "L'essence du style marocain dans une coupe intemporelle. Confort et élégance au quotidien.",
        isFeatured: false
    },
    {
        id: "tu4",
        name: "Tunique Femme Élégance",
        slug: "tunique-femme-elegance",
        price: 800,
        category: "Tunique",
        image: "https://www.kounouz.ma/1829-home_default/tunique-femme.jpg",
        description: "Une coupe féminine et moderne, idéale pour une tenue chic et décontractée.",
        isFeatured: false
    },
    {
        id: "tu5",
        name: "Tunique Crêpe de Soie",
        slug: "tunique-crepe-soie",
        price: 1100,
        category: "Tunique",
        image: "https://www.kounouz.ma/1551-home_default/tunique-en-crepe.jpg",
        description: "La fluidité du crêpe de soie pour une tunique d'une douceur exceptionnelle. Finitions raffinées.",
        isFeatured: false
    }
];

export const upsellProduct: Product = {
    id: '5',
    name: 'Ceinture Artisanale',
    price: 450,
    image: 'https://images.unsplash.com/photo-1732139637218-ef33b3339dfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwYWNjZXNzb3JpZXMlMjBiZWx0JTIwZ29sZHxlbnwxfHx8fDE3NzA3NDg0MjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Accessoires',
    slug: 'ceinture-artisanale',
    description: 'Une ceinture artisanale élégante pour compléter votre tenue.',
    isFeatured: false
};