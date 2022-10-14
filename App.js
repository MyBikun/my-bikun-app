import { NativeBaseProvider, extendTheme, Text } from "native-base";
import InitialLoadingPage from "./components/InitialLoadingPage";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";

const theme = extendTheme({
  fontConfig: {
    Montserrat: {
      400: {
        normal: "Montserrat-Regular",
      },
      500: {
        normal: "Montserrat-Medium",
      },
      700: {
        normal: "Montserrat-Bold",
      },
      800: {
        normal: "Montserrat-ExtraBold",
      },
    },
  },
  fonts: {
    heading: "Montserrat",
    body: "Montserrat",
  },
});

export default function App() {
  const _ = useFonts({
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-ExtraBold": require("./assets/fonts/Montserrat-ExtraBold.ttf"),
  });

  // Imitate loading time
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <NativeBaseProvider theme={theme}>
      {loading ? <InitialLoadingPage /> : <Text>Loaded</Text>}
    </NativeBaseProvider>
  );
}
