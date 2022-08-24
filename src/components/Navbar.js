import { HStack, Flex, Box, useBreakpointValue, Link, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link as ReachLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <Box bg='tomato' w={'100%'} h={'50px'}>
            <HStack justify={'right'} align={'center'} h={'inherit'}>
                <Box><Link as={ReachLink} to='/'>Home</Link></Box>
                <Box><Link as={ReachLink} to='/sortvisualizer'>Sort Visualizer</Link></Box>
            </HStack>
        </Box>
    )
}

export default Navbar