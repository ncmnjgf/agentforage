import { Loader2 } from 'lucide-react';

const Loader = ({ size = 'md', text, fullScreen = false }) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const content = (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className="relative">
        <div className={`absolute inset-0 rounded-full blur-md bg-[var(--color-primary)]/20 animate-pulse`} />
        <Loader2 className={`${sizes[size]} text-[var(--color-primary)] animate-spin relative z-10`} />
      </div>
      {text && <p className="text-slate-400 font-medium text-sm animate-pulse">{text}</p>}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-[100] bg-slate-900/80 backdrop-blur-sm flex items-center justify-center">
        {content}
      </div>
    );
  }

  return <div className="flex items-center justify-center p-4 w-full h-full min-h-[100px]">{content}</div>;
};

export default Loader;
