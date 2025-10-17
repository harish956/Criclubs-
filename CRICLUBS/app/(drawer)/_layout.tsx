import CustomDrawerContent from "@/src/components/CustomDrawerContent";
import { Drawer } from "expo-router/drawer";
export default function DrawerLayout() {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: { backgroundColor: "#f5f5f5", width: 250 },
        drawerActiveTintColor: "#007AFF",
        drawerInactiveTintColor: "#000",
        headerShown: false,
      }}
    />
  );
}
