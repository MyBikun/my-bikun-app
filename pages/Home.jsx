import { Button, Card, Flex, Heading, Select, Text, VStack } from "native-base";
import { useState } from "react";
import NewsCard from "../components/NewsCard";
import Wrapper from "../components/Wrapper";

const Home = (props) => {
  const [jalur, setJalur] = useState("");

  return (
    <Wrapper {...props}>
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
        <Button
          backgroundColor="darkBlue.50"
          onPress={() => props.navigation.push("News")}
        >
          <Text fontWeight="medium" color="darkBlue.600">
            Lebih Banyak
          </Text>
        </Button>
      </Flex>
      <VStack space="2" mt="4">
        <NewsCard id="1" {...props} />
        <NewsCard id="1" {...props} />
        <NewsCard id="1" {...props} />
        <NewsCard id="1" {...props} />
        <NewsCard id="1" {...props} />
        <NewsCard id="1" {...props} />
      </VStack>
    </Wrapper>
  );
};

export default Home;
