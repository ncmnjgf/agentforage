import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Browse from './pages/Browse';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import Pricing from './pages/Pricing';
import ForCreators from './pages/ForCreators';
import MyPurchases from './pages/MyPurchases';
import DownloadPage from './pages/DownloadPage';
import UploadTool from './pages/UploadTool';
import MyTools from './pages/MyTools';
import Earnings from './pages/Earnings';
import Orders from './pages/Orders';
import ProtectedRoute from './components/ProtectedRoute';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';
import DashboardLayout from './layouts/DashboardLayout';
import AivoraLanding from './pages/AivoraLanding';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AivoraLanding />} />
        <Route path="/old-home" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/browse" element={<PageTransition><Browse /></PageTransition>} />
        <Route path="/product/:id" element={<PageTransition><ProductDetail /></PageTransition>} />
        <Route path="/login" element={<PageTransition><Login /></PageTransition>} />
        <Route path="/signup" element={<PageTransition><Signup /></PageTransition>} />
        <Route path="/pricing" element={<PageTransition><Pricing /></PageTransition>} />
        <Route path="/for-creators" element={<PageTransition><ForCreators /></PageTransition>} />
        
        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<PageTransition><Dashboard /></PageTransition>} />
            <Route path="/my-purchases" element={<PageTransition><MyPurchases /></PageTransition>} />
            <Route path="/download/:id" element={<PageTransition><DownloadPage /></PageTransition>} />
            
            {/* Creator Routes */}
            <Route path="/creator/upload" element={<PageTransition><UploadTool /></PageTransition>} />
            <Route path="/creator/my-tools" element={<PageTransition><MyTools /></PageTransition>} />
            <Route path="/creator/earnings" element={<PageTransition><Earnings /></PageTransition>} />
            <Route path="/creator/orders" element={<PageTransition><Orders /></PageTransition>} />
          </Route>
        </Route>
        
        {/* 404 Catch-All */}
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const location = useLocation();
  const isAgentForge = location.pathname === '/';

  if (isAgentForge) {
    return (
      <>
        <ScrollToTop />
        <AnimatedRoutes />
      </>
    );
  }

  return (
    <MainLayout>
      <ScrollToTop />
      <AnimatedRoutes />
    </MainLayout>
  );
}

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
