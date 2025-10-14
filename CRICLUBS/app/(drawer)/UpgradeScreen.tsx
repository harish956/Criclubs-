import { View, Text, Pressable } from "@gluestack-ui/themed";
import { router } from "expo-router";
export default function UpgradeScreen() {
  return (
    <View flex={1} justifyContent="center" alignItems="center">
      <Text>Upgrade Screen Content</Text>
      <Pressable
        onPress={() => router.back()}
        style={{ padding: 10 }}
        bg="#007AFF"
        px={16}
        py={10}
        borderRadius={8}
        mt={10}
      >
        <Text color="white">Go Back</Text>
      </Pressable>
    </View>
  );
}
