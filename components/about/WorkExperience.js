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
        <>
            <Flex direction="column" alignSelf="center" alignItems="center" my={3}  {...props}>
                <Heading as="h1" color={headingColor} textTransform='uppercase' fontWeight="bold" >
                    {trans.about.work_experience_title}
                </Heading>
                <Flex direction="column" align="center" h="100%" minW="100%" my={5}>
                    <HStack alignItems="flex-start" spacing={{ base: '3', md: '5', lg: '3', xl: '10' }}>
                        <HStack alignItems="center" spacing={5}>
                            <Box boxSize="90px" pt={3}>
                                <Image src="/images/NashTech_logo.png" alt="NashTech Logo" />
                            </Box>

                            <VStack alignItems="flex-end">
                                <Heading as="h6" color={stressTextColor} fontSize={{ base: 'xl', md: 'lg', lg: 'xl', xl: '2xl' }} textAlign="right" pt={3} >
                                    NashTech Vietnam
                                </Heading>
                                <Flex direction="column" align="flex-end" color={grayTextColor}>
                                    <Text textAlign="right">{trans.about.position}</Text>
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
                                <Flex direction="column" maxW="16em" px={5} py={3} color={whiteTextColor} align="center" bgColor={cardColor} borderRadius={8}>
                                    <Text as="p" fontSize="sm">{trans.about.nashtech_description1}</Text>
                                    <Text as="p" fontSize="sm">{trans.about.nashtech_description2}</Text>
                                    <Text as="p" fontSize="sm">
                                        {trans.about.nashtech_description3}
                                    </Text>
                                </Flex>
                            </VStack>
                        </HStack>


                    </HStack>
                </Flex>
            </Flex>
            <Flex>

            </Flex>
        </>
    );
}

// TODO: This layout for mobile
