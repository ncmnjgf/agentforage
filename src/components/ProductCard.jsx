import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import Card from './ui/Card';
import Button from './ui/Button';

const ProductCard = ({ product }) => {
  // Dynamically resolve icon from lucide-react strings
  const IconComponent = Icons[product.iconName] || Icons.HelpCircle;

  return (
    <Card hoverEffect padding="none" className="h-[400px] flex flex-col group cursor-pointer border-none bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[var(--color-primary)]/20 relative overflow-hidden rounded-[2rem]">
      <Link to={`/product/${product.id}`} className="flex flex-col h-full flex-grow relative z-10">
        <div className={`h-36 bg-[var(--color-surface-lowest)] flex items-center justify-center relative overflow-hidden shrink-0`}>
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <IconComponent className="w-10 h-10 text-[var(--color-primary)]/40 group-hover:scale-110 group-hover:text-[var(--color-primary)] transition-all duration-300 relative z-10" />
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-3">
            <div>
              <span className="text-[0.7rem] font-bold text-[var(--color-primary)] mb-2 block uppercase tracking-widest font-manrope">
                {product.tag}
              </span>
              <h3 className="text-lg font-manrope font-extrabold text-[var(--color-on-surface)] group-hover:text-[var(--color-primary)] transition-colors line-clamp-1">
                {product.title}
              </h3>
              <p className="text-[var(--color-secondary)] text-xs mt-1 font-semibold">By <span className="text-[var(--color-on-surface)]">{product.creator}</span></p>
            </div>
          </div>
          
          <p className="text-[var(--color-secondary)] text-sm mt-2 line-clamp-2 leading-relaxed">{product.description}</p>
          
          <div className="mt-auto pt-6 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[0.65rem] font-bold uppercase tracking-wider text-[var(--color-secondary)] opacity-60">Investment</span>
              <span className="text-xl font-manrope font-extrabold text-[var(--color-primary)]">{product.price}</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-[#f59e0b] text-sm font-bold">
                <Icons.Star className="w-3.5 h-3.5 fill-current" />
                {product.rating}
              </div>
              <div className="w-8 h-8 rounded-full bg-[var(--color-surface-lowest)] flex items-center justify-center border border-[var(--color-outline-variant)]/20 text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all">
                <Icons.ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default ProductCard;
