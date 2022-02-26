import { Flex, Heading, Box, ListItem, Stack, Text, UnorderedList, useColorModeValue, VStack, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import useTrans from '../../hooks/useTrans';
import { motion } from 'framer-motion';

const MotionGrid = motion(Grid)
const MotionGridItem = motion(GridItem)
const MotionBox = motion(Box)
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
    hidden: { opacity: 0, x: 50 },
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
        <MotionBox w={{ base: '90%', md: '90%', lg: '70%', xl: '70%' }} my={3}  {...props}>
            <Heading as="h1" color={headingColor} textAlign="center" textTransform='uppercase' fontWeight="bold" my={5}>
                {trans.about.skill_title}
            </Heading>
            <Box
                w="90%"
                mx="auto"
            >
                <MotionGrid
                    templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(4, 1fr)'
                    gap={4}
                    initial="hidden"
                    whileInView="visible"
                    variants={listEffect}
                >
                    <MotionGridItem colSpan={{ base: 4, md: 2 }} variants={leftItemEffect}>
                        <Box
                            bgColor={bgColor}
                            borderRadius={20}
                            px={7} py={7}
                        >
                            <Heading as="h6" color={stressTextColor} textTransform='uppercase' fontWeight="bold" fontSize="md">
                                {trans.about.programming_language}:
                            </Heading>
                            <UnorderedList ml={7} mt={3} color={grayTextColor} fontWeight="normal">
                                <ListItem>PHP</ListItem>
                                <ListItem>Javascript</ListItem>
                                <ListItem>Python</ListItem>
                                <ListItem>Dart</ListItem>
                                <ListItem>C++</ListItem>
                            </UnorderedList>
                        </Box>
                    </MotionGridItem>
                    <MotionGridItem colSpan={{ base: 4, md: 2 }} variants={rightItemEffect}>
                        <Box
                            bgColor={bgColor}
                            borderRadius={20}
                            px={7} py={7}
                        >
                            <Heading as="h6" fontSize="md" textTransform='uppercase' fontWeight="bold" color={stressTextColor} >
                                {trans.about.framework_platform}:
                            </Heading>
                            <UnorderedList color={grayTextColor} fontWeight="normal" ml={7} mt={3}>
                                <ListItem>Laravel</ListItem>
                                <ListItem>ReactJS</ListItem>
                                <ListItem>NodeJS</ListItem>
                                <ListItem>Flutter</ListItem>
                                <ListItem>Firebase</ListItem>
                            </UnorderedList>
                        </Box>
                    </MotionGridItem>
                    <MotionGridItem colSpan={4} variants={bottomItemEffect}>
                        <Box
                            bgColor={bgColor}
                            borderRadius={20}
                            px={7} py={7}
                        >
                            <Heading as="h6" fontSize="lg" textTransform='uppercase' color={stressTextColor} fontWeight="bold">
                                {trans.about.knowledge}
                            </Heading>
                            <UnorderedList ml={7} mt={3} color={grayTextColor} fontWeight="normal">
                                <ListItem>{trans.about.knowledge1}</ListItem>
                                <ListItem>{trans.about.knowledge2}</ListItem>
                                <ListItem>{trans.about.knowledge3}</ListItem>
                            </UnorderedList>
                        </Box>
                    </MotionGridItem>
                </MotionGrid >

            </Box>
        </MotionBox >
    )
}
