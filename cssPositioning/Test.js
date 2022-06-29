import { Box, HStack, Text, VStack } from "native-base";
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Test = () => {
    return (
        <Box justifyContent='center' alignItems='center' width='95%' height='80%' bg='green.200'>
            <Box bg='black' width='90%' height='35%' justifyContent='center' alignItems='flex-end' rounded='3xl' ml={8} >
                <Box height='80%' width={1} bg='white' mr={1.5}></Box>
            </Box>
            <Box bg='violet.300' height='40%' width='90%' rounded='3xl' position='absolute'>
                <VStack p={5} space='5'>
                    <HStack  >
                        <VStack>
                            <Text fontWeight='bold' fontSize={20}>Become a UX designer</Text>
                            <Text fontWeight='bold' color='gray.600'>Learn the skills and get the job</Text>
                        </VStack>
                        <Box flex={1} alignItems='flex-end'>
                            <Feather name="heart" size={24} color="black" />
                        </Box>
                    </HStack>
                    <Text fontWeight='bold'>///</Text>
                    <HStack>
                        <HStack space={1}>
                            <Text fontSize={35} fontWeight='bold'>4.85</Text>
                            <Box alignSelf='flex-end' mb={3}>
                                <AntDesign name="star" size={12} color="black" />
                            </Box>
                            <Text alignSelf='flex-end' mb='2' fontWeight='bold'>ratings</Text>
                        </HStack>
                        <Box flex={1} justifyContent='flex-end' alignItems='flex-end' mb='2' >
                            <Text fontWeight='bold' >48h</Text>
                        </Box>
                    </HStack>
                </VStack>
            </Box>

        </Box>
    )
}
export default Test;