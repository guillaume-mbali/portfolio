import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Text, Image, Flex, useColorModeValue, LinkBox } from '@chakra-ui/react';

type Props = {
    title: string,
    href: string,
    thumbnail: string,
    logoProject: string,
    id: string,
}

const ProjectCard: React.FC<Props> = ({ title, href, thumbnail, id, logoProject }) => {
    const bgTag = useColorModeValue('purple', 'orange');
    const bg = useColorModeValue('rgba(250, 247, 247, 0.2)', 'rgba(47,52,62)');
    const textColor = useColorModeValue('black', 'white');

    return (
        <Box
            maxW={{ base: '90%', sm: '80%', md: 'sm' }}
            w="100%"
            textAlign="center"
            bg={bg}
            pt={3}
            px={3}
            borderRadius={5}
            m="auto"
            _hover={{
                transform: 'scale(1.01)',
                transition: "0.7s"
            }}
        >
            <LinkBox cursor="pointer">
                <Link to={href}>
                    <Image src={thumbnail} objectFit='cover' alt={title} />
                    <Flex justifyContent="space-between" alignItems="center" mt={2} mb={3}>
                        <Image
                            borderRadius='full'
                            src={logoProject}
                            alt={logoProject}
                            width="30px"
                            height="30px"
                        />
                        <Box flex="1" textAlign="center">
                            <Text fontSize={{ base: "12px", md: "16px" }}>{title}</Text>
                        </Box>
                    </Flex>
                </Link>
            </LinkBox>
        </Box>
    );
};

export default ProjectCard;
