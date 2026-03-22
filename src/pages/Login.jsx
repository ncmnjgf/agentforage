import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Sparkles, Mail, Lock } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();
  const location = useLocation();
  
  const from = location.state?.from?.pathname || '/dashboard';

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      login(email || 'user@example.com');
      setIsLoading(false);
      navigate(from, { replace: true });
    }, 1000);
  };

  return (
    <div className="min-h-[calc(100vh-88px)] flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-[400px] bg-purple-600/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

      <Card padding="lg" className="w-full max-w-md relative z-10 border-slate-700 bg-slate-900/80">
        <div className="flex flex-col items-center justify-center mb-8">
          <Link to="/" className="flex items-center gap-2 group mb-6">
            <img src="/images/logoagent.jpg"  alt="Aivora Logo" className="w-10 h-10 object-contain" />
            <span className="text-2xl font-bold tracking-tight text-white">
              Aivora
            </span>
          </Link>
          <h1 className="text-2xl font-bold text-slate-100">Welcome back</h1>
          <p className="text-slate-400 text-sm mt-2">Log in to your account to continue</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <Input 
            label="Email Address" 
            type="email" 
            placeholder="you@example.com"
            leftIcon={<Mail className="w-4 h-4" />}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-slate-950/50"
          />
          
          <div className="space-y-1">
            <Input 
              label="Password" 
              type="password" 
              placeholder="••••••••"
              leftIcon={<Lock className="w-4 h-4" />}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-slate-950/50"
            />
            <div className="flex justify-end pt-1">
              <Link to="#" className="text-sm text-purple-400 hover:text-purple-300 transition-colors">
                Forgot password?
              </Link>
            </div>
          </div>

          <Button 
            type="submit" 
            fullWidth 
            size="lg" 
            isLoading={isLoading}
            className="mt-4 shadow-purple-500/20"
          >
            Sign In
          </Button>
        </form>

        <div className="mt-8 text-center text-sm text-slate-400">
          Don't have an account?{' '}
          <Link to="/signup" className="text-purple-400 font-medium hover:text-purple-300 transition-colors">
            Sign up
          </Link>
        </div>
      </Card>
      
    </div>
  );
};

export default Login;
