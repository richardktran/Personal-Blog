import { Box, Image, Flex, Heading, HStack, Text, VStack, UnorderedList, ListItem } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import Certifications from '../components/about/Certifications';
import Education from '../components/about/Education';
import Projects from '../components/about/Projects';
import Skill from '../components/about/Skill';
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
                mb={10}
            >
                <Summary mb={50} px={12} />
                <WorkExperience my={50} />
                <Education my={50} />
                <Skill />
                <Certifications px={12} />
                <Projects />
            </Flex>
        </>
    )
}
