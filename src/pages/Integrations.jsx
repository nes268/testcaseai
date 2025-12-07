import { useState } from 'react'
import Header from '../components/Header'
import {
  ArrowDownTrayIcon,
  ArrowUpTrayIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline'

function Integrations() {
  const [jiraConnected, setJiraConnected] = useState(false)
  const [testRailConnected, setTestRailConnected] = useState(false)

  const handleExport = (format) => {
    alert(`Exporting test cases to ${format}...`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-3xl font-bold text-slate-200 mb-2">
            Integrations & Export
          </h1>
          <p className="text-slate-400">
            Export your test cases or connect with external QA tools
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-900/90 backdrop-blur-sm rounded-lg shadow-2xl border border-blue-900/40 p-8 animate-fade-in-up stagger-1 hover-lift">
            <h2 className="text-xl font-semibold text-slate-200 mb-6">
              Export Options
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <button
                onClick={(e) => {
                  handleExport('CSV')
                  e.currentTarget.classList.add('animate-spring-pop')
                }}
                className="flex items-center justify-center px-6 py-4 border-2 border-slate-800 rounded-lg hover:border-blue-600 hover:bg-blue-950/40 transition-all duration-300 hover-scale btn-pop group"
              >
                <ArrowDownTrayIcon className="h-6 w-6 text-slate-500 mr-3 group-hover:text-blue-400 transition-all duration-300 group-hover:animate-bounce group-hover:scale-125" />
                <span className="font-medium text-slate-400 group-hover:text-blue-400 transition-colors">Export to CSV</span>
              </button>
              <button
                onClick={(e) => {
                  handleExport('Excel')
                  e.currentTarget.classList.add('animate-spring-pop')
                }}
                className="flex items-center justify-center px-6 py-4 border-2 border-slate-800 rounded-lg hover:border-blue-600 hover:bg-blue-950/40 transition-all duration-300 hover-scale btn-pop group"
              >
                <ArrowDownTrayIcon className="h-6 w-6 text-slate-500 mr-3 group-hover:text-blue-400 transition-all duration-300 group-hover:animate-bounce group-hover:scale-125" />
                <span className="font-medium text-slate-400 group-hover:text-blue-400 transition-colors">
                  Export to Excel
                </span>
              </button>
            </div>
          </div>

          <div className="bg-slate-900/90 backdrop-blur-sm rounded-lg shadow-2xl border border-blue-900/40 p-8 animate-fade-in-up stagger-2 hover-lift">
            <h2 className="text-xl font-semibold text-slate-200 mb-6">
              External Integrations
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-slate-800 rounded-lg hover-lift transition-all duration-300 hover:border-blue-600/50 bg-slate-950/40">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-950/60 rounded-lg flex items-center justify-center mr-4 transition-transform duration-300 hover:scale-110">
                    <span className="text-blue-400 font-bold">J</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-200">Jira</h3>
                    <p className="text-sm text-slate-500">
                      Sync test cases to Jira
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setJiraConnected(!jiraConnected)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 btn-pop ${
                    jiraConnected
                      ? 'bg-green-950/60 text-green-400 scale-105 border border-green-600/50'
                      : 'bg-blue-700 text-white hover:bg-blue-800'
                  }`}
                >
                  {jiraConnected ? (
                    <span className="flex items-center animate-bounce-in">
                      <CheckCircleIcon className="h-4 w-4 mr-1" />
                      Connected
                    </span>
                  ) : (
                    'Connect'
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between p-4 border border-slate-800 rounded-lg hover-lift transition-all duration-300 hover:border-blue-600/50 bg-slate-950/40">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-950/60 rounded-lg flex items-center justify-center mr-4 transition-transform duration-300 hover:scale-110">
                    <span className="text-purple-400 font-bold">TR</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-200">TestRail</h3>
                    <p className="text-sm text-slate-500">
                      Import test cases to TestRail
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setTestRailConnected(!testRailConnected)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 btn-pop ${
                    testRailConnected
                      ? 'bg-green-950/60 text-green-400 scale-105 border border-green-600/50'
                      : 'bg-blue-700 text-white hover:bg-blue-800'
                  }`}
                >
                  {testRailConnected ? (
                    <span className="flex items-center animate-bounce-in">
                      <CheckCircleIcon className="h-4 w-4 mr-1" />
                      Connected
                    </span>
                  ) : (
                    'Connect'
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/90 backdrop-blur-sm rounded-lg shadow-2xl border border-blue-900/40 p-8 animate-fade-in-up stagger-3 hover-lift">
            <h2 className="text-xl font-semibold text-slate-200 mb-6">
              Output Formatting Options
            </h2>
            <div className="space-y-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-700 rounded bg-slate-950"
                />
                <span className="ml-3 text-sm text-slate-400">
                  Include traceability links
                </span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-700 rounded bg-slate-950"
                />
                <span className="ml-3 text-sm text-slate-400">
                  Include preconditions
                </span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-700 rounded bg-slate-950"
                />
                <span className="ml-3 text-sm text-slate-400">
                  Include test data
                </span>
              </label>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Integrations

