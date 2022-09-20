import React from 'react';
import { Title, Meta, Project } from '../../components/projects/Project';
import PaginateProject from '../../components/PaginateProject';

import {
    Box,
    Flex,
    useColorModeValue,
    Container,
    Text,
    Link
} from '@chakra-ui/react';
import { useTranslation } from "react-i18next";

function Portfolio() {
  const { t } = useTranslation();

  return (
    <Container maxW="800px" p={4}>
        <Title>
          {t('portfolio.title')}
        </Title>
        <Project>
          <Text mb={4}>
            {t('portfolio.description')}
          </Text>
          <Flex direction='column' gap={4}>
            <Flex direction={{ base: 'column', md: 'row' }} gap={{ base: '0', md: '5' }} alignItems={{ base: 'flex-start', md: 'flex-start' }}>
              <Meta>Stack</Meta>
              <Flex wrap="wrap" gap={2}>
                <Text>React</Text>
                <Text>|</Text>
                <Text>ChakraUi</Text>
                <Text>|</Text>
                <Text>Typescript</Text>
              </Flex>
            </Flex>
            <Flex direction={{ base: 'column', md: 'row' }} gap={{ base: '0', md: '5' }} alignItems={{ base: 'flex-start', md: 'center' }} >
              <Meta>{t('portfolio.others.title')}</Meta>
              <Flex wrap="wrap" gap={2}>
                <Text>Responsive</Text>
                <Text>|</Text>
                <Text>{t('portfolio.others.translation')}</Text>
                <Text>|</Text>
                <Text>{t('portfolio.others.theme')}</Text>
              </Flex>
            </Flex>
            <Flex direction={{ base: 'column', md: 'row' }} gap={{ base: '0', md: '5' }} alignItems={{ base: 'flex-start', md: 'center' }}>
              <Meta>{t('portfolio.link.title')}</Meta>
              <Link href='https://guillaumembali.site' color={useColorModeValue('purple', 'orange')} isExternal>
                https://guillaumembali.site
              </Link>
            </Flex>
          </Flex>
          <Box mb={5}>
            <video controls>
              <source src='../portfolio.mp4' type="video/mp4" />
            </video>
          </Box>
        </Project>
      <PaginateProject title={t('rakuten.title')} href='/projects/rakuten' projectLogo='../logo-rakuten.png' isLeft={false} />
    </Container>
  );
}

export default Portfolio;
