import MatchCard from "@/src/components/MatchCard";
import { MatchItem } from "@/src/interfaces/matchCard";
import { matchList } from "@/src/matchesList";
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
      {/* <MatchCard
        TopText="2024 Bay Area U19 Trials"
        statusText="Live"
        // statusURL={require("../../../../../../../assets/images/matchStatusIcon.png")}
        date="Sep 27, 2024"
        time="4:04 PM"
        groundName="Ground Name"
        statusColor="#F90505"
        teamUrl1={require("../../../../../../../assets/images/delhiTeam.png")}
        teamName1="Delhi Capitals"
        score1="346/7"
        overs1="50"
        oversColor1="#605E5E"
        teamUrl2={require("../../../../../../../assets/images/kolkataTeam.png")}
        teamName2="Kolkata Knight Riders"
        score2="250/7"
        overs2="32.4"
        oversColor2="#DD5828"
        runsTime="18 mins ago"
        runsTimeText="Last Scored"
      />
      <MatchCard
        TopText="2024 Bay Area U19 Trials"
        statusText="Completed"
        statusURL={require("../../../../../../../assets/images/youtubeIcon.png")}
        date="Sep 27, 2024"
        time="4:04 PM"
        groundName="Ground Name"
        statusColor="#0CE481"
        teamUrl1={require("../../../../../../../assets/images/delhiTeam.png")}
        teamName1="Delhi Capitals"
        score1="346/7"
        overs1="50"
        oversColor1="#605E5E"
        teamUrl2={require("../../../../../../../assets/images/kolkataTeam.png")}
        teamName2="Kolkata Knight Riders"
        score2="250/7"
        overs2="32.4"
        oversColor2="#DD5828"
        runsTime="96 runs"
        runsTimeText="Delhi Capitals won by"
      />
      <MatchCard
        TopText="2024 Bay Area U19 Trials"
        statusText="Completed"
        statusURL={require("../../../../../../../assets/images/youtubeIcon.png")}
        date="Sep 27, 2024"
        time="4:04 PM"
        groundName="Ground Name"
        statusColor="#0CE481"
        teamUrl1={require("../../../../../../../assets/images/delhiTeam.png")}
        teamName1="Delhi Capitals"
        score1="346/7"
        overs1="50"
        oversColor1="#605E5E"
        teamUrl2={require("../../../../../../../assets/images/kolkataTeam.png")}
        teamName2="Kolkata Knight Riders"
        score2="250/7"
        overs2="32.4"
        oversColor2="#DD5828"
        runsTime="96 runs"
        runsTimeText="Delhi Capitals won by"
      />
      <MatchCard
        TopText="2024 Bay Area U19 Trials"
        statusText="Completed"
        statusURL={require("../../../../../../../assets/images/youtubeIcon.png")}
        date="Sep 27, 2024"
        time="4:04 PM"
        groundName="Ground Name"
        statusColor="#0CE481"
        teamUrl1={require("../../../../../../../assets/images/delhiTeam.png")}
        teamName1="Delhi Capitals"
        score1="346/7"
        overs1="50"
        oversColor1="#605E5E"
        teamUrl2={require("../../../../../../../assets/images/kolkataTeam.png")}
        teamName2="Kolkata Knight Riders"
        score2="250/7"
        overs2="32.4"
        oversColor2="#DD5828"
        runsTime="96 runs"
        runsTimeText="Delhi Capitals won by"
      /> */}
    </ScrollView>
  );
}
