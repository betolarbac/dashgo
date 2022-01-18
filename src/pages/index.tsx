import { Flex, Button, Stack,  } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from '../components/Form/Input'


type SignInFormData = {
  email: string;
  password: string;
}

const SignInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail Obrigatorio').email('E-mail invalido'),
  password: yup.string().required(),
})

export default function SignIn() {
  const { register, handleSubmit, formState} = useForm({
    resolver: yupResolver(SignInFormSchema)
  })

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(values);
  }

  return (
    <Flex
    w="100vw"
    h="100vh"
    align="center"
    justify="center"
    >
      <Flex
      as="form"
      width="100%"
      maxWidth={360}
      bg="gray.800"
      p="8"
      borderRadius={8}
      flexDirection="column"
      onSubmit={handleSubmit(handleSignIn)}
      >
         <Stack spacing="4">

           <Input 
           name="email" 
           type="email" 
           label="E-mail"
           error={formState.errors.email} 
           {...register('email')}
           />
           <Input 
           name="password" 
           type="password" 
           label="Senha" 
           error={formState.errors.password} 
           {...register('password')} 
           />

           
            <Button 
            type="submit" 
            mt="6" 
            colorScheme="pink" 
            size="lg"
            isLoading={formState.isSubmitting} 
            > 
            Entrar 
            </Button>
         </Stack>
      </Flex>
    </Flex>
  )
}
