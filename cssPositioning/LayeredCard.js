import { Box, Image } from "native-base";

const LayeredCard = () => {
    return (
        <Box width='80%' height='60%' bg='amber.100' shadow={3} borderBottomRadius='xl'>
            <Box shadow='5' width='100%' height='50%'>
                <Image source={{ uri: 'https://picsum.photos/seed/picsum/200/300' }} alt='some image' width='100%' height='100%' />
            </Box>
        </Box>
    )
}
export default LayeredCard;