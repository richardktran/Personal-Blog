import { Flex, Heading, HStack, ListItem, Text, UnorderedList, VStack } from '@chakra-ui/react';
import React from 'react';

export default function Skill({ ...props }) {
    return (
        <Flex direction="column" alignItems="center" my={3}  {...props}>
            <Heading as="h1" color="#81E6D9" fontWeight="bold" my={5}>SKILLS</Heading>
            <HStack spacing={10}>
                <Flex direction="column" align="flex-start" bgColor="#313131" borderRadius={20} px={7} py={7}>
                    <Heading as="h6" fontSize="lg" alignSelf="center"> PROGRAMMING LANGUAGE:</Heading>
                    <UnorderedList ml={7} mt={3}>
                        <ListItem>PHP</ListItem>
                        <ListItem>Javascript</ListItem>
                        <ListItem>Python</ListItem>
                        <ListItem>Dart</ListItem>
                    </UnorderedList>
                </Flex>
                <Flex direction="column" align="flex-start" bgColor="#313131" borderRadius={20} px={7} py={7}>
                    <Heading as="h6" fontSize="lg" alignSelf="center"> FRAMEWORKS/PLATFORM:</Heading>
                    <UnorderedList color="#F5F5F5" fontWeight="normal" ml={7} mt={3}>
                        <ListItem>Laravel</ListItem>
                        <ListItem>NextJS/ReactJS</ListItem>
                        <ListItem>NodeJS</ListItem>
                        <ListItem>Flutter</ListItem>
                    </UnorderedList>
                </Flex>
            </HStack>
            <Flex direction="column" align="flex-start" bgColor="#313131" borderRadius={20} my={5} px={7} py={7}>
                <Heading as="h6" fontSize="lg" alignSelf="center"> KNOWLEDGE</Heading>
                <UnorderedList ml={7} mt={3}>
                    <ListItem>Good understanding about OOP, the Agile and Scrum process,...</ListItem>
                    <ListItem>Good understanding software design, database design, RestfulAPI,...</ListItem>
                    <ListItem>Good time management, action plan, teamwork skills, and problem solving...</ListItem>
                </UnorderedList>
            </Flex>
        </Flex>
    )
}
