import React, { useState, useEffect } from 'react';
import { Box, SlideFade } from '@chakra-ui/react';

const emojis = ['👋', '👨🏽‍💻', '🇨🇦', '🇫🇷'];

const AnimatedEmojis = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [resetAnimation, setResetAnimation] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % emojis.length);
            setResetAnimation(true);
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            {resetAnimation && (
                <SlideFade in offsetY={30} key={currentIndex}>
                    <Box marginTop="-20px" fontSize="3xl">
                        <p>{emojis[currentIndex]}</p>
                    </Box>
                </SlideFade>
            )}
        </div>
    );
};

export default AnimatedEmojis;
