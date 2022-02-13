import { Box, Circle, Flex } from '@chakra-ui/react';
import React from 'react';
import { motion } from 'framer-motion';

const MotionFlex = motion(Flex)
const MotionBox = motion(Box)

export default function Timeline({ icon, bg, width, ...props }) {
    const variants = {
        visible: { height: width, minHeight: '100px' },
        hidden: { height: 0, minHeight: 0 },
    }
    return (
        <MotionFlex direction="column" align="center"{...props}>
            <Circle size="60px" bg={bg} color='#00897B'>
                {icon}
            </Circle>
            <MotionBox
                variants={variants}
                transition={{ duration: 0.2 }}
                w={0}
                style={{ 'borderRight': `3px dashed ${bg}` }}
                minH="100px"
                h={width}
            ></MotionBox>
            <Circle size="10px" bg={bg} color='#00897B'>
            </Circle>
        </MotionFlex>
    )
}
