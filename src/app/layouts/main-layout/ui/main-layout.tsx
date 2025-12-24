import cn from './main-layout.module.css'

import { AppShell } from '@mantine/core'
import { ASSETS } from '@shared/constants/assets'
import { ErrorMessage } from '@shared/ui/error-message/error-message'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useTranslation } from 'react-i18next'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
  const { t } = useTranslation()

  const fallback = (
    <ErrorMessage
      title={t('errorTitle')}
      text={t('errorSubtitle')}
      image={ASSETS.BUG_FIXING}
    />
  )

  return (
    <AppShell>
      <AppShell.Main className={cn.main}>
        <ErrorBoundary fallback={fallback}>
          <Suspense>
            <Outlet />
          </Suspense>
        </ErrorBoundary>
      </AppShell.Main>
    </AppShell>
  )
}
