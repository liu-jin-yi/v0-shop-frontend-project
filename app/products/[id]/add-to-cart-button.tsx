"use client"

import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-context"
import type { Product } from "@/lib/products"
import { ShoppingBag, Check } from "lucide-react"
import { useState } from "react"

export function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart()
  const [added, setAdded] = useState(false)

  const handleClick = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <Button onClick={handleClick} size="lg" className="w-full" disabled={added}>
      {added ? (
        <>
          <Check className="mr-2 h-5 w-5" />
          已添加到购物车
        </>
      ) : (
        <>
          <ShoppingBag className="mr-2 h-5 w-5" />
          添加到购物车
        </>
      )}
    </Button>
  )
}
