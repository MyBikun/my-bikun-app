import {
  Button,
  Card,
  CheckIcon,
  Flex,
  Heading,
  Select,
  Text,
  VStack
} from "native-base";
import { useContext, useEffect, useState } from "react";
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
        <Select
          selectedValue={jalur}
          minWidth="200"
          accessibilityLabel="Pilih Jalur"
          placeholder="Pilih Jalur"
          _selectedItem={{
            bg: "yellow.500",
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={(jalur) => setJalur(jalur)}
        >
          <Select.Item label="Jalur Lurus" value="RED" />
          <Select.Item label="Jalur Belok" value="BLUE" />
        </Select>
        <Button
          backgroundColor="yellow.500"
          mt="4"
          onPress={() => props.navigation.push("BikunMaps", {laneId: jalur})}
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
