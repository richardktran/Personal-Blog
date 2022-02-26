import React from 'react';
import { Box, Text, Heading, Flex, HStack, useColorModeValue } from "@chakra-ui/react";
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa";
import useTrans from '../../hooks/useTrans';
import { motion } from "framer-motion"

const MotionBox = motion(Box);

export default function BlogItem({ href, ...props }) {
    const trans = useTrans()
    const bg = useColorModeValue('#FFFFFF', '#171A1E')
    const textColor = useColorModeValue('#003049', '#ffffff')
    const subTextColor = useColorModeValue('#6B6B6B', '#E6E6E6')
    const tagColor = useColorModeValue('#22B07D', '#22B07D')


    return (
        <MotionBox
            whileHover={{ scale: 1.04 }}
            // animate={{ x: [null, 100, 0] }}
            // transition={{ duration: 1, times: [0, 0.2, 1] }}
            bg={bg}
            w="75%"
            borderRadius={12}
            px={{ base: '6', lg: '8', xl: '10' }}
            py={{ base: '6', lg: '7', xl: '7' }}
            my={3}
            {...props}
        >
            <HStack className="tag" spacing={5}>
                <Link href={href}>
                    <a>
                        <Text as='span' color={tagColor} fontSize='sm' fontWeight='bold'>
                            SELF-HELP
                        </Text>
                    </a>
                </Link>

                <Link href={href}>
                    <a>
                        <Text as='span' color={tagColor} fontSize='sm' fontWeight='bold'>
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

            <Text color={subTextColor} fontSize='sm' my={{ base: '1', lg: '2', xl: '3' }} noOfLines={3} lineHeight={{ base: '1.7', lg: '1.9', xl: '1.9' }}>
                The digitization of information is a double-edged sword. It’s an unassailable benefit that every bit (and byte) of knowledge resides on the supercomputer in our pocket. Yet, the unintended consequence is that we’re bombarded with information: Kindle books, blog posts, podcasts, academic journals, videos and much more. The New York Times estimates that we we consume 34 gigabytes of content a day. That’s the equivalent of 25% of War and Peace every single day.
            </Text>
            <Flex justify='space-between'>
                <Text color={subTextColor} fontSize='sm'>5 April, 2021</Text>
                <Link href={href}>
                    <a>
                        <Flex align='center'>
                            <Text color={tagColor} mr={3} fontSize='sm' fontWeight='bold'>
                                {trans.blog.read_more} {' '}
                            </Text>
                            <FaArrowRight color={tagColor} />
                        </Flex>
                    </a>
                </Link>
            </Flex>
        </MotionBox>
    );
}
