import { Box, Text } from "native-base";

const Sandbox = () => {
    return (
        <Box alignSelf='center' width='80%' height='60%' bg='amber.200' shadow={2} position='relative'>
            <Box bg='red.300' height='100' width='100' justifyContent='center' alignItems='center' zIndex={4} shadow='8'><Text fontSize='20' fontWeight='bold'>1</Text></Box>
            <Box bg='amber.500' height='100' width='100' justifyContent='center' alignItems='center' zIndex={3} shadow='6' position='absolute' left='25' top='25'><Text fontSize='20' fontWeight='bold'>2</Text></Box>
            <Box bg='blue.300' height='100' width='100' justifyContent='center' alignItems='center' zIndex={2} shadow='6' position='absolute' left='50' top='50'><Text fontSize='20' fontWeight='bold'>3</Text></Box>
            <Box bg='green.300' height='100' width='100' justifyContent='center' alignItems='center' zIndex={1} shadow='8' position='absolute' left='75' top='75'><Text fontSize='20' fontWeight='bold'>4</Text></Box>
        </Box>
    )
}
export default Sandbox;