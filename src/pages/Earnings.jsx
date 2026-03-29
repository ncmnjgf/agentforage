import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, Calendar, ArrowUpRight, ArrowDownLeft, Wallet, ShieldCheck, Download } from 'lucide-react';
import { creatorService } from '../api/creator';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Earnings = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEarnings = async () => {
      const result = await creatorService.getEarnings('usr_824');
      setData(result);
      setIsLoading(false);
    };
    fetchEarnings();
  }, []);

  if (isLoading) return <div className="min-h-screen flex items-center justify-center bg-[var(--color-surface)]"><div className="animate-pulse text-[var(--color-primary)] font-bold">Synchronizing Ledger...</div></div>;

  const stats = [
    { label: 'Total Revenue', value: `$${data.totalRevenue.toLocaleString()}`, icon: <DollarSign size={20} />, change: '+12.5%', isPositive: true },
    { label: 'Available Balance', value: `$${data.balance.toLocaleString()}`, icon: <Wallet size={20} />, change: 'Next payout: Oct 1st', isPositive: true },
    { label: 'Avg. Order Value', value: `$${data.avgOrderValue.toLocaleString()}`, icon: <TrendingUp size={20} />, change: '+5.2%', isPositive: true },
  ];

  const history = data.history;

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-primary)]/5 text-[var(--color-primary)] text-[0.65rem] font-bold uppercase tracking-widest mb-4">
            <DollarSign size={10} /> Revenue Nexus
          </div>
          <h1 className="text-4xl md:text-5xl font-manrope font-extrabold text-[var(--color-on-surface)] tracking-tight mb-4">
            Financial <span className="text-[var(--color-primary)]">Intelligence</span>
          </h1>
          <p className="text-[var(--color-secondary)] font-semibold text-lg max-w-xl leading-relaxed opacity-80">
            Monitor your architectural honorariums, track payout cycles, and optimize your asset pricing strategy.
          </p>
        </div>
        <Button leftIcon={<Wallet size={18} />} className="shadow-xl shadow-[var(--color-primary)]/20">
          Request Instant Payout
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <Card className="!bg-[var(--color-surface-low)] !border-none !rounded-[2.5rem] p-8 h-full flex flex-col group">
              <div className="flex items-center justify-between mb-8">
                <div className="p-4 rounded-3xl bg-white shadow-sm text-[var(--color-primary)] group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className={`flex items-center gap-1 text-[0.6rem] font-manrope font-extrabold uppercase tracking-widest px-3 py-1 rounded-full ${stat.isPositive ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                  {stat.isPositive ? <ArrowUpRight size={10} /> : <ArrowDownLeft size={10} />}
                  {stat.change}
                </div>
              </div>
              <p className="text-[var(--color-secondary)] text-[0.65rem] font-manrope font-extrabold uppercase tracking-widest mb-1 opacity-50">{stat.label}</p>
              <p className="text-4xl font-manrope font-extrabold text-[var(--color-on-surface)] tracking-tight">{stat.value}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <Card className="!bg-[var(--color-surface-low)] !border-none !rounded-[2.5rem] p-4 overflow-hidden">
             <div className="p-8 pb-4">
                <h3 className="text-xl font-manrope font-extrabold text-[var(--color-on-surface)] tracking-tight">Transaction Ledger</h3>
             </div>
             <div className="overflow-x-auto">
               <table className="w-full text-left">
                 <thead>
                   <tr className="border-b border-[var(--color-outline-variant)]/5">
                     <th className="px-8 py-5 text-[0.6rem] font-manrope font-extrabold uppercase tracking-widest text-[var(--color-secondary)] opacity-40">Date</th>
                     <th className="px-8 py-5 text-[0.6rem] font-manrope font-extrabold uppercase tracking-widest text-[var(--color-secondary)] opacity-40">Type</th>
                     <th className="px-8 py-5 text-[0.6rem] font-manrope font-extrabold uppercase tracking-widest text-[var(--color-secondary)] opacity-40">Status</th>
                     <th className="px-8 py-5 text-[0.6rem] font-manrope font-extrabold uppercase tracking-widest text-[var(--color-secondary)] opacity-40 text-right">Amount</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-[var(--color-outline-variant)]/5">
                   {history.map((tx) => (
                     <tr key={tx.id} className="hover:bg-white/40 transition-colors group">
                       <td className="px-8 py-5">
                          <div className="flex items-center gap-3">
                            <Calendar size={14} className="text-[var(--color-primary)] opacity-40" />
                            <span className="text-sm font-semibold text-[var(--color-on-surface)]">{tx.date}</span>
                          </div>
                       </td>
                       <td className="px-8 py-5 italic">
                          <span className={`text-xs font-bold uppercase tracking-widest ${tx.type === 'Sale' ? 'text-[var(--color-primary)]' : 'text-emerald-600'}`}>{tx.type}</span>
                       </td>
                       <td className="px-8 py-5">
                          <span className={`px-3 py-1 rounded-full text-[0.6rem] font-bold uppercase tracking-widest border ${tx.status === 'Completed' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-amber-50 text-amber-600 border-amber-100'}`}>
                            {tx.status}
                          </span>
                       </td>
                       <td className="px-8 py-5 text-right font-manrope font-extrabold text-[var(--color-on-surface)]">
                         {tx.amount}
                       </td>
                     </tr>
                   ))}
                 </tbody>
               </table>
             </div>
             <div className="p-8 text-center border-t border-[var(--color-outline-variant)]/5">
                <Button variant="ghost" size="sm" className="!rounded-xl text-[var(--color-primary)]">Download Full Ledger (CSV)</Button>
             </div>
          </Card>
        </div>

        <div className="space-y-8">
          <Card className="!bg-[var(--color-primary)] !border-none !rounded-[2.5rem] p-10 text-white shadow-xl shadow-[var(--color-primary)]/20">
             <div className="mb-10 p-4 bg-white/10 rounded-3xl w-fit">
                <ShieldCheck size={32} />
             </div>
             <h3 className="text-2xl font-manrope font-extrabold mb-4 tracking-tight">Trust & Verification</h3>
             <p className="text-white/80 text-sm font-medium leading-relaxed mb-10">
               Your earnings are protected by Aivora&apos;s cryptographic vault protocols. 85% of every acquisition is immediately allocated to your ledger.
             </p>
             <Button className="w-full !bg-white !text-[var(--color-primary)] hover:!bg-white/90 !rounded-2xl h-14 font-manrope font-extrabold uppercase tracking-widest text-xs">
                Review Agreement
             </Button>
          </Card>

          <Card className="!bg-[var(--color-surface-low)] !border-none !rounded-[2.5rem] p-10 group overflow-hidden relative">
             <div className="relative z-10">
               <h3 className="text-lg font-manrope font-extrabold text-[var(--color-on-surface)] mb-4 tracking-tight">Need assistance?</h3>
               <p className="text-[var(--color-secondary)] text-xs font-semibold leading-relaxed mb-8 opacity-60">
                 Our dedicated creator support team handles payout inquiries within 12 cycles.
               </p>
               <Button variant="outline" size="sm" className="!rounded-xl">Contact Support</Button>
             </div>
             <div className="absolute -bottom-6 -right-6 text-[var(--color-primary)]/5 transform rotate-12 group-hover:rotate-0 transition-transform duration-700">
                <HelpCircle size={120} />
             </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
const HelpCircle = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

export default Earnings;
