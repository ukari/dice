import { useState } from 'react';
import { s4, s6, cast, monster1, battle, Battle } from './core.js';
import { Box, Button, Center, Flex, Stack, HStack, VStack } from "@chakra-ui/react";
import { ChakraProvider } from '@chakra-ui/react';
import { GiCrossedSwords } from "react-icons/gi";

console.log(cast([s6, s6]));

function App() {
    const [monster, setMonster] = useState(monster1);
    const [dices, setDices] = useState([s6, s6]);
    const [battleResult, setBattleResult] = useState({});
    return (
        <ChakraProvider>
          <VStack bg='yellow.200'>
            <HStack h="100vh">
              <Box>
                <Box>{(() => {
                    if (battleResult == Battle.Win) {
                        return "获胜";
                    } else if (battleResult == Battle.Lose) {
                        return "失败";
                    } else if (battleResult == Battle.Injury) {
                        return "受伤";
                    } else if (battleResult == Battle.Lucky) {
                        return "幸运";
                    } else if (battleResult == Battle.Bless) {
                        return "祝福";
                    } else {
                        return "开始";
                    }
                })()
                    
                }
                </Box>
                <Button leftIcon={<GiCrossedSwords/>} colorScheme='pink' onClick={() => setBattleResult(battle(monster, dices))}>挑战</Button>
              </Box>
            </HStack>
          </VStack>
        </ChakraProvider>
    );
}

export default App;
