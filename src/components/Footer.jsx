import { Scale } from 'lucide-react'

const footerLinks = [
  {
    title: 'Domain',
    links: [
      { label: 'Literature Survey', href: '#literature-survey' },
      { label: 'Research Gap', href: '#research-gap' },
      { label: 'Research Problem', href: '#research-problem' },
      { label: 'Research Objectives', href: '#research-objectives' },
      { label: 'Methodology', href: '#methodology' },
      { label: 'Technologies Used', href: '#technologies' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documents', href: '#documents' },
      { label: 'Presentations', href: '#presentations' },
    ],
  },
  {
    title: 'Project',
    links: [
      { label: 'Milestones', href: '#milestones' },
      { label: 'About Us', href: '#about' },
      { label: 'Contact Us', href: '#contact' },
    ],
  },
]

export default function Footer() {
  const scrollTo = (href) => {
    if (href.startsWith('#')) {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                <Scale size={18} className="text-white" />
              </div>
              <div>
                <span className="text-white font-bold text-lg leading-none block font-playfair">
                  LAW
                </span>
                <span className="text-amber-400 text-xs italic leading-none font-playfair">
                  Know
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-500">
              An AI-powered legal intelligence platform bridging the access-to-justice gap in Sri Lanka.
            </p>
            <p className="text-xs text-gray-600 mt-4">
              Sri Lanka Institute of Information Technology<br />
              Final Year Research Project 2024–2025
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-amber-400 text-sm font-semibold mb-4 uppercase tracking-wider">{section.title}</h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-sm text-gray-500 hover:text-amber-400 transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} LawKnow Research Project. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Built with ⚖️ by the LawKnow Team · SLIIT
          </p>
        </div>
      </div>
    </footer>
  )
}
