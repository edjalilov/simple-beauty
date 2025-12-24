import cn from './footer-layout.module.css'

import { Box } from '@mantine/core'
import { Navigation } from '@widgets/navigation-bar'

export const FooterLayout = () => {
  return (
    <Box className={cn.container}>
      <Navigation />
    </Box>
  )
}
