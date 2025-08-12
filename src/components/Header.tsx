
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Arsenal', href: '#servicos' },
    { name: 'Demonstrativos', href: '#demos' },
    { name: 'Revolução', href: '#contato' },
  ];

  const handleSmoothScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 w-full backdrop-blur-xl border-b z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 shadow-xl border-purple-200' 
          : 'bg-white/90 shadow-lg border-purple-100'
      }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <Sparkles className="text-white w-6 h-6" />
            </div>
            <div>
            <span className="font-montserrat font-bold text-xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                AllSolutions
              </span>
              <div className="text-xs text-gray-500 font-medium">DIGITAL EMPIRE BUILDERS</div>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleSmoothScroll(item.href)}
                className="text-gray-700 hover:text-purple-600 font-medium transition-all duration-200 hover:scale-105 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            <Link to="/projetos" className="text-gray-700 hover:text-purple-600 font-medium transition-all duration-200 hover:scale-105 relative group">
              Projetos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/sobre" className="text-gray-700 hover:text-purple-600 font-medium transition-all duration-200 hover:scale-105 relative group">
              Sobre
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/contato" className="text-gray-700 hover:text-purple-600 font-medium transition-all duration-200 hover:scale-105 relative group">
              Contato
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Dominar Mercado
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-purple-100">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    handleSmoothScroll(item.href);
                    setIsMenuOpen(false);
                  }}
                  className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200 py-2 text-left"
                >
                  {item.name}
                </button>
              ))}
              <Link 
                to="/projetos" 
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200 py-2"
              >
                Projetos
              </Link>
              <Link 
                to="/sobre" 
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200 py-2"
              >
                Sobre
              </Link>
              <Link 
                to="/contato" 
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200 py-2"
              >
                Contato
              </Link>
              <Button 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white mt-4"
                onClick={() => {
                  setIsMenuOpen(false);
                  document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Dominar Mercado
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
