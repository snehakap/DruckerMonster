import { Wrench, Settings, Sparkles, CheckCircle,Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Service() {
  const services = [
    {
      icon:Settings,
      title: 'Geräteinstallation',
      description:
        'Auf Wunsch installieren wir die Geräte direkt bei Ihnen vor Ort, damit alles sofort einsatzbereit ist.',
      features: ['Installation vor Ort', 'Netzwerkkonfiguration', 'Schulung des Personals', 'Funktionsprüfung'],
    },
    {
      icon: Phone,
      title: 'Hotline & Support',
      description:
        'Wir stehen Ihnen telefonisch, per E-Mail und online für Fragen und weiterführende Informationen zur Verfügung.',
      features: ['Telefonische Unterstützung', 'E-Mail Support', 'Online-Hilfe', 'Schnelle Reaktionszeiten'],
    },
    {
      icon: Wrench,
      title: 'Wartung & Servicewerkstatt',
      description:
        'Unser eigenes Servicewerk betreut Wartung und Reparatur von Etikettendruckern, Druck- und Schneidsystemen.',
      features: ['Regelmäßige Wartung', 'Ersatzteile verfügbar', 'Performance-Optimierung', 'Diagnoseberichte'],
    },
    {
      icon: Sparkles,
      title: 'Updates & Zubehör',
      description:
        'Updates, technische Daten, neue Cliparts und aktuelle Treiber können jederzeit bei support@druckermonster.eu bestellt werden.',
      features: ['Software-Updates', 'Technische Datenblätter', 'Neue Cliparts', 'Treiberaktualisierung'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-emerald-50/30 to-white pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl text-gray-900 mb-6">
            Service & Unterstützung bei DruckerMonster
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bei DruckerMonster finden Sie leistungsstarke Etikettendrucker und Kennzeichnungssysteme, passend für Ihre Anforderungen – unterstützt durch umfassenden Service.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-[rgb(0,146,82)] transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20 transform hover:-translate-y-2 cursor-pointer"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:from-[rgb(0,146,82)] group-hover:to-emerald-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
                <service.icon className="w-8 h-8 text-[rgb(0,146,82)] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <div className="space-y-3">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-200 transition-colors">
                      <CheckCircle className="w-4 h-4 text-[rgb(0,146,82)]" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Section */}
<div className="bg-gradient-to-r from-[rgb(0,146,82)] to-emerald-600 rounded-2xl p-12 text-center shadow-2xl relative overflow-hidden">
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
  <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
  
  <div className="relative">
    <h2 className="text-4xl text-white mb-4">Unsere Garantie</h2>
    <p className="text-white/90 text-lg max-w-2xl mx-auto">
      Wir stehen zu unserem Service mit einer 100% Zufriedenheitsgarantie. Sollten Sie mit unserem Service nicht vollkommen zufrieden sein, sorgen wir dafür, dass alles in Ordnung gebracht wird.
    </p>
  </div>
</div>
      </div>
    </div>
  );
}
