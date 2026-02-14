import { useCart } from '../context/CartContext';
import { X, Trash2, MessageCircle } from 'lucide-react';

export function CartDrawer() {
    const { isCartOpen, closeCart, cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

    if (!isCartOpen) return null;

    const handleWhatsAppCheckout = () => {
        const phoneNumber = "212661380961";
        const messageHeader = "Bonjour Maison Khoub, je souhaite commander les articles suivants :\n\n";
        const messageItems = cartItems.map(item =>
            `- ${item.product.name} (Taille: ${item.size}) x${item.quantity} - ${(item.product.price * item.quantity).toLocaleString('fr-MA')} MAD\n  Photo: ${window.location.origin}${item.product.image}`
        ).join('\n\n');
        const messageFooter = `\n\nTotal: ${cartTotal.toLocaleString('fr-MA')} MAD\n\nPouvez-vous confirmer la disponibilité ?`;

        const fullMessage = messageHeader + messageItems + messageFooter;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="fixed inset-0 z-[60] flex justify-end">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 transition-opacity" onClick={closeCart}></div>

            {/* Drawer */}
            <div className="relative w-full max-w-md bg-[#FBF7F0] h-full shadow-xl flex flex-col transform transition-transform duration-300 ease-in-out translate-x-0">

                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-[#E5DCD0]">
                    <h2 className="text-[#2A2624] text-lg font-bold uppercase tracking-widest" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Mon Panier ({cartItems.length})
                    </h2>
                    <button onClick={closeCart} className="text-[#2A2624] hover:text-[#96754a] transition-colors">
                        <X size={24} strokeWidth={1.5} />
                    </button>
                </div>

                {/* Body */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {cartItems.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-[#2A2624]/60 mb-6">Votre panier est vide.</p>
                            <button onClick={closeCart} className="text-[#96754a] font-bold border-b border-[#96754a] pb-1 uppercase text-sm tracking-widest hover:text-[#7d6240]">
                                Continuer mes achats
                            </button>
                        </div>
                    ) : (
                        cartItems.map((item) => (
                            <div key={`${item.product.id}-${item.size}`} className="flex gap-4">
                                <div className="w-20 h-24 bg-[#F2EBE3] rounded-md overflow-hidden flex-shrink-0">
                                    <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1 flex flex-col justify-between">
                                    <div>
                                        <div className="flex justify-between items-start">
                                            <h3 className="text-[#2A2624] font-medium text-sm" style={{ fontFamily: 'Playfair Display, serif' }}>{item.product.name}</h3>
                                            <button
                                                onClick={() => removeFromCart(item.product.id, item.size)}
                                                className="text-gray-400 hover:text-red-500 transition-colors"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                        <p className="text-[#2A2624]/60 text-xs mt-1">Taille: {item.size}</p>
                                    </div>
                                    <div className="flex justify-between items-end">
                                        <div className="flex items-center border border-[#E5DCD0] rounded-sm">
                                            <button
                                                onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                                                className="px-2 py-1 text-[#2A2624] hover:bg-[#E5DCD0]/50"
                                            >
                                                -
                                            </button>
                                            <span className="px-2 text-xs text-[#2A2624]">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                                                className="px-2 py-1 text-[#2A2624] hover:bg-[#E5DCD0]/50"
                                            >
                                                +
                                            </button>
                                        </div>
                                        <p className="text-[#96754a] font-medium text-sm">{(item.product.price * item.quantity).toLocaleString('fr-MA')} MAD</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer */}
                {cartItems.length > 0 && (
                    <div className="p-6 border-t border-[#E5DCD0] bg-white">
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-[#2A2624] font-bold uppercase tracking-widest text-sm">Total</span>
                            <span className="text-[#96754a] font-bold text-xl">{cartTotal.toLocaleString('fr-MA')} MAD</span>
                        </div>
                        <button
                            onClick={handleWhatsAppCheckout}
                            className="w-full py-4 bg-[#25D366] text-white hover:bg-[#20bd5a] transition-colors flex items-center justify-center gap-3 shadow-lg uppercase tracking-widest font-bold text-sm rounded-sm"
                        >
                            <MessageCircle size={20} />
                            Commander sur WhatsApp
                        </button>
                        <p className="text-center text-[10px] text-gray-400 mt-4">
                            En cliquant sur commander, vous serez redirigé vers WhatsApp pour finaliser votre commande avec un conseiller.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
