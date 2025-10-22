import { Redirect } from "expo-router";
import { useAppSelector } from "@/src/store/hooks";

export default function Index() {
  const isLoggedIn = useAppSelector((state) => state.auth.loggedIn);

  if (isLoggedIn) {
    return <Redirect href="/(drawer)/(tabs)/HomeScreen" />;
  }

  return <Redirect href="/(auth)/LoginScreen" />;
}
