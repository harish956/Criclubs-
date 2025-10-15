import { LeagueCard } from "@/src/components/LeagueCard";
import { League } from "@/src/interfaces/LeagueCard";
import { setClubList } from "@/src/store/slices/clubSlice";
import { clubsList } from "@/src/utils/data/clubsList";
import { FlatList, Text, View } from "@gluestack-ui/themed";
import { useCallback, useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";

const MyGames = () => {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(true);
  const clubsData = useSelector((state) => state.club.clubs);

  useEffect(() => {
    setTimeout(() => {
      dispatch(setClubList(clubsList));
      setLoading(false);
    }, 2000);
  }, []);

  const renderItem = useCallback(
    ({ item, index }: { item: League; index: number }) => {
      return (
        <LeagueCard league={item} style={{ marginTop: index === 0 ? 10 : 0 }} />
      );
    },
    []
  );

  if (isLoading) {
    return (
      <View flex={1} justifyContent="center" alignItems="center">
        <ActivityIndicator size={"large"} />
      </View>
    );
  }
  return clubsData?.length > 0 ? (
    <View flex={1}>
      <FlatList
        data={clubsList}
        renderItem={renderItem}
        keyExtractor={(item: propsType) => item.clubId}
      />
    </View>
  ) : (
    <Text>Not Data</Text>
  );
};

export default MyGames;
