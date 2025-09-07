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
      // Drinks - Beers and beverages
      { id: "beer-1", brand: "United Dutch Brewery", product: "Beer", image: "/rico%20website/Pictures/beer%201.png", category: "Drinks" },
      { id: "beer-2", brand: "United Dutch Brewery", product: "Beer", image: "/rico%20website/Pictures/beer%202.png", category: "Drinks" },
      { id: "beer-3", brand: "United Dutch Brewery", product: "Beer", image: "/rico%20website/Pictures/beer%203.png", category: "Drinks" },
      { id: "beer-4", brand: "United Dutch Brewery", product: "Beer", image: "/rico%20website/Pictures/beer%204.png", category: "Drinks" },
      { id: "beer-5", brand: "United Dutch Brewery", product: "Beer", image: "/rico%20website/Pictures/beer%205.png", category: "Drinks" },
      { id: "beer-6", brand: "United Dutch Brewery", product: "Beer", image: "/rico%20website/Pictures/beer%206.png", category: "Drinks" },
      { id: "beer-7", brand: "United Dutch Brewery", product: "Beer", image: "/rico%20website/Pictures/beer%207.png", category: "Drinks" },
      { id: "beer-8", brand: "United Dutch Brewery", product: "Beer", image: "/rico%20website/Pictures/beer%208.png", category: "Drinks" },
      { id: "beer-9", brand: "United Dutch Brewery", product: "Beer", image: "/rico%20website/Pictures/beer%209.png", category: "Drinks" },
      { id: "beer-10", brand: "United Dutch Brewery", product: "Beer", image: "/rico%20website/Pictures/beer%2010.png", category: "Drinks" },
      { id: "beer-11", brand: "United Dutch Brewery", product: "Beer", image: "/rico%20website/Pictures/beer%2011.png", category: "Drinks" },
      { id: "dutch-beer", brand: "United Dutch Brewery", product: "Beer", image: "/rico%20website/Pictures/dutch%20beer.png", category: "Drinks" },
      { id: "energy", brand: "Energy Drink", product: "Energy Drinks", image: "/rico%20website/Pictures/energy%20drinks.jpg", category: "Drinks" },
      { id: "juice", brand: "Euro Shopper", product: "Juice", image: "/rico%20website/Pictures/juice%20euro%20shopper.webp", category: "Drinks" },
      // { id: "u-db-photo", brand: "United Dutch Brewery", product: "Beer", image: "/rico%20website/Pictures/United%20dutch%20brewery.jpeg", category: "Drinks" },

      // Dairy - Countre & Dairyland
      { id: "countre-1", brand: "Countre", product: "Flavored Milk", image: "/rico%20website/Pictures/countre%201.png", category: "Dairy" },
      { id: "countre-2", brand: "Countre", product: "Flavored Milk", image: "/rico%20website/Pictures/countre%202.png", category: "Dairy" },
      { id: "countre-4", brand: "Countre", product: "Flavored Milk", image: "/rico%20website/Pictures/countre%204.png", category: "Dairy" },
      { id: "countre-5-milk", brand: "Countre", product: "Flavored Milk", image: "/rico%20website/Pictures/countre%205%20with%20milk.png", category: "Dairy" },
      { id: "countre-banana", brand: "Countre", product: "Flavored Milk", image: "/rico%20website/Pictures/countre%20banana.png", category: "Dairy" },
      { id: "countre-choco", brand: "Countre", product: "Flavored Milk", image: "/rico%20website/Pictures/countre%20choco.png", category: "Dairy" },
      { id: "countre-strw", brand: "Countre", product: "Flavored Milk", image: "/rico%20website/Pictures/countre%20strw.png", category: "Dairy" },
      { id: "countre-vanilla", brand: "Countre", product: "Flavored Milk", image: "/rico%20website/Pictures/countre%20vanilla.png", category: "Dairy" },
      { id: "countre-whole", brand: "Countre", product: "Whole Milk", image: "/rico%20website/Pictures/countre%20whole%20milk.png", category: "Dairy" },
      { id: "dairyland-1", brand: "Dairyland", product: "Ice Cream", image: "/rico%20website/Pictures/daryland%20ice%20cream.png", category: "Dairy" },
      { id: "dairyland-2", brand: "Dairyland", product: "Dairy", image: "/rico%20website/Pictures/daryland%201.png", category: "Dairy" },
      { id: "dairyland-3", brand: "Dairyland", product: "Dairy", image: "/rico%20website/Pictures/dairyland%202.png", category: "Dairy" },
      { id: "dairyland-4", brand: "Dairyland", product: "Dairy", image: "/rico%20website/Pictures/dairyland%203.png", category: "Dairy" },
      { id: "dairyland-5", brand: "Dairyland", product: "Dairy", image: "/rico%20website/Pictures/dairyland%204.png", category: "Dairy" },

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
      { id: "dairy-choco", brand: "Dairyland", product: "Chocolate", image: "/rico%20website/Pictures/choco%20dairyland.png", category: "Dry Products" },
      { id: "dairy-chips", brand: "Dairyland", product: "Irish Potato Chips", image: "/rico%20website/Pictures/WhatsApp Image 2025-08-31 at 10.54.56 AM (2).jpeg", category: "Dry Products" },

      // Frozen Products
      { id: "frozen-fish", brand: "Frozen", product: "Fish", image: "/rico%20website/Pictures/Fish.jpeg", category: "Frozen Products" },
      { id: "frozen-porc", brand: "Frozen", product: "Porc", image: "/rico%20website/Pictures/pork.jpeg", category: "Frozen Products" },
      { id: "frozen-Packaged-chicken", brand: "Frozen", product: "Frozen-Packaged-chicken", image: "/rico%20website/Pictures/Other%20Chicken.jpeg", category: "Frozen Products" },
      { id: "frozen-chickens", brand: "Frozen", product: "Chicken", image: "/rico%20website/Pictures/chicken.jpeg", category: "Frozen Products" },
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
        {(["All", "Dairy", "Drinks", "Dry Products", "Frozen Products"] as Category[]).map((tab) => (
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
          {/* UNITED DUTCH BREWERY */}
          <div className="w-[200px] h-[70px] bg-white rounded-[12px] border border-[#f9f9f7] shadow-[0_3px_60px_0_rgba(0,0,0,0.05)] flex items-center justify-center text-center">
            <div className="[font-family:var(--second-family)] font-bold text-[26px] leading-[83%] tracking-[-0.03em] text-[#e40d0d]">
              <div>UNITED DUTCH</div>
              <div>BREWERY</div>
            </div>
          </div>
          {/* HIGHLAND SPECIALITY */}
          <div className="w-[200px] h-[70px] bg-white rounded-[12px] border border-[#f9f9f7] shadow-[0_3px_60px_0_rgba(0,0,0,0.05)] flex items-center justify-center text-center">
            <div className="[font-family:var(--second-family)] font-bold text-[26px] leading-[83%] tracking-[-0.03em] text-[#e40d0d]">
              <div>HIGHLAND</div>
              <div>SPECIALITY</div>
            </div>
          </div>
          {/* PATERSON'S */}
          <div className="w-[200px] h-[70px] bg-white rounded-[12px] border border-[#f9f9f7] shadow-[0_3px_60px_0_rgba(0,0,0,0.05)] flex items-center justify-center text-center">
            <div className="[font-family:var(--second-family)] font-bold text-[26px] leading-[83%] tracking-[-0.03em] text-[#e40d0d]">PATERSON’S</div>
          </div>
          {/* KRIOS */}
          <div className="w-[200px] h-[70px] bg-white rounded-[12px] border border-[#f9f9f7] shadow-[0_3px_60px_0_rgba(0,0,0,0.05)] flex items-center justify-center text-center">
            <div className="[font-family:var(--second-family)] font-bold text-[26px] leading-[83%] tracking-[-0.03em] text-[#e40d0d]">KRIOS</div>
          </div>
          {/* COUNTRE */}
          <div className="w-[200px] h-[70px] bg-white rounded-[12px] border border-[#f9f9f7] shadow-[0_3px_60px_0_rgba(0,0,0,0.05)] flex items-center justify-center text-center">
            <div className="[font-family:var(--second-family)] font-bold text-[26px] leading-[83%] tracking-[-0.03em] text-[#e40d0d]">COUNTRE</div>
          </div>
          {/* GULLON */}
          <div className="w-[200px] h-[70px] bg-white rounded-[12px] border border-[#f9f9f7] shadow-[0_3px_60px_0_rgba(0,0,0,0.05)] flex items-center justify-center text-center">
            <div className="[font-family:var(--second-family)] font-bold text-[26px] leading-[83%] tracking-[-0.03em] text-[#e40d0d]">GULLON</div>
          </div>
          {/* GARUSANA */}
          <div className="w-[200px] h-[70px] bg-white rounded-[12px] border border-[#f9f9f7] shadow-[0_3px_60px_0_rgba(0,0,0,0.05)] flex items-center justify-center text-center">
            <div className="[font-family:var(--second-family)] font-bold text-[26px] leading-[83%] tracking-[-0.03em] text-[#e40d0d]">GARUSANA</div>
          </div>
          {/* MEGA WHALE */}
          <div className="w-[200px] h-[70px] bg-white rounded-[12px] border border-[#f9f9f7] shadow-[0_3px_60px_0_rgba(0,0,0,0.05)] flex items-center justify-center text-center">
            <div className="[font-family:var(--second-family)] font-bold text-[26px] leading-[83%] tracking-[-0.03em] text-[#e40d0d]">MEGA WHALE</div>
          </div>
          {/* DOSPANI */}
          <div className="w-[200px] h-[70px] bg-white rounded-[12px] border border-[#f9f9f7] shadow-[0_3px_60px_0_rgba(0,0,0,0.05)] flex items-center justify-center text-center">
            <div className="[font-family:var(--second-family)] font-bold text-[26px] leading-[83%] tracking-[-0.03em] text-[#e40d0d]">DOSPANI</div>
          </div>
        </div>
      </div>
    </div>
  )
}
