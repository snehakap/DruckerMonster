import { createContext, useContext, useState, ReactNode } from 'react'

export type CartItem = {
  slug: string
  name: string
  price: string
  quantity: number
}

type CartContextType = {
  items: CartItem[]
  addToCart: (product: Omit<CartItem, 'quantity'>) => void
  removeFromCart: (slug: string) => void
  updateQuantity: (slug: string, qty: number) => void
  clearCart: () => void // ✅ NEW
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  const addToCart = (product: Omit<CartItem, 'quantity'>) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.slug === product.slug)
      if (existing) {
        return prev.map((i) =>
          i.slug === product.slug
            ? { ...i, quantity: i.quantity + 1 }
            : i
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (slug: string) => {
    setItems((prev) => prev.filter((i) => i.slug !== slug))
  }

  const updateQuantity = (slug: string, qty: number) => {
    if (qty < 1) return
    setItems((prev) =>
      prev.map((i) =>
        i.slug === slug ? { ...i, quantity: qty } : i
      )
    )
  }

  // ✅ STEP 2: CLEAR CART
  const clearCart = () => {
    setItems([])
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart, // ✅ EXPOSED
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }
  return context
}
