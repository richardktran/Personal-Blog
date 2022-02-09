import React from 'react';
import { Image, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import ProjectCard from '../common/ProjectCard';
import useTrans from '../../pages/hooks/useTrans';

export default function Projects({ ...props }) {
    const trans = useTrans();
    const headingColor = useColorModeValue('#00AFB9', '#FF8700');
    const stressTextColor = useColorModeValue('#FFFFFF', '#FFFFFF');
    const grayTextColor = useColorModeValue('#FFFFFF', '#FFFFFF');
    const bgColor = useColorModeValue('#22B07D', '#22B07D')


    return (
        <Flex direction="column" w="100%" alignItems="center" justifyItems="center" {...props}>
            <Heading as="h1" color={headingColor} textTransform='uppercase' fontWeight="bold" my={5}>
                {trans.about.projects_title}
            </Heading>
            <ProjectCard
                bgColor={bgColor}
                nameColor={stressTextColor}
                subColor={grayTextColor}
                img="/images/projects/qf.png"
                name={trans.about.health_care_name}
                description={trans.about.health_care_description}
                technologies="Flutter framework, Dart language, Firebase"
            />

            <ProjectCard
                bgColor={bgColor}
                nameColor={stressTextColor}
                subColor={grayTextColor}
                imgRight
                img="/images/projects/mobile.png"
                name={trans.about.health_care_name}
                description={trans.about.health_care_description}
                technologies="Flutter framework, Dart language, Firebase"
            />

            <ProjectCard
                bgColor={bgColor}
                nameColor={stressTextColor}
                subColor={grayTextColor}
                img="/images/projects/qf.png"
                name={trans.about.health_care_name}
                description={trans.about.health_care_description}
                technologies="Flutter framework, Dart language, Firebase"
            />
        </Flex>
    )
}
