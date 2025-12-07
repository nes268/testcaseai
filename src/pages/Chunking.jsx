import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import mockChunks from '../mock/mockChunks.json'

function Chunking() {
  const [selectedChunks, setSelectedChunks] = useState(
    new Set(mockChunks.map((chunk) => chunk.id))
  )
  const navigate = useNavigate()

  const toggleChunk = (chunkId) => {
    const newSelected = new Set(selectedChunks)
    if (newSelected.has(chunkId)) {
      newSelected.delete(chunkId)
    } else {
      newSelected.add(chunkId)
    }
    setSelectedChunks(newSelected)
  }

  const handleRunAI = () => {
    navigate('/pipeline-status')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-slate-900/90 backdrop-blur-sm rounded-lg shadow-2xl border border-blue-900/40 p-8 animate-fade-in-up">
          <h1 className="text-3xl font-bold text-slate-200 mb-2 animate-fade-in">
            Document Parsing & Chunking
          </h1>
          <p className="text-slate-400 mb-8 animate-fade-in stagger-1">
            Review the parsed text chunks and select which ones to include in test
            case generation.
          </p>

          <div className="space-y-4 mb-8">
            {mockChunks.map((chunk, index) => (
              <div
                key={chunk.id}
                className={`border rounded-lg p-4 cursor-pointer transition-all duration-300 card-pop-hover ${
                  selectedChunks.has(chunk.id)
                    ? 'border-blue-600 bg-blue-950/40 shadow-xl shadow-blue-600/30 scale-[1.03] animate-pop'
                    : 'border-slate-800 hover:border-blue-600/50 hover:bg-blue-950/30'
                } animate-card-pop bg-slate-900/60`}
                onClick={() => {
                  toggleChunk(chunk.id)
                  const element = document.querySelector(`[data-chunk-id="${chunk.id}"]`)
                  if (element) {
                    element.classList.add('animate-spring-pop')
                  }
                }}
                data-chunk-id={chunk.id}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={(e) => {
                  if (!selectedChunks.has(chunk.id)) {
                    e.currentTarget.classList.add('animate-pop')
                  }
                }}
              >
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    checked={selectedChunks.has(chunk.id)}
                    onChange={() => toggleChunk(chunk.id)}
                    className="mt-1 mr-3 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded transition-all duration-300 hover:scale-125"
                    onClick={(e) => {
                      e.stopPropagation()
                      e.currentTarget.classList.add('animate-spring-pop')
                    }}
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-sm font-medium transition-colors ${
                        selectedChunks.has(chunk.id) ? 'text-blue-300' : 'text-slate-300'
                      }`}>
                        {chunk.section}
                      </span>
                      <span className="text-xs text-slate-500">Page {chunk.page}</span>
                    </div>
                    <p className="text-sm text-slate-400">{chunk.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center animate-fade-in stagger-4">
            <p className="text-sm text-slate-400 font-medium">
              {selectedChunks.size} of {mockChunks.length} chunks selected
            </p>
            <button
              onClick={(e) => {
                handleRunAI()
                e.currentTarget.classList.add('animate-spring-pop')
              }}
              disabled={selectedChunks.size === 0}
              className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg btn-pop shadow-lg hover:shadow-2xl disabled:bg-gray-300 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-lg disabled:opacity-50"
            >
              Run AI Generation
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Chunking

