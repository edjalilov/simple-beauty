import { masters } from '../model/masters'
import { Avatar, Button, Flex, Paper, Stack, Text } from '@mantine/core'
import { logEvent } from '@shared/lib/helpers/analytics'

export const Masters = () => {
  const handleClick = () => {
    logEvent({ name: 'master_card_click' })
  }
  return (
    <Paper p="md">
      <Flex gap={16}>
        <Avatar src={'/assets/ava.png'} size="xl" />
        <Stack gap={5} align="flex-start" justify="center">
          <Text>{masters[0].name}</Text>
          <Text>{masters[0].phone}</Text>
          <Button onClick={handleClick}>Записаться</Button>
        </Stack>
      </Flex>
    </Paper>
  )
}
