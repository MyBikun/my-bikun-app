import { Box, Text } from "native-base";
import { Pressable } from "react-native";
import { secondsToDateString } from "../utils/string";

const NewsCard = ({ article, ...props }) => {
  return (
    <Pressable
      onPress={() => props.navigation.push("NewsDetail", { id: article.id })}
    >
      <Box backgroundColor="white" mb="2" p="4" rounded="md">
        <Text fontWeight="bold" fontSize="lg">
          {article.title}
        </Text>
        <Text color="gray.400" fontSize="sm">
          {secondsToDateString(article.createdAt.seconds)}
        </Text>
        <Text isTruncated noOfLines={3} mt="2" fontSize="sm">
          {article.content}
        </Text>
      </Box>
    </Pressable>
  );
};

export default NewsCard;
