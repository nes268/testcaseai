import { useState, useEffect } from 'react'

function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            onComplete()
          }, 300)
          return 100
        }
        // Simulate loading with variable speed
        const increment = prev < 50 ? 3 : prev < 80 ? 2 : 1
        return Math.min(prev + increment, 100)
      })
    }, 50)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <div className="fixed inset-0 bg-slate-950 flex items-center justify-center z-50">
      <div className="text-center w-full max-w-md px-6">
        <div className="mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500 bg-clip-text text-transparent mb-2 animate-pulse">
            TestCaseAI
          </h1>
          <p className="text-slate-400 text-lg">
            AI-Powered Test Case Generation
          </p>
        </div>

        <div className="bg-slate-900/80 backdrop-blur-sm rounded-lg p-6 mb-6 border border-blue-900/40 shadow-2xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-400 text-sm font-medium">Loading...</span>
            <span className="text-blue-400 text-sm font-semibold animate-pop">{progress}%</span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-300 ease-out relative overflow-hidden"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-2">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen

