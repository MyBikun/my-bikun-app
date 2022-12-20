import { Ionicons } from "@expo/vector-icons";
import * as Location from 'expo-location';
import { Box, Button, Flex, Text } from "native-base";
import { useEffect } from "react";
import { BackHandler, Dimensions } from "react-native";
import MapView from "react-native-maps";
import Wrapper from "../components/Wrapper";
import { fireDb } from "../firebase";

const stopSharing = (props, isHardButton) => {
  const {laneId, vehicleId} = props.route.params;
  fireDb.collection('vehicles')
    .doc(vehicleId.trim())
    .update({
      isActive: false
    })
    .then(() => {
      if (!isHardButton) {
        props.navigation.goBack();
      }
    })
};

const ChangeRouteButton = (props) => {
  return (
    <Button
      backgroundColor="yellow.500"
      mx="4"
      mb="8"
      shadow="4"
      onPress={() => stopSharing(props, false)}
    >
      <Text fontSize="md" fontWeight="medium" color="white">
        Berhenti Mengendarai
      </Text>
    </Button>
  );
};

const ShareBikunLocationMaps = (props) => {
  const {laneId, vehicleId} = props.route.params;

  useEffect(() => {
    
  BackHandler.addEventListener("hardwareBackPress", () => stopSharing(props, true));

  Location.watchPositionAsync({
      enableHighAccuracy: true,
    }, location => {
      if (location?.coords?.latitude && location?.coords?.longitude) {
        fireDb.collection('vehicles')
        .doc(vehicleId.trim())
        .update({
          'currentPosition': {
            latitude: location?.coords?.latitude,
            longitude: location?.coords?.longitude
          },
          isActive: true,
          currentLane: laneId
        })
        .then(() => {
        })
      }
    })
  }, []);
  
  return (
    <Wrapper
      noPadding
      bottomButton={<ChangeRouteButton {...props} />}
      {...props}
    >
      <Flex position="absolute" zIndex="2" w="full" alignItems="center">
        <Box backgroundColor="info.200" borderRadius="lg" p="3" mt="4">
          <Flex direction="row" alignItems="center">
            <Ionicons name="information-circle" color="#0369a1" size={24} />
            <Text ml="2" fontWeight="medium" fontSize="md">
              Membagikan Lokasi
            </Text>
          </Flex>
          <Text ml="8">
            Anda sedang membagikan lokasi kepada pengguna aplikasi.
          </Text>
        </Box>
      </Flex>
      <MapView
        initialRegion={{
          latitude: -6.364,
          longitude: 106.828,
          latitudeDelta: 0.018,
          longitudeDelta: 0.018,
        }}
        showsUserLocation={true}
        style={{
          width: "100%",
          height: Dimensions.get("window").height,
        }}
      >
      </MapView>
    </Wrapper>
  );
};

export default ShareBikunLocationMaps;
