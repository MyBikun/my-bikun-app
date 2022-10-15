import { Card, Text } from "native-base";

const NewsCard = () => {
  return (
    <Card backgroundColor="white" mb="2">
      <Text fontWeight="bold" fontSize="lg">
        Title
      </Text>
      <Text color="gray.400" fontSize="sm">
        1 Januari 2021
      </Text>
      <Text isTruncated noOfLines={3} mt="2" fontSize="sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut reiciendis
        repudiandae illo beatae dolores rem ex nisi ab deserunt eius dolore,
        expedita non omnis sequi eaque veritatis dicta, doloribus similique!
      </Text>
    </Card>
  );
};

export default NewsCard;
