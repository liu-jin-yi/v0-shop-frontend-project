import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="font-serif text-xl font-semibold mb-4">LUXE</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              探索精选奢华商品，品味非凡生活。我们致力于为您提供最优质的产品和购物体验。
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4">购物指南</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/products" className="hover:text-foreground transition-colors">
                  全部商品
                </Link>
              </li>
              <li>
                <Link href="/products?category=new" className="hover:text-foreground transition-colors">
                  新品上市
                </Link>
              </li>
              <li>
                <Link href="/products?category=sale" className="hover:text-foreground transition-colors">
                  特价优惠
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">客户服务</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">
                  联系我们
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">
                  配送信息
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">
                  退换政策
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">关于我们</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">
                  品牌故事
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">
                  门店地址
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">
                  加入我们
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 LUXE 精品商店. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  )
}
