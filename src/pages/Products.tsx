import { useMemo, useState } from "react"

type Category = "All" | "Dairy" | "Drinks" | "Dry Products" | "Frozen Products"

type ProductItem = {
  id: string
  brand: string
  product: string
  image: string
  category: Exclude<Category, "All">
}

export default function Products() {
  const [active, setActive] = useState<Category>("All")

  const items: ProductItem[] = useMemo(
    () => [
      // Drinks - beverages (non-alcoholic)
      // { id: "energy", brand: "Energy Drink", product: "Energy Drinks", image: "/rico%20website/Pictures/energy%20drinks.jpg", category: "Drinks" },
      // { id: "juice", brand: "Euro Shopper", product: "Juice", image: "/rico%20website/Pictures/juice%20euro%20shopper.webp", category: "Drinks" },
      // { id: "u-db-photo", brand: "United Dutch Brewery", product: "Beer", image: "/rico%20website/Pictures/United%20dutch%20brewery.jpeg", category: "Drinks" },

      // Dairy - Countre
      { id: "countre-1", brand: "Countre", product: "Flavored Milk", image: "/rico%20website/Pictures/countre%201.png", category: "Dairy" },
      { id: "countre-2", brand: "Countre", product: "Flavored Milk", image: "/rico%20website/Pictures/countre%202.png", category: "Dairy" },
      { id: "countre-4", brand: "Countre", product: "Flavored Milk", image: "/rico%20website/Pictures/countre%204.png", category: "Dairy" },
      { id: "countre-5-milk", brand: "Countre", product: "Flavored Milk", image: "/rico%20website/Pictures/countre%205%20with%20milk.png", category: "Dairy" },
      { id: "countre-banana", brand: "Countre", product: "Flavored Milk", image: "/rico%20website/Pictures/countre%20banana.png", category: "Dairy" },
      { id: "countre-choco", brand: "Countre", product: "Flavored Milk", image: "/rico%20website/Pictures/countre%20choco.png", category: "Dairy" },
      { id: "countre-strw", brand: "Countre", product: "Flavored Milk", image: "/rico%20website/Pictures/countre%20strw.png", category: "Dairy" },
      { id: "countre-vanilla", brand: "Countre", product: "Flavored Milk", image: "/rico%20website/Pictures/countre%20vanilla.png", category: "Dairy" },
      { id: "countre-whole", brand: "Countre", product: "Whole Milk", image: "/rico%20website/Pictures/countre%20whole%20milk.png", category: "Dairy" },

      // Dry Products - Biscuits, Honey, Oil, Chocolate
      { id: "gullon-1", brand: "Gullon", product: "Biscuits", image: "/rico%20website/Pictures/gullon%201.png", category: "Dry Products" },
      { id: "gullon-2", brand: "Gullon", product: "Biscuits", image: "/rico%20website/Pictures/gullon%202.png", category: "Dry Products" },
      { id: "gullon-3", brand: "Gullon", product: "Biscuits", image: "/rico%20website/Pictures/gullon%203.png", category: "Dry Products" },
      { id: "gullon-4", brand: "Gullon", product: "Biscuits", image: "/rico%20website/Pictures/gullon%204.png", category: "Dry Products" },
      { id: "gullon-5", brand: "Gullon", product: "Biscuits", image: "/rico%20website/Pictures/gullon%205.png", category: "Dry Products" },
      { id: "gullon-6", brand: "Gullon", product: "Biscuits", image: "/rico%20website/Pictures/gullon%206.png", category: "Dry Products" },
      { id: "gullon-7", brand: "Gullon", product: "Biscuits", image: "/rico%20website/Pictures/gullon%207.png", category: "Dry Products" },
      { id: "gullon-8", brand: "Gullon", product: "Biscuits", image: "/rico%20website/Pictures/gullon%208.png", category: "Dry Products" },
      { id: "gullon-9", brand: "Gullon", product: "Biscuits", image: "/rico%20website/Pictures/gullon%209.png", category: "Dry Products" },
      { id: "gullon-10", brand: "Gullon", product: "Biscuits", image: "/rico%20website/Pictures/gullon%2010.png", category: "Dry Products" },
      { id: "gullon-12", brand: "Gullon", product: "Biscuits", image: "/rico%20website/Pictures/gullon%2012.png", category: "Dry Products" },
      { id: "gullon-13", brand: "Gullon", product: "Biscuits", image: "/rico%20website/Pictures/gullon%2013.png", category: "Dry Products" },
      { id: "lady-200", brand: "Gullon", product: "Lady Finger 200g", image: "/rico%20website/Pictures/lady%20finger%20200g.png", category: "Dry Products" },
      { id: "lady-300", brand: "Gullon", product: "Lady Finger 300g", image: "/rico%20website/Pictures/lady%20finger%20300g.png", category: "Dry Products" },
      { id: "lady-choco", brand: "Gullon", product: "Lady Finger Choco", image: "/rico%20website/Pictures/lady%20finger%20choco%20200g.png", category: "Dry Products" },
      { id: "lady-nosugar", brand: "Gullon", product: "Lady Finger No Sugar", image: "/rico%20website/Pictures/lady%20finger%20no%20sugar%20300g.png", category: "Dry Products" },
      { id: "lady-fingers", brand: "Gullon", product: "Lady Fingers", image: "/rico%20website/Pictures/lady%20fingers.png", category: "Dry Products" },
      { id: "honey", brand: "Garusana", product: "Honey", image: "/rico%20website/Pictures/honey.png", category: "Dry Products" },
      { id: "oil", brand: "Garusana", product: "Cooking Oil", image: "/rico%20website/Pictures/oil%20.png", category: "Dry Products" },

      // Hills Biscuits Products
      { id: "hills-1", brand: "Hills Biscuits", product: "Biscuits", image: "/Zo/new/FOlder/hills%201.webp", category: "Dry Products" },
      { id: "hills-2", brand: "Hills Biscuits", product: "Biscuits", image: "/Zo/new/FOlder/hills%202.webp", category: "Dry Products" },
      { id: "hills-3", brand: "Hills Biscuits", product: "Biscuits", image: "/Zo/new/FOlder/hills%203.webp", category: "Dry Products" },
      { id: "hills-4", brand: "Hills Biscuits", product: "Biscuits", image: "/Zo/new/FOlder/hills%204.png", category: "Dry Products" },
      { id: "hills-5", brand: "Hills Biscuits", product: "Biscuits", image: "/Zo/new/FOlder/hills%205.webp", category: "Dry Products" },
      { id: "hills-6", brand: "Hills Biscuits", product: "Biscuits", image: "/Zo/new/FOlder/hills%206.png", category: "Dry Products" },

      // Mega Whale Products
      { id: "mega-whale-1", brand: "Mega Whale", product: "Biscuits", image: "/Zo/new/FOlder/mega%20whale%204.jpeg", category: "Dry Products" },
      { id: "mega-whale-2", brand: "Mega Whale", product: "Biscuits", image: "/Zo/new/FOlder/mega%20whale%20biscuit%201.jpg", category: "Dry Products" },
      { id: "mega-whale-3", brand: "Mega Whale", product: "Biscuits", image: "/Zo/new/FOlder/mega%20whale%20biscuit%202.webp", category: "Dry Products" },
      { id: "mega-whale-4", brand: "Mega Whale", product: "Biscuits", image: "/Zo/new/FOlder/mega%20whale%20biscuit%203.jpg", category: "Dry Products" },

      // English Cheese Products
      { id: "english-cheese-1", brand: "English Cheese", product: "Cheese", image: "/Zo/new/FOlder/the%20english%20cheese%201.png", category: "Dairy" },
      { id: "english-cheese-2", brand: "English Cheese", product: "Cheese", image: "/Zo/new/FOlder/the%20english%20cheese%202.jpg", category: "Dairy" },

      // Garusana Additional Products
      { id: "garusana-new-1", brand: "Garusana", product: "Food Products", image: "/Zo/new/FOlder/Garusana%20product%201.webp", category: "Dry Products" },
      { id: "garusana-new-2", brand: "Garusana", product: "Food Products", image: "/Zo/new/FOlder/garusana%20product%202.webp", category: "Dry Products" },
      { id: "English", brand: "Garusana", product: "Cooking Oil", image: "/rico%20website/Pictures/oil%20.png", category: "Dry Products" },

      // Frozen Products
      { id: "frozen-fish", brand: "Chef's", product: "Fish", image: "/rico%20website/Pictures/Fish.jpeg", category: "Frozen Products" },
      { id: "frozen-porc", brand: "Geko", product: "Porc", image: "/rico%20website/Pictures/pork.jpeg", category: "Frozen Products" },
      { id: "frozen-potatoes", brand: "chef's", product: "Potatoes", image: "/rico%20website/Pictures/WhatsApp Image 2025-08-31 at 10.54.56 AM (2).jpeg", category: "Frozen Products" },
      { id: "frozen-chickens", brand: "Geko", product: "Chicken", image: "/rico%20website/Pictures/chicken.jpeg", category: "Frozen Products" },
      { id: "frozen-chickened", brand: "Geko", product: "Chickened", image: "/Zo/new/geko frozen chicken.jpg", category: "Frozen Products" },
      { id: "frozen-Packaged-chickens", brand: "Geko", product: "Potatoes", image: "/Zo/new/frozen geko potatoes.jpg", category: "Frozen Products" },
    ],
    []
  )

  const filtered = useMemo(() => {
    if (active === "All") return items
    return items.filter((i) => i.category === active)
  }, [active, items])
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-heading mb-6">Our Product Portfolio</h1>
        <p className="text-paragraph max-w-2xl mx-auto">
          We select products based on their affordability, quality, accessibility and most importantly, environmental
          standard
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center gap-3 mb-12 flex-wrap">
        {(["All", "Dairy", "Dry Products", "Frozen Products"] as Category[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`
              px-5 py-2 rounded-full border transition-colors duration-150
              ${active === tab ? "bg-[#ad343e] text-white border-[#ad343e]" : "bg-white text-[#474747] border-[#dbdfd0] hover:bg-[#f4f4f4]"}
            `}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Product Grid - dynamic */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl p-6 shadow-sm border border-[#dbdfd0] cursor-pointer transition-transform transition-shadow duration-200 will-change-transform hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:scale-[1.02]"
          >
            <div className="aspect-[4/3] mb-4 flex items-center justify-center overflow-hidden">
              <img src={item.image} alt={item.brand} className="max-h-48 object-contain" />
          </div>
            <h3 className="text-[#ad343e] font-semibold text-center">{item.brand}</h3>
            <p className="text-small text-center">{item.product}</p>
          <p className="text-[#adb29e] text-center">—</p>
          </div>
        ))}
      </div>

      {/* Our Brands Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        <div>
          <h2 className="text-heading mb-6" id="our-brands">Our Brands</h2>
          <p className="text-paragraph">
            We distribute a diverse portfolio of trusted brands, including dry goods, beverages, dairy, seafood, and
            specialty products. Each brand is chosen for its quality and reliability, ensuring we meet the needs of both
            all markets.
          </p>
        </div>

        {/* Cards styled to match the screenshots exactly */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 justify-items-center">
          {/* KUHNE + HEITZ */}
          <div className="w-[200px] h-[70px] bg-white rounded-[12px] border border-[#f9f9f7] shadow-[0_3px_60px_0_rgba(0,0,0,0.05)] flex items-center justify-center text-center">
            <div className="[font-family:var(--second-family)] font-bold text-[26px] leading-[83%] tracking-[-0.03em] text-[#e40d0d]">
              <div>KUHNE + HEITZ</div>
            </div>
          </div>
          {/* GAROUSCA */}
          <div className="w-[200px] h-[70px] bg-white rounded-[12px] border border-[#f9f9f7] shadow-[0_3px_60px_0_rgba(0,0,0,0.05)] flex items-center justify-center text-center">
            <div className="[font-family:var(--second-family)] font-bold text-[26px] leading-[83%] tracking-[-0.03em] text-[#e40d0d]">GAROUSCA</div>
          </div>
          {/* HILL BISCUITS */}
          <div className="w-[200px] h-[70px] bg-white rounded-[12px] border border-[#f9f9f7] shadow-[0_3px_60px_0_rgba(0,0,0,0.05)] flex items-center justify-center text-center">
            <div className="[font-family:var(--second-family)] font-bold text-[26px] leading-[83%] tracking-[-0.03em] text-[#e40d0d]">HILL BISCUITS</div>
          </div>
          {/* HIGHLAND SPECIALITY SHORTBREAD */}
          <div className="w-[200px] h-[70px] bg-white rounded-[12px] border border-[#f9f9f7] shadow-[0_3px_60px_0_rgba(0,0,0,0.05)] flex items-center justify-center text-center">
            <div className="[font-family:var(--second-family)] font-bold text-[26px] leading-[83%] tracking-[-0.03em] text-[#e40d0d]">
              <div>HIGHLAND SPECIALITY</div>
              <div>SHORTBREAD</div>
            </div>
          </div>
          {/* PATERSONS SHORTBREAD */}
          <div className="w-[200px] h-[70px] bg-white rounded-[12px] border border-[#f9f9f7] shadow-[0_3px_60px_0_rgba(0,0,0,0.05)] flex items-center justify-center text-center">
            <div className="[font-family:var(--second-family)] font-bold text-[26px] leading-[83%] tracking-[-0.03em] text-[#e40d0d]">
              <div>PATERSONS</div>
              <div>SHORTBREAD</div>
          </div>
          </div>
          {/* HARIBO */}
          <div className="w-[200px] h-[70px] bg-white rounded-[12px] border border-[#f9f9f7] shadow-[0_3px_60px_0_rgba(0,0,0,0.05)] flex items-center justify-center text-center">
            <div className="[font-family:var(--second-family)] font-bold text-[26px] leading-[83%] tracking-[-0.03em] text-[#e40d0d]">HARIBO</div>
          </div>
          {/* CRETORS USA */}
          <div className="w-[200px] h-[70px] bg-white rounded-[12px] border border-[#f9f9f7] shadow-[0_3px_60px_0_rgba(0,0,0,0.05)] flex items-center justify-center text-center">
            <div className="[font-family:var(--second-family)] font-bold text-[26px] leading-[83%] tracking-[-0.03em] text-[#e40d0d]">CRETORS USA</div>
          </div>
          {/* GULLON */}
          <div className="w-[200px] h-[70px] bg-white rounded-[12px] border border-[#f9f9f7] shadow-[0_3px_60px_0_rgba(0,0,0,0.05)] flex items-center justify-center text-center">
            <div className="[font-family:var(--second-family)] font-bold text-[26px] leading-[83%] tracking-[-0.03em] text-[#e40d0d]">GULLON</div>
          </div>
        </div>
      </div>
    </div>
  )
}
