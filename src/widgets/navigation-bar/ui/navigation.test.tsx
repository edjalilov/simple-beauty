import cn from './navigation.module.css'

import { getNavigationItems } from '../lib'
import { Navigation } from './navigation'
import { render } from '@shared/lib'
import type { TFunction } from '@shared/types'
import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

const navigationItems = getNavigationItems(
  ((key: string) => key) as unknown as TFunction,
)

describe('Navigation', () => {
  it('should render all navigation items', () => {
    render(<Navigation />)

    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(navigationItems.length)
  })

  it('should render navigation container with correct class', () => {
    const { container } = render(<Navigation />)

    const navigation = container.querySelector(`.${cn.navigation}`)
    expect(navigation).toBeInTheDocument()
  })

  it('should have correct href attributes for each navigation item', () => {
    render(<Navigation />)

    const links = screen.getAllByRole('link')
    const hrefs = links.map((link) => link.getAttribute('href'))

    navigationItems.forEach((item) => {
      expect(hrefs).toContain(item.path)
    })
  })
})
