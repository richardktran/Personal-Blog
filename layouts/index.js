import { Box, HStack } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import ProfileSection from '../components/info/ProfileSection';
import Navbar from './navbar';

export default function Layout({ children, router }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Annowit's homepage" />
                <meta name="author" content="Richard Annowit" />
                <meta name="author" content="richardannowit" />
                <link rel="apple-touch-icon" href="apple-touch-icon.png" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <meta property="og:site_name" content="Richard Annowit's Homepage" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/card.png" />
                <title>Richard Annowit - Homepage</title>
            </Head>
            <HStack>
                <ProfileSection />
                <Navbar path={router.asPath} />
                <Box
                    pl={{ base: '0', md: '0', lg: '25%', xl: '25%' }}
                    pt='6rem'
                    w='100%'
                    // bg='#1E1E1E'
                    minHeight='100vh'
                >

                    {children}
                </Box>

            </HStack>

        </>
    );
}
