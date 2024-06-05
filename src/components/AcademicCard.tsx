import React from "react";
import { Box, Flex, useColorModeValue, Link, Text, useBreakpointValue } from '@chakra-ui/react';
import { BioYear } from "../components/Bio";

type Props = {
    years: string,
    description: string,
    description2?: string;
    school: string,
    school2?: string,
    school_url: string,
    school_url2?: string,
}

const AcademicCard = ({ years, school, school_url, description, description2, school2, school_url2 }: Props) => {
    const linkColor = useColorModeValue('purple', 'orange');
    const bg = useColorModeValue('rgba(250, 247, 247, 0.2)', 'rgba(47,52,62)');
    const secondaryColor = useColorModeValue('rgba(98, 92, 92, 0.7)', 'rgba(255, 255, 255, 0.6)');
    const cardWidth = useBreakpointValue({  base: '100%', xs: '200px', sm: '400px', md: '800px' });


    return (
        <Box
            width={cardWidth}
            bg={bg}
            py={3}
            px={5}
            borderRadius={5}
            mb={5}
            position="relative"
            overflow="hidden"
            _hover={{
                '::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(120deg, transparent, rgba(255,255,255,0.8), transparent)',
                    animation: 'shine 1s forwards'
                }
            }}
            sx={{
                '@keyframes shine': {
                    '0%': { left: '-100%' },
                    '100%': { left: '100%' }
                }
            }}
        >
            <Flex direction={{ base: 'column', md: 'row' }} gap={3} alignItems="center" justifyContent='center'>
                <Box flexShrink={0} w={{ base: '100%', md: '100px' }}>
                    <BioYear color={secondaryColor}>{years}</BioYear>
                </Box>
                <Box flex="1">
                    <Flex direction={{ base: 'column', md: 'row' }} alignItems={{ base: 'center', sm: 'self-start' }}>
                        <Text>
                            {description}{' '}
                            <Link href={school_url} color={linkColor} isExternal>
                                @{school}
                            </Link>
                        </Text>
                        {description2 && (
                            <Text ml={1}>
                                {description2}{' '}
                                {school2 && (
                                    <Link href={school_url2} color={linkColor} isExternal>
                                        @{school2}
                                    </Link>
                                )}
                            </Text>
                    )}
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
}

export default AcademicCard;
