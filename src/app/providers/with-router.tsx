import { appRouter } from '../router/app-router'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'

export const WithRouter = () => {
  const router = createBrowserRouter(
    [
      {
        element: <Outlet />,
        children: appRouter,
      },
    ],
    { basename: import.meta.env.BASE_URL },
  )
  return <RouterProvider router={router} />
}
