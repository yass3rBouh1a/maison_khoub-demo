import { useState, useEffect, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { UpsellModal } from './components/UpsellModal';
import { products, upsellProduct, Product } from './data/products';
import { WhatsAppFloat } from './components/ui/WhatsAppFloat';
import { CartProvider, useCart } from './context/CartContext';
import { CartDrawer } from './components/CartDrawer';
import { LoadingScreen } from './components/ui/LoadingScreen';

// Lazy load pages
const HomePage = lazy(() => import('./pages/HomePage').then(module => ({ default: module.HomePage })));
const CategoryPage = lazy(() => import('./pages/CategoryPage').then(module => ({ default: module.CategoryPage })));
const ProductPage = lazy(() => import('./pages/ProductPage').then(module => ({ default: module.ProductPage })));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showUpsellModal, setShowUpsellModal] = useState(false);
  const { addToCart } = useCart();
  const [isLoading, setIsLoading] = useState(false);

  // Loading Screen Effect on Route Change
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5s loading time

    return () => clearTimeout(timer);
  }, [location.pathname]);

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
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100]"
          >
            <LoadingScreen />
          </motion.div>
        )}
      </AnimatePresence>
      <ScrollToTop />
      <Header />
      <CartDrawer />

      <main className="flex-grow">
        <Suspense fallback={<LoadingScreen />}>
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
        </Suspense>
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