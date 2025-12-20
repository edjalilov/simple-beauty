import { MainLayout } from '../layouts/main-layout'
import { homeRoutes } from './routes/home-routes'
import { Navigate, type RouteObject } from 'react-router-dom'

export const appRouter: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [homeRoutes],
  },
  {
    path: '*',
    element: <Navigate to={'/'} />,
  },
]
