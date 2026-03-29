import { Link } from 'react-router-dom';
import { Bot, ArrowLeft } from 'lucide-react';
import Button from '../components/ui/Button';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="w-24 h-24 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center mb-6">
        <Bot className="w-12 h-12 text-[var(--color-primary)]" />
      </div>
      <h1 className="text-6xl font-bold text-white mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-slate-200 mb-4">Agent Not Found</h2>
      <p className="text-slate-400 max-w-md mb-8">
        The autonomous agent or page you are looking for has been moved, deleted, or never existed in the marketplace.
      </p>
      <Link to="/">
        <Button leftIcon={<ArrowLeft className="w-4 h-4" />}>
          Return Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
