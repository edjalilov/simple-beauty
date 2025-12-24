import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'

const AppointmentsPage = lazy(() =>
  import('@pages/appointments').then((m) => ({ default: m.AppointmentsPage })),
)

export const appointmentsRoutes: RouteObject = {
  path: '/appointments',
  element: <AppointmentsPage />,
}
