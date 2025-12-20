import cn from './home-page.module.css'

import { Stack, Text } from '@mantine/core'

export const HomePage = () => {
  return (
    <Stack display="flex" gap={16} className={cn.container}>
      <Text>Home Page</Text>
    </Stack>
  )
}
