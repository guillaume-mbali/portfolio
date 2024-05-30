import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import AnimatedEmojis from '../components/AnimatedEmojis';
import { useTranslation } from "react-i18next";
import { motion } from 'framer-motion';

const Loader = () => {
    const { t } = useTranslation();

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <Flex
            direction="column"
            justify="center"
            gap={5}
            align="center"
            height="100vh"
            bg="gray.100"
        >
            <Box fontSize="2xl" mb={4} color="rgb(160, 160, 170)">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
                >
                    {t('common.name')}
                </motion.div>
            </Box>
            <Box fontSize="4xl" mb={4}>
                <AnimatedEmojis />
            </Box>
        </Flex>
    );
};

export default Loader;
