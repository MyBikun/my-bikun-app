import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { extendTheme, NativeBaseProvider } from "native-base";
import { useEffect, useState } from "react";
import BikunMaps from "./pages/BikunMaps";
import Home from "./pages/Home";
import InitialLoadingPage from "./pages/InitialLoadingPage";
import LogIn from "./pages/LogIn";
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
const Drawer = createDrawerNavigator();

const DrawerScreens = () => (
  <Drawer.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="Home"
  >
    <Drawer.Screen name="Home" component={Home} />
    <Drawer.Screen
      name="LogIn"
      component={LogIn}
      initialParams={{ title: "Log In" }}
    />
  </Drawer.Navigator>
);

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
            initialRouteName="Drawer"
          >
            <Stack.Screen name="Drawer" component={DrawerScreens} />
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
            <Stack.Screen
              name="BikunMaps"
              component={BikunMaps}
              initialParams={{ title: "Lacak Bikun" }}
            />
          </Stack.Navigator>
        )}
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
