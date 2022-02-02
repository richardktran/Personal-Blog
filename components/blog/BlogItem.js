import React from 'react';
import { Box, Text, Heading, Flex, HStack, useColorModeValue } from "@chakra-ui/react";
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa";

export default function BlogItem({ href }) {

    const bg = useColorModeValue('gray.100', '#2B2B2B')
    const textColor = useColorModeValue('#000000', '#ffffff')
    const tagColor = useColorModeValue('#0A594F', '#81E6D9')

    return (
        <Box
            bg={bg}
            w="75%"
            borderRadius={12}
            px={{ base: '6', lg: '8', xl: '10' }}
            py={{ base: '6', lg: '7', xl: '7' }}
            my={3}
        >
            <HStack className="tag" spacing={5}>
                <Link href={href}>
                    <a>
                        <Text as='span' color={tagColor} fontSize='sm' fontWeight='semibold'>
                            SELF-HELP
                        </Text>
                    </a>
                </Link>

                <Link href={href}>
                    <a>
                        <Text as='span' color={tagColor} fontSize='sm' fontWeight='semibold'>
                            MOTIVATION
                        </Text>
                    </a>
                </Link>
            </HStack>
            <Link href={href}>
                <a>
                    <Heading my={{ base: '1', lg: '2', xl: '3' }} color={textColor} fontSize='xl'>How to remember more of what you read</Heading>
                </a>
            </Link>

            <Text color={textColor} opacity="75%" fontSize='sm' my={{ base: '1', lg: '2', xl: '3' }} noOfLines={3} lineHeight={{ base: '1.7', lg: '1.9', xl: '1.9' }}>
                The digitization of information is a double-edged sword. It’s an unassailable benefit that every bit (and byte) of knowledge resides on the supercomputer in our pocket. Yet, the unintended consequence is that we’re bombarded with information: Kindle books, blog posts, podcasts, academic journals, videos and much more. The New York Times estimates that we we consume 34 gigabytes of content a day. That’s the equivalent of 25% of War and Peace every single day.
            </Text>
            <Flex justify='space-between'>
                <Text color={textColor} opacity='75%' fontSize='sm'>5 April, 2021</Text>
                <Link href={href}>
                    <a>
                        <Flex align='center'>
                            <Text color={tagColor} mr={3} fontSize='sm' fontWeight='semibold'>
                                Read more {' '}
                            </Text>
                            <FaArrowRight color={tagColor} />
                        </Flex>
                    </a>
                </Link>
            </Flex>
        </Box>
    );
}
