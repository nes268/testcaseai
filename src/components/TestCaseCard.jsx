import { Link } from 'react-router-dom'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

function TestCaseCard({ testCase }) {
  const typeColors = {
    Positive: 'bg-green-100 text-green-800',
    Negative: 'bg-red-100 text-red-800',
    Boundary: 'bg-blue-100 text-blue-800',
    Exception: 'bg-yellow-100 text-yellow-800',
  }

  return (
    <div className="bg-slate-900/80 backdrop-blur-sm rounded-lg shadow-xl border border-blue-900/40 p-6 card-pop-hover card-enter group cursor-pointer animate-card-pop hover:border-blue-700/50">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-slate-200 group-hover:text-blue-400 transition-colors duration-300">
            {testCase.title}
          </h3>
          <p className="text-sm text-slate-500 mt-1">{testCase.id}</p>
        </div>
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:scale-125 animate-pop ${
            typeColors[testCase.type] || 'bg-slate-800 text-slate-400'
          }`}
        >
          {testCase.type}
        </span>
      </div>
      <p className="text-sm text-slate-400 mb-4 line-clamp-2">
        {testCase.description}
      </p>
      <Link
        to={`/test-cases/${testCase.id}`}
        className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-all duration-300 group-hover:gap-2"
        onClick={(e) => {
          e.stopPropagation()
          e.currentTarget.classList.add('animate-button-pop')
        }}
      >
        Open Test Case
        <ArrowRightIcon className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110" />
      </Link>
    </div>
  )
}

export default TestCaseCard

