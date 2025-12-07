import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Header from '../components/Header'
import TestCaseEditor from '../components/TestCaseEditor'
import TraceabilityPane from '../components/TraceabilityPane'
import mockDetail from '../mock/mockDetail.json'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

function TestCaseDetail() {
  const { id } = useParams()
  const [testCase, setTestCase] = useState(mockDetail)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/test-cases"
          className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 mb-6 transition-all duration-300 hover:gap-2 group animate-fade-in"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-1 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Test Cases
        </Link>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-slate-900/90 backdrop-blur-sm rounded-lg shadow-2xl border border-blue-900/40 p-8 animate-fade-in-up stagger-1 hover-lift">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-slate-200 mb-2">
                Test Case Details
              </h1>
              <p className="text-sm text-slate-500">ID: {testCase.id}</p>
            </div>

            <TestCaseEditor testCase={testCase} onUpdate={setTestCase} />

            <div className="mt-8 flex justify-end space-x-4">
              <button 
                onClick={(e) => {
                  e.currentTarget.classList.add('animate-pop')
                }}
                className="px-6 py-2 border border-slate-700 rounded-lg text-slate-400 hover:bg-slate-800 transition-all duration-300 hover-scale"
              >
                Cancel
              </button>
              <button 
                onClick={(e) => {
                  e.currentTarget.classList.add('animate-spring-pop')
                  setTimeout(() => alert('Changes saved!'), 300)
                }}
                className="px-6 py-2 bg-blue-700 text-white rounded-lg btn-pop shadow-lg shadow-blue-600/40 hover:shadow-2xl"
              >
                Save Changes
              </button>
            </div>
          </div>

          <div className="animate-fade-in-up stagger-2 animate-slide-in-right">
            <TraceabilityPane traceability={testCase.traceability} />
          </div>
        </div>
      </main>
    </div>
  )
}

export default TestCaseDetail

