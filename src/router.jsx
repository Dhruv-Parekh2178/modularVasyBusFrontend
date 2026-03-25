import { createBrowserRouter } from 'react-router-dom'
import RootLayout from './components/layout/RootLayout'
import AdminRoute from './components/layout/AdminRoute'
import ProtectedRoute from './components/layout/ProtectedRoute'

const router = createBrowserRouter([
   {
    path: '/',
    element: <RootLayout />,
    children: [
   
    ],
  },
])

export default router