import { CheckCircleIcon, ClockIcon } from '@heroicons/react/24/solid'

function ProgressStepper({ stages, currentStage }) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        {stages.map((stage, index) => {
          const isCompleted = index < currentStage
          const isCurrent = index === currentStage
          const isPending = index > currentStage

          return (
            <div key={stage.id} className="flex-1 flex items-center">
              <div className="flex flex-col items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                    isCompleted
                      ? 'bg-green-500 scale-110 shadow-lg shadow-green-500/50'
                      : isCurrent
                      ? 'bg-blue-500 scale-110 shadow-lg shadow-blue-500/50 animate-pulse'
                      : 'bg-slate-800 scale-100'
                  }`}
                >
                  {isCompleted ? (
                    <CheckCircleIcon className="w-6 h-6 text-white animate-bounce-in" />
                  ) : (
                    <ClockIcon className={`w-6 h-6 text-white ${isCurrent ? 'animate-spin' : ''}`} style={{ animationDuration: '2s' }} />
                  )}
                </div>
                <p
                  className={`mt-2 text-xs font-medium transition-colors duration-300 ${
                    isCurrent ? 'text-blue-400 font-semibold' : isCompleted ? 'text-green-400' : 'text-slate-600'
                  }`}
                >
                  {stage.name}
                </p>
              </div>
              {index < stages.length - 1 && (
                <div className="flex-1 mx-2 relative">
                  <div className="h-1 bg-slate-800 rounded-full"></div>
                  <div
                    className={`h-1 rounded-full transition-all duration-700 ease-out absolute top-0 left-0 ${
                      isCompleted ? 'bg-green-500 w-full' : 'bg-slate-800 w-0'
                    }`}
                  />
                </div>
              )}
            </div>
          )
        })}
      </div>
      <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
        <div
          className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-500 ease-out relative"
          style={{ width: `${stages[currentStage]?.progress || 0}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
        </div>
      </div>
    </div>
  )
}

export default ProgressStepper

