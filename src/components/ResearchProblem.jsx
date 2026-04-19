import { AlertTriangle, Lightbulb, Search, FileText, ShieldAlert, MessageCircle, FileCheck, ShieldCheck, Scale } from 'lucide-react'
import SectionWrapper from './SectionWrapper'

const problems = [
  {
    num: '01', icon: Search,
    title: 'Inefficient Precedent Retrieval',
    description: 'Identifying relevant case law in localized jurisdictions (e.g., Sri Lanka) is hindered by legacy databases that rely on rigid, exact-keyword matching. This forces users to know precise legal terminology and often fails to capture the semantic context of a legal scenario.',
    accent: 'border-l-amber-500', numColor: 'text-amber-900/30',
  },
  {
    num: '02', icon: FileText,
    title: 'Resource-Intensive Document Review',
    description: 'The manual analysis of lengthy, often poorly digitized historical judgments (such as the New Law Reports and Sri Lanka Law Reports) drains significant time and resources from legal professionals.',
    accent: 'border-l-orange-400', numColor: 'text-orange-900/30',
  },
  {
    num: '03', icon: ShieldAlert,
    title: 'Contractual Vulnerability',
    description: 'Evaluating legal contracts for hidden liabilities, anomalous clauses, and risks requires specialized expertise. This leaves individuals and small businesses vulnerable to predatory agreements if they lack access to expensive legal counsel.',
    accent: 'border-l-amber-400', numColor: 'text-amber-900/30',
  },
  {
    num: '04', icon: MessageCircle,
    title: 'The Layman-Legal Disconnect',
    description: 'Ordinary citizens struggle to translate real-world grievances into actionable legal claims. There is a profound disconnect between colloquial descriptions of everyday injustices and the formal statutory frameworks required to identify constitutional Fundamental Rights violations.',
    accent: 'border-l-orange-500', numColor: 'text-orange-900/30',
  },
]

const solutions = [
  {
    num: '1', icon: Search,
    title: 'Semantic Case Retrieval & Q&A', subtitle: 'PassCaseFinder',
    description: 'Overcomes rigid keyword search by deploying a vector-based semantic search architecture using Sentence-Transformers and FAISS. Users enter natural language scenarios; the system queries vast legal precedent databases and synthesizes a direct, context-aware answer from relevant past rulings.',
    tags: ['Sentence-Transformers', 'FAISS', 'Q&A'],
    gradient: 'from-amber-400 to-orange-500',
    tagColor: 'bg-amber-50 text-amber-700',
  },
  {
    num: '2', icon: FileCheck,
    title: 'AI Legal Summarizer', subtitle: 'Judgment Digitization',
    description: 'Alleviates the burden of reading lengthy historical documents by employing specialized OCR and advanced NLP pipelines. It accurately digitizes texts, detects core rights arguments, and generates concise, structured summaries of complex, jurisdiction-specific judgments.',
    tags: ['OCR Pipeline', 'NLP', 'NLR / SLR'],
    gradient: 'from-orange-400 to-amber-500',
    tagColor: 'bg-orange-50 text-orange-700',
  },
  {
    num: '3', icon: ShieldCheck,
    title: 'Automated Contract Risk Analysis', subtitle: 'Hybrid Reasoning Engine',
    description: 'Mitigates contractual vulnerabilities through a hybrid reasoning engine. The system scans uploaded contracts, classifies legal problem types, extracts risky clauses, and provides confidence-scored risk assessments backed by relevant, dynamically retrieved case law.',
    tags: ['Clause Extraction', 'Risk Scoring', 'Case Law'],
    gradient: 'from-amber-500 to-orange-400',
    tagColor: 'bg-amber-50 text-amber-800',
  },
  {
    num: '4', icon: Scale,
    title: 'Fundamental Rights Screener', subtitle: 'FR Violation Detection',
    description: 'Bridges the accessibility gap using Google Gemini LLMs to analyze colloquial descriptions of real-world incidents. Maps layman scenarios to specific constitutional articles (e.g., Articles 10–17), determines violation status, and provides plain-language guidance alongside Supreme Court precedents.',
    tags: ['Google Gemini', 'Art. 10–17', 'Accessibility'],
    gradient: 'from-orange-500 to-amber-600',
    tagColor: 'bg-orange-50 text-orange-800',
  },
]

export default function ResearchProblem() {
  return (
    <SectionWrapper id="research-problem" bg="bg-white">

      {/* ── Research Problem Header ── */}
      <div className="text-center mb-14 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 section-title font-playfair tracking-tight text-center">
          Research Problem
        </h2>
        <p className="mt-6 text-gray-500 max-w-3xl mx-auto text-lg leading-relaxed text-center">
          The legal system is inherently complex, characterized by dense terminology, lengthy judgments, and intricate statutory frameworks. This creates a significant barrier to justice. Four distinct but interconnected challenges arise:
        </p>
      </div>

      {/* Problem cards */}
      <div className="grid md:grid-cols-2 gap-5 mb-20">
        {problems.map((p) => (
          <div key={p.num} className={`card-hover bg-white rounded-2xl p-7 border-l-4 ${p.accent} border border-gray-100 shadow-sm relative overflow-hidden`}>
            <span className="absolute top-4 right-5 text-6xl font-black text-amber-100 select-none pointer-events-none">{p.num}</span>
            <div className="text-3xl mb-3 text-amber-600"><p.icon size={36} /></div>
            <h3 className="text-base font-bold text-gray-900 mb-2">{p.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{p.description}</p>
          </div>
        ))}
      </div>

      {/* ── Proposed Solution Header ── */}
      <div className="text-center mb-14 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 section-title font-playfair tracking-tight text-center">
          Proposed Solution
        </h2>
        <p className="mt-6 text-gray-500 max-w-3xl mx-auto text-lg leading-relaxed text-center">
          A comprehensive, multi-domain, AI-driven legal technology ecosystem integrating NLP, semantic vector search, and Generative AI across a microservices architecture — delivered through four specialized modules.
        </p>
      </div>

      {/* Solution cards */}
      <div className="grid md:grid-cols-2 gap-5">
        {solutions.map((s) => (
          <div key={s.num} className="card-hover bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className={`h-1.5 bg-gradient-to-r ${s.gradient}`} />
            <div className="p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center text-white text-xl shadow-md`}>
                  <s.icon size={22} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{s.subtitle}</p>
                  <h3 className="text-base font-bold text-gray-900 leading-tight">{s.title}</h3>
                </div>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.description}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag, j) => (
                  <span key={j} className={`text-xs font-semibold px-3 py-1 rounded-full ${s.tagColor}`}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-10 text-center text-gray-400 text-sm max-w-3xl mx-auto italic">
        Collectively, this integrated suite optimizes professional legal research, mitigates contractual risks, and democratizes legal knowledge — providing a seamless bridge between complex jurisprudence and the general public.
      </p>
    </SectionWrapper>
  )
}
