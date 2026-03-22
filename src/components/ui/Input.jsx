import { forwardRef } from 'react';

const Input = forwardRef(
  ({ className = '', label, error, leftIcon, rightIcon, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="w-full flex flex-col gap-1.5">
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium text-slate-300 ml-1">
            {label}
          </label>
        )}
        
        <div className="relative group">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-purple-400 pointer-events-none transition-colors">
              {leftIcon}
            </div>
          )}
          
          <input
            id={inputId}
            ref={ref}
            className={`
              w-full bg-slate-900 border text-slate-100 rounded-xl px-4 py-2.5
              transition-all duration-200 outline-none placeholder:text-slate-500
              focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500
              ${error ? 'border-red-500/50 focus:ring-red-500/50 focus:border-red-500' : 'border-slate-700 hover:border-slate-600'}
              ${leftIcon ? 'pl-10' : ''}
              ${rightIcon ? 'pr-10' : ''}
              ${className}
            `}
            {...props}
          />
          
          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
              {rightIcon}
            </div>
          )}
        </div>
        
        {error && (
          <span className="text-xs text-red-400 ml-1 font-medium bg-red-400/10 py-1 px-2 rounded-md inline-block w-fit">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
