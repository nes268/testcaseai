import { Link } from 'react-router-dom'
import Header from '../components/Header'
import {
  DocumentArrowUpIcon,
  SparklesIcon,
  LinkIcon,
} from '@heroicons/react/24/outline'

function Home() {
  const features = [
    {
      icon: DocumentArrowUpIcon,
      title: 'Upload Documents',
      description: 'Easily upload requirement PDFs in healthcare, finance, and regulatory formats.',
    },
    {
      icon: SparklesIcon,
      title: 'Auto Test Case Generation',
      description: 'AI-powered extraction and conversion of requirements into comprehensive test cases.',
    },
    {
      icon: LinkIcon,
      title: 'Traceability & Export',
      description: 'Full traceability back to source documents with export to CSV, Excel, and more.',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500 bg-clip-text text-transparent mb-4 animate-fade-in">
            TestCaseAI
          </h1>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto animate-fade-in stagger-1">
            AI that Converts Requirement PDFs into Ready-to-Use Test Cases.
          </p>
          <Link
            to="/upload"
            className="inline-block px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg btn-pop hover:shadow-xl animate-fade-in stagger-2 animate-pop-strong"
            onClick={(e) => {
              e.currentTarget.classList.add('animate-spring-pop')
            }}
          >
            Get Started
          </Link>
        </div>

        <div className="mt-20 animate-fade-in-up stagger-3">
          <h2 className="text-3xl font-bold text-center text-slate-200 mb-12">
            Key Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-slate-900/80 backdrop-blur-sm p-8 rounded-lg shadow-xl border border-blue-900/40 card-pop-hover card-enter animate-card-pop hover:border-blue-700/50"
                style={{ animationDelay: `${(index + 1) * 0.15}s` }}
                onMouseEnter={(e) => {
                  e.currentTarget.classList.add('animate-pop')
                }}
              >
                <div className="mb-4 inline-block hover-scale">
                  <feature.icon className="h-12 w-12 text-blue-400 transition-all duration-300 hover:rotate-12 hover:scale-110" />
                </div>
                <h3 className="text-xl font-semibold text-slate-200 mb-2 transition-colors duration-300 hover:text-blue-400">
                  {feature.title}
                </h3>
                <p className="text-slate-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home

