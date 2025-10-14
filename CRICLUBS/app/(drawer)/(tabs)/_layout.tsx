import CustomHeader from "@/src/components/CustomHeader";
import { Image, Pressable } from "@gluestack-ui/themed";
import { DrawerActions } from "@react-navigation/native";
import { Tabs, useNavigation } from "expo-router";
import React from "react";

export default function TabLayout() {
  const drawer = useNavigation();

  return (
    <Tabs
      screenOptions={{
        headerTitle: () => <CustomHeader />,
        headerLeft: () => {
          return (
            <Pressable
              onPress={() => {
                drawer.dispatch(DrawerActions.openDrawer());
              }}
            >
              {({ pressed }) => {
                return (
                  <Image
                    style={{ transform: [{ scale: pressed ? 0.95 : 1 }] }}
                    source={require("../../../assets/images/drawerIcon.png")}
                    h={12}
                    w={16}
                    mr={19}
                    ml={17}
                    alt="drawerIcon"
                  />
                );
              }}
            </Pressable>
          );
        },
        headerStyle: { backgroundColor: "#286DAD" },
        tabBarActiveTintColor: "#286DAD",
        tabBarInactiveTintColor: "#737474",
        tabBarLabelStyle: {
          fontSize: 10,
          fontFamily: "Inter_500Medium",
        },
      }}
    >
      <Tabs.Screen
        name="HomeScreen"
        options={{
          title: "Home",
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <Image
              h={20}
              w={20}
              source={
                focused
                  ? require("../../../assets/images/active-home.png")
                  : require("../../../assets/images/home.png")
              }
              alt="home"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="MyGamesScreen"
        options={{
          title: "My Games",
          tabBarLabel: "My Games",
          tabBarIcon: ({ focused }) => (
            <Image
              h={20}
              w={20}
              source={
                focused
                  ? require("../../../assets/images/cup.png")
                  : require("../../../assets/images/active-cup.png")
              }
              alt="home"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="InternationalScreen"
        options={{
          title: "Home",
          tabBarLabel: "International",
          tabBarIcon: ({ focused }) => (
            <Image
              h={20}
              w={20}
              source={
                focused
                  ? require("../../../assets/images/active-flash.png")
                  : require("../../../assets/images/flash.png")
              }
              alt="home"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="ChatScreen"
        options={{
          title: "Chat",
          tabBarLabel: "Chat",
          tabBarIcon: ({ focused }) => (
            <Image
              h={20}
              w={20}
              source={
                focused
                  ? require("../../../assets/images/active-message-text.png")
                  : require("../../../assets/images/message-text.png")
              }
              alt="home"
            />
          ),
        }}
      />
    </Tabs>
  );
}
