import { Box, Avatar, Heading, Text, useColorModeValue } from '@chakra-ui/react'

const CardName = ({ avatar, name, specialist, shortDescription }) => {
    return (
        <Box>
            <Avatar size='xl' name={name} src={avatar} />
            <Heading
                as="h1"
                fontSize={{ base: 'sm', lg: 'lg', xl: '2xl' }}
                color={useColorModeValue('#003049', '#FFFFFF')}
                letterSpacing='wider'
                pt={2}
            >
                {name}
            </Heading>
            <Text fontSize={{ base: 'xs', lg: 'sm', xl: 'md' }} color={useColorModeValue('gray.800', '#E6E6E6')} py={2}>{specialist}</Text>
            <Text
                fontSize={{ base: 'xs', lg: 'xs', xl: 'sm' }}
                fontWeight='normal'
                color={useColorModeValue('gray.800', '#E6E6E6')}
                px={{ base: 6, lg: 7, xl: 10 }}
                py={2}
                lineHeight={{ base: 'base', lg: 'taller', xl: 'taller' }}
                textAlign='left'
            >
                {shortDescription}
            </Text>
        </Box>
    );
}


export default CardName;