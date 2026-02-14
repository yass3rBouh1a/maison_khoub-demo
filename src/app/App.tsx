import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { UpsellModal } from './components/UpsellModal';
import { HomePage } from './pages/HomePage';
import { CategoryPage } from './pages/CategoryPage';
import { ProductPage } from './pages/ProductPage';
import { products, upsellProduct, Product } from './data/products';
import { WhatsAppFloat } from './components/ui/WhatsAppFloat';
import { CartProvider, useCart } from './context/CartContext';
import { CartDrawer } from './components/CartDrawer';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const navigate = useNavigate();
  // const [_selectedProduct, setSelectedProduct] = useState<Product | null>(null); // For Upsell context mainly
  const [showUpsellModal, setShowUpsellModal] = useState(false);
  // const [cartItems, setCartItems] = useState<Array<{ product: Product; size: string }>>([]);
  const { addToCart } = useCart();

  const handleProductClick = (product: Product) => {
    navigate(`/product/${product.id}`);
  };

  const handleAddUpsell = () => { // Removed product arg as it's upsellProduct
    addToCart(upsellProduct, 'Universal');
    setShowUpsellModal(false);
    // navigate('/'); // Redirect home or stay?
  };

  const handleDeclineUpsell = () => {
    setShowUpsellModal(false);
  };

  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF7F0] flex flex-col justify-between relative">
      <ScrollToTop />
      <Header />
      <CartDrawer />

      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                products={products}
                onProductClick={handleProductClick}
                onScrollToProducts={scrollToProducts}
              />
            }
          />
          <Route path="/collections/:slug" element={<CategoryPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </main>

      <Footer />

      <UpsellModal
        isOpen={showUpsellModal}
        onClose={() => setShowUpsellModal(false)}
        upsellProduct={upsellProduct}
        onAddUpsell={handleAddUpsell}
        onDecline={handleDeclineUpsell}
      />

      {/* Hide WhatsApp on Product Page */}
      {!window.location.pathname.startsWith('/product/') && <WhatsAppFloat />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </Router>
  );
}

export default App;