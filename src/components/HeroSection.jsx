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
    { icon: Bot,        name: 'SupportGPT',    category: 'Customer Support', rating: '4.9', price: '$29/mo',  color: 'linear-gradient(135deg,#7c3aed,#a855f7)', delay: 0.35 },
    { icon: TrendingUp, name: 'GrowthEngine',  category: 'Marketing AI',     rating: '4.8', price: '$49/mo',  color: 'linear-gradient(135deg,#2563eb,#3b82f6)', delay: 0.45 },
    { icon: Zap,        name: 'CodeAssist',    category: 'Development',      rating: '4.9', price: '$19/mo',  color: 'linear-gradient(135deg,#0891b2,#06b6d4)', delay: 0.55 },
    { icon: Shield,     name: 'SecureBot',     category: 'Security & Audit', rating: '4.7', price: '$39/mo',  color: 'linear-gradient(135deg,#059669,#10b981)', delay: 0.65 },
  ];

  return (
    <section className="hero">
      {/* ── Background glows ── */}
      <div className="hero__glow hero__glow--purple" />
      <div className="hero__glow hero__glow--blue" />
      <div className="hero__grid-overlay" />

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
            <span>Introducing Aivora&nbsp;&mdash; The AI Marketplace</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hero__headline"
          >
            Build, Buy &amp; Sell
            <br />
            <span className="hero__headline--gradient">AI Agents</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero__subheading"
          >
            Discover, deploy, and monetize powerful AI agents&nbsp;&mdash;
            all in one marketplace.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hero__cta-group"
          >
            <Link to="/browse" className="cta-primary">
              Explore AI Agents
              <ArrowRight size={18} />
            </Link>
            <Link to="/signup" className="cta-secondary">
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
            <Users size={14} />
            Join&nbsp;<strong>early AI creators</strong>&nbsp;building the future
          </motion.p>

          {/* Stats */}
          <div className="hero__stats">
            <StatPill value="2,400+"  label="AI Agents"      delay={0.55} />
            <StatPill value="18k+"    label="Developers"     delay={0.65} />
            <StatPill value="$4.2M+"  label="Creator Payouts" delay={0.75} />
          </div>
        </div>

        {/* ── RIGHT COLUMN – visual ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="hero__right"
        >
          {/* Dashboard shell */}
          <div className="agent-dashboard">
            <div className="agent-dashboard__header">
              <span className="agent-dashboard__dot agent-dashboard__dot--red" />
              <span className="agent-dashboard__dot agent-dashboard__dot--yellow" />
              <span className="agent-dashboard__dot agent-dashboard__dot--green" />
              <span className="agent-dashboard__title">Aivora Marketplace</span>
            </div>

            <p className="agent-dashboard__label">
              <Sparkles size={12} /> Top Agents This Week
            </p>

            <div className="agent-dashboard__list">
              {agents.map((a) => (
                <AgentCard key={a.name} {...a} />
              ))}
            </div>

            {/* Bottom bar */}
            <div className="agent-dashboard__footer">
              <span>🔥 Trending Now</span>
              <span className="agent-dashboard__footer-cta">View all →</span>
            </div>
          </div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="hero__float-badge"
          >
            <span className="hero__float-badge-icon">⚡</span>
            <div>
              <p className="hero__float-badge-title">Live Deployments</p>
              <p className="hero__float-badge-sub">+14 agents deployed today</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
