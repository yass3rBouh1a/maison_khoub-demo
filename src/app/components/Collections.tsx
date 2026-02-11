import { Link } from 'react-router-dom';

const collections = [
  {
    id: 1,
    title: 'Kaftans',
    slug: 'kaftans',
    image: 'https://images.unsplash.com/photo-1590056773301-38a61f70b7cf?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    title: 'Djellabas',
    slug: 'djellabas',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    title: 'Tissus Liberty',
    slug: 'tissus-liberty',
    image: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    title: 'Signature',
    slug: 'signature',
    image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80&w=800'
  }
];

export function Collections() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl text-[#1A1A1A] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Nos Collections
          </h2>
          <div className="w-16 h-[1px] bg-[#96754a] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-[600px] md:h-[500px]">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              to={`/collections/${collection.slug}`}
              className="relative group overflow-hidden block h-full"
            >
              <img
                src={collection.image}
                alt={collection.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 transition-opacity duration-300" />

              {/* Title Bottom Left */}
              <div className="absolute bottom-8 left-8">
                <h3
                  className="text-white text-2xl tracking-wide group-hover:text-[#96754a] transition-colors"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {collection.title}
                </h3>
                <span className="text-white/80 text-xs uppercase tracking-widest mt-2 block opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  Découvrir
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
