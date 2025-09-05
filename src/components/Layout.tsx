import type { ReactNode } from "react"
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Phone, Mail, Twitter, Facebook, Instagram, Youtube, Menu, X } from "lucide-react"
import { Button } from "./ui/button"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isActive = (path: string) => location.pathname === path

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className="min-h-screen bg-[#f9f9f7]">
      {/* Top Header Bar */}
      <div className="bg-[#ad343e] text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="hidden md:flex items-center gap-6">
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
          {/* Company Logo */}
          <div className="flex items-center gap-2 md:gap-4">
            <Link to="/">
            <img 
              src="/rico website/logo/30Sep24 Simon  Free Upload  .png" 
              alt="Rico Distribution Logo" 
              className="h-12 md:h-16 w-auto"
            />
            </Link>
            <div className="hidden sm:block">
            <Link to="/">
              <div className="text-lg md:text-xl font-bold">
                <span className="text-[#ad343e]">RICO</span>
                <span className="text-[#2c2f24]"> DISTRIBUTION</span>
              </div>
              </Link>
              <div className="text-xs md:text-sm text-gray-500 font-medium">INTERNATIONAL</div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
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

          {/* Desktop Mail Button */}
          <div className="hidden lg:block">
            <Button
              variant="outline"
              className="border-[#474747] text-[#474747] hover:bg-[#474747] hover:text-white bg-transparent"
              onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=roman@rico-distribution-international.co.uk', '_blank')}
            >
              Mail
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[#2c2f24] hover:text-[#ad343e] transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2 pt-4">
              <Link
                to="/"
                className={`${isActive("/") ? "bg-[#edccc9] text-[#ad343e] px-4 py-2 rounded-full font-medium" : "text-[#2c2f24] hover:text-[#ad343e]"} cursor-pointer`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`${isActive("/about") ? "bg-[#edccc9] text-[#ad343e] px-4 py-2 rounded-full font-medium" : "text-[#2c2f24] hover:text-[#ad343e]"} cursor-pointer`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/products"
                className={`${isActive("/products") ? "bg-[#edccc9] text-[#ad343e] px-4 py-2 rounded-full font-medium" : "text-[#2c2f24] hover:text-[#ad343e]"} cursor-pointer`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/contact"
                className={`${isActive("/contact") ? "bg-[#edccc9] text-[#ad343e] px-4 py-2 rounded-full font-medium" : "text-[#2c2f24] hover:text-[#ad343e]"} cursor-pointer`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-2">
                <Button
                  variant="outline"
                  className="w-full border-[#474747] text-[#474747] hover:bg-[#474747] hover:text-white bg-transparent"
                  onClick={() => {
                    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=roman@rico-distribution-international.co.uk', '_blank')
                    setIsMobileMenuOpen(false)
                  }}
                >
                  Mail
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-[#363636] text-white py-8 md:py-12 px-4 mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="text-center md:text-left">
              <div className="mb-6">
                <img src="/rico website/logo/30Sep24 Simon  Free Upload  .png" alt="Rico Distribution" className="mx-auto md:mx-0 mb-4 h-16 md:h-20 w-auto" />
                <div className="text-center md:text-left">
                  <div className="text-lg md:text-xl font-bold">
                    <span className="text-[#ad343e]">RICO</span>
                    <span className="text-white"> DISTRIBUTION</span>
                  </div>
                  <div className="text-sm text-gray-300 font-medium">INTERNATIONAL</div>
                </div>
              </div>
              <div className="flex justify-center md:justify-start gap-3 mb-4">
                <a 
                  href="https://twitter.com/rico_distribution" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#ad343e] rounded-full p-2 hover:bg-red-600 transition-colors cursor-pointer"
                >
                  <Twitter size={20} className="text-white" />
                </a>
                <a 
                  href="https://facebook.com/rico.distribution" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#ad343e] rounded-full p-2 hover:bg-red-600 transition-colors cursor-pointer"
                >
                  <Facebook size={20} className="text-white" />
                </a>
                <a 
                  href="https://www.instagram.com/drink_countre?igsh=cDRmeXZncWd2aGFx&utm_source=qr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#ad343e] rounded-full p-2 hover:bg-red-600 transition-colors cursor-pointer"
                >
                  <Instagram size={20} className="text-white" />
                </a>
                <a 
                  href="https://youtube.com/@rico_distribution" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#ad343e] rounded-full p-2 hover:bg-red-600 transition-colors cursor-pointer"
                >
                  <Youtube size={20} className="text-white" />
                </a>
              </div>
              <p className="text-sm text-gray-300">
                In the new era of distribution, we look for a future with affordability, accessibility and quality.
              </p>
            </div>

            {/* Pages */}
            <div className="text-center md:text-left">
              <h4 className="font-semibold mb-4 text-gray-200">Pages</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between max-w-xs mx-auto md:mx-0">
                  <Link to="/" className="hover:text-gray-300 text-gray-300">
                    Home
                  </Link>
                  <span className="text-gray-400">Click here</span>
                </div>
                <div className="flex justify-between max-w-xs mx-auto md:mx-0">
                  <Link to="/about" className="hover:text-gray-300 text-gray-300">
                    About
                  </Link>
                  <span className="text-gray-400">Click here</span>
                </div>
                <div className="flex justify-between max-w-xs mx-auto md:mx-0">
                  <Link to="/products" className="hover:text-gray-300 text-gray-300">
                    Products
                  </Link>
                  <span className="text-gray-400">Click here</span>
                </div>
                <div className="flex justify-between max-w-xs mx-auto md:mx-0">
                  <Link to="/contact" className="hover:text-gray-300 text-gray-300">
                    Contact
                  </Link>
                  <span className="text-gray-400">Click here</span>
                </div>
              </div>
            </div>

            {/* Instagram Feed */}
            <div className="text-center md:text-left">
              <h4 className="font-semibold mb-4 text-gray-200">Follow Us On Instagram</h4>
              <div className="grid grid-cols-2 gap-2 max-w-xs mx-auto md:mx-0">
                <img src="/countre-chocolate-bottle.png" alt="Chocolate Milk Drink" className="rounded w-full h-auto" />
                <img src="/countre-banana-bottle.png" alt="Banana Milk Drink" className="rounded w-full h-auto" />
                <img src="/countre-strawberry-bottle.png" alt="Strawberry Milk Drink" className="rounded w-full h-auto" />
                <img src="/countre-vanilla-bottle.png" alt="Vanilla Milk Drink" className="rounded w-full h-auto" />
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
