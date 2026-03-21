import type { Product } from '../types';

export const mockProducts: Product[] = [
  {
    id: '1',
    title: 'AutoCoder Pro',
    creator: 'DevForge AI',
    price: '$49/mo',
    rating: 4.9,
    sales: '1.2k',
    iconName: 'Cpu',
    color: 'from-blue-500/20 to-cyan-500/5',
    tag: 'Development',
    description: 'An autonomous coding assistant that builds and refactors complex architecture.'
  },
  {
    id: '2',
    title: 'Nexus Data Analyst',
    creator: 'Quantum Analytics',
    price: '$79/mo',
    rating: 4.8,
    sales: '850',
    iconName: 'TrendingUp',
    color: 'from-purple-500/20 to-pink-500/5',
    tag: 'Data Science',
    description: 'Extract actionable insights from raw data in seconds with natural language.'
  },
  {
    id: '3',
    title: 'OmniSupport Bot',
    creator: 'CustomerFirst',
    price: '$29/mo',
    rating: 4.7,
    sales: '3.4k',
    iconName: 'Bot',
    color: 'from-emerald-500/20 to-teal-500/5',
    tag: 'Customer Service',
    description: '24/7 intelligent customer support agent capable of resolving complex tickets.'
  },
  {
    id: '4',
    title: 'CopyGenius AI',
    creator: 'WordMakers',
    price: '$19/mo',
    rating: 4.6,
    sales: '5.1k',
    iconName: 'PenTool',
    color: 'from-orange-500/20 to-red-500/5',
    tag: 'Marketing',
    description: 'Generate high-converting landing page copy and social media content.'
  },
  {
    id: '5',
    title: 'Visionary Designer',
    creator: 'PixelPerfect',
    price: '$59/mo',
    rating: 4.9,
    sales: '2.1k',
    iconName: 'Image',
    color: 'from-fuchsia-500/20 to-rose-500/5',
    tag: 'Design',
    description: 'Create stunning UI/UX layouts based on simple text descriptions.'
  },
  {
    id: '6',
    title: 'SecureGuard Sentinel',
    creator: 'CyberShield',
    price: '$99/mo',
    rating: 4.9,
    sales: '420',
    iconName: 'Shield',
    color: 'from-slate-500/20 to-indigo-500/5',
    tag: 'Security',
    description: 'Autonomous threat detection and automated vulnerability patching.'
  }
];

// Provide an easy way to get just featured products
export const getFeaturedProducts = () => mockProducts.slice(0, 3);
