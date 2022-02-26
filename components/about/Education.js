import React from 'react';
import { Box, Flex, Grid, GridItem, Heading, HStack, Image, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import Timeline from '../common/Timeline';
import useTrans from '../../hooks/useTrans';
import { motion } from 'framer-motion';

const MotionFlex = motion(Flex)
const MotionGrid = motion(Grid)
const MotionGridItem = motion(GridItem)
const listEffect = {
    visible: {
        opacity: 1,
    },
    hidden: {
        opacity: 0,
    },
}
const leftItemEffect = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
}
const rightItemEffect = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 50 },
}
export default function Education({ ...props }) {
    const trans = useTrans();
    const headingColor = useColorModeValue('#00AFB9', '#FF8700');
    const stressTextColor = useColorModeValue('#003049', '#FFFFFF');
    const grayTextColor = useColorModeValue('gray.800', '#E6E6E6');
    const timelineColor = useColorModeValue('#1081E8', '#FFFFFF')
    const iconTimelineColor = useColorModeValue('#FFFFFF', '#22B07D')
    const cardColor = useColorModeValue('#22B07D', "#22B07D")
    const whiteTextColor = "#ffffff"

    return (
        <Box w="90%" px="auto">
            <MotionFlex direction="column" alignSelf="center" alignItems="center"  {...props}>
                <Heading as="h1" color={headingColor} textTransform='uppercase' fontWeight="bold" >
                    {trans.about.education_title}
                </Heading>
                <MotionGrid
                    initial="hidden"
                    whileInView="visible"
                    variants={listEffect}
                    // viewport={{ once: true }}
                    my={5}
                    templateRows='repeat(1, 1fr)'
                    templateColumns={{ base: 'repeat(5, 1fr)', lg: 'repeat(7, 1fr)' }}
                    gap={2}
                >
                    <MotionGrid display={{ base: 'none', lg: 'grid' }} colSpan={1} variants={leftItemEffect} justifySelf="end">
                        <Box boxSize="90px" pt={3}>
                            <Image src="/images/CTU_logo.png" alt="CTU logo" />
                        </Box>
                    </MotionGrid>
                    <MotionGridItem colSpan={2} variants={leftItemEffect} justifySelf="center">
                        <VStack alignItems="flex-end">
                            <Heading as="h6" color={stressTextColor} fontSize={{ base: 'xl', md: 'lg', lg: 'xl', xl: '2xl' }} pt={3} textAlign="right" >
                                {trans.about.university}
                            </Heading>
                            <Flex direction="column" color={grayTextColor} >
                                <nobr><Text textAlign="right">{trans.about.specialist}</Text></nobr>
                                <nobr><Text textAlign="right" opacity="90%">2018 - 2022</Text></nobr>
                            </Flex>
                        </VStack>
                    </MotionGridItem>

                    <MotionGridItem colSpan={1}>
                        <Timeline
                            bg={timelineColor}
                            icon={<Icon icon="cil:education" height="40" color={iconTimelineColor} />}
                        />
                    </MotionGridItem>

                    <MotionGridItem colSpan={2} variants={rightItemEffect}>
                        <Flex direction="column" color={whiteTextColor} align="center" bgColor={cardColor} borderRadius={8} px={5} py={3}>
                            <Text><span><strong>{trans.about.degree_grade}:</strong></span> {trans.about.excellent}</Text>
                            <Text><span><strong>GPA:</strong></span> 3.6/4</Text>
                        </Flex>
                    </MotionGridItem>

                </MotionGrid>
            </MotionFlex >
        </Box >
    )
}
