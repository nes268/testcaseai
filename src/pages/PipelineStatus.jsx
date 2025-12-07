import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import ProgressStepper from '../components/ProgressStepper'
import mockPipeline from '../mock/mockPipeline.json'

function PipelineStatus() {
  const [pipeline, setPipeline] = useState(mockPipeline)
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      setPipeline((prev) => {
        const currentStageIndex = prev.stages.findIndex(
          (s) => s.status === 'in-progress'
        )
        if (currentStageIndex === -1) return prev

        const updatedStages = [...prev.stages]
        const currentStage = updatedStages[currentStageIndex]

        if (currentStage.progress < 100) {
          updatedStages[currentStageIndex] = {
            ...currentStage,
            progress: Math.min(currentStage.progress + 10, 100),
          }
        } else if (currentStageIndex < updatedStages.length - 1) {
          updatedStages[currentStageIndex] = {
            ...currentStage,
            status: 'completed',
          }
          updatedStages[currentStageIndex + 1] = {
            ...updatedStages[currentStageIndex + 1],
            status: 'in-progress',
          }
        } else {
          updatedStages[currentStageIndex] = {
            ...currentStage,
            status: 'completed',
          }
          setTimeout(() => navigate('/test-cases'), 1000)
        }

        const overallProgress =
          updatedStages.reduce((sum, s) => sum + s.progress, 0) /
          (updatedStages.length * 100)

        return {
          ...prev,
          stages: updatedStages,
          overallProgress: Math.round(overallProgress * 100),
        }
      })
    }, 500)

    return () => clearInterval(interval)
  }, [navigate])

  const currentStageIndex = pipeline.stages.findIndex(
    (s) => s.status === 'in-progress'
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-slate-900/90 backdrop-blur-sm rounded-lg shadow-2xl border border-blue-900/40 p-8 animate-fade-in-up">
          <h1 className="text-3xl font-bold text-slate-200 mb-2 animate-fade-in">
            AI Pipeline Status
          </h1>
          <p className="text-slate-400 mb-8 animate-fade-in stagger-1">
            Your document is being processed. This may take a few moments.
          </p>

          <div className="mb-8 animate-fade-in stagger-2">
            <ProgressStepper
              stages={pipeline.stages}
              currentStage={currentStageIndex >= 0 ? currentStageIndex : 0}
            />
          </div>

          <div className="bg-slate-950/60 rounded-lg p-6 animate-scale-in stagger-3 border border-blue-900/30">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium text-slate-400">
                Overall Progress
              </span>
              <span className="text-sm font-semibold text-blue-400 animate-pop">
                {pipeline.overallProgress}%
              </span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500 ease-out relative"
                style={{ width: `${pipeline.overallProgress}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-2">
              Estimated time remaining: {pipeline.estimatedTimeRemaining}
            </p>
          </div>

          <div className="mt-8 space-y-4">
            {pipeline.stages.map((stage, index) => (
              <div
                key={stage.id}
                className={`flex items-center justify-between p-4 bg-slate-950/60 rounded-lg transition-all duration-300 hover-lift animate-fade-in-up border border-slate-800 ${
                  stage.status === 'completed' ? 'border-l-4 border-green-500' :
                  stage.status === 'in-progress' ? 'border-l-4 border-blue-500 shadow-lg shadow-blue-500/30' : ''
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <span className="text-sm font-medium text-slate-300">
                  {stage.name}
                </span>
                <span
                  className={`text-sm font-medium transition-all duration-300 ${
                    stage.status === 'completed'
                      ? 'text-green-400'
                      : stage.status === 'in-progress'
                      ? 'text-blue-400 animate-pulse'
                      : 'text-slate-600'
                  }`}
                >
                  {stage.status === 'completed'
                    ? '✓ Completed'
                    : stage.status === 'in-progress'
                    ? `⟳ In Progress (${stage.progress}%)`
                    : '○ Pending'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default PipelineStatus

