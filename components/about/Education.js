import React from 'react';
import { Box, Flex, Heading, HStack, Image, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import Timeline from '../common/Timeline';
import useTrans from '../../pages/hooks/useTrans';

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
        <Flex direction="column" alignSelf="center" alignItems="center"  {...props}>
            <Heading as="h1" color={headingColor} textTransform='uppercase' fontWeight="bold" >
                {trans.about.education_title}
            </Heading>
            <Flex direction="column" align="center" h="100%" minW="100%" my={5}>
                <HStack alignItems="flex-start" spacing={{ base: '3', md: '5', lg: '3', xl: '10' }}>
                    <HStack alignItems="center" spacing={5}>
                        <Box boxSize="90px" pt={3}>
                            <Image src="/images/CTU_logo.png" alt="CTU logo" />
                        </Box>

                        <VStack alignItems="flex-end">
                            <Heading as="h6" color={stressTextColor} fontSize={{ base: 'xl', md: 'lg', lg: 'xl', xl: '2xl' }} pt={3} textAlign="right" >
                                {trans.about.university}
                            </Heading>
                            <Flex direction="column" color={grayTextColor} >
                                <nobr><Text textAlign="right">{trans.about.specialist}</Text></nobr>
                                <nobr><Text textAlign="right" opacity="90%">2018 - 2022</Text></nobr>
                            </Flex>
                        </VStack>
                    </HStack>

                    <Timeline
                        bg={timelineColor}
                        icon={<Icon icon="cil:education" height="40" color={iconTimelineColor} />}
                    />

                    <HStack>
                        <VStack>
                            <Flex direction="column" color={whiteTextColor} align="center" bgColor={cardColor} borderRadius={8} px={5} py={3}>
                                <nobr><Text><span><strong>{trans.about.degree_grade}:</strong></span> {trans.about.excellent}</Text></nobr>
                                <nobr><Text><span><strong>GPA:</strong></span> 3.6/4</Text></nobr>
                            </Flex>
                        </VStack>
                        {/* <Box boxSize="90px">
                        </Box> */}
                    </HStack>


                </HStack>
            </Flex>
        </Flex >
    )
}
