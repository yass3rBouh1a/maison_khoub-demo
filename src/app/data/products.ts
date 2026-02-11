export interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
    slug: string;
    description: string;
    isFeatured?: boolean;
    isHot?: boolean;
    inStock?: boolean;
}

export const products: Product[] = [
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