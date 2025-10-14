import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import DetailsHomeScreen from "./DetailsHomeScreen";
import MatchScreen from "./MatchScreen";
export default function LeagueTabsLayout() {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarContentContainerStyle: null,
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={DetailsHomeScreen}
        options={{}}
      />
      <Tab.Screen name="MatchScreen" component={MatchScreen} />
    </Tab.Navigator>
  );
}
