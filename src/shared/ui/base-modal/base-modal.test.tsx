import { BaseModal } from './base-modal'
import { render } from '@shared/lib'
import { screen } from '@testing-library/dom'
import { userEvent } from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

describe('BaseModal', () => {
  it('should render children when opened', () => {
    const onCloseMock = vi.fn()

    render(
      <BaseModal opened onClose={onCloseMock}>
        <div>Test content</div>
      </BaseModal>,
    )

    expect(screen.getByText('Test content')).toBeInTheDocument()
  })

  it('should not render children when closed', () => {
    const onCloseMock = vi.fn()

    render(
      <BaseModal opened={false} onClose={onCloseMock}>
        <div>Test content</div>
      </BaseModal>,
    )

    expect(screen.queryByText('Test content')).not.toBeInTheDocument()
  })

  it('should pass custom props to Modal component', () => {
    const onCloseMock = vi.fn()

    render(
      <BaseModal opened onClose={onCloseMock} title="Custom Title">
        <div>Test content</div>
      </BaseModal>,
    )

    expect(screen.getByText('Custom Title')).toBeInTheDocument()
  })

  it('should render multiple children elements', () => {
    const onCloseMock = vi.fn()

    render(
      <BaseModal opened onClose={onCloseMock}>
        <div>First element</div>
        <div>Second element</div>
      </BaseModal>,
    )

    expect(screen.getByText('First element')).toBeInTheDocument()
    expect(screen.getByText('Second element')).toBeInTheDocument()
  })

  it('should call onClose when clicking on overlay', async () => {
    const user = userEvent.setup()
    const onCloseMock = vi.fn()

    render(
      <BaseModal opened onClose={onCloseMock}>
        <div>Test content</div>
      </BaseModal>,
    )

    const overlay = document.querySelector('.mantine-Modal-overlay')
    if (overlay) {
      await user.click(overlay)
    }

    expect(onCloseMock).toHaveBeenCalledTimes(1)
  })
})
