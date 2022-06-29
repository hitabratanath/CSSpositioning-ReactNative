import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
} from "native-base";
import Sandbox from "./Sandbox";
import LayeredCard from "./LayeredCard";
import SideCard from "./SideCard";
import Test from "./Test";

export default function App() {
  return (
    <NativeBaseProvider>
      <Box flex={1} bg='gray.300' safeArea justifyContent='center' alignItems='center'>
        {/* <Sandbox /> */}
        {/* <LayeredCard /> */}
        <SideCard />
        <SideCard />
        {/* <Test /> */}
      </Box>
    </NativeBaseProvider>
  );
}

