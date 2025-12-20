import cn from './main-layout.module.css'

import { AppShell } from '@mantine/core'
import classNames from 'classnames'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
  return (
    <AppShell>
      <AppShell.Main className={classNames(cn.main)}>
        <ErrorBoundary fallback={'Error...'}>
          <Suspense>
            <Outlet />
          </Suspense>
        </ErrorBoundary>
      </AppShell.Main>
    </AppShell>
  )
}
