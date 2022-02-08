import { Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

export default function Summary({ ...props }) {
    return (
        <Flex justify="center" align="center" direction="column"  {...props}>
            <Heading as="h1" color="#81E6D9" fontWeight="bold">SUMMARY</Heading>
            <Text my={3} style={{ textIndent: 20 }}>I'm a final year student at Can Tho University with 1 year of experience in Web Development,
                with good knowledge of Data Structure, Algorithm, a little about Machine Learning. I was
                attended ACM/ICPC in Ha Noi 2018
            </Text>
            <Text style={{ textIndent: 20 }}>
                Learning new languages and technologies is what I am passionate about. I am considered
                a team-player because I like to help other and tend to work well within the group. I can also do
                some mentoring tasks and do code reviews for other team members.
            </Text>
        </Flex>
    )
}
