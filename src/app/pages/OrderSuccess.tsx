import { Link } from 'react-router-dom'
import { CheckCircle } from 'lucide-react'

export function OrderSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-emerald-50/30 to-white px-6">
      <div className="bg-white rounded-3xl shadow-xl p-10 max-w-lg text-center">
        <CheckCircle className="w-16 h-16 text-[rgb(0,146,82)] mx-auto mb-6" />

        <h1 className="text-3xl font-semibold mb-4">
          Zahlung erfolgreich
        </h1>

        <p className="text-gray-600 mb-8">
          Vielen Dank für Ihre Bestellung.  
          Wir haben Ihre Zahlung erhalten und bearbeiten Ihre Anfrage.
        </p>

        <Link
          to="/products"
          className="inline-block px-8 py-4 bg-[rgb(0,146,82)] text-white rounded-xl font-semibold hover:bg-emerald-700 transition"
        >
          Weiter einkaufen
        </Link>
      </div>
    </div>
  )
}
