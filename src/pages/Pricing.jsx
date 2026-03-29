import { motion } from 'framer-motion';
import { Check, X, Zap, Shield, Users, Building2, ArrowRight, Sparkles, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

/* ─── Demo Data ─── */
const plans = [
  {
    id: 'free',
    name: 'Explorer',
    badge: null,
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: 'Perfect for exploring the ecosystem and getting started.',
    icon: Users,
    color: 'bg-[var(--color-surface-low)]',
    borderColor: 'border-[var(--color-outline-variant)]/20',
    ctaText: 'Start Exploring',
    ctaVariant: 'secondary',
    features: [
      { text: 'Access to 50+ curated assets', included: true },
      { text: 'Basic architectural tools', included: true },
      { text: 'Community ecosystem access', included: true },
      { text: 'Standard deployment', included: true },
      { text: 'Priority curation', included: false },
      { text: 'Personal success partner', included: false },
      { text: 'Custom brand integration', included: false },
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    badge: 'Best Value',
    monthlyPrice: 49,
    yearlyPrice: 39,
    description: 'For professionals who demand precision and excellence.',
    icon: Zap,
    color: 'bg-[var(--color-primary)]',
    borderColor: 'border-[var(--color-primary)]/40',
    ctaText: 'Get Started with Pro',
    ctaVariant: 'primary',
    features: [
      { text: 'Access to 2,000+ premium agents', included: true },
      { text: 'Unlimited precision runs', included: true },
      { text: 'Priority support (24hr)', included: true },
      { text: 'Advanced performance metrics', included: true },
      { text: 'Full ecosystem API', included: true },
      { text: 'Custom brand integration', included: true },
      { text: 'Collaborative workspaces', included: false },
    ],
  },
  {
    id: 'team',
    name: 'Studio',
    badge: null,
    monthlyPrice: 149,
    yearlyPrice: 119,
    description: 'Built for agencies and studios collaborating at scale.',
    icon: Shield,
    color: 'bg-[var(--color-secondary)]',
    borderColor: 'border-[var(--color-secondary)]/20',
    ctaText: 'Start Studio Trial',
    ctaVariant: 'secondary',
    features: [
      { text: 'Everything in Pro', included: true },
      { text: 'Up to 20 collaborative seats', included: true },
      { text: 'Shared agent library', included: true },
      { text: 'Role-based access control', included: true },
      { text: 'Comprehensive audit logs', included: true },
      { text: 'Dedicated success partner', included: true },
      { text: 'Enterprise-grade SLA', included: false },
    ],
  },
  {
    id: 'enterprise',
    name: 'Aivora Enterprise',
    badge: null,
    monthlyPrice: null,
    yearlyPrice: null,
    description: 'Bespoke solutions for global enterprises and institutions.',
    icon: Building2,
    color: 'bg-[var(--color-on-surface)]',
    borderColor: 'border-[var(--color-on-surface)]/20',
    ctaText: 'Inquire Now',
    ctaVariant: 'secondary',
    features: [
      { text: 'Everything in Studio', included: true },
      { text: 'Unlimited collaborative seats', included: true },
      { text: 'On-premise deployment', included: true },
      { text: 'Bespoke AI fine-tuning', included: true },
      { text: 'Guaranteed 99.99% uptime', included: true },
      { text: 'Strategic partnership', included: true },
      { text: '24/7 Elite infrastructure', included: true },
    ],
  },
];

const faqs = [
  { q: 'Can I evolve my plan at any time?', a: 'Yes, you can upgrade or adjust your membership at any time. Changes take effect immediately and are precision prorated.' },
  { q: 'What happens when I reach my limits?', a: 'On the Explorer plan, certain features pause until the next cycle. Architect plans and above feature unlimited architectural runs.' },
  { q: 'Is there a trial for premium plans?', a: 'Indeed. Both Architect and Studio plans include a 14-day discovery period, no commitment required.' },
  { q: 'Are there special rates for educators?', a: 'Absolutely. We offer exclusive privileges for verified educational institutions. Contact us at elite@sovereign.ai.' },
  { q: 'Which payment methods are honored?', a: 'We honor all major cards and digital signatures. Enterprise partners may utilize wire transfers.' },
  { q: 'Can I withdraw my membership?', a: 'Yes, you may withdraw anytime from your command center. You will retain access until the cycle concludes.' },
];

const fadeIn = { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } };
const stagger = { animate: { transition: { staggerChildren: 0.1 } } };

/* ─── Sub-components ─── */

const FeatureRow = ({ text, included }) => (
  <li className="pricing-feature-row">
    {included
      ? <span className="pricing-check !bg-[var(--color-primary)]/10 !text-[var(--color-primary)]"><Check size={13} /></span>
      : <span className="pricing-x !bg-gray-100 !text-gray-400"><X size={13} /></span>
    }
    <span className={`text-sm font-semibold transition-opacity ${included ? 'text-[var(--color-on-surface)]' : 'text-[var(--color-secondary)] opacity-50'}`}>{text}</span>
  </li>
);

const PlanCard = ({ plan, isYearly, delay }) => {
  const isPro = plan.id === 'pro';
  const isEnterprise = plan.id === 'enterprise';
  const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;

  return (
    <motion.div
      variants={{ initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`pricing-card flex flex-col h-full relative p-8 rounded-2xl border border-[var(--color-outline-variant)]/10 transition-all hover:shadow-xl ${isPro ? 'bg-[var(--color-surface-lowest)] shadow-2xl scale-105 z-10 border-[var(--color-primary)]/30 ring-1 ring-[var(--color-primary)]/20' : 'bg-[var(--color-surface-low)] hover:bg-[var(--color-surface-lowest)]'}`}
    >
      {isPro && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[var(--color-primary)] text-white text-[10px] font-bold uppercase tracking-widest shadow-md flex items-center gap-1 whitespace-nowrap">
          <Sparkles size={11} /> {plan.badge}
        </div>
      )}

      {/* Header */}
      <div className="flex-1 flex flex-col">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm ${isPro ? 'bg-[var(--color-primary)]' : 'bg-white border border-[var(--color-outline-variant)]/20'}`}>
          <plan.icon size={22} className={isPro ? 'text-white' : 'text-[var(--color-primary)]'} />
        </div>
        <h3 className="text-2xl font-manrope font-extrabold text-[var(--color-on-surface)] mb-3">{plan.name}</h3>
        <p className="text-sm font-semibold text-[var(--color-secondary)] leading-relaxed mb-8 min-h-[40px]">{plan.description}</p>

        {/* Price */}
        <div className="flex items-baseline gap-1 mb-8">
          {isEnterprise ? (
            <span className="text-3xl font-manrope font-extrabold text-[var(--color-on-surface)]">Bespoke</span>
          ) : (
            <>
              <span className="text-4xl font-manrope font-extrabold text-[var(--color-on-surface)]">${price}</span>
              <span className="text-[var(--color-secondary)] font-bold text-sm">/ mo</span>
            </>
          )}
        </div>

        {/* Feature list */}
        <ul className="mb-10 space-y-4">
          {plan.features.map((f) => (
            <FeatureRow key={f.text} {...f} />
          ))}
        </ul>
      </div>

      {/* CTA at Bottom */}
      <div className="mt-auto pt-4 border-t border-[var(--color-outline-variant)]/10">
        <Link
          to={isEnterprise ? '/contact' : '/signup'}
          className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest transition-all ${
            isPro 
              ? 'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-container)] shadow-lg shadow-[var(--color-primary)]/20' 
              : 'bg-white text-[var(--color-on-surface)] hover:bg-gray-50 border border-[var(--color-outline-variant)]/30 hover:border-[var(--color-outline-variant)]'
          }`}
        >
          {plan.ctaText}
          <ArrowRight size={16} />
        </Link>
      </div>
    </motion.div>
  );
};

