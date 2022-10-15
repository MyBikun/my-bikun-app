import { MaterialIcons } from "@expo/vector-icons";
import { Box, Flex, Heading, ScrollView, StatusBar } from "native-base";

const Wrapper = ({ children }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Box safeAreaTop />
      <Box backgroundColor="warmGray.100">
        <Flex
          direction="row"
          alignItems="center"
          backgroundColor="white"
          padding="4"
          borderBottomRadius="xl"
          borderColor="gray.200"
          borderWidth="1"
          borderTopWidth="0"
        >
          <MaterialIcons name="menu" size={32} color="#737373" />
          <Flex direction="row" marginLeft="4">
            <Heading fontWeight="extrabold" fontSize="3xl" color="blue.600">
              My
            </Heading>
            <Heading fontWeight="extrabold" fontSize="3xl" color="yellow.500">
              Bikun
            </Heading>
          </Flex>
        </Flex>
      </Box>
      <ScrollView padding="6" backgroundColor="warmGray.100">
        {children}
        <Box safeAreaBottom h="16" />
      </ScrollView>
    </>
  );
};

export default Wrapper;
