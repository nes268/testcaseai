import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { CloudArrowUpIcon } from '@heroicons/react/24/outline'

function UploadDropzone({ onFileAccepted, fileName }) {
  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        onFileAccepted(acceptedFiles[0])
      }
    },
    [onFileAccepted]
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
    },
    multiple: false,
  })

  return (
    <div className="w-full animate-fade-in-up">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-all duration-300 ${
          isDragActive
            ? 'border-blue-600 bg-blue-950/40 scale-105 shadow-xl shadow-blue-600/40'
            : 'border-slate-700 hover:border-blue-600 hover:bg-blue-950/30 hover:scale-[1.02]'
        }`}
      >
        <input {...getInputProps()} />
        <div className={`transition-all duration-300 ${isDragActive ? 'animate-spring-pop' : ''}`}>
          <CloudArrowUpIcon className={`mx-auto h-12 w-12 mb-4 transition-all duration-300 ${
            isDragActive 
              ? 'text-blue-400 scale-125 animate-pop-strong' 
              : 'text-slate-500 group-hover:text-blue-400 hover:scale-110'
          }`} />
        </div>
        {fileName ? (
          <div className="animate-scale-in">
            <div className="flex items-center justify-center mb-2">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm font-medium text-slate-200">{fileName}</p>
            </div>
            <p className="text-xs text-slate-500 mt-2">Click to change file</p>
          </div>
        ) : (
          <div>
            <p className={`text-sm mb-2 transition-all duration-300 ${
              isDragActive 
                ? 'text-blue-400 font-semibold' 
                : 'text-slate-400'
            }`}>
              {isDragActive
                ? 'Drop the PDF here'
                : 'Drag & drop a PDF file here, or click to select'}
            </p>
            <p className="text-xs text-slate-500">
              Supports large healthcare/finance regulatory PDFs
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default UploadDropzone

