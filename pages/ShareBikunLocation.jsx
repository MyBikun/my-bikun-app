import { Ionicons } from "@expo/vector-icons";
import { Box, Button, CheckIcon, Flex, Select, Text } from "native-base";
import { useContext, useEffect, useState } from "react";
import Wrapper from "../components/Wrapper";
import { AuthContext } from "../contexts/AuthContext";
import { fireDb } from "../firebase";

const ShareBikunLocation = (props) => {
  const [jalur, setJalur] = useState("");
  const { email } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [vehicleId, setVehicleId] = useState('');

  useEffect(() => {
    fireDb.collection('users').where('email', '==', email)
    .get().then(querySnapshot => {
      querySnapshot.forEach(documentSnapshot => {
        console.log('woit');
        console.log(documentSnapshot);
      })
      console.log(vehicleId);
      setIsLoading(false);
    })
  });

  return (
    <Wrapper
      {...props}
      bottomButton={
        <Button
          backgroundColor="yellow.500"
          shadow="4"
          mx="8"
          mb="8"
          onPress={() => props.navigation.push("ShareBikunLocationMaps")}
        >
          <Text fontSize="md" fontWeight="medium" color="white">
            Bagikan Lokasi
          </Text>
        </Button>
      }
    >
      <Box borderColor="info.700" borderWidth="1" borderRadius="lg" p="3">
        <Flex direction="row" alignItems="center">
          <Ionicons name="information-circle" color="#0369a1" size={24} />
          <Text ml="2" fontWeight="medium" fontSize="md">
            Membagikan Lokasi
          </Text>
        </Flex>
        <Text ml="8">
          Dengan menekan “Kemudikan Bikun”, maka Anda akan langsung membagikan
          lokasi kepada pengguna aplikasi.
        </Text>
      </Box>
      <Box
        borderWidth="1"
        borderColor="muted.300"
        rounded="sm"
        p="3"
        backgroundColor="white"
        mt="4"
      >
        <Select
          selectedValue={jalur}
          minWidth="200"
          accessibilityLabel="Pilih Jalur"
          placeholder="Pilih Jalur"
          _selectedItem={{
            bg: "yellow.500",
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={(jalur) => setJalur(jalur)}
        >
          <Select.Item label="Jalur Lurus" value="JalurLurus" />
          <Select.Item label="Jalur Belok" value="JalurBelok" />
        </Select>
      </Box>
    </Wrapper>
  );
};

export default ShareBikunLocation;
