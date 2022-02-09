import React from 'react';
import { Image, Flex, Heading, Text } from '@chakra-ui/react';
import useTrans from '../../pages/hooks/useTrans';

export default function ProjectCard({ img, name, description, technologies, imgRight = false, bgColor, nameColor, subColor, ...props }) {
    const trans = useTrans();
    return (
        <Flex direction={imgRight ? 'row-reverse' : 'row'} alignItems="center" w="80%" my={7} {...props}>
            <Image src={img} borderRadius="16px" h="250px" objectFit="fill " alt="QF formula" />
            <Flex direction="column" align="flex-start" bgColor={bgColor} borderRadius={imgRight ? '20px 0 0 20px' : '0 20px 20px 0'} px={7} py={7}>
                <Heading as="h4" fontSize="xl" alignSelf="left" mb={2} color={nameColor}>{name}</Heading>
                <Text
                    fontSize={{ base: 'xs', lg: 'xs', xl: 'sm' }}
                    color="#DBDBDB"
                    py={1}
                    lineHeight={{ base: 'base', lg: 'tall', xl: 'tall' }}
                    textAlign='left'
                    color={subColor}
                >
                    {description}
                </Text>
                <Text
                    fontSize={{ base: 'xs', lg: 'xs', xl: 'sm' }}
                    color="#DBDBDB"
                    py={1}
                    lineHeight={{ base: 'base', lg: 'tall', xl: 'tall' }}
                    textAlign='left'
                    color={subColor}
                >
                    <span><strong>{trans.about.technologies}:</strong></span> <span>{technologies}</span>
                </Text>
            </Flex>
        </Flex>

    )
}
