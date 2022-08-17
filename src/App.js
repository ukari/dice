
import { s4, s6, cast } from './core.js';
import { Box, Button, Center, Flex, Stack, HStack, VStack } from "@chakra-ui/react";
import { ChakraProvider } from '@chakra-ui/react';
import { GiCrossedSwords } from "react-icons/gi";

console.log(cast([s6, s6]));

function App() {
    return (
        <ChakraProvider>
          <HStack h="100vh">
            <Box>
              <Button leftIcon={<GiCrossedSwords/>} colorScheme='pink'>挑战</Button>
            </Box>
          </HStack>
        </ChakraProvider>
    );
}

export default App;
