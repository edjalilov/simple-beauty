import {
  IconCalendar,
  IconCalendarFilled,
  IconHistory,
  IconHome,
  IconHomeFilled,
  IconProfile,
  IconProfileFilled,
} from './'

import { render } from '@shared/lib'
import { describe, expect, it } from 'vitest'

describe('Icons', () => {
  describe('IconProfile', () => {
    it('should render svg element', () => {
      const { container } = render(<IconProfile />)
      const svg = container.querySelector('svg')
      expect(svg).toBeInTheDocument()
      expect(svg).toHaveAttribute('width', '24')
      expect(svg).toHaveAttribute('height', '24')
    })
  })

  describe('IconProfileFilled', () => {
    it('should render svg element', () => {
      const { container } = render(<IconProfileFilled />)
      const svg = container.querySelector('svg')
      expect(svg).toBeInTheDocument()
      expect(svg).toHaveAttribute('width', '24')
      expect(svg).toHaveAttribute('height', '24')
    })
  })

  describe('IconHome', () => {
    it('should render svg element', () => {
      const { container } = render(<IconHome />)
      const svg = container.querySelector('svg')
      expect(svg).toBeInTheDocument()
      expect(svg).toHaveAttribute('width', '24')
      expect(svg).toHaveAttribute('height', '24')
    })
  })

  describe('IconHomeFilled', () => {
    it('should render svg element', () => {
      const { container } = render(<IconHomeFilled />)
      const svg = container.querySelector('svg')
      expect(svg).toBeInTheDocument()
      expect(svg).toHaveAttribute('width', '24')
      expect(svg).toHaveAttribute('height', '24')
    })
  })

  describe('IconHistory', () => {
    it('should render svg element', () => {
      const { container } = render(<IconHistory />)
      const svg = container.querySelector('svg')
      expect(svg).toBeInTheDocument()
      expect(svg).toHaveAttribute('width', '24')
      expect(svg).toHaveAttribute('height', '24')
    })
  })
  describe('IconCalendar', () => {
    it('should render svg element', () => {
      const { container } = render(<IconCalendar />)
      const svg = container.querySelector('svg')
      expect(svg).toBeInTheDocument()
      expect(svg).toHaveAttribute('width', '24')
      expect(svg).toHaveAttribute('height', '24')
    })
  })
  describe('IconCalendarFilled', () => {
    it('should render svg element', () => {
      const { container } = render(<IconCalendarFilled />)
      const svg = container.querySelector('svg')
      expect(svg).toBeInTheDocument()
      expect(svg).toHaveAttribute('width', '24')
      expect(svg).toHaveAttribute('height', '24')
    })
  })
})
