import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Star, Zap, Bot, TrendingUp, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
/* ── Mini AI Agent Card used in the right-side visual ── */
const AgentCard = ({ icon: Icon, name, category, rating, price, color, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="agent-card-preview"
  >
    <div className="agent-card-preview__icon" style={{ background: color }}>
      <Icon size={18} />
    </div>
    <div className="agent-card-preview__body">
      <p className="agent-card-preview__name">{name}</p>
      <p className="agent-card-preview__category">{category}</p>
    </div>
    <div className="agent-card-preview__meta">
      <span className="agent-card-preview__rating">
        <Star size={10} fill="currentColor" /> {rating}
      </span>
      <span className="agent-card-preview__price">{price}</span>
    </div>
  </motion.div>
);

/* ── Stat Pill ── */
const StatPill = ({ value, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.85 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.45, delay }}
    className="stat-pill"
  >
    <span className="stat-pill__value">{value}</span>
    <span className="stat-pill__label">{label}</span>
  </motion.div>
);

/* ═══════════════════════════════════════════════════════════
   HeroSection
═══════════════════════════════════════════════════════════ */
const HeroSection = () => {
  const agents = [
    { icon: Bot,        name: 'Aviro Core',    category: 'General AI',     rating: '4.9', price: '$29/mo',  color: '#006a39', delay: 0.35 },
    { icon: TrendingUp, name: 'GrowthEngine',   category: 'Marketing AI',    rating: '4.8', price: '$49/mo',  color: '#008649', delay: 0.45 },
    { icon: Zap,        name: 'PrecisionUI',    category: 'Design Tools',    rating: '4.9', price: '$19/mo',  color: '#595f63', delay: 0.55 },
    { icon: Shield,     name: 'SafeLicense',    category: 'Security',        rating: '4.7', price: '$39/mo',  color: '#bdcabd', delay: 0.65 },
  ];
  return (
    <section className="hero">
      {/* ── Background glows ── */}
      <div className="hero__glow hero__glow--primary" />

      <div className="hero__inner">
        {/* ── LEFT COLUMN ── */}
        <div className="hero__left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hero__badge"
          >
            <Sparkles size={14} />
            <span>Buy and Sell AI Agents</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hero__headline"
          >
            Build, Buy & Sell
            <br />
            <span className="hero__headline--accent">AI Agents</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero__subheading"
          >
            Discover, deploy, and monetize powerful AI agents — all in one marketplace.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hero__cta-group"
          >
            <Link to="/browse" className="cta-primary hover:shadow-[0_20px_40px_-10px_rgba(0,147,81,0.3)] transition-all duration-300">
              Explore AI Agents
              <ArrowRight size={18} />
            </Link>
            <Link to="/for-creators" className="cta-secondary hover:bg-white hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.05)] transition-all duration-300">
              Start Selling
            </Link>
          </motion.div>

          {/* Trust line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="hero__trust"
          >
            <Users size={14} className="text-[var(--color-primary)]" />
            <strong>Join early AI creators</strong>&nbsp;building the future.
          </motion.p>

          {/* Stats */}
          <div className="hero__stats">
            <StatPill value="2,400+"  label="Digital Assets"      delay={0.55} />
            <StatPill value="18k+"    label="Curators"            delay={0.65} />
            <StatPill value="Instant" label="Deployment"          delay={0.75} />
          </div>
        </div>

        {/* ── RIGHT COLUMN – visual ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="hero__right"
        >
          {/* Dashboard shell */}
          <div className="agent-dashboard">
            <div className="agent-dashboard__header">
              <span className="agent-dashboard__dot agent-dashboard__dot--red" />
              <span className="agent-dashboard__dot agent-dashboard__dot--yellow" />
              <span className="agent-dashboard__dot agent-dashboard__dot--green" />
            </div>

            <p className="agent-dashboard__label">
              <Sparkles size={12} /> Curated Trending Assets
            </p>

            <div className="agent-dashboard__list">
              {agents.map((a) => (
                <AgentCard key={a.name} {...a} />
              ))}
            </div>

            {/* Bottom bar */}
            <div className="agent-dashboard__footer">
              <span>💎 Aviro Verified</span>
              <span className="agent-dashboard__footer-cta">View All Tools →</span>
            </div>
          </div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="hero__float-badge"
          >
            <span className="hero__float-badge-icon">✨</span>
            <div>
              <p className="hero__float-badge-title">Editorial Grade</p>
              <p className="hero__float-badge-sub">Quality verified by experts</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
