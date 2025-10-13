import { Tabs } from "expo-router";
import React from "react";
import { Image } from "@gluestack-ui/themed";
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Image
              h={20}
              w={20}
              source={require("../../assets/images/home.png")}
              alt="home"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="myGames"
        options={{
          title: "My Games",
          tabBarLabel: "My Games",
          tabBarIcon: ({ color, size }) => (
            <Image
              h={20}
              w={20}
              source={require("../../assets/images/cup.png")}
              alt="home"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="international"
        options={{
          title: "Home",
          tabBarLabel: "International",
          tabBarIcon: ({ color, size }) => (
            <Image
              h={20}
              w={20}
              source={require("../../assets/images/flash.png")}
              alt="home"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          tabBarLabel: "Chat",
          tabBarIcon: ({ color, size }) => (
            <Image
              h={20}
              w={20}
              source={require("../../assets/images/message-text.png")}
              alt="home"
            />
          ),
        }}
      />
    </Tabs>
  );
}
