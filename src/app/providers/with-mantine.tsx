import '@mantine/core/styles.css'
import '@mantine/notifications/styles.css'

import { generateColors } from '@mantine/colors-generator'
import { createTheme, MantineProvider } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import { Notifications } from '@mantine/notifications'
import type { PropsWithChildren } from 'react'

const theme = createTheme({
  colors: {
    violet: generateColors('#aa8ab0'),
  },
  primaryColor: 'violet',
  defaultRadius: 'md',
  fontFamily: 'Montserrat, sans-serif',
})

export const WithMantine = ({ children }: Readonly<PropsWithChildren>) => {
  return (
    <MantineProvider theme={theme}>
      <Notifications />
      <ModalsProvider>{children}</ModalsProvider>
    </MantineProvider>
  )
}
