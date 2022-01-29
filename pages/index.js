import { Box, Avatar, Heading, Text, Container } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      {/* Profile section */}
      <Box w='25%' bg='#0B0E10' h="100vh" visibility={['hidden', 'hidden', 'visible']}>
        <Box
          as='section'
          d='flex'
          flexDir='column'
          pt={[2, 2, 8]}
          textAlign='center'
          alignItems='center'
        >
          <Avatar size='xl' name='Christian Nwamba' src='/images/avatar.jpg' />
          <Heading as="h1" fontSize="2xl" color='#ffffff' fontWeight="600" letterSpacing='wider' pt={2}>
            Tran Dang Khoa
          </Heading>
          <Text fontSize="md" color='#DBDBDB' py={2}>Software Engineering</Text>
          <Text fontSize="sm" color='#DBDBDB' px={10} py={2} lineHeight="taller" textAlign='left'>
            I’m a oftware engineer with 5+ years experience in commercial application development. Eager to join Cyclone Inc. to build innovative and cutting edge business solutions for the impressive suite of clients within its global reach
          </Text>
        </Box>
      </Box>
      {/* Profile section */}
    </>
  )
}
