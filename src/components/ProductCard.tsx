import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import type { Product } from '../types';
import Card from './ui/Card';
import Button from './ui/Button';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  // Dynamically resolve icon from lucide-react strings
  // @ts-expect-error - Dynamic import based on string name
  const IconComponent = Icons[product.iconName] || Icons.HelpCircle;

  return (
    <Card hoverEffect padding="none" className="h-full flex flex-col group cursor-pointer border border-slate-700/50 bg-slate-800/40">
      <Link to={`/product/${product.id}`} className="flex flex-col h-full flex-grow">
        <div className={`h-32 bg-gradient-to-br ${product.color} flex items-center justify-center relative overflow-hidden shrink-0`}>
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <IconComponent className="w-8 h-8 text-white/80 group-hover:scale-110 transition-transform duration-300 relative z-10" />
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-2">
            <div>
              <span className="text-xs font-medium text-purple-400 mb-2 block uppercase tracking-wider">
                {product.tag}
              </span>
              <h3 className="text-lg font-bold text-slate-100 group-hover:text-purple-300 transition-colors line-clamp-1">
                {product.title}
              </h3>
              <p className="text-slate-400 text-sm mt-1">By <span className="text-slate-300 font-medium">{product.creator}</span></p>
            </div>
          </div>
          
          <p className="text-slate-500 text-sm mt-2 line-clamp-2">{product.description}</p>
          
          <div className="mt-auto pt-6 flex items-center justify-between border-t border-slate-700/50">
            <div className="flex flex-col">
              <span className="text-xs text-slate-500">Starting at</span>
              <span className="text-lg font-bold text-white">{product.price}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 text-amber-400 text-sm font-medium mr-2">
                <Icons.Star className="w-3.5 h-3.5 fill-current" />
                {product.rating}
              </div>
              <Button variant="ghost" size="sm" className="text-purple-400 hover:bg-purple-500/10 shrink-0">
                Details
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default ProductCard;
