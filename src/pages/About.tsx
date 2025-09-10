import { useState, useEffect, useRef } from "react"
import { Target, Eye, HandHeart } from "lucide-react"

export default function About() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [playingVideoIndex, setPlayingVideoIndex] = useState<number | null>(null)
  const [videoErrors, setVideoErrors] = useState<Set<number>>(new Set())
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  
  const videos = [
    "/New folder/VID-20250903-WA0006.mp4",
    "/New folder/VID-20250903-WA0007.mp4", 
    "/New folder/VID-20250903-WA0008.mp4",
    "/New folder/VID-20250903-WA0009.mp4",
    "/New folder/VID-20250903-WA0010.mp4"
  ]

  // Initialize video refs
  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, videos.length)
  }, [videos.length])

  // Navigation functions
  const goToNext = () => {
    setCurrentVideoIndex(prev => (prev + 1) % videos.length)
    setPlayingVideoIndex(null) // Stop current video when navigating
  }

  const goToPrevious = () => {
    setCurrentVideoIndex(prev => (prev - 1 + videos.length) % videos.length)
    setPlayingVideoIndex(null) // Stop current video when navigating
  }

  // Handle video playback
  const toggleVideoPlay = (index: number) => {
    const video = videoRefs.current[index]
    if (!video) return

    // Pause all other videos
    videoRefs.current.forEach((v, i) => {
      if (v && i !== index) {
        v.pause()
      }
    })

    if (playingVideoIndex === index) {
      // Currently playing this video, pause it
      video.pause()
      setPlayingVideoIndex(null)
    } else {
      // Play this video
      video.play().catch((error) => {
        console.error(`Error playing video ${index + 1}:`, error)
        handleVideoError(index)
      })
      setPlayingVideoIndex(index)
    }
  }

  // Handle video errors
  const handleVideoError = (index: number) => {
    console.error(`Video ${index + 1} failed to load`)
    setVideoErrors(prev => new Set(prev).add(index))
    setPlayingVideoIndex(null)
  }

  // Handle video end
  const handleVideoEnd = () => {
    setPlayingVideoIndex(null)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Our Debut Section */}
      <section className="relative py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Product Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <img src="/rico website/Pictures/countre vanilla.png" alt="Countre Banana" className="w-full h-64 rounded-xl object-contain" />
              <img src="/rico website/Pictures/gullon 3.png" alt="Countre Chocolate" className="w-full h-64 rounded-xl object-contain" />
              <img src="/Zo/new/FOlder/Garusana product 1.webp" alt="Countre Vanilla" className="w-full h-64 rounded-xl object-contain" />
              <img
                src="/rico website/Pictures/countre 1.png"
                alt="Countre Strawberry"
                className="rounded-xl w-full h-64 rounded-xl object-contain"
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
                  <span className="text-sm">Regus House, 400 Thames valley park RG6 1PT Reading United Kingdom</span>
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

      {/* Video Carousel Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-heading mb-4">Our Story</h2>
            <p className="text-paragraph max-w-2xl mx-auto">
              Watch our journey from vision to reality
            </p>
          </div>

          {/* Horizontal Sliding Video Carousel */}
          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out gap-6"
                style={{ transform: `translateX(-${currentVideoIndex * 384}px)` }}
              >
                {videos.map((videoSrc, index) => (
                  <div key={index} className="flex-shrink-0 w-fit">
                    {/* Individual Carousel Container */}
                    <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                      {/* Video Container */}
                      <div className="relative aspect-[4/3] bg-gray-100 group">
                        <video
                          ref={(el) => (videoRefs.current[index] = el)}
                          className="w-full h-[80vh] object-cover"
                          muted
                          loop={false}
                          playsInline
                          preload="metadata"
                          onError={() => handleVideoError(index)}
                          onEnded={handleVideoEnd}
                        >
                          <source src={videoSrc} type="video/mp4" />
                        </video>
                        
                        {/* Large Play Button */}
                        <div 
                          className="absolute inset-0 flex items-center justify-center cursor-pointer group-hover:bg-black/10 transition-all duration-300"
                          onClick={() => toggleVideoPlay(index)}
                        >
                          <div className="w-24 h-24 bg-white/95 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg">
                            {playingVideoIndex === index ? (
                              <svg className="w-12 h-12 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                              </svg>
                            ) : (
                              <svg className="w-12 h-12 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z"/>
                              </svg>
                            )}
                          </div>
                        </div>
                        
                        {/* Glass Container Text - Positioned above bottom */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="bg-white/15 backdrop-blur-lg rounded-xl p-5 border border-white/25 shadow-lg">
                            <div className="flex items-center gap-2 mb-3">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                ))}
                              </div>
                            </div>
                            <h3 className="text-white font-bold text-xl mb-2">
                              Our Story - Part {index + 1}
                            </h3>
                            <p className="text-white/90 text-base">
                              Watch our journey from vision to reality
                            </p>
                          </div>
                        </div>
                        
                        {/* Video number indicator */}
                        <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {index + 1}
                        </div>
                        
                        {/* Playing indicator */}
                        {playingVideoIndex === index && (
                          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse">
                            Playing
                          </div>
                        )}
                        
                        {/* Error fallback */}
                        {videoErrors.has(index) && (
                          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                            <div className="text-center text-gray-600">
                              <div className="text-4xl mb-2">⚠️</div>
                              <p className="text-sm">Video {index + 1} unavailable</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Controls */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 z-30"
              aria-label="Previous video"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 z-30"
              aria-label="Next video"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-30">
              {videos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentVideoIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentVideoIndex
                      ? 'bg-white scale-125 shadow-lg'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to video ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Video Counter */}
            <div className="absolute top-4 right-4 bg-white bg-opacity-90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium shadow-lg z-30">
              {currentVideoIndex + 1} / {videos.length}
            </div>
          </div>
          
          {/* Error summary */}
          {videoErrors.size > 0 && (
            <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-center gap-2 text-yellow-800">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Video Loading Issues</span>
              </div>
              <p className="text-yellow-700 text-sm mt-1">
                {videoErrors.size} of {videos.length} videos failed to load. Check the browser console for detailed error messages.
              </p>
            </div>
          )}
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

          {/* Product Image */}
          <div className="flex justify-center">
            <img src="/rico website/pexels-pixabay-248412.jpg" alt="Featured Product" className="w-full max-w-lg h-[600px] rounded-2xl" />
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
              <img src="/rico website/logo/santa.jpg" alt="Santa Lucia" className="max-w-full h-36 object-contain" />
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
