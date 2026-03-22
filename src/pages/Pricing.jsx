import { motion } from 'framer-motion';
import { Check, X, Zap, Shield, Users, Building2, ArrowRight, Sparkles, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

/* ─── Demo Data ─── */
const plans = [
  {
    id: 'free',
    name: 'Free',
    badge: null,
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: 'Perfect for exploring the marketplace and getting started.',
    icon: Users,
    color: 'from-slate-600 to-slate-700',
    borderColor: 'border-slate-700',
    ctaText: 'Get Started Free',
    ctaVariant: 'secondary',
    features: [
      { text: 'Access to 50+ free agents', included: true },
      { text: '100 agent runs / month', included: true },
      { text: 'Community support', included: true },
      { text: 'Basic analytics', included: true },
      { text: 'API access', included: false },
      { text: 'Priority support', included: false },
      { text: 'Custom agent branding', included: false },
      { text: 'Team collaboration', included: false },
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    badge: 'Most Popular',
    monthlyPrice: 49,
    yearlyPrice: 39,
    description: 'For professionals who need more power and flexibility.',
    icon: Zap,
    color: 'from-purple-600 to-violet-600',
    borderColor: 'border-purple-500/60',
    ctaText: 'Start Pro Trial',
    ctaVariant: 'primary',
    features: [
      { text: 'Access to 2,000+ premium agents', included: true },
      { text: 'Unlimited agent runs', included: true },
      { text: 'Priority support (24hr)', included: true },
      { text: 'Advanced analytics dashboard', included: true },
      { text: 'Full API access', included: true },
      { text: 'Custom agent branding', included: true },
      { text: 'Team collaboration (up to 5)', included: false },
      { text: 'Enterprise SLA', included: false },
    ],
  },
  {
    id: 'team',
    name: 'Team',
    badge: null,
    monthlyPrice: 149,
    yearlyPrice: 119,
    description: 'Built for growing teams that need to collaborate at scale.',
    icon: Shield,
    color: 'from-blue-600 to-cyan-600',
    borderColor: 'border-blue-500/40',
    ctaText: 'Start Team Trial',
    ctaVariant: 'outline-blue',
    features: [
      { text: 'Everything in Pro', included: true },
      { text: 'Team collaboration (up to 20)', included: true },
      { text: 'Shared agent library', included: true },
      { text: 'Role-based access control', included: true },
      { text: 'Usage reports & exports', included: true },
      { text: 'Dedicated success manager', included: true },
      { text: 'Custom integrations', included: false },
      { text: 'Enterprise SLA', included: false },
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    badge: null,
    monthlyPrice: null,
    yearlyPrice: null,
    description: 'Tailored solutions for large organisations and enterprises.',
    icon: Building2,
    color: 'from-amber-600 to-orange-600',
    borderColor: 'border-amber-500/30',
    ctaText: 'Contact Sales',
    ctaVariant: 'outline-amber',
    features: [
      { text: 'Everything in Team', included: true },
      { text: 'Unlimited team members', included: true },
      { text: 'Custom AI model fine-tuning', included: true },
      { text: 'On-premise deployment option', included: true },
      { text: 'Custom SLA & uptime guarantee', included: true },
      { text: 'White-label options', included: true },
      { text: 'Dedicated infrastructure', included: true },
      { text: '24/7 enterprise support', included: true },
    ],
  },
];

const faqs = [
  { q: 'Can I switch plans at any time?', a: 'Yes, you can upgrade or downgrade at any time. Changes take effect immediately and billing is prorated.' },
  { q: 'What happens when I hit my usage limit?', a: 'On the Free plan, agent runs pause until the next billing cycle. Pro and above have unlimited runs with no hard limits.' },
  { q: 'Is there a free trial for paid plans?', a: 'Yes! Pro and Team plans both include a 14-day free trial, no credit card required.' },
  { q: 'Do you offer discounts for startups or students?', a: 'Absolutely. We offer 50% off for verified startups and students. Email us at hello@aivora.ai with proof.' },
  { q: 'What payment methods do you accept?', a: 'We accept all major credit cards, PayPal, and bank transfers for Enterprise customers.' },
  { q: 'Can I cancel anytime?', a: 'Yes, cancel anytime from your dashboard. You\'ll retain access until the end of your billing period.' },
];

const fadeIn = { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.55 } };
const stagger = { animate: { transition: { staggerChildren: 0.08 } } };

/* ─── Sub-components ─── */

const FeatureRow = ({ text, included }) => (
  <li className="pricing-feature-row">
    {included
      ? <span className="pricing-check"><Check size={13} /></span>
      : <span className="pricing-x"><X size={13} /></span>
    }
    <span className={included ? 'pricing-feature-text' : 'pricing-feature-text pricing-feature-text--off'}>{text}</span>
  </li>
);

const PlanCard = ({ plan, isYearly, delay }) => {
  const isPro = plan.id === 'pro';
  const isEnterprise = plan.id === 'enterprise';
  const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;

  return (
    <motion.div
      variants={{ initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.5, delay }}
      className={`pricing-card ${isPro ? 'pricing-card--featured' : ''}`}
    >
      {isPro && (
        <div className="pricing-popular-badge">
          <Sparkles size={11} /> Most Popular
        </div>
      )}

      {/* Icon + name */}
      <div className={`pricing-plan-icon bg-gradient-to-br ${plan.color}`}>
        <plan.icon size={20} color="#fff" />
      </div>
      <h3 className="pricing-plan-name">{plan.name}</h3>
      <p className="pricing-plan-desc">{plan.description}</p>

      {/* Price */}
      <div className="pricing-price-block">
        {isEnterprise ? (
          <span className="pricing-price-custom">Custom Pricing</span>
        ) : (
          <>
            <span className="pricing-currency">$</span>
            <span className="pricing-amount">{price}</span>
            <span className="pricing-period">/ mo</span>
          </>
        )}
        {!isEnterprise && isYearly && (
          <span className="pricing-yearly-note">billed annually</span>
        )}
      </div>

      {/* CTA */}
      <Link
        to={isEnterprise ? '/contact' : '/signup'}
        className={`pricing-cta pricing-cta--${plan.ctaVariant} ${isPro ? 'pricing-cta--glow' : ''}`}
      >
        {plan.ctaText}
        <ArrowRight size={15} />
      </Link>

      {/* Feature list */}
      <ul className="pricing-feature-list">
        {plan.features.map((f) => (
          <FeatureRow key={f.text} {...f} />
        ))}
      </ul>
    </motion.div>
  );
};

const FaqItem = ({ q, a, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      variants={fadeIn}
      className={`faq-item ${open ? 'faq-item--open' : ''}`}
      onClick={() => setOpen(!open)}
    >
      <div className="faq-question">
        <HelpCircle size={16} className="faq-icon" />
        <span>{q}</span>
        <span className={`faq-chevron ${open ? 'faq-chevron--open' : ''}`}>▾</span>
      </div>
      {open && <p className="faq-answer">{a}</p>}
    </motion.div>
  );
};

/* ═══════════════════════════════════════
   PRICING PAGE
═══════════════════════════════════════ */
const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="pricing-page">

      {/* ── HERO ── */}
      <section className="pricing-hero">
        <div className="pricing-hero__glow pricing-hero__glow--purple" />
        <div className="pricing-hero__glow pricing-hero__glow--blue" />

        <motion.div {...fadeIn} className="pricing-hero__inner">
          <div className="pricing-hero__badge">
            <Sparkles size={13} /> Simple, transparent pricing
          </div>
          <h1 className="pricing-hero__title">
            Plans for every{' '}
            <span className="pricing-hero__title--gradient">creator & team</span>
          </h1>
          <p className="pricing-hero__sub">
            Start free. Scale as you grow. No hidden fees, no surprises.
          </p>

          {/* Toggle */}
          <div className="pricing-toggle">
            <span className={!isYearly ? 'pricing-toggle__label--active' : 'pricing-toggle__label'}>Monthly</span>
            <button
              className={`pricing-toggle__btn ${isYearly ? 'pricing-toggle__btn--on' : ''}`}
              onClick={() => setIsYearly(!isYearly)}
              aria-label="Toggle yearly billing"
            >
              <span className="pricing-toggle__knob" />
            </button>
            <span className={isYearly ? 'pricing-toggle__label--active' : 'pricing-toggle__label'}>
              Yearly <span className="pricing-save-badge">Save 20%</span>
            </span>
          </div>
        </motion.div>
      </section>

      {/* ── PLANS GRID ── */}
      <section className="pricing-plans-section">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="pricing-plans-grid"
        >
          {plans.map((plan, i) => (
            <PlanCard key={plan.id} plan={plan} isYearly={isYearly} delay={i * 0.07} />
          ))}
        </motion.div>
      </section>

      {/* ── COMPARISON CALLOUT ── */}
      <section className="pricing-callout-section">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
          className="pricing-callout"
        >
          <div className="pricing-callout__glow" />
          <span className="pricing-callout__tag">All plans include</span>
          <div className="pricing-callout__grid">
            {['99.9% Uptime SLA', 'SSL Encryption', 'GDPR Compliant', 'Open API', 'Community Access', 'Regular Updates'].map(item => (
              <div key={item} className="pricing-callout__item">
                <Check size={14} className="pricing-callout__check" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── FAQ ── */}
      <section className="pricing-faq-section">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
          className="pricing-faq__header"
        >
          <h2 className="pricing-section-title">Frequently Asked Questions</h2>
          <p className="pricing-section-sub">Have more questions? <a href="mailto:hello@aivora.ai" className="pricing-link">Email us</a></p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="pricing-faq__list"
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
