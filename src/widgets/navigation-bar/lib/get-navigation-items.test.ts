import { getNavigationItems } from './get-navigation-items'
import {
  IconAnorPromotions,
  IconAnorPromotionsFilled,
  IconDeviceGamepad,
  IconDeviceGamepadFilled,
  IconHome,
  IconHomeFilled,
} from '@shared/ui/icons'
import { IconGift, IconGiftFilled } from '@shared/ui/icons'
import { describe, expect, it, vi } from 'vitest'

describe('getNavigationItems', () => {
  const mockT = vi.fn((key: string) => key)

  it('should return an array of 4 navigation items', () => {
    const items = getNavigationItems(mockT)

    expect(items).toHaveLength(4)
  })

  it('should return correct home item', () => {
    const items = getNavigationItems(mockT)

    expect(items[0]).toEqual({
      path: '/',
      icon: IconHome,
      iconFilled: IconHomeFilled,
      label: 'home',
    })
  })

  it('should return correct promotions item', () => {
    const items = getNavigationItems(mockT)

    expect(items[1]).toEqual({
      path: '/promotions',
      icon: IconAnorPromotions,
      iconFilled: IconAnorPromotionsFilled,
      label: 'promotions',
    })
  })

  it('should return correct gamification item', () => {
    const items = getNavigationItems(mockT)

    expect(items[2]).toEqual({
      path: '/gamification',
      icon: IconDeviceGamepad,
      iconFilled: IconDeviceGamepadFilled,
      label: 'gamifications',
    })
  })

  it('should return correct my-prizes item', () => {
    const items = getNavigationItems(mockT)

    expect(items[3]).toEqual({
      path: '/my-prizes',
      icon: IconGift,
      iconFilled: IconGiftFilled,
      label: 'myPrizes',
    })
  })

  it('should call t function with correct keys', () => {
    getNavigationItems(mockT)

    expect(mockT).toHaveBeenCalledWith('home')
    expect(mockT).toHaveBeenCalledWith('promotions')
    expect(mockT).toHaveBeenCalledWith('gamifications')
    expect(mockT).toHaveBeenCalledWith('myPrizes')
  })
})
