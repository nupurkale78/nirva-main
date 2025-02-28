import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Container, VStack, Heading, Button } from '@chakra-ui/react';
import { removeItem } from '../features/cartSlice';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <Container maxW="container.xl" py={8}>
      <Heading mb={6}>Your Cart</Heading>
      <VStack spacing={4} align="stretch">
        {cart.items.map(item => (
          <Box key={item.id} p={4} borderWidth={1} borderRadius="lg">
            <Heading size="md">{item.name}</Heading>
            <Button 
              onClick={() => dispatch(removeItem(item))}
              colorScheme="red"
              size="sm"
              mt={2}
            >
              Remove
            </Button>
          </Box>
        ))}
      </VStack>
      <Box mt={6}>
        <Heading size="md">Total: ${cart.total.toFixed(2)}</Heading>
      </Box>
    </Container>
  );
};

export default Cart;