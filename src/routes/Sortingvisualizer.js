import React from 'react'

import { Box, Flex } from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';
import Visualizer from '../components/Visualizer';
import { useEffect, useState } from 'react';

const Sortvisualizer = () => {
    const [arr, setArr] = useState([]);
    const [queue, setQueue] = useState([]);
    const [generating, setGenerating] = useState(false);
    const [sorting, setSorting] = useState(false);
    const [algorithm, setAlgorithm] = useState('selectionsort');

    const chooseAlgorithm = () => {
        if (algorithm === 'selectionsort') {
            return selectionsort
        } 
        else if (algorithm === 'bubblesort'){
            return bubblesort
        } else if (algorithm === 'insertionsort') {
            return insertionsort
        } else if (algorithm === 'mergesort') {
            return mergesort
        }
    }

    const generateArr = (formState) => {
        let newArr = [];
        setGenerating(true)
        while (newArr.length <= formState.size - 1) {
            let random = Math.floor(Math.random() * (200 - 10) + 10);
            newArr.push({ value: random, highlight: false });
        }
        setArr([...newArr]);
        setGenerating(false)
    };

    const selectionsort = () => {
        setSorting(true);

        let newArr = [...arr];
        setQueue([]);
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

        for (let i = 0; i < queue.length; i++) {
            setTimeout(() => {
                setArr([...queue[i]])
            }, 40 * i)
        }
        setSorting(false);
    }

    const bubblesort = () => {
        setSorting(true)
        let newArr = [...arr];
        setQueue([]);
        let sorted = false
        while (!sorted) {

            sorted = true
            for (let i = 1; i < newArr.length; i++) {
                if (newArr[i].value < newArr[i-1].value) {
                    sorted = false
                    let tempArr = [...newArr]
                    let temp = newArr[i]
                    newArr[i] = newArr[i-1]
                    newArr[i-1] = temp

                    let temp2 = {value: tempArr[i].value, highlight: true }
                    tempArr[i] = {value: tempArr[i-1].value, highlight: true }
                    tempArr[i-1] = temp2
                    queue.push([...tempArr])
                }
            }
        }

        for (let i = 0; i < newArr.length; i++) {
            newArr[i] = {value: newArr[i].value,highlight:true}
            queue.push([...newArr])
        }

        console.log(queue.length)
        for (let i = 0; i < queue.length; i++) {
            setTimeout(() => {
                setArr([...queue[i]])
            }, 40 * i)
        }
        setSorting(false)
    }

    const insertionsort = () => {
        // alert('Not Yet Implemented');
        setSorting(true);
        let newArr = [...arr];
        setQueue([]);
        for (let i = 1; i < newArr.length; i++) {
            //swap down to 0 or if it doesn't change
            let current = i;
            let previous = i-1;
            while (true ) {
                
                if (previous === -1 || newArr[current].value > newArr[previous].value) break;
                // swap till previous
                // swap
                let tempArr = [...newArr];
                let temp = newArr[current];
                newArr[current] = newArr[previous];
                tempArr[current] = {value: tempArr[previous].value, highlight: true};
                newArr[previous] = temp;
                tempArr[previous] = {value: temp.value, highlight: true};

                queue.push([...tempArr]);

                current = current - 1;
                previous = previous - 1;
                
            }
        }

        for (let i = 0; i < newArr.length; i++) {
            newArr[i] = {value: newArr[i].value,highlight:true}
            queue.push([...newArr])
        }

        console.log(queue.length)
        for (let i = 0; i < queue.length; i++) {
            setTimeout(() => {
                setArr([...queue[i]])
            }, 40 * i)
        }

        setSorting(false);
    }

    const mergesort = () => {
        setSorting(true)
        let newArr = [...arr];

        setQueue([]);

        // have to do a bottom up approach

        // separate array into groups at intervals of powers of two: 1,2,4,8,16 etc

        var curr_size
        var left_start
        var n = newArr.length

        for (curr_size = 1; curr_size <= n - 1; curr_size = 2 * curr_size) {
 

            for (left_start = 0; left_start < n - 1; left_start += 2 * curr_size) {
                // Find ending point of left
                // subarray. mid+1 is starting
                // point of right
                var mid = Math.min(left_start + curr_size - 1, n - 1);
 
                var right_end = Math.min(left_start + 2 * curr_size - 1, n - 1);
 
                // Merge Subarrays arr[left_start...mid]
                // & arr[mid+1...right_end]
                merge(newArr, left_start, mid, right_end);
                let tempArr = [...newArr];
                queue.push([...tempArr]);

            }
        }

        for (let i = 0; i < newArr.length; i++) {
            newArr[i] = {value: newArr[i].value,highlight:true}
            queue.push([...newArr])
        }

        console.log(queue.length)
        for (let i = 0; i < queue.length; i++) {
            setTimeout(() => {
                setArr([...queue[i]])
            }, 40 * i)
        }

    }

    function merge(arr , l , m , r) {
        var i, j, k;
        var n1 = m - l + 1;
        var n2 = r - m;
 
        /* create temp arrays */
        var L = Array(n1).fill(0);
        var R = Array(n2).fill(0);
 
        /*
         * Copy data to temp arrays L and R
         */
        for (i = 0; i < n1; i++)
            L[i] = arr[l + i];
        for (j = 0; j < n2; j++)
            R[j] = arr[m + 1 + j];
 
        /*
         * Merge the temp arrays back into arr[l..r]
         */
        i = 0;
        j = 0;
        k = l;
        while (i < n1 && j < n2) {
            if (L[i].value <= R[j].value) {
                arr[k] = L[i];
                i++;
            } else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }
 
        /*
         * Copy the remaining elements of L, if there are any
         */
        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }
 
        /*
         * Copy the remaining elements of R, if there are any
         */
        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
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