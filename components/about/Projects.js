import React from 'react';
import { Image, Flex, Heading, Text, useColorModeValue, Box, Stack, Spacer } from '@chakra-ui/react';
import useTrans from '../../hooks/useTrans';
import ProjectCard from '../common/ProjectCard';
import { motion } from 'framer-motion';

const MotionFlex = motion(Flex)
export default function Projects({ ...props }) {
    const trans = useTrans();
    const headingColor = useColorModeValue('#00AFB9', '#FF8700');
    const stressTextColor = useColorModeValue('#003049', '#FFFFFF');
    const grayTextColor = useColorModeValue('#1A202C', '#E6E6E6');
    const bgColor = useColorModeValue('#22B07D', '#22B07D')
    const frameColor = useColorModeValue('#E1E3E5', '#454545')


    return (
        <MotionFlex direction="column" w="100%" alignItems="center" justifyItems="center" {...props}>
            <Heading as="h1" color={headingColor} textTransform='uppercase' fontWeight="bold" my={5}>
                Projects
            </Heading>
            <ProjectCard
                projectName="Personal web blog"
                description="This project is build with share experience purposes and this is also the cv online for me"
                technologies="ReactJS/NextJS, Laravel"
                imgUrl="/images/projects/blog.png"
                frameColor={frameColor}
                subColor={grayTextColor}
                titleColor={stressTextColor}
            />
            <ProjectCard
                projectName="Personal web blog"
                description="This project is build with share experience purposes and this is also the cv online for me"
                technologies="ReactJS/NextJS, Laravel"
                imgUrl="/images/projects/blog.png"
                frameColor={frameColor}
                subColor={grayTextColor}
                titleColor={stressTextColor}
            />
        </MotionFlex>
    )
}
