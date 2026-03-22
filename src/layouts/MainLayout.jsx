import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen relative bg-slate-900">
      {/* Background ambient glow effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/20 blur-[120px]" />
        <div className="absolute top-[20%] right-[-10%] w-[30%] h-[40%] rounded-full bg-blue-900/10 blur-[120px]" />
      </div>

      <Navbar />
      
      {/* Dynamic Main Content Area */}
      <main className="flex-grow pt-[88px] relative z-10">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
