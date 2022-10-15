import { MaterialIcons } from "@expo/vector-icons";
import {
  Box,
  Button,
  Card,
  Flex,
  Heading,
  ScrollView,
  Select,
  StatusBar,
  Text,
  VStack,
} from "native-base";
import { useState } from "react";

const Home = () => {
  const [jalur, setJalur] = useState("");
  const [paddingTop, setPaddingTop] = useState(0);

  return (
    <ScrollView>
      <StatusBar barStyle="dark-content" />
      <Box safeAreaTop />
      <Flex
        direction="row"
        alignItems="center"
        backgroundColor="white"
        paddingX="4"
        paddingBottom="2"
        borderBottomRadius="xl"
        borderColor="gray.200"
        borderWidth="1"
        borderTopWidth="0"
      >
        <MaterialIcons name="menu" size={36} color="#737373" />
        <Flex direction="row" marginLeft="4">
          <Heading fontWeight="extrabold" fontSize="3xl" color="blue.600">
            My
          </Heading>
          <Heading fontWeight="extrabold" fontSize="3xl" color="yellow.500">
            Bikun
          </Heading>
        </Flex>
      </Flex>
      <VStack padding="6" backgroundColor="warmGray.100" minH="full">
        <Heading color="yellow.500">Lacak Bikun</Heading>
        <Card backgroundColor="white" mt="4">
          <Select
            fontSize="md"
            selectedValue={jalur}
            minWidth="200"
            accessibilityLabel="Pilih Jalur"
            placeholder="Pilih Jalur"
            _selectedItem={{
              bg: "white",
            }}
            onValueChange={(itemValue) => setJalur(itemValue)}
          >
            <Select.Item label="Jalur Lurus" value="lurus" />
            <Select.Item label="Jalur Belok" value="belok" />
          </Select>
          <Button backgroundColor="yellow.500" mt="4">
            <Text fontWeight="medium" fontSize="md" color="white">
              Lacak
            </Text>
          </Button>
        </Card>
        <Flex
          mt="6"
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Heading color="yellow.500">Berita</Heading>
          <Button backgroundColor="darkBlue.50">
            <Text fontWeight="medium" color="darkBlue.600">
              Lebih Banyak
            </Text>
          </Button>
        </Flex>
        <VStack space="2" mt="4">
          <Card backgroundColor="white">
            <Text fontWeight="bold" fontSize="lg">
              Title
            </Text>
            <Text color="gray.400" fontSize="sm">
              1 Januari 2021
            </Text>
            <Text isTruncated noOfLines={3} mt="2" fontSize="sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              reiciendis repudiandae illo beatae dolores rem ex nisi ab deserunt
              eius dolore, expedita non omnis sequi eaque veritatis dicta,
              doloribus similique!
            </Text>
          </Card>
          <Card backgroundColor="white" mt="2">
            <Text fontWeight="bold" fontSize="lg">
              Title
            </Text>
            <Text color="gray.400" fontSize="sm">
              1 Januari 2021
            </Text>
            <Text isTruncated noOfLines={3} mt="2" fontSize="sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              reiciendis repudiandae illo beatae dolores rem ex nisi ab deserunt
              eius dolore, expedita non omnis sequi eaque veritatis dicta,
              doloribus similique!
            </Text>
          </Card>
          <Card backgroundColor="white" mt="2">
            <Text fontWeight="bold" fontSize="lg">
              Title
            </Text>
            <Text color="gray.400" fontSize="sm">
              1 Januari 2021
            </Text>
            <Text isTruncated noOfLines={3} mt="2" fontSize="sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              reiciendis repudiandae illo beatae dolores rem ex nisi ab deserunt
              eius dolore, expedita non omnis sequi eaque veritatis dicta,
              doloribus similique!
            </Text>
          </Card>
          <Card backgroundColor="white" mt="2">
            <Text fontWeight="bold" fontSize="lg">
              Title
            </Text>
            <Text color="gray.400" fontSize="sm">
              1 Januari 2021
            </Text>
            <Text isTruncated noOfLines={3} mt="2" fontSize="sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              reiciendis repudiandae illo beatae dolores rem ex nisi ab deserunt
              eius dolore, expedita non omnis sequi eaque veritatis dicta,
              doloribus similique!
            </Text>
          </Card>
        </VStack>
      </VStack>
    </ScrollView>
  );
};

export default Home;
