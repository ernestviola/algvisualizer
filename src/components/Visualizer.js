import { Box } from '@chakra-ui/react';
import React from 'react';

const Visualizer = ({data}) => {
  return (
    <Box borderBottomRadius={'lg'} display='grid' gridAutoFlow={'column'} gridAutoColumns='auto' bg='gray.100' minH={'auto'} overflow={'auto'} flex='1'>
        {data.map((d)=> {
            return(
                <Box display={'flex'} justifyContent='flex-end' textAlign={'center'} flexDirection='column' minHeight={'65vh'}>
                    {/* <p>{d.value}</p> */}
                    {
                      d.highlight ? <Box roundedTop={'sm'} border={'1px'} borderColor={'green.200'} bg={'green.300'} style={{height: `${d.value/2}%`}}></Box> :
                      <Box roundedTop={'sm'} border={'1px'} borderColor={'blue.200'} bg={'blue.300'} style={{height: `${d.value/2}%`}}></Box>
                    }
                    
                </Box>
            );
        })}
    </Box>
  );
};

export default Visualizer;