import { Box, Circle, Flex, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import Education from '../components/about/Education';
import Summary from '../components/about/summary';
import WorkExperience from '../components/about/WorkExperience';


export default function About() {
    return (
        <>
            <Head>
                <title>Richard Annowit - About</title>
            </Head>
            <Flex
                direction="column"
                alignItems="center"
                justifyItems="flex-start"
                pb={10}
                px={12}
            >
                <Summary mb={50} />
                <WorkExperience my={50} />
                <Education my={50} />
            </Flex>
        </>
    )
}
