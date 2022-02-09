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
        <Flex direction="column" alignItems="center" my={3}  {...props}>
            <Heading as="h1" color={headingColor} fontWeight="bold" my={5}>SKILLS</Heading>
            <HStack spacing={10}>
                <Flex direction="column" align="flex-start" bgColor={bgColor} borderRadius={20} px={7} py={7}>
                    <Heading as="h6" color={stressTextColor} fontWeight="bold" fontSize="lg" alignSelf="center"> PROGRAMMING LANGUAGE:</Heading>
                    <UnorderedList ml={7} mt={3} color={grayTextColor} fontWeight="normal">
                        <ListItem>PHP</ListItem>
                        <ListItem>Javascript</ListItem>
                        <ListItem>Python</ListItem>
                        <ListItem>Dart</ListItem>
                    </UnorderedList>
                </Flex>
                <Flex direction="column" align="flex-start" bgColor={bgColor} borderRadius={20} px={7} py={7}>
                    <Heading as="h6" fontSize="lg" fontWeight="bold" color={stressTextColor} alignSelf="center"> FRAMEWORKS/PLATFORM:</Heading>
                    <UnorderedList color="#F5F5F5" color={grayTextColor} fontWeight="normal" ml={7} mt={3}>
                        <ListItem>Laravel</ListItem>
                        <ListItem>NextJS/ReactJS</ListItem>
                        <ListItem>NodeJS</ListItem>
                        <ListItem>Flutter</ListItem>
                    </UnorderedList>
                </Flex>
            </HStack>
            <Flex direction="column" align="flex-start" bgColor={bgColor} borderRadius={20} my={5} px={7} py={7}>
                <Heading as="h6" fontSize="lg" color={stressTextColor} fontWeight="bold" alignSelf="center"> KNOWLEDGE</Heading>
                <UnorderedList ml={7} mt={3} color={grayTextColor} fontWeight="normal">
                    <ListItem>Good understanding about OOP, the Agile and Scrum process,...</ListItem>
                    <ListItem>Good understanding software design, database design, RestfulAPI,...</ListItem>
                    <ListItem>Good time management, action plan, teamwork skills, and problem solving...</ListItem>
                </UnorderedList>
            </Flex>
        </Flex>
    )
}
