import React from "react";
import ThemeToggleButton from "../components/ThemeToggleButton";
import LanguageToggleButton from "./LanguageToggleButton";


import {
    Container,
    Flex,
    Spacer,
    Box,
    useColorModeValue,
    Heading,
    Image,
    Link,
    useBreakpointValue,
    Menu
} from '@chakra-ui/react';

const Header = () => {
    const logo = `${useColorModeValue('logo', 'logo-dark')}.png`;
    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            css={{ backdropFilter: 'blur(10px)' }}
            zIndex={2}
        >
            <Container maxW='container.lg'>
                <Flex align="center" justify="space-between" alignItems="center" p={8}>
                    <Heading>
                        <Link href='https://guillaumembali.site'>
                            <Image src={logo} width={10} height={10} />
                        </Link>
                    </Heading>
                    <Spacer />
                    {isMobile ? (
                        <Menu>
                            <ThemeToggleButton />
                            <LanguageToggleButton />
                        </Menu>
                    ) : (
                        <Menu>
                            <Spacer />
                            <ThemeToggleButton />
                            <LanguageToggleButton />
                        </Menu>
                    )}

                </Flex>
            </Container>
        </Box>
    );
};

export default Header;
