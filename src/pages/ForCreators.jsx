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
    desc: 'Use any framework — LangChain, AutoGen, CrewAI, or raw API calls. We support all agent frameworks.',
    icon: Code2,
    color: 'from-blue-600 to-cyan-700',
  },
  {
    step: '02',
    title: 'List on Aivora',
    desc: 'Upload your AI agent, write a compelling description, set your price, and hit publish. We review within 24 hours.',
    icon: Rocket,
    color: 'from-blue-600 to-cyan-700',
  },
  {
    step: '03',
    title: 'Earn globally',
    desc: 'Get paid every month via Aivora Payments. Set one-time, subscription, or usage-based pricing — your choice.',
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
  { icon: Globe,      title: 'Global Reach',          desc: 'Your agent, available to 180+ jurisdictions from day one. No international setup required.' },
  { icon: DollarSign, title: '85% Revenue Share',   desc: 'Keep 85% of every transaction. No exclusivity, no lock-in. We succeed when you succeed.' },
  { icon: BarChart2,  title: 'Creator Dashboard',    desc: 'Real-time analytics on influences, conversions, and client satisfaction.' },
  { icon: Shield,     title: 'Aivora Protection',   desc: 'Your code stays yours. We only list and distribute — full ownership retained.' },
  { icon: Zap,        title: 'Built-in Dashboard',       desc: 'We handle payments, secure checkout, and customer support so you can focus on building.' },
  { icon: BookOpen,   title: 'Marketplace Resources',    desc: 'Tutorials, playbooks, and a private forum for top creators.' },
];

const topCreators = [
  { name: 'Aisha Patel',   avatar: 'AP', role: 'AI Automation Engineer', agents: 12, revenue: '$24,800', rating: 4.9, badge: '🏆 Elite Creator' },
  { name: 'Marcus Chen',   avatar: 'MC', role: 'LLM Developer',          agents: 8,  revenue: '$18,400', rating: 4.8, badge: '⚡ Rising Star' },
  { name: 'Sofia Reyes',   avatar: 'SR', role: 'NLP Specialist',         agents: 15, revenue: '$31,200', rating: 5.0, badge: '🌟 Featured' },
  { name: 'James Okafor',  avatar: 'JO', role: 'Agent Dev',    agents: 6,  revenue: '$12,600', rating: 4.7, badge: '🔥 Trending' },
];

