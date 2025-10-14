import { HStack, Image, Pressable } from "@gluestack-ui/themed";
import { router } from "expo-router";

export default function CustomHeader() {
  return (
    // <HStack bg="#286DAD" w="100%" alignItems="center">
    //   <Pressable
    //     onPress={() => {
    //       router.replace("/(drawer)/ProfileScreen");
    //     }}
    //   >
    //     {({ pressed }) => {
    //       return (
    //         <Image
    //           style={{ transform: [{ scale: pressed ? 0.95 : 1 }] }}
    //           source={require("../../assets/images/drawerIcon.png")}
    //           h={12}
    //           w={16}
    //           mr={19}
    //           alt="drawerIcon"
    //         />
    //       );
    //     }}
    //   </Pressable>
    <Image
      source={require("../../assets/images/cricLogo.png")}
      style={{ width: 150, height: 23 }}
      alt="logo"
    />
    // </HStack>
  );
}
