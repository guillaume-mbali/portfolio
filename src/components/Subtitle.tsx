import React from "react";
import { Heading, Flex } from '@chakra-ui/react';

type Props = {
    title: string,
    isLongTitle?: boolean,
};

const Subtitle = ({ title, isLongTitle = false }: Props) => {
    return (
        <Flex justifyContent="center" alignItems="center" mt={12} mb={4}>
            <div className={isLongTitle ? "left-middle" : "left-small"}></div>
            <Heading as="h3" fontSize={{ base: '20', sm: '50', md: '50' }} mt={8} mb={2} className="gradient">
                <div className="subtitle">
                    {title}
                </div>
            </Heading>
            <div className={isLongTitle ? "right-middle" : "right-small"}></div>
        </Flex>
    );
};

export default Subtitle;
