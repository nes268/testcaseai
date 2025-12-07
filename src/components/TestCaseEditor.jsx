function TestCaseEditor({ testCase, onUpdate }) {
  const handleChange = (field, value) => {
    onUpdate({ ...testCase, [field]: value })
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-slate-400 mb-2">
          Title
        </label>
        <input
          type="text"
          value={testCase.title || ''}
          onChange={(e) => handleChange('title', e.target.value)}
          className="w-full px-4 py-2 border border-slate-700 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-slate-950 text-slate-200"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-400 mb-2">
          Description
        </label>
        <textarea
          value={testCase.description || ''}
          onChange={(e) => handleChange('description', e.target.value)}
          rows={3}
          className="w-full px-4 py-2 border border-slate-700 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-slate-950 text-slate-200"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-400 mb-2">
          Preconditions
        </label>
        <div className="space-y-2">
          {testCase.preconditions?.map((precondition, index) => (
            <input
              key={index}
              type="text"
              value={precondition}
              onChange={(e) => {
                const updated = [...testCase.preconditions]
                updated[index] = e.target.value
                handleChange('preconditions', updated)
              }}
              className="w-full px-4 py-2 border border-slate-700 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-slate-950 text-slate-200"
            />
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-400 mb-2">
          Test Steps
        </label>
        <div className="space-y-2">
          {testCase.steps?.map((step, index) => (
            <div key={index} className="flex items-start space-x-2">
              <span className="mt-2 text-sm font-medium text-slate-500">
                {index + 1}.
              </span>
              <input
                type="text"
                value={step}
                onChange={(e) => {
                  const updated = [...testCase.steps]
                  updated[index] = e.target.value
                  handleChange('steps', updated)
                }}
                className="flex-1 px-4 py-2 border border-slate-700 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-slate-950 text-slate-200"
              />
            </div>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-400 mb-2">
          Expected Results
        </label>
        <div className="space-y-2">
          {testCase.expectedResults?.map((result, index) => (
            <input
              key={index}
              type="text"
              value={result}
              onChange={(e) => {
                const updated = [...testCase.expectedResults]
                updated[index] = e.target.value
                handleChange('expectedResults', updated)
              }}
              className="w-full px-4 py-2 border border-slate-700 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-slate-950 text-slate-200"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TestCaseEditor

