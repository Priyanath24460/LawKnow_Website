import { Users } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'

const team = [
  {
    name: 'Dr. Samantha Perera', role: 'Supervisor', affiliation: 'SLIIT – Faculty of Computing',
    bio: 'Expert in Artificial Intelligence and Legal Informatics with 15+ years of academic research experience.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Samantha&backgroundColor=b6e3f4',
  },
  {
    name: 'Prof. Kavitha Nair', role: 'Co-Supervisor', affiliation: 'SLIIT – Faculty of Computing',
    bio: 'Natural Language Processing researcher specializing in multilingual systems for South Asian languages.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kavitha&backgroundColor=d1d4f9',
  },
  {
    name: 'Ashan Wickramasinghe', role: 'Team Leader', affiliation: 'IT20345678',
    bio: 'Full-stack developer and AI researcher. Leads system architecture and model development.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ashan&backgroundColor=c0aede',
  },
  {
    name: 'Nimasha Fernando', role: 'Team Member', affiliation: 'IT20345679',
    bio: 'Frontend engineer specializing in React. Responsible for UI/UX design and implementation.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nimasha&backgroundColor=b6e3f4',
  },
  {
    name: 'Dilshan Rajapaksa', role: 'Team Member', affiliation: 'IT20345680',
    bio: 'Backend developer and DevOps specialist handling API development and cloud infrastructure.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dilshan&backgroundColor=ffd5dc',
  },
  {
    name: 'Hasini Mendis', role: 'Team Member', affiliation: 'IT20345681',
    bio: 'ML engineer focused on NLP model training, evaluation, and multilingual pipeline integration.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Hasini&backgroundColor=c0aede',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
}

export default function AboutUs() {
  const supervisors = team.filter((m) => m.role === 'Supervisor' || m.role === 'Co-Supervisor')
  const members = team.filter((m) => m.role !== 'Supervisor' && m.role !== 'Co-Supervisor')

  return (
    <SectionWrapper id="about" bg="bg-gray-50/30">
      <div className="text-center mb-14 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 section-title font-playfair tracking-tight text-center">About Us</h2>
        <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed text-center">
          Meet the brilliant researchers, engineers, and academic supervisors driving the LawKnow vision forward.
        </p>
      </div>

      <div className="mb-16">
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-12 bg-amber-200" />
          <h3 className="text-center text-sm font-bold text-amber-700 uppercase tracking-widest">Supervisors</h3>
          <div className="h-px w-12 bg-amber-200" />
        </div>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-8"
        >
          {supervisors.map((member, i) => (
            <motion.div key={i} variants={cardVariants} className="w-full max-w-[320px]">
              <TeamCard member={member} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div>
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-12 bg-amber-200" />
          <h3 className="text-center text-sm font-bold text-amber-700 uppercase tracking-widest">Research Team</h3>
          <div className="h-px w-12 bg-amber-200" />
        </div>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {members.map((member, i) => (
            <motion.div key={i} variants={cardVariants}>
              <TeamCard member={member} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

function TeamCard({ member }) {
  return (
    <div className="group bg-white rounded-3xl border border-gray-100/80 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.15)] overflow-hidden text-center w-full transition-all duration-500 hover:-translate-y-2 h-full flex flex-col relative">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="bg-gradient-to-br from-amber-100/60 to-orange-50/60 p-8 overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <img
          src={member.avatar}
          alt={member.name}
          className="w-24 h-24 rounded-full mx-auto border-4 border-white shadow-lg object-cover transition-transform duration-500 group-hover:scale-110 relative z-10"
        />
      </div>
      
      <div className="p-6 flex-1 flex flex-col relative z-10">
        <h3 className="font-bold text-gray-900 text-lg mb-1">{member.name}</h3>
        <p className="text-amber-600 text-sm font-semibold mb-2">{member.role}</p>
        <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-4">{member.affiliation}</p>
        <p className="text-gray-500 text-sm leading-relaxed mt-auto">{member.bio}</p>
      </div>
    </div>
  )
}
