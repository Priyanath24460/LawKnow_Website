import { motion } from 'framer-motion'

export default function SectionWrapper({ id, children, bg = 'bg-white' }) {
  return (
    <section id={id} className={`py-24 overflow-hidden ${bg}`}>
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="max-w-6xl mx-auto px-6"
      >
        {children}
      </motion.div>
    </section>
  )
}
