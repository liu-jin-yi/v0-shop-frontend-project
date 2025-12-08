export interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
  description: string
  details: string[]
}

export const products: Product[] = [
  {
    id: 1,
    name: "经典羊绒大衣",
    price: 4980,
    image: "/elegant-cashmere-coat-beige.jpg",
    category: "服饰",
    description: "采用100%纯羊绒面料，经典剪裁设计，温暖舒适，彰显品味。",
    details: ["100%纯羊绒", "经典H型剪裁", "内衬真丝里料", "专业干洗"],
  },
  {
    id: 2,
    name: "真丝印花连衣裙",
    price: 2680,
    image: "/silk-floral-dress-elegant.jpg",
    category: "服饰",
    description: "精选桑蚕丝面料，手工印花工艺，飘逸灵动，优雅动人。",
    details: ["100%桑蚕丝", "手工印花", "隐形拉链设计", "建议手洗"],
  },
  {
    id: 3,
    name: "意大利皮革手提包",
    price: 3580,
    image: "/italian-leather-handbag-brown.jpg",
    category: "配饰",
    description: "意大利进口头层牛皮，手工缝制，经典款式，耐用百搭。",
    details: ["意大利头层牛皮", "手工缝制", "镀金五金件", "附送防尘袋"],
  },
  {
    id: 4,
    name: "珍珠项链",
    price: 1980,
    image: "/elegant-pearl-necklace.jpg",
    category: "配饰",
    description: "天然淡水珍珠，圆润光泽，925银扣，典雅大方。",
    details: ["天然淡水珍珠", "925银扣", "6-7mm珠径", "附赠礼盒"],
  },
  {
    id: 5,
    name: "北欧风陶瓷花瓶",
    price: 680,
    image: "/minimalist-ceramic-vase-nordic.jpg",
    category: "家居",
    description: "手工拉坯烧制，简约北欧设计，为居室增添艺术气息。",
    details: ["手工陶瓷", "哑光釉面", "高度30cm", "可插花使用"],
  },
  {
    id: 6,
    name: "羊毛针织毛衣",
    price: 1280,
    image: "/wool-knit-sweater-cream.jpg",
    category: "服饰",
    description: "澳洲美利奴羊毛，柔软亲肤，保暖透气，舒适日常。",
    details: ["100%美利奴羊毛", "螺纹收边", "宽松版型", "可机洗"],
  },
  {
    id: 7,
    name: "丝绒抱枕套装",
    price: 480,
    image: "/velvet-cushion-set-elegant.jpg",
    category: "家居",
    description: "进口丝绒面料，丰富色彩，柔软触感，提升家居格调。",
    details: ["进口丝绒", "含芯套装", "45x45cm", "可拆洗"],
  },
  {
    id: 8,
    name: "复古金属腕表",
    price: 2980,
    image: "/vintage-metal-wristwatch-gold.jpg",
    category: "配饰",
    description: "经典复古设计，精密机械机芯，镀金表壳，品味之选。",
    details: ["瑞士机芯", "镀金表壳", "防水30米", "2年保修"],
  },
]

export function getProductById(id: number): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getProductsByCategory(category?: string): Product[] {
  if (!category) return products
  return products.filter((p) => p.category === category || category === "all")
}
