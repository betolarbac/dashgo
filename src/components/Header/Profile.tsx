import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex align="center" >
        <Box mr="4" textAlign="right">
          <Text>Roberto Cabral</Text>
          <Text color="gray.300" fontSize="small">
              roberto_jr123@hotmail.com
          </Text>
        </Box>
      
        <Avatar size="md" name="Roberto Cabral" src="https://github.com/betolarbac.png" />

    </Flex>
        
    );
}