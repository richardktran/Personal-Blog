import { Box, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

export default function ProjectCard({ titleColor, frameColor, subColor }) {
    return (
        <Box w="100%" mb={20}>
            <Stack spacing="0" direction="column" position={{ base: 'static', md: 'relative' }}>
                <Box w=
                    {{ base: '100%', md: '50%' }}

                    px={{ base: '3', md: '5', lg: '8', xl: '10' }}
                // py={0}
                // py={{ base: '3', md: '5', lg: '8', xl: '10' }}
                >
                    <Box
                        px={{ base: '3', md: '7', lg: '7', xl: '7' }}
                        py={{ base: '3', md: '7', lg: '7', xl: '7' }}
                        bg={frameColor}
                        borderRadius="4px"
                    >
                        <Image
                            src="/images/projects/qf.png"
                            borderRadius="8px"
                            w="100%"
                            objectFit="fill "
                            alt="QF formula"
                        />
                    </Box>

                </Box>
                <Flex
                    display="column"
                    justify="space-between"
                    borderTop={{ base: 'none', md: `1px solid ${frameColor}` }}
                    borderBottom={{ base: `1px solid ${frameColor}`, md: 'none' }}
                    align="flex-start"
                    w={{ base: '100%', md: '45%' }}
                    boxSizing="border-box"
                    // bg="#958595"
                    h={{ base: '200px', md: '100%' }}
                    position={{ base: 'static', md: 'absolute' }}
                    left="50%"
                    top={0}
                    px={{ base: '5', md: '0', lg: '0', xl: '0' }}
                    py={{ base: '3', md: '5', lg: '8', xl: '10' }}
                >
                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl', lg: '2xl', xl: '3xl' }} alignSelf="left" mb={2} color={titleColor}>
                        Health Care In Can Tho App
                    </Heading>
                    <Text
                        fontSize={{ base: 'xs', lg: 'md', xl: 'lg' }}
                        color="#DBDBDB"
                        py={1}
                        lineHeight={{ base: 'base', lg: 'tall', xl: 'tall' }}
                        textAlign='left'
                        lineHeight="tall"
                        color={subColor}
                    >
                        <span><strong>Description: </strong></span>
                        A free mobile app delivering Lancaster University services, resources, and information - at your fingertips
                    </Text>
                    <Text fontSize={{ base: 'xs', lg: 'md', xl: 'lg' }} lineHeight="tall">
                        <span><strong>Technologies: </strong></span>
                        Flutter framework, Dart language, Firebase
                    </Text>
                </Flex>
            </Stack>
        </Box>
    )
}
