import type { ReactNode } from "react"
import { Link, useLocation } from "react-router-dom"
import { Phone, Mail, Twitter, Facebook, Instagram, Youtube } from "lucide-react"
import { Button } from "./ui/button"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <div className="min-h-screen bg-[#f9f9f7]">
      {/* Top Header Bar */}
      <div className="bg-[#ad343e] text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={14} />
              <a 
                href="tel:+447572795578"
                className="hover:text-gray-300 transition-colors cursor-pointer"
              >
                +44 7572 795578
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} />
              <a 
                href="mailto:roman@rico-distribution-international.co.uk"
                className="hover:text-gray-300 transition-colors cursor-pointer"
              >
                roman@rico-distribution-international.co.uk
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a 
              href="https://twitter.com/rico_distribution" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors cursor-pointer"
            >
              <Twitter size={16} />
            </a>
            <a 
              href="https://facebook.com/rico.distribution" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors cursor-pointer"
            >
              <Facebook size={16} />
            </a>
            <a 
              href="https://www.instagram.com/drink_countre?igsh=cDRmeXZncWd2aGFx&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors cursor-pointer"
            >
              <Instagram size={16} />
            </a>
            <a 
              href="https://youtube.com/@rico_distribution" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors cursor-pointer"
            >
              <Youtube size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-sm py-4 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className={`${isActive("/") ? "bg-[#edccc9] text-[#ad343e] px-4 py-2 rounded-full font-medium" : "text-[#2c2f24] hover:text-[#ad343e]"} cursor-pointer`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${isActive("/about") ? "bg-[#edccc9] text-[#ad343e] px-4 py-2 rounded-full font-medium" : "text-[#2c2f24] hover:text-[#ad343e]"} cursor-pointer`}
            >
              About
            </Link>
            <Link
              to="/products"
              className={`${isActive("/products") ? "bg-[#edccc9] text-[#ad343e] px-4 py-2 rounded-full font-medium" : "text-[#2c2f24] hover:text-[#ad343e]"} cursor-pointer`}
            >
              Products
            </Link>
            <Link
              to="/contact"
              className={`${isActive("/contact") ? "bg-[#edccc9] text-[#ad343e] px-4 py-2 rounded-full font-medium" : "text-[#2c2f24] hover:text-[#ad343e]"} cursor-pointer`}
            >
              Contact
            </Link>
          </div>
          <Button
            variant="outline"
            className="border-[#474747] text-[#474747] hover:bg-[#474747] hover:text-white bg-transparent"
            onClick={() => window.open('mailto:roman@rico-distribution-international.co.uk', '_blank')}
          >
            Mail
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-[#495460] text-white py-12 px-4 mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold mb-2">Rico Distribution International</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <div className="mb-6">
                <img src="/rico-distribution-logo-red-circular.png" alt="Rico Distribution" className="mb-4" />
              </div>
              <div className="flex gap-3 mb-4">
                <a 
                  href="https://twitter.com/rico_distribution" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors cursor-pointer"
                >
                  <Twitter size={20} />
                </a>
                <a 
                  href="https://facebook.com/rico.distribution" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors cursor-pointer"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="https://instagram.com/rico_distribution" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors cursor-pointer"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://youtube.com/@rico_distribution" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors cursor-pointer"
                >
                  <Youtube size={20} />
                </a>
              </div>
              <p className="text-small text-gray-300">
                In the new era of distribution, we look for a future with affordability, accessibility and quality.
              </p>
            </div>

            {/* Pages */}
            <div>
              <h4 className="font-semibold mb-4">Pages</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <Link to="/" className="hover:text-gray-300">
                    Home
                  </Link>
                  <span className="text-gray-400">Click here</span>
                </div>
                <div className="flex justify-between">
                  <Link to="/about" className="hover:text-gray-300">
                    About
                  </Link>
                  <span className="text-gray-400">Click here</span>
                </div>
                <div className="flex justify-between">
                  <Link to="/products" className="hover:text-gray-300">
                    Products
                  </Link>
                  <span className="text-gray-400">Click here</span>
                </div>
                <div className="flex justify-between">
                  <Link to="/contact" className="hover:text-gray-300">
                    Contact
                  </Link>
                  <span className="text-gray-400">Click here</span>
                </div>
              </div>
            </div>

            {/* Instagram Feed */}
            <div>
              <h4 className="font-semibold mb-4">Follow Us On Instagram</h4>
              <div className="grid grid-cols-2 gap-2">
                <img src="/food-product-instagram-post.png" alt="Instagram post" className="rounded" />
                <img src="/beverage-product-instagram-post.png" alt="Instagram post" className="rounded" />
                <img src="/snack-product-instagram-post.png" alt="Instagram post" className="rounded" />
                <img src="/grocery-store-instagram-post.png" alt="Instagram post" className="rounded" />
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-8 pt-6 text-center text-sm text-gray-400">
            <p>Copyright © 2025 Rico Distribution International. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