const FaqItem = ({ q, a, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      variants={fadeIn}
      className={`p-6 rounded-xl transition-all cursor-pointer ${open ? 'bg-[var(--color-surface-lowest)] shadow-md' : 'bg-[var(--color-surface-low)] hover:bg-[var(--color-surface-lowest)]'}`}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <HelpCircle size={18} className="text-[var(--color-primary)]" />
          <span className="font-manrope font-bold text-[var(--color-on-surface)]">{q}</span>
        </div>
        <span className={`text-[var(--color-secondary)] transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>▾</span>
      </div>
      {open && <p className="mt-4 text-[var(--color-secondary)] text-sm font-semibold leading-relaxed border-t border-[var(--color-outline-variant)]/10 pt-4">{a}</p>}
    </motion.div>
  );
};

/* ═══════════════════════════════════════
   PRICING PAGE
 ═══════════════════════════════════════ */
const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="bg-[var(--color-surface)] min-h-screen pt-32 pb-20">

      {/* ── HERO ── */}
      <section className="max-w-4xl mx-auto px-6 text-center mb-20">
        <motion.div {...fadeIn}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles size={12} /> Elite Architectural Tiers
          </div>
          <h1 className="text-4xl md:text-6xl font-manrope font-extrabold text-[var(--color-on-surface)] tracking-tight mb-6">
            Investment Plans for <br />
            <span className="text-[var(--color-primary)]">Sovereign Creators</span>
          </h1>
          <p className="text-lg text-[var(--color-secondary)] font-semibold leading-relaxed max-w-2xl mx-auto mb-10">
            Precision-engineered access to the world's most advanced digital assets. Discover your perfect fit.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-bold ${!isYearly ? 'text-[var(--color-on-surface)]' : 'text-[var(--color-secondary)]'}`}>Monthly</span>
            <button
              className={`w-12 h-6 rounded-full p-1 transition-all ${isYearly ? 'bg-[var(--color-primary)]' : 'bg-[var(--color-outline-variant)]'}`}
              onClick={() => setIsYearly(!isYearly)}
            >
              <div className={`w-4 h-4 rounded-full bg-white transition-transform ${isYearly ? 'translate-x-6' : 'translate-x-0'}`} />
            </button>
            <span className={`text-sm font-bold ${isYearly ? 'text-[var(--color-on-surface)]' : 'text-[var(--color-secondary)]'}`}>
              Annual <span className="ml-1 text-[var(--color-primary)] text-[0.7rem] bg-[var(--color-primary)]/10 px-2 py-0.5 rounded-full uppercase tracking-widest">Privilege: -20%</span>
            </span>
          </div>
        </motion.div>
      </section>

      {/* ── PLANS GRID ── */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {plans.map((plan, i) => (
            <PlanCard key={plan.id} plan={plan} isYearly={isYearly} delay={i * 0.1} />
          ))}
        </motion.div>
      </section>

      {/* ── COMPARISON CALLOUT ── */}
      <section className="max-w-5xl mx-auto px-6 mb-32">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-[var(--color-surface-low)] rounded-3xl p-10 md:p-14 relative overflow-hidden"
        >
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-[var(--color-primary)] text-xs font-bold uppercase tracking-widest mb-4 block">Foundational Excellence</span>
              <h2 className="text-3xl font-manrope font-extrabold text-[var(--color-on-surface)] mb-6">Standard with every Sovereign Membership</h2>
              <p className="text-[var(--color-secondary)] font-semibold leading-relaxed">We protect your sovereignty with industry-leading security and performance standards included across all tiers.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['99.9% Elite SLA', 'End-to-End SSL', 'Privacy First', 'Architecture API', 'Ecosystem Access', 'Daily Refinements'].map(item => (
                <div key={item} className="flex items-center gap-3 p-3 rounded-lg bg-[var(--color-surface-lowest)] shadow-sm">
                  <Check size={14} className="text-[var(--color-primary)]" />
                  <span className="text-xs font-bold text-[var(--color-on-surface)]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── FAQ ── */}
      <section className="max-w-3xl mx-auto px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-manrope font-extrabold text-[var(--color-on-surface)] mb-4">Common Inquiries</h2>
          <p className="text-[var(--color-secondary)] font-semibold">Seeking bespoke details? <a href="mailto:elite@sovereign.ai" className="text-[var(--color-primary)] hover:underline">Connect with us</a></p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="space-y-4"
        >
          {faqs.map((faq, i) => (
            <FaqItem key={i} {...faq} index={i} />
          ))}
        </motion.div>
      </section>

    </div>
  );
};

export default Pricing;
