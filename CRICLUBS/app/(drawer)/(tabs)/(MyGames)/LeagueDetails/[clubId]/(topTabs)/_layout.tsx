import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import DetailsHomeScreen from "./DetailsHomeScreen";
import MatchScreen from "./MatchScreen";
export default function LeagueTabsLayout() {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={DetailsHomeScreen} />
      <Tab.Screen name="Match" component={MatchScreen} />
    </Tab.Navigator>
  );
}
