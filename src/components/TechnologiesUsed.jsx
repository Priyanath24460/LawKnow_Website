import { Cpu } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'

const categories = [
  {
    label: 'AI & Machine Learning',
    techs: [
      {
        name: 'Google Gemini',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Google_Gemini_logo.svg/120px-Google_Gemini_logo.svg.png',
      },
      {
        name: 'PyTorch',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
      },
      {
        name: 'FAISS',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      },
      {
        name: 'Scikit-Learn',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg',
      },
      {
        name: 'NumPy',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
      },
      {
        name: 'HuggingFace',
        logo: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg',
      },
    ],
  },
  {
    label: 'Backend & Runtime',
    techs: [
      {
        name: 'Python',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      },
      {
        name: 'FastAPI',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
      },
      {
        name: 'Node.js',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      },
      {
        name: 'Express',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      },
      {
        name: 'Uvicorn',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      },
    ],
  },
  {
    label: 'Database & Storage',
    techs: [
      {
        name: 'MongoDB',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      },
      {
        name: 'PostgreSQL',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      },
      {
        name: 'SQLite',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
      },
    ],
  },
  {
    label: 'Frontend',
    techs: [
      {
        name: 'React.js',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      },
      {
        name: 'Vite',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg',
      },
      {
        name: 'JavaScript',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      },
    ],
  },
  {
    label: 'Infrastructure & DevOps',
    techs: [
      {
        name: 'Docker',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      },
      {
        name: 'Git',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      },
      {
        name: 'Postman',
        logo: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
      },
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export default function TechnologiesUsed() {
  return (
    <SectionWrapper id="technologies" bg="bg-gray-50/50">
      {/* ── Header ── */}
      <div className="text-center mb-14 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 section-title font-playfair tracking-tight text-center">
          Technologies Used
        </h2>
        <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed text-center">
          Explore the powerful technologies we use to build our AI-driven legal intelligence ecosystem.
        </p>
      </div>

      {/* ── Category sections ── */}
      {categories.map((cat, ci) => (
        <div key={ci} className="mb-14">
          {/* Category divider label */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-200/50 to-amber-200" />
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-50 px-5 py-2 rounded-full border border-amber-100 shadow-sm">
              {cat.label}
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-amber-200/50 to-amber-200" />
          </div>

          {/* Icon grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-wrap justify-center gap-6 md:gap-10"
          >
            {cat.techs.map((tech, ti) => (
              <motion.div key={ti} variants={itemVariants}>
                <TechIcon tech={tech} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}
    </SectionWrapper>
  )
}

function TechIcon({ tech }) {
  return (
    <div className="flex flex-col items-center gap-3 group cursor-default">
      {/* Circle container */}
      <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center transition-all duration-300 group-hover:border-amber-300 group-hover:shadow-[0_8px_30px_rgba(245,158,11,0.15)] group-hover:-translate-y-2">
        <img
          src={tech.logo}
          alt={tech.name}
          className="w-10 h-10 md:w-12 md:h-12 object-contain transition-transform duration-300 group-hover:scale-110"
          onError={(e) => {
            e.target.style.display = 'none'
            e.target.parentElement.innerHTML = `<span class="text-2xl font-bold text-amber-500">${tech.name.charAt(0)}</span>`
          }}
        />
      </div>
      {/* Name label */}
      <span className="text-xs md:text-sm font-medium text-gray-500 group-hover:text-amber-600 transition-colors duration-200 text-center leading-tight max-w-[90px]">
        {tech.name}
      </span>
    </div>
  )
}
