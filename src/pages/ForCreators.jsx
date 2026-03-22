import { motion } from 'framer-motion';
import {
  Sparkles, ArrowRight, DollarSign, Globe, BarChart2, Shield,
  Code2, Star, Users, CheckCircle2, Rocket, Zap, BookOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';

/* ─── Demo Data ─── */
const stats = [
  { value: '$4.2M+', label: 'Paid to creators', icon: DollarSign, color: '#22c55e' },
  { value: '18,400+', label: 'Active buyers',   icon: Users,       color: '#a78bfa' },
  { value: '2,400+', label: 'Agents listed',    icon: Code2,       color: '#38bdf8' },
  { value: '98%',    label: 'Payout success rate', icon: Shield,  color: '#fb923c' },
];

const steps = [
  {
    step: '01',
    title: 'Build your AI Agent',
    desc: 'Use any framework — LangChain, AutoGen, CrewAI, or raw API calls. We support all agent architectures.',
    icon: Code2,
    color: 'from-purple-600 to-violet-700',
  },
  {
    step: '02',
    title: 'List on Aivora',
    desc: 'Upload your agent, write a killer description, set your price, and hit publish. We review within 24 hours.',
    icon: Rocket,
    color: 'from-blue-600 to-cyan-700',
  },
  {
    step: '03',
    title: 'Earn globally',
    desc: 'Get paid every month via Stripe. Set one-time, subscription, or usage-based pricing — your choice.',
    icon: DollarSign,
    color: 'from-emerald-600 to-teal-700',
  },
  {
    step: '04',
    title: 'Grow with analytics',
    desc: 'Track installations, revenue, reviews, and user feedback from your creator dashboard.',
    icon: BarChart2,
    color: 'from-amber-600 to-orange-700',
  },
];

const perks = [
  { icon: Globe,      title: 'Global Reach',          desc: 'Your agent, available to 180+ countries from day one. No international setup required.' },
  { icon: DollarSign, title: '85% Revenue Share',      desc: 'Keep 85% of every sale. No exclusivity, no lock-in. We succeed when you succeed.' },
  { icon: BarChart2,  title: 'Creator Dashboard',      desc: 'Real-time analytics on views, conversions, revenue, and user satisfaction.' },
  { icon: Shield,     title: 'IP Protection',          desc: 'Your code stays yours. We only list and distribute — full intellectual property retained.' },
  { icon: Zap,        title: 'Built-in Infrastructure', desc: 'We handle payments, fraud, customer support triage, and hosting so you can focus on building.' },
  { icon: BookOpen,   title: 'Creator Resources',      desc: 'Tutorials, playbooks, office hours, and a private Slack community for top creators.' },
];

const topCreators = [
  { name: 'Aisha Patel',   avatar: 'AP', role: 'AI Automation Engineer', agents: 12, revenue: '$24,800', rating: 4.9, badge: '🏆 Top Creator' },
  { name: 'Marcus Chen',   avatar: 'MC', role: 'LLM Developer',          agents: 8,  revenue: '$18,400', rating: 4.8, badge: '⚡ Rising Star' },
  { name: 'Sofia Reyes',   avatar: 'SR', role: 'NLP Specialist',         agents: 15, revenue: '$31,200', rating: 5.0, badge: '🌟 Featured' },
  { name: 'James Okafor',  avatar: 'JO', role: 'Agentic Systems Dev',    agents: 6,  revenue: '$12,600', rating: 4.7, badge: '🔥 Trending' },
];

const testimonials = [
  {
    quote: 'I published my first AI agent on a Saturday afternoon. By Monday I had 40 paying subscribers. Aivora\'s marketplace is unlike anything else.',
    name: 'Ravi Shankar',
    role: 'Indie AI Developer',
    avatar: 'RS',
    revenue: '$8,200 / mo',
  },
  {
    quote: 'The 85% revenue share is unbeatable. I left my full-time job after 3 months. Aivora\'s creator community and resources are world-class.',
    name: 'Emma Hoffmann',
    role: 'AI Consultant',
    avatar: 'EH',
    revenue: '$22,000 / mo',
  },
  {
    quote: 'Building agents is fun — getting paid while I sleep is even better. Aivora handles everything I hate about running a business.',
    name: 'Kwame Asante',
    role: 'ML Engineer',
    avatar: 'KA',
    revenue: '$14,500 / mo',
  },
];

const pricingModels = [
  { name: 'One-time Purchase', icon: '💳', desc: 'Sell your agent for a fixed price. Great for niche tools.' },
  { name: 'Monthly Subscription', icon: '🔄', desc: 'Predictable recurring revenue. Best for updated agents.' },
  { name: 'Usage-based', icon: '📊', desc: 'Charge per run or API call. Perfect for high-volume agents.' },
  { name: 'Enterprise License', icon: '🏢', desc: 'Custom pricing for large teams. We help you negotiate.' },
];

const fadeIn = { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } };
const stagger = { animate: { transition: { staggerChildren: 0.1 } } };

