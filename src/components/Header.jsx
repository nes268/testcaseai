import { Link, useLocation } from 'react-router-dom'
import { UserCircleIcon } from '@heroicons/react/24/outline'

function Header() {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/upload', label: 'Upload' },
    { path: '/test-cases', label: 'Test Cases' },
    { path: '/integrations', label: 'Integrations' },
    { path: '/settings', label: 'Settings' },
  ]

  return (
    <header className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 shadow-2xl border-b border-blue-900/30 sticky top-0 z-40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center group">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-110">
                TestCaseAI
              </span>
            </Link>
            <nav className="hidden md:flex space-x-4">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative ${
                    isActive(link.path)
                      ? 'bg-blue-700/60 text-white scale-105 shadow-lg shadow-blue-600/40'
                      : 'text-slate-400 hover:bg-blue-900/40 hover:text-blue-300 hover:scale-105'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400 rounded-full animate-scale-in"></span>
                  )}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center">
            <button className="p-2 rounded-full hover:bg-blue-900/40 transition-all duration-300 hover:scale-110 active:scale-95 group">
              <UserCircleIcon className="h-6 w-6 text-slate-400 group-hover:text-blue-400 transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

