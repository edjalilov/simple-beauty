import type { INavigationItem, TFunction } from '@shared/types'
import {
  IconAnorPromotions,
  IconAnorPromotionsFilled,
  IconDeviceGamepad,
  IconDeviceGamepadFilled,
  IconGift,
  IconGiftFilled,
  IconHome,
  IconHomeFilled,
} from '@shared/ui/icons'

export const getNavigationItems = (t: TFunction): INavigationItem[] => {
  return [
    { path: '/', icon: IconHome, iconFilled: IconHomeFilled, label: t('home') },
    {
      path: '/appointments',
      icon: IconAnorPromotions,
      iconFilled: IconAnorPromotionsFilled,
      label: t('appointments'),
    },
    {
      path: '/history',
      icon: IconDeviceGamepad,
      iconFilled: IconDeviceGamepadFilled,
      label: t('history'),
    },
    {
      path: '/profile',
      icon: IconGift,
      iconFilled: IconGiftFilled,
      label: t('profile'),
    },
  ]
}
