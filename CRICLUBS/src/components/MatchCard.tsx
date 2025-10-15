import { HStack, Image, Pressable, Text, View } from "@gluestack-ui/themed";
import { format, parse } from "date-fns";
import { MatchItem } from "../interfaces/matchCard";
import TeamCard from "./TeamCard";
const baseImgUrl = "https://cricclubs.com";
export default function MatchCard({ MatchItem }: { MatchItem: MatchItem }) {
  const {
    status,
    teamOneName,
    teamTwoName,
    overs,
    timeSinceLastUpdate,
    matchDate,
    seriesName,
    result,
    t1_logo_file_path,
    t2_logo_file_path,
    t1total,
    t2total,
  } = MatchItem;
  const parsedDate = parse(matchDate, "MM/dd/yyyy", new Date());
  const formatedMatchDate = format(parsedDate, "MMM dd, yyyy");
  return (
    <Pressable onPress={() => {}}>
      {({ pressed }) => (
        <View
          borderColor="#DEDEDE"
          borderWidth={1}
          bgColor="#FFFFFF"
          borderRadius={15}
          p={15}
          mt={10}
          transform={[{ scale: pressed ? 0.95 : 1 }]}
        >
          <HStack justifyContent="space-between">
            <Text color="#DD5828" fontFamily="Inter_600SemiBold" fontSize={12}>
              {seriesName}
            </Text>
            <HStack alignItems="center">
              {status !== "live" ? (
                <Image
                  source={require("../../assets/images/youtubeIcon.png")}
                  alt="icon"
                  mr={10.31}
                  h={17}
                  w={17.53}
                />
              ) : (
                ""
              )}
              <Text
                color={status === "live" ? "#F90505" : "#0CE481"}
                fontSize={12}
                fontFamily="Inter_600SemiBold"
              >
                {status === "live" ? `\u2022` + " Live" : "Completed"}
              </Text>
            </HStack>
          </HStack>
          <HStack mt={8}>
            <Text color="#737474" fontFamily="Inter_500Medium" fontSize={11}>
              {formatedMatchDate}
            </Text>
          </HStack>
          <TeamCard
            teamUrl={`${baseImgUrl}${t1_logo_file_path}`}
            teamName={teamOneName}
            score={t1total}
            overs={overs}
          />

          <TeamCard
            teamUrl={`${baseImgUrl}${t2_logo_file_path}`}
            teamName={teamTwoName}
            score={t2total}
            overs={overs}
          />
          <HStack justifyContent="space-between" alignItems="center">
            {result.length === 0 ? (
              <Text
                fontSize={9}
                fontFamily="Inter_500Medium"
                color="#737474"
                mt={10}
              >
                Last Scored{" "}
                <Text
                  fontSize={9}
                  fontFamily="Inter_600SemiBold"
                  color="#DD5828"
                >
                  {timeSinceLastUpdate}
                </Text>
              </Text>
            ) : (
              <Text
                fontSize={9}
                fontFamily="Inter_500Medium"
                color="#737474"
                mt={10}
              >
                {result}
              </Text>
            )}
            <Text color="#737474" fontFamily="Inter_500Medium" fontSize={9}>
              League
            </Text>
          </HStack>
        </View>
      )}
    </Pressable>
  );
}
