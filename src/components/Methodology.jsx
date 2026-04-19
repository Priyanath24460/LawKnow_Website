import { useState } from 'react'
import { GitBranch, ChevronDown, Search, Database, Network, MessageSquare, FileText, Printer, Microscope, FileSignature, ShieldAlert, FolderOpen, Bot, BarChart, Scale, BookOpen, MessageCircle, Sparkles, Send, Zap, Server, Code2 } from 'lucide-react'
import SectionWrapper from './SectionWrapper'

const pipelines = [
  {
    num: '1',
    icon: Search,
    title: 'Semantic Case Retrieval & Q&A',
    subtitle: 'PassCaseFinder',
    gradient: 'from-amber-400 to-orange-500',
    bar: 'bg-gradient-to-r from-amber-400 to-orange-500',
    accent: 'border-l-amber-500',
    badgeBg: 'bg-amber-500',
    tagColor: 'bg-amber-50 text-amber-700',
    tags: ['Sentence-Transformers', 'FAISS', 'RAG', 'MongoDB'],
    steps: [
      {
        icon: Database,
        label: 'Data Ingestion & Embedding',
        detail:
          'Legal precedents and case law are stored in a NoSQL database (MongoDB). The text of these cases is passed through a Sentence-Transformer neural network to generate high-dimensional dense vector embeddings that capture the full semantic meaning of the text.',
      },
      {
        icon: Network,
        label: 'Vector Indexing',
        detail:
          'The generated embeddings are indexed using FAISS (Facebook AI Similarity Search), enabling ultra-fast cosine similarity calculations across millions of records in near real-time.',
      },
      {
        icon: MessageSquare,
        label: 'Query Processing & Synthesis',
        detail:
          'When a user submits a natural language question or scenario, the query is vectorized. FAISS retrieves the top-k most contextually relevant past cases. An NLP model then synthesizes a direct, coherent answer based exclusively on the facts and rulings of those retrieved precedents.',
      },
    ],
  },
  {
    num: '2',
    icon: FileText,
    title: 'AI Legal Summarizer',
    subtitle: 'NLR / SLR Judgments',
    gradient: 'from-orange-400 to-amber-500',
    bar: 'bg-gradient-to-r from-orange-400 to-amber-500',
    accent: 'border-l-orange-400',
    badgeBg: 'bg-orange-500',
    tagColor: 'bg-orange-50 text-orange-700',
    tags: ['OCR', 'NER', 'Abstractive Summarization', 'NLP Pipeline'],
    steps: [
      {
        icon: Printer,
        label: 'Data Preprocessing',
        detail:
          'Raw judgment files, often in poorly scanned PDF formats (e.g., New Law Reports), are processed using Optical Character Recognition (OCR) to accurately extract raw text before any further analysis.',
      },
      {
        icon: Microscope,
        label: 'Information Extraction',
        detail:
          'The digitized text undergoes data cleaning (removing headers, footers, and noise). Named Entity Recognition (NER) and custom heuristic rules are applied to identify critical metadata: judge\'s name, date, case number, and cited statutory acts.',
      },
      {
        icon: FileSignature,
        label: 'Summarization Engine',
        detail:
          'An advanced NLP pipeline analyses the document to detect core legal arguments and rights. It then applies abstractive summarization techniques to generate a concise, structured summary categorized into Facts, Legal Issues, and Final Rulings.',
      },
    ],
  },
  {
    num: '3',
    icon: ShieldAlert,
    title: 'Automated Contract Risk Analysis',
    subtitle: 'Hybrid Reasoning Engine',
    gradient: 'from-amber-500 to-orange-400',
    bar: 'bg-gradient-to-r from-amber-500 to-orange-400',
    accent: 'border-l-amber-600',
    badgeBg: 'bg-amber-600',
    tagColor: 'bg-amber-50 text-amber-800',
    tags: ['Rule-Based Heuristics', 'Neural Embeddings', 'FAISS', 'Risk Scoring'],
    steps: [
      {
        icon: FolderOpen,
        label: 'Document Parsing',
        detail:
          'Uploaded contracts (PDF/Docx) are parsed to extract individual clauses while preserving the document\'s full structural hierarchy, ensuring context between related clauses is maintained.',
      },
      {
        icon: Bot,
        label: 'Hybrid Classification',
        detail:
          'Each clause is analyzed using a combination of deterministic rule-based heuristics and neural embeddings. The system classifies clauses into predefined legal problem types (e.g., termination, liability, indemnification) for precise categorization.',
      },
      {
        icon: BarChart,
        label: 'Risk Scoring & Cross-Referencing',
        detail:
          'Identified anomalies receive a risk confidence score (0–1). The extracted clauses are simultaneously vectorized and queried against a dedicated FAISS database of over 10 million legal embeddings to fetch supporting case law and statutory legislation, providing empirical backing for flagged risks.',
      },
    ],
  },
  {
    num: '4',
    icon: Scale,
    title: 'Fundamental Rights Screener',
    subtitle: 'FR Violation Detection',
    gradient: 'from-orange-500 to-amber-600',
    bar: 'bg-gradient-to-r from-orange-500 to-amber-600',
    accent: 'border-l-orange-500',
    badgeBg: 'bg-orange-600',
    tagColor: 'bg-orange-50 text-orange-800',
    tags: ['Google Gemini', 'FAISS', 'Articles 10–17', 'Structured JSON Output'],
    steps: [
      {
        icon: BookOpen,
        label: 'Context Retrieval',
        detail:
          'A dedicated dataset comprising the Sri Lankan Constitution (Articles 10–17 on Fundamental Rights) and related Supreme Court rulings is vectorized and stored in a FAISS index for fast semantic retrieval.',
      },
      {
        icon: MessageCircle,
        label: 'Scenario Embedding',
        detail:
          'The user submits a real-world grievance in colloquial language. The system converts this into a dense vector to retrieve the most relevant constitutional articles and past case contexts from the FAISS index.',
      },
      {
        icon: Sparkles,
        label: 'Generative AI Analysis (Google Gemini)',
        detail:
          'The retrieved legal context alongside the user\'s scenario is injected into a carefully engineered prompt and passed to the Google Gemini API for deep constitutional reasoning.',
      },
      {
        icon: Send,
        label: 'Structured Output',
        detail:
          'The LLM returns a structured JSON payload that explicitly states whether a violation occurred, maps it to the exact constitutional article, provides a plain-language explanation, suggests actionable legal steps, and cites similar historical Supreme Court cases.',
      },
    ],
  },
]

