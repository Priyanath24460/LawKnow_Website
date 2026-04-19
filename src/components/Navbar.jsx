import { useState, useEffect, useRef } from 'react'
import { ChevronDown, Scale, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'Home', href: '#home' },
  {
    label: 'Domain',
    href: '#',
    dropdown: [
      { label: 'Literature Survey', href: '#literature-survey' },
      { label: 'Research Gap', href: '#research-gap' },
      { label: 'Research Problem', href: '#research-problem' },
      { label: 'Research Objectives', href: '#research-objectives' },
      { label: 'Methodology', href: '#methodology' },
      { label: 'Technologies Used', href: '#technologies' },
    ],
  },
  { label: 'Milestones', href: '#milestones' },
  {
    label: 'Resources',
    href: '#',
    dropdown: [
      { label: 'Documents', href: '#documents' },
      { label: 'Presentations', href: '#presentations' },
    ],
  },
  { label: 'About Us', href: '#about' },
  { label: 'Contact Us', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileDropdown, setMobileDropdown] = useState(null)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const navRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const scrollTo = (href) => {
    if (href.startsWith('#') && href.length > 1) {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setActiveDropdown(null)
    setMobileOpen(false)
  }

  const handleNavClick = (e, item) => {
    e.preventDefault()
    if (item.dropdown) {
      setActiveDropdown(activeDropdown === item.label ? null : item.label)
    } else {
      scrollTo(item.href)
    }
  }

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.05)] border-b border-gray-100/50 py-1' 
          : 'bg-transparent py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

        {/* ── Logo ── */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); scrollTo('#home') }}
          className="flex items-center gap-2.5 flex-shrink-0 group"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-amber-400 via-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-all duration-300 group-hover:scale-105">
            <Scale size={20} className="text-white" />
          </div>
          <div className="leading-tight">
            <span
              className={`font-playfair font-bold text-xl leading-none block tracking-wide transition-colors duration-300 ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              LAW
            </span>
            <span
              className={`font-playfair text-sm leading-none font-medium italic transition-colors duration-300 ${
                scrolled ? 'text-amber-600' : 'text-amber-300'
              }`}
            >
              Know
            </span>
          </div>
        </a>

        {/* ── Desktop Nav ── */}
        <ul className="hidden md:flex items-center gap-1.5">
          {navItems.map((item) => (
            <li key={item.label} className="relative">
              {item.dropdown ? (
                <>
                  <button
                    onClick={(e) => handleNavClick(e, item)}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      scrolled
                        ? activeDropdown === item.label 
                          ? 'text-amber-700 bg-amber-50/80 shadow-inner'
                          : 'text-gray-600 hover:text-amber-600 hover:bg-gray-50'
                        : activeDropdown === item.label
                          ? 'text-white bg-white/20 backdrop-blur-sm'
                          : 'text-gray-100 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 min-w-[240px] overflow-hidden z-50 p-2"
                      >
                        {item.dropdown.map((sub) => (
                          <button
                            key={sub.label}
                            onClick={() => scrollTo(sub.href)}
                            className="w-full text-left block px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-amber-700 hover:bg-amber-50/80 rounded-xl transition-all duration-200"
                          >
                            {sub.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`block px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    scrolled
                      ? 'text-gray-600 hover:text-amber-600 hover:bg-gray-50'
                      : 'text-gray-100 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* ── Mobile toggle ── */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 overflow-hidden shadow-2xl"
          >
            <div className="px-4 py-6 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setMobileDropdown(mobileDropdown === item.label ? null : item.label)
                        }
                        className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-gray-800 font-semibold text-base hover:bg-amber-50 hover:text-amber-700 transition-colors"
                      >
                        {item.label}
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-300 ${
                            mobileDropdown === item.label ? 'rotate-180 text-amber-600' : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileDropdown === item.label && (
                          <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pr-2 py-2 space-y-1 border-l-2 border-amber-200 ml-6 my-2">
                              {item.dropdown.map((sub) => (
                                <button
                                  key={sub.label}
                                  onClick={() => scrollTo(sub.href)}
                                  className="w-full text-left block px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-amber-700 hover:bg-amber-50 rounded-lg transition-colors"
                                >
                                  {sub.label}
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <a
                      href={item.href}
                      onClick={(e) => { e.preventDefault(); scrollTo(item.href) }}
                      className="block px-4 py-3 rounded-xl text-gray-800 font-semibold text-base hover:bg-amber-50 hover:text-amber-700 transition-colors"
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
