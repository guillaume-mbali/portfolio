import React from 'react';
import { Text, Flex, Box } from '@chakra-ui/react';

const NoPage = () => {
    return (
        <Box height="100vh" width="100vw">
            <Flex justifyContent='center' alignItems='center' height="100%">
                <Text fontSize='2xl'>Oups, cette page n'existe pas 😅</Text>
            </Flex>
        </Box>
    );
}

export default NoPage;
