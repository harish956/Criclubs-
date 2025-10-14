import { Drawer } from "expo-router/drawer";
import React from "react";

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        drawerStyle: { backgroundColor: "#f5f5f5", width: 250 },
        drawerActiveTintColor: "#007AFF",
        drawerInactiveTintColor: "#000",
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: () => null,
          title: undefined,
          drawerItemStyle: { height: 0 },
        }}
      />
      <Drawer.Screen name="ProfileScreen" options={{ title: "Profile" }} />
      <Drawer.Screen name="SettingsScreen" options={{ title: "Settings" }} />
      <Drawer.Screen name="UpgradeScreen" options={{ title: "Upgrade" }} />
    </Drawer>
  );
}
