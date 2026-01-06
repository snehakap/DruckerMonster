import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Wrench, Award, CheckCircle, Sparkles } from 'lucide-react';

export function Home() {
  const features = [
  {
    icon: Award,
    title: 'Premium-Qualität',
    description: 'Hochwertige Etikettendrucker führender Marken – zuverlässig und langlebig.',
  },
  {
    icon: Zap,
    title: 'Schnelle Lieferung',
    description: 'Zuverlässige und schnelle Lieferung, in der Regel innerhalb von 2 Werktagen.',
  },
  {
    icon: Wrench,
    title: 'Expertenservice',
    description: 'Kompetente Beratung und zuverlässiger Kundensupport für alle Fragen.',
  },
];

  const topSellers = [
    {
      name: 'Brady M610 Etikettendrucker',
      image: 'public/brady.jpg',
      price: '€4.999',
    },
    {
      name: 'Epson ColorWorks C6000Ae Etikettendrucker',
      image: 'images/EpsonColorWorksC6000Ae.jpg',
      price: '€4.999',
    },
    {
      name: 'Epson ColorWorks TM-C3500 Farbetikettendrucker',
      image: 'images/EpsonColorWorksTM-C3500.png',
      price: '€4.999',
    },
  ];

  const benefits = [
    'Professional-grade printing solutions',
    'Dedicated technical support team',
    'Cost-effective maintenance plans',
    'Eco-friendly printing technology',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-emerald-50/30 to-white">

      {/* Hero Section */}
      <section className="relative pt-32 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[65vh] md:min-h-[75vh] lg:min-h-[85vh]">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
  <source src="https://collection.cloudinary.com/dnbvuwkcb/7227967ed937450d2d3c6a972ae8c4ae" type="video/mp4" />
</video>
        <div className="absolute inset-0 bg-black/35 z-10" />

        <div className="relative z-20 max-w-7xl mx-auto h-full flex items-center justify-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center text-white w-full">
            <div className="space-y-8 pt-20">
              <h1 className="text-5xl lg:text-7xl leading-tight">
                Das Druckerlebnis
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-emerald-400">
                  Neu definiert
                </span>
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed max-w-xl">
                Entdecken Sie eine große Auswahl an Etikettendruckern führender Marken, entwickelt für all Ihre Anforderungen.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/products" className="group relative px-8 py-4 bg-white text-emerald-700 rounded-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <span className="relative">Produkte entdecken</span>
                  <ArrowRight className="relative w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>

                <Link to="/contact" className="group px-8 py-4 border-2 border-white text-white rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
                  Vertrieb kontaktieren
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>
            </div>
            <div className="hidden lg:block" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-gray-900 mb-4">Willkommen bei <span className="font-semibold">DruckerMonster</span></h2>
            <p className="text-gray-600 text-lg">Als Spezialist für Etikettendrucker bieten wir eine breite Auswahl an hochwertigen Markengeräten. Mit fachkundiger Beratung und zuverlässigem Service unterstützen wir unsere Kundinnen und Kunden dabei, effiziente und passgenaue Etikettierlösungen zu realisieren.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
  {features.map((feature, index) => {
    const Icon = feature.icon;
    return (
      <div
        key={index}
        className="group relative p-8 bg-gradient-to-br from-white to-emerald-50/50 border border-gray-200 rounded-2xl hover:border-[rgb(0,146,82)] transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20 transform hover:-translate-y-2"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[rgb(0,146,82)]/5 to-transparent rounded-bl-full" />
        <div className="relative flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-[rgb(0,146,82)] to-emerald-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-emerald-500/30">
            <Icon className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl text-gray-900 mb-3">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      </div>
    );
  })}
</div>

        </div>
      </section>

      {/* New TOP SELLERS Section */}
<section className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-emerald-50/10 to-white">

  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl text-gray-900 mb-4">Unsere Bestseller</h2>
      <p className="text-gray-600 text-lg">Die beliebtesten Drucker unserer Kundinnen und Kunden</p>
    </div>

    <div className="grid md:grid-cols-3 gap-10">
      {topSellers.map((item, index) => (
          <div className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-emerald-400/30 transition-all duration-300 hover:-translate-y-2">
  <img
    src={item.image}
    alt={item.name}
    className="w-full h-56 object-contain rounded-t-2xl bg-gray-50"
  />
  <div className="p-6 space-y-3">
    <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
    <p className="text-lg text-emerald-700 font-medium">{item.price}</p>
    <Link
      to="/products"
      className="inline-flex items-center gap-2 text-[rgb(0,146,82)] hover:bg-gray-100 group-hover:text-emerald-700 transition-colors"
    >
      Produkt ansehen
      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
    </Link>
  </div>
</div>
      ))}
    </div>

    {/* Button below products */}
    <div className="text-center mt-12">
      <Link
        to="/products"
         className="inline-block px-8 py-4 bg-[rgb(0,146,82)] text-white rounded-xl hover:bg-emerald-700 transition-all duration-300 shadow-xl transform hover:scale-105 font-medium"
      >
        Weitere Produkte
      </Link>
    </div>
  </div>
</section>


      {/* Was uns auszeichnet Section */}
<section className="py-18 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-emerald-50/30">
  <div className="max-w-7xl mx-auto">

    {/* Centered Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl text-gray-900 mb-4">Was uns auszeichnet</h2>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto">
        Bei DruckerMonster kombinieren wir hochwertige Etikettendrucker mit fachkundiger Beratung, um umfassende Drucklösungen für jede Anforderung zu bieten – ob zu Hause, in kleinen Büros oder wachsenden Unternehmen.
      </p>
    </div>

    {/* Benefits Grid */}
    <div className="grid md:grid-cols-2 gap-12 items-center">
      
      {/* Image */}
      <div className="relative">
        <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-200">
          <img
            src='public/using peinter.jpg'
            alt="Moderne Drucktechnologie"
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
      </div>

      {/* Benefits List */}
      <div className="space-y-4">
        {[
          'Hochwertige Etikettendrucker von vertrauenswürdigen Marken',
          'Schnelle und zuverlässige Lieferung',
          'Kompetente Beratung und engagierter Kundenservice',
          'Vor-Ort-Installation und Schulungen',
          'Reparaturservice für sorgenfreie Wartung'
        ].map((item, index) => (
          <div key={index} className="group flex items-start gap-3 p-4 rounded-xl hover:bg-emerald-50 transition-all duration-300 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0 group-hover:bg-[rgb(0,146,82)] transition-colors">
              <CheckCircle className="w-5 h-5 text-[rgb(0,146,82)] group-hover:text-white transition-colors" />
            </div>
            <span className="text-gray-700 pt-0.5">{item}</span>
          </div>
        ))}
      </div>

    </div>

    {/* Learn More Link */}
    <div className="text-center mt-12">
      <Link to="/service" className="inline-flex items-center gap-2 text-[rgb(0,146,82)] hover:text-emerald-700 transition-colors group">
        <span>Mehr über unsere Services erfahren</span>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
      </Link>
    </div>

  </div>
</section>

      {/* CTA Section */}
<section className="py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-5xl mx-auto">
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[rgb(0,146,82)] to-emerald-600 p-12 text-center shadow-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
      <div className="relative">
        <h2 className="text-4xl text-white mb-4">Bereit, Ihre Druckprozesse zu revolutionieren?</h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          Schließen Sie sich tausenden zufriedenen Unternehmen an, die DruckerMonster für ihre Drucklösungen vertrauen.
        </p>
        <Link to="/contact" className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-[rgb(0,146,82)] rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-xl transform hover:scale-105">
          <span>Jetzt starten</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}
