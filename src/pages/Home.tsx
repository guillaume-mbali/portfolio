import React from "react";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { RxSewingPinFilled } from "react-icons/rx";
import { 
    Heading, 
    Box, 
    Flex, 
    Image, 
    useColorModeValue, 
    useBreakpointValue, 
    Container, 
    Text
} from '@chakra-ui/react';
import { useTranslation } from "react-i18next";
import { Link as ScrollLink } from 'react-scroll';

import WorkCard from "../components/WorkCard";
import ProjectCard from "../components/ProjectCard";
import AcademicCard from "../components/AcademicCard";
import ContactCard from "../components/ContactCard";
import StackCard from "../components/StackCard";
import Subtitle from "../components/Subtitle";
import AnimatedEmojis from '../components/AnimatedEmojis';

const Home = () => {
    const socialNetworks = [
        { icon: <IoMdMail />, url: 'mailto:guillaume.mbali72@gmail.com' },
        { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/guillaumembali/' },
        { icon: <FaGithub />, url: 'https://github.com/guillaume-mbali' },
    ];
    const curriculumVitae = { icon: <FaFilePdf />, file: 'CV_Guillaume_MBali.pdf' };
    const emojiFontSize = useBreakpointValue({ base: '2xl', md: '3xl' });
    const fontSize = useBreakpointValue({ sm: '30px', md: '50px', '2xl': '70px' });
    const marginBottom = useBreakpointValue({ base: '50px', md: '100px' });
    const marginTop = useBreakpointValue({ base: '-50px', xs: '-80px', md: '-90px', xl: '-60px', '2xl': '0px' });
    const imageSize = useBreakpointValue({ base: '90px', md: '120px' });
    const { t } = useTranslation();
    const stacks = [
        { image: 'python-logo.png', label: 'Python' },
        { image: 'django-logo.png', label: 'Django' },
        { image: 'pandas-logo.png', label: 'Pandas' },
        { image: 'react-logo.png', label: 'ReactJs' },
        { image: 'vue-logo.png', label: 'VueJs' },
        { image: 'node-logo.png', label: 'NodeJs' },
        { image: 'scikitlearn-logo.png', label: 'Scikit Learn' },
        { image: 'docker-logo.png', label: 'Docker' }
    ];

    return (
        <Container maxW="container.xl" centerContent>
            <Flex as="header" height="100vh" pt={150}alignItems="center" flexDirection="column" justifyContent="center">
                <Flex justifyContent="space-between" alignItems="center" flexDirection="column">
                    <Flex direction='column' alignItems='center' mb={10}>
                        <Heading
                            variant="page-title"
                            color={useColorModeValue('rgb(47, 47, 47, 0.9)', 'rgb(160, 160, 170)')}
                            mb={3}
                        >
                            {t('common.name')}
                        </Heading>
                        <Text fontSize={16}>
                            <Flex alignItems='center' gap={1} color={useColorModeValue('purple', 'orange')}>
                                <RxSewingPinFilled />
                                {t('common.location')}
                            </Flex>
                        </Text>
                    </Flex>
                    <Box
                        bgGradient={useColorModeValue('linear(to-t, gray.200, transparent)', 'linear(to-t, gray.700, transparent)')}
                        borderRadius='full'
                        borderBottomWidth="1px"
                        padding="4"
                    >
                        <Image
                            borderRadius='full'
                            width={imageSize}
                            height={imageSize}
                            src='profil.png'
                            alt='Guillaume MBali'
                        />
                    </Box>
                    <Box fontSize={emojiFontSize} zIndex="10" height="3rem">
                        <AnimatedEmojis />
                    </Box>
                    <Flex justifyContent="center" alignItems="center" mb={marginBottom} mt={marginTop}>
                        <div className="left-big"></div>
                        <Flex alignItems="center" justifyContent='center' flexDirection="column" position="absolute">
                            <Heading
                                color={useColorModeValue('rgba(100, 10, 200, 0.5)', 'rgba(160, 10, 250, 0.5)')}
                                as="h1"
                                fontSize={fontSize}
                                fontStyle="normal"
                                lineHeight="normal"
                            >
                                {t('common.skill-dev')}
                            </Heading>
                        </Flex>
                        <div className="right-big"></div>
                    </Flex>
                </Flex>
                <Flex justifyContent="center" alignItems="center" position='relative' mt={marginTop}>
                    <ScrollLink to="a-propos" smooth={true} duration={500} offset={-80}>
                        <Text
                            fontSize='6xl'
                            color={useColorModeValue('rgb(47, 47, 47, 0.9)', 'rgb(160, 160, 170)')}
                            className="pulse"
                        >
                            <MdOutlineKeyboardDoubleArrowDown />
                        </Text>
                    </ScrollLink>
                </Flex>
            </Flex>
            <section id="a-propos">
                <Box my={20} maxW="container.sm">
                    <Flex justifyContent='center' alignItems='center' flexDirection="column" gap={5}>
                        <Text as='b'>{t('common.welcome-msg')}</Text>
                        <Text>{t('common.description')}</Text>
                    </Flex>
                </Box>
            </section>
            <section>
                <Flex direction={{ base: 'column', md: 'row' }} gap={3} mb={30}>
                    <ProjectCard
                        title={t('portfolio.title')} 
                        href={`/projects/portfolio`}
                        thumbnail="img-portfolio.png"
                        logoProject="logo-small.png"
                        id="portfolio"
                    />
                    <ProjectCard
                        title={t('rakuten.title')} 
                        href={`/projects/rakuten`}
                        thumbnail="img-rakuten.png"
                         logoProject="logo-rakuten.png"
                        id="rakuten"
                    />
                </Flex>
            </section>
            <section>
                <Subtitle title={t('academic-career.title')} />
                <Flex direction='column' alignItems="center">
                    <AcademicCard
                        years="2023"
                        school="DataScientest"
                        description={t('academic-career.data-science.description')}
                        school_url="https://datascientest.com/"
                        description2={t('academic-career.data-science.description-2') || ''}
                        school2="MinesParis"
                        school_url2="https://www.minesparis.psl.eu/"
                    />
                    <AcademicCard
                        years="2021-2023"
                        school="MyDigitalSchool"
                        description={t('academic-career.developer.description')}
                        school_url="https://www.mydigitalschool.com/"
                    />
                    <AcademicCard
                        years="2019-2021"
                        school="CESI"
                        description={t('academic-career.software-engineering-manager.description')}
                        school_url="https://www.cesi.fr/"
                    />
                </Flex>
            </section>
            <section>
                <Subtitle title={t('professional-career.title')} isLongTitle={true} />
                <Flex direction={{ base: 'column', md: 'row' }} gap={3} mb={30} justifyContent='center' alignItems='center'>
                    <WorkCard start="2022" end="2024" img="logo_unyc.jpeg" job={t('professional-career.unyc.job')} company="Unyc" website_url="https://www.unyc.io/" nationality="🇫🇷" />
                    <WorkCard start="2021" end="2022" img="logo_infotel.png" job={t('professional-career.infotel.job')} company="Infotel" website_url="https://infotel.com/" nationality="🇫🇷" />
                    <WorkCard start="2019" end="2021" img="logo_siri.png" job={t('professional-career.siri.job')} company="SIRI49" website_url="https://infotel.com/" nationality="🇫🇷" />
                </Flex>
            </section>
            <section id="stack">
                <Flex justifyContent="space-between" alignItems="center" flexDirection="column" gap={10}>
                    <Box my={20} maxW="container.sm">
                        <Text>
                            {t('tech-skills.description')}
                        </Text>
                    </Box>
                    <StackCard stacks={stacks} />
                </Flex>
            </section>
            <section id="contact">
                <Subtitle title={t('contact.title')} />
                <Flex direction={{ base: 'column', md: 'row' }} gap={3} mb={30} justifyContent='center' alignItems='center'>
                    <ContactCard
                        title={t('contact.ping-me-subtitle')}
                        description={t('contact.ping-me-text')}
                        picture_url="profil.png"
                        social_networks={socialNetworks}
                        state={t('contact.status')}
                        curriculum_vitae={curriculumVitae}
                    />
                </Flex>
            </section>
            <Box my={100}>
                <Flex justifyContent="center">
                    <p>@Guillaume 2024</p>
                </Flex>
            </Box>
        </Container>
    );
}

export default Home;
