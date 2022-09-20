import React, { Children, ReactNode } from "react";

import { Heading, Box, Container, Flex, Badge, useColorModeValue, Link } from '@chakra-ui/react'

import { JSXElement } from "@babel/types";
import { BsChevronRight } from 'react-icons/bs';


type Props = {
    children?: ReactNode,
};


export const Title = ({ children }: Props) => (
  <Container pt={24} pb={10}>
    <Box>
      <Flex alignItems="center">
          <Link href="/" color={useColorModeValue('purple', 'orange')}>Home</Link>
          <BsChevronRight />
          <Heading as='h3' size={{ base: "12px", md: "20px" }}>
              {children}
          </Heading>
      </Flex>
    </Box>
  </Container>
)

export const Meta = ({ children }: Props) => (
  <Badge colorScheme='green'>{children}</Badge>
)


export const Project = ({ children }: Props) => (
  
    <Flex flexDirection="column" gap={10}>
        {children}
    </Flex>

)
