import { Center } from "native-base";
import { Image } from 'react-native';

const InitialLoadingPage = () => {
  return (
    <Center h="full" backgroundColor="yellow.500">
      <Image style={{ width: 240, height: 240 }} source={require("../assets/images/bus-stop.png")} alt="Bus Stop Image" />
      <Image style={{ width: 240, height: 60, position: "absolute", bottom: 64 }} source={require("../assets/images/logo.png")} alt="logo" />
    </Center>
  );
};

export default InitialLoadingPage;
