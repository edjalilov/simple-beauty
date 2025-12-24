import cn from './navigation.module.css'

import { NavigationItem } from './navigation-item'
import { render } from '@shared/lib'
import type { INavigationItem } from '@shared/types'
import { IconHome, IconHomeFilled } from '@shared/ui/icons'
import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

const TEST_LABEL = 'Test Label'
const TEST_PATH = '/'
const NON_ACTIVE_PATH = '/promotions'

const createMockItem = (
  path: string = TEST_PATH,
  label: string = TEST_LABEL,
): INavigationItem => ({
  path,
  icon: IconHome,
  iconFilled: IconHomeFilled,
  label,
})

describe('NavigationItem', () => {
  it('should render navigation item with label', () => {
    const mockItem = createMockItem()
    render(<NavigationItem item={mockItem} />)

    expect(screen.getByText(TEST_LABEL)).toBeInTheDocument()
  })

  it('should render as a link with correct href', () => {
    const mockItem = createMockItem()
    render(<NavigationItem item={mockItem} />)

    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', TEST_PATH)
  })

  it('should have navItem class', () => {
    const mockItem = createMockItem()
    render(<NavigationItem item={mockItem} />)

    const link = screen.getByRole('link')
    expect(link).toHaveClass(cn.navItem)
  })

  it('should render icon', () => {
    const mockItem = createMockItem()
    const { container } = render(<NavigationItem item={mockItem} />)

    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })

  it('should have active class when route matches', () => {
    const mockItem = createMockItem()
    render(<NavigationItem item={mockItem} />)

    const link = screen.getByRole('link')
    expect(link).toHaveClass(cn.active)
  })

  it('should not have active class when route does not match', () => {
    const nonActiveItem = createMockItem(NON_ACTIVE_PATH)
    render(<NavigationItem item={nonActiveItem} />)

    const link = screen.getByRole('link')
    expect(link).not.toHaveClass(cn.active)
  })

  it('should render label with correct class', () => {
    const mockItem = createMockItem()
    const { container } = render(<NavigationItem item={mockItem} />)

    const label = container.querySelector(`.${cn.navLabel}`)
    expect(label).toBeInTheDocument()
    expect(label).toHaveTextContent(TEST_LABEL)
  })
})
