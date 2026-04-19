import { CheckSquare } from 'lucide-react'
import { motion } from 'framer-motion'
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

      {/* ── Timeline ── */}
      <div className="relative max-w-3xl mx-auto md:mx-0">
        {/* Vertical connector line */}
        <div className="absolute left-[23px] top-8 bottom-8 w-1 bg-gradient-to-b from-amber-400 via-amber-300 to-orange-500 rounded-full opacity-30 shadow-[0_0_10px_rgba(245,158,11,0.5)]" />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6"
        >
          {milestones.map((ms) => (
            <motion.div key={ms.num} variants={itemVariants} className="relative flex items-start gap-6 md:gap-8 group">

              {/* Number circle */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-white font-bold text-lg flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.3)] z-10 mt-1 ring-4 ring-white transition-transform duration-300 group-hover:scale-110">
                {ms.num}
              </div>

              {/* Card */}
              <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 transition-all duration-300 group-hover:shadow-[0_10px_30px_rgba(245,158,11,0.08)] group-hover:border-amber-200/50">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 gap-2">
                  <h3 className="font-bold text-gray-900 text-xl leading-tight group-hover:text-amber-600 transition-colors duration-300">{ms.title}</h3>
                  <span className="inline-block bg-amber-50 text-amber-600 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap self-start md:self-auto border border-amber-100">
                    {ms.date}
                  </span>
                </div>
                
                <p className="text-gray-500 text-base leading-relaxed mb-6">{ms.description}</p>

                {/* Progress bar + marks */}
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${ms.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full relative"
                    >
                      <div className="absolute inset-0 bg-white/20" style={{ backgroundImage: 'linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)', backgroundSize: '1rem 1rem' }}></div>
                    </motion.div>
                  </div>
                  <span className="text-sm font-bold text-gray-400 whitespace-nowrap flex-shrink-0 w-20 text-right">
                    {ms.marksLabel}
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
