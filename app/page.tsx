import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/products"
import { ArrowRight } from "lucide-react"

export default function HomePage() {
  const featuredProducts = products.slice(0, 4)
  console.log(11111,22222,333)
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/luxury-lifestyle-minimal-interior.jpg"
              alt="Hero background"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <div className="container mx-auto px-4 z-10 text-center">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-balance max-w-4xl mx-auto leading-tight">
              品味生活的艺术--添加测试--修复#4---修复#5
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              探索精心挑选的奢华商品系列，每一件都代表着卓越品质与非凡设计的完美融合。
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="px-8">
                <Link href="/products">
                  探索商品
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8 bg-transparent">
                <Link href="/products?category=new">新品上市</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "服饰", image: "/elegant-clothing-store.jpg", href: "/products?category=clothing" },
                { name: "配饰", image: "/luxury-accessories-jewelry.jpg", href: "/products?category=accessories" },
                { name: "家居", image: "/minimalist-home-decor.jpg", href: "/products?category=home" },
              ].map((cat) => (
                <Link key={cat.name} href={cat.href} className="group relative aspect-[4/5] overflow-hidden rounded-lg">
                  <Image
                    src={cat.image || "/placeholder.svg"}
                    alt={cat.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/40 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-primary-foreground">
                      <h3 className="font-serif text-3xl font-semibold">{cat.name}</h3>
                      <p className="mt-2 text-sm opacity-90 flex items-center justify-center gap-1">
                        立即选购 <ArrowRight className="h-4 w-4" />
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold">精选商品</h2>
                <p className="mt-2 text-muted-foreground">发现本季最受欢迎的单品</p>
              </div>
              <Button asChild variant="ghost" className="hidden sm:flex">
                <Link href="/products">
                  查看全部 <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
            <div className="mt-8 text-center sm:hidden">
              <Button asChild variant="outline">
                <Link href="/products">查看全部商品</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Banner Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl md:text-5xl font-semibold max-w-3xl mx-auto text-balance">
              订阅获取独家优惠与新品资讯
            </h2>
            <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">
              成为LUXE会员，第一时间获取限时折扣、新品发布和专属活动信息。
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="输入您的邮箱"
                className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
              />
              <Button variant="secondary" size="lg">
                立即订阅
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
