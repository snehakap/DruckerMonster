import { useCart } from '../pages/CartContext'
import { useNavigate } from 'react-router-dom'
import { Trash2, Minus, Plus } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PayPalButtons } from '@paypal/react-paypal-js'

export function Cart() {
  const { items, removeFromCart, updateQuantity } = useCart()

  // ✅ Convert "€4.999" → 4999
  const total = items.reduce((sum, item) => {
    const price = Number(
      item.price
        .replace('€', '')
        .replace('.', '') // remove thousands separator
        .trim()
    )
    return sum + price * item.quantity
  }, 0)

  // ✅ For PayPal (NO thousands separator)
  const paypalAmount = total.toFixed(2) // "4999.00"

  // ✅ For UI (German format)
  const formattedTotal = `€${total.toLocaleString('de-DE')}`

  const navigate = useNavigate()
const { clearCart } = useCart()

  /* ================= EMPTY CART ================= */
  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white via-emerald-50/30 to-white flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-3xl mb-4 font-semibold">
            Ihr Warenkorb ist leer
          </h1>

          <Link
            to="/products"
            className="inline-block mt-4 px-8 py-4 border-2 border-[rgb(0,146,82)] text-[rgb(0,146,82)] rounded-xl font-semibold hover:bg-emerald-50 transition"
          >
            Produkte ansehen
          </Link>
        </div>
      </div>
    )
  }

  /* ================= CART ================= */
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-emerald-50/30 to-white pt-40 pb-20 px-6">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-semibold mb-12 text-center">
          Warenkorb
        </h1>

        {/* CART ITEMS */}
        <div className="space-y-6 mb-10">
          {items.map((item) => (
            <div
              key={item.slug}
              className="bg-white rounded-2xl shadow-md p-6 flex justify-between items-center"
            >
              <div>
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-[rgb(0,146,82)] font-bold">
                  {item.price}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() =>
                    updateQuantity(item.slug, item.quantity - 1)
                  }
                  className="p-2 rounded-lg hover:bg-gray-100"
                >
                  <Minus />
                </button>

                <span className="font-semibold">
                  {item.quantity}
                </span>

                <button
                  onClick={() =>
                    updateQuantity(item.slug, item.quantity + 1)
                  }
                  className="p-2 rounded-lg hover:bg-gray-100"
                >
                  <Plus />
                </button>

                <button
                  onClick={() => removeFromCart(item.slug)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                >
                  <Trash2 />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* TOTAL */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex justify-between items-center mb-10">
          <p className="text-2xl font-semibold">Gesamt</p>
          <p className="text-3xl font-bold text-[rgb(0,146,82)]">
            {formattedTotal}
          </p>
        </div>

        {/* ACTION BUTTONS */}
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          <Link
            to="/products"
            className="px-8 py-4 border-2 border-[rgb(0,146,82)] text-[rgb(0,146,82)] rounded-xl text-center font-semibold hover:bg-emerald-50"
          >
            Weiter einkaufen
          </Link>

          <Link
            to="/contact"
            className="px-8 py-4 border-2 border-[rgb(0,146,82)] text-[rgb(0,146,82)] rounded-xl text-center font-semibold hover:bg-emerald-50"
          >
            Anfrage senden
          </Link>
        </div>

        {/* PAYPAL CHECKOUT */}
<div className="bg-white rounded-2xl shadow-xl p-10">
  
  {/* Title */}
  <div className="text-center mb-8">
    <h2 className="text-2xl font-semibold mb-2">
      Bestellung abschließen
    </h2>
    <p className="text-gray-600">
      Schließen Sie Ihre Bestellung ab, indem Sie sicher mit PayPal bezahlen.
    </p>
  </div>

  {/* PayPal Button */}
  <div className="flex justify-center">
    <div className="w-full max-w-md">
      <PayPalButtons
        style={{
          layout: 'vertical',
          shape: 'pill',
          height: 55, // ⬅️ makes it taller
        }}
        forceReRender={[paypalAmount]}

        createOrder={(data, actions) => {
          return actions.order.create({
            intent: 'CAPTURE',
            purchase_units: [
              {
                amount: {
                  currency_code: 'EUR',
                  value: paypalAmount,
                },
              },
            ],
          })
        }}

        onApprove={(data, actions) => {
          return actions.order!.capture().then((details) => {
            const orderId = details.id

            try {
              fetch('/api/save-order', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  orderId,
                  amount: paypalAmount,
                  items,
                }),
              })
            } catch {}

            clearCart()
            navigate('/success')
          })
        }}

        onError={(err) => {
          console.error('PayPal error:', err)
          alert('Zahlung fehlgeschlagen. Bitte erneut versuchen.')
        }}
      />
    </div>
  </div>

</div>



      </div>
    </div>
  )
}
