import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Upload from './pages/Upload.jsx'
import Chunking from './pages/Chunking.jsx'
import PipelineStatus from './pages/PipelineStatus.jsx'
import TestCases from './pages/TestCases.jsx'
import TestCaseDetail from './pages/TestCaseDetail.jsx'
import Integrations from './pages/Integrations.jsx'
import Settings from './pages/Settings.jsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/upload',
    element: <Upload />,
  },
  {
    path: '/chunking',
    element: <Chunking />,
  },
  {
    path: '/pipeline-status',
    element: <PipelineStatus />,
  },
  {
    path: '/test-cases',
    element: <TestCases />,
  },
  {
    path: '/test-cases/:id',
    element: <TestCaseDetail />,
  },
  {
    path: '/integrations',
    element: <Integrations />,
  },
  {
    path: '/settings',
    element: <Settings />,
  },
])

