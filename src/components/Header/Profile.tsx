import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Marcelo Silva</Text>
        <Text color="gray.300" fontSize="small">
          marc@email.com
        </Text>
      </Box>

      <Avatar size="md" name="Marcelo Silva" src="https://github.com/GH-Marc.png" />
    </Flex>
  )
}