const testimonials = [
  {
    quote: 'I published my first AI agent on a Saturday afternoon. By Monday I had 40 paying subscribers. Aivora\'s platform is unlike anything else.',
    name: 'Ravi Shankar',
    role: 'Indie AI Developer',
    avatar: 'RS',
    revenue: '$8,200 / mo',
  },
  {
    quote: 'The 85% honorarium share is unbeatable. I left my full-time job after 3 months. Aivora\'s community and resources are elite.',
    name: 'Emma Hoffmann',
    role: 'AI Consultant',
    avatar: 'EH',
    revenue: '$22,000 / mo',
  },
  {
    quote: 'Building agents is fun — getting paid while I sleep is even better. Aivora handles everything I hate about running an operation.',
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

const AvatarCircle = ({ initials, color = '#009351' }) => (
  <div className="creator-avatar" style={{ background: `linear-gradient(135deg, ${color}, ${color}99)` }}>
    {initials}
  </div>
);

/* ═══════════════════════════════════════
   FOR CREATORS PAGE
═══════════════════════════════════════ */
const ForCreators = () => (
  <div className="w-full bg-[var(--color-surface)]">

    {/* ── HERO ── */}
    <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-[var(--color-surface-low)]">
      <div className="absolute inset-0 bg-[var(--color-primary)]/5 opacity-50" />
      <div className="max-w-7xl mx-auto relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial="initial"
          animate="animate"
          variants={stagger}
          className="max-w-4xl"
        >
          <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-[0.65rem] font-manrope font-extrabold uppercase tracking-widest mb-8">
            <Sparkles size={11} /> Built for Developers
          </motion.div>

          <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-manrope font-extrabold text-[var(--color-on-surface)] mb-8 tracking-tighter leading-[1.05]">
            Transform your AI mastery into
            <br />
            <span className="text-[var(--color-primary)]">Recurring Income</span>
          </motion.h1>

          <motion.p variants={fadeIn} className="text-xl text-[var(--color-secondary)] mb-12 font-semibold max-w-2xl mx-auto leading-relaxed">
            Build once. Sell thousands. Aivora provides the platform, 
            secure infrastructure, and eager audience to scale your digital influence.
          </motion.p>

          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <Link to="/signup" className="px-10 py-5 bg-[var(--color-primary)] text-white rounded-2xl font-manrope font-extrabold uppercase tracking-widest text-sm shadow-2xl shadow-[var(--color-primary)]/20 hover:scale-[1.02] transition-all flex items-center gap-3">
              Create Account <ArrowRight size={18} />
            </Link>
            <Link to="/browse" className="px-10 py-5 bg-[var(--color-surface-lowest)] text-[var(--color-on-surface)] rounded-2xl font-manrope font-extrabold uppercase tracking-widest text-sm shadow-lg hover:bg-[var(--color-surface-low)] transition-all">
              Browse Marketplace
            </Link>
          </motion.div>

          <motion.p variants={fadeIn} className="flex items-center gap-2 text-[0.65rem] font-manrope font-extrabold text-[var(--color-secondary)] uppercase tracking-[0.2em] opacity-60">
            <CheckCircle2 size={12} className="text-[var(--color-primary)]" /> No Entry Fees · Retain Ownership · 85% Client Retention
          </motion.p>
        </motion.div>
      </div>

      {/* Stats band */}
      <div className="max-w-7xl mx-auto mt-24 px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((s) => (
            <div key={s.label} className="p-8 rounded-3xl bg-[var(--color-surface-lowest)] shadow-xl shadow-[var(--color-primary)]/5 border border-[var(--color-outline-variant)]/10 flex items-center gap-5">
              <div className="p-3 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-2xl">
                <s.icon size={20} />
              </div>
              <div>
                <p className="text-2xl font-manrope font-extrabold text-[var(--color-on-surface)] tracking-tighter">{s.value}</p>
                <p className="text-[0.6rem] font-manrope font-extrabold text-[var(--color-secondary)] uppercase tracking-widest opacity-60">{s.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* ── HOW IT WORKS ── */}
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeIn}
        >
          <h2 className="text-[0.7rem] font-manrope font-extrabold text-[var(--color-primary)] uppercase tracking-[0.25em] mb-4">The Blueprint</h2>
          <p className="text-4xl md:text-5xl font-manrope font-extrabold text-[var(--color-on-surface)] tracking-tight">Creator Workflow</p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {steps.map((s) => (
          <motion.div 
            key={s.step} 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="group"
          >
            <div className="p-10 rounded-[2.5rem] bg-[var(--color-surface-low)] hover:bg-[var(--color-surface-lowest)] transition-all border border-[var(--color-outline-variant)]/10 hover:shadow-2xl hover:shadow-[var(--color-primary)]/5">
              <div className="w-16 h-16 rounded-3xl bg-[var(--color-primary)] text-white flex items-center justify-center mb-8 shadow-xl shadow-[var(--color-primary)]/20">
                <s.icon size={24} />
              </div>
              <span className="text-[0.6rem] font-manrope font-extrabold text-[var(--color-primary)] uppercase tracking-[0.3em] mb-4 block opacity-50">Step {s.step}</span>
              <h3 className="text-xl font-manrope font-extrabold text-[var(--color-on-surface)] mb-4">{s.title}</h3>
              <p className="text-[var(--color-secondary)] font-semibold text-sm leading-relaxed opacity-80">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* ── PERKS ── */}
    <section className="py-32 px-6 bg-[var(--color-surface-low)]">
      <div className="max-w-7xl mx-auto text-center mb-24">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-[0.7rem] font-manrope font-extrabold text-[var(--color-primary)] uppercase tracking-[0.25em] mb-4">Elite Advantages</h2>
          <p className="text-4xl md:text-5xl font-manrope font-extrabold text-[var(--color-on-surface)] tracking-tight">Why Creators Choose Aivora</p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-20">
        {perks.map((p) => (
          <motion.div 
            key={p.title} 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="flex flex-col items-start"
          >
            <div className="p-4 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-2xl mb-8">
              <p.icon size={22} />
            </div>
            <h3 className="text-xl font-manrope font-extrabold text-[var(--color-on-surface)] mb-4 tracking-tight">{p.title}</h3>
            <p className="text-[var(--color-secondary)] font-semibold text-sm leading-relaxed opacity-80">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* ── MONETIZATION ── */}
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto text-center mb-24">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-[0.7rem] font-manrope font-extrabold text-[var(--color-primary)] uppercase tracking-[0.25em] mb-4">Subsidization</h2>
          <p className="text-4xl md:text-5xl font-manrope font-extrabold text-[var(--color-on-surface)] tracking-tight">Precision Monetization</p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {pricingModels.map((m) => (
          <motion.div 
            key={m.name} 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="p-10 rounded-[2.5rem] bg-[var(--color-surface-low)] border border-[var(--color-outline-variant)]/5 text-center group hover:bg-[var(--color-surface-lowest)] transition-all"
          >
            <span className="text-5xl mb-8 block grayscale group-hover:grayscale-0 transition-all">{m.icon}</span>
            <h3 className="text-lg font-manrope font-extrabold text-[var(--color-on-surface)] mb-4 uppercase tracking-widest">{m.name}</h3>
            <p className="text-[var(--color-secondary)] font-semibold text-xs leading-relaxed opacity-70">{m.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* ── TOP CREATORS ── */}
    <section className="py-32 px-6 bg-[var(--color-surface-low)]">
      <div className="max-w-7xl mx-auto text-center mb-24">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-[0.7rem] font-manrope font-extrabold text-[var(--color-primary)] uppercase tracking-[0.25em] mb-4">Top Creators</h2>
          <p className="text-4xl md:text-5xl font-manrope font-extrabold text-[var(--color-on-surface)] tracking-tight">Master Portfolio Performance</p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {topCreators.map((c) => (
          <motion.div 
            key={c.name} 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="p-10 rounded-3xl bg-[var(--color-surface-lowest)] shadow-xl shadow-[var(--color-primary)]/5 flex flex-col sm:flex-row gap-10 items-center sm:items-start"
          >
            <div className="w-24 h-24 rounded-3xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center text-3xl font-manrope font-extrabold shrink-0 shadow-inner">
              {c.avatar}
            </div>
            <div className="flex-grow text-center sm:text-left">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h4 className="text-2xl font-manrope font-extrabold text-[var(--color-on-surface)] mb-1">{c.name}</h4>
                  <p className="text-[0.65rem] font-manrope font-extrabold text-[var(--color-primary)] uppercase tracking-widest">{c.role}</p>
                </div>
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[var(--color-primary)]/5 text-[var(--color-primary)] text-[0.6rem] font-bold uppercase tracking-widest border border-[var(--color-primary)]/10">
                  {c.badge}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[var(--color-outline-variant)]/10">
                <div>
                  <p className="text-xl font-manrope font-extrabold text-[var(--color-on-surface)] mb-1">{c.agents}</p>
                  <p className="text-[0.55rem] font-bold uppercase tracking-widest text-[var(--color-secondary)] opacity-50">Assets</p>
                </div>
                <div>
                  <p className="text-xl font-manrope font-extrabold text-[var(--color-on-surface)] mb-1">{c.revenue}</p>
                  <p className="text-[0.55rem] font-bold uppercase tracking-widest text-[var(--color-secondary)] opacity-50">Revenue</p>
                </div>
                <div>
                  <p className="text-xl font-manrope font-extrabold text-[var(--color-on-surface)] mb-1">
                    <Star size={12} fill="currentColor" className="text-[#f59e0b] inline-block mr-1 mb-1" />{c.rating}
                  </p>
                  <p className="text-[0.55rem] font-bold uppercase tracking-widest text-[var(--color-secondary)] opacity-50">Status</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* ── TESTIMONIALS ── */}
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-[0.7rem] font-manrope font-extrabold text-[var(--color-primary)] uppercase tracking-[0.25em] mb-4">Creator Stories</h2>
          <p className="text-4xl md:text-5xl font-manrope font-extrabold text-[var(--color-on-surface)] tracking-tight">Growth Narratives</p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {testimonials.map((t) => (
          <motion.div 
            key={t.name} 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="p-10 rounded-[2.5rem] bg-[var(--color-surface-low)] flex flex-col justify-between"
          >
            <div className="text-lg font-semibold text-[var(--color-on-surface)] leading-relaxed italic mb-10 opacity-90">&ldquo;{t.quote}&rdquo;</div>
            <div className="flex items-center gap-5 pt-8 border-t border-[var(--color-outline-variant)]/10">
              <div className="w-14 h-14 rounded-2xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center font-manrope font-extrabold text-lg shrink-0">
                {t.avatar}
              </div>
              <div className="flex-grow">
                <p className="font-manrope font-extrabold text-[var(--color-on-surface)] text-sm mb-1">{t.name}</p>
                <p className="text-[0.6rem] font-bold uppercase tracking-widest text-[var(--color-primary)] opacity-60 mb-2">{t.role}</p>
                <span className="text-[0.6rem] font-manrope font-extrabold bg-[var(--color-primary)] text-white px-3 py-1 rounded-full uppercase tracking-tighter shadow-sm">{t.revenue}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* ── FINAL CTA ── */}
    <section className="py-24 px-6 mb-20">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
        className="max-w-7xl mx-auto rounded-[3.5rem] bg-[var(--color-primary)] p-12 md:p-24 relative overflow-hidden shadow-2xl shadow-[var(--color-primary)]/30"
      >
        <div className="absolute inset-0 bg-[var(--color-on-primary)]/5 opacity-50" />
        <div className="relative z-10 text-center flex flex-col items-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white text-[0.7rem] font-manrope font-extrabold uppercase tracking-widest mb-10">
            <Rocket size={14} /> Ready to Build?
          </span>
          <h2 className="text-4xl md:text-6xl font-manrope font-extrabold text-white mb-10 tracking-tighter leading-tight max-w-4xl mx-auto">
            Your first agent could be live
            <br />
            <span className="opacity-60">in under 24 hours</span>
          </h2>
          <p className="text-xl text-white/80 font-semibold mb-12 max-w-2xl mx-auto leading-relaxed">
            Join the collective of 2,400+ creators already thriving on the Aivora platform.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 w-full">
            <Link to="/signup" className="px-12 py-6 bg-white text-[var(--color-primary)] rounded-[2rem] font-manrope font-extrabold uppercase tracking-widest text-sm shadow-2xl hover:scale-105 transition-all w-full sm:w-auto">
              Create Account <ArrowRight size={18} className="inline ml-2" />
            </Link>
            <Link to="/browse" className="px-12 py-6 bg-[var(--color-primary-container)]/20 text-white border border-white/20 rounded-[2rem] font-manrope font-extrabold uppercase tracking-widest text-sm hover:bg-white/5 transition-all w-full sm:w-auto">
              View Marketplace
            </Link>
          </div>
        </div>
      </motion.div>
    </section>

  </div>
);

export default ForCreators;
