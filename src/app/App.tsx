import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { CartProvider } from './pages/CartContext'
import { Products } from './pages/Products';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { ProductDetails } from './pages/ProductDetails'; 
import ScrollToTop from './components/ScrollToTop';
import { Cart } from './pages/Cart'
import { OrderSuccess } from './pages/OrderSuccess'

const paypalOptions = {
  clientId: 'Abg4dipKFtfqkGlRcnTdJJg1D0QdBOSMbhIB7E1JO-6_q81TNThuAy-o4bRp7tBswcZdJ2Awu0OM6Pjv',
  currency: 'EUR',
  intent: 'capture',
}

export default function App() {
  return (
    <PayPalScriptProvider options={paypalOptions}>
      <BrowserRouter>
        <CartProvider>
          <ScrollToTop />

          <div className="min-h-screen bg-white">
            <Navbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:slug" element={<ProductDetails />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/success" element={<OrderSuccess />} />
            </Routes>

            <Footer />
          </div>
        </CartProvider>
      </BrowserRouter>
    </PayPalScriptProvider>
  )
}
