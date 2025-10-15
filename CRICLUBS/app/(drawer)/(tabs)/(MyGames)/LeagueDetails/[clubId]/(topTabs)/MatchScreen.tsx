import MatchCard from "@/src/components/MatchCard";
import { MatchItem } from "@/src/interfaces/matchCard";
import { matchList } from "@/src/utils/data/matchesList";
import { FlatList, ScrollView } from "@gluestack-ui/themed";
import { useLocalSearchParams } from "expo-router";
import { useCallback } from "react";

export default function MatchScreen() {
  const { clubId } = useLocalSearchParams();

  console.log(clubId);

  const renderItem = useCallback(({ item }: { item: MatchItem }) => {
    return <MatchCard MatchItem={item} />;
  }, []);

  return (
    <ScrollView p={13}>
      <FlatList
        data={matchList}
        renderItem={renderItem}
        keyExtractor={(item: MatchItem) => item.matchId}
      />
    </ScrollView>
  );
}
