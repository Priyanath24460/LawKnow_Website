import { motion } from 'framer-motion'
import heroBg from '../assets/lawhero.jpg'

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with overlay */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundColor: '#0f1a3e',
        }}
      />
      <div className="hero-overlay absolute inset-0" />

      {/* Ambient glow blobs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500 rounded-full blur-[128px] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.15, 0.1] 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-orange-500 rounded-full blur-[128px] pointer-events-none" 
      />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="inline-block px-4 py-1.5 mb-6 rounded-full border border-amber-500/30 bg-amber-500/10 backdrop-blur-md"
        >
          <span className="text-sm font-medium text-amber-200 tracking-wide uppercase">AI-Powered Legal Research</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-playfair text-6xl md:text-8xl font-bold mb-6 leading-tight tracking-tight"
          style={{ textShadow: '0 4px 30px rgba(0,0,0,0.5)' }}
        >
          <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-amber-500 bg-clip-text text-transparent">
            LawKnow
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-10 leading-relaxed"
          style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
        >
          An AI-Driven Legal Support System Using NLR, SLR and Constitutional Law Automation
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col sm:flex-row gap-5 justify-center w-full sm:w-auto"
        >
          <button
            onClick={() => scrollTo('#literature-survey')}
            className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-medium rounded-full transition-all duration-300 shadow-[0_0_40px_rgba(245,158,11,0.3)] hover:shadow-[0_0_60px_rgba(245,158,11,0.5)] hover:-translate-y-1 text-base flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            Explore Research
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
          <button
            onClick={() => scrollTo('#about')}
            className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 text-white font-medium rounded-full backdrop-blur-md transition-all duration-300 hover:-translate-y-1 text-base w-full sm:w-auto"
          >
            Meet the Team
          </button>
        </motion.div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 wave-divider pointer-events-none translate-y-[1px]">
        <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-sm">
          <path
            fill="#ffffff"
            d="M0,60 C360,120 1080,0 1440,60 L1440,100 L0,100 Z"
          />
        </svg>
      </div>
    </section>
  )
}
