import cn from './search-input.module.css'

import { ActionIcon, TextInput, type TextInputProps } from '@mantine/core'
import { IconDelete, IconSearch } from '@shared/ui/icons'

interface SearchInputProps extends Omit<
  TextInputProps,
  'rightSection' | 'onChange'
> {
  value: string
  onChange: (value: string) => void
}

export const SearchInput = ({
  value,
  onChange,
  className,
  ...props
}: SearchInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value)
  }

  const handleClear = () => {
    onChange('')
  }

  return (
    <TextInput
      value={value}
      onChange={handleChange}
      className={cn.searchInput}
      rightSectionPointerEvents={value ? 'auto' : 'none'}
      rightSection={
        <ActionIcon variant="transparent" onClick={handleClear}>
          {value ? <IconDelete /> : <IconSearch />}
        </ActionIcon>
      }
      {...props}
    />
  )
}
