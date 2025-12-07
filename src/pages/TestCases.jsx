import { useState } from 'react'
import Header from '../components/Header'
import TestCaseCard from '../components/TestCaseCard'
import mockTestCases from '../mock/mockTestCases.json'

function TestCases() {
  const [filter, setFilter] = useState('All')
  const filters = ['All', 'Positive', 'Negative', 'Boundary', 'Exception']

  const filteredTestCases =
    filter === 'All'
      ? mockTestCases
      : mockTestCases.filter((tc) => tc.type === filter)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-3xl font-bold text-slate-200 mb-2">
            Generated Test Cases
          </h1>
          <p className="text-slate-400">
            Review and manage your AI-generated test cases
          </p>
        </div>

        <div className="mb-6 flex flex-wrap gap-2 animate-fade-in stagger-1">
          {filters.map((filterType, index) => (
            <button
              key={filterType}
              onClick={() => setFilter(filterType)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover-scale ${
                filter === filterType
                  ? 'bg-blue-700 text-white scale-105 shadow-lg shadow-blue-600/40'
                  : 'bg-slate-900 text-slate-400 hover:bg-blue-950/50 hover:text-blue-300 border border-slate-800 hover:border-blue-600/50'
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {filterType}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestCases.map((testCase, index) => (
            <div
              key={testCase.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <TestCaseCard testCase={testCase} />
            </div>
          ))}
        </div>

        {filteredTestCases.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <p className="text-slate-500">No test cases found for this filter.</p>
          </div>
        )}
      </main>
    </div>
  )
}

export default TestCases

