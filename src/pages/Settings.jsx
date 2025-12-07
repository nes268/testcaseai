import { useState } from 'react'
import Header from '../components/Header'

function Settings() {
  const [model, setModel] = useState('gpt-4')
  const [theme, setTheme] = useState('light')

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-3xl font-bold text-slate-200 mb-2">Settings</h1>
          <p className="text-slate-400">
            Manage your application preferences and configuration
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-900/90 backdrop-blur-sm rounded-lg shadow-2xl border border-blue-900/40 p-8 animate-fade-in-up stagger-1 hover-lift">
            <h2 className="text-xl font-semibold text-slate-200 mb-6">
              AI Model Selection
            </h2>
            <div className="space-y-4">
              <label className="block">
                <span className="text-sm font-medium text-slate-400 mb-2 block">
                  Model
                </span>
                <select
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-600/50 bg-slate-950 text-slate-200"
                >
                  <option value="gpt-4">GPT-4</option>
                  <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
                  <option value="claude-3">Claude 3</option>
                </select>
              </label>
              <p className="text-sm text-slate-500">
                Choose the AI model for test case generation
              </p>
            </div>
          </div>

          <div className="bg-slate-900/90 backdrop-blur-sm rounded-lg shadow-2xl border border-blue-900/40 p-8 animate-fade-in-up stagger-2 hover-lift">
            <h2 className="text-xl font-semibold text-slate-200 mb-6">
              Appearance
            </h2>
            <div className="space-y-4">
              <label className="block">
                <span className="text-sm font-medium text-slate-400 mb-2 block">
                  Theme
                </span>
                <div className="flex space-x-4">
                  <button
                    onClick={() => setTheme('light')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 btn-pop ${
                      theme === 'light'
                        ? 'bg-blue-700 text-white scale-105 shadow-lg shadow-blue-600/40'
                        : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                    }`}
                  >
                    Light
                  </button>
                  <button
                    onClick={() => setTheme('dark')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 btn-pop ${
                      theme === 'dark'
                        ? 'bg-blue-700 text-white scale-105 shadow-lg shadow-blue-600/40'
                        : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                    }`}
                  >
                    Dark
                  </button>
                </div>
              </label>
            </div>
          </div>

          <div className="bg-slate-900/90 backdrop-blur-sm rounded-lg shadow-2xl border border-blue-900/40 p-8 animate-fade-in-up stagger-3 hover-lift">
            <h2 className="text-xl font-semibold text-slate-200 mb-6">
              Team Members
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-slate-800 rounded-lg hover-lift transition-all duration-300 bg-slate-950/40">
                <div>
                  <p className="font-medium text-slate-200">John Doe</p>
                  <p className="text-sm text-slate-500">john.doe@example.com</p>
                </div>
                <span className="px-3 py-1 bg-green-950/60 text-green-400 rounded-full text-xs font-medium transition-transform duration-300 hover:scale-110 border border-green-600/50">
                  Admin
                </span>
              </div>
              <button className="w-full px-4 py-2 border-2 border-dashed border-slate-800 rounded-lg text-slate-500 hover:border-blue-600 hover:text-blue-400 transition-all duration-300 hover-scale">
                + Add Team Member
              </button>
            </div>
          </div>

          <div className="bg-slate-900/90 backdrop-blur-sm rounded-lg shadow-2xl border border-blue-900/40 p-8 animate-fade-in-up stagger-4 hover-lift">
            <h2 className="text-xl font-semibold text-slate-200 mb-6">
              App Preferences
            </h2>
            <div className="space-y-4">
              <label className="flex items-center cursor-pointer group">
                <input
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-700 rounded transition-all duration-300 group-hover:scale-110 bg-slate-950"
                />
                <span className="ml-3 text-sm text-slate-400 group-hover:text-blue-400 transition-colors">
                  Auto-save test cases
                </span>
              </label>
              <label className="flex items-center cursor-pointer group">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-700 rounded transition-all duration-300 group-hover:scale-110 bg-slate-950"
                />
                <span className="ml-3 text-sm text-slate-400 group-hover:text-blue-400 transition-colors">
                  Email notifications
                </span>
              </label>
              <label className="flex items-center cursor-pointer group">
                <input
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-700 rounded transition-all duration-300 group-hover:scale-110 bg-slate-950"
                />
                <span className="ml-3 text-sm text-slate-400 group-hover:text-blue-400 transition-colors">
                  Show traceability by default
                </span>
              </label>
            </div>
          </div>

          <div className="flex justify-end animate-fade-in stagger-5">
            <button 
              onClick={(e) => {
                e.currentTarget.classList.add('animate-spring-pop')
                setTimeout(() => alert('Settings saved!'), 300)
              }}
              className="px-6 py-2 bg-blue-700 text-white font-semibold rounded-lg btn-pop shadow-lg shadow-blue-600/40 hover:shadow-2xl"
            >
              Save Settings
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Settings

