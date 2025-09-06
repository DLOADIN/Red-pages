import { useState, useEffect, useRef } from "react"
import { Target, Eye, HandHeart } from "lucide-react"

export default function About() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  
  const videos = [
    "/videos/VID-20250903-WA0006.mp4",
    "/videos/VID-20250903-WA0007.mp4", 
    "/videos/VID-20250903-WA0008.mp4",
    "/videos/VID-20250903-WA0009.mp4",
    "/videos/VID-20250903-WA0010.mp4"
  ]

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleVideoEnd = () => {
      setTimeout(() => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length)
      }, 2000) // 2 second delay before next video
    }

    video.addEventListener('ended', handleVideoEnd)
    
    return () => {
      video.removeEventListener('ended', handleVideoEnd)
    }
  }, [videos.length])

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.load()
      video.play().catch(console.error)
    }
  }, [currentVideoIndex])

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
            <h1 className="text-heading mb-6">Our Debut</h1>
            <p className="text-paragraph mb-6">
              Our journey began when our founder, an African living in the UK, recognized a gap in the flow of quality
              food products between producers and the growing markets in Africa and Europe. Driven by a vision to bridge
              this gap, he seized the opportunity to build a trusted distribution network that connects continents,
              supports businesses, and ensures access to diverse, high-quality food for all.
            </p>
            <p className="text-small">
              We started with our founder country of origin, Cameroon. We bridge the gap between well-known products
              from Europe to Cameroon and vice versa. From there we expanded to other countries.
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="relative bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="relative aspect-video w-full">
            <video
              ref={videoRef}
              className="w-full h-full object-contain bg-black"
              muted
              loop={false}
              playsInline
            >
              <source src={videos[currentVideoIndex]} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-heading text-white mb-4">Our Story</h2>
                <p className="text-white text-lg max-w-2xl mx-auto">
                  Watch our journey from vision to reality
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* Our Mission */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-2">
                <Target className="w-10 h-10 mt-1 text-[#2c2f24]" />
              </div>
              <div>
                <h3 className="text-[40px] mb-4">Our Mission</h3>
                <p className="text-paragraph">
                  We deliver diverse, high-quality food products through reliable networks, empowering businesses and creating sustainable value across continents.
                </p>
              </div>
            </div>

            {/* Our Vision */}  
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-2">
                <Eye className="w-10 h-10 mt-1 text-[#2c2f24]" />
              </div>
              <div>
                <h3 className="text-[40px] mb-4">Our Vision</h3>
                <p className="text-paragraph">
                  To be a trusted global bridge in food distribution, connecting producers to Africa and Europe with quality products that nourish communities and grow economies.
                </p>
              </div>
            </div>

            {/* Our Values */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-2">
                <HandHeart className="w-10 h-10 mt-1 text-[#2c2f24]" />
              </div>
              <div>
                <h3 className="text-[40px] mb-4">Our Values</h3>
                <p className="text-paragraph">
                  To be a leading global food distribution company, bridging continents and cultures by providing quality, diverse, and affordable food products that nourish communities and create shared prosperity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-heading mb-6">Our impact</h2>
            <p className="text-paragraph mb-8">
              Through our vision and values, we have created a company that has impacted Hundreds of people directly and thousands of people indirectly.
            </p>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-4xl font-bold text-[#2c2f24] mb-2">3</div>
                <div className="text-small">Locations</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-4xl font-bold text-[#2c2f24] mb-2">100+</div>
                <div className="text-small">Products</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-4xl font-bold text-[#2c2f24] mb-2">65+</div>
                <div className="text-small">Staff Members</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-4xl font-bold text-[#2c2f24] mb-2">100%</div>
                <div className="text-small">Satisfied Customers</div>
              </div>
            </div>
          </div>

          {/* Royal Dutch Beer Image */}
          <div className="flex justify-center">
            <img src="/royal-dutch-beer-bottle.png" alt="Royal Dutch Beer" className="w-full max-w-lg h-auto object-contain" />
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-heading text-center mb-12">Some of our Partners</h2>

          {/* Partners Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-center justify-center">
              <img src="/rico website/logo/carrefour logo.png" alt="Carrefour Cameroun" className="max-w-full h-36 object-contain" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-center justify-center">
              <img src="/rico website/logo/Santa lucia logo.jpg" alt="Santa Lucia" className="max-w-full h-16 object-contain" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-center justify-center">
              <img src="/rico website/logo/dovv logo.png" alt="DOVV" className="max-w-full h-36 object-contain" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-center justify-center">
              <img src="/rico website/logo/bao.png" alt="BAO Cash & Carry" className="max-w-full h-36 object-contain" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-center justify-center">
              <img src="/rico website/logo/acropole.png" alt="Acropole" className="max-w-full h-36 object-contain" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-center justify-center">
              <img src="/rico website/logo/spar.png" alt="SPAR" className="max-w-full h-36 object-contain" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-center justify-center">
              <img src="/rico website/logo/arno.webp" alt="ARNO" className="max-w-full h-36 object-contain" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-center justify-center">
              <img
                src="/rico website/logo/logo-boulangerie-saker-1.png"
                alt="Boulangerie Saker"
                className="max-w-full h-36 object-contain"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-center justify-center">
              <img src="/rico website/logo/peuple.jpg" alt="Le Peuple" className="max-w-full h-36 object-contain" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-center justify-center">
              <img src="/rico website/logo/lowe.jpg" alt="LOWE" className="max-w-full h-36 object-contain" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
