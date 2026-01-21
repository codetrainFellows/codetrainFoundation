import logo from '../assets/logo3.png';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#00838f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Codetrain Foundation Logo" className="h-[15rem] w-[15rem] object-contain" />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-medium hover:text-teal-100">About</a>
            <a href="#" className="text-sm font-medium hover:text-teal-100">Our Impact</a>
            <a href="#" className="text-sm font-medium hover:text-teal-100">Support Us</a>
            <button className="bg-white text-[#00838f] px-5 py-2.5 rounded-md text-sm font-bold flex items-center gap-2 hover:bg-teal-50 transition-colors">
              Donate via KATO
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
