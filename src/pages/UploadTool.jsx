import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, Rocket, Info, CheckCircle, Plus, Layout, Zap, Shield, ArrowRight, ArrowLeft } from 'lucide-react';
import { creatorService } from '../api/creator';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

const UploadTool = () => {
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    category: 'Development',
    price: '',
    description: '',
  });

  const categories = ['Development', 'Data Science', 'Marketing', 'Customer Service', 'Design', 'Security'];

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleFinalize = async () => {
    setIsProcessing(true);
    try {
      const result = await creatorService.uploadAgent(formData);
      if (result.success) {
        setIsProcessing(false);
        setIsSuccess(true);
      }
    } catch (err) {
      setIsProcessing(false);
      alert('Upload failed. Please try again.');
    }
  };

  if (isSuccess) {
    return (
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center min-h-[60vh]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-24 h-24 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
            <CheckCircle className="w-12 h-12 text-[var(--color-primary)]" />
          </div>
          <h2 className="text-4xl font-manrope font-extrabold text-[var(--color-on-surface)] mb-4 tracking-tight">Agent Initialized</h2>
          <p className="text-[var(--color-secondary)] font-semibold mb-10 max-w-sm mx-auto leading-relaxed">
            Your asset "{formData.name}" has been successfully published to the Aivora marketplace.
          </p>
          <Button size="lg" onClick={() => window.location.href = '/dashboard'}>Return to Command Center</Button>
        </motion.div>
      </div>
    );
  }

  if (isProcessing) {
    return (
      <div className="w-full max-w-4xl mx-auto flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="w-20 h-20 border-4 border-[var(--color-primary)]/20 border-t-[var(--color-primary)] rounded-full animate-spin mx-auto mb-8" />
          <h2 className="text-2xl font-manrope font-extrabold text-[var(--color-on-surface)] mb-2 tracking-tight">Architecting Identity...</h2>
          <p className="text-[var(--color-secondary)] text-sm font-bold uppercase tracking-widest opacity-60">Synchronizing with Aivora Core</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-12 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-primary)]/5 text-[var(--color-primary)] text-[0.65rem] font-bold uppercase tracking-widest mb-4">
          <Upload size={10} /> Creator Initiative
        </div>
        <h1 className="text-4xl md:text-5xl font-manrope font-extrabold text-[var(--color-on-surface)] tracking-tight mb-4">
          Publish <span className="text-[var(--color-primary)]">New Agent</span>
        </h1>
        <p className="text-[var(--color-secondary)] font-semibold text-lg max-w-2xl leading-relaxed opacity-80">
          Initialize your digital asset in the Aivora ecosystem. Our precision engineering guidelines ensure maximum visibility.
        </p>
      </div>

      <div className="flex gap-4 mb-12">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex-1 h-1.5 rounded-full bg-[var(--color-surface-low)] overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: step >= s ? '100%' : '0%' }}
              className="h-full bg-[var(--color-primary)]"
            />
          </div>
        ))}
      </div>

      <Card className="!bg-[var(--color-surface-low)] !border-none !rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-[var(--color-primary)]/5">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div 
              key="step1"
              initial={{ opacity: 0, x: 20 }} 
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="text-2xl font-manrope font-extrabold text-[var(--color-on-surface)] mb-8 tracking-tight">Basic Credentials</h2>
              <div className="space-y-8">
                <Input 
                  label="AGENT NAME" 
                  placeholder="e.g. Nexus Flow Optimizer" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                <div className="space-y-3">
                  <label className="text-[0.65rem] font-manrope font-extrabold text-[var(--color-secondary)] uppercase tracking-[0.2em]">Primary Domain</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {categories.map(cat => (
                      <button 
                        key={cat}
                        onClick={() => setFormData({...formData, category: cat})}
                        className={`px-4 py-3 rounded-xl text-xs font-bold transition-all border ${formData.category === cat ? 'bg-[var(--color-primary)]/10 border-[var(--color-primary)] text-[var(--color-primary)]' : 'bg-white border-[var(--color-outline-variant)]/20 text-[var(--color-secondary)] hover:border-[var(--color-primary)]/40'}`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
                <Input 
                  label="HONORARIUM (USD)" 
                  placeholder="29.00" 
                  type="number"
                  value={formData.price}
                  onChange={(e) => setFormData({...formData, price: e.target.value})}
                />
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div 
              key="step2"
              initial={{ opacity: 0, x: 20 }} 
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="text-2xl font-manrope font-extrabold text-[var(--color-on-surface)] mb-8 tracking-tight">Architectural Narrative</h2>
              <div className="space-y-8">
                <div className="space-y-3">
                  <label className="text-[0.65rem] font-manrope font-extrabold text-[var(--color-secondary)] uppercase tracking-[0.2em]">Detailed Description</label>
                  <textarea 
                    className="w-full bg-white border border-[var(--color-outline-variant)]/20 rounded-2xl p-6 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 min-h-[200px]"
                    placeholder="Explain the precision benefits, core logic, and intended workflows of your agent..."
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                  />
                </div>
                <div className="p-6 bg-[var(--color-primary)]/5 rounded-2xl border border-dashed border-[var(--color-primary)]/20">
                  <div className="flex items-center gap-3 mb-3 text-[var(--color-primary)]">
                     <Info size={18} />
                     <span className="font-manrope font-extrabold text-xs uppercase tracking-widest">Listing Tip</span>
                  </div>
                  <p className="text-[var(--color-secondary)] text-[0.7rem] font-medium leading-relaxed">
                    Agents with clear, benefit-driven descriptions see a 45% higher acquisition rate. Focus on the transformation.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div 
              key="step3"
              initial={{ opacity: 0, x: 20 }} 
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="text-2xl font-manrope font-extrabold text-[var(--color-on-surface)] mb-8 tracking-tight">Payload Initialization</h2>
              <div className="border-2 border-dashed border-[var(--color-outline-variant)]/30 rounded-[2rem] p-12 text-center hover:border-[var(--color-primary)]/30 transition-all cursor-pointer bg-white group">
                <div className="w-20 h-20 rounded-full bg-[var(--color-primary)]/5 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Upload size={32} className="text-[var(--color-primary)]" />
                </div>
                <p className="text-[var(--color-on-surface)] font-manrope font-extrabold text-lg mb-2">Upload Agent Core</p>
                <p className="text-[var(--color-secondary)] text-sm font-semibold mb-8 opacity-60">Upload a single .zip file containing source logic and docs.</p>
                <Button size="sm" variant="outline">Browse Files</Button>
              </div>
              
              <div className="mt-12 space-y-4">
                <div className="flex items-center gap-3">
                  <Shield size={16} className="text-[var(--color-primary)]" />
                  <span className="text-[0.65rem] font-manrope font-extrabold text-[var(--color-secondary)] uppercase tracking-[0.1em]">Verification Level 1 active</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-[var(--color-primary)]" />
                  <span className="text-[0.65rem] font-manrope font-extrabold text-[var(--color-secondary)] uppercase tracking-[0.1em]">Instant fulfillment mapped</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-between items-center mt-12 pt-12 border-t border-[var(--color-outline-variant)]/10">
          <Button 
            variant="ghost" 
            onClick={prevStep} 
            disabled={step === 1}
            className={step === 1 ? 'opacity-0 pointer-events-none' : ''}
            leftIcon={<ArrowLeft size={18} />}
          >
            Previous
          </Button>
          <Button 
            onClick={step === 3 ? handleFinalize : nextStep}
            rightIcon={step === 3 ? <Rocket size={18} /> : <ArrowRight size={18} />}
          >
            {step === 3 ? 'Publish Asset' : 'Continue'}
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default UploadTool;
