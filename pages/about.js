import { Box, Circle, Flex, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import Education from '../components/about/Education';
import Summary from '../components/about/summary';


export default function About() {
    return (
        <>
            <Head>
                <title>Richard Annowit - About</title>
            </Head>
            <Flex
                direction="column"
                alignItems="center"
                pb={10}
                px={12}
            >
                <Summary />
                <Education />

            </Flex>
        </>
    )
}
