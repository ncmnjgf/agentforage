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
  const { products, setSelectedProduct } = useProductStore();
  const { user, isAuthenticated, purchase } = useAuthStore();
  
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const product = products.find(p => p.id === id);
  const isOwned = user?.purchasedItems?.includes(product?.id || '');

  // Set the selected product in global state when component mounts
  // Ignore exhaustive-deps as we only want to set it when product changes
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setSelectedProduct(product || null);
    
    // Clear on unmount
    return () => setSelectedProduct(null);
  }, [product?.id]);

  if (!product) {
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

  const handleConfirmPurchase = () => {
    setIsProcessing(true);
    // Simulate secure transaction
    setTimeout(() => {
      purchase(product.id);
      setIsProcessing(false);
      setIsSuccess(true);
      
      // Auto-close success modal after 2.5s and redirect to dashboard
      setTimeout(() => {
        setIsCheckoutModalOpen(false);
        setIsSuccess(false);
        navigate('/dashboard');
      }, 2500);
    }, 1500);
  };

  const handleDownload = () => {
    alert(`Downloading ${product.title} core files... Check your Downloads folder.`);
  };

  return (
    <div className="w-full pb-20">
      
      {/* Product Hero Header */}
      <div className={`w-full bg-gradient-to-br ${product.color} pt-20 pb-24 px-6 relative overflow-hidden border-b border-slate-800`}>
        <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <Link to="/browse" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 font-medium">
            <ArrowLeft className="w-4 h-4" />
            Back to agents
          </Link>
          
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className={`w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-gradient-to-br ${product.color} flex items-center justify-center shrink-0 shadow-2xl shadow-purple-900/20 border border-white/10`}
            >
              <IconComponent className="w-16 h-16 text-white" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="flex-grow"
            >
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 text-purple-300 rounded-full text-xs font-bold tracking-wider uppercase">
                  {product.tag}
                </span>
                <span className="flex items-center gap-1 text-slate-300 text-sm">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="font-medium text-white">{product.rating}</span>
                  <span className="text-slate-500">({product.sales} users)</span>
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                {product.title}
              </h1>
              
              <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
                {product.description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content Layout */}
      <div className="max-w-6xl mx-auto px-6 mt-12 flex flex-col lg:flex-row gap-12">
        
        {/* Left Column: Details & Features */}
        <div className="w-full lg:w-2/3 space-y-12">
          
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-slate-100 mb-4">About this Agent</h2>
            <div className="prose prose-invert prose-slate max-w-none text-slate-400 leading-relaxed">
              <p>
                The {product.title} is an advanced, self-iterating AI solution designed specifically for the {product.tag.toLowerCase()} industry. 
                Built upon the latest foundational models, it seamlessly integrates into your existing systems to automate complex, multi-step tasks that traditionally required human intervention.
              </p>
              <p className="mt-4">
                Whether you're a startup looking to scale operations, or an enterprise seeking unparalleled efficiency, this agent provides context-aware reasoning, reliable execution, and transparent reporting. Join {product.sales} other users who have already transformed their workflow.
              </p>
            </div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-slate-100 mb-6">Key Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50">
                  <div className="p-1 rounded bg-purple-500/20 text-purple-400 mt-0.5 shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-slate-300">{feature}</span>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="p-6 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex flex-col sm:flex-row items-center gap-6"
          >
            <div className="p-4 bg-blue-500/20 text-blue-400 rounded-full shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-100 mb-1">Enterprise Grade Security</h3>
              <p className="text-slate-400 text-sm">
                This agent has been audited by Aivora security experts. All data is encrypted in transit and at rest. SOC2 Compliant.
              </p>
            </div>
          </motion.section>
          
        </div>

        {/* Right Column: Pricing & Creator Card */}
        <div className="w-full lg:w-1/3 space-y-6">
          
          {/* Purchase Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="sticky top-[120px]"
          >
            <Card hoverEffect={false} padding="lg" className="border-slate-700">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">License Type</h3>
              <div className="flex items-end gap-2 mb-6">
                <span className="text-4xl font-extrabold text-white">{isOwned ? 'Owned' : product.price}</span>
              </div>
              
              <div className="space-y-4 mb-8">
                {isOwned ? (
                  <Button 
                    size="lg" 
                    fullWidth 
                    className="text-base py-3.5 shadow-purple-500/20 shadow-xl"
                    leftIcon={<Download className="w-5 h-5" />}
                    onClick={handleDownload}
                  >
                    Download Agent
                  </Button>
                ) : (
                  <Button 
                    size="lg" 
                    fullWidth 
                    className="text-base py-3.5 shadow-purple-500/20 shadow-xl"
                    onClick={handlePurchaseClick}
                  >
                    {isAuthenticated ? 'Purchase License' : 'Login to Purchase'}
                  </Button>
                )}
                
                <Button variant="secondary" size="lg" fullWidth leftIcon={<Copy className="w-4 h-4" />}>
                  Clone Template
                </Button>
              </div>

              <div className="flex flex-col gap-3 text-sm text-slate-400 border-t border-slate-800 pt-6">
                <div className="flex justify-between">
                  <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-slate-500" /> Setup Time</span>
                  <span className="text-slate-300 font-medium">~5 mins</span>
                </div>
                <div className="flex justify-between">
                  <span className="flex items-center gap-2"><ArrowLeft className="w-4 h-4 text-slate-500" /> Refunds</span>
                  <span className="text-slate-300 font-medium">14-day Guarantee</span>
                </div>
              </div>

              <div className="mt-6 flex gap-2">
                <Button variant="outline" size="sm" fullWidth leftIcon={<Share2 className="w-4 h-4" />} className="text-slate-400 border-slate-700 hover:text-white hover:bg-slate-800">
                  Share
                </Button>
              </div>
            </Card>

            {/* Creator Info */}
            <Card hoverEffect={false} padding="md" className="mt-6 border-slate-700 bg-slate-800/30 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 mx-auto mb-4 flex items-center justify-center text-xl font-bold text-white shadow-lg">
                {product.creator.charAt(0)}
              </div>
              <h4 className="text-slate-300 text-sm mb-1">Created by</h4>
              <p className="text-white font-bold text-lg">{product.creator}</p>
              <div className="flex items-center justify-center gap-2 text-sm text-slate-400 mt-2">
                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                <span>Top Rated Seller</span>
              </div>
              <Button variant="ghost" size="sm" fullWidth className="mt-4 text-purple-400">
                View Profile
              </Button>
            </Card>
          </motion.div>
          
        </div>

      </div>

      {/* Checkout Modal */}
      <Modal 
        isOpen={isCheckoutModalOpen} 
        onClose={() => !isProcessing && !isSuccess && setIsCheckoutModalOpen(false)}
        title={isSuccess ? "Payment Successful" : "Secure Checkout"}
      >
        <div className="pt-2">
          {isSuccess ? (
            <div className="py-8 flex flex-col items-center justify-center text-center">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6"
              >
                <Check className="w-10 h-10 text-green-400" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-2">License Acquired!</h3>
              <p className="text-slate-400">
                You now own {product.title}. Redirecting you to your dashboard to download...
              </p>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-4 mb-8 p-4 bg-slate-950/50 rounded-xl border border-slate-800">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center shrink-0`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-100">{product.title}</h4>
                  <p className="text-slate-400 text-sm">Lifetime Commercial License</p>
                </div>
                <div className="ml-auto text-xl font-bold text-white">
                  {product.price}
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 p-4 rounded-xl border border-slate-700 bg-slate-800 pointer-events-none opacity-50">
                  <CreditCard className="w-6 h-6 text-slate-400" />
                  <div className="flex-1">
                    <p className="text-slate-300 font-medium">•••• •••• •••• 4242</p>
                    <p className="text-slate-500 text-sm">Expires 12/28</p>
                  </div>
                </div>
                <p className="text-xs text-slate-500 flex items-center gap-1 mt-2">
                  <ShieldCheck className="w-3 h-3" /> Payments process securely via Stripe Mock.
                </p>
              </div>
              
              <Button 
                fullWidth 
                size="lg" 
                onClick={handleConfirmPurchase}
                isLoading={isProcessing}
                disabled={isProcessing}
              >
                {isProcessing ? 'Processing...' : `Pay ${product.price}`}
              </Button>
            </>
          )}
        </div>
      </Modal>

    </div>
  );
};

export default ProductDetail;
