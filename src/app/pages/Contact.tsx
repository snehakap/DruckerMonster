import { Mail, Phone, MapPin, Send, MessageCircle, Wrench, Package } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formular abgeschickt:', formData);
    alert('Vielen Dank für Ihre Nachricht! Wir melden uns in Kürze bei Ihnen.');
    setFormData({ name: '', email: '', company: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
  {
    icon: Phone,
    title: 'Anfragen',
    details: [
      'Telefon: +49 (0) 203 - 75 77 69 00',
      'E-Mail: info@druckermonster.eu',
    ],
  },
  {
    icon: Wrench, // 🔧 Technischer Support
    title: 'Technischer Support',
    details: [
      'Telefon: +49 (0) 203 - 75 77 69 00',
      'E-Mail: support@druckermonster.eu',
    ],
  },
  {
    icon: Package, // 📦 Bestellungen
    title: 'Bestellungen',
    details: [
      'Telefon: +49 (0) 203 - 75 77 43 21',
      'E-Mail: order@druckermonster.eu',
    ],
  },
  {
    icon: MapPin,
    title: 'Büro',
    details: [
      'Labelmonster GmbH & Co. KG',
      'Großenbaumer Allee 98, 47269 Duisburg, Deutschland',
    ],
  },
];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-emerald-50/30 to-white pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl text-gray-900 mb-6">
            Lassen Sie uns ins Gespräch kommen
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Haben Sie eine Frage oder möchten Sie Ihre Druckprozesse optimieren? Wir sind für Sie da.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[rgb(0,146,82)] to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl text-gray-900">Nachricht senden</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                  Vollständiger Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[rgb(0,146,82)] focus:ring-4 focus:ring-emerald-500/10 transition-all"
                  placeholder="Max Mustermann"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                  E-Mail-Adresse *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[rgb(0,146,82)] focus:ring-4 focus:ring-emerald-500/10 transition-all"
                  placeholder="max@firma.de"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm text-gray-700 mb-2">
                    Unternehmen
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[rgb(0,146,82)] focus:ring-4 focus:ring-emerald-500/10 transition-all"
                    placeholder="Ihr Unternehmen"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm text-gray-700 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[rgb(0,146,82)] focus:ring-4 focus:ring-emerald-500/10 transition-all"
                    placeholder="+49 123 456 789"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
                  Nachricht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[rgb(0,146,82)] focus:ring-4 focus:ring-emerald-500/10 transition-all resize-none"
                  placeholder="Beschreiben Sie Ihr Anliegen oder Ihre Druckanforderungen..."
                />
              </div>

              <button
                type="submit"
                className="group w-full py-4 bg-gradient-to-r from-[rgb(0,146,82)] to-emerald-600 text-white rounded-xl hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                <span>Nachricht senden</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-[rgb(0,146,82)] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:from-[rgb(0,146,82)] group-hover:to-emerald-600 transition-all duration-300 group-hover:scale-110 shadow-lg">
                    <info.icon className="w-7 h-7 text-[rgb(0,146,82)] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl text-gray-900 mb-2">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 hover:text-[rgb(0,146,82)] transition-colors">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
