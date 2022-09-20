import { Heading, Badge, useColorModeValue, Flex, Text, Box, Link } from '@chakra-ui/react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const SocialLink = () => {
    return (
        <>
            <Heading as="h3" fontSize={20} mt={6} mb={2}>
                On the web
            </Heading>
            <Flex flexDirection="column" gap="10px">
                <Link href='www.linkedin.com/in/guillaumembali' isExternal >
                    <Badge _hover={{ color: useColorModeValue('#D4A5FF', '#FFE9B7') }} p={2} bg={useColorModeValue('gray.100', 'whiteAlpha.200')}>
                        <Flex alignItems='center'>
                            <Box fontSize="25px" mr={2}>
                                <AiFillLinkedin />
                            </Box>
                            <Text fontSize="12px">@Guillaume M'Bali</Text>
                        </Flex>
                    </Badge>
                </Link>
                <Link href='https://github.com/guillaume-mbali' isExternal>
                    <Badge _hover={{ color: useColorModeValue('#D4A5FF', '#FFE9B7') }} p={2} bg={useColorModeValue('gray.100', 'whiteAlpha.200')}>
                        <Flex alignItems='center'>
                            <Box fontSize="25px" mr={2}>
                                <AiFillGithub />
                            </Box>
                            <Text fontSize="12px">@Guillaume M'Bali</Text>
                        </Flex>
                    </Badge>
                </Link>
            </Flex>
        </>
    );

}

export default SocialLink;
