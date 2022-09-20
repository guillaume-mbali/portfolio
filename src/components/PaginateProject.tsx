import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Text, Image, Flex, useColorModeValue } from '@chakra-ui/react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

type Props = {
    title: string,
    href: string,
    isLeft?: boolean,
    projectLogo: string
}

const PaginateProject: React.FC<Props> = ({ title, href, isLeft = false, projectLogo }) => {
  const bg = useColorModeValue('rgb(195, 200, 218)', 'rgba(76,80,85)');

  return (
    <Flex justifyContent={isLeft ? "flex-start" : "flex-end"}>
        <Link to={href}>
            <Box
                p={5}
                bg={bg}
                display="inline-flex"
                alignItems="center"
                borderRadius="md"
                m={2}
                cursor="pointer"
                _hover={{
                transform: 'scale(1.01)',
                transition: "0.7s"
                }}
            >
            <Flex alignItems="center" gap={2}>
                {!isLeft && (
                    <Image
                    borderRadius='full'
                    src={projectLogo}
                    alt={projectLogo}
                    width="30px"
                    height="30px"
                    />
                )}
                {isLeft && (
                    <FaArrowLeft />
                )}
            <Text>{title}</Text>
            {!isLeft && (
                    <FaArrowRight />
                )}
                {isLeft && (
                    <Image
                    borderRadius='full'
                    src={projectLogo}
                    alt={projectLogo}
                    width="30px"
                    height="30px"
                    />
                )}
            </Flex>
        </Box>
      </Link>
      </Flex>
  )
}

export default PaginateProject;
