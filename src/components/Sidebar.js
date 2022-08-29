import React, { useState } from 'react'
import { Box, Button, Flex, FormControl, FormLabel, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Select } from '@chakra-ui/react';

const Sidebar = ({ setAlgorithm, generateArr, sort }) => {
    const [formState, setFormState] = useState({
        size: 10
    });
    return (
        <Box minW='xs' bg='gray.100' p={'4'} borderRadius='lg' overflow='hidden'>
            <FormControl>
                <FormLabel htmlFor='size'>{`Array Size (${formState.size})`}</FormLabel>
                <Slider onChangeEnd={(v) => setFormState({ ...formState, size: v })} aria-label={'10'} min={10} max={200} defaultValue={10}>
                    <SliderTrack>
                        <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb />
                </Slider>
            </FormControl>
            <FormControl>
                <FormLabel htmlFor='algorithm'>Algorithm</FormLabel>
                <Select onChange={(e) => setAlgorithm(e.target.value)} bg={'white'} id='algorithm' variant={'outline'}>
                    <option value='selectionsort'>Selection Sort</option>
                    <option value='bubblesort'>Bubble Sort</option>
                    {/* <option value='select'>Select</option>
                    <option value={'insert'}>Insertion</option> */}
                </Select>
            </FormControl>
            <Flex gap={'3'} mt={'5'} direction='row'>
                <Button onClick={() => {
                    generateArr(formState)
                }}
                    colorScheme='blue'
                >
                    Generate Array
                </Button>
                <Button onClick={sort} colorScheme='blue' variant='outline'>
                    Sort
                </Button>
            </Flex>
        </Box>
    )
}

export default Sidebar