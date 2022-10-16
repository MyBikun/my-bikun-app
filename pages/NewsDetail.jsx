import { Heading, Text, VStack } from "native-base";
import { useEffect } from "react";
import Wrapper from "../components/Wrapper";

const NewsDetail = ({ ...props }) => {
  useEffect(() => {
    const id = props.route.params.id;
    if (!id) {
      props.navigation.goBack();
      alert("Berita tidak ditemukan");
    }
  }, [props.route.params.id]);

  return (
    <Wrapper {...props}>
      <Heading>
        Judul Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
        quo.
      </Heading>
      <Text color="gray.400" fontSize="md" mt="2">
        1 Januari 2021
      </Text>
      <VStack mt="4">
        <Text fontSize="md">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
          incidunt fuga cupiditate tenetur tempora fugit architecto, voluptate
          consectetur at maxime possimus aut, illo, facere iusto? Porro nisi
          iure quam minus!
        </Text>
        <Text fontSize="md">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
          incidunt fuga cupiditate tenetur tempora fugit architecto, voluptate
          consectetur at maxime possimus aut, illo, facere iusto? Porro nisi
          iure quam minus!
        </Text>
        <Text fontSize="md">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
          incidunt fuga cupiditate tenetur tempora fugit architecto, voluptate
          consectetur at maxime possimus aut, illo, facere iusto? Porro nisi
          iure quam minus!
        </Text>
      </VStack>
    </Wrapper>
  );
};

export default NewsDetail;
