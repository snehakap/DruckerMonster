import { Target, Users, Award, TrendingUp, Printer } from 'lucide-react';
import { Link } from 'react-router-dom';

export function About() {
  const stats = [
    { value: '19+', label: 'Jahre Erfahrung' },
    { value: '1.300+', label: 'Zufriedene Kunden' },
    { value: '3', label: 'Bediente Länder' },
    { value: '24/7', label: 'Service & Support' },
  ];

  const values = [
    {
      icon: Printer,
      title: 'Der richtige Drucker für den richtigen Einsatz',
      description:
        'Wir unterstützen unsere Kunden bei der Auswahl des idealen Epson- oder Brady-Druckers – abgestimmt auf Anwendung, Druckvolumen und Branchenanforderungen.',
    },
    {
      icon: Users,
      title: 'Kundenorientierter Ansatz',
      description:
        'Von der Beratung über die Installation bis hin zum After-Sales-Support steht der langfristige Erfolg unserer Kunden im Mittelpunkt.',
    },
    {
      icon: Award,
      title: 'Autorisiert & zuverlässig',
      description:
        'Wir liefern originale Epson- und Brady-Drucker sowie Zubehör, Etiketten, Tinten und Verbrauchsmaterialien.',
    },
    {
      icon: TrendingUp,
      title: 'Produktivität steigern',
      description:
        'Unsere Drucklösungen erhöhen die Effizienz in Büros, Lagern, Produktionsstätten, Laboren und im Einzelhandel.',
    },
  ];

  const timeline = [
    {
      year: '2006',
      event:
        'Gründung als AIB Allgemeiner Industriebedarf GmbH & Co. KG mit Fokus auf Kennzeichnungs- und Identifikationssysteme.',
    },
    {
      year: '2018',
      event:
        'Umfirmierung zu Labelmonster GmbH & Co. KG und Erweiterung des Portfolios um Etikettier-, Kennzeichnungs-, Druck- und Schneidsysteme.',
    },
    {
      year: '2019',
      event:
        'Ernennung zum einzigen autorisierten Premium-Distributor in Deutschland für Lighthouse UK Ltd. / Max Co Japan Produkte (CPM-100® & CPM-200®).',
    },
    {
      year: '2022',
      event:
        'Erweiterung des Kundenstamms auf über 1.300 Unternehmen in Deutschland und Österreich – betreut vom Hauptsitz in Duisburg.',
    },
    {
      year: '2024',
      event:
        'Stärkung der internationalen Präsenz durch die Gründung der Labelmonster Schweiz GmbH zur Betreuung von Kunden in der Schweiz.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-emerald-50/30 to-white pt-44 pb-20 px-4 sm:px-6 lg:px-8">

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl text-gray-900 mb-6">
            Die Zukunft des Druckens gestalten
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Seit 2008 steht DruckerMonster für innovative Drucklösungen und unterstützt Unternehmen weltweit mit zuverlässiger Technologie und Expertise.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group text-center p-8 bg-white border border-gray-200 rounded-2xl hover:border-[rgb(0,146,82)] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 cursor-pointer"
            >
              <div className="text-5xl mb-2 bg-gradient-to-r from-[rgb(0,146,82)] to-emerald-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission */}
        <div className="mb-20">
          <div className="relative bg-gradient-to-br from-emerald-50 to-white border-2 border-[rgb(0,146,82)]/20 rounded-2xl p-12 shadow-xl overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[rgb(0,146,82)]/5 to-transparent rounded-full blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl text-gray-900 mb-6 text-center">
                Unsere Mission
              </h2>
              <p className="text-gray-700 text-lg text-center max-w-4xl mx-auto leading-relaxed">
                Bereitstellung zuverlässiger, effizienter und praxisorientierter Drucklösungen mit Epson- und Brady-Druckern, damit Unternehmen intelligenter, schneller und mit maximaler Sicherheit drucken können.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-4xl text-gray-900 text-center mb-12">
            Unsere Werte
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-[rgb(0,146,82)] transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20 transform hover:-translate-y-2 cursor-pointer"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:from-[rgb(0,146,82)] group-hover:to-emerald-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
                  <value.icon className="w-8 h-8 text-[rgb(0,146,82)] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="text-4xl text-gray-900 text-center mb-12">
            Unsere Geschichte
          </h2>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[rgb(0,146,82)] via-emerald-400 to-emerald-300 rounded-full" />
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-20 group">
                  <div className="absolute left-5 w-6 h-6 bg-gradient-to-br from-[rgb(0,146,82)] to-emerald-600 rounded-full ring-4 ring-white shadow-lg group-hover:scale-125 transition-transform" />
                  <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[rgb(0,146,82)] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 cursor-pointer">
                    <div className="inline-block px-3 py-1 bg-emerald-50 text-[rgb(0,146,82)] rounded-full text-sm mb-2">
                      {item.year}
                    </div>
                    <div className="text-gray-700">{item.event}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[rgb(0,146,82)] to-emerald-600 rounded-2xl p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
          <div className="relative">
            <h2 className="text-4xl text-white mb-4">
              Werden Sie Teil unserer Erfolgsgeschichte
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Werden Sie Teil der DruckerMonster-Familie und erleben Sie den Unterschied, den Qualität und Service ausmachen.
            </p>
            <Link to="/contact">
  <button className="px-8 py-4 bg-white text-[rgb(0,146,82)] rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-xl transform hover:scale-105">
    Kontakt aufnehmen
  </button>
</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