/* ─── Sub-components ─── */

const AvatarCircle = ({ initials, color = '#7c3aed' }) => (
  <div className="creator-avatar" style={{ background: `linear-gradient(135deg, ${color}, ${color}99)` }}>
    {initials}
  </div>
);

/* ═══════════════════════════════════════
   FOR CREATORS PAGE
═══════════════════════════════════════ */
const ForCreators = () => (
  <div className="creators-page">

    {/* ── HERO ── */}
    <section className="creators-hero">
      <div className="creators-hero__glow creators-hero__glow--purple" />
      <div className="creators-hero__glow creators-hero__glow--teal" />
      <div className="hero__grid-overlay" />

      <motion.div
        initial="initial"
        animate="animate"
        variants={stagger}
        className="creators-hero__inner"
      >
        <motion.div variants={fadeIn} className="creators-hero__badge">
          <Sparkles size={13} /> Built for AI builders
        </motion.div>

        <motion.h1 variants={fadeIn} className="creators-hero__title">
          Turn your AI skills into
          <br />
          <span className="creators-hero__title--gradient">recurring revenue</span>
        </motion.h1>

        <motion.p variants={fadeIn} className="creators-hero__sub">
          Build once. Sell to thousands. Aivora gives AI creators the platform,
          infrastructure, and audience to build a real business.
        </motion.p>

        <motion.div variants={fadeIn} className="creators-hero__cta-group">
          <Link to="/signup" className="cta-primary">
            Start Building Free <ArrowRight size={17} />
          </Link>
          <Link to="/browse" className="cta-secondary">
            Explore the Marketplace
          </Link>
        </motion.div>

        <motion.p variants={fadeIn} className="creators-hero__trust">
          <CheckCircle2 size={14} /> No listing fee · No exclusivity · 85% revenue share
        </motion.p>
      </motion.div>

      {/* Stats band */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.55 }}
        className="creators-stats-band"
      >
        {stats.map((s) => (
          <div key={s.label} className="creators-stat">
            <div className="creators-stat__icon" style={{ background: `${s.color}22`, color: s.color }}>
              <s.icon size={18} />
            </div>
            <div>
              <p className="creators-stat__value">{s.value}</p>
              <p className="creators-stat__label">{s.label}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>

    {/* ── HOW IT WORKS ── */}
    <section className="creators-section">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeIn}
        className="creators-section-header"
      >
        <h2 className="creators-section-title">How it works</h2>
        <p className="creators-section-sub">From idea to income in four simple steps</p>
      </motion.div>

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-80px' }}
        variants={stagger}
        className="creators-steps-grid"
      >
        {steps.map((s) => (
          <motion.div key={s.step} variants={fadeIn} className="creators-step-card">
            <div className={`creators-step-icon bg-gradient-to-br ${s.color}`}>
              <s.icon size={22} color="#fff" />
            </div>
            <span className="creators-step-number">{s.step}</span>
            <h3 className="creators-step-title">{s.title}</h3>
            <p className="creators-step-desc">{s.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>

    {/* ── PERKS ── */}
    <section className="creators-section creators-section--alt">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
        className="creators-section-header"
      >
        <h2 className="creators-section-title">Why top creators choose Aivora</h2>
        <p className="creators-section-sub">Everything you need to build a sustainable AI business</p>
      </motion.div>

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
        className="creators-perks-grid"
      >
        {perks.map((p) => (
          <motion.div key={p.title} variants={fadeIn} className="creators-perk-card">
            <div className="creators-perk-icon">
              <p.icon size={20} />
            </div>
            <h3 className="creators-perk-title">{p.title}</h3>
            <p className="creators-perk-desc">{p.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>

    {/* ── PRICING MODELS ── */}
    <section className="creators-section">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
        className="creators-section-header"
      >
        <h2 className="creators-section-title">Flexible Monetisation</h2>
        <p className="creators-section-sub">Choose how you get paid — mix and match models per agent</p>
      </motion.div>
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
        className="creators-pricing-models"
      >
        {pricingModels.map((m) => (
          <motion.div key={m.name} variants={fadeIn} className="creators-pricing-model-card">
            <span className="creators-pricing-model-emoji">{m.icon}</span>
            <h3 className="creators-pricing-model-name">{m.name}</h3>
            <p className="creators-pricing-model-desc">{m.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>

    {/* ── TOP CREATORS ── */}
    <section className="creators-section creators-section--alt">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
        className="creators-section-header"
      >
        <h2 className="creators-section-title">Meet top creators</h2>
        <p className="creators-section-sub">Real people, real income — building the AI economy</p>
      </motion.div>
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
        className="creators-top-grid"
      >
        {topCreators.map((c) => (
          <motion.div key={c.name} variants={fadeIn} className="creator-card">
            <div className="creator-card__header">
              <AvatarCircle initials={c.avatar} />
              <div>
                <p className="creator-card__name">{c.name}</p>
                <p className="creator-card__role">{c.role}</p>
              </div>
              <span className="creator-card__badge">{c.badge}</span>
            </div>
            <div className="creator-card__stats">
              <div className="creator-card__stat">
                <span className="creator-card__stat-value">{c.agents}</span>
                <span className="creator-card__stat-label">Agents</span>
              </div>
              <div className="creator-card__stat">
                <span className="creator-card__stat-value">{c.revenue}</span>
                <span className="creator-card__stat-label">Earned</span>
              </div>
              <div className="creator-card__stat">
                <span className="creator-card__stat-value">
                  <Star size={13} fill="#f59e0b" color="#f59e0b" style={{display:'inline', marginRight:2}} />{c.rating}
                </span>
                <span className="creator-card__stat-label">Rating</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>

    {/* ── TESTIMONIALS ── */}
    <section className="creators-section">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
        className="creators-section-header"
      >
        <h2 className="creators-section-title">Creators love Aivora</h2>
        <p className="creators-section-sub">From side-project to full-time income</p>
      </motion.div>
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
        className="creators-testimonials"
      >
        {testimonials.map((t) => (
          <motion.div key={t.name} variants={fadeIn} className="testimonial-card">
            <div className="testimonial-card__quote">&ldquo;{t.quote}&rdquo;</div>
            <div className="testimonial-card__footer">
              <AvatarCircle initials={t.avatar} color="#6d28d9" />
              <div>
                <p className="testimonial-card__name">{t.name}</p>
                <p className="testimonial-card__role">{t.role}</p>
              </div>
              <span className="testimonial-card__revenue">{t.revenue}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>

    {/* ── FINAL CTA ── */}
    <section className="creators-cta-section">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
        className="creators-cta-card"
      >
        <div className="creators-cta-card__glow" />
        <div className="creators-cta-card__glow creators-cta-card__glow--right" />
        <div className="creators-cta-card__inner">
          <span className="creators-cta-card__tag">
            <Rocket size={13} /> Ready to launch?
          </span>
          <h2 className="creators-cta-card__title">
            Your first agent could be live<br />
            <span className="creators-hero__title--gradient">in under 24 hours</span>
          </h2>
          <p className="creators-cta-card__sub">
            Join 2,400+ creators already earning on Aivora. No upfront costs, no exclusivity.
          </p>
          <div className="creators-hero__cta-group">
            <Link to="/signup" className="cta-primary">
              Create Your Free Account <ArrowRight size={17} />
            </Link>
            <Link to="/browse" className="cta-secondary">
              Browse the Marketplace
            </Link>
          </div>
        </div>
      </motion.div>
    </section>

  </div>
);

export default ForCreators;
