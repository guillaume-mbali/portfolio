import { Link } from "react-router-dom";

import React from "react";
import { Box, Text, LinkBox, LinkOverlay, Image, Flex } from '@chakra-ui/react'

type Props = {
    title: string,
    href: string,
    thumbnail: string,
    id: string,
}
const Card = ({ title, href, thumbnail, id }: Props) => {
    return (
        <Box w="100%" textAlign="center" >
            <Link to={`/works/${id}`}>
                <LinkBox cursor="pointer" >
                    <Image src={thumbnail} objectFit='cover' borderRadius='10px' />
                    <LinkOverlay href={href} target="_blank">
                        <Text mt={2} fontSize={20}>{title}</Text>
                        <Flex minWidth='max-content' alignItems='center' gap='2'>
                            <Box bg='tomato' color='white' p={1} borderRadius='5' fontSize='xs'>
                                React
                            </Box>
                            <Box bg='tomato' color='white' p={1} borderRadius='5' fontSize='xs'>
                                React
                            </Box>
                            <Box bg='tomato' color='white' p={1} borderRadius='5' fontSize='xs'>
                                React
                            </Box>
                        </Flex>
                    </LinkOverlay>
                </LinkBox>
            </Link>
        </Box>
    )
};

export default Card;