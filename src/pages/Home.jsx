import { motion } from 'framer-motion';
import { ArrowRight, Bot, Cpu, TrendingUp, Zap, Rocket, User, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import ProductGrid from '../components/ProductGrid';
import { getFeaturedProducts } from '../data/mockProducts';
import HeroSection from '../components/HeroSection';

const Home = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const categories = [
    { name: 'Development', icon: <Cpu className="w-5 h-5" />, count: '240+' },
    { name: 'Marketing', icon: <Zap className="w-5 h-5" />, count: '180+' },
    { name: 'Data Analysis', icon: <TrendingUp className="w-5 h-5" />, count: '130+' },
    { name: 'Customer Support', icon: <Bot className="w-5 h-5" />, count: '310+' },
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden">

      {/* HERO SECTION — new premium two-column layout */}
      <HeroSection />

      {/* FEATURED PRODUCTS SECTION */}
      <section className="py-24 px-6 relative z-10 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="flex flex-col md:flex-row items-end justify-between mb-12"
          >
            <div>
              <h2 className="text-[0.7rem] font-manrope font-extrabold text-[var(--color-primary)] uppercase tracking-[0.25em] mb-4 text-center md:text-left">Featured Agents</h2>
              <p className="text-4xl md:text-5xl font-manrope font-extrabold text-[var(--color-on-surface)] tracking-tight">Featured Aivora Agents</p>
            </div>
            <Link to="/browse" className="text-[var(--color-primary)] hover:opacity-70 font-manrope font-extrabold uppercase tracking-widest text-xs flex items-center gap-2 mt-8 md:mt-0 transition-all group">
              Inspect Full Marketplace
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mt-8"
          >
            <ProductGrid products={getFeaturedProducts()} columns={3} />
          </motion.div>
        </div>
      </section>

      {/* CATEGORIES SECTION */}
      <section className="py-24 px-6 relative z-10 bg-[var(--color-surface-low)]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-[0.7rem] font-manrope font-extrabold text-[var(--color-primary)] uppercase tracking-[0.25em] mb-4">Classifications</h2>
            <p className="text-4xl md:text-5xl font-manrope font-extrabold text-[var(--color-on-surface)] tracking-tight">Browse Categories</p>
          </motion.div>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
          >
            {categories.map((category) => (
              <motion.div key={category.name} variants={fadeIn} className="h-full">
                <Link to="/browse" className="block h-full">
                  <Card 
                    padding="xl" 
                    hoverEffect 
                    className="h-full flex flex-col items-center justify-center text-center group !bg-[var(--color-surface-lowest)] !border-none !rounded-[2rem] hover:shadow-2xl hover:shadow-[var(--color-primary)]/10 cursor-pointer transition-all duration-500"
                  >
                    <div className="p-5 rounded-3xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all duration-500 mb-6 group-hover:-translate-y-2">
                       {category.icon}
                    </div>
                    <h3 className="text-lg font-manrope font-extrabold text-[var(--color-on-surface)] mb-2 tracking-tight group-hover:text-[var(--color-primary)] transition-colors">{category.name}</h3>
                    <p className="text-[var(--color-secondary)] text-[0.65rem] font-bold uppercase tracking-widest opacity-70 group-hover:opacity-100 transition-colors">{category.count} Assets</p>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="py-24 px-6 relative z-10 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-[0.7rem] font-manrope font-extrabold text-[var(--color-primary)] uppercase tracking-[0.25em] mb-4">The Process</h2>
            <p className="text-4xl md:text-5xl font-manrope font-extrabold text-[var(--color-on-surface)] tracking-tight">How Aivora Works</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
            {/* For Users */}
            <motion.div variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true }} className="h-full">
              <Card padding="xl" hoverEffect className="h-full flex flex-col !border-none !rounded-[2.5rem] shadow-xl shadow-[var(--color-primary)]/5 p-10 md:p-14">
                <h3 className="text-3xl font-manrope font-extrabold mb-10 flex items-center gap-4 border-b border-[var(--color-outline-variant)]/10 pb-6">
                  <div className="p-3 bg-[var(--color-primary)]/10 rounded-2xl"><User className="text-[var(--color-primary)] w-6 h-6" /></div> For Users
                </h3>
                <div className="space-y-8 flex-grow">
                  {[
                    { title: "Browse Agents", desc: "Discover premium AI tools tailored to your needs." },
                    { title: "Try Demo", desc: "Test agents in the live sandbox environment." },
                    { title: "Purchase & Deploy", desc: "Buy securely and start using immediately." }
                  ].map((step, i) => (
                    <div key={i} className="flex gap-5 group">
                      <div className="w-10 h-10 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center font-extrabold flex-shrink-0 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">{i + 1}</div>
                      <div>
                        <h4 className="font-manrope font-extrabold text-[var(--color-on-surface)] text-lg mb-1">{step.title}</h4>
                        <p className="text-sm font-semibold text-[var(--color-secondary)] leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* For Creators */}
             <motion.div variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true }} className="h-full">
              <Card padding="xl" hoverEffect className="h-full flex flex-col !border border-[var(--color-primary)]/10 !rounded-[2.5rem] shadow-2xl shadow-[var(--color-primary)]/10 bg-gradient-to-b from-[var(--color-surface-lowest)] to-[var(--color-primary)]/5 p-10 md:p-14 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-primary)]/10 blur-[100px] rounded-full pointer-events-none" />
                <h3 className="relative z-10 text-3xl font-manrope font-extrabold mb-10 flex items-center gap-4 border-b border-[var(--color-outline-variant)]/10 pb-6">
                  <div className="p-3 bg-[var(--color-primary)] text-white rounded-2xl shadow-lg"><Cpu className="w-6 h-6" /></div> For Creators
                </h3>
                <div className="relative z-10 space-y-8 flex-grow">
                  {[
                    { title: "Upload Agent", desc: "List your AI tool with API endpoint and demo." },
                    { title: "Set Pricing", desc: "Choose subscription or one-time payment models." },
                    { title: "Earn Money", desc: "Get paid automatically as users subscribe." }
                  ].map((step, i) => (
                    <div key={i} className="flex gap-5 group">
                      <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-extrabold flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">{i + 1}</div>
                      <div>
                        <h4 className="font-manrope font-extrabold text-[var(--color-on-surface)] text-lg mb-1">{step.title}</h4>
                        <p className="text-sm font-semibold text-[var(--color-secondary)] leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-24 px-6 relative z-10 bg-[var(--color-surface-low)]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-[0.7rem] font-manrope font-extrabold text-[var(--color-primary)] uppercase tracking-[0.25em] mb-4">Success Stories</h2>
            <p className="text-4xl md:text-5xl font-manrope font-extrabold text-[var(--color-on-surface)] tracking-tight">Trusted by Creators</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {[
               { name: "Alex Hormozi", role: "AI Founder", quote: "Aivora's marketplace allowed me to scale my AI tool to thousands of users in just weeks." },
               { name: "Sarah Chen", role: "Indie Developer", quote: "The deployment process is seamless. I uploaded my agent and made my first sale within 24 hours." },
               { name: "Marcus Johnson", role: "Agency Owner", quote: "We source all our automation agents from Aivora. The quality control is incredible." }
            ].map((testimonial, i) => (
              <motion.div key={i} variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="h-full">
                <Card padding="xl" className="h-full flex flex-col !border border-[var(--color-outline-variant)]/10 !bg-white !rounded-[2.5rem] hover:-translate-y-2 hover:shadow-2xl hover:shadow-[var(--color-primary)]/10 transition-all duration-300 p-8 md:p-10">
                  <div className="flex text-amber-400 mb-8">
                    {[1,2,3,4,5].map(star => <Star key={star} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="text-[var(--color-on-surface)] font-semibold text-lg leading-relaxed mb-10 flex-grow text-center md:text-left italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center justify-center md:justify-start gap-4 mt-auto pt-6 border-t border-[var(--color-outline-variant)]/10">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-primary)]/5 border-2 border-[var(--color-surface-low)] flex flex-shrink-0 items-center justify-center shadow-inner">
                       <User size={20} className="text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <h4 className="font-manrope font-extrabold text-[var(--color-on-surface)]">{testimonial.name}</h4>
                      <p className="text-xs text-[var(--color-secondary)] uppercase tracking-widest font-bold mt-1">{testimonial.role}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-6 relative z-10 bg-[var(--color-surface)] mb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <Card className="relative overflow-hidden !border-none !bg-[var(--color-primary)] !rounded-[3.5rem] text-center py-20 px-6 sm:px-12 shadow-2xl shadow-[var(--color-primary)]/30">
              <div className="absolute inset-0 bg-white/5" />
              
              <div className="relative z-10 max-w-2xl mx-auto">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 text-white text-[0.65rem] font-manrope font-extrabold uppercase tracking-[0.2em] mb-10">
                  <Rocket size={12} className="mr-2" /> Final Invitation
                </span>
                <h2 className="text-4xl md:text-6xl font-manrope font-extrabold text-white mb-8 tracking-tighter leading-tight">
                  Ready to transcend your workflow?
                </h2>
                <p className="text-xl text-white/80 font-semibold mb-12 leading-relaxed">
                  Join the elite collective of creators using Aivora to scale digital dominance.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <Link to="/signup" className="px-10 py-5 bg-white text-[var(--color-primary)] rounded-full font-manrope font-extrabold uppercase tracking-widest text-sm shadow-xl hover:scale-105 transition-all">
                    Create Account
                  </Link>
                  <Link to="/signup" className="px-10 py-5 bg-white/10 text-white border border-white/20 rounded-full font-manrope font-extrabold uppercase tracking-widest text-sm hover:bg-white/5 transition-all">
                    Become a Creator
                  </Link>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;
