import React from 'react';
import { Image, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import CertificateCard from '../common/CertificateCard';
import { motion } from 'framer-motion';
import useTrans from '../../hooks/useTrans';

const MotionFlex = motion(Flex)
export default function Certifications({ ...props }) {
    const trans = useTrans();
    const headingColor = useColorModeValue('#00AFB9', '#FF8700');
    const stressTextColor = useColorModeValue('#FFFFFF', '#FFFFFF');
    const grayTextColor = useColorModeValue('#FFFFFF', '#FFFFFF');
    const bgColor = useColorModeValue('#22B07D', '#22B07D')


    return (
        <MotionFlex direction="column" w="100%" alignItems="center" justifyItems="center" {...props}>
            <Heading as="h1" color={headingColor} textTransform='uppercase' fontWeight="bold" my={5}>
                {trans.about.certifications_title}
            </Heading>
            <CertificateCard
                bgColor={bgColor}
                nameColor={stressTextColor}
                subColor={grayTextColor}
                img="/images/certifications/HashCode2020.png"
                name={trans.about.rookie_cert_name}
                company="NashTech"
                dateOfIssue="15 Sep, 2021"
            />

            <CertificateCard
                bgColor={bgColor}
                nameColor={stressTextColor}
                subColor={grayTextColor}
                imgRight
                img="/images/certifications/HashCode2020.png"
                name={trans.about.rookie_cert_name}
                company="NashTech"
                dateOfIssue="15 Sep, 2021"
            />

            <CertificateCard
                bgColor={bgColor}
                nameColor={stressTextColor}
                subColor={grayTextColor}
                img="/images/certifications/HashCode2020.png"
                name={trans.about.rookie_cert_name}
                company="NashTech"
                dateOfIssue="15 Sep, 2021"
            />
        </MotionFlex>
    )
}
