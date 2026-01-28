import { useState } from 'react'
import { useCart } from '../pages/CartContext'
import { useNavigate, Link } from 'react-router-dom'
import { Trash2, Minus, Plus } from 'lucide-react'
import { PayPalButtons } from '@paypal/react-paypal-js'

export function Cart() {
  const { items, removeFromCart, updateQuantity, clearCart } = useCart()
  const navigate = useNavigate()

  /* ================= DELIVERY ADDRESS STATE ================= */
  const [address, setAddress] = useState({
    firstName: '',
    lastName: '',
    street: '',
    houseNumber: '',
    postalCode: '',
    city: '',
    country: 'Deutschland',
    notes:'',
    email:'',
    phone:''
  })

  const handleAddressChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target
    setAddress((prev) => ({ ...prev, [name]: value }))
  }

  /* ================= TOTAL CALCULATION ================= */
  const total = items.reduce((sum, item) => {
    const price = Number(
      item.price.replace('€', '').replace('.', '').trim()
    )
    return sum + price * item.quantity
  }, 0)

  const paypalAmount = total.toFixed(2)
  const formattedTotal = `€${total.toLocaleString('de-DE')}`

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
        <div className="bg-white rounded-2xl shadow-lg p-6 flex justify-between items-center mb-12">
          <p className="text-2xl font-semibold">Gesamt</p>
          <p className="text-3xl font-bold text-[rgb(0,146,82)]">
            {formattedTotal}
          </p>
        </div>

        {/* DELIVERY DETAILS */}
<div className="bg-white rounded-2xl shadow-lg p-10 mb-12">
  <div className="text-center mb-10">
    <h2 className="text-3xl font-semibold mb-2">
      Bitte geben Sie Ihre Lieferdaten ein
    </h2>
    <p className="text-gray-600">
      Diese Informationen werden für den Versand Ihrer Bestellung verwendet.
    </p>
  </div>

  {/* CONTACT INFO */}
  <div className="mb-10">
    <h3 className="text-xl font-semibold mb-4 text-[rgb(0,146,82)]">
      Kontaktinformationen
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <input
        name="firstName"
        placeholder="Vorname"
        value={address.firstName}
        onChange={handleAddressChange}
        className="input"
      />

      <input
        name="lastName"
        placeholder="Nachname"
        value={address.lastName}
        onChange={handleAddressChange}
        className="input"
      />

      <input
        name="email"
        placeholder="E-Mail-Adresse"
        value={address.email}
        onChange={handleAddressChange}
        className="input sm:col-span-2"
      />

      <input
        name="phone"
        placeholder="Telefonnummer (optional)"
        value={address.phone}
        onChange={handleAddressChange}
        className="input sm:col-span-2"
      />
    </div>
  </div>

  {/* DELIVERY ADDRESS */}
  <div className="mb-10">
    <h3 className="text-xl font-semibold mb-4 text-[rgb(0,146,82)]">
      Lieferadresse
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <input
        name="street"
        placeholder="Straße"
        value={address.street}
        onChange={handleAddressChange}
        className="input sm:col-span-2"
      />

      <input
        name="houseNumber"
        placeholder="Hausnr."
        value={address.houseNumber}
        onChange={handleAddressChange}
        className="input"
      />

      <input
        name="postalCode"
        placeholder="PLZ"
        value={address.postalCode}
        onChange={handleAddressChange}
        className="input"
      />

      <input
        name="city"
        placeholder="Stadt"
        value={address.city}
        onChange={handleAddressChange}
        className="input sm:col-span-2"
      />

      <input
        name="country"
        placeholder="Land"
        value={address.country}
        onChange={handleAddressChange}
        className="input sm:col-span-3"
      />
    </div>
  </div>

  {/* DELIVERY NOTES */}
  <div>
    <h3 className="text-xl font-semibold mb-4 text-[rgb(0,146,82)]">
      Hinweise zur Lieferung
    </h3>

    <textarea
      name="notes"
      placeholder="z. B. Abstellort, Klingel, Lieferzeit (optional)"
      value={address.notes}
      onChange={(e) =>
        setAddress((prev) => ({
          ...prev,
          notes: e.target.value,
        }))
      }
      rows={4}
      className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
    />
  </div>
</div>


        {/* PAYPAL CHECKOUT */}
        <div className="bg-white rounded-2xl shadow-xl p-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold mb-2">
              Bestellung abschließen
            </h2>
            <p className="text-gray-600">
              Sicher bezahlen mit PayPal
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <PayPalButtons
                style={{ layout: 'vertical', shape: 'pill', height: 55 }}
                forceReRender={[paypalAmount]}
                createOrder={(data, actions) =>
                  actions.order.create({
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
                }
                onApprove={(data, actions) =>
                  actions.order!.capture().then((details) => {
                    fetch('/api/save-order', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({
                        orderId: details.id,
                        amount: paypalAmount,
                        items,
                        deliveryAddress: address,
                      }),
                    })

                    clearCart()
                    navigate('/success')
                  })
                }
                onError={(err) => {
                  console.error(err)
                  alert('Zahlung fehlgeschlagen')
                }}
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
