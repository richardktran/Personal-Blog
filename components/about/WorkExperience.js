import React from 'react';
import { Box, Flex, Heading, HStack, Image, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import Timeline from '../common/Timeline';
import useTrans from '../../pages/hooks/useTrans';

export default function WorkExperience({ ...props }) {
    const trans = useTrans();
    const headingColor = useColorModeValue('#00AFB9', '#FF8700');
    const stressTextColor = useColorModeValue('#003049', '#FFFFFF');
    const grayTextColor = useColorModeValue('gray.800', '#E6E6E6');
    const timelineColor = useColorModeValue('#1081E8', '#FFFFFF')
    const iconTimelineColor = useColorModeValue('#FFFFFF', '#22B07D')
    const cardColor = useColorModeValue('#22B07D', "#22B07D")
    const whiteTextColor = "#ffffff"


    return (
        <Flex direction="column" alignItems="center" my={3}  {...props}>
            <Heading as="h1" color={headingColor} fontWeight="bold" >WORK EXPERIENCE</Heading>
            <Flex direction="column" align="center" h="100%" minW="100%" my={5}>
                <HStack alignItems="flex-start" spacing={10}>
                    <HStack alignItems="center" spacing={5}>
                        <Box boxSize="90px" pt={3}>
                            <Image src="/images/NashTech_logo.png" alt="NashTech Logo" />
                        </Box>

                        <VStack alignItems="flex-end">
                            <Heading as="h6" color={stressTextColor} fontSize="2xl" textAlign="right" pt={3} >NashTech Vietnam</Heading>
                            <Flex direction="column" align="flex-end" color={grayTextColor}>
                                <Text textAlign="right">Internship</Text>
                                <Text textAlign="right" opacity="90%">06/2021 - 09/2021</Text>
                            </Flex>
                        </VStack>
                    </HStack>

                    <Timeline
                        bg={timelineColor}
                        icon={<Icon icon="ps:work-case" height="30" color={iconTimelineColor} />}
                        width="130px"
                    />

                    <HStack>
                        <VStack>
                            <Flex direction="column" maxW="18em" color={whiteTextColor} align="center" bgColor={cardColor} borderRadius={8} px={5} py={3}>
                                <Text as="p" fontSize="sm"> - Work with SCRUM team up to 9 member.</Text>
                                <Text as="p" fontSize="sm"> - Complete 2 small project during intership program.</Text>
                                <Text as="p" fontSize="sm">
                                    - Collaborate with team leader to define and improve the team’s workflow, which	reduce bugs	related	to configuration or conflict.
                                </Text>
                            </Flex>
                        </VStack>
                    </HStack>


                </HStack>
            </Flex>
        </Flex>
    );
}
