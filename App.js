import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { extendTheme, NativeBaseProvider } from "native-base";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import InitialLoadingPage from "./pages/InitialLoadingPage";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";

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

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
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
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>
        {loading && !fontsLoaded ? (
          <InitialLoadingPage />
        ) : (
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName="Home"
          >
            <Stack.Screen
              name="Home"
              component={Home}
              initialParams={{ title: "Beranda" }}
            />
            <Stack.Screen
              name="News"
              component={News}
              initialParams={{ title: "Berita" }}
            />
            <Stack.Screen
              name="NewsDetail"
              component={NewsDetail}
              initialParams={{ title: "Berita" }}
            />
          </Stack.Navigator>
        )}
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
