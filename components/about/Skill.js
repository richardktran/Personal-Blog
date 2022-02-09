import { Flex, Heading, HStack, ListItem, Text, UnorderedList, useColorModeValue, VStack } from '@chakra-ui/react';
import React from 'react';
import useTrans from '../../pages/hooks/useTrans';

export default function Skill({ ...props }) {
    const trans = useTrans();
    const headingColor = useColorModeValue('#00AFB9', '#FF8700');
    const stressTextColor = useColorModeValue('#FFFFFF', '#FFFFFF');
    const grayTextColor = useColorModeValue('#FFFFFF', '#FFFFFF');
    const bgColor = useColorModeValue('#22B07D', '#22B07D')


    return (
        <Flex w="60%" direction="column" alignItems="center" my={3}  {...props}>
            <Heading as="h1" color={headingColor} textTransform='uppercase' fontWeight="bold" my={5}>
                {trans.about.skill_title}
            </Heading>
            <HStack spacing={10}>
                <Flex direction="column" align="flex-start" bgColor={bgColor} borderRadius={20} px={7} py={7}>
                    <Heading as="h6" color={stressTextColor} textTransform='uppercase' fontWeight="bold" fontSize="lg" alignSelf="center">
                        {trans.about.programming_language}:
                    </Heading>
                    <UnorderedList ml={7} mt={3} color={grayTextColor} fontWeight="normal">
                        <ListItem>PHP</ListItem>
                        <ListItem>Javascript</ListItem>
                        <ListItem>Python</ListItem>
                        <ListItem>Dart</ListItem>
                    </UnorderedList>
                </Flex>
                <Flex direction="column" align="flex-start" bgColor={bgColor} borderRadius={20} px={7} py={7}>
                    <Heading as="h6" fontSize="lg" textTransform='uppercase' fontWeight="bold" color={stressTextColor} alignSelf="center">
                        {trans.about.framework_platform}:
                    </Heading>
                    <UnorderedList color="#F5F5F5" color={grayTextColor} fontWeight="normal" ml={7} mt={3}>
                        <ListItem>Laravel</ListItem>
                        <ListItem>NextJS/ReactJS</ListItem>
                        <ListItem>NodeJS</ListItem>
                        <ListItem>Flutter</ListItem>
                    </UnorderedList>
                </Flex>
            </HStack>
            <Flex direction="column" align="flex-start" bgColor={bgColor} borderRadius={20} my={5} px={7} py={7}>
                <Heading as="h6" fontSize="lg" textTransform='uppercase' color={stressTextColor} fontWeight="bold" alignSelf="center">
                    {trans.about.knowledge}
                </Heading>
                <UnorderedList ml={7} mt={3} color={grayTextColor} fontWeight="normal">
                    <ListItem>{trans.about.knowledge1}</ListItem>
                    <ListItem>{trans.about.knowledge2}</ListItem>
                    <ListItem>{trans.about.knowledge3}</ListItem>
                </UnorderedList>
            </Flex>
        </Flex>
    )
}
