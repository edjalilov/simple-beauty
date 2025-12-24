import cn from './main-layout.module.css'

import { FooterLayout } from '../../footer-layout'
import { HeaderLayout } from '../../header-layout'
import { AppShell, ScrollArea } from '@mantine/core'
import { ASSETS } from '@shared/constants'
import { ErrorMessage, Loader } from '@shared/ui'
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
    <AppShell
      className={cn.layout}
      header={{ height: 50 }}
      footer={{ height: 65 }}
      padding="md"
    >
      <AppShell.Header className={cn.header} withBorder={false}>
        <HeaderLayout />
      </AppShell.Header>

      <AppShell.Main className={cn.main}>
        <ErrorBoundary fallback={fallback}>
          <Suspense fallback={<Loader />}>
            <ScrollArea h="100%" mx="auto" scrollbarSize={0}>
              <Outlet />
            </ScrollArea>
          </Suspense>
        </ErrorBoundary>
      </AppShell.Main>

      <AppShell.Footer className={cn.footer} p="xs" withBorder={false}>
        <FooterLayout />
      </AppShell.Footer>
    </AppShell>
  )
}
