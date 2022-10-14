import { Box, Center, Flex, Heading, Image } from "native-base";
import busStopImage from "../assets/images/bus-stop.png";
import logoImage from "../assets/images/logo.png";

const InitialLoadingPage = () => {
  return (
    <Center h="full" backgroundColor="yellow.500">
      <Image size="2xl" src={busStopImage} alt="Bus Stop Image" />
      <Flex position="absolute" bottom={6} direction="row">
        <Heading fontWeight="extrabold" fontSize={32} color="blue.600">
          My
        </Heading>
        <Heading fontWeight="extrabold" fontSize={32} color="white">
          Bikun
        </Heading>
      </Flex>
    </Center>
  );
};

export default InitialLoadingPage;
