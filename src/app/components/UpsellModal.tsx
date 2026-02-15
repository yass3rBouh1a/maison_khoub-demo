import { X } from 'lucide-react';
import { Product } from '../data/products';
import { useEffect } from 'react';

interface UpsellModalProps {
  isOpen: boolean;
  onClose: () => void;
  upsellProduct: Product;
  onAddUpsell: (product: Product) => void;
  onDecline: () => void;
}

export function UpsellModal({
  isOpen,
  onClose,
  upsellProduct,
  onAddUpsell,
  onDecline
}: UpsellModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-50 transition-opacity"
        onClick={onClose}
      />

      {/* Slide-over Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-[480px] bg-white z-50 shadow-2xl transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-8 py-6 border-b border-[#E0E0E0]">
            <h3
              className="text-[#1A1A1A]"
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '20px',
                fontWeight: 400,
                letterSpacing: '0.01em'
              }}
            >
              Complétez votre tenue
            </h3>
            <button
              onClick={onClose}
              className="group"
              aria-label="Close"
            >
              <X
                size={20}
                strokeWidth={1}
                className="text-[#1A1A1A] transition-opacity group-hover:opacity-60"
              />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-8 py-8">
            {/* Upsell Product */}
            <div className="mb-8">
              <div
                className="relative overflow-hidden mb-6 bg-[#F5F5F5]"
                style={{ aspectRatio: '3/4' }}
              >
                <img
                  src={upsellProduct.image}
                  alt={upsellProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h4
                className="text-[#1A1A1A] mb-2"
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '18px',
                  fontWeight: 400,
                  letterSpacing: '0.01em'
                }}
              >
                {upsellProduct.name}
              </h4>

              <p
                className="text-[#96754a] mb-6"
                style={{
                  fontFamily: 'Lato, sans-serif',
                  fontSize: '16px',
                  fontWeight: 400
                }}
              >
                {upsellProduct.price.toLocaleString('fr-MA')} MAD
              </p>

              <p
                className="text-[#595959] leading-relaxed mb-8"
                style={{
                  fontFamily: 'Lato, sans-serif',
                  fontSize: '14px',
                  fontWeight: 300,
                  lineHeight: 1.6
                }}
              >
                Cet accessoire artisanal sublime votre kaftan.
                Confectionné avec le même soin du détail, il apporte la touche finale parfaite.
              </p>

              {/* Add Upsell Button */}
              <button
                onClick={() => onAddUpsell(upsellProduct)}
                className="w-full py-4 bg-[#96754a] text-white hover:bg-[#7d6240] transition-colors mb-3"
                style={{
                  fontFamily: 'Lato, sans-serif',
                  fontSize: '13px',
                  fontWeight: 400,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase'
                }}
              >
                Ajouter (+{upsellProduct.price.toLocaleString('fr-MA')} MAD)
              </button>

              {/* Decline Button */}
              <button
                onClick={onDecline}
                className="w-full py-4 border border-[#E0E0E0] text-[#595959] hover:border-[#1A1A1A] hover:text-[#1A1A1A] transition-colors"
                style={{
                  fontFamily: 'Lato, sans-serif',
                  fontSize: '13px',
                  fontWeight: 400,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase'
                }}
              >
                Non Merci
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
