import React from 'react';
import { Image, Flex, Heading, Text } from '@chakra-ui/react';
import useTrans from '../../pages/hooks/useTrans';

export default function CertificateCard({ img, name, company, dateOfIssue, imgRight = false, bgColor, nameColor, subColor, ...props }) {
    const trans = useTrans();
    return (
        <Flex direction={{ base: 'column', md: (imgRight ? 'row-reverse' : 'row') }} alignItems="center" w={{ base: '95%', md: '95%', lg: '90%', xl: '85%' }} my={7} {...props}>
            <Image
                src={img}
                borderRadius="16px"
                w={{ base: '90%', md: '50%', lg: '45%', xl: '40%' }}

                objectFit="fill "
                alt="QF formula"
            />
            <Flex
                maxH="150px"
                direction="column"
                align="flex-start"
                bgColor={bgColor}
                borderRadius={{ base: '10px', md: imgRight ? '20px 0 0 20px' : '0 20px 20px 0' }}
                my={{ base: '10px', md: '0' }}
                px={7} py={5}
            >
                <Heading as="h4" fontSize={{ base: 'lg', md: 'lg', lg: 'xl', xl: 'xl' }} alignSelf="left" mb={2} color={nameColor}>
                    {name}
                </Heading>
                <Text
                    fontSize={{ base: 'xs', lg: 'xs', xl: 'sm' }}
                    color="#DBDBDB"
                    py={1}
                    lineHeight={{ base: 'base', lg: 'tall', xl: 'tall' }}
                    textAlign='left'
                    color={subColor}
                >
                    {company}
                </Text>
                <Text
                    fontSize={{ base: 'xs', lg: 'xs', xl: 'sm' }}
                    color="#DBDBDB"
                    py={1}
                    lineHeight={{ base: 'base', lg: 'tall', xl: 'tall' }}
                    textAlign='left'
                    color={subColor}
                >
                    {dateOfIssue}
                </Text>
            </Flex>
        </Flex>

    )
}
