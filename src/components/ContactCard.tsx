import React from 'react';
import { Box, Flex, Button, useColorModeValue, Link, Text, Avatar } from '@chakra-ui/react';

type Props = {
    picture_url: string;
    social_networks: { icon: React.ReactElement; url: string }[];
    title: string;
    state: string;
    description: string;
    curriculum_vitae: { icon: React.ReactElement; file: string };
};

const ContactCard = ({ picture_url, social_networks, title, state, description, curriculum_vitae }: Props) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const secondaryColor = useColorModeValue('rgba(47,52,62,0.5)', 'rgba(250, 247, 247)');
    const bg = useColorModeValue('rgba(250, 247, 247, 0.2)', 'rgba(47,52,62)');

    return (
        <Box
            maxW={{ base: '90%', sm: '70%', md: '90%' }}
            bg={bg}
            py={{ base: "20px", md: "50px" }}
            px={{ base: "10px", md: "50px" }}
            borderRadius={5}
            boxShadow='xl'
            transition="transform 0.7s"
            _hover={{
                transform: 'scale(1.05)',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`card ${isHovered ? 'active' : ''}`}
        >
            <Flex flexDirection="column" gap={5}>
                <Flex gap={5} alignItems="center" direction={{ base: 'column', md: 'row' }}>
                    <Avatar src={picture_url} width="60px" height="60px" />
                    <Box
                        border='1px'
                        px={2}
                        py={1}
                        borderRadius="full"
                        borderColor="grey.800"
                        backgroundColor={useColorModeValue('rgb(195, 200, 218)', 'rgba(76,80,85)')}
                    >
                        <Flex alignItems="center" gap={2} justifyContent={{ base: "center", md: "start" }}>
                            <Box
                                w={2}
                                h={2}
                                border="1px"
                                borderRadius="full"
                                backgroundColor="green"
                                borderColor="grey.800"
                            ></Box>
                            <Text fontSize='sm'>{state}</Text>
                        </Flex>
                    </Box>
                </Flex>
                <Flex direction={{ base: 'column', md: 'row' }} gap={5} alignItems="center">
                    <Flex flexDirection="column" gap={3} w="70%" justifyContent="center">
                        <Text as="h3" fontSize="xl" fontWeight="bold">{title}</Text>
                        <Text fontSize='sm' opacity='0.5'>{description}</Text>
                    </Flex>
                    <Flex flexDirection="column" gap={5} w="30%" alignItems={{ base: "center", md: "start" }}>
                        <Flex gap={5} alignItems={{ base: "center", md: "start" }}>
                            {social_networks.map((network, index) => (
                                <Link
                                    key={index}
                                    href={network.url}
                                    isExternal
                                    color={secondaryColor}
                                    _hover={{
                                        color: 'white',
                                    }}
                                >
                                    <Box
                                        fontSize="30px"
                                        padding={2}
                                        color={secondaryColor}
                                        _hover={{
                                            bg: "#1a202c",
                                            borderRadius: "5px",
                                            color: 'white',
                                            transition: "0.7s",
                                            boxShadow: '0 0 10px #1a202c',
                                        }}
                                    >
                                        {network.icon}
                                    </Box>
                                </Link>
                            ))}
                        </Flex>
                        <Link href={curriculum_vitae.file} isExternal>
                            <Button
                                className={`glow-on-hover ${isHovered ? 'active' : ''}`}
                                leftIcon={curriculum_vitae.icon}
                                backgroundColor={useColorModeValue('rgb(195, 200, 218)', 'rgba(76,80,85)')}
                                borderWidth={1}
                                _hover={{
                                    boxShadow: '0 0 10px #1a202c',
                                }}
                            >
                                Curriculum Vitae
                            </Button>
                        </Link>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    );
};

export default ContactCard;
