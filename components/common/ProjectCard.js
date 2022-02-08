import React from 'react';
import { Image, Flex, Heading, Text } from '@chakra-ui/react';

export default function ProjectCard({ img, name, description, technologies, imgRight = false, ...props }) {
    return (
        <Flex direction={imgRight ? 'row-reverse' : 'row'} alignItems="center" w="80%" my={7}>
            <Image src={img} borderRadius="16px" h="250px" objectFit="fill " alt="QF formula" />
            <Flex direction="column" align="flex-start" bgColor="#313131" borderRadius={imgRight ? '20px 0 0 20px' : '0 20px 20px 0'} px={7} py={7}>
                <Heading as="h5" fontSize="lg" alignSelf="left">{name}</Heading>
                <Text
                    fontSize={{ base: 'xs', lg: 'xs', xl: 'sm' }}
                    color="#DBDBDB"
                    py={1}
                    lineHeight={{ base: 'base', lg: 'tall', xl: 'tall' }}
                    textAlign='left'
                >
                    {description}
                </Text>
                <Text
                    fontSize={{ base: 'xs', lg: 'xs', xl: 'sm' }}
                    color="#DBDBDB"
                    py={1}
                    lineHeight={{ base: 'base', lg: 'tall', xl: 'tall' }}
                    textAlign='left'
                >
                    <span><strong>Technologies:</strong></span> {technologies}
                </Text>
            </Flex>
        </Flex>

    )
}
