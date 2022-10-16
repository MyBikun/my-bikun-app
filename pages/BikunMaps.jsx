import { Button, Text } from "native-base";
import { Dimensions } from "react-native";
import MapView from "react-native-maps";
import Wrapper from "../components/Wrapper";

const ChangeRouteButton = ({ navigation }) => {
  return (
    <Button
      backgroundColor="yellow.500"
      mx="4"
      mb="8"
      shadow="4"
      onPress={navigation.goBack}
    >
      <Text fontSize="md" fontWeight="medium" color="white">
        Ubah Jalur
      </Text>
    </Button>
  );
};

const BikunMaps = (props) => {
  return (
    <Wrapper
      noPadding
      bottomButton={<ChangeRouteButton {...props} />}
      {...props}
    >
      <MapView
        initialRegion={{
          latitude: -6.364,
          longitude: 106.828,
          latitudeDelta: 0.018,
          longitudeDelta: 0.018,
        }}
        style={{
          width: "100%",
          height: Dimensions.get("window").height,
        }}
      />
    </Wrapper>
  );
};

export default BikunMaps;
