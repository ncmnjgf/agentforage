import { motion } from 'framer-motion';
import { ArrowRight, Bot, Cpu, TrendingUp, Zap } from 'lucide-react';
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
      <section className="py-24 px-6 relative z-10 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="flex flex-col md:flex-row items-end justify-between mb-12"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Agents</h2>
              <p className="text-slate-400 text-lg max-w-2xl">
                Hand-picked by our team for exceptional performance and reliability.
              </p>
            </div>
            <Link to="/browse" className="text-purple-400 hover:text-purple-300 font-medium flex items-center gap-2 mt-4 md:mt-0 transition-colors group">
              View all featured
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
      <section className="py-24 px-6 relative z-10 border-y border-slate-800">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Browse by Category</h2>
            <p className="text-slate-400 text-lg">Find exactly the right agent for your specific needs.</p>
          </motion.div>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {categories.map((category) => (
              <motion.div key={category.name} variants={fadeIn}>
                <Link to="/browse">
                  <Card 
                    padding="lg" 
                    hoverEffect 
                    glassmorphism={false} 
                    className="flex flex-col items-center justify-center text-center group bg-slate-800/30 hover:bg-slate-800/80 cursor-pointer"
                  >
                    <div className="p-4 rounded-full bg-slate-700/50 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300 mb-4 inline-flex">
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-200 group-hover:text-white mb-2">{category.name}</h3>
                    <p className="text-slate-500 text-sm group-hover:text-purple-300 transition-colors">{category.count} Agents</p>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <Card className="relative overflow-hidden border-purple-500/30 bg-gradient-to-br from-slate-900 to-purple-900/40 text-center py-16 px-6 sm:px-12">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
              
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to transform your workflow?
                </h2>
                <p className="text-lg text-slate-300 mb-10">
                  Join thousands of developers and businesses using Aivora to scale operations with autonomous AI.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button size="lg" className="px-8 shadow-purple-500/20">
                    Create an Account
                  </Button>
                  <Button variant="outline" size="lg" className="px-8">
                    Become a Creator
                  </Button>
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
