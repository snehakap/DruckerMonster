import { Printer, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row md:justify-start gap-12">
          
          {/* Company Info */}
          <div className="md:w-2/3">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-br from-[rgb(0,146,82)] to-emerald-600 p-2 rounded-xl shadow-lg shadow-emerald-500/30">
                <Printer className="w-6 h-6 text-white" />
              </div>
              <div className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                DruckerMonster
              </div>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              Drucklösungen für jede Anforderung
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-600 hover:text-[rgb(0,146,82)] transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center group-hover:bg-[rgb(0,146,82)] transition-colors">
                  <Phone className="w-4 h-4 text-[rgb(0,146,82)] group-hover:text-white transition-colors" />
                </div>
                <span>+49 (0) 203 - 75 77 69 00</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 hover:text-[rgb(0,146,82)] transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center group-hover:bg-[rgb(0,146,82)] transition-colors">
                  <Mail className="w-4 h-4 text-[rgb(0,146,82)] group-hover:text-white transition-colors" />
                </div>
                <span>info@druckermonster.de</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 hover:text-[rgb(0,146,82)] transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center group-hover:bg-[rgb(0,146,82)] transition-colors">
                  <MapPin className="w-4 h-4 text-[rgb(0,146,82)] group-hover:text-white transition-colors" />
                </div>
                <span>Duisburg, Deutschland</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:ml-12 md:w-1/3">
            <h3 className="text-gray-900 mb-4 font-semibold">Schnellzugriff</h3>
            <div className="space-y-2">
              <Link to="/products" className="block text-gray-600 hover:text-[rgb(0,146,82)] transition-colors hover:translate-x-1 transform duration-200">
                Produkte
              </Link>
              <Link to="/service" className="block text-gray-600 hover:text-[rgb(0,146,82)] transition-colors hover:translate-x-1 transform duration-200">
                Service
              </Link>
              <Link to="/about" className="block text-gray-600 hover:text-[rgb(0,146,82)] transition-colors hover:translate-x-1 transform duration-200">
                Über uns
              </Link>
              <Link to="/contact" className="block text-gray-600 hover:text-[rgb(0,146,82)] transition-colors hover:translate-x-1 transform duration-200">
                Kontakt
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} DruckerMonster. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
