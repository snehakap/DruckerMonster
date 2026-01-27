import { useParams, Link } from 'react-router-dom'
import { products } from './ProductsData'
import { useEffect, useState } from 'react'
import { CheckCircle } from 'lucide-react'
import { useCart } from '../pages/CartContext' // ✅ FIXED PATH

export function ProductDetails() {
  const { slug } = useParams()
  const product = products.find((p) => p.slug === slug)

  const { addToCart } = useCart() // ✅ CART HOOK
  const [activeImage, setActiveImage] = useState(0)

  // Auto carousel
  useEffect(() => {
    if (!product) return
    const interval = setInterval(() => {
      setActiveImage((prev) =>
        prev === product.images.length - 1 ? 0 : prev + 1
      )
    }, 3500)

    return () => clearInterval(interval)
  }, [product])

  if (!product) {
    return <div className="pt-40 text-center">Produkt nicht gefunden</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-emerald-50/30 to-white pt-44 pb-20 px-4 sm:px-6 lg:px-8">

      {/* ================= PRODUCT NAME ================= */}
      <div className="max-w-6xl mx-auto px-6 mt-6 mb-12 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
          {product.name}
        </h1>
      </div>

      {/* ================= IMAGE CAROUSEL ================= */}
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="h-[420px] md:h-[520px] rounded-3xl overflow-hidden shadow-2xl bg-white flex items-center justify-center">
          <img
            src={product.images[activeImage]}
            alt={product.name}
            className="w-full h-full object-contain transition-transform duration-[3500ms] ease-linear scale-105"
          />
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-6">
          {product.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(index)}
              className={`w-3 h-3 rounded-full transition ${
                activeImage === index
                  ? 'bg-[rgb(0,146,82)]'
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-5xl mx-auto px-6 mt-12">

        {/* Price */}
        <div className="text-center mb-6">
          <p className="text-3xl md:text-4xl font-bold text-[rgb(0,146,82)]">
            {product.price}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="grid sm:grid-cols-3 gap-4 mb-20">

          {/* ✅ JETZT KAUFEN → ADD TO CART */}
          <button
            onClick={() =>
              addToCart({
                slug: product.slug,
                name: product.name,
                price: product.price,
              })
            }
            className="px-8 py-4 bg-[rgb(0,146,82)] text-white rounded-xl hover:bg-emerald-700 transition-all duration-300 flex items-center justify-center font-semibold"
          >
            Jetzt kaufen
          </button>

          {/* Kontakt */}
          <Link
            to="/contact"
            className="px-8 py-4 border-2 border-[rgb(0,146,82)] text-[rgb(0,146,82)] rounded-xl hover:bg-emerald-50 transition-all duration-300 flex items-center justify-center font-semibold"
          >
            Kontakt aufnehmen
          </Link>

          {/* Demo */}
          <Link
            to="/contact"
            className="px-8 py-4 border-2 border-[rgb(0,146,82)] text-[rgb(0,146,82)] rounded-xl hover:bg-emerald-50 transition-all duration-300 flex items-center justify-center font-semibold"
          >
            Kostenlose Vorführung
          </Link>
        </div>

        {/* Description */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl mb-6">Produktbeschreibung</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            {product.description}
          </p>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {product.highlights.map((point, index) => (
            <div
              key={index}
              className="flex gap-4 items-start bg-white p-6 rounded-2xl shadow-md"
            >
              <CheckCircle size={24} className="text-[rgb(0,146,82)] mt-1" />
              <p className="text-lg">{point}</p>
            </div>
          ))}
        </div>

        {/* Technische Daten */}
        {product.technicalSpecs && (
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-10">
            <h2 className="text-3xl mb-10 text-center">
              Technische Daten
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <tbody>
                  {Object.entries(product.technicalSpecs).map(
                    ([label, value], index) => (
                      <tr
                        key={label}
                        className={`border-b ${
                          index % 2 === 0
                            ? 'bg-emerald-50/50'
                            : 'bg-white'
                        }`}
                      >
                        <td className="py-4 px-4 font-semibold text-gray-700 w-1/3 align-top">
                          {label}
                        </td>
                        <td className="py-4 px-4 text-gray-600">
                          {value}
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Produktvideos */}
        {product.youtubeIds && product.youtubeIds.length > 0 && (
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl mb-10 text-center">
              Produktvideos
            </h2>

            <div className="space-y-10">
              {product.youtubeIds.map((videoId, index) => (
                <div
                  key={videoId}
                  className="aspect-video rounded-2xl overflow-hidden"
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={`Produktvideo ${product.name} ${index + 1}`}
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
