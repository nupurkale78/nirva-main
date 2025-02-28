import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const brandPrimary = defineStyle({
  background: '#0ea5e9',
  color: 'white',
  _hover: {
    background: '#0284c7',
  }
})

export const buttonTheme = defineStyleConfig({
  variants: {
    brand: brandPrimary
  }
})

const theme = {
  components: {
    Button: buttonTheme
  },
  styles: {
    global: {
      'html, body': {
        color: 'gray.800',
        lineHeight: 'tall',
      }
    }
  },
  colors: {
    brand: {
      100: '#f0f9ff',
      500: '#0ea5e9',
      900: '#0c4a6e',
    },
  },
}

export default theme;