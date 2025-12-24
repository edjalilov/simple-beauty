import cn from './header-layout.module.css'

import { Box, TextInput } from '@mantine/core'

export const HeaderLayout = () => {
  return (
    <Box className={cn.container}>
      <TextInput placeholder="Search" />
    </Box>
  )
}
