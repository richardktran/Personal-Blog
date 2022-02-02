import {
    useColorModeValue,
    Button,
    useColorMode,
    Flex,
    IconButton,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Box,
    Text,
    Heading,
    Avatar,
} from '@chakra-ui/react'
import React, { useState } from 'react';
import NextLink from 'next/link'
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { HamburgerIcon } from '@chakra-ui/icons'
import { IoMdUndo } from 'react-icons/io';
export default function Navbar({ path, toggleShowInfo }) {
    const { toggleColorMode } = useColorMode()

    const setShowInfo = () => {
        toggleShowInfo();
    }

    return (
        <>
            <Box
                position="fixed"
                as="nav"
                w="100%"
                top="0"
                pt='1rem'
                width="100%"
                height="5rem"
                css={{ backdropFilter: 'blur(10px)' }}
                // bg={useColorModeValue('#FFFFFF', '#1E1E1E')}
                zIndex={0}
            >
                <Flex
                    pos='fixed'
                    left='1rem'
                    align='center'
                    pl={{ base: '1rem', lg: '3rem' }}
                    display={{ base: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none' }}
                >
                    <Heading mr={5} onClick={() => setShowInfo()} _hover={{ cursor: 'pointer' }}>
                        <Avatar size="lg" name="Logo" src="/images/avatar.jpg" />
                    </Heading>
                    <Box>
                        <IoMdUndo size={30} color="#81E6D9" />
                        <Text>Look at my info</Text>
                    </Box>

                </Flex>

                <Flex
                    pos='fixed'
                    right='1rem'
                    align='center'
                    pr={{ base: '1rem', lg: '3rem' }}
                >
                    <Flex
                        display={{ base: 'none', lg: 'flex' }}
                        mr={5}
                    >
                        <LinkItem href='/' path={path}>
                            My Blog
                        </LinkItem>
                        <LinkItem href='/category' path={path}>
                            Category
                        </LinkItem>
                        <LinkItem href='/about' path={path}>
                            About me
                        </LinkItem>
                    </Flex>
                    <IconButton
                        aria-label="Toggle theme"
                        colorScheme={useColorModeValue('purple', 'orange')}
                        icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
                        onClick={toggleColorMode}
                    />
                    <Flex display={{ base: 'flex', lg: 'none' }}>
                        <Menu >
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant="outline"
                                size='lg'
                                ml={3}
                                aria-label="Open Menu"
                            />
                            <MenuList>
                                <NextLink href="/" passHref>
                                    <MenuItem>My blog</MenuItem>
                                </NextLink>
                                <NextLink href="/category" passHref>
                                    <MenuItem>Category</MenuItem>
                                </NextLink>
                                <NextLink href="/about" passHref>
                                    <MenuItem>About</MenuItem>
                                </NextLink>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>
            </Box>

        </>
    );
}


const LinkItem = ({ href, children, path }) => {
    const active = path === href;
    return (
        <NextLink href={href} passHref>
            <Button
                _focus={{
                    outline: 'none',
                }}
                _hover={{
                    backgroundColor: undefined
                }}
                variant='ghost'
                aria-label={children}
                w='100%'
                bgColor={active ? '#8BCEC6' : undefined}
            >
                <Text fontSize='md' fontWeight='semibold'>{children}</Text>
            </Button>
        </NextLink>
    );
}