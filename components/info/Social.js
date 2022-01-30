import { FaLinkedinIn, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Text, Flex, HStack, Spacer } from '@chakra-ui/react'


const Social = ({ linkedinUrl, githubUrl }) => {
    return (
        <Flex justify='center' w='100%' h={10} my={4} px={{ base: 0, lg: 4, xl: 8 }}>
            <HStack as='a' target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/richardannowit/" >
                <FaLinkedinIn fontSize={{ base: '0.8rem', lg: '1.1rem', xl: '1.2rem' }} color='#ffffff' />
                <Text as='span' mx={2} fontSize={{ base: 'xs', lg: 'xs', xl: 'sm' }} color='#DBDBDB'>Linkedin</Text>
                <FaExternalLinkAlt ml={3} fontSize={{ base: '0.8rem', lg: '0.8rem', xl: '1rem' }} color='#ffffff' />
            </HStack>
            <Spacer />
            <HStack as='a' target="_blank" rel="noopener noreferrer" href="https://github.com/richardannowit">
                <FaGithub fontSize={{ base: '0.8rem', lg: '1.1rem', xl: '1.2rem' }} color='#ffffff' />
                <Text as='span' mx={2} fontSize={{ base: 'xs', lg: 'xs', xl: 'sm' }} color='#DBDBDB'>Github</Text>
                <FaExternalLinkAlt ml={3} fontSize={{ base: '0.8rem', lg: '0.8rem', xl: '1rem' }} color='#ffffff' />
            </HStack>
        </Flex>
    );
}

export default Social;