import { Entypo } from "@expo/vector-icons";
import { Box, Button, Card, Flex, Heading, Text, VStack } from "native-base";
import { useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import NewsCard from "../components/NewsCard";
import Wrapper from "../components/Wrapper";

const Home = (props) => {
  const [jalur, setJalur] = useState("");

  return (
    <Wrapper {...props}>
      <Heading color="yellow.500">Lacak Bikun</Heading>
      <Card backgroundColor="white" mt="4">
        <Box borderWidth="1" borderColor="muted.300" rounded="sm" p="3">
          <RNPickerSelect
            onValueChange={(value) => setJalur(value)}
            placeholder={{
              label: "Pilih Jalur",
              value: null,
              color: "#A3A3A3",
            }}
            Icon={() => (
              <Entypo name="chevron-down" size={16} color="#D4D4D4" />
            )}
            value={jalur}
            items={[
              { label: "Jalur Lurus", value: "JalurLurus", color: "#000000" },
              { label: "Jalur Belok", value: "JalurBelok" },
            ]}
          />
        </Box>
        <Button
          backgroundColor="yellow.500"
          mt="4"
          onPress={() => props.navigation.push("BikunMaps")}
        >
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
