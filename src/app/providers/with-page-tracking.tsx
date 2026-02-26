import { logEvent } from '@shared/lib/helpers/analytics'
import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

export const WithPageTracking = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    logEvent({
      name: 'screen_view',
      params: { screen_name: pathname },
    })
  }, [pathname])

  return <Outlet />
}
