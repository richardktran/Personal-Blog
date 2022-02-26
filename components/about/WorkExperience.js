import React from 'react';
import { Box, Flex, Grid, GridItem, Heading, HStack, Image, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import Timeline from '../common/Timeline';
import useTrans from '../../hooks/useTrans';
import { motion } from 'framer-motion';

const MotionFlex = motion(Flex)
const MotionGrid = motion(Grid)
const MotionGridItem = motion(GridItem)

export default function WorkExperience({ ...props }) {
    const trans = useTrans();
    const headingColor = useColorModeValue('#00AFB9', '#FF8700');
    const stressTextColor = useColorModeValue('#003049', '#FFFFFF');
    const grayTextColor = useColorModeValue('gray.800', '#E6E6E6');
    const timelineColor = useColorModeValue('#1081E8', '#FFFFFF')
    const iconTimelineColor = useColorModeValue('#FFFFFF', '#22B07D')
    const cardColor = useColorModeValue('#22B07D', "#22B07D")
    const whiteTextColor = "#ffffff"

    const listEffect = {
        visible: {
            opacity: 1,
            // transition: {
            //     when: 'beforeChildren',
            //     staggerChildren: 0.2,

            // }
        },
        hidden: {
            opacity: 0,
            // transition: {
            //     when: 'afterChildren',
            // }
        },
    }
    const leftItemEffect = {
        visible: { opacity: 1, x: 0, transition: 1 },
        hidden: { opacity: 0, x: -100 },
    }
    const rightItemEffect = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: 50 },
    }
    return (
        <Box w="90%" px={{ base: 3, md: 5, lg: 8 }}>
            <MotionFlex direction="column" alignSelf="center" alignItems="center" my={3}  {...props}>
                <Heading as="h1" fontSize={{ base: '2xl', md: '4xl' }} color={headingColor} textTransform='uppercase' fontWeight="bold" >
                    {trans.about.work_experience_title}
                </Heading>
                <MotionGrid
                    display={{ base: 'none', md: 'grid' }}
                    initial="hidden"
                    whileInView="visible"
                    variants={listEffect}
                    // viewport={{ once: true }}
                    my={5}
                    templateRows='repeat(1, 1fr)'
                    templateColumns={{ base: 'repeat(5, 1fr)', lg: 'repeat(7, 1fr)' }}
                >
                    <MotionGrid display={{ base: 'none', lg: 'grid' }} colSpan={1} variants={leftItemEffect} justifySelf="end">
                        <Box boxSize="90px" pt={3} display={{ base: 'none', lg: 'flex' }}>
                            <Image src="/images/NashTech_logo.png" alt="NashTech Logo" />
                        </Box>
                    </MotionGrid>
                    <MotionGridItem colSpan={2} variants={leftItemEffect} justifySelf="center">
                        <VStack alignItems="flex-end">
                            <Heading as="h6" color={stressTextColor} fontSize={{ base: 'xl', md: 'lg', lg: 'xl', xl: '2xl' }} textAlign="right" pt={3} >
                                NashTech Vietnam
                            </Heading>
                            <Flex direction="column" align="flex-end" color={grayTextColor}>
                                <Text textAlign="right">{trans.about.position}</Text>
                                <Text textAlign="right" opacity="90%">06/2021 - 09/2021</Text>
                            </Flex>
                        </VStack>
                    </MotionGridItem>
                    <MotionGridItem colSpan={1} variants={rightItemEffect}>
                        <Timeline
                            bg={timelineColor}
                            icon={<Icon icon="ps:work-case" height="30" color={iconTimelineColor} />}
                            width="130px"
                        />
                    </MotionGridItem>
                    <MotionGridItem colSpan={2} variants={rightItemEffect}>
                        <Flex direction="column" maxW="16em" px={5} py={3} color={whiteTextColor} align="center" bgColor={cardColor} borderRadius={8}>
                            <Text as="p" fontSize="sm">{trans.about.nashtech_description1}</Text>
                            <Text as="p" fontSize="sm">{trans.about.nashtech_description2}</Text>
                            <Text as="p" fontSize="sm">
                                {trans.about.nashtech_description3}
                            </Text>
                        </Flex>
                    </MotionGridItem>
                </MotionGrid>

                {/* Responsive */}
                <Grid
                    display={{ base: 'grid', md: 'none' }}
                    templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(5, 1fr)'
                    gap={2}
                >
                    <GridItem colSpan={1} rowSpan={1}>
                        <Box boxSize="70px" pt={3}>
                            <Image src="/images/NashTech_logo.png" alt="NashTech Logo" />
                        </Box>
                    </GridItem>
                    <GridItem colSpan={4} rowSpan={2} ml={2}>
                        <Flex direction="column">
                            <Heading as="h6" color={stressTextColor} fontSize={{ base: 'xl', md: 'lg', lg: 'xl', xl: '2xl' }} pt={3} >
                                PHP Developer
                            </Heading>
                            <Flex direction="column" align="flex-start" color={grayTextColor}>
                                <Text>NashTech · {trans.about.position}</Text>
                                <Text opacity="90%">06/2021 - 09/2021</Text>
                            </Flex>
                            <Flex direction="column" color={grayTextColor} mt={3}>
                                <Text as="p" fontSize="sm">{trans.about.nashtech_description1}</Text>
                                <Text as="p" fontSize="sm">{trans.about.nashtech_description2}</Text>
                                <Text as="p" fontSize="sm">
                                    {trans.about.nashtech_description3}
                                </Text>
                            </Flex>
                        </Flex>
                    </GridItem>

                </Grid>
            </MotionFlex>

        </Box>
    );
}

// TODO: This layout for mobile
