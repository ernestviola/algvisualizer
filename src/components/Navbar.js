import { HStack, Flex, Box, useBreakpointValue, Link, VStack, Spacer } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link as ReachLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <Box bg='blue.700' w={'100%'} h={'50px'}>
            <Flex justify={'left'} align={'center'} h={'inherit'} gap='4'>
                <Box></Box>
                <Box><Link as={ReachLink} to='/' textColor={'white'}>Home</Link></Box>
                <Box><Link as={ReachLink} to='/sortingvisualizer' textColor={'white'}>Sorting Visualizer</Link></Box>
                <Box></Box>
            </Flex>
        </Box>
    )
}

export default Navbar