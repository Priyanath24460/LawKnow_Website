import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import sliitLogo from '../assets/sliitlogo.jpeg'
import thilinijPhoto from '../assets/thilinij.jpeg'
import yapaPhoto from '../assets/yapa1.jpg'


const supervisors = [
  {
    name: 'Mr. Samadhi Rathnayake',
    role: 'Supervisor',
    title: 'Senior Lecturer',
    institute: 'Sri Lanka Institute of Information Technology',
    logo: sliitLogo,
    photo: thilinijPhoto,
    scholar: 'https://scholar.google.com/',
    email: 'mailto:samadhi.rathnayake@example.com',
  },
  {
    name: 'Mr. Samitha Vidhanaarachchi',
    role: 'Co-Supervisor',
    title: 'Doctoral Researcher',
    institute: 'Murdoch University Australia',
    logo: sliitLogo,
    photo: yapaPhoto,
    scholar: 'https://scholar.google.com/',
    email: 'mailto:samitha.vidhanaarachchi@example.com',
  },
]

const researchTeam = [
  {
    name: 'Anusara Weerasooriya',
    role: 'Group Leader',
    degree: 'Undergraduate',
    institute: 'Sri Lanka Institute of Information Technology',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    linkedin: 'https://www.linkedin.com/in/your-profile',
    email: 'mailto:anusara.weerasooriya@example.com',
  },
  {
    name: 'Dilshi Wanniarachchi',
    role: 'Group Member',
    degree: 'Undergraduate',
    institute: 'Sri Lanka Institute of Information Technology',
    photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
    linkedin: 'https://www.linkedin.com/in/your-profile',
    email: 'mailto:dilshi.wanniarachchi@example.com',
  },
  {
    name: 'Nimesha Priyabandu',
    role: 'Group Member',
    degree: 'Undergraduate',
    institute: 'Sri Lanka Institute of Information Technology',
    photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
    linkedin: 'https://www.linkedin.com/in/your-profile',
    email: 'mailto:nimesha.priyabandu@example.com',
  },
  {
    name: 'Hiranya Peiris',
    role: 'Group Member',
    degree: 'Undergraduate',
    institute: 'Sri Lanka Institute of Information Technology',
    photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
    linkedin: 'https://www.linkedin.com/in/your-profile',
    email: 'mailto:hiranya.peiris@example.com',
  },
]

const instituteLogo = sliitLogo

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
          className="grid md:grid-cols-2 gap-8"
        >
          {supervisors.map((member, i) => (
            <motion.div key={i} variants={cardVariants} className="w-full max-w-[320px] mx-auto">
              <SupervisorCard member={member} />
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
          {researchTeam.map((member, i) => (
            <motion.div key={i} variants={cardVariants} className="w-full max-w-[320px] mx-auto">
              <ResearchTeamCard member={member} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

function SupervisorCard({ member }) {
  return (
    <div className="bg-white border border-gray-200/80 rounded-2xl shadow-sm overflow-hidden flex flex-col h-full">
      <div className="bg-white">
        <img
          src={member.photo}
          alt={member.name}
          className="w-full h-auto object-contain"
        />
      </div>
      <div className="p-6 text-left">
        <h3 className="text-lg font-bold text-gray-900 leading-snug">{member.name}</h3>
        <p className="mt-1 text-xs font-semibold tracking-widest text-gray-500 uppercase">{member.role}</p>
      </div>
      <div className="grid grid-cols-2 border-t border-b border-gray-200/80 text-sm font-semibold text-blue-600">
        <a
          href={member.scholar}
          target="_blank"
          rel="noreferrer"
          className="py-4 text-center hover:bg-blue-50 transition-colors"
        >
          G-SCHOLAR
        </a>
        <a
          href={member.email}
          className="py-4 text-center hover:bg-blue-50 transition-colors"
        >
          G-MAIL
        </a>
      </div>
      <div className="p-5 flex items-start gap-3 text-sm text-gray-600">
        <img src={member.logo} alt={member.institute} className="w-8 h-8 object-contain" />
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-400">{member.title}</p>
          <p className="mt-1 leading-snug">{member.institute}</p>
        </div>
      </div>
    </div>
  )
}

function ResearchTeamCard({ member }) {
  return (
    <div className="bg-white border border-gray-200/80 rounded-2xl shadow-sm overflow-hidden flex flex-col h-full">
      <div className="bg-white">
        <img
          src={member.photo}
          alt={member.name}
          className="w-full h-auto object-contain"
        />
      </div>
      <div className="p-6 text-left">
        <h3 className="text-lg font-bold text-gray-900 leading-snug">{member.name}</h3>
        <p className="mt-1 text-xs font-semibold tracking-widest text-gray-500 uppercase">{member.role}</p>
      </div>
      <div className="grid grid-cols-2 border-t border-b border-gray-200/80 text-sm font-semibold text-blue-600">
        <a
          href={member.linkedin}
          target="_blank"
          rel="noreferrer"
          className="py-4 text-center hover:bg-blue-50 transition-colors"
        >
          LINKEDIN
        </a>
        <a
          href={member.email}
          className="py-4 text-center hover:bg-blue-50 transition-colors"
        >
          G-MAIL
        </a>
      </div>
      <div className="p-5 flex items-start gap-3 text-sm text-gray-600">
        <img src={instituteLogo} alt="SLIIT" className="w-8 h-8 object-contain" />
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-400">{member.degree}</p>
          <p className="mt-1 leading-snug">{member.institute}</p>
        </div>
      </div>
    </div>
  )
}
