import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-primary">
              חיים דנינו זיו
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4 space-x-reverse">
              <Link href="/" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md">
                דף הבית
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md">
                אודות
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md">
                שירותים
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md">
                צור קשר
              </Link>
              <Link href="/appointment" className="btn-primary">
                קבע פגישה
              </Link>
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="sr-only">פתח תפריט</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className="block text-gray-700 hover:text-primary px-3 py-2 rounded-md">
            דף הבית
          </Link>
          <Link href="/about" className="block text-gray-700 hover:text-primary px-3 py-2 rounded-md">
            אודות
          </Link>
          <Link href="/services" className="block text-gray-700 hover:text-primary px-3 py-2 rounded-md">
            שירותים
          </Link>
          <Link href="/contact" className="block text-gray-700 hover:text-primary px-3 py-2 rounded-md">
            צור קשר
          </Link>
          <Link href="/appointment" className="block btn-primary text-center">
            קבע פגישה
          </Link>
        </div>
      </div>
    </nav>
  )
} 