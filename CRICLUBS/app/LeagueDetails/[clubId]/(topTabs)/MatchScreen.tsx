import MatchCard from "@/src/components/MatchCard";
import { MatchItem } from "@/src/interfaces/matchCard";
import { matchList } from "@/src/utils/data/matchesList";
import { useLocalSearchParams } from "expo-router";
import { FlatList } from "react-native";
import { useCallback } from "react";
export default function MatchScreen() {
  const { clubId } = useLocalSearchParams();

  console.log(clubId);

  const renderItem = useCallback(({ item }: { item: MatchItem }) => {
    return <MatchCard MatchItem={item} />;
  }, []);

  return (
    <FlatList
      data={matchList as MatchItem[]}
      renderItem={renderItem}
      keyExtractor={(item: MatchItem) => item.matchId.toString()}
    />
  );
}
