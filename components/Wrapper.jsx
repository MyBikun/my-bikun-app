import { MaterialIcons } from "@expo/vector-icons";
import {
  Box,
  Flex,
  Heading,
  Pressable,
  ScrollView,
  StatusBar,
} from "native-base";

const Wrapper = ({ children, route, navigation, bottomButton }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Box safeAreaTop backgroundColor="white" />
      <Box backgroundColor="warmGray.100">
        {route.name === "Home" ? (
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
            <Pressable onPress={navigation.openDrawer}>
              <MaterialIcons name="menu" size={32} color="#737373" />
            </Pressable>
            <Flex direction="row" marginLeft="4">
              <Heading fontWeight="extrabold" fontSize="3xl" color="blue.600">
                My
              </Heading>
              <Heading fontWeight="extrabold" fontSize="3xl" color="yellow.500">
                Bikun
              </Heading>
            </Flex>
          </Flex>
        ) : (
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
            <MaterialIcons
              name="arrow-back"
              size={24}
              onPress={navigation.goBack}
            />
            <Heading ml="4">{route?.params?.title}</Heading>
          </Flex>
        )}
      </Box>
      <ScrollView padding="6" backgroundColor="warmGray.100">
        {children}
        <Box safeAreaBottom h="16" />
      </ScrollView>
      <Flex px="8" alignItems="center" position="absolute" bottom="12" w="full">
        {bottomButton}
      </Flex>
    </>
  );
};

export default Wrapper;
