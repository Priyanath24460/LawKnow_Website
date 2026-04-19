import { FileText } from 'lucide-react'
import SectionWrapper from './SectionWrapper'

const documents = [
  {
    title: 'Project Charter',
    date: '2024/02/10',
    type: 'Group',
    link: '#',
  },
  {
    title: 'Proposal Document',
    date: '2024/02/29',
    type: 'Group',
    link: '#',
  },
  {
    title: 'Check List Documents',
    date: '2024/05/15',
    type: 'Group',
    link: '#',
  },
  {
    title: 'Final Document (Main)',
    date: '2024/11/15',
    type: 'Group',
    link: '#',
  },
  {
    title: 'Final Document (Individual)',
    date: '2024/11/15',
    type: 'Individual',
    link: '#',
  },
  {
    title: 'Topic Assessment',
    date: '2024/01/19',
    type: 'Group',
    link: '#',
  },
]

function PdfIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="36"
      height="36"
    >
      <path fill="#E53935" d="M40 45H8c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h24l10 10v30c0 1.1-.9 2-2 2z" />
      <path fill="#EF9A9A" d="M32 3l10 10H32z" />
      <path
        fill="#fff"
        d="M15.5 27.5h2c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-2v5h1v-2zm0-2h1c.3 0 .5.2.5.5s-.2.5-.5.5h-1v-1zM21 24.5h-1v5h1c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5zm0 4h0v-3h0c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5zM25.5 24.5v5h1v-2h1.5v-1H26.5v-1H28v-1z"
      />
    </svg>
  )
}

export default function Documents() {
  return (
    <SectionWrapper id="documents" bg="bg-gray-50">
      {/* Header */}
      <div className="text-center mb-14 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 section-title font-playfair tracking-tight text-center">
          Documents
        </h2>
        <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed text-center">
          Please find{' '}
          <span className="text-amber-500 font-medium">all documents</span>{' '}
          related to{' '}
          <span className="text-red-500 font-medium">this project</span> below.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {documents.map((doc, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 flex flex-col gap-3 hover:shadow-md transition-shadow duration-200"
          >
            {/* Icon + Title */}
            <div className="flex items-center gap-3">
              <PdfIcon />
              <span className="font-semibold text-gray-800 text-sm leading-snug">
                {doc.title}
              </span>
            </div>

            {/* Date & Type + Download */}
            <div>
              <p className="text-gray-400 text-xs">Submitted on {doc.date}</p>
              <div className="flex items-center justify-between mt-1">
                <span className="text-gray-500 text-xs">{doc.type}</span>
                <a
                  href={doc.link}
                  className="text-blue-500 hover:text-blue-700 text-xs font-semibold transition-colors duration-150"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
