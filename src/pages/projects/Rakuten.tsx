import React from 'react';
import { Title, Meta, Project } from '../../components/projects/Project';
import PaginateProject  from '../../components/PaginateProject';
import {
    Box,
    Flex,
    useColorModeValue,
    Container,
    Text,
    Link,
    Image
} from '@chakra-ui/react';
import { useTranslation } from "react-i18next";

function Rakuten() {
  const { t } = useTranslation();

  return (
    <Container maxW="800" p={4}>
        <Title>
          {t('rakuten.title')} 
        </Title>
        <Project>
          <Text mb={4}>
            {t('rakuten.description')} 
          </Text>
          <Flex direction='column' gap={4}>
            <Flex direction={{ base: 'column', md: 'row' }} gap={{ base: '0', md: '5' }} alignItems={{ base: 'flex-start', md: 'center' }}>
              <Meta>Stack</Meta>
              <Flex wrap="wrap" gap={2}>
                <Text>OpenCV</Text>
                <Text>|</Text>
                <Text>Keras</Text>
                <Text>|</Text>
                <Text>Tensorflow</Text>
                <Text>|</Text>
                <Text>Pandas</Text>
                <Text>|</Text>
                <Text>Numpy</Text>
                <Text>|</Text>
                <Text>ScikitLearn</Text>
                <Text>|</Text>
                <Text>MTranslate</Text>
                <Text>|</Text>
                <Text>Langdetect</Text>
                <Text>|</Text>
                <Text>Spellcheck</Text>
              </Flex>
            </Flex>
            <Flex direction={{ base: 'column', md: 'row' }} gap={{ base: '0', md: '5' }} alignItems={{ base: 'flex-start', md: 'center' }}>
              <Meta>{t('rakuten.others.title')}</Meta>
              <Text>Streamlit</Text>
            </Flex>
            <Flex direction={{ base: 'column', md: 'row' }} gap={{ base: '0', md: '5' }} alignItems={{ base: 'flex-start', md: 'center' }}>
              <Meta>{t('rakuten.link.title')}</Meta>
              <Link href='https://github.com/guillaume-mbali/rakuten-multimodal-classifier' color={useColorModeValue('purple', 'orange')} isExternal>
                {t('rakuten.link.button')}
              </Link>
            </Flex>
          </Flex>
          <Box mb={5}>
            <Image src='../rakuten-project.png' objectFit='cover' alt='rakuten' />
          </Box>
          <PaginateProject title={t('portfolio.title')} href='/projects/portfolio' projectLogo='../logo-small.png' isLeft={true}/>
        </Project>
    </Container>
  );
}

export default Rakuten;
