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
        <Flex direction="column" alignItems="center"  {...props}>
            <Heading as="h1" color={headingColor} fontWeight="bold" >EDUCATION</Heading>
            <Flex direction="column" align="center" h="100%" minW="100%" my={5}>
                <HStack alignItems="flex-start" spacing={10}>
                    <HStack alignItems="center" spacing={5}>
                        <Box boxSize="90px" pt={3}>
                            <Image src="/images/CTU_logo.png" alt="CTU logo" />
                        </Box>

                        <VStack>
                            <Heading as="h6" color={stressTextColor} fontSize="2xl" pt={3} textAlign="right" >Can Tho University</Heading>
                            <Flex direction="column" color={whiteTextColor} align="center" bgColor={cardColor} borderRadius={8} px={5} py={3}>
                                <Text><span><strong>Degree grade:</strong></span> Excellent</Text>
                                <Text><span><strong>GPA:</strong></span> 3.6/4</Text>
                            </Flex>
                        </VStack>
                    </HStack>

                    <Timeline
                        bg={timelineColor}
                        icon={<Icon icon="cil:education" height="40" color={iconTimelineColor} />}
                    />

                    <HStack>
                        <VStack>
                            <Heading as="h6" fontSize="2xl" pt={3}>Bachelor Degree</Heading>
                            <Flex direction="column" color={whiteTextColor} align="center" bgColor={cardColor} borderRadius={8} px={5} py={3}>
                                <Text><strong>Software Engineering</strong></Text>
                                <Text>2018 - 2022</Text>
                            </Flex>
                        </VStack>
                        <Box boxSize="90px">
                        </Box>
                    </HStack>


                </HStack>
            </Flex>
        </Flex>
    )
}
