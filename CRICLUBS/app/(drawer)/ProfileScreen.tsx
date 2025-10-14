import { View, Text, Pressable } from "@gluestack-ui/themed";
import { router } from "expo-router";
export default function ProfileScreen() {
  return (
    <View flex={1} justifyContent="center" alignItems="center">
      <Text>Profile Screen Content</Text>
      <Pressable
        onPress={() => router.replace("/(tabs)/ChatScreen")}
        style={{ padding: 10 }}
        bg="#007AFF"
        px={16}
        py={10}
        borderRadius={8}
        mt={10}
      >
        <Text color="white">Go to Chat</Text>
      </Pressable>
    </View>
  );
}
