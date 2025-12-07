import { DocumentTextIcon } from '@heroicons/react/24/outline'

function TraceabilityPane({ traceability }) {
  if (!traceability) {
    return (
      <div className="bg-slate-900/80 rounded-lg p-6 text-center text-slate-500 border border-slate-800">
        No traceability information available
      </div>
    )
  }

  return (
    <div className="bg-blue-950/30 rounded-lg p-6 border border-blue-900/50 hover-lift transition-all duration-300">
      <div className="flex items-center mb-4">
        <DocumentTextIcon className="h-5 w-5 text-blue-400 mr-2 transition-transform duration-300 hover:rotate-12" />
        <h3 className="text-lg font-semibold text-slate-200">
          Requirement Traceability
        </h3>
      </div>

      <div className="space-y-4">
        <div className="animate-fade-in-up stagger-1">
          <p className="text-sm font-medium text-blue-300 mb-1">
            Requirement ID
          </p>
          <p className="text-sm text-slate-200 font-medium">{traceability.requirementId}</p>
        </div>

        <div className="animate-fade-in-up stagger-2">
          <p className="text-sm font-medium text-blue-300 mb-1">Section</p>
          <p className="text-sm text-slate-200">{traceability.section}</p>
        </div>

        <div className="animate-fade-in-up stagger-3">
          <p className="text-sm font-medium text-blue-300 mb-1">
            Page Number
          </p>
          <p className="text-sm text-slate-200">Page {traceability.page}</p>
        </div>

        <div className="animate-fade-in-up stagger-4">
          <p className="text-sm font-medium text-blue-300 mb-2">
            Original Text
          </p>
          <div className="bg-slate-950/60 rounded-md p-4 border border-slate-800 hover:shadow-sm transition-all duration-300">
            <p className="text-sm text-slate-400 italic">
              "{traceability.originalText}"
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TraceabilityPane

