import React from 'react';
import {
  Container,
  Box,
  VStack,
  Input,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

const Auth = () => {
  return (
    <Container maxW="container.sm" py={8}>
      <Box
        bg={useColorModeValue('white', 'gray.700')}
        p={8}
        borderRadius="lg"
        boxShadow="lg"
      >
        <VStack spacing={4}>
          <Heading>Sign In</Heading>
          <Input placeholder="Email" type="email" />
          <Input placeholder="Password" type="password" />
          <Button colorScheme="blue" width="full">
            Sign In
          </Button>
          <Text>
            Don't have an account? <Button variant="link">Sign Up</Button>
          </Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Auth;