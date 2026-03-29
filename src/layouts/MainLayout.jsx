import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen relative bg-[var(--color-surface)]">
      {/* Background ambient effect: subtle tonal shift */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-5%] left-[-5%] w-[50%] h-[50%] rounded-full bg-[var(--color-primary)]/3 blur-[140px]" />
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
