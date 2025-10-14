import { clubsList } from "@/src/clubsList";
import { LeagueCard } from "@/src/components/LeagueCard";
import { League } from "@/src/interfaces/LeagueCard";
import { FlatList, View } from "@gluestack-ui/themed";
import { useCallback } from "react";
const MyGames = () => {
  const renderItem = useCallback(({ item, index }: { item: League }) => {
    return (
      <LeagueCard league={item} style={{ marginTop: index === 0 ? 10 : 0 }} />
    );
  }, []);

  return (
    <View flex={1}>
      <FlatList
        data={clubsList}
        renderItem={renderItem}
        keyExtractor={(item: propsType) => item.clubId}
      />
    </View>
  );
};

export default MyGames;
