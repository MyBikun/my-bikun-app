import { Heading, Text } from "native-base";
import { useEffect, useState } from "react";
import Wrapper from "../components/Wrapper";
import { fireDb } from "../firebase";
import { secondsToDateString } from "../utils/string";

const NewsDetail = ({ ...props }) => {
  const articleRef = fireDb.collection("articles");
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const id = props.route.params.id;
    if (!id) {
      props.navigation.goBack();
      alert("Berita tidak ditemukan");
    } else {
      articleRef
        .doc(id)
        .get()
        .then((doc) => {
          if (doc.exists) {
            setArticle(doc.data());
          } else {
            props.navigation.goBack();
            alert("Berita tidak ditemukan");
          }
        });
    }
  }, [props.route.params.id]);

  return (
    <Wrapper {...props}>
      <Heading>{article?.title}</Heading>
      <Text color="gray.400" fontSize="md" mt="2">
        {secondsToDateString(article?.createdAt?.seconds)}
      </Text>
      <Text mt="4">{article?.content}</Text>
    </Wrapper>
  );
};

export default NewsDetail;
