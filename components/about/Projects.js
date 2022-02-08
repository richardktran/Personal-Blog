import React from 'react';
import { Image, Flex, Heading, Text } from '@chakra-ui/react';
import ProjectCard from '../common/ProjectCard';

export default function Projects({ ...props }) {
    return (
        <Flex direction="column" w="100%" alignItems="center" justifyItems="center" {...props}>
            <Heading as="h1" color="#81E6D9" fontWeight="bold" my={5}>PROJECTS</Heading>
            <ProjectCard
                img="/images/projects/qf.png"
                name="Health Care In Can Tho App"
                description="A free mobile app delivering Lancaster University services, resources, and information - at your fingertips"
                technologies="Flutter framework, Dart language, Firebase"
            />

            <ProjectCard
                imgRight
                img="/images/projects/mobile.png"
                name="Health Care In Can Tho App"
                description="A free mobile app delivering Lancaster University services, resources, and information - at your fingertips"
                technologies="Flutter framework, Dart language, Firebase"
            />

            <ProjectCard
                img="/images/projects/qf.png"
                name="Health Care In Can Tho App"
                description="A free mobile app delivering Lancaster University services, resources, and information - at your fingertips"
                technologies="Flutter framework, Dart language, Firebase"
            />
        </Flex>
    )
}
