import cn from './navigation.module.css'

import { getNavigationItems } from '../lib'
import { NavigationItem } from './navigation-item'
import { Group } from '@mantine/core'
import type { TFunction } from '@shared/types'
import { useTranslation } from 'react-i18next'

export const Navigation = () => {
  const { t } = useTranslation()
  const navigationItems = getNavigationItems(t as TFunction)

  return (
    <Group className={cn.navigation}>
      {navigationItems.map((item) => (
        <NavigationItem key={item.path} item={item} />
      ))}
    </Group>
  )
}
