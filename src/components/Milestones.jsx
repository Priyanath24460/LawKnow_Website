import { useState, useEffect, useRef } from 'react'
import { CheckSquare, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper from './SectionWrapper'

const milestones = [
  {
    num: 1,
    title: 'Project Proposal',
    date: 'March 2024',
    description:
      'A Project Proposal is presented to potential sponsors or clients to receive funding or get your project approved.',
    marks: 6,
    marksLabel: '6 Marks',
    progress: 100,
  },
  {
    num: 2,
    title: 'Progress Presentation I',
    date: 'June 2024',
    description:
      'Progress Presentation I reviews the 50% completion status of the project. This reveals any gaps or inconsistencies in the design/requirements.',
    marks: 6,
    marksLabel: '6 Marks',
    progress: 100,
  },
  {
    num: 3,
    title: 'Research Paper',
    date: 'July 2024',
    description:
      'Describes what you contribute to existing knowledge, giving due recognition to all work that you referred to in making new knowledge.',
    marks: 10,
    marksLabel: '10 Marks',
    progress: 100,
  },
  {
    num: 4,
    title: 'Progress Presentation II',
    date: 'September 2024',
    description:
      'Reviews the 90% completion status demonstration of the project, including a Poster presentation describing the project as a whole.',
    marks: 18,
    marksLabel: '18 Marks',
    progress: 90,
  },
  {
    num: 5,
    title: 'Website Assessment',
    date: 'October 2024',
    description:
      'The Website helps to promote our research project and reveals all details related to the project.',
    marks: 2,
    marksLabel: '2 Marks',
    progress: 30,
  },
  {
    num: 6,
    title: 'Logbook',
    date: 'November 2024',
    description:
      'The project status is validated through the Logbook, which includes Status Documents 1 & 2.',
    marks: 3,
    marksLabel: '3 Marks',
    progress: 20,
  },
  {
    num: 7,
    title: 'Final Report',
    date: 'November 2024',
    description:
      'The Final Report evaluates the completed project done throughout the year, including Individual, group, and final reports.',
    marks: 19,
    marksLabel: '19 Marks',
    progress: 15,
  },
  {
    num: 8,
    title: 'Final Presentation & Viva',
    date: 'November 2024',
    description:
      'Viva is held individually to assess each member\'s contribution to the project.',
    marks: 20,
    marksLabel: '20 Marks',
    progress: 10,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
}

export default function Milestones() {
  const [selectedMilestone, setSelectedMilestone] = useState(milestones[0])
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <SectionWrapper id="milestones" bg="bg-white">
      {/* ── Header ── */}
      <div className="text-center mb-14 flex flex-col items-center mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 section-title font-playfair tracking-tight text-center">
          Milestones
        </h2>
        <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed text-center">
          Follow the journey of our research project through these key milestones, from initial proposal to final presentation.
        </p>
      </div>

      {/* ── Dropdown Selector (Required) ── */}
      <div className="max-w-xl mx-auto mb-16 relative" ref={dropdownRef}>
        <label className="block text-center text-sm font-bold text-amber-700 uppercase tracking-widest mb-4">
          Select Assessment
        </label>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-white border-2 border-amber-100 rounded-2xl px-6 py-4 flex items-center justify-between shadow-sm hover:border-amber-400 transition-all duration-300 group"
        >
          <div className="flex items-center gap-4">
            <span className="w-8 h-8 rounded-full bg-amber-500 text-white font-bold flex items-center justify-center text-sm">
              {selectedMilestone.num}
            </span>
            <span className="font-bold text-gray-900 text-lg group-hover:text-amber-600">
              {selectedMilestone.title}
            </span>
          </div>
          <ChevronDown className={`text-amber-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 z-50 overflow-hidden"
            >
              {milestones.map((ms) => (
                <button
                  key={ms.num}
                  onClick={() => {
                    setSelectedMilestone(ms)
                    setIsOpen(false)
                  }}
                  className={`w-full text-left px-6 py-4 flex items-center gap-4 hover:bg-amber-50 transition-colors ${
                    selectedMilestone.num === ms.num ? 'bg-amber-50/50' : ''
                  }`}
                >
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    selectedMilestone.num === ms.num ? 'bg-amber-500 text-white' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {ms.num}
                  </span>
                  <span className={`font-semibold ${selectedMilestone.num === ms.num ? 'text-amber-700' : 'text-gray-700'}`}>
                    {ms.title}
                  </span>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Selected Milestone Detail ── */}
      <div className="max-w-4xl mx-auto">
        <motion.div
          key={selectedMilestone.num}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-br from-white to-amber-50/30 rounded-3xl border border-amber-100 p-8 md:p-12 shadow-sm relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-200/20 rounded-full -mr-32 -mt-32 blur-3xl" />
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <div>
                <span className="inline-block bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                  Assessment {selectedMilestone.num}
                </span>
                <h3 className="text-3xl font-bold text-gray-900 font-playfair">{selectedMilestone.title}</h3>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-2xl font-bold text-amber-600">{selectedMilestone.marksLabel}</span>
                <span className="text-gray-500 font-medium">{selectedMilestone.date}</span>
              </div>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-3xl">
              {selectedMilestone.description}
            </p>

            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm font-bold">
                <span className="text-gray-500">Completion Status</span>
                <span className="text-amber-600">{selectedMilestone.progress}%</span>
              </div>
              <div className="h-3 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${selectedMilestone.progress}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full relative"
                >
                  <div className="absolute inset-0 bg-white/20" style={{ backgroundImage: 'linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)', backgroundSize: '1rem 1rem' }}></div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
