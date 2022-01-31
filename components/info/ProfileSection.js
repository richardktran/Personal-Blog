import React from 'react';
import { Box, Flex, useColorModeValue } from '@chakra-ui/react'
import CardName from './CardName'
import ProfileDetail from './ProfileDetails'
import Social from './Social';

export default function ProfileSection() {
    const bg = useColorModeValue('#EEFBF9', '#0B0E10')
    return (
        <Box
            position="fixed"
            top={0}
            justifyContent='space-between'
            flexDir='column' w='25%'
            bg={bg}
            minHeight="100%"
            d={{ base: 'none', md: 'none', lg: 'flex', xl: 'flex' }}
            zIndex={0}
        >
            <Flex
                as='section'
                direction='column'
                pt={{ base: 2, lg: 3, xl: 8 }}
                textAlign='center'
                align='center'
            >
                <CardName
                    avatar="/images/avatar.jpg"
                    name="Tran Dang Khoa"
                    specialist="Software Engineering"
                    shortDescription="I’m a oftware engineer with 5+ years experience in commercial application development. Eager to join Cyclone Inc. to build innovative and cutting edge business solutions for the impressive suite of clients within its global reach."
                />

                <ProfileDetail
                    email="richardannowit@gmail.com"
                    phone="(+84) 947 685 343 (VN)"
                    birthDate="01 May, 2000"
                />


            </Flex>

            <Social
                linkedinUrl="https://www.linkedin.com/in/richardannowit/"
                githubUrl="https://github.com/richardannowit"
            />
        </Box>
    );
}
