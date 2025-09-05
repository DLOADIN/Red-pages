import { Button } from "../components/ui/button"
import { Play, Milk, Coffee, Package, Fish } from "lucide-react"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div>
      {/* Hero Section with Food Background */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1Capture.PNG-baxKlCwiP19aa6O5HPYTCzlqMAI6lp.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <div className="bg-[#ad343e] rounded-full p-6 mb-8 cursor-pointer hover:bg-red-accent transition-colors">
            <Play className="w-8 h-8 fill-white" />
          </div>
          <h1 className="text-2xl font-medium mb-8 text-[#ad343e] bg-white px-4 py-2 rounded">
            "Here should be a series of videos"
          </h1>
          <div className="flex gap-4">
            <Button className="bg-[#ad343e] hover:bg-red-accent text-white px-8 py-3 rounded-full">Partners</Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#ad343e] px-8 py-3 rounded-full bg-transparent"
            >
              Brands
            </Button>
          </div>
        </div>
      </section>

      {/* Browse Our Products Section */}
      <section className="py-16 bg-[#f9f9f7]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-heading text-center mb-12">Browse Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="bg-gray-100 rounded-lg p-6 mb-4">
                <Milk className="w-12 h-12 mx-auto text-[#474747]" />
              </div>
              <h3 className="text-xl font-semibold text-[#2c2f24] mb-3">Dairy</h3>
              <p className="text-small mb-4">
                Highly made dairy products made by our trusted partners around the world.
              </p>
              <Button
                variant="outline"
                className="text-[#ad343e] border-[#ad343e] hover:bg-[#ad343e] hover:text-white bg-transparent"
              >
                <Link to="/products">Explore List</Link>
              </Button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="bg-gray-100 rounded-lg p-6 mb-4">
                <Coffee className="w-12 h-12 mx-auto text-[#474747]" />
              </div>
              <h3 className="text-xl font-semibold text-[#2c2f24] mb-3">Drinks</h3>
              <p className="text-small mb-4">
                Wide variety of non-alcoholic drinks of high quality consumed and enjoyed by many.
              </p>
              <Button
                variant="outline"
                className="text-[#ad343e] border-[#ad343e] hover:bg-[#ad343e] hover:text-white bg-transparent"
              >
                <Link to="/products">Explore List</Link>
              </Button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="bg-gray-100 rounded-lg p-6 mb-4">
                <Package className="w-12 h-12 mx-auto text-[#474747]" />
              </div>
              <h3 className="text-xl font-semibold text-[#2c2f24] mb-3">Dry Products</h3>
              <p className="text-small mb-4">
                A huge variety of different food items known globally for its flavors and nutritional values.
              </p>
              <Button
                variant="outline"
                className="text-[#ad343e] border-[#ad343e] hover:bg-[#ad343e] hover:text-white bg-transparent"

              >
                <Link to="/products">Explore List</Link>
              </Button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="bg-gray-100 rounded-lg p-6 mb-4">
                <Fish className="w-12 h-12 mx-auto text-[#474747]" />
              </div>
              <h3 className="text-xl font-semibold text-[#2c2f24] mb-3">Sea Products</h3>
              <p className="text-small mb-4">
                Excellent sea products of superior quality, respecting environment and sustainability.
              </p>
              <Button
                variant="outline"
                className="text-[#ad343e] border-[#ad343e] hover:bg-[#ad343e] hover:text-white bg-transparent"
              >
                <Link to="/products">Explore List</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* We Provide Well Known Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <img
                src="/rico website/Pictures/beer 7.png"
                alt="Premium Beer Products"
                className="w-full h-[700px] rounded-lg relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#ad343e] p-6 rounded-lg text-white z-20 shadow-lg">
                <h3 className="text-lg font-semibold mb-4">Feel free to contact us</h3>
                <div className="space-y-2 text-sm">
                  <p>📞 +44 7572 795578</p>
                  <p>✉️ roman@rico-distribution-international.co.uk</p>
                  <p>📍 79 Kingsley Close, Reading, RG2 8TX, United Kingdom</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-heading mb-6">We provide well known products.</h2>
              <p className="text-paragraph mb-6">
                Our story began with a vision to create a company that will promote well known products, which respect
                environmental standards and are of affordable price ranges, because we want to contribute to
                malnutrition around the world. In phase with that, we want to make African products, and other world
                healthy products to be visible to the world through our robust distribution network.
              </p>
              <p className="text-small mb-8">
                We firmly believe that affordability and quality are words that can be used in the same sentence. That
                is why we decided to be the bridge that connects both worlds.
              </p>

              <Button className="bg-transparent border border-[#474747] text-[#474747] hover:bg-[#474747] hover:text-white mt-6">
                <Link to="/about">More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Brands Section */}
      <section className="py-16 bg-[#f9f9f7]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-heading mb-12">Our brands</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
                <img src="/bigtree-logo.png" alt="Bigtree" className="w-full h-20 object-contain" />
              </div>
              <h3 className="text-xl font-semibold text-[#2c2f24] mb-2">Bigtree</h3>
              <p className="text-small">
                BigTree offers a wide range of high-quality food products, trusted by businesses and communities for
                their consistency and value.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
                <img src="/countre-logo.png" alt="Countre" className="w-full h-20 object-contain" />
              </div>
              <h3 className="text-xl font-semibold text-[#2c2f24] mb-2">Countre</h3>
              <p className="text-small">
                Countre offers delicious flavored milk drinks, blending quality and taste to refresh and nourish every
                moment.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
                <img src="/dairyland-logo.png" alt="Dairyland" className="w-full h-20 object-contain" />
              </div>
              <h3 className="text-xl font-semibold text-[#2c2f24] mb-2">Dairyland</h3>
              <p className="text-small">
                Dairyland delivers fresh, high-quality dairy products that bring taste and nutrition to every table.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
                <img src="/laitel-logo.png" alt="Laitel" className="w-full h-20 object-contain" />
              </div>
              <h3 className="text-xl font-semibold text-[#2c2f24] mb-2">Laitel</h3>
              <p className="text-small">
                Laitel provides premium milk products, combining quality and freshness to satisfy every household and
                business need.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button
              variant="outline"
              className="border-[#474747] text-[#474747] hover:bg-[#474747] hover:text-white bg-transparent"
            >
              <Link to="/products#our-brands">More Brands</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Partners Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-heading mb-12">Our Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-4 border">
                <img src="/carrefour-logo.png" alt="Carrefour Cameroun" className="w-full h-20 object-contain" />
              </div>
              <h3 className="text-xl font-semibold text-[#2c2f24] mb-2">Carrefour Cameroun</h3>
              <p className="text-small">
                Carrefour is a leading global supermarket chain, known for providing customers with a wide range of
                quality products and exceptional shopping experiences.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-4 border">
                <img src="/bao-logo.png" alt="BAO Cash and Carry" className="w-full h-20 object-contain" />
              </div>
              <h3 className="text-xl font-semibold text-[#2c2f24] mb-2">BAO Cash and Carry</h3>
              <p className="text-small">
                BAO Cash & Carry is a leading wholesale retailer in Cameroon, offering a broad range of quality products
                to meet the needs of businesses and consumers.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-4 border">
                <img src="/santa-lucia-logo.png" alt="Santa Lucia" className="w-full h-20 object-contain" />
              </div>
              <h3 className="text-xl font-semibold text-[#2c2f24] mb-2">Santa Lucia</h3>
              <p className="text-small">
                Complete Santa Lucia is a trusted retail destination, offering a variety of quality products to meet the
                everyday needs of its customers.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-4 border">
                <img src="/dovv-logo.png" alt="Dovv" className="w-full h-20 object-contain" />
              </div>
              <h3 className="text-xl font-semibold text-[#2c2f24] mb-2">Dovv</h3>
              <p className="text-small">
                Dovv Supermarket is a well-known retail chain providing customers with a wide selection of quality
                products for everyday living.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button
              variant="outline"
              className="border-[#474747] text-[#474747] hover:bg-[#474747] hover:text-white bg-transparent"
            >
              More Clients
            </Button>
          </div>
        </div>
      </section>

      {/* World Map Section */}
      <section className="py-16 bg-[#f9f9f7]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6Capture.PNG-pGplGLH2pMvS6gsPeRcwrbhWnU7W6O.png"
              alt="Global Distribution Map"
              className="w-full"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
