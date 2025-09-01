export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Our Debut Section */}
      <section className="relative py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Product Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img src="/countre-banana-bottle.png" alt="Countre Banana" className="w-full h-64 object-contain" />
              <img src="/countre-chocolate-bottle.png" alt="Countre Chocolate" className="w-full h-64 object-contain" />
              <img src="/countre-vanilla-bottle.png" alt="Countre Vanilla" className="w-full h-64 object-contain" />
              <img
                src="/countre-strawberry-bottle.png"
                alt="Countre Strawberry"
                className="w-full h-64 object-contain"
              />
            </div>

            {/* Contact Overlay */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#ad343e] text-white p-8 rounded-lg shadow-lg min-w-[300px]">
              <h3 className="text-xl font-semibold mb-6 text-center">Reach out to us</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                    <span className="text-[#ad343e] text-xs">📞</span>
                  </div>
                  <span className="text-sm">+44 7572 762578</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                    <span className="text-[#ad343e] text-xs">✉</span>
                  </div>
                  <span className="text-sm">roman@rico-distribution-international.co.uk</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                    <span className="text-[#ad343e] text-xs">📍</span>
                  </div>
                  <span className="text-sm">79 Kingsley Close, Reading, RG2 8TX, United Kingdom</span>
                </div>
              </div>
            </div>
          </div>

          {/* Our Debut Content */}
          <div>
            <h1 className="text-5xl font-serif text-[#2c2f24] mb-6">Our Debut</h1>
            <p className="text-[#474747] leading-relaxed mb-6">
              Our journey began when our founder, an African living in the UK, recognized a gap in the flow of quality
              food products between producers and the growing markets in Africa and Europe. Driven by a vision to bridge
              this gap, he seized the opportunity to build a trusted distribution network that connects continents,
              supports businesses, and ensures access to diverse, high-quality food for all.
            </p>
            <p className="text-[#474747] leading-relaxed">
              We started with our founder country of origin, Cameroon. We bridge the gap between well-known products
              from Europe to Cameroon and vice versa. From there we expanded to other countries.
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: "url(/warehouse-background.jpg)" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center">
            <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 mx-auto hover:bg-gray-100 transition-colors">
              <div className="w-0 h-0 border-l-[20px] border-l-[#ad343e] border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
            </button>
            <h2 className="text-4xl font-serif text-white">Video</h2>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-serif text-[#2c2f24] mb-6">Our impact</h2>
            <p className="text-[#474747] leading-relaxed mb-8">
              Through our vision and values, we have created a company that has impacted hundreds of people directly and
              thousands of people indirectly.
            </p>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-4xl font-bold text-[#2c2f24] mb-2">3</div>
                <div className="text-[#474747]">Locations</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-4xl font-bold text-[#2c2f24] mb-2">100+</div>
                <div className="text-[#474747]">Products</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-4xl font-bold text-[#2c2f24] mb-2">65+</div>
                <div className="text-[#474747]">Staff Members</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-4xl font-bold text-[#2c2f24] mb-2">100%</div>
                <div className="text-[#474747]">Satisfied Customers</div>
              </div>
            </div>
          </div>

          {/* Royal Dutch Beer Image */}
          <div className="flex justify-center">
            <img src="/royal-dutch-beer-bottle.png" alt="Royal Dutch Beer" className="w-80 h-auto object-contain" />
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif text-[#2c2f24] text-center mb-12">Some of our Partners</h2>

          {/* Partners Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-center justify-center">
              <img src="/carrefour-logo.png" alt="Carrefour Cameroun" className="max-w-full h-16 object-contain" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-center justify-center">
              <img src="/santa-lucia-logo.png" alt="Santa Lucia" className="max-w-full h-16 object-contain" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-center justify-center">
              <img src="/dovv-logo.png" alt="DOVV" className="max-w-full h-16 object-contain" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-center justify-center">
              <img src="/bao-logo.png" alt="BAO Cash & Carry" className="max-w-full h-16 object-contain" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-center justify-center">
              <img src="/acropole-logo.png" alt="Acropole" className="max-w-full h-16 object-contain" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-center justify-center">
              <img src="/spar-logo.png" alt="SPAR" className="max-w-full h-16 object-contain" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-center justify-center">
              <img src="/arno-logo.png" alt="ARNO" className="max-w-full h-16 object-contain" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-center justify-center">
              <img
                src="/boulangerie-saker-logo.png"
                alt="Boulangerie Saker"
                className="max-w-full h-16 object-contain"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-center justify-center">
              <img src="/le-peuple-logo.png" alt="Le Peuple" className="max-w-full h-16 object-contain" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-center justify-center">
              <img src="/lowe-logo.png" alt="LOWE" className="max-w-full h-16 object-contain" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
