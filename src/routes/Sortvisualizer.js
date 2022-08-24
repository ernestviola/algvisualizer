import React from 'react'

import { Box, Flex } from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';
import Visualizer from '../components/Visualizer';
import { useEffect, useState } from 'react';

const Sortvisualizer = () => {
    const [arr, setArr] = useState([]);
    const [generating, setGenerating] = useState(false);
    const [sorting, setSorting] = useState(false);

    const generateArr = (formState) => {
        let newArr = [];
        setGenerating(true)
        while (newArr.length <= formState.size) {
            let random = Math.floor(Math.random() * (200 - 10) + 10);
            newArr.push(random);
        }
        setArr([...newArr]);
        setGenerating(false)
    };

    const sort = () => {
        setSorting(true)
        setTimeout(() => {
            let newArr = [...arr];
            for (let i = 0; i < arr.length; i++) {
                setTimeout(() => {
                    for (let j = i + 1; j < arr.length; j++) {
                        if (newArr[i] > newArr[j]) {
                            let temp = newArr[i]
                            newArr[i] = newArr[j];
                            newArr[j] = temp

                            let newStep = [...newArr]
                            setTimeout(() => {
                                setArr([...newStep])
                            }, j * 100)
                        }
                    }
                }, i * 1000)
            }
        }, 500)
        setSorting(false)
    }

    useEffect(() => {
        generateArr({ size: 10 });
    }, []);

    return (
        <Box p={'4'}>
            <Flex gap={'4'}>
                <Sidebar generateArr={generateArr} sort={sort} />
                <Visualizer data={arr} />
            </Flex>
        </Box>
    )
}

export default Sortvisualizer