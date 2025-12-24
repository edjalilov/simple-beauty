import type { INavigationItem, TFunction } from '@shared/types'
import {
  IconCalendar,
  IconCalendarFilled,
  IconHistory,
  IconHome,
  IconHomeFilled,
  IconProfile,
  IconProfileFilled,
} from '@shared/ui/icons'

export const getNavigationItems = (t: TFunction): INavigationItem[] => {
  return [
    { path: '/', icon: IconHome, iconFilled: IconHomeFilled, label: t('home') },
    {
      path: '/appointments',
      icon: IconCalendar,
      iconFilled: IconCalendarFilled,
      label: t('appointments'),
    },
    {
      path: '/history',
      icon: IconHistory,
      iconFilled: IconHistory,
      label: t('history'),
    },
    {
      path: '/profile',
      icon: IconProfile,
      iconFilled: IconProfileFilled,
      label: t('profile'),
    },
  ]
}
