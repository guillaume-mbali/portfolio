import React from 'react'
import { Box, Flex, Grid, Image, Link, useColorModeValue } from '@chakra-ui/react';
import { BioSection, BioYear } from "../components/Bio";

type Props = {
    start: string,
    end: string,
    img: string,
    job: string,
    company: string,
    website_url: undefined | string;
    nationality: string,
}

const WorkCard = ({ start, end, img, job, company, website_url, nationality }: Props) => {
    const linkColor = useColorModeValue('purple', 'orange');
    const bg = useColorModeValue('rgba(250, 247, 247, 0.2)', 'rgba(47,52,62)')
    const secondaryColor = useColorModeValue('rgba(98, 92, 92, 0.7)', 'rgba(255, 255, 255, 0.6)');
    const [isHovered, setIsHovered] = React.useState(false);
    console.log(isHovered);
    

    return (
        <Box
            bg={bg}
            padding={3}
            borderRadius={5}
            width="300px"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Grid
                templateRows="repeat(3, 1fr)"
                gap={2}
                justifyItems="center"
                alignItems="center"
                width="100%"
            >
                <BioYear color={secondaryColor}>{start} - {end}</BioYear>
                <Box
                    bgGradient={useColorModeValue('linear(to-t, rgba(130, 130, 138, 0.2), transparent)', 'linear(to-t, rgba(130, 130, 138, 0.2), transparent)')}
                    borderRadius='full'
                    borderBottomWidth='1px'
                    padding={1}
                    className={`${isHovered ? 'scaled' : ''}`}
                >
                    <Image
                        objectFit='cover'
                        borderRadius='full'
                        width={20}
                        src={img}
                        alt='Guillaume MBali'
                    />
                </Box>
                <Box>
                    <BioSection>{job}</BioSection>
                    <Flex gap={2} alignItems="center" justifyContent="center">
                        <Link href={website_url} color={linkColor} isExternal>
                            @{company}
                        </Link>
                        | {nationality}
                    </Flex>
                </Box>
            </Grid>
        </Box>
    )
}
export default WorkCard;
