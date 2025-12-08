import { notFound } from "next/navigation"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getProductById, products } from "@/lib/products"
import { AddToCartButton } from "./add-to-cart-button"
import { Check } from "lucide-react"

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }))
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const product = getProductById(Number.parseInt(id))

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="aspect-[3/4] relative overflow-hidden rounded-lg bg-secondary/50">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <p className="text-sm text-muted-foreground uppercase tracking-wider">{product.category}</p>
              <h1 className="mt-2 font-serif text-3xl md:text-4xl font-semibold">{product.name}</h1>
              <p className="mt-4 text-2xl">¥{product.price.toLocaleString()}</p>

              <div className="mt-8">
                <p className="text-muted-foreground leading-relaxed">{product.description}</p>
              </div>

              <div className="mt-8">
                <h3 className="font-medium mb-4">商品详情</h3>
                <ul className="space-y-2">
                  {product.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-accent" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-8">
                <AddToCartButton product={product} />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
