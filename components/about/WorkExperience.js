import React from 'react';
import { Box, Flex, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import Timeline from '../common/Timeline';

export default function WorkExperience({ ...props }) {
    return (
        <Flex direction="column" alignItems="center" my={3}  {...props}>
            <Heading as="h1" color="#81E6D9" fontWeight="bold" >WORK EXPERIENCE</Heading>
            <Flex direction="column" align="center" h="100%" minW="100%" my={5}>
                <HStack alignItems="flex-start" spacing={10}>
                    <HStack alignItems="center" spacing={5}>
                        <Box boxSize="90px" pt={3}>
                            <Image src="/images/NashTech_logo.png" alt="NashTech Logo" />
                        </Box>

                        <VStack alignItems="flex-end">
                            <Heading as="h6" fontSize="2xl" textAlign="right" pt={3} >NashTech Vietnam</Heading>
                            <Flex direction="column" align="flex-end">
                                <Text textAlign="right">Internship</Text>
                                <Text textAlign="right" opacity="80%">06/2021 - 09/2021</Text>
                            </Flex>
                        </VStack>
                    </HStack>

                    <Timeline
                        icon={<Icon icon="ps:work-case" height="30" color="#00897B" />}
                        width="130px"
                    />

                    <HStack>
                        <VStack>
                            <Flex direction="column" maxW="18em" align="center" bgColor="#00897B" borderRadius={8} px={5} py={3}>
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