export default function Methodology() {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <SectionWrapper id="methodology" bg="bg-white">

      {/* ── Header ── */}
      <div className="text-center mb-14 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 section-title font-playfair tracking-tight text-center">
          Methodology
        </h2>
        <p className="mt-6 text-gray-500 max-w-3xl mx-auto text-lg leading-relaxed text-center">
          The proposed system employs a decentralized, <span className="font-semibold text-gray-700">microservices-based architecture</span> to
          ensure scalability, modularity, and rapid response times. Backend services are built with{' '}
          <span className="font-semibold text-gray-700">FastAPI (Python)</span> for ML workloads and{' '}
          <span className="font-semibold text-gray-700">Node.js/Express</span> for database operations,
          interacting with a unified <span className="font-semibold text-gray-700">React.js</span> frontend.
        </p>
      </div>

      {/* ── Architecture Tech Stack Banner ── */}
      <div className="bg-white border border-amber-200 rounded-2xl p-7 mb-10 shadow-md">
        <p className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-4">System Architecture Stack</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Zap, label: 'FastAPI', sub: 'ML Microservices' },
            { icon: Server, label: 'Node.js / Express', sub: 'Database Operations' },
            { icon: Code2, label: 'React.js', sub: 'Unified Frontend' },
            { icon: Database, label: 'MongoDB + FAISS', sub: 'Storage & Vector Search' },
          ].map((t, i) => {
            const Icon = t.icon
            return (
            <div key={i} className="bg-amber-50 border border-amber-100 rounded-xl p-4 flex items-center gap-3">
              <span className="text-amber-600"><Icon size={24} /></span>
              <div>
                <p className="text-gray-800 text-sm font-semibold leading-tight">{t.label}</p>
                <p className="text-gray-500 text-xs">{t.sub}</p>
              </div>
            </div>
          )})}
        </div>
      </div>

      {/* ── Pipeline Accordion ── */}
      <div className="space-y-4">
        {pipelines.map((pipe, i) => {
          const isOpen = openIdx === i
          return (
            <div
              key={i}
              className={`rounded-2xl border border-gray-100 overflow-hidden shadow-sm transition-shadow duration-300 ${isOpen ? 'shadow-md' : ''}`}
            >
              {/* Accordion Header */}
              <button
                onClick={() => setOpenIdx(isOpen ? -1 : i)}
                className="w-full flex items-center gap-4 p-5 bg-white hover:bg-amber-50 transition-colors duration-200 text-left"
              >
                {/* coloured num badge */}
                <div className={`w-11 h-11 rounded-xl ${pipe.badgeBg} flex items-center justify-center text-white font-bold text-sm shadow flex-shrink-0`}>
                  {pipe.num}
                </div>
                {/* icon + title */}
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{pipe.subtitle}</p>
                  <p className="text-base font-bold text-gray-900 leading-snug flex items-center gap-2">
                    <span className="text-amber-600"><pipe.icon size={20} /></span> {pipe.title}
                  </p>
                </div>
                {/* tags — hidden on mobile */}
                <div className="hidden md:flex flex-wrap gap-1.5 mr-2">
                  {pipe.tags.slice(0, 2).map((tag, j) => (
                    <span key={j} className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${pipe.tagColor}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                {/* chevron */}
                <ChevronDown
                  size={18}
                  className={`text-gray-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Accordion Body */}
              {isOpen && (
                <div className="bg-slate-50 border-t border-gray-100">
                  {/* gradient top accent */}
                  <div className={`h-1 ${pipe.bar}`} />

                  <div className="p-6">
                    {/* all tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {pipe.tags.map((tag, j) => (
                        <span key={j} className={`text-xs font-semibold px-3 py-1 rounded-full ${pipe.tagColor}`}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Steps */}
                    <div className="relative pl-6">
                      {/* vertical connector */}
                      <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-gray-200 to-transparent" />

                      <div className="space-y-6">
                        {pipe.steps.map((step, j) => (
                          <div key={j} className="relative flex gap-4">
                            {/* dot */}
                            <div className={`absolute -left-6 w-3.5 h-3.5 rounded-full ${pipe.badgeBg} border-2 border-white shadow flex-shrink-0 mt-1`} />
                            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex-1">
                              <p className="text-sm font-bold text-gray-800 mb-1 flex items-center gap-2">
                                <span className="text-amber-600"><step.icon size={16} /></span> {step.label}
                              </p>
                              <p className="text-gray-500 text-sm leading-relaxed">{step.detail}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

    </SectionWrapper>
  )
}
