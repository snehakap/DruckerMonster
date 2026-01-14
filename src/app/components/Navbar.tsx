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
        <div className="flex justify-between items-center h-32">
           {/* Logo */}
  <Link to="/" className="flex items-center gap-3 group">
    <img
      src="https://res.cloudinary.com/dyhc4jwuo/image/upload/v1768388782/new_logo_vytclt.png"
      alt="DruckerMonster Logo"
      className="h-30 -translate-y-1 translate-x-[-55px] "
    />
  </Link>

  {/* DESKTOP NAV */}
          <div className="hidden md:flex justify-center">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-lg font-bold transition-colors ${
                    isActive(link.path)
  ? 'text-[#5DBB7D]'
  : 'text-black hover:text-[#5DBB7D]'
                  }`}
                >
                  {link.label}

                  {/* underline */}
                  {isActive(link.path) && (
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#5DBB7D] rounded-full" />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden justify-self-end p-2 rounded-xl hover:bg-emerald-50 transition"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="px-6 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-5 py-4 rounded-xl text-lg font-bold transition ${
                  isActive(link.path)
                    ? 'bg-[#e6f4ee] text-[#0b5f3c] border-l-4 border-[#5DBB7D]'
                    : 'text-black hover:bg-[#e6f4ee] hover:text-[#0b5f3c]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
