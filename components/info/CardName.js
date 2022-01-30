import { Box, Avatar, Heading, Text } from '@chakra-ui/react'

const CardName = ({ avatar, name, specialist, shortDescription }) => {
    return (
        <Box>
            <Avatar size='xl' name={name} src={avatar} />
            <Heading
                as="h1"
                fontSize={{ base: 'sm', lg: 'lg', xl: '2xl' }}
                color='#ffffff'
                fontWeight="600"
                letterSpacing='wider'
                pt={2}
            >
                {name}
            </Heading>
            <Text fontSize={{ base: 'xs', lg: 'sm', xl: 'md' }} color='#DBDBDB' py={2}>{specialist}</Text>
            <Text
                fontSize={{ base: 'xs', lg: 'xs', xl: 'sm' }}
                color='#DBDBDB'
                px={{ base: 2, lg: 5, xl: 10 }}
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