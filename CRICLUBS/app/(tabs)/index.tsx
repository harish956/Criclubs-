import { HStack } from "@/components/ui/hstack";
import { Box } from "@/components/ui/box";
// import { Text } from "@/components/ui/text";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView
      style={{ flex: 1 }}
      edges={["top", "left", "right"]}
      className="p-10"
    >
      <HStack className="justify-between">
        <Text className="text-2xl font-bold">Home</Text>
        <Text className="text-2xl font-bold">Test</Text>
      </HStack>
    </SafeAreaView>
  );
}
