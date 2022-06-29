import { Box, HStack, Text, VStack } from "native-base";
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const SideCard = () => {
    return (
        <Box width='80%' height='50%' position='relative'>
            <Box bg='#ebddf3' rounded='3xl' shadow={3} height='200' width='100%' >
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
            <Box bg='black' rounded='3xl' height='170' width='100%' position='absolute' left={4} top='4'>
                <Box bg='white' height='60%' width='1' ml='97%' mt={9}></Box>
            </Box>

        </Box>

    )
}
export default SideCard;