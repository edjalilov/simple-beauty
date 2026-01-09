import cn from './home-page.module.css'

import { Masters } from '@entities/master'
import { Service } from '@entities/service'
import { Stack } from '@mantine/core'
import { SearchInput } from '@shared/ui'
import { useState } from 'react'

export const HomePage = () => {
  const [searchValue, setSearchValue] = useState('')

  return (
    <Stack display="flex" gap={16} className={cn.container}>
      <SearchInput
        placeholder="Search"
        radius="xl"
        size="md"
        value={searchValue}
        onChange={setSearchValue}
      />
      <Service />
      <Masters />
    </Stack>
  )
}
