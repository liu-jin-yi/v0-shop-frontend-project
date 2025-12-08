import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/products"

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>
}) {
  const params = await searchParams
  const category = params.category

  const filteredProducts = category
    ? products.filter((p) => {
        if (category === "clothing") return p.category === "服饰"
        if (category === "accessories") return p.category === "配饰"
        if (category === "home") return p.category === "家居"
        return true
      })
    : products

  const categoryTitle = category
    ? category === "clothing"
      ? "服饰"
      : category === "accessories"
        ? "配饰"
        : category === "home"
          ? "家居"
          : "全部商品"
    : "全部商品"

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h1 className="font-serif text-4xl font-semibold">{categoryTitle}</h1>
            <p className="mt-2 text-muted-foreground">共 {filteredProducts.length} 件商品</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">暂无商品</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
