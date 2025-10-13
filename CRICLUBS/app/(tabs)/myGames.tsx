import { StyleSheet } from "react-native";
import { Box, Center, Image, View } from "@gluestack-ui/themed";
import { LeagueCard } from "@/components/LeagueCard";
const MyGames = () => {
  return (
    <View style={styles.container} w="100%" h="100%" bg="#D7D3D3">
      <Box bg="#286DAD" w="100%">
        <Center mt={24}>
          <Image
            source={require("../../assets/images/cricLogo.png")}
            style={{ width: 150, height: 23, marginBottom: 24 }}
            alt="logo"
          />
        </Center>
      </Box>
      <LeagueCard title="NorthWest Cricket League" location="Redmond USA" />
      <LeagueCard
        title="California Premier League"
        location="Los Angeles USA"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
export default MyGames;
