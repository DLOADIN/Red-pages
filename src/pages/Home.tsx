import { Button } from "../components/ui/button"
import { Milk, Coffee, Package, Fish, ChevronLeft, ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  
  const slides = [
    "/rico website/Foods/pexels-814191500-19362408.jpg",
    "/rico website/Foods/pexels-jeshoots-230743.jpg", 
    "/rico website/Foods/pexels-makafood-82669418-8952753.jpg",
    "/rico website/Foods/pexels-pixabay-208453.jpg",
    "/rico website/Foods/pexels-valeriya-18852576.jpg"
  ]

  // Auto-play slideshow with pause on hover
  useEffect(() => {
    if (isPaused) return
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000) // Change slide every 6 seconds

    return () => clearInterval(timer)
  }, [slides.length, isPaused])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div>
      {/* Hero Section with Food Slideshow */}
      <section 
        className="relative h-[70vh] md:h-screen overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Slideshow Background */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url('${slide}')`,
              }}
            />
          ))}
        </div>
        
        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/60"></div>
        
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/30 shadow-2xl animate-fade-in">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white drop-shadow-lg">
              Welcome to Rico Distribution
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-white/95 max-w-3xl leading-relaxed">
              Your trusted partner for premium food and beverage distribution worldwide. 
              Connecting quality products with global markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <Button className="bg-[#ad343e] hover:bg-red-600 text-white px-8 md:px-12 py-4 md:py-5 rounded-full text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Link to="/products">Explore Products</Link>
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#ad343e] px-8 md:px-12 py-4 md:py-5 rounded-full bg-transparent text-base md:text-lg font-semibold backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-125 shadow-lg'
                  : 'bg-white/50 hover:bg-white/75 hover:scale-110'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Slide Counter */}
        <div className="absolute top-6 right-6 z-20 bg-black/40 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
          {currentSlide + 1} / {slides.length}
        </div>
        
        {/* Pause Indicator */}
        {isPaused && (
          <div className="absolute top-6 left-6 z-20 bg-black/40 backdrop-blur-md text-white px-3 py-2 rounded-full text-sm font-medium border border-white/20">
            ⏸️ Paused
          </div>
        )}
      </section>

      {/* Browse Our Products Section */}
      <section className="py-8 md:py-16 bg-[#f9f9f7]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 text-[#2c2f24]">Browse Our Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm text-center">
              <div className="bg-gray-100 rounded-lg p-4 md:p-6 mb-4">
                <Milk className="w-10 h-10 md:w-12 md:h-12 mx-auto text-[#474747]" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-[#2c2f24] mb-3">Dairy</h3>
              <p className="text-sm text-gray-600 mb-4">
                Highly made dairy products made by our trusted partners around the world.
              </p>
              <Button
                variant="outline"
                className="text-[#ad343e] border-[#ad343e] hover:bg-[#ad343e] hover:text-white bg-transparent text-sm"
              >
                <Link to="/products">Explore List</Link>
              </Button>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm text-center">
              <div className="bg-gray-100 rounded-lg p-4 md:p-6 mb-4">
                <Coffee className="w-10 h-10 md:w-12 md:h-12 mx-auto text-[#474747]" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-[#2c2f24] mb-3">Drinks</h3>
              <p className="text-sm text-gray-600 mb-4">
                Wide variety of non-alcoholic drinks of high quality consumed and enjoyed by many.
              </p>
              <Button
                variant="outline"
                className="text-[#ad343e] border-[#ad343e] hover:bg-[#ad343e] hover:text-white bg-transparent text-sm"
              >
                <Link to="/products">Explore List</Link>
              </Button>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm text-center">
              <div className="bg-gray-100 rounded-lg p-4 md:p-6 mb-4">
                <Package className="w-10 h-10 md:w-12 md:h-12 mx-auto text-[#474747]" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-[#2c2f24] mb-3">Dry Products</h3>
              <p className="text-sm text-gray-600 mb-4">
                A huge variety of different food items known globally for its flavors and nutritional values.
              </p>
              <Button
                variant="outline"
                className="text-[#ad343e] border-[#ad343e] hover:bg-[#ad343e] hover:text-white bg-transparent text-sm"
              >
                <Link to="/products">Explore List</Link>
              </Button>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm text-center">
              <div className="bg-gray-100 rounded-lg p-4 md:p-6 mb-4">
                <Fish className="w-10 h-10 md:w-12 md:h-12 mx-auto text-[#474747]" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-[#2c2f24] mb-3">Sea Products</h3>
              <p className="text-sm text-gray-600 mb-4">
                Excellent sea products of superior quality, respecting environment and sustainability.
              </p>
              <Button
                variant="outline"
                className="text-[#ad343e] border-[#ad343e] hover:bg-[#ad343e] hover:text-white bg-transparent text-sm"
              >
                <Link to="/products">Explore List</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* We Provide Well Known Products Section */}
      <section className="py-8 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative flex justify-center lg:justify-start">
              <img
                src="/rico website/Pictures/beer 7.png"
                alt="Premium Beer Products"
                className="w-full max-w-[400px] md:max-w-[500px] h-auto md:h-[650px] object-cover rounded-lg relative z-10"
              />
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-[#ad343e] p-4 md:p-6 rounded-lg text-white z-20 shadow-lg max-w-[280px] md:max-w-none">
                <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Feel free to contact us</h3>
                <div className="space-y-1 md:space-y-2 text-xs md:text-sm">
                  <p>📞 +44 7572 795578</p>
                  <p>✉️ roman@rico-distribution-international.co.uk</p>
                  <p>📍 79 Kingsley Close, Reading, RG2 8TX, United Kingdom</p>
                </div>
              </div>
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-[#2c2f24]">We provide well known products.</h2>
              <p className="text-sm md:text-base mb-4 md:mb-6 text-gray-600">
                Our story began with a vision to create a company that will promote well known products, which respect
                environmental standards and are of affordable price ranges, because we want to contribute to
                malnutrition around the world. In phase with that, we want to make African products, and other world
                healthy products to be visible to the world through our robust distribution network.
              </p>
              <p className="text-sm mb-6 md:mb-8 text-gray-600">
                We firmly believe that affordability and quality are words that can be used in the same sentence. That
                is why we decided to be the bridge that connects both worlds.
              </p>

              <Button className="bg-transparent border border-[#474747] text-[#474747] hover:bg-[#474747] hover:text-white mt-4 md:mt-6">
                <Link to="/about">More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Brands Section */}
      <section className="py-8 md:py-16 bg-[#f9f9f7]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 text-[#2c2f24]">Our brands</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="bg-white p-4 md:p-6 shadow-sm mb-4 mx-auto" style={{borderRadius: '12px', width: '100%', maxWidth: '306px', height: '280px', minHeight: '280px'}}>
                <img src="/bigtree-logo.png" alt="Bigtree" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-[#2c2f24] mb-2">Bigtree</h3>
              <p className="text-sm text-gray-600">
                BigTree offers a wide range of high-quality food products, trusted by businesses and communities for
                their consistency and value.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white p-4 md:p-6 shadow-sm mb-4 mx-auto" style={{borderRadius: '12px', width: '100%', maxWidth: '306px', height: '280px', minHeight: '280px'}}>
                <img src="/countre-logo.png" alt="Countre" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-[#2c2f24] mb-2">Countre</h3>
              <p className="text-sm text-gray-600">
                Countre offers delicious flavored milk drinks, blending quality and taste to refresh and nourish every
                moment.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white p-4 md:p-6 shadow-sm mb-4 mx-auto" style={{borderRadius: '12px', width: '100%', maxWidth: '306px', height: '280px', minHeight: '280px'}}>
                <img src="/dairyland-logo.png" alt="Dairyland" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-[#2c2f24] mb-2">Dairyland</h3>
              <p className="text-sm text-gray-600">
                Dairyland delivers fresh, high-quality dairy products that bring taste and nutrition to every table.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white p-4 md:p-6 shadow-sm mb-4 mx-auto" style={{borderRadius: '12px', width: '100%', maxWidth: '306px', height: '280px', minHeight: '280px'}}>
                <img src="/laitel-logo.png" alt="Laitel" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-[#2c2f24] mb-2">Laitel</h3>
              <p className="text-sm text-gray-600">
                Laitel provides premium milk products, combining quality and freshness to satisfy every household and
                business need.
              </p>
            </div>
          </div>

          <div className="text-center mt-6 md:mt-8">
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
      <section className="py-8 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 text-[#2c2f24]">Our Partners</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="bg-white p-4 md:p-6 shadow-sm mb-4 border mx-auto" style={{borderRadius: '12px', width: '100%', maxWidth: '306px', height: '280px', minHeight: '280px'}}>
                <img src="/carrefour-logo.png" alt="Carrefour Cameroun" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-[#2c2f24] mb-2">Carrefour Cameroun</h3>
              <p className="text-sm text-gray-600">
                Carrefour is a leading global supermarket chain, known for providing customers with a wide range of
                quality products and exceptional shopping experiences.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white p-4 md:p-6 shadow-sm mb-4 border mx-auto" style={{borderRadius: '12px', width: '100%', maxWidth: '306px', height: '280px', minHeight: '280px'}}>
                <img src="/bao-logo.png" alt="BAO Cash and Carry" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-[#2c2f24] mb-2">BAO Cash and Carry</h3>
              <p className="text-sm text-gray-600">
                BAO Cash & Carry is a leading wholesale retailer in Cameroon, offering a broad range of quality products
                to meet the needs of businesses and consumers.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white p-4 md:p-6 shadow-sm mb-4 border mx-auto" style={{borderRadius: '12px', width: '100%', maxWidth: '306px', height: '280px', minHeight: '280px'}}>
                <img src="/santa-lucia-logo.png" alt="Santa Lucia" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-[#2c2f24] mb-2">Santa Lucia</h3>
              <p className="text-sm text-gray-600">
                Complete Santa Lucia is a trusted retail destination, offering a variety of quality products to meet the
                everyday needs of its customers.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white p-4 md:p-6 shadow-sm mb-4 border mx-auto" style={{borderRadius: '12px', width: '100%', maxWidth: '306px', height: '280px', minHeight: '280px'}}>
                <img src="/dovv-logo.png" alt="Dovv" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-[#2c2f24] mb-2">Dovv</h3>
              <p className="text-sm text-gray-600">
                Dovv Supermarket is a well-known retail chain providing customers with a wide selection of quality
                products for everyday living.
              </p>
            </div>
          </div>

          <div className="text-center mt-6 md:mt-8">
            <Button
              variant="outline"
              className="border-[#474747] text-[#474747] hover:bg-[#474747] hover:text-white bg-transparent"
            >
              <Link to="/contact">More Clients</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* World Map Section */}
      <section className="py-8 md:py-16 bg-[#f9f9f7]">
        <div className="w-full">
          <img
            src="/rico website/Pictures/world red map isolated on beige background_ Detailed world atlas.jpg"
            alt="Global Distribution Map"
            className="w-full h-auto"
          />
        </div>
      </section>
    </div>
  )
}
