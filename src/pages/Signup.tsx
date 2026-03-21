import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sparkles, Mail, Lock, User as UserIcon } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call & auth creation
    setTimeout(() => {
      login(email || 'newuser@example.com');
      setIsLoading(false);
      navigate('/dashboard', { replace: true });
    }, 1500);
  };

  return (
    <div className="min-h-[calc(100vh-88px)] flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-[400px] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

      <Card padding="lg" className="w-full max-w-md relative z-10 border-slate-700 bg-slate-900/80">
        <div className="flex flex-col items-center justify-center mb-8">
          <Link to="/" className="flex items-center gap-2 group mb-6">
            <div className="bg-purple-600 p-2 rounded-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-white">
              AgentForge
            </span>
          </Link>
          <h1 className="text-2xl font-bold text-slate-100">Create an account</h1>
          <p className="text-slate-400 text-sm mt-2">Join the autonomous AI marketplace</p>
        </div>

        <form onSubmit={handleSignup} className="space-y-5">
          <Input 
            label="Full Name" 
            type="text" 
            placeholder="John Doe"
            leftIcon={<UserIcon className="w-4 h-4" />}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="bg-slate-950/50"
          />

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

          <Button 
            type="submit" 
            fullWidth 
            size="lg" 
            isLoading={isLoading}
            className="mt-4 shadow-purple-500/20"
          >
            Create Account
          </Button>
        </form>

        <div className="mt-8 text-center text-sm text-slate-400">
          Already have an account?{' '}
          <Link to="/login" className="text-purple-400 font-medium hover:text-purple-300 transition-colors">
            Log in
          </Link>
        </div>
      </Card>
      
    </div>
  );
};

export default Signup;
