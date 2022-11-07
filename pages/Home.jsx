import { Entypo } from "@expo/vector-icons";
import { Box, Button, Card, Flex, Heading, Text, VStack } from "native-base";
import { useContext, useEffect, useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import NewsCard from "../components/NewsCard";
import Wrapper from "../components/Wrapper";
import { ROLE } from "../constants";
import { AuthContext } from "../contexts/AuthContext";
import { fireDb } from "../firebase";

const Home = (props) => {
  const [jalur, setJalur] = useState("");
  const [articles, setArticles] = useState([]);

  const { role } = useContext(AuthContext);

  const articleRef = fireDb.collection("articles");

  useEffect(() => {
    const unsubscribe = articleRef
      .orderBy("createdAt", "desc")
      .onSnapshot((querySnapshot) => {
        const newArticles = [];
        querySnapshot.forEach((doc) => {
          const article = doc.data();
          article.id = doc.id;
          newArticles.push(article);
        });
        setArticles(newArticles);
      });
    return () => unsubscribe();
  }, []);

  return (
    <Wrapper {...props}>
      <Heading fontSize="xl" mb="4">
        Selamat Datang,{" "}
        {role ? (role === ROLE.ADMIN ? "Admin" : "Driver") : "Sahabat Bikun"}!
        👋
      </Heading>
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
      </Flex>
      <VStack space="2" mt="4">
        {articles.map((article) => (
          <NewsCard {...props} key={article.id} article={article} />
        ))}
      </VStack>
    </Wrapper>
  );
};

export default Home;
