import { LeagueCard } from "@/src/components/LeagueCard";
import { League } from "@/src/interfaces/LeagueCard";
import { useAppSelector } from "@/src/store/hooks";
import { setClubList } from "@/src/store/slices/clubSlice";
import { clubsList } from "@/src/utils/data/clubsList";
import { Text, View } from "@gluestack-ui/themed";
import { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, FlatList } from "react-native";
import { useDispatch } from "react-redux";

const MyGames = () => {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(true);
  const clubsData = useAppSelector((state) => state.club.clubs);

  useEffect(() => {
    setTimeout(() => {
      dispatch(setClubList(clubsList));
      setLoading(false);
    }, 1000);
  }, [dispatch]);

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
        data={clubsData as League[]}
        renderItem={renderItem}
        keyExtractor={(item: League) => item.clubId.toString()}
      />
    </View>
  ) : (
    <Text>Data is Not Available</Text>
  );
};

export default MyGames;
