import { Target, CheckCircle2, Search, FileText, ShieldAlert, Scale } from 'lucide-react'
import SectionWrapper from './SectionWrapper'

const specificObjectives = [
  {
    num: '01', icon: Search, module: 'PassCaseFinder',
    title: 'Semantic Case Retrieval & Question-Answering',
    description: 'Develop a semantic case retrieval and question-answering module utilizing Sentence-Transformers and FAISS, enabling users to query legal databases using natural language questions and receive direct, context-aware answers synthesized from relevant past precedents.',
    tags: ['Sentence-Transformers', 'FAISS', 'NL Queries'],
    gradient: 'from-amber-400 to-orange-500',
    bar: 'bg-gradient-to-r from-amber-400 to-orange-500',
    tagColor: 'bg-amber-50 text-amber-700',
    numBg: 'bg-amber-500',
  },
  {
    num: '02', icon: FileText, module: 'AI Legal Summarizer',
    title: 'Automated Legal Summarization Pipeline',
    description: 'Engineer an automated AI legal summarization pipeline utilizing OCR and advanced Natural Language Processing to accurately digitize, extract core arguments, and condense lengthy, jurisdiction-specific judgments such as the New Law Reports and Sri Lanka Law Reports.',
    tags: ['OCR', 'NLP Pipeline', 'NLR / SLR'],
    gradient: 'from-orange-400 to-amber-500',
    bar: 'bg-gradient-to-r from-orange-400 to-amber-500',
    tagColor: 'bg-orange-50 text-orange-700',
    numBg: 'bg-orange-500',
  },
  {
    num: '03', icon: ShieldAlert, module: 'Contract Risk Analyzer',
    title: 'Hybrid-Reasoning Contract Risk Analysis',
    description: 'Design a hybrid-reasoning contract risk analysis framework capable of scanning legal documents to identify anomalous clauses, classify specific legal problems, and quantify potential risks while mapping them to supporting case law.',
    tags: ['Hybrid Reasoning', 'Clause Detection', 'Risk Scoring'],
    gradient: 'from-amber-500 to-orange-400',
    bar: 'bg-gradient-to-r from-amber-500 to-orange-400',
    tagColor: 'bg-amber-50 text-amber-800',
    numBg: 'bg-amber-600',
  },
  {
    num: '04', icon: Scale, module: 'FR Violation Screener',
    title: 'Fundamental Rights Violation Screening System',
    description: 'Implement a Fundamental Rights (FR) violation screening system powered by Large Language Models (e.g., Google Gemini) that translates colloquial descriptions of real-world scenarios into precise constitutional violations, providing simple explanations, actionable guidance, and relevant Supreme Court citations.',
    tags: ['Google Gemini', 'Articles 10–17', 'SC Precedents'],
    gradient: 'from-orange-500 to-amber-600',
    bar: 'bg-gradient-to-r from-orange-500 to-amber-600',
    tagColor: 'bg-orange-50 text-orange-800',
    numBg: 'bg-orange-600',
  },
]

export default function ResearchObjectives() {
  return (
    <SectionWrapper id="research-objectives" bg="bg-white">
      <div className="text-center mb-14 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 section-title font-playfair tracking-tight text-center">
          Research Objectives
        </h2>
      </div>

      {/* Main Objective Banner */}
      <div className="bg-white border-2 border-amber-200 rounded-2xl p-10 mb-12 shadow-md relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-48 h-48 bg-amber-400 opacity-10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-orange-300 opacity-10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white shadow-lg">
            <Target size={32} />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-1">Main Objective</p>
            <p className="text-gray-700 text-[1.05rem] leading-relaxed">
              To design, develop, and evaluate an{' '}
              <span className="text-amber-600 font-semibold">integrated, AI-driven legal intelligence ecosystem</span>{' '}
              that democratizes access to localized jurisprudence, automates complex document analysis, and provides accurate, accessible legal guidance to both professionals and the general public.
            </p>
          </div>
        </div>
      </div>

      {/* Specific Objectives divider */}
      <div className="flex items-center gap-3 mb-7">
        <CheckCircle2 size={18} className="text-amber-500 flex-shrink-0" />
        <h3 className="text-lg font-bold text-gray-800">Specific Objectives</h3>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      {/* Objective cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {specificObjectives.map((obj) => {
          const Icon = obj.icon
          return (
            <div key={obj.num} className="card-hover bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className={`h-1.5 ${obj.bar}`} />
              <div className="p-7">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl ${obj.numBg} flex items-center justify-center text-white font-bold text-sm shadow-md flex-shrink-0`}>
                    {obj.num}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{obj.module}</p>
                    <h3 className="text-base font-bold text-gray-900 leading-snug">{obj.title}</h3>
                  </div>
                  <span className="ml-auto text-amber-500"><Icon size={28} /></span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{obj.description}</p>
              <div className="flex flex-wrap gap-2">
                {obj.tags.map((tag, j) => (
                  <span key={j} className={`text-xs font-semibold px-3 py-1 rounded-full ${obj.tagColor}`}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
