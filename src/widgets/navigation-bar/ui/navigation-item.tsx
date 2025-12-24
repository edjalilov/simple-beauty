import cn from './navigation.module.css'

import { Text } from '@mantine/core'
import type { INavigationItem } from '@shared/types'
import classNames from 'classnames'
import { NavLink, useMatch, useResolvedPath } from 'react-router-dom'

export const NavigationItem = ({ item }: { item: INavigationItem }) => {
  const resolved = useResolvedPath(item.path)
  const match = useMatch({ path: resolved.pathname + '/*', end: false })
  const isActive = Boolean(match)
  const Icon = isActive ? item.iconFilled : item.icon

  return (
    <NavLink
      to={item.path}
      className={classNames(cn.navItem, {
        [cn.active]: isActive,
      })}
    >
      <Icon size={24} stroke={1.5} />
      <Text className={cn.navLabel}>{item.label}</Text>
    </NavLink>
  )
}
