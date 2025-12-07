import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import UploadDropzone from '../components/UploadDropzone'

function Upload() {
  const [fileName, setFileName] = useState(null)
  const navigate = useNavigate()

  const handleFileAccepted = (file) => {
    setFileName(file.name)
  }

  const handleContinue = () => {
    if (fileName) {
      navigate('/chunking')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-slate-900/90 backdrop-blur-sm rounded-lg shadow-2xl border border-blue-900/40 p-8 animate-fade-in-up">
          <h1 className="text-3xl font-bold text-slate-200 mb-2 animate-fade-in">
            Upload Requirement Document
          </h1>
          <p className="text-slate-400 mb-8 animate-fade-in stagger-1">
            Upload your PDF document to begin the AI-powered test case generation
            process.
          </p>

          <UploadDropzone
            onFileAccepted={handleFileAccepted}
            fileName={fileName}
          />

          {fileName && (
            <div className="mt-6 animate-scale-in">
              <button
                onClick={(e) => {
                  handleContinue()
                  e.currentTarget.classList.add('animate-spring-pop')
                }}
                className="w-full px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg btn-pop shadow-lg hover:shadow-2xl"
              >
                Continue to Parsing
              </button>
            </div>
          )}

          <p className="mt-6 text-sm text-slate-500 text-center animate-fade-in stagger-2">
            Supports large healthcare/finance regulatory PDFs.
          </p>
        </div>
      </main>
    </div>
  )
}

export default Upload

