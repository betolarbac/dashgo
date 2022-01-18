import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { Input } from "../../components/Form/Input";

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

import { Header } from "../../components/Header";
import { Siderbar } from "../../components/Sidebar";
import { SubmitHandler, useForm } from "react-hook-form";


type CreateUserFormData = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
  }
  
  const CreateUserSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatorio'),
    email: yup.string().required('E-mail Obrigatorio').email('E-mail invalido'),
    password: yup.string().required('Senha obrigatorio').min(6, 'no minimo 6 caractere'),
    password_confirmation: yup.string().oneOf([
        null, yup.ref('password')
    ], 'As senhas precisam ser iguais')
  })

export default function UserList() {
    const { register, handleSubmit, formState, } = useForm({
        resolver: yupResolver(CreateUserSchema)
    })

    const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
        await new Promise(resolve => setTimeout(resolve, 2000));

        console.log(values);
    }

    return (
     <Box>
        <Header />
  
        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
          <Siderbar />
  
          <Box
            as="form"
            onSubmit={handleSubmit(handleCreateUser)}
            flex="1"
            borderRadius={8}
            bg="gray.800"
            p={["6", "8"]}
          >
            <Heading size="lg" fontWeight="normal">
              Criar usuário
            </Heading>
  
            <Divider my="6" borderColor="gray.700" />
  
            <VStack spacing="8">
              <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                <Input
                  error={formState.errors.name}
                  name="name"
                  label="Nome completo"
                  {...register("name")}
                />
                <Input
                  error={formState.errors.email}
                  name="email"
                  type="email"
                  label="E-mail"
                  {...register("email")}
                />
              </SimpleGrid>
  
              <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                <Input
                  name="password"
                  type="password"
                  label="Senha"
                  error={formState.errors.password}
                  {...register("password")}
                />
                <Input
                  name="password_confirmation"
                  type="password"
                  label="Confirmação da senha"
                  error={formState.errors.password_confirmation}
                  {...register("password_confirmation")}
                />
              </SimpleGrid>
            </VStack>
  
            <Flex mt="8" justify="flex-end">
              <HStack spacing="4">
                <Link href="/users" passHref>
                  <Button as="a" colorScheme="whiteAlpha">
                    Cancelar
                  </Button>
                </Link>
                <Button
                  type="submit"
                  isLoading={formState.isSubmitting}
                  colorScheme="pink"
                >
                  Salvar
                </Button>
              </HStack>
            </Flex>
          </Box>
        </Flex>
      </Box>
    );
  }