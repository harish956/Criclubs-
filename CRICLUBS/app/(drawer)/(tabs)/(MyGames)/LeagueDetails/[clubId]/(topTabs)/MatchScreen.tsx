import { Center, Text } from "@gluestack-ui/themed";
import { useLocalSearchParams } from "expo-router";
export default function MatchScreen() {
  const { clubId } = useLocalSearchParams();
  console.log(clubId);
  return (
    <Center>
      <Text>Hi {clubId} This is Home Screen</Text>
    </Center>
  );
}
