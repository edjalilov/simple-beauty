import { getNavigationItems } from './get-navigation-items'
import {
  IconCalendar,
  IconCalendarFilled,
  IconHistory,
  IconHome,
  IconHomeFilled,
  IconProfile,
  IconProfileFilled,
} from '@shared/ui/icons'
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

  it('should return correct appointments item', () => {
    const items = getNavigationItems(mockT)

    expect(items[1]).toEqual({
      path: '/appointments',
      icon: IconCalendar,
      iconFilled: IconCalendarFilled,
      label: 'appointments',
    })
  })

  it('should return correct history item', () => {
    const items = getNavigationItems(mockT)

    expect(items[2]).toEqual({
      path: '/history',
      icon: IconHistory,
      iconFilled: IconHistory,
      label: 'history',
    })
  })

  it('should return correct profile item', () => {
    const items = getNavigationItems(mockT)

    expect(items[3]).toEqual({
      path: '/profile',
      icon: IconProfile,
      iconFilled: IconProfileFilled,
      label: 'profile',
    })
  })

  it('should call t function with correct keys', () => {
    getNavigationItems(mockT)

    expect(mockT).toHaveBeenCalledWith('home')
    expect(mockT).toHaveBeenCalledWith('appointments')
    expect(mockT).toHaveBeenCalledWith('history')
    expect(mockT).toHaveBeenCalledWith('profile')
  })
})
