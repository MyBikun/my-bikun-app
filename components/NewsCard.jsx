import { Button, Text } from "native-base";
import { secondsToDateString } from "../utils/string";

const NewsCard = ({ article, ...props }) => {
  return (
    <Button
      backgroundColor="white"
      mb="2"
      onPress={() => props.navigation.push("NewsDetail", { id: article.id })}
    >
      <Text fontWeight="bold" fontSize="lg">
        {article.title}
      </Text>
      <Text color="gray.400" fontSize="sm">
        {secondsToDateString(article.createdAt.seconds)}
      </Text>
      <Text isTruncated noOfLines={3} mt="2" fontSize="sm">
        {article.content}
      </Text>
    </Button>
  );
};

export default NewsCard;
