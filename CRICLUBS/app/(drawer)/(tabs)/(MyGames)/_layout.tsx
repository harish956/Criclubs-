import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="MyGamesScreen" options={{ headerShown: false }} />
      {/* <Stack.Screen name="MyGamesScreen" options={{ headerShown: false }} /> */}
    </Stack>
  );
}
