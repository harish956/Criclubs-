import { useAppDispatch } from "@/src/store/hooks";
// eslint-disable-next-line import/no-unresolved
import { logout } from "@/src/store/slices/authSlice";
import { Box, Pressable, Text, View } from "@gluestack-ui/themed";
import { router } from "expo-router";

export default function ChatScreen() {
  const dispatch = useAppDispatch();
  return (
    <View flex={1} justifyContent="center" alignItems="center">
      <Text mb="$4">Chat Screen</Text>
      <Pressable onPress={() => dispatch(logout())}>
        {({ pressed }) => (
          <Box
            transform={[{ scale: pressed ? 0.95 : 1 }]}
            bg="#007AFF"
            borderRadius={8}
            px={16}
            py={10}
            mt={15}
          >
            <Text color="white" fontWeight="bold" textAlign="center">
              Logout
            </Text>
          </Box>
        )}
      </Pressable>
    </View>
  );
}
