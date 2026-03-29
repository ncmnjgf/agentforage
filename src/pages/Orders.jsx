import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Package, Search, ExternalLink, Calendar, Users, ShoppingCart, Filter } from 'lucide-react';
import { creatorService } from '../api/creator';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      const result = await creatorService.getOrders('usr_824');
      setOrders(result);
      setIsLoading(false);
    };
    fetchOrders();
  }, []);

  if (isLoading) return <div className="min-h-screen flex items-center justify-center bg-[var(--color-surface)]"><div className="animate-pulse text-[var(--color-primary)] font-bold">Retrieving Fulfillment Matrix...</div></div>;

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-primary)]/5 text-[var(--color-primary)] text-[0.65rem] font-bold uppercase tracking-widest mb-4">
            <ShoppingCart size={10} /> Fulfillment Matrix
          </div>
          <h1 className="text-4xl md:text-5xl font-manrope font-extrabold text-[var(--color-on-surface)] tracking-tight mb-4">
            Order <span className="text-[var(--color-primary)]">Insights</span>
          </h1>
          <p className="text-[var(--color-secondary)] font-semibold text-lg max-w-xl leading-relaxed opacity-80">
            Track your agent acquisitions, review buyer demographics, and monitor fulfillment status in real-time.
          </p>
        </div>
        <div className="flex gap-4">
           <Button variant="outline" leftIcon={<Filter size={18} />} className="!rounded-xl">Filter Matrix</Button>
           <Button variant="outline" className="!rounded-xl px-4"><ExternalLink size={18} /></Button>
        </div>
      </div>

      <div className="mb-12">
        <Input 
          placeholder="Locate transaction ID or buyer..." 
          className="max-w-md bg-[var(--color-surface-low)] border-none shadow-sm"
          leftIcon={<Search className="w-4 h-4 text-[var(--color-secondary)]" />}
        />
      </div>

      <Card className="!bg-[var(--color-surface-low)] !border-none !rounded-[3rem] p-4 overflow-hidden shadow-2xl shadow-[var(--color-primary)]/5">
         <div className="overflow-x-auto">
           <table className="w-full text-left">
             <thead>
               <tr className="border-b border-[var(--color-outline-variant)]/5">
                 <th className="px-10 py-7 text-[0.65rem] font-manrope font-extrabold uppercase tracking-widest text-[var(--color-secondary)] opacity-40">Transaction ID</th>
                 <th className="px-10 py-7 text-[0.65rem] font-manrope font-extrabold uppercase tracking-widest text-[var(--color-secondary)] opacity-40">Product Architecture</th>
                 <th className="px-10 py-7 text-[0.65rem] font-manrope font-extrabold uppercase tracking-widest text-[var(--color-secondary)] opacity-40">Buyer Entity</th>
                 <th className="px-10 py-7 text-[0.65rem] font-manrope font-extrabold uppercase tracking-widest text-[var(--color-secondary)] opacity-40">Revenue</th>
                 <th className="px-10 py-7 text-[0.65rem] font-manrope font-extrabold uppercase tracking-widest text-[var(--color-secondary)] opacity-40 text-right">Fulfillment</th>
               </tr>
             </thead>
             <tbody className="divide-y divide-[var(--color-outline-variant)]/5">
               {orders.map((order, index) => (
                 <motion.tr 
                   key={order.id}
                   initial={{ opacity: 0, x: -10 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.3, delay: index * 0.05 }}
                   className="hover:bg-white transition-all cursor-pointer group"
                 >
                   <td className="px-10 py-7">
                      <span className="text-xs font-manrope font-extrabold text-[var(--color-primary)]">{order.id}</span>
                      <div className="flex items-center gap-2 mt-1 opacity-40">
                         <Calendar size={10} />
                         <span className="text-[10px] font-bold">{order.date}</span>
                      </div>
                   </td>
                   <td className="px-10 py-7">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)]/5 flex items-center justify-center text-[var(--color-primary)]">
                           <Package size={14} />
                        </div>
                        <span className="text-sm font-bold text-[var(--color-on-surface)] group-hover:text-[var(--color-primary)] transition-colors">{order.product}</span>
                      </div>
                   </td>
                   <td className="px-10 py-7">
                      <div className="flex items-center gap-2">
                         <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-[8px] font-bold text-slate-500">
                           {order.buyer.charAt(0)}
                         </div>
                         <span className="text-sm font-semibold text-[var(--color-secondary)]">{order.buyer}</span>
                      </div>
                   </td>
                   <td className="px-10 py-7 font-manrope font-extrabold text-[var(--color-on-surface)]">
                     {order.amount}
                   </td>
                   <td className="px-10 py-7 text-right">
                      <span className={`px-4 py-1.5 rounded-full text-[0.6rem] font-bold uppercase tracking-widest border ${order.status === 'Delivered' ? 'bg-[var(--color-primary)]/5 text-[var(--color-primary)] border-[var(--color-primary)]/10' : 'bg-amber-50 text-amber-600 border-amber-100'}`}>
                        {order.status}
                      </span>
                   </td>
                 </motion.tr>
               ))}
             </tbody>
           </table>
         </div>
         <div className="p-10 flex flex-col items-center justify-center border-t border-[var(--color-outline-variant)]/5 bg-[var(--color-surface-low)]/30">
            <p className="text-[var(--color-secondary)] text-[0.65rem] font-bold uppercase tracking-widest mb-6 opacity-40">Viewing 5 of 124 transactions</p>
            <Button variant="ghost" className="!rounded-xl text-[var(--color-primary)] font-manrope font-extrabold text-xs uppercase tracking-widest">Load Historical Records</Button>
         </div>
      </Card>
    </div>
  );
};

export default Orders;
