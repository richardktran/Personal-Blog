import { Box, Circle, Flex } from '@chakra-ui/react';
import React from 'react';


export default function Timeline({ icon, width }) {
    return (
        <Flex direction="column" align="center">
            <Circle size="60px" bg='#ffffff' color='#00897B'>
                {icon}
            </Circle>
            <Box
                w={0}
                style={{ 'border-right': '3px dashed #ffffff' }}
                minH="100px"
                h={width}
            ></Box>
            <Circle size="10px" bg='#ffffff' color='#00897B'>
            </Circle>
        </Flex>
    )
}
