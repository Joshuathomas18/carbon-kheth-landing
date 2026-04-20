export const Footer = () => {
  return (
    <footer className="w-full py-12 px-8 border-t border-outline-ghost mt-20 bg-surface-low">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary rounded flex items-center justify-center font-bold text-black text-xs">K</div>
            <span className="text-lg font-bold tracking-tighter text-white">Carbon Kheth</span>
          </div>
          <p className="max-w-xs text-sm text-secondary leading-relaxed">
            The Precision Monolith for Global Carbon Markets. Built for high-stakes enterprise MRV scalability.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest">Platform</h4>
            <ul className="space-y-2 text-sm text-secondary">
              <li><a href="#" className="hover:text-primary">WhatsApp Native</a></li>
              <li><a href="#" className="hover:text-primary">GEE Integration</a></li>
              <li><a href="#" className="hover:text-primary">Verra Compliance</a></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest">Company</h4>
            <ul className="space-y-2 text-sm text-secondary">
              <li><a href="#" className="hover:text-primary">Documentation</a></li>
              <li><a href="#" className="hover:text-primary">Registry-Ready</a></li>
              <li><a href="#" className="hover:text-primary">Privacy</a></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest">Connect</h4>
            <ul className="space-y-2 text-sm text-secondary font-mono tracking-tighter">
              <li><a href="https://calendly.com/joshjothom05/30min" className="text-primary hover:underline">Book a Call</a></li>
              <li><a href="mailto:joshjothom05@gmail.com" className="hover:text-primary">Direct Email</a></li>
              <li><a href="https://www.linkedin.com/in/joshua-thomas-b71023202/" className="hover:text-primary">LinkedIn Profile</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-outline-ghost flex justify-between items-center text-[10px] text-secondary/50 uppercase tracking-[0.2em] font-mono">
        <span>© 2026 Carbon Kheth Labs</span>
        <span>Secure Orbital Infrastructure</span>
      </div>
    </footer>
  );
};
