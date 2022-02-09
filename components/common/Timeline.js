import { Box, Circle, Flex } from '@chakra-ui/react';
import React from 'react';


export default function Timeline({ icon, bg, width }) {
    return (
        <Flex direction="column" align="center">
            <Circle size="60px" bg={bg} color='#00897B'>
                {icon}
            </Circle>
            <Box
                w={0}
                style={{ 'borderRight': `3px dashed ${bg}` }}
                minH="100px"
                h={width}
            ></Box>
            <Circle size="10px" bg={bg} color='#00897B'>
            </Circle>
        </Flex>
    )
}
