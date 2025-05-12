import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import { authLoader } from './utils/authLoader'
import { redirectIfAuthed } from './utils/redirectIfAuthed'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/login',
      loader: redirectIfAuthed,
      element: <Login />
    },
    {
      path: '/dashboard',
      loader: authLoader,
      element: <Dashboard />
    }
  ])

  return <RouterProvider router={router} />
}

export default App
