import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodFill, RiInputMethodLine } from "react-icons/ri";

export function Siderbar() {
    return (
        <Box as="aside" w="64" mr="8" >
            <Stack spacing="12" align="flex-start" >
                <Box>
                    <Text fontWeight="bold" color="gray.500" fontSize="small">GERAL</Text>
                    <Stack spacing="4" mt="8" align="stretch">
                        <Link display="flex" align="center">
                            <Icon as={RiDashboardLine} fontSize="20" />
                            <Text ml="4" fontWeight="medium" >Dashboard</Text>
                        </Link>

                        <Link display="flex" align="center">
                            <Icon as={RiContactsLine} fontSize="20" />
                            <Text ml="4" fontWeight="medium" >Usuario</Text>
                        </Link>
                    </Stack>
                </Box>

                <Box>
                    <Text fontWeight="bold" color="gray.500" fontSize="small">AUTOMAÇÂO</Text>
                    <Stack spacing="4" mt="8" align="stretch">
                        <Link display="flex" align="center">
                            <Icon as={RiInputMethodLine} fontSize="20" />
                            <Text ml="4" fontWeight="medium" >Formulários</Text>
                        </Link>

                        <Link display="flex" align="center">
                            <Icon as={RiGitMergeLine} fontSize="20" />
                            <Text ml="4" fontWeight="medium" >Automaçâo</Text>
                        </Link>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
}