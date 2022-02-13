import { Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import useTrans from '../../pages/hooks/useTrans';
import { motion } from 'framer-motion';

const MotionFlex = motion(Flex);

export default function Summary({ ...props }) {
    const trans = useTrans();
    const headingColor = useColorModeValue('#00AFB9', '#FF8700');
    const textColor = useColorModeValue('#6B6B6B', '#E6E6E6');

    return (
        <MotionFlex justify="center" align="center" direction="column" color={textColor}  {...props}>
            <Heading as="h1" color={headingColor} textTransform='uppercase' fontWeight="bold">{trans.about.summary_title}</Heading>
            <Text my={3} style={{ textIndent: 20 }}>
                {trans.about.summary1}
            </Text>
            <Text style={{ textIndent: 20 }}>
                {trans.about.summary2}
            </Text>
        </MotionFlex>
    )
}
