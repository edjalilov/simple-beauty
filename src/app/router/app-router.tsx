import { MainLayout } from '../layouts/main-layout'
import { appointmentsRoutes } from './routes/appointments-routes'
import { historyRoutes } from './routes/history-routes'
import { homeRoutes } from './routes/home-routes'
import { profileRoutes } from './routes/profile-routes'
import { Navigate, type RouteObject } from 'react-router-dom'

export const appRouter: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [homeRoutes, appointmentsRoutes, historyRoutes, profileRoutes],
  },
  {
    path: '*',
    element: <Navigate to={'/'} />,
  },
]
