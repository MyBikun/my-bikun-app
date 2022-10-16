import { Entypo, Ionicons } from "@expo/vector-icons";
import { Box, Button, Flex, Text } from "native-base";
import { useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import Wrapper from "../components/Wrapper";

const ShareBikunLocation = (props) => {
  const [jalur, setJalur] = useState("");

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
        <RNPickerSelect
          onValueChange={(value) => setJalur(value)}
          placeholder={{
            label: "Pilih Jalur",
            value: null,
            color: "#A3A3A3",
          }}
          Icon={() => <Entypo name="chevron-down" size={16} color="#D4D4D4" />}
          value={jalur}
          items={[
            { label: "Jalur Lurus", value: "JalurLurus", color: "#000000" },
            { label: "Jalur Belok", value: "JalurBelok" },
          ]}
        />
      </Box>
    </Wrapper>
  );
};

export default ShareBikunLocation;
