import { useState, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Loader } from "./components/Loader";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { ScrollToTop } from "./components/ScrollToTop";
import { SmoothScroll } from "./components/SmoothScroll";
import { OrderDrawer } from "./components/OrderDrawer";
import { MobileStickyBar } from "./components/MobileStickyBar";
import { CartProvider } from "./context/CartContext";
import { motion, AnimatePresence } from "motion/react";
import { Toaster } from "sonner";

const Home = lazy(() => import("./pages/Home").then((module) => ({ default: module.Home })));
const Menu = lazy(() => import("./pages/Menu").then((module) => ({ default: module.Menu })));
const About = lazy(() => import("./pages/About").then((module) => ({ default: module.About })));
const Contact = lazy(() => import("./pages/Contact").then((module) => ({ default: module.Contact })));

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      {/* @ts-ignore */}
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <Suspense fallback={<div className="min-h-screen bg-[#190C06]" />}>
                <Home />
              </Suspense>
            </motion.div>
          }
        />
        <Route
          path="/menu"
          element={
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <Suspense fallback={<div className="min-h-screen bg-[#F6F3EC]" />}>
                <Menu />
              </Suspense>
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <Suspense fallback={<div className="min-h-screen bg-[#190C06]" />}>
                <About />
              </Suspense>
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <Suspense fallback={<div className="min-h-screen bg-[#190C06]" />}>
                <Contact />
              </Suspense>
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <BrowserRouter>
      <CartProvider>
        <ScrollToTop />

        <AnimatePresence>
          {loading && <Loader onComplete={() => setLoading(false)} />}
        </AnimatePresence>

        {!loading && (
          <SmoothScroll>
            <div className="bg-[#190C06] text-[#F6F3EC] min-h-screen flex flex-col font-sans relative">
              {/* Tactile Ceramic & Parchment Grain Overlay across entire website */}
              <div className="earthen-grain-overlay" aria-hidden="true" />
              
              <Navbar />
              <div className="flex-grow">
                <AnimatedRoutes />
              </div>
              <Footer />
              <FloatingWhatsApp />
              <MobileStickyBar />
              <OrderDrawer />
              <Toaster
                position="top-center"
                richColors
                toastOptions={{
                  style: {
                    background: "#26140B",
                    color: "#F6F3EC",
                    border: "1px solid rgba(183, 151, 84, 0.4)",
                  },
                }}
              />
            </div>
          </SmoothScroll>
        )}
      </CartProvider>
    </BrowserRouter>
  );
}
