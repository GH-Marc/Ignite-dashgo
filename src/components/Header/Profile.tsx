import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Marcelo Silva</Text>
          <Text color="gray.300" fontSize="small">
            marc@email.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Marcelo Silva" src="https://github.com/GH-Marc.png" />
    </Flex>
  )
}