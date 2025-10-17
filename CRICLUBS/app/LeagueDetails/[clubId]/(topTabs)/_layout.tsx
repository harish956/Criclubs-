import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsHomeScreen from "./DetailsHomeScreen";
import MatchScreen from "./MatchScreen";
import { SafeAreaView } from "react-native-safe-area-context";

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

function LeagueTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={DetailsHomeScreen} />
      <Tab.Screen name="Match" component={MatchScreen} />
    </Tab.Navigator>
  );
}

export default function LeagueTabsLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Navigator>
        <Stack.Screen
          name="LeagueTabs"
          component={LeagueTabs}
          options={{
            title: "League Details",
          }}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
}
