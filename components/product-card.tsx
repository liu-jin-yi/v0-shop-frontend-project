"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { useCart } from "./cart-context"
import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"

interface ProductCardProps {
  id: number
  name: string
  price: number
  image: string
  category: string
}

export function ProductCard({ id, name, price, image, category }: ProductCardProps) {
  const { addToCart } = useCart()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addToCart({ id, name, price, image })
  }

  return (
    <Link href={`/products/${id}`} className="group">
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-secondary/50">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors" />
        <Button
          onClick={handleAddToCart}
          size="icon"
          className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-card text-card-foreground hover:bg-card/90 shadow-lg"
        >
          <ShoppingBag className="h-4 w-4" />
          <span className="sr-only">添加到购物车</span>
        </Button>
      </div>
      <div className="mt-4 space-y-1">
        <p className="text-xs text-muted-foreground uppercase tracking-wider">{category}</p>
        <h3 className="font-medium text-foreground">{name}</h3>
        <p className="text-muted-foreground">¥{price.toLocaleString()}</p>
      </div>
    </Link>
  )
}
