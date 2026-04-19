import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LiteratureSurvey from './components/LiteratureSurvey'
import ResearchGap from './components/ResearchGap'
import ResearchProblem from './components/ResearchProblem'
import ResearchObjectives from './components/ResearchObjectives'
import Methodology from './components/Methodology'
import TechnologiesUsed from './components/TechnologiesUsed'
import Milestones from './components/Milestones'
import Documents from './components/Documents'
import Presentations from './components/Presentations'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <LiteratureSurvey />
      <ResearchGap />
      <ResearchProblem />
      <ResearchObjectives />
      <Methodology />
      <TechnologiesUsed />
      <Milestones />
      <Documents />
      <Presentations />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
