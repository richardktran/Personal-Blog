import { Box, Text, Flex } from '@chakra-ui/react'
import { FaLinkedinIn, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import CardName from '../components/info/CardName';
import ProfileDetail from '../components/info/ProfileDetails'
import Social from '../components/info/Social';

export default function Home() {
  return (
    <>
      {/* Profile section */}
      <Box
        d='flex'
        justifyContent='space-between'
        flexDir='column' w='25%' bg='#0B0E10' h="100vh"
        visibility={{ base: 'hidden', md: 'visible', lg: 'visible', xl: 'visible' }}>
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
      {/* Profile section */}
    </>
  )
}
