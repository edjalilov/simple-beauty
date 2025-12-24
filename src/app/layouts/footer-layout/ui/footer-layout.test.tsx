import { FooterLayout } from './footer-layout'
import { render } from '@shared/lib'
import { screen } from '@testing-library/dom'
import { describe, expect, it, vi } from 'vitest'

vi.mock('@widgets/navigation-bar', () => ({
  Navigation: () => <div data-testid="navigation">Navigation</div>,
}))

describe('FooterLayout', () => {
  it('should render container with Navigation', () => {
    render(<FooterLayout />)

    expect(screen.getByTestId('navigation')).toBeInTheDocument()
  })
})
