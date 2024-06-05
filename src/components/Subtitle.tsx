import React from "react";
import { Heading, Flex, useBreakpointValue } from '@chakra-ui/react';

type Props = {
    title: string,
    isLongTitle?: boolean,
};

const Subtitle = ({ title, isLongTitle = false }: Props) => {
    const fontSize = useBreakpointValue({ md: '30px', sm: '30px', '2xl': '40px' });
    return (
        <Flex justifyContent="center" alignItems="center" mt={12} mb={4}>
            <div className={isLongTitle ? "left-middle" : "left-small"}></div>
            <Heading as="h3" fontSize={fontSize} mt={8} mb={2} className="gradient">
                <div className="subtitle">
                    {title}
                </div>
            </Heading>
            <div className={isLongTitle ? "right-middle" : "right-small"}></div>
        </Flex>
    );
};

export default Subtitle;
