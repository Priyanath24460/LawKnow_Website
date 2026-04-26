import SectionWrapper from './SectionWrapper'

const presentations = [
  {
    title: 'Project Proposal',
    type: 'Group',
    link: 'https://drive.google.com/drive/folders/1MDRkaona5FO2nZNH1u1ttMygX41p-0NK?usp=sharing',
  },
  {
    title: 'Progress Review I',
    type: 'Group',
    link: 'https://drive.google.com/drive/folders/1QuD3tQWUFSIjHyP_4odofy71qFRTbcmj?usp=sharing',
  },
  {
    title: 'Progress Review II',
    type: 'Group',
    link: 'https://drive.google.com/drive/folders/1Af0mTBb-iUPxlik3oQauBIPI9QXSg5_Q?usp=sharing',
  },
  {
    title: 'Final Viva',
    type: 'Group',
    link: 'https://drive.google.com/drive/folders/1SgNfm4G0H68h2hNlaZBxtxC-J5aJ0UZ1?usp=sharing',
  },
]

function PptIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="36"
      height="36"
    >
      <path fill="#FF7043" d="M40 45H8c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h24l10 10v30c0 1.1-.9 2-2 2z" />
      <path fill="#FFAB91" d="M32 3l10 10H32z" />
      <path
        fill="#fff"
        d="M21.5 29v-9h4.5c1.4 0 2.5 1.1 2.5 2.5S27.4 25 26 25h-2v4h-2.5zm2.5-6h2c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-2v1z"
      />
    </svg>
  )
}

export default function Presentations() {
  return (
    <SectionWrapper id="presentations" bg="bg-gray-50">
      {/* Header */}
      <div className="text-center mb-14 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 section-title font-playfair tracking-tight text-center">
          Presentations
        </h2>
        <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed text-center">
          Please find{' '}
          <span className="text-amber-500 font-medium">all presentations</span>{' '}
          related to{' '}
          <span className="text-orange-500 font-medium">this project</span> below.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {presentations.map((pres, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 flex flex-col gap-3 hover:shadow-md transition-shadow duration-200"
          >
            {/* Icon + Title */}
            <div className="flex items-center gap-3">
              <PptIcon />
              <span className="font-semibold text-gray-800 text-sm leading-snug">
                {pres.title}
              </span>
            </div>

            {/* Date & Type + Download */}
            <div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500 text-xs">{pres.type}</span>
                <a
                  href={pres.link}
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
