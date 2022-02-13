import { Flex, Heading, HStack, ListItem, Stack, Text, UnorderedList, useColorModeValue, VStack } from '@chakra-ui/react';
import React from 'react';
import useTrans from '../../pages/hooks/useTrans';
import { motion } from 'framer-motion';

const MotionFlex = motion(Flex)
const MotionStack = motion(Stack)
const listEffect = {
    visible: {
        opacity: 1,
    },
    hidden: {
        opacity: 0,
    },
}
const leftItemEffect = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
}
const rightItemEffect = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 100 },
}

const bottomItemEffect = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 100 },
}
export default function Skill({ ...props }) {
    const trans = useTrans();
    const headingColor = useColorModeValue('#00AFB9', '#FF8700');
    const stressTextColor = useColorModeValue('#FFFFFF', '#FFFFFF');
    const grayTextColor = useColorModeValue('#FFFFFF', '#FFFFFF');
    const bgColor = useColorModeValue('#22B07D', '#22B07D')


    return (
        <MotionFlex w={{ base: '90%', md: '90%', lg: '70%', xl: '70%' }} direction="column" alignItems="center" my={3}  {...props}>
            <Heading as="h1" color={headingColor} textTransform='uppercase' fontWeight="bold" my={5}>
                {trans.about.skill_title}
            </Heading>
            <MotionStack
                w="100%"
                justify="center"
                spacing={{ base: '5', md: '5', lg: '8', xl: '10' }}
                direction={{ base: 'column', md: 'row' }}
                initial="hidden"
                whileInView="visible"
                variants={listEffect}
            >
                <MotionFlex variants={leftItemEffect} direction="column" align="flex-start" bgColor={bgColor} borderRadius={20} px={7} py={7}>
                    <Heading as="h6" color={stressTextColor} textTransform='uppercase' fontWeight="bold" fontSize="md" alignSelf="center">
                        <nobr>{trans.about.programming_language}:</nobr>
                    </Heading>
                    <UnorderedList ml={7} mt={3} color={grayTextColor} fontWeight="normal">
                        <ListItem>PHP</ListItem>
                        <ListItem>Javascript</ListItem>
                        <ListItem>Python</ListItem>
                        <ListItem>Dart</ListItem>
                    </UnorderedList>
                </MotionFlex>
                <MotionFlex variants={rightItemEffect} direction="column" align="flex-start" bgColor={bgColor} borderRadius={20} px={7} py={7}>
                    <Heading as="h6" fontSize="md" textTransform='uppercase' fontWeight="bold" color={stressTextColor} alignSelf="center">
                        {trans.about.framework_platform}:
                    </Heading>
                    <UnorderedList color="#F5F5F5" color={grayTextColor} fontWeight="normal" ml={7} mt={3}>
                        <ListItem>Laravel</ListItem>
                        <ListItem>NextJS/ReactJS</ListItem>
                        <ListItem>NodeJS</ListItem>
                        <ListItem>Flutter</ListItem>
                    </UnorderedList>
                </MotionFlex>
            </MotionStack >
            <MotionFlex initial="hidden" whileInView="visible" variants={bottomItemEffect} direction="column" align="flex-start" bgColor={bgColor} borderRadius={20} my={5} px={7} py={7}>
                <Heading as="h6" fontSize="lg" textTransform='uppercase' color={stressTextColor} fontWeight="bold" alignSelf="center">
                    {trans.about.knowledge}
                </Heading>
                <UnorderedList ml={7} mt={3} color={grayTextColor} fontWeight="normal">
                    <ListItem>{trans.about.knowledge1}</ListItem>
                    <ListItem>{trans.about.knowledge2}</ListItem>
                    <ListItem>{trans.about.knowledge3}</ListItem>
                </UnorderedList>
            </MotionFlex>
        </MotionFlex >
    )
}
