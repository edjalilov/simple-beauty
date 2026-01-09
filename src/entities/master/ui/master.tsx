import { masters } from '../model/masters'
import { Avatar, Button, Flex, Paper, Stack, Text } from '@mantine/core'

export const Masters = () => {
  return (
    <Paper p="md">
      <Flex gap={16}>
        <Avatar src={masters[0].avatarUrl} size="xl" />
        <Stack gap={5} align="flex-start" justify="center">
          <Text>{masters[0].name}</Text>
          <Text>{masters[0].phone}</Text>
          <Button>Записаться</Button>
        </Stack>
      </Flex>
    </Paper>
  )
}
