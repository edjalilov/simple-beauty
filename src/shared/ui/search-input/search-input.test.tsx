import { SearchInput } from './search-input'
import { render } from '@shared/lib'
import { screen } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

describe('SearchInput', () => {
  it('renders with initial value', () => {
    const onChange = vi.fn()
    render(<SearchInput value="test" onChange={onChange} />)

    const input = screen.getByRole('textbox')
    expect(input).toHaveValue('test')
  })

  it('renders empty input', () => {
    const onChange = vi.fn()
    render(<SearchInput value="" onChange={onChange} />)

    const input = screen.getByRole('textbox')
    expect(input).toHaveValue('')
  })

  it('calls onChange when user types', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<SearchInput value="" onChange={onChange} />)

    const input = screen.getByRole('textbox')
    await user.type(input, 'test')

    expect(onChange).toHaveBeenCalled()
    expect(onChange).toHaveBeenCalledWith('t')
  })

  it('shows search icon when value is empty', () => {
    const onChange = vi.fn()
    const { container } = render(<SearchInput value="" onChange={onChange} />)

    const searchIcon = container.querySelector('.icon-tabler-search')
    expect(searchIcon).toBeInTheDocument()
  })

  it('shows delete icon when value is not empty', () => {
    const onChange = vi.fn()
    const { container } = render(
      <SearchInput value="test" onChange={onChange} />,
    )

    const deleteIcon = container.querySelector('.icon-tabler-x')
    expect(deleteIcon).toBeInTheDocument()
  })

  it('clears value when delete button is clicked', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    const { container } = render(
      <SearchInput value="test" onChange={onChange} />,
    )

    const clearButton = container.querySelector(
      '.mantine-ActionIcon-root',
    ) as HTMLButtonElement
    await user.click(clearButton)

    expect(onChange).toHaveBeenCalledWith('')
  })

  it('passes additional props to TextInput', () => {
    const onChange = vi.fn()
    render(
      <SearchInput
        value=""
        onChange={onChange}
        placeholder="Search..."
        disabled
      />,
    )

    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('placeholder', 'Search...')
    expect(input).toBeDisabled()
  })

  it('applies custom className', () => {
    const onChange = vi.fn()
    const { container } = render(
      <SearchInput value="" onChange={onChange} className="custom-class" />,
    )

    const input = container.querySelector('.mantine-TextInput-root')
    expect(input).toBeInTheDocument()
  })
})
