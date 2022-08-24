import { Flex, Box, useBreakpointValue, Link } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link as ReachLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <Box bg='tomato' w={'100%'} h={'50px'}>
            <Flex justify='space-between'>
                <Box>
                    <Box><Link as={ReachLink} to='/'>Home</Link></Box>
                    <Box><Link as={ReachLink} to='/sortvisualizer'>Sort Visualizer</Link></Box>
                </Box>
            </Flex>
        </Box>
    )
}

export default Navbar