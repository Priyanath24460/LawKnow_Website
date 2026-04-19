import { BookOpen } from 'lucide-react'
import SectionWrapper from './SectionWrapper'
import literatureImg from '../assets/literature_survey_v2.png'

const highlights = [
  { label: 'OCR + NLP Pipelines', color: 'bg-amber-100 text-amber-700' },
  { label: 'Sentence-Transformers', color: 'bg-orange-100 text-orange-700' },
  { label: 'FAISS Vector Search', color: 'bg-amber-100 text-amber-800' },
  { label: 'Google Gemini LLM', color: 'bg-orange-100 text-orange-800' },
  { label: 'Microservice Architecture', color: 'bg-amber-50 text-amber-700' },
  { label: 'Constitutional AI Analysis', color: 'bg-orange-50 text-orange-700' },
]

const paragraphs = [
  `Recent advancements in Artificial Intelligence and Natural Language Processing (NLP) have fundamentally transformed the landscape of automated legal research and document analysis. The integration of sophisticated embedding models and Large Language Models (LLMs) has enabled the automation of highly complex legal tasks.`,
  `For instance, intelligent case summarization systems increasingly utilize Optical Character Recognition (OCR) paired with specialized NLP pipelines to preprocess and extract critical rights and judgments from jurisdiction-specific corpuses, such as Sri Lankan Law Reports. Furthermore, automated contract analysis has evolved beyond simple keyword matching; contemporary approaches employ hybrid reasoning that combines rule-based heuristics with neural embeddings (e.g., Sentence-Transformers) and high-speed vector similarity search algorithms like FAISS.`,
  `This architecture allows systems to accurately classify legal problem types, extract anomalous clauses, and quantify legal risks with high confidence. The efficacy of vector-based semantic search is similarly pivotal in modern precedent retrieval frameworks, which utilize dedicated embedding and FAISS microservices to rapidly query vast databases of case law to surface relevant past judgments.`,
  `Additionally, the application of advanced generative models, such as Google Gemini, in fundamental rights screening illustrates the growing capability of AI to analyze unstructured, real-world scenarios against specific constitutional articles. These systems can map potential violations to relevant Supreme Court cases while providing accessible legal guidance. Collectively, these technological paradigms highlight a definitive shift in legal tech towards modular, AI-driven microservice architectures—merging semantic vector search, neural inference, and generative AI—to deliver comprehensive, efficient, and highly accurate legal analysis solutions.`,
]

export default function LiteratureSurvey() {
  return (
    <SectionWrapper id="literature-survey" bg="bg-white">
      <div className="text-center mb-14 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 section-title font-playfair tracking-tight text-center">
          Literature Survey
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 items-start">
        <div className="flex-1 space-y-4">
          {paragraphs.map((para, i) => (
            <p key={i} className="text-gray-600 text-[0.95rem] leading-relaxed">{para}</p>
          ))}
          <div className="pt-4 flex flex-wrap gap-2">
            {highlights.map((h, i) => (
              <span key={i} className={`text-xs font-semibold px-3 py-1 rounded-full ${h.color}`}>
                {h.label}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:w-[420px] shrink-0">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-amber-100 card-hover">
            <img
              src={literatureImg}
              alt="AI Legal Technology visualization"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-3 text-center text-xs text-gray-400 italic">
            Fig. 1 — AI-driven legal tech: neural embeddings, FAISS search &amp; LLM inference.
          </p>
        </div>
      </div>
    </SectionWrapper>
  )
}
