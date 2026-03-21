import { motion } from 'framer-motion';
import type { Product } from '../types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  columns?: 2 | 3 | 4;
}

const ProductGrid = ({ products, columns = 3 }: ProductGridProps) => {
  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4 }
  };

  const gridCols = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
  };

  if (!products || products.length === 0) {
    return (
      <div className="w-full py-16 flex items-center justify-center border border-slate-800 rounded-2xl bg-slate-900/50">
        <p className="text-slate-500">No agents found matching your criteria.</p>
      </div>
    );
  }

  return (
    <motion.div 
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
      className={`grid ${gridCols[columns]} gap-6 lg:gap-8`}
    >
      {products.map((product) => (
        <motion.div key={product.id} variants={fadeIn} className="h-full">
          <ProductCard product={product} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProductGrid;
