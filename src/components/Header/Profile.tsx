import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({showProfileData = true}: ProfileProps) {
    return (
        <Flex align="center" >
            { showProfileData && (
                <Box mr="4" textAlign="right">
                <Text>Roberto Cabral</Text>
                <Text color="gray.300" fontSize="small">
                    roberto_jr123@hotmail.com
                </Text>
              </Box>
            )}
      
        <Avatar size="md" name="Roberto Cabral" src="https://github.com/betolarbac.png" />

    </Flex>
        
    );
}