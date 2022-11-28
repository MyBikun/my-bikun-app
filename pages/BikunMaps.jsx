import { Button, Text } from "native-base";
import { useEffect, useState } from "react";
import { ActivityIndicator, Dimensions, View } from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";
import Wrapper from "../components/Wrapper";
import { fireDb } from "../firebase";

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

const BikunMaps = ({navigation, route}) => {
  const [stations, setStations] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const {laneId} = route.params;

  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
      let res = [];
      fireDb.collection('stations').where('laneId', '==', laneId)
      .get().then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          res.push(documentSnapshot.data());
        })
        setStations(res);
        setIsLoading(false);
      })
      
      const subscriber = fireDb.collection('vehicles').where('isActive', '==', true)
      .onSnapshot(querySnapshot => {
        let vehiclesRes = [];
        querySnapshot.forEach(documentSnapshot => {
          vehiclesRes.push(documentSnapshot.data());
        })
        setVehicles(vehiclesRes);
      })

      return () => subscriber();
  }, []);


  if (isLoading) {
    return <ActivityIndicator />
  }

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
      >
        {stations.map((marker, idx) => {
          return ( <Marker coordinate={{latitude: Number(marker['lat']), longitude: Number(marker['lon'])}} ><Callout><View><Text>{marker['name']}</Text></View></Callout></Marker>);
        })}

        {vehicles.map((marker, idx) => {
       
          return ( <Marker pinColor={'green'} coordinate={{latitude: marker?.currentPosition?.latitude, longitude: marker?.currentPosition?.longitude}} />);
        })}
      </MapView>
    </Wrapper>
  )
};

export default BikunMaps;
