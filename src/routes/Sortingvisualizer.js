import React from 'react'

import { Box, Flex } from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';
import Visualizer from '../components/Visualizer';
import { useEffect, useState } from 'react';

const Sortvisualizer = () => {
    const [arr, setArr] = useState([]);
    const [generating, setGenerating] = useState(false);
    const [sorting, setSorting] = useState(false);
    const [algorithm, setAlgorithm] = useState('simple');

    const chooseAlgorithm = () => {
        if (algorithm === 'selectionsort') {
            return selectionsort
        } 
        else if (algorithm === 'bubblesort'){
            return bubblesort
        }
    }

    const generateArr = (formState) => {
        let newArr = [];
        setGenerating(true)
        while (newArr.length <= formState.size) {
            let random = Math.floor(Math.random() * (200 - 10) + 10);
            newArr.push({ value: random, highlight: false });
        }
        setArr([...newArr]);
        setGenerating(false)
    };

    const selectionsort = () => {
        setSorting(true);

        let newArr = [...arr];
        let queue = [];
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (newArr[i].value > newArr[j].value) {
                    let tempArr = [...newArr]
                    let temp = newArr[i]
                    newArr[i] = newArr[j]
                    newArr[j] = temp


                    let temp2 = { value: tempArr[i].value, highlight: true }
                    tempArr[i] = { value: tempArr[j].value, highlight: true };
                    tempArr[j] = temp2;

                    let newStep = [...tempArr]
                    queue.push(newStep)

                }
            }
        }

        for (let i = 0; i < newArr.length; i++) {
            newArr[i] = {value: newArr[i].value,highlight:true}
            queue.push([...newArr])
        }

        console.log(queue.length)

        for (let i = 0; i <= queue.length; i++) {
            setTimeout(() => {
                setArr([...queue[i]])
            }, 40 * i)
        }
        setSorting(false);
    }

    const bubblesort = () => {
        setSorting(true)


        setSorting(false)
    }

    useEffect(() => {
        generateArr({ size: 10 });
    }, []);

    return (
        <Box p={'4'}>

            <Sidebar setAlgorithm={setAlgorithm} generateArr={generateArr} sort={chooseAlgorithm()} />
            <Visualizer data={arr} />

        </Box>
    )
}

export default Sortvisualizer