import { useState } from 'react';
import { Star, ArrowRight } from 'lucide-react'; 
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Products() {
  const [selectedBrand, setSelectedBrand] = useState('Epson');

  const products = [
    {
      name: 'Epson ColorWorks TM-C3500 Farbetikettendrucker',
      brand: 'Epson',
      image: 'images/EpsonColorWorksTM-C3500.png',
      description: 'Some Description...',
      price: '€4.999',
      popular: false,
    },
    {
      name: 'Brady M610 Etikettendrucker',
      brand: 'Brady',
      image: 'images/brady.jpg',
      description: 'Some Description...',
      price: '€4.999',
      popular: true,
    },
    {
      name: 'Epson ColorWorks C6000Ae Etikettendrucker',
      brand: 'Epson',
      image: 'images/EpsonColorWorksC6000Ae.jpg',
      description: 'Some Description...',
      price: '€4.999',
      popular: true,
    },
  ];

  const filteredProducts = products.filter(p => p.brand === selectedBrand);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-emerald-50/30 to-white pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl text-gray-900 mb-6">Unsere Produkte</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entdecken Sie unsere Auswahl an modernen Druckern, die den vielfältigen Anforderungen von Unternehmen gerecht werden
          </p>

          {/* Brand Switch */}
          <div className="mt-6 flex justify-center gap-4">
            {['Epson', 'Brady'].map((brand) => (
              <button
                key={brand}
                onClick={() => setSelectedBrand(brand)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedBrand === brand
                    ? 'bg-[rgb(0,146,82)] text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {brand}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className={`group relative bg-white border-2 rounded-2xl p-6 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer ${
                product.popular
                  ? 'border-[rgb(0,146,82)] shadow-2xl shadow-emerald-500/20'
                  : 'border-gray-200 hover:border-[rgb(0,146,82)] hover:shadow-xl'
              }`}
            >
              {product.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[rgb(0,146,82)] to-emerald-600 text-white text-sm rounded-full shadow-lg flex items-center gap-1">
                  <Star className="w-3 h-3 fill-white" />
                  Beliebt
                </div>
              )}

             {/* Product Image */}
<div className="w-full h-56 mb-6 rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105 flex items-center justify-center bg-gray-50">
  <ImageWithFallback
    src={product.image}
    alt={product.name}
    className="w-full h-full object-contain"
  />
</div>

              {/* Name, Price, Description */}
              <h3 className="text-2xl text-gray-900 mb-2 text-center">{product.name}</h3>
              <div className="text-xl text-[rgb(0,146,82)] font-semibold mb-3 text-center">{product.price}</div>
              <p className="text-gray-600 text-center">{product.description}</p>

              {/* Learn More Button */}
              <button className="w-full mt-6 py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 bg-gray-100 text-gray-900 hover:bg-gradient-to-r hover:from-[rgb(0,146,82)] hover:to-emerald-600 hover:text-white">
                <span>Mehr erfahren</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
