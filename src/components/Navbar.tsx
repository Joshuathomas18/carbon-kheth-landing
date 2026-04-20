import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 glass">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-bold text-black italic">K</div>
        <span className="text-xl font-bold tracking-tighter text-white">Carbon_kheth</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-secondary">
        <Link href="#features" className="hover:text-primary transition-colors">Features</Link>
        <Link href="#calculator" className="hover:text-primary transition-colors">Calculator</Link>
        <Link href="#compliance" className="hover:text-primary transition-colors">Compliance</Link>
      </div>

      <Link 
        href="https://calendly.com/placeholder" 
        className="px-5 py-2.5 bg-primary text-black font-bold rounded-md hover:bg-primary-dim transition-all text-sm glow-primary"
      >
        Book a Pilot
      </Link>
    </nav>
  );
};
