import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Pressable, Text, View, Box } from "@gluestack-ui/themed";
import { useAppDispatch } from "@/src/store/hooks";
import { logout } from "@/src/store/slices/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CustomDrawerContent(props: any) {
  const dispatch = useAppDispatch();

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      <View flex={1} p={20}>
        <Pressable
          onPress={async () => {
            await AsyncStorage.removeItem("@isLoggedIn");
            dispatch(logout());
          }}
        >
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
    </DrawerContentScrollView>
  );
}
