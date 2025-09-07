import { Button } from "../components/ui/button"

export default function Products() {
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

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-12">
        <Button className="bg-[#ad343e] hover:bg-red-accent text-white px-6 py-2 rounded-full">All</Button>
        <Button variant="ghost" className="text-[#474747] hover:bg-[#edccc9] px-6 py-2 rounded-full">
          Dairy
        </Button>
        <Button variant="ghost" className="text-[#474747] hover:bg-[#edccc9] px-6 py-2 rounded-full">
          Drinks
        </Button>
        <Button variant="ghost" className="text-[#474747] hover:bg-[#edccc9] px-6 py-2 rounded-full">
          Dry Products
        </Button>
        <Button variant="ghost" className="text-[#474747] hover:bg-[#edccc9] px-6 py-2 rounded-full">
          Frozen Products
        </Button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {/* Row 1 */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-[#dbdfd0]">
          <div className="aspect-square mb-4 flex items-center justify-center">
            <img src="/flavored-milk-bottles-colorful.png" alt="Countre Flavored Milk" className="max-w-full h-auto" />
          </div>
          <h3 className="text-[#ad343e] font-semibold text-center">Countre</h3>
          <p className="text-small text-center">Flavored Milk</p>
          <p className="text-[#adb29e] text-center">—</p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-[#dbdfd0]">
          <div className="aspect-square mb-4 flex items-center justify-center">
            <img src="/gullon-sugar-free-biscuit-box-blue.png" alt="Gullon Biscuit" className="max-w-full h-auto" />
          </div>
          <h3 className="text-[#ad343e] font-semibold text-center">Gullon</h3>
          <p className="text-small text-center">Biscuit</p>
          <p className="text-[#adb29e] text-center">—</p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-[#dbdfd0]">
          <div className="aspect-square mb-4 flex items-center justify-center">
            <img
              src="/garusana-cooking-oil-bottles-olive-oil.png"
              alt="Garusana Cooking Oil"
              className="max-w-full h-auto"
            />
          </div>
          <h3 className="text-[#ad343e] font-semibold text-center">Garusana</h3>
          <p className="text-small text-center">Cooking Oil</p>
          <p className="text-[#adb29e] text-center">—</p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-[#dbdfd0]">
          <div className="aspect-square mb-4 flex items-center justify-center">
            <img src="/garusana-honey-jars-yellow-golden.png" alt="Garusana Honey" className="max-w-full h-auto" />
          </div>
          <h3 className="text-[#ad343e] font-semibold text-center">Garusana</h3>
          <p className="text-small text-center">Honey</p>
          <p className="text-[#adb29e] text-center">—</p>
        </div>

        {/* Row 2 */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-[#dbdfd0]">
          <div className="aspect-square mb-4 flex items-center justify-center">
            <img src="/gullon-biscuit-package-orange-cookies.png" alt="Gullon Biscuit" className="max-w-full h-auto" />
          </div>
          <h3 className="text-[#ad343e] font-semibold text-center">Gullon</h3>
          <p className="text-small text-center">Biscuit</p>
          <p className="text-[#adb29e] text-center">—</p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-[#dbdfd0]">
          <div className="aspect-square mb-4 flex items-center justify-center">
            <img src="/krios-fish-canned-products-red-packaging.png" alt="Krios Fish" className="max-w-full h-auto" />
          </div>
          <h3 className="text-[#ad343e] font-semibold text-center">Krios</h3>
          <p className="text-small text-center">Fish</p>
          <p className="text-[#adb29e] text-center">—</p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-[#dbdfd0]">
          <div className="aspect-square mb-4 flex items-center justify-center">
            <img
              src="/gullon-sugar-free-biscuit-box-blue-cookies.png"
              alt="Gullon Biscuit"
              className="max-w-full h-auto"
            />
          </div>
          <h3 className="text-[#ad343e] font-semibold text-center">Gullon</h3>
          <p className="text-small text-center">Biscuit</p>
          <p className="text-[#adb29e] text-center">—</p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-[#dbdfd0]">
          <div className="aspect-square mb-4 flex items-center justify-center">
            <img src="/garusana-biscuit-tube-blue-packaging.png" alt="Garusana Biscuit" className="max-w-full h-auto" />
          </div>
          <h3 className="text-[#ad343e] font-semibold text-center">Garusana</h3>
          <p className="text-small text-center">Biscuit</p>
          <p className="text-[#adb29e] text-center">—</p>
        </div>
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
