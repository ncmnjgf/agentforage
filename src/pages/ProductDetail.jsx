import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Copy, Share2, Star, ShieldCheck, Clock, Download, CreditCard } from 'lucide-react';
import * as Icons from 'lucide-react';
import { useProductStore } from '../store/productStore';
import { useAuthStore } from '../store/authStore';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Modal from '../components/ui/Modal';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentProduct: product, fetchProductById, isLoading } = useProductStore();
  const { user, isAuthenticated } = useAuthStore();
  const purchase = useProductStore(state => state.purchase);
  
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  useEffect(() => {
    if (id) fetchProductById(id);
  }, [id, fetchProductById]);

  const isOwned = user?.purchasedItems?.includes(product?.id || '');

  // Set the selected product in global state when component mounts
  // Ignore exhaustive-deps as we only want to set it when product changes
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // Set current product logic minimized
  useEffect(() => {
    // Current product is already set by fetchProductById in the store
    // No additional local state sync needed for basic detail rendering
  }, [product?.id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--color-surface)]">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-20 h-20 bg-[var(--color-surface-low)] rounded-full mb-6" />
          <div className="w-48 h-6 bg-[var(--color-surface-low)] rounded mb-4" />
          <div className="w-32 h-4 bg-[var(--color-surface-low)] rounded opacity-50" />
        </div>
      </div>
    );
  }

  if (!product && !isLoading) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
        <h2 className="text-3xl font-bold text-slate-100 mb-4">Agent Not Found</h2>
        <p className="text-slate-400 mb-8">The AI agent you are looking for doesn't exist or has been removed.</p>
        <Link to="/browse">
          <Button leftIcon={<ArrowLeft className="w-4 h-4" />}>Back to Browse</Button>
        </Link>
      </div>
    );
  }

  const IconComponent = Icons[product.iconName] || Icons.HelpCircle;

  const features = [
    'Fully autonomous execution',
    'Customizable system prompts',
    '24/7 continuous operation',
    'Secure API integrations',
    'Real-time analytics dashboard',
    'Dedicated support channel'
  ];

  const handlePurchaseClick = () => {
    if (!isAuthenticated) {
      navigate('/login', { state: { from: { pathname: `/product/${product.id}` } } });
      return;
    }
    setIsCheckoutModalOpen(true);
  };

  const handleConfirmPurchase = async () => {
    setIsProcessing(true);
    const success = await purchase(product.id);
    if (success) {
      setIsProcessing(false);
      setIsSuccess(true);
      
      // Auto-close success modal after 2.5s and redirect to dashboard
      setTimeout(() => {
        setIsCheckoutModalOpen(false);
        setIsSuccess(false);
        navigate('/dashboard');
      }, 2500);
    } else {
      setIsProcessing(false);
      alert('Initialization failed. Please try again.');
    }
  };

  const handleDownload = () => {
    alert(`Downloading ${product.title} core files... Check your Downloads folder.`);
  };

  return (
    <div className="w-full pb-32 bg-[var(--color-surface)]">
      
      {/* Main Split Layout */}
      <div className="max-w-[1400px] mx-auto px-6 pt-32 pb-20 relative z-10">
        
        <Link to="/browse" className="inline-flex items-center gap-2 text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-all mb-10 font-manrope font-extrabold text-xs uppercase tracking-widest">
          <ArrowLeft className="w-4 h-4" />
          Marketplace
        </Link>
        
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Column: Product Info & Pricing */}
          <div className="w-full lg:w-5/12 shrink-0">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-surface-low)] flex items-center justify-center border border-[var(--color-outline-variant)]/20 text-[var(--color-primary)] shadow-md">
                   <IconComponent className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full text-[0.6rem] font-manrope font-extrabold tracking-widest uppercase">
                  {product.tag}
                </span>
                <span className="flex items-center gap-1.5 text-[var(--color-secondary)] text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-[#f59e0b] text-[#f59e0b]" />
                  <span className="text-[var(--color-on-surface)]">{product.rating}</span>
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-manrope font-extrabold text-[var(--color-on-surface)] mb-4 tracking-tight leading-[1.1]">
                {product.title}
              </h1>
              
              <p className="text-lg text-[var(--color-secondary)] font-semibold leading-relaxed mb-10">
                {product.description}
              </p>

              {/* Pricing & Acquisition Block */}
              <div className="p-8 rounded-3xl bg-[var(--color-surface-low)] border border-[var(--color-outline-variant)]/40 shadow-xl shadow-[var(--color-primary)]/5 mb-8">
                <div className="flex justify-between items-end mb-8">
                  <div>
                    <h3 className="text-[0.6rem] font-manrope font-extrabold text-[var(--color-secondary)] uppercase tracking-[0.2em] mb-2">Perpetual License</h3>
                    <div className="text-4xl font-manrope font-extrabold text-[var(--color-primary)] tracking-tight">{isOwned ? 'Licensed' : product.price}</div>
                  </div>
                  <div className="flex items-center gap-2">
                     <div className="w-8 h-8 rounded-full bg-[var(--color-surface-lowest)] flex items-center justify-center overflow-hidden border border-[var(--color-outline-variant)]/20 text-xs font-bold text-[var(--color-primary)]">
                       {product.creator.charAt(0)}
                     </div>
                     <div className="text-xs font-bold text-[var(--color-secondary)]">By <span className="text-[var(--color-on-surface)]">{product.creator}</span></div>
                  </div>
                </div>

                {isOwned ? (
                  <Button 
                    size="lg" 
                    fullWidth 
                    className="py-4 font-manrope font-extrabold uppercase tracking-widest !bg-[var(--color-primary)] shadow-lg shadow-[var(--color-primary)]/20"
                    leftIcon={<Download className="w-5 h-5" />}
                    onClick={handleDownload}
                  >
                    Deploy Asset
                  </Button>
                ) : (
                  <Button 
                    size="lg" 
                    fullWidth 
                    className="py-4 font-manrope font-extrabold uppercase tracking-widest !bg-[var(--color-primary)] shadow-lg shadow-[var(--color-primary)]/20"
                    onClick={handlePurchaseClick}
                  >
                    {isAuthenticated ? 'Buy Agent' : 'Login to Buy'}
                  </Button>
                )}
                
                <div className="mt-6 flex items-center justify-center gap-6 text-[0.65rem] font-bold text-[var(--color-secondary)] uppercase tracking-widest opacity-70">
                  <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4"/> Verified Secure</span>
                  <span className="flex items-center gap-2"><Clock className="w-4 h-4"/> Instant Deploy</span>
                </div>
              </div>
              
            </motion.div>
          </div>

          {/* Right Column: Interactive Sandbox (Hero Visual) */}
          <div className="w-full lg:w-7/12 mt-10 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full relative group"
            >
              {/* Glow effects */}
              <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-br from-[var(--color-primary)]/20 via-transparent to-[var(--color-primary)]/5 opacity-50 blur-2xl group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative rounded-[2rem] bg-[#0a0a0c] border border-white/10 shadow-2xl overflow-hidden flex flex-col h-[500px]">
                {/* Sandbox Header */}
                <div className="h-14 bg-white/5 border-b border-white/5 flex items-center justify-between px-6 backdrop-blur-md">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-primary)] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-primary)]"></span>
                    </span>
                    <span className="text-[0.65rem] font-manrope font-extrabold text-white/50 uppercase tracking-[0.2em]">Live Sandbox</span>
                  </div>
                </div>

                {/* Sandbox Body (Fake Terminal/Chat) */}
                <div className="flex-1 p-6 overflow-hidden font-mono text-sm relative">
                  <div className="space-y-4 text-white/70">
                    <div className="flex gap-4">
                      <span className="text-[var(--color-primary)] opacity-60">❯</span>
                      <p>Initializing Aivora environment...</p>
                    </div>
                    <div className="flex gap-4 animate-in fade-in slide-in-from-bottom-2 delay-150 duration-500">
                      <span className="text-[var(--color-primary)] opacity-60">❯</span>
                      <p>Mounting {product.title} architecture model...</p>
                    </div>
                    <div className="flex gap-4 animate-in fade-in slide-in-from-bottom-2 delay-300 duration-500">
                      <span className="text-green-400 opacity-80">✓</span>
                      <p className="text-white/90">System successfully synchronized. Core ready.</p>
                    </div>
                    
                    <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10 animate-in zoom-in-95 delay-700 duration-700">
                      <p className="text-xs text-white/50 mb-2">// SAMPLE OUTPUT / DEMONSTRATION</p>
                      <p className="text-white">This environment provides a secure, isolated sandbox to evaluate the agent's capabilities prior to acquisition. The computational pathways are strictly regulated.</p>
                      <div className="mt-4 flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
                        <div className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse delay-75" />
                        <div className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse delay-150" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sandbox Input Context */}
                <div className="p-4 border-t border-white/5 bg-white/[0.02]">
                  <div className="flex items-center p-3 rounded-xl bg-white/5 border border-white/10 cursor-not-allowed group-hover:border-[var(--color-primary)]/30 transition-colors">
                    <span className="text-[var(--color-primary)] mr-3 opacity-60">❯</span>
                    <span className="text-white/30 text-xs font-manrope">Acquire License to unlock full terminal access...</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Anatomy & Features Section underneath */}
      <div className="max-w-[1400px] mx-auto px-6 mt-10 grid grid-cols-1 lg:grid-cols-3 gap-16 relative z-10">
        <div className="lg:col-span-1">
          <h2 className="text-[0.7rem] font-manrope font-extrabold text-[var(--color-primary)] uppercase tracking-[0.2em] mb-6">Asset Anatomy</h2>
          <div className="text-[var(--color-secondary)] font-semibold leading-relaxed space-y-5 text-sm">
            <p>
              The {product.title} represents the pinnacle of architectural automation, engineered specifically for excellence within the {product.tag.toLowerCase()} ecosystem. 
            </p>
            <p>
              Leveraging advanced reasoning protocols and high-fidelity foundational models, this asset integrates seamlessly into your digital infrastructure to execute complex multi-layered tasks with surgical precision.
            </p>
            <div className="pt-6 border-t border-[var(--color-outline-variant)]/20 mt-6">
              <h3 className="text-xs font-bold text-[var(--color-on-surface)] mb-4 uppercase tracking-widest">Included Capabilities</h3>
              <ul className="space-y-3">
                {features.slice(0, 4).map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs text-[var(--color-secondary)]">
                    <Check className="w-3.5 h-3.5 text-[var(--color-primary)]" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
           <h2 className="text-[0.7rem] font-manrope font-extrabold text-[var(--color-primary)] uppercase tracking-[0.2em] mb-6">Deployment Certification</h2>
           <div className="p-10 rounded-3xl bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/10 flex flex-col sm:flex-row items-center gap-10">
            <div className="w-24 h-24 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center shrink-0 shadow-inner">
              <ShieldCheck className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-2xl font-manrope font-extrabold text-[var(--color-on-surface)] mb-3">Aivora Verified Sandbox</h3>
              <p className="text-[var(--color-secondary)] font-semibold leading-relaxed mb-6">
                This agent operates within SOC2-compliant constraints and has been rigorously validated by our automated containment system. It guarantees zero data-exfiltration and full sovereign control upon deployment.
              </p>
              <div className="flex flex-wrap gap-4">
                 <span className="px-4 py-2 rounded-xl bg-white border border-[var(--color-outline-variant)]/20 text-xs font-bold shadow-sm inline-flex items-center gap-2 text-[var(--color-secondary)]">
                   <Check className="w-4 h-4 text-green-500"/> Penetration Tested
                 </span>
                 <span className="px-4 py-2 rounded-xl bg-white border border-[var(--color-outline-variant)]/20 text-xs font-bold shadow-sm inline-flex items-center gap-2 text-[var(--color-secondary)]">
                   <Check className="w-4 h-4 text-green-500"/> Isolated Runtime
                 </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Modal */}
      <Modal 
        isOpen={isCheckoutModalOpen} 
        onClose={() => !isProcessing && !isSuccess && setIsCheckoutModalOpen(false)}
        title={isSuccess ? "Agent Purchased" : "Complete Purchase"}
      >
        <div className="pt-2">
          {isSuccess ? (
            <div className="py-10 flex flex-col items-center justify-center text-center">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                className="w-24 h-24 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center mb-10 shadow-inner"
              >
                <Check className="w-12 h-12 text-[var(--color-primary)]" />
              </motion.div>
              <h3 className="text-3xl font-manrope font-extrabold text-[var(--color-on-surface)] mb-3">Sovereignty Granted</h3>
              <p className="text-[var(--color-secondary)] font-semibold max-w-xs leading-relaxed">
                You now possess {product.title}. Synchronizing with your command center...
              </p>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-6 mb-10 p-6 bg-[var(--color-surface-low)] rounded-3xl border border-[var(--color-outline-variant)]/10 shadow-inner">
                <div className={`w-20 h-20 rounded-2xl bg-[var(--color-surface-lowest)] flex items-center justify-center shrink-0 shadow-sm border border-[var(--color-outline-variant)]/20`}>
                  <IconComponent className="w-10 h-10 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h4 className="font-manrope font-extrabold text-[var(--color-on-surface)] text-xl mb-1">{product.title}</h4>
                  <p className="text-[var(--color-secondary)] text-xs font-bold uppercase tracking-widest opacity-60">Universal Asset License</p>
                </div>
                <div className="ml-auto text-3xl font-manrope font-extrabold text-[var(--color-on-surface)] tracking-tighter">
                  {product.price}
                </div>
              </div>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4 p-5 rounded-2xl border border-[var(--color-outline-variant)]/40 bg-[var(--color-surface-low)] pointer-events-none opacity-60">
                  <CreditCard className="w-6 h-6 text-[var(--color-secondary)]" />
                  <div className="flex-1">
                    <p className="text-[var(--color-on-surface)] font-manrope font-extrabold tracking-widest">•••• •••• •••• 4242</p>
                    <p className="text-[var(--color-secondary)] text-xs font-bold uppercase opacity-60">Vault Protected</p>
                  </div>
                </div>
                <p className="text-[0.6rem] font-bold text-[var(--color-secondary)] uppercase tracking-[0.15em] flex items-center justify-center gap-2 opacity-50">
                  <ShieldCheck className="w-3.5 h-3.5" /> Synchronized via Sovereign Vault
                </p>
              </div>
              
              <Button 
                fullWidth 
                size="lg" 
                onClick={handleConfirmPurchase}
                isLoading={isProcessing}
                disabled={isProcessing}
                className="py-5 font-manrope font-extrabold uppercase tracking-[0.2em] shadow-2xl shadow-[var(--color-primary)]/20"
              >
                {isProcessing ? 'Synchronizing...' : `Initialize Access (${product.price})`}
              </Button>
            </>
          )}
        </div>
      </Modal>

    </div>
  );
};

export default ProductDetail;
