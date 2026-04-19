import { Search, Globe, Link, Scale } from 'lucide-react'
import SectionWrapper from './SectionWrapper'

const gaps = [
  {
    icon: Globe,
    label: 'Jurisdictional Bias',
    title: 'Western-Centric Legal AI & Lack of South Asian NLP Pipelines',
    description:
      'Despite the rapid proliferation of AI and NLP in the legal domain, a significant jurisdictional bias persists in current literature. The vast majority of existing legal-tech frameworks and Large Language Models are heavily trained on and optimized for Western legal systems (e.g., US, UK, and European law). Consequently, there is a distinct scarcity of robust, localized AI solutions tailored to the unique jurisprudential and constitutional nuances of South Asian legal frameworks, particularly the Sri Lankan legal system. There is a notable lack of specialized NLP pipelines capable of accurately processing, embedding, and summarizing region-specific legal corpuses such as the New Law Reports (NLR) and Sri Lanka Law Reports (SLR).',
    tags: ['Jurisdictional Bias', 'Sri Lankan NLP', 'NLR / SLR Corpus'],
    accent: 'from-amber-400 to-orange-500',
    tagColor: 'bg-amber-50 text-amber-700',
    badgeBg: 'bg-amber-50 text-amber-600',
    borderAccent: 'border-l-amber-500',
  },
  {
    icon: Link,
    label: 'Integration Gap',
    title: 'No Integrated Multi-Domain Legal Ecosystem',
    description:
      'While contemporary research often isolates specific legal tasks—focusing independently on either document summarization, contract review, or case retrieval—there is a critical gap in the development of integrated, multi-domain legal ecosystems. Current literature lacks comprehensive architectures that effectively synthesize hybrid-reasoning for contract risk analysis, high-speed semantic vector search (FAISS) for precise precedent retrieval, and localized rights detection within a single cohesive framework. These siloed approaches fail to deliver the holistic, end-to-end legal intelligence that practitioners and citizens require.',
    tags: ['Hybrid Reasoning', 'FAISS Semantic Search', 'Contract Risk Analysis'],
    accent: 'from-orange-400 to-amber-600',
    tagColor: 'bg-orange-50 text-orange-700',
    badgeBg: 'bg-orange-50 text-orange-600',
    borderAccent: 'border-l-orange-500',
  },
  {
    icon: Scale,
    label: 'Accessibility Gap',
    title: 'Failure to Translate Layman Scenarios to Constitutional Frameworks',
    description:
      'Existing generic AI models struggle to accurately map colloquial, layman descriptions of real-world incidents to specific local statutory frameworks. There remains a significant need for systems capable of translating everyday scenarios into precise constitutional violations (e.g., Sri Lankan Fundamental Rights under Articles 10–17) while seamlessly linking them to relevant Supreme Court precedents and actionable legal guidance. This gap in legal democratization prevents ordinary citizens from understanding and exercising their rights within the Sri Lankan justice system.',
    tags: ['Fundamental Rights (Art. 10–17)', 'Layman-to-Legal Mapping', 'Supreme Court Precedents'],
    accent: 'from-amber-500 to-orange-400',
    tagColor: 'bg-amber-50 text-amber-800',
    badgeBg: 'bg-amber-50 text-amber-700',
    borderAccent: 'border-l-amber-600',
  },
]

export default function ResearchGap() {
  return (
    <SectionWrapper id="research-gap" bg="bg-white">
      <div className="text-center mb-14 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 section-title font-playfair tracking-tight text-center">
          Research Gap
        </h2>
        <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed text-center">
          Critical gaps identified in current legal AI literature that the LawKnow system is designed to address.
        </p>
      </div>

      <div className="flex flex-col gap-7">
        {gaps.map((gap, i) => {
          const Icon = gap.icon
          return (
            <div key={i} className="card-hover bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className={`h-1.5 bg-gradient-to-r ${gap.accent}`} />
              <div className="p-7 flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 flex flex-col items-center gap-2">
                  <div className={`w-16 h-16 rounded-2xl ${gap.badgeBg} flex items-center justify-center`}>
                    <Icon size={32} />
                  </div>
                <span className="text-xs font-bold text-gray-300 tracking-widest">
                  GAP {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="flex-1">
                <span className={`text-xs font-semibold uppercase tracking-wider ${gap.tagColor} mb-1 block`}>
                  {gap.label}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug">{gap.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{gap.description}</p>
                <div className="flex flex-wrap gap-2">
                  {gap.tags.map((tag, j) => (
                    <span key={j} className={`text-xs font-semibold px-3 py-1 rounded-full ${gap.tagColor}`}>
                      {tag}
                    </span>
                  ))}
              </div>
            </div>
            </div>
          </div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
