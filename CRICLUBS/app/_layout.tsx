import { store } from "@/src/store/store";
import { Provider } from "react-redux";
import { useAppDispatch, useAppSelector } from "@/src/store/hooks";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { login } from "@/src/store/slices/authSlice";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { config } from "@gluestack-ui/config";
import { GluestackUIProvider, View } from "@gluestack-ui/themed";


function AppInitializer() {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector((state) => state.auth.loggedIn);
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_500Medium,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });
  
  const [isLoading, setIsLoading] = useState(true);

    const checkLogin = async () => {
      try {
        const value = await AsyncStorage.getItem("@isLoggedIn");
        if (value === "true") 
          dispatch(login())
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };
  useEffect(() => {
    checkLogin();
  }, [dispatch]);

  if (!fontsLoaded || isLoading) {
    return (
      <View flex={1} justifyContent="center" alignItems="center">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen name="(drawer)" />
      </Stack.Protected>

      <Stack.Protected guard={!isLoggedIn}>
        <Stack.Screen name="(auth)/LoginScreen" />
      </Stack.Protected>
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <Provider store={store}>
      <GluestackUIProvider config={config}>
        <AppInitializer />
      </GluestackUIProvider>
    </Provider>
  );
}
