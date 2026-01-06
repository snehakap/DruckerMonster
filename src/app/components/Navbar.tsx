import { Link, useLocation } from 'react-router-dom';
import { Printer, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

const navLinks = [
  { path: '/', label: 'Startseite' },
  { path: '/products', label: 'Produkte' },
  { path: '/service', label: 'Service' },
  { path: '/about', label: 'Über uns' },
  { path: '/contact', label: 'Kontakt' },
];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-gradient-to-br from-[rgb(0,146,82)] to-emerald-600 p-2.5 rounded-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-emerald-500/30">
              <Printer className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
  DruckerMonster
</div>

            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-5 py-2.5 rounded-xl transition-all relative group ${
                  isActive(link.path)
                    ? 'text-[rgb(0,146,82)]'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-emerald-50'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-[rgb(0,146,82)] to-transparent" />
                )}
                {!isActive(link.path) && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-[rgb(0,146,82)] to-transparent group-hover:w-1/2 transition-all duration-300" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-emerald-50 rounded-xl transition-all"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl transition-all ${
                  isActive(link.path)
                    ? 'bg-emerald-50 text-[rgb(0,146,82)] border-l-4 border-[rgb(0,146,82)] shadow-sm'
                    : 'text-gray-600 hover:bg-emerald-50 hover:text-gray-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}