import { useParams, Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { useProductStore } from '../store/productStore';
import { motion } from 'framer-motion';
import { Download, FileText, Shield, ArrowLeft, CheckCircle, ExternalLink, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const DownloadPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuthStore();
  const { products } = useProductStore();
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadStep, setDownloadStep] = useState('ready'); // ready, preparing, done

  const product = products.find(p => p.id === id);
  const isOwned = user?.purchasedItems?.includes(id || '');

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    } else if (!isOwned) {
      navigate('/my-purchases');
    }
  }, [isAuthenticated, isOwned, navigate]);

  if (!product) return null;

  const handleDownload = () => {
    setDownloadStep('preparing');
    setIsDownloading(true);
    
    // Simulate server zipping and preparing assets
    setTimeout(() => {
      setDownloadStep('done');
      setIsDownloading(false);
      
      // Auto-trigger native browser download (mocked)
      const link = document.createElement('a');
      link.href = '#';
      link.setAttribute('download', `${product.title.replace(/\s+/g, '_')}_Bundle.zip`);
      document.body.appendChild(link);
      // link.click(); // commented out for simulation
      setTimeout(() => document.body.removeChild(link), 100);
    }, 2500);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 w-full min-h-[calc(100vh-88px)] bg-[var(--color-surface)]">
      <Link to="/my-purchases" className="inline-flex items-center gap-2 text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-all mb-12 font-manrope font-extrabold text-xs uppercase tracking-widest">
        <ArrowLeft className="w-4 h-4" />
        Back to My Agents
      </Link>

      <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-primary)]/5 text-[var(--color-primary)] text-[0.65rem] font-bold uppercase tracking-widest mb-6">
            <Shield size={10} /> Secure Acquisition
          </div>
          <h1 className="text-4xl md:text-5xl font-manrope font-extrabold text-[var(--color-on-surface)] tracking-tight mb-6">
            Initialize <span className="text-[var(--color-primary)]">{product.title}</span>
          </h1>
          <p className="text-[var(--color-secondary)] font-semibold text-lg max-w-2xl leading-relaxed mb-10 opacity-80">
            You are now entering the secure fulfillment layer. Download your precision-engineered AI core and review the architectural integration guide.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <Button 
              size="lg" 
              className="px-10 h-16 !rounded-2xl shadow-xl shadow-[var(--color-primary)]/20"
              onClick={handleDownload}
              disabled={isDownloading || downloadStep === 'done'}
              loading={isDownloading}
              leftIcon={downloadStep === 'done' ? <CheckCircle size={20} /> : <Download size={20} />}
            >
              {downloadStep === 'ready' ? 'Download Agent Bundle' : 
               downloadStep === 'preparing' ? 'Preparing Secure File...' : 
               'Download Complete'}
            </Button>
            <Button variant="ghost" className="h-16 px-10 !rounded-2xl font-manrope font-bold text-sm tracking-widest">
              View Documentation
            </Button>
          </div>
        </div>

        <Card className="w-full md:w-80 !bg-[var(--color-surface-low)] !border-none !rounded-[2.5rem] p-8">
          <h3 className="text-[var(--color-on-surface)] font-manrope font-bold text-[0.65rem] uppercase tracking-[0.15em] mb-6 opacity-60">Asset Anatomy</h3>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="mt-1 p-2 bg-white rounded-xl shadow-sm">
                <FileText size={16} className="text-[var(--color-primary)]" />
              </div>
              <div>
                <p className="text-[var(--color-on-surface)] font-manrope font-extrabold text-xs">core_logic.zip</p>
                <p className="text-[var(--color-secondary)] text-[0.65rem] font-bold opacity-60">12.4 MB • Source Files</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 p-2 bg-white rounded-xl shadow-sm">
                <Globe size={16} className="text-[var(--color-primary)]" />
              </div>
              <div>
                <p className="text-[var(--color-on-surface)] font-manrope font-extrabold text-xs">api_manifest.json</p>
                <p className="text-[var(--color-secondary)] text-[0.65rem] font-bold opacity-60">1.2 KB • Integration Map</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 p-2 bg-white rounded-xl shadow-sm">
                <CheckCircle size={16} className="text-[var(--color-primary)]" />
              </div>
              <div>
                <p className="text-[var(--color-on-surface)] font-manrope font-extrabold text-xs">license_key.txt</p>
                <p className="text-[var(--color-secondary)] text-[0.65rem] font-bold opacity-60">32 Bytes • Active Seat</p>
              </div>
            </li>
          </ul>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: 'Setup Guide', icon: <FileText size={24} />, desc: 'Learn how to initialize the agent core in your local environment.' },
          { title: 'API Reference', icon: <ExternalLink size={24} />, desc: 'Explore the full list of available endpoints and system hooks.' },
          { title: 'Verified Security', icon: <Shield size={24} />, desc: 'All assets are scanned for malicious architectural patterns before listing.' }
        ].map((feat, i) => (
          <Card key={i} className="!bg-[var(--color-surface-low)]/50 !border-none !rounded-[2rem] p-8 group hover:bg-[var(--color-surface-low)] transition-all">
            <div className="p-4 rounded-2xl bg-white shadow-sm w-fit mb-6 text-[var(--color-primary)] group-hover:scale-110 transition-transform">
              {feat.icon}
            </div>
            <h4 className="text-lg font-manrope font-extrabold text-[var(--color-on-surface)] mb-3 tracking-tight">{feat.title}</h4>
            <p className="text-[var(--color-secondary)] text-xs font-semibold leading-relaxed opacity-60">{feat.desc}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DownloadPage;
