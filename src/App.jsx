import { useState, useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes.jsx'
import LoadingScreen from './components/LoadingScreen.jsx'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate initial app loading
    // In a real app, this could be checking auth, loading config, etc.
  }, [])

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />
  }

  return <RouterProvider router={router} />
}

export default App

