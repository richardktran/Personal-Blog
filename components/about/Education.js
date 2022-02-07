import React from 'react';
import { Box, Flex, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import Timeline from '../common/Timeline';

export default function Education({ ...props }) {
    return (
        <Flex direction="column" alignItems="center" my={3}  {...props}>
            <Heading as="h1" color="#81E6D9" fontWeight="bold" >EDUCATION</Heading>
            <Flex direction="column" align="center" h="100%" minW="100%" my={5}>
                <HStack alignItems="flex-start" spacing={10}>
                    <HStack alignItems="center" spacing={5}>
                        <Box boxSize="90px" pt={3}>
                            <Image src="/images/CTU_logo.png" alt="CTU logo" />
                        </Box>

                        <VStack>
                            <Heading as="h6" fontSize="2xl" pt={3} textAlign="right" >Can Tho University</Heading>
                            <Flex direction="column" align="center" bgColor="#00897B" borderRadius={8} px={5} py={3}>
                                <Text><span><strong>Degree grade:</strong></span> Excellent</Text>
                                <Text><span><strong>GPA:</strong></span> 3.6/4</Text>
                            </Flex>
                        </VStack>
                    </HStack>

                    <Timeline icon={<Icon icon="cil:education" height="40" color="#00897B" />} />

                    <HStack>
                        <VStack>
                            <Heading as="h6" fontSize="2xl" pt={3}>Bachelor Degree</Heading>
                            <Flex direction="column" align="center" bgColor="#00897B" borderRadius={8} px={5} py={3}>
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